# Artifact'ları Kaydetme ve İndirme

Bir workflow çalışırken runner üzerinde dosyalar üretilir: derlenmiş uygulama, test raporu, code coverage çıktısı, log dosyası. Job tamamlanınca runner sıfırlanır ve bu dosyaların hepsi kaybolur. Artifact mekanizması tam bu noktada devreye girer — üretilen dosyaları GitHub'a yükler, hem UI'dan indirilebilir hem de aynı workflow'daki başka job'lardan erişilebilir hale getirir.

---

## Artifact Nedir?

Artifact, bir workflow çalışması sırasında üretilen ve dışarıya aktarılmak istenen her türlü dosyadır. Yaygın örnekler:

- **Build çıktısı:** `dist/`, `build/`, derlenmiş binary
- **Test raporu:** JUnit XML, HTML coverage raporu
- **Log dosyası:** uzun süren işlemlerin çıktısı
- **Paket:** `.jar`, `.zip`, `.whl` gibi dağıtılabilir dosyalar

Runner'lar **ephemeral** (geçici) ortamlardır. Her job kendi izole runner'ında çalışır ve job bitince o runner yok edilir. Eğer dosyayı artifact olarak kaydetmezsen, bir sonraki job o dosyaya erişemez — hatta aynı workflow içindeki iki job bile birbirinin dosyasını göremez.

Artifact'lar:
- GitHub sunucularında saklanır
- Varsayılan olarak **90 gün** tutulur (`retention-days` ile değiştirilebilir)
- Repo → Actions → İlgili workflow çalışması ekranından zip olarak indirilebilir
- Aynı workflow'daki diğer job'lardan `download-artifact` ile alınabilir

---

## actions/upload-artifact

Dosyaları GitHub'a yüklemek için `actions/upload-artifact@v4` action'ını kullanırsın.

```yaml
steps:
  - name: Build çıktısını kaydet
    uses: actions/upload-artifact@v4
    with:
      name: dist-dosyalari    # Artifact'ın adı — download'da bu isimle erişilir
      path: dist/             # Kaydet bu dizini
      retention-days: 7       # 7 gün sonra silinir (varsayılan: 90)
```

### Parametreler

**`name`**
Artifact'a verdiğin tanımlayıcı. Download step'inde ve GitHub UI'da bu isim görünür. Aynı workflow run içinde aynı ismi iki kez kullanamazsın — v4'te artifact'lar immutable'dır, yani bir kez yüklenen artifact üzerine yazılamaz.

**`path`**
Ne yükleyeceğini belirtir. Esnek bir söz dizimine sahip:

```yaml
# Tek dosya
path: build/app.jar

# Klasörün tamamı
path: dist/

# Glob pattern
path: reports/**/*.xml

# Birden fazla path
path: |
  dist/
  reports/

# Hariç tutma (! ile)
path: |
  dist/
  !dist/**/*.map
```

**`retention-days`**
Artifact'ın kaç gün saklanacağını belirler. Varsayılan 90 gündür. Repo veya organization ayarlarında belirlenen üst sınırı `retention-days` aşamaz — public repo'larda bu sınır 90 gün, private repo'larda 400 güne kadar çıkabilir.

---

## actions/download-artifact

Yüklenmiş bir artifact'ı indirmek için `actions/download-artifact@v4` kullanırsın.

```yaml
steps:
  - name: Build çıktısını indir
    uses: actions/download-artifact@v4
    with:
      name: dist-dosyalari    # Hangi artifact indirilsin
      path: dist/             # Nereye çıkarsın
```

### Parametreler

**`name`** belirtilmezse workflow run'daki **tüm artifact'lar** indirilir. Her biri kendi adıyla bir alt klasöre çıkar:

```
./dist-dosyalari/
./test-raporlari/
./coverage/
```

**`path`** belirtilmezse artifact, step'in çalıştığı dizine (`$GITHUB_WORKSPACE`) çıkarılır.

---

## Job'lar Arası Veri Aktarımı

Artifact'ların en yaygın kullanım senaryosu: bir job'da derleme yap, başka bir job'da o çıktıyı kullan. `needs` keyword'ü ile job sıralamasını belirler, artifact ile de veriyi aktarırsın.

