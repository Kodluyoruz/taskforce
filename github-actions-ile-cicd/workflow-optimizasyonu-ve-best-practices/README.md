# Workflow Optimizasyonu ve Best Practices

GitHub Actions'ı kullanmaya başladıkça fark edersin: çalışan bir workflow yazmak ayrı iş, onu hızlı, güvenli ve sürdürülebilir hale getirmek ayrı iş. Bu topic'te production ortamında karşılacağın gerçek problemlere odaklanıyoruz — gereksiz tetiklemeler, yavaş build süreleri, güvenlik açıkları ve debug karmaşası.

## Hız Optimizasyonu

### paths Filtresiyle Gereksiz Tetiklemeleri Azalt

Her `push`'ta tüm pipeline'ı çalıştırmak hem zaman kaybı hem de özellikle private repo'larda maliyet. `paths` filtresi sayesinde workflow'u yalnızca ilgili dosyalar değiştiğinde tetikleyebilirsin.

Örnek: Backend CI'ın sadece `README.md` değişince çalışmasına gerek yok.

```yaml
# Sadece backend klasörü değişince CI tetiklensin
on:
  push:
    branches: [main, develop]
    paths:
      - 'backend/**'       # backend altındaki her şey
      - 'package.json'     # bağımlılık dosyası değişince de tetikle
      - '!backend/docs/**' # ama backend/docs altındakiler hariç
  pull_request:
    paths:
      - 'backend/**'
      - 'package.json'
```

`paths-ignore` ile tersini de yapabilirsin — belirli dosyalar dışında her şeyde tetikle:

```yaml
on:
  push:
    paths-ignore:
      - '**.md'       # markdown dosyası değişince tetikleme
      - 'docs/**'     # docs klasörü değişince tetikleme
      - '.github/CODEOWNERS'
```

### Paralel Job'lar

Lint, test ve build gibi birbirinden bağımsız adımları tek bir job içinde sıraya dizmek yerine parallel job'lara bölebilirsin. Toplam süre, en uzun job kadar olur — hepsinin toplamı değil.

```yaml
jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20', cache: 'npm' }
      - run: npm ci && npm run lint

  test:
    runs-on: ubuntu-latest    # lint ve test paralel çalışır
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20', cache: 'npm' }
      - run: npm ci && npm test

  build:
    runs-on: ubuntu-latest
    needs: [lint, test]       # lint ve test geçmeden build başlamaz
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20', cache: 'npm' }
      - run: npm ci && npm run build
```

`needs` ile job bağımlılığı kuruyorsun: `build` job'ı `lint` ve `test` başarıyla bitince başlar. Ama `lint` ve `test` birbirini beklemez — aynı anda çalışır.

### Cache Stratejisi

`setup-node`, `setup-python` gibi action'ların `cache` parametresi en basit cache yöntemi. Arka planda `actions/cache` kullanır, key stratejisini otomatik halleder.

```yaml
# Node.js — package-lock.json hash'i üzerinden cache key oluşturulur
- uses: actions/setup-node@v4
  with:
    node-version: '20'
    cache: 'npm'        # ya da 'yarn', 'pnpm'

# Python — requirements.txt üzerinden
- uses: actions/setup-python@v5
  with:
    python-version: '3.12'
    cache: 'pip'
```

Daha ince kontrol gerekiyorsa `actions/cache` doğrudan kullanılır:

```yaml
- name: Bağımlılık cache'i
  uses: actions/cache@v4
  with:
    path: |
      ~/.npm
      node_modules        # node_modules'u da cache'le
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-node-   # tam eşleşme yoksa prefix ile ara
```

`restore-keys` önemli: `package-lock.json` değiştiğinde tam cache miss yerine önceki cache'i partial restore eder, `npm ci` sadece delta'yı indirir.

## Güvenlik Best Practices

### permissions Bloğunu Kısıtla

Bir workflow oluşturduğunda GitHub, varsayılan olarak geniş izinler verir. Bu izinler `GITHUB_TOKEN`'ın neler yapabileceğini belirler. `permissions` bloğuyla minimum gerekli izni tanımla:

```yaml
# Workflow seviyesinde genel kısıtlama
permissions:
  contents: read       # Sadece okuma izni
  pull-requests: write # PR yorum yazabilsin

jobs:
  security-scan:
    runs-on: ubuntu-latest
    permissions:
      contents: read          # job seviyesinde daha da daraltabilirsin
      security-events: write  # SARIF sonuçları yükleyebilsin
    steps:
      - uses: actions/checkout@v4
      # ...
```

