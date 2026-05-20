# Node.js Projesi için CI Pipeline

GitHub Actions ile bir Node.js projesine CI pipeline kurmak, kod kalitesini ve güvenilirliği artırmanın en pratik yollarından biri. Her push veya pull request'te otomatik olarak lint, test ve build adımları çalışır — hata varsa merge'den önce yakalanır. Bu konuda sıfırdan eksiksiz bir pipeline kuracaksın.

---

## Hazırlık: Varsayılan Node.js Proje Yapısı

Pipeline'ı yazarken belirli bir proje yapısını varsayıyoruz. Aşağıdaki yapı standart bir Node.js projesini temsil eder:

```
my-node-app/
├── package.json
├── package-lock.json
├── src/
│   └── index.js
└── tests/
    └── index.test.js
```

`package.json` içinde şu script'lerin tanımlı olduğunu kabul ediyoruz:

```json
{
  "scripts": {
    "lint": "eslint src/",
    "test": "jest",
    "build": "tsc"
  }
}
```

Bu üç script olmadan pipeline'daki `lint`, `test` ve `build` adımları çalışmaz. Proje yapın farklıysa script isimlerini buna göre güncelle.

Bir de `package-lock.json` dosyasının repoda commit'li olması şart. Bu dosya olmadan ilerleyen bölümlerde anlatacağımız `npm ci` komutu hata verir.

---

## actions/checkout ve actions/setup-node

Her CI workflow'u iki temel action ile başlar: `actions/checkout` ve `actions/setup-node`. Bunlar olmadan runner'ın ne koduna ne de doğru Node sürümüne erişimi olur.

### actions/checkout@v4

Runner, GitHub'daki repo içeriğine otomatik olarak erişemez. `actions/checkout@v4` action'ı repoyu runner üzerindeki çalışma dizinine klonlar. Bu adım atlanırsa sonraki tüm adımlar başarısız olur çünkü çalıştırılacak kod yoktur.

```yaml
- name: Repoyu klonla
  uses: actions/checkout@v4
```

### actions/setup-node@v4

Runner'larda Node.js kurulu olsa bile hangi sürümün kullanılacağını sen belirlemek zorundasın. `actions/setup-node@v4` action'ı belirttiğin Node.js sürümünü kurar ve PATH'e ekler.

**`node-version` parametresi** — hangi Node sürümünü kullanacağını açıkça belirtir:

```yaml
- name: Node.js kurulumu
  uses: actions/setup-node@v4
  with:
    node-version: '20'   # Tam sürüm, major veya '20.x' formatında da çalışır
```

**`.nvmrc` veya `package.json`'dan okuma** — sürümü kod tabanındaki bir dosyadan otomatik okutabilirsin:

```yaml
- name: Node.js kurulumu (.nvmrc'den)
  uses: actions/setup-node@v4
  with:
    node-version-file: '.nvmrc'   # ya da 'package.json' (engines.node alanını okur)
```

Bu yaklaşım, sürümü tek bir yerde yönetmeni sağlar. Hem local geliştirme ortamın hem de CI aynı sürümü kullanır.

**`cache: 'npm'` kısayolu** — bağımlılık kurulum süresini ciddi ölçüde kısaltır. `setup-node`, `node_modules` yerine npm'in global cache'ini (`~/.npm`) saklar ve sonraki run'larda `npm ci` bu cache'i kullanır:

```yaml
- name: Node.js kurulumu (cache ile)
  uses: actions/setup-node@v4
  with:
    node-version: '20'
    cache: 'npm'   # ~/.npm dizinini otomatik cache'ler
```

Cache key, `package-lock.json`'ın hash'ine göre oluşturulur. Lock dosyası değişmediği sürece cache geçerliliğini korur.

---

## npm ci vs npm install

CI ortamında bağımlılık yükleme komutunu doğru seçmek kritik.

### npm ci

