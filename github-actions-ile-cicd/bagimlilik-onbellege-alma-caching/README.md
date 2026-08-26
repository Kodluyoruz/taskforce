# Bağımlılık Önbelleğe Alma (Dependency Caching)

CI/CD pipeline'ında geçirdiğin zamanın büyük bölümü genellikle tek bir yerde gider: bağımlılıkları ağdan indirmek. Bunu çözmek için GitHub Actions'ın sunduğu cache mekanizmasını kullanırsın.

## Neden Cache Kullanmalıyız?

Her `push` veya `pull_request` tetiklemesinde runner sıfırdan başlar. Temiz bir ortam, yeniden üretilebilirlik açısından harika — ama bağımlılıklar için acı verici.

Somut rakamlarla düşün:

- Orta büyüklükte bir Node.js projesi için `npm ci` 30–60 saniye sürer, onlarca MB indirir.
- Günde 20 workflow çalışması olduğunu varsay: 20 × 45 saniye = **15 dakika** sadece bağımlılık indirmesine gider.
- Bir haftalık takvimde bu 1.5 saatten fazla boşa harcanan CI süresidir.

Cache ile ilk çalışmadan sonra bu süreyi birkaç saniyeye indirebilirsin. Hem paralel iş sayısı artar hem de aylık GitHub Actions dakika tüketimin düşer.

---

## actions/cache Nasıl Çalışır?

`actions/cache` action'ı iki aşamada çalışır:

**1. Restore aşaması (job başlarken):**

- Verdiğin `key` değerini GitHub'ın cache deposuyla karşılaştırır.
- Tam eşleşme (cache hit) varsa, cache içeriğini belirttiğin `path`'e geri yükler — ağa çıkmaz.
- Tam eşleşme yoksa `restore-keys` listesini sırayla dener; prefix eşleşmesi bulursa en son oluşturulan cache'i partial olarak geri yükler (cache miss, ama kısmi restore).
- Hiçbir şey eşleşmezse `path` boş kalır, bağımlılıklar sıfırdan indirilir.

**2. Save aşaması (job başarıyla tamamlanınca):**

- `key` ile bir cache miss yaşandıysa, job bitiminde `path` içeriği yeni bir cache olarak kaydedilir.
- Exact key match olmuşsa (cache hit) yeni cache yaratılmaz — aynı key ile üzerine yazamazsın, key'ler immutable'dır.

---

## key Parametresi ve hashFiles()

Cache'in işe yaraması için `key`'in doğru kurgulanması gerekir. Hem spesifik olmalı ki yanlış cache restore etmesin, hem de stabil olmalı ki gereksiz yere miss yemesin.

```yaml
# runner.os + package-lock.json hash'i ile benzersiz bir key oluştur
key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
```

İki bileşeni açalım:

- **`runner.os`**: `Linux`, `Windows` veya `macOS` döner. Farklı işletim sistemlerinde derlenen native modüller birbirine karışmasın diye her OS için ayrı cache tutarsın.
- **`hashFiles('**/package-lock.json')`**: Belirttiğin glob pattern'iyle eşleşen tüm dosyaların SHA-256 hash'ini hesaplar ve tek bir string döner. `package-lock.json` değişmediği sürece hash sabittir → aynı key → cache hit. Lock dosyası değişince hash değişir → yeni key → cache miss → yeni bağımlılıklar indirilir ve yeni cache kaydedilir.

Bu ikili yapı şunu garanti eder: tam olarak aynı bağımlılık setini tekrar kullandığında cache'ten gelir; bağımlılık ekleyip kaldırınca otomatik olarak yenilenir.

---

## restore-keys ile Fallback

Lock dosyası değiştiğinde exact match yok — ama sıfırdan başlamak zorunda da değilsin. `restore-keys` ile en yakın eski cache'i alıp üstüne sadece değişen paketleri indirirsin.

```yaml
# Tam eşleşme yoksa runner.os-node- prefix'iyle başlayan
# en son cache'i bul ve geri yükle
restore-keys: |
  ${{ runner.os }}-node-
```

Nasıl çalışır:

1. Exact key bulunamadı.
2. `Linux-node-` prefix'iyle eşleşen tüm cache'lere bakılır.
3. En son oluşturulan alınır, `path`'e restore edilir.
4. `npm ci` çalıştırılınca `node_modules` zaten büyük ölçüde dolu olduğu için sadece eklenip kaldırılan paketler işlenir.
5. Job bitiminde yeni key ile güncel cache kaydedilir.

`restore-keys` birden fazla satır kabul eder — en spesifik prefix'ten en genele doğru sırala.

---

## Tam Örnek: npm Cache

Aşağıdaki adım bloğu npm workflow'larına olduğu gibi eklenebilir:

```yaml
steps:
  - uses: actions/checkout@v4

  # npm global cache dizinini (~/.npm) önbelleğe al
  - name: npm cache'i geri yükle
    uses: actions/cache@v4
    with:
      # npm'in paket tarball'larını sakladığı dizin
      path: ~/.npm
      # lock dosyası değişince yeni cache oluşur
      key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
      # exact match yoksa prefix eşleşmesiyle en güncel cache'i al
      restore-keys: |
        ${{ runner.os }}-node-

  - name: Bağımlılıkları yükle
    run: npm ci

  - name: Testleri çalıştır
    run: npm test
```

`~/.npm`, npm'in tarball'ları ve metadata'yı sakladığı global cache dizinidir. `npm ci` bu dizini kontrol eder; tarball varsa ağa çıkmaz, sadece `node_modules`'a açar. Bu yüzden `node_modules`'u değil `~/.npm`'i cache'liyoruz — daha taşınabilir ve güvenilir.

---

## setup-node'un Yerleşik Cache Kısayolu

`actions/cache`'i manuel kurmak yerine `actions/setup-node` action'ının dahili cache desteğini kullanabilirsin. Daha az kod, aynı sonuç:

```yaml
steps:
  - uses: actions/checkout@v4

  - name: Node.js kur ve npm cache'ini etkinleştir
    uses: actions/setup-node@v4
    with:
      node-version: '20'
      # 'npm', 'yarn' veya 'pnpm' yazabilirsin
      # setup-node arka planda actions/cache'i çağırır
      cache: 'npm'

  - name: Bağımlılıkları yükle
    run: npm ci

  - name: Build al
    run: npm run build
```

`cache: 'npm'` yazdığında `setup-node`:

- Doğru `path`'i (`~/.npm`) otomatik belirler.
- `package-lock.json`'u temel alarak `key` oluşturur.
- `restore-keys` fallback'ini ekler.

Yarn kullanıyorsan `cache: 'yarn'`, pnpm kullanıyorsan `cache: 'pnpm'` yazman yeterli. Bu yaklaşım resmi olarak önerilen yöntemdir.

---

## Cache Hit vs Miss

Cache'in ne yaptığını anlamak için `cache-hit` output'unu kullanabilirsin:

```yaml
steps:
  - name: Cache'i geri yükle
    id: cache-npm  # Bu id ile output'a erişeceğiz
    uses: actions/cache@v4
    with:
      path: ~/.npm
      key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
      restore-keys: |
        ${{ runner.os }}-node-

  # cache-hit true ise npm ci'ı atla, false ise çalıştır
  - name: Bağımlılıkları yükle (sadece cache miss'te)
    if: steps.cache-npm.outputs.cache-hit != 'true'
    run: npm ci
```

Davranış özeti:

| Durum | Ne Olur | Post-job'da |
|---|---|---|
| **Cache hit** | Exact key eşleşti, `path` restore edildi | Yeni cache kaydedilmez |
| **Partial restore** | `restore-keys` eşleşti, eski cache geldi | Yeni key ile cache kaydedilir |
| **Cache miss** | Hiçbir şey eşleşmedi, `path` boş | Job bitince yeni cache kaydedilir |

`steps.<id>.outputs.cache-hit` değeri yalnızca exact key match durumunda `'true'` döner. Partial restore (restore-keys ile) olsa bile `'true'` dönmez.

---

## Cache Limitleri ve Eviction

Sınırsız değil; bilmen gerekenler:

- **Depo başına 10 GB** varsayılan limit.
- **7 gün erişilmeyen cache** otomatik olarak silinir — aktif kullanmadığın cache'ler kaybolur.
- **Limit aşılınca** en eski (son erişim tarihine göre) cache'ler silinerek yer açılır.
- **Key immutable**: Aynı key'e ikinci kez yazamazsın. Branch veya PR başına farklı key oluşur, bu yüzden her branch kendi cache'ini oluşturur.
- **Branch erişim kuralları**: Bir branch, parent branch'in cache'ine erişebilir. PR base branch cache'i de görünür. Ama sibling branch'lerin cache'lerine erişilemez.

Hassas verileri (token, secret, özel anahtar) asla cache'e koyma. Read access'i olan herkes bir PR aracılığıyla cache içeriğine ulaşabilir.

---

## Özet

Caching eklemek birkaç satır YAML ile dakikalar kazandırır. Temel strateji:

1. `actions/setup-node` kullanıyorsan `cache: 'npm'` ekle — başka bir şey yapma.
2. Daha fazla kontrol istiyorsan `actions/cache@v4` ile `key` = `runner.os + hashFiles(lock file)` kur.
3. `restore-keys` ile fallback ekle, partial restore'dan faydalanacaksın.
4. Cache'i asla secret depolamak için kullanma.