Job seviyesinde tanımlanan `permissions`, workflow seviyesindekini override eder. Bu sayede her job yalnızca kendi işi için gereken izne sahip olur.

Sık kullanılan permission scope'ları:

| Scope | Kullanım |
|---|---|
| `contents: read` | Repo içeriğini okuma |
| `pull-requests: write` | PR'a yorum, label ekleme |
| `packages: write` | GitHub Packages'a publish |
| `id-token: write` | OIDC ile cloud provider auth |

### Üçüncü Parti Action'ları SHA ile Sabitle

Tag'ler mutable'dır — bir action yazarı `v4` tag'ini başka bir commit'e işaret edecek şekilde güncelleyebilir (ya da hesabı ele geçirilebilir). SHA kullanmak bu supply chain riskini ortadan kaldırır.

```yaml
# Güvensiz — tag değişebilir
- uses: actions/checkout@v4

# Güvenli — commit SHA sabittir
- uses: actions/checkout@11bd71901bbe5b1630ceea73d27597364c9af683
```

SHA'yı manuel takip etmek zahmetli görünebilir. Bunun için Dependabot'u devreye alabilirsin — `.github/dependabot.yml` dosyasına GitHub Actions update config eklemen yeterli:

```yaml
# .github/dependabot.yml
version: 2
updates:
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "weekly"    # haftalık SHA güncellemesi için PR açar
```

Dependabot her güncel SHA için PR açar, CI geçince merge edersin. Hem güvenli hem de otomatik.

### Secret Güvenliği Özeti

Secret'ları doğru kullanmak birkaç temel kurala bağlı:

```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy
        env:
          API_KEY: ${{ secrets.API_KEY }}   # env üzerinden geç
        run: ./scripts/deploy.sh            # script içinde $API_KEY kullan

      # YANLIŞ — komut argümanı olarak geçirme, log'a düşebilir
      # - run: ./scripts/deploy.sh ${{ secrets.API_KEY }}
```

Fork PR'larında dikkat: fork'dan gelen `pull_request` event'inde secret'lar geçmez — bu kasıtlı bir güvenlik önlemi. Eğer fork PR'larında secret gerektiren adım varsa `pull_request_target` event'ini ve dikkatli bir güvenlik modelini araştır.

## Workflow Debug Etme

### Debug Log'larını Aktifleştirme

GitHub Actions iki ayrı debug modu sunuyor. Her ikisi de repository secret veya variable olarak tanımlanır:

- **`ACTIONS_RUNNER_DEBUG`** = `true` → Runner altyapı log'ları aktif olur. Runner'ın job'ı nasıl execute ettiğine dair ek log dosyaları üretilir; bunları workflow run archive'ından `runner-diagnostic-logs` klasörü içinde indirebilirsin.

- **`ACTIONS_STEP_DEBUG`** = `true` → Her step için çok daha ayrıntılı log çıktısı. Step log'larında normalde görünmeyen debug event'leri görünür hale gelir.

İkisi aynı anda aktif olabilir. Secret ve variable olarak ikisi de tanımlanmışsa secret öncelik kazanır.

### Re-run with Debug Logs

Secret tanımlamadan da debug modunu tek bir çalıştırma için aktifleştirebilirsin. Actions sekmesinde ilgili workflow run'ına git → "Re-run all jobs" butonuna tıkla → açılan modal'da **"Enable debug logging"** checkbox'ını işaretle → "Re-run jobs" de. Bu re-run için her iki debug modu da aktif olur, kalıcı bir secret tanımlamana gerek kalmaz.

### Workflow Command'lar

Kendi step'lerinden log sistemine mesaj göndermek için özel syntax kullanıyorsun:

```yaml
- name: Debug bilgisi
  run: |
    echo "::debug::Bu sadece debug mode'da görünür"
    echo "::notice::Bilgilendirme mesajı"
    echo "::warning::Uyarı mesajı"
    echo "::error::Hata mesajı"

    # Dosya ve satır bilgisi de ekleyebilirsin
    echo "::error file=src/app.ts,line=42::Tip hatası burada"

    # Output variable set etmek için
    echo "VERSION=1.2.3" >> $GITHUB_OUTPUT

    # Step summary'e markdown yaz
    echo "## Build Sonucu" >> $GITHUB_STEP_SUMMARY
    echo "Build başarıyla tamamlandı." >> $GITHUB_STEP_SUMMARY
```