`npm ci` (clean install), CI/CD ortamları için tasarlanmıştır:

- `package-lock.json`'daki tam sürümleri kullanır — başka bir sürüm yüklenmez
- Önce mevcut `node_modules`'ü tamamen siler, sonra sıfırdan kurar
- `package-lock.json` dosyasını asla güncellemez; dosya yoksa hata verir
- `npm install`'a göre genellikle daha hızlıdır

```bash
npm ci
```

Bu komut sayesinde her CI run'unda aynı bağımlılıklar aynı sürümlerle kurulur. "Bende çalışıyordu" sorunlarının önüne geçer.

### npm install

`npm install`, geliştirici makinelerinde kullanılan standarttır:

- `package.json`'daki semver aralıklarına göre bağımlılıkları çözer
- Uyumlu yeni sürümler varsa `package-lock.json`'ı günceller
- `node_modules` varsa sadece eksikleri ekler

CI'da `npm install` kullanmak tehlikelidir çünkü bir bağımlılığın yeni patch sürümü pipeline'da farklı davranabilir ve bu fark local'de tekrarlanamaz. Lock dosyası varsa onu yoksay, yoksa oluştur — bu belirsizlik CI için kabul edilemez.

**Kural basit: CI'da her zaman `npm ci`, local geliştirmede `npm install`.**

---

## Tam CI Pipeline

Aşağıdaki workflow, bir Node.js projesinde temel CI adımlarını eksiksiz çalıştırır. Her satırı açıklayan Türkçe yorumlar dahil edildi:

```yaml
name: Node.js CI

# Push ve PR'larda çalışır — sadece main branch'i izler
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  ci:
    runs-on: ubuntu-latest   # GitHub'ın sunduğu ücretsiz Linux runner

    steps:
      # Adım 1: Repo içeriğini runner'a klonla
      - name: Repoyu klonla
        uses: actions/checkout@v4

      # Adım 2: Doğru Node.js sürümünü kur, npm cache'ini etkinleştir
      - name: Node.js 20 kurulumu
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'        # npm cache otomatik yönetilir

      # Adım 3: Bağımlılıkları deterministik olarak yükle
      - name: Bağımlılıkları yükle
        run: npm ci            # Deterministik kurulum — lock dosyasına göre

      # Adım 4: Kod kalitesini ve stil uyumunu kontrol et
      - name: Lint kontrolü
        run: npm run lint      # ESLint veya benzeri bir linter

      # Adım 5: Unit ve integration testlerini çalıştır
      - name: Testleri çalıştır
        run: npm test          # Jest, Mocha, Vitest, vb.

      # Adım 6: Production artifact'ı oluştur
      - name: Üretim build'i al
        run: npm run build     # TypeScript derleme, bundle, vb.
```

Bu dosyayı `.github/workflows/ci.yml` olarak kaydet. GitHub, `.github/workflows/` dizinindeki YAML dosyalarını otomatik olarak tanır.

---

## Her Adımın Önemi

Pipeline'daki her adım belirli bir sorunu çözmek için var. Birini kaldırırsan ne kaybedersin?

**checkout** — Bu adım olmadan runner'ın çalışma dizini boştur. Sonraki tüm adımlar `package.json` bulamaz, `npm ci` çalışmaz, lint'e dosya veremezsin. Her workflow'un ilk adımı budur.

**setup-node** — Ubuntu runner'larında Node.js kurulu olsa bile hangi major sürümün aktif olduğunu bilemezsin. Bu adım olmadan projenin gerektirdiği Node sürümüyle uyumsuz bir ortamda çalışıyor olabilirsin. `node-version: '20'` diyerek sürümü sabitlemek, "şimdi çalıştı, yarın çalışmadı" problemlerini ortadan kaldırır.

**npm ci** — Geliştirici makinelerde zaman içinde bağımlılıklar güncellenir, `node_modules` kirlenir. CI'da her run sıfırdan başlar. `npm ci` bu temiz başlangıcı lock dosyasına sadık kalarak garanti eder.