```yaml
name: Build ve Deploy

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'          # npm bağımlılıkları cache'lenir (artifact değil)

      - name: Bağımlılıkları yükle ve derle
        run: npm ci && npm run build

      - name: Test raporunu çalıştır
        run: npm test -- --coverage

      - name: Build çıktısını artifact olarak yükle
        uses: actions/upload-artifact@v4
        with:
          name: dist            # deploy job'u bu isimle indirecek
          path: dist/
          retention-days: 7     # Deploy sonrası uzun süre saklamaya gerek yok

      - name: Coverage raporunu yükle
        uses: actions/upload-artifact@v4
        with:
          name: coverage-report
          path: coverage/
          retention-days: 30

  deploy:
    needs: build                # build job'u tamamlanmadan bu job başlamaz
    runs-on: ubuntu-latest
    steps:
      - name: Build çıktısını indir
        uses: actions/download-artifact@v4
        with:
          name: dist            # build job'unda yüklenen artifact
          path: dist/

      - name: Deploy et
        run: |
          echo "dist/ klasörü hazır, deploy başlıyor..."
          ls -la dist/
          # Gerçek senaryoda: rsync, AWS S3 sync, kubectl apply, vs.
```

Bu örnekte iki kritik nokta var:

1. `needs: build` — deploy job'u, build job'u başarıyla tamamlanmadan **çalışmaya başlamaz**. Artifact henüz yüklenmemişken download yapmaya çalışmaz.
2. İki job farklı runner'larda çalışır. Artifact olmasaydı `dist/` klasörü deploy job'unda var olmazdı.

---

## GitHub UI'dan Artifact İndirme

Bir workflow çalışmasında üretilen artifact'ları tarayıcıdan da indirebilirsin:

1. Repo sayfasında **Actions** sekmesine gir.
2. İncelemek istediğin workflow çalışmasına tıkla.
3. Sayfanın altındaki **Artifacts** bölümüne bak.
4. İstediğin artifact'ın adına tıkla — tarayıcı bir `.zip` dosyası indirir.

Zip açılınca orijinal dosya yapısı restore edilir. Klasör yüklediysen klasör, tek dosya yüklediysen tek dosya çıkar.

---

## Boyut Limitleri

| Sınır | Değer |
|---|---|
| Tek artifact boyutu | 10 GB |
| Artifact depolama kotası | Plana göre: Free 500 MB · Pro 1 GB · Team 2 GB · Enterprise 50 GB |
| Varsayılan retention | 90 gün (public: 1–90 gün, private: 1–400 gün; repo/org ayarıyla değiştirilebilir) |

10 GB oldukça yüksek bir limit — normal build çıktıları için sorun yaratmaz. Ancak video dosyası veya büyük model ağırlığı gibi özel durumlar için başka bir depolama çözümü (S3, GCS) daha uygun olur.

---

## Cache vs Artifact Farkı

İkisi de dosyaları job'lar arasında taşıyabilir ama amaçları farklı:

| | Cache | Artifact |
|---|---|---|
| **Amaç** | Build hızlandırma | Dosya kalıcılığı ve paylaşımı |
| **Ömrü** | 7 gün (inaktif kalırsa silinir) | 90 gün varsayılan (plana göre max 400 gün) |
| **Job'lar arası** | ✓ | ✓ |
| **UI'dan indirme** | ✗ | ✓ |
| **Immutable** | ✗ (key değişirse güncellenir) | ✓ (v4'te üzerine yazılamaz) |
| **Örnek kullanım** | `node_modules`, `.gradle`, pip cache | `dist/`, `test-report.xml`, `.jar` |

Kural basit: **tekrar tekrar indirdiğin bağımlılıklar için cache**, **workflow'un ürettiği ve saklamak istediğin dosyalar için artifact** kullan.

Bazı durumlarda ikisini birlikte kullanırsın: npm bağımlılıklarını `actions/cache` ile hızlandırır, build çıktısını `actions/upload-artifact` ile bir sonraki job'a taşırsın.

---

## Sık Yapılan Hatalar

**1. `needs` belirtmeyi unutmak**

Download yapan job, upload yapan job'a `needs` ile bağlı değilse race condition oluşur — artifact henüz yüklenmemişken download denenir ve hata alırsın.

**2. Aynı artifact adını iki kez kullanmak**

v4'te artifact'lar immutable. Aynı `name` ile iki kez upload yaparsan ikinci upload hata verir. Farklı isimler kullan ya da matris build'lerde `name` içine matrix değişkenini ekle:

```yaml
- uses: actions/upload-artifact@v4
  with:
    name: build-${{ matrix.node-version }}   # Her matrix job'u farklı isim kullanır
    path: dist/
```

**3. `retention-days` değerini yanlış ayarlamak**

Geçici amaçlarla (örneğin job'lar arası veri aktarımı) kullandığın artifact'lar için varsayılan 90 günü bırakmak gereksiz yer kaplar. `retention-days: 1` veya `retention-days: 7` gibi kısa değerler belirlemek daha temiz bir pratiktir.