`::debug::` mesajları yalnızca `ACTIONS_STEP_DEBUG` aktifken görünür — log kirliliği olmadan ayrıntılı bilgi bırakmak için idealdir.

## Maliyet Yönetimi

GitHub-hosted runner kullanımı public repo'larda ücretsiz, private repo'larda dakika bazlı ücretlendirilir. Birkaç nokta dikkat çeker:

**Runner maliyetleri eşit değil.** Windows ve macOS runner'lar Linux'tan sırasıyla 2x ve 10x daha pahalı. Test matrisinde macOS zorunlu değilse Linux tercih et.

**Trigger stratejisi önemli.** `on: push` (branch filtresi olmadan) her branch'teki her push'ta workflow çalıştırır. Çok sayıda feature branch varsa bu maliyet hızla artar.

```yaml
# Dikkatli trigger tasarımı
on:
  pull_request:
    branches: [main, develop]    # sadece bu branch'lere açılan PR'larda
  push:
    branches: [main]             # sadece main'e push'ta

  # DEĞİL: on: push (filtre yok = her branch'te çalışır)
```

**Cache gerçekten fark yaratır.** `npm ci` her run'da bağımlılıkları indirir — cache aktifken bu indirme adlamlanır. Hem süre hem de network kaynaklı gecikme azalır. Dakika tüketimi düşer.

**Concurrency ile mükerrer run'ları engelle.** Aynı branch'e hızlı arka arkaya push geldiğinde eski run'ları iptal edebilirsin:

```yaml
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true   # yeni run gelince eskiyi iptal et
```

PR'larda bu özellikle işe yarar: her yeni commit önceki CI run'ını otomatik iptal eder.

## Workflow Tasarım Prensipleri

Birkaç yüz satırlık workflow dosyaları bakımı güçleştiriyor. Şu prensipleri baştan benimsemek bu durumu engeller:

**Tek sorumluluk.** CI ayrı workflow, deploy ayrı workflow, release ayrı workflow. Tek dosyada her şeyi toplamak kısa vadede kolay görünür, uzun vadede karmaşıklaşır.

**Reusable workflow ile bölünme.** Birden fazla workflow'da aynı job bloğunu tekrarlıyorsan `.github/workflows/reusable-*.yml` dosyasına taşı, `workflow_call` ile çağır.

**Erken cache'leme.** Sık değişen bağımlılıklar (npm, pip) mümkün olan ilk adımda cache'lenmeli. Job'un ilerleyen adımlarına bırakmak cache'in faydasını azaltır.

**Secrets minimum scope.** Environment-level secret, repo-level secret'tan daha kısıtlayıcıdır. Production secret'larını yalnızca production environment'ına atamak en temiz yaklaşım.

**Workflow dosyası küçük, action büyük.** Karmaşık logic'i inline `run:` bloklarına yazmak yerine composite action ya da script dosyasına taşı. Workflow dosyası orkestrasyon görevi görmeli, iş mantığı içermemeli.

## Sık Karşılaşılan Hatalar ve Çözümleri

**"Resource not accessible by integration"**
`GITHUB_TOKEN`'ın yeterli izni yok. Workflow veya job seviyesine `permissions:` bloğu ekle, eksik scope'u belirt.

**Cache miss her zaman**
`key` stratejisi yanlış kurgulanmış olabilir. `hashFiles()` argümanının doğru dosyayı gösterdiğini kontrol et. `restore-keys` prefix'i tanımlayarak partial hit'i de değerlendir.

**Job hiç başlamıyor**
İki olasılık: `needs:` içinde ismi yanlış yazmışsın (typo) ya da `if:` koşulu hiçbir zaman `true` olmuyor. Workflow görsel grafiğinde job'ın neden skip edildiğine bakabilirsin.

**Secret tanımsız görünüyor (boş string geliyor)**
Scope kontrolü yap — environment secret tanımladıysan job'da `environment:` belirtmen gerekir. Repo secret ile karıştırma. Fork PR'larında secret zaten geçmez — bu bir bug değil, tasarım gereği.

**`uses:` action bulunamıyor**
SHA ile sabitlenmiş bir action'ı `@` sonrasını SHA yerine branch adıyla kullanmaya çalışıyorsan sorun burada olabilir. Ayrıca private repo'daki custom action'lar için `PAT` veya app token gerekebilir.