**lint** — Syntax hataları, kullanılmayan import'lar, tutarsız kod stili gibi sorunları testlerden önce yakalar. Lint hızlıdır; test suite dakikalar sürerken lint saniyeler içinde biter. Merge'den önce hızlı geri bildirim verir.

**test** — Fonksiyonel doğruluk buradan geçer. Unit testler, integration testler — tüm otomatik testler bu adımda çalışır. Bir özellik kırılmışsa CI bunu PR'ı merge etmeden söyler.

**build** — Özellikle TypeScript projeleri için kritik. Lint ve testler geçse bile TypeScript derleme hatası olabilir. Build adımı, production'a gönderilecek artifact'ın gerçekten oluşturulabildiğini kanıtlar.

---

## Başarısız Adımı Anlamak

Bir step başarısız olduğunda workflow o noktada durur ve sonraki adımlar çalışmaz. Hatayı bulmak için:

**Actions sekmesine git** — Reponda "Actions" tab'ını aç. Sol panelden ilgili workflow run'ını seç.

**Başarısız job'a tıkla** — Kırmızı X ile işaretlenmiş job'u görürsün. Üzerine tıklayınca adım adım log açılır.

**Başarısız step'i genişlet** — Kırmızı X ile işaretlenmiş step'i genişlet. Tam hata çıktısını buradan okursun.

**Exit code'ları anlamak:**
- `exit code 0` — adım başarılı
- `exit code 1` veya sıfır dışı herhangi bir değer — adım başarısız

Örneğin `npm run lint` komutu ESLint hata bulduğunda `exit code 1` döndürür. Bu GitHub Actions'ın step'i başarısız saymasını tetikler ve workflow durur. Lint output'unda tam olarak hangi dosyanın hangi satırında ne hatası var görebilirsin.

Bazen hata bir önceki adımdan kaynaklanır. Örneğin `npm ci` başarısız olmuşsa `lint` adımı `node_modules` bulamadığı için zaten çalışmazdı. Her zaman başarısız olan ilk adıma bak.

---

## Pull Request'te CI Sonuçları

CI'nın en değerli kullanım alanı pull request akışıdır. Bir PR açıldığında veya yeni commit push'landığında workflow otomatik tetiklenir.

**Check'leri görmek** — PR sayfasının alt kısmında, merge butonunun üzerinde check listesi görünür. Her job bir check olarak gösterilir. Yeşil tik geçti, kırmızı X başarısız demektir. Bir check'in yanındaki "Details" linkine tıklayınca doğrudan Actions log'una gidersin.

**Required checks ile merge'i kilitlemek** — Repo'nun "Settings > Branches" kısmından branch protection rule oluşturabilirsin. "Require status checks to pass before merging" seçeneğini etkinleştirip CI job'unu required check olarak ekle. Bunun ardından:

- CI geçmeden merge butonu aktif olmaz
- Repository yöneticisi bile bu kuralı bypass etmek zorunda kalır (veya bilinçli olarak override etmek için ayrı bir izin gerekir)
- Force push gibi tehlikeli işlemler de kısıtlanabilir

**Neden önemli?** Bir ekip çalışırken herkesin main branch'e doğrudan push yapmasını engellemek ve her değişikliğin CI'dan geçmesini zorunlu kılmak, kod tabanının her zaman çalışır durumda kalmasını sağlar. "Testten geçmeden merge yok" kuralı ekip disiplinini araç düzeyinde uygular.

---

Bu pipeline'ı kendi projene uyarlarken dikkat etmen gereken tek şey: `package.json`'daki script isimlerinin YAML'daki `npm run <script>` komutlarıyla örtüşmesi. Proje `lint` yerine `eslint` diyorsa ya script adını değiştir ya da YAML'ı güncelle. Geri kalan her şey evrensel olarak çalışır.
