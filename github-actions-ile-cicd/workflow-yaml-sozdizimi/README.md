# Workflow YAML Sözdizimi — Temelden

GitHub Actions workflow'ları `.github/workflows/` klasörü altında YAML dosyaları olarak tanımlanır. Bu dosyalar hangi olaylarda tetikleneceğini, hangi job'ların çalışacağını ve her job içinde hangi adımların atılacağını belirtir. Bu konuda her anahtar kelimeyi tek tek ele alıp gerçekçi örneklerle pekiştireceğiz.

## YAML Girintileme Kuralları

YAML'da girinti, sözdiziminin bir parçasıdır — yanlış girintileme dosyanın geçersiz olmasına ya da beklenmedik davranışlara yol açar. GitHub Actions dosyalarında şu kurala uymak zorundasın:

- **2 boşluk** kullan, sekme (tab) karakteri kullanma.
- Her iç içe eleman bir öncekine göre 2 boşluk girintili olmalı.
- Liste elemanları `-` ile başlar ve `-` karakterinden sonra bir boşluk bırakılır.

```yaml
# DOĞRU — 2 boşluk girinti
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

# YANLIŞ — sekme kullanımı veya tutarsız girinti dosyayı bozar
jobs:
	build:         # TAB karakteri — geçersiz!
    runs-on: ubuntu-latest
```

Editörünü YAML dosyaları için "spaces: 2, insertSpaces: true" olarak ayarla. VS Code kullanıyorsan sağ alt köşedeki "Spaces: 2" seçeneği bu iş için yeterli.

---

## `name` — Workflow Adı

`name`, workflow'un GitHub arayüzünde "Actions" sekmesinde görünen başlığıdır. Tanımlanmazsa GitHub dosya yolunu (örn. `.github/workflows/ci.yml`) gösterir — okunaksız olur, her zaman belirt.

```yaml
# Actions sekmesinde "CI Pipeline" olarak görünür
name: CI Pipeline
```

---

## `run-name` — Çalışma Adı

`run-name`, bireysel her workflow çalışmasının listede görünen adını belirler. Expression desteklediği için kimin hangi branch'e push yaptığını, hangi ortama deploy edildiğini gibi dinamik bilgileri ada ekleyebilirsin.

```yaml
name: Deploy

# Her çalışma "alperen tarafından production'a deploy" gibi görünür
run-name: ${{ github.actor }} tarafından ${{ inputs.ortam }}'a deploy
```

`github.actor` o an workflow'u tetikleyen kullanıcının adını verir. `inputs` ise `workflow_dispatch` ile manuel tetiklemede girilen parametreleri taşır.

---

## `on` — Tetikleyici Tanımı

`on`, workflow'un hangi GitHub olaylarında başlatılacağını belirtir. Tek bir olay, birden fazla olay ya da olay konfigürasyonu şeklinde yazabilirsin.

### Tek Event

```yaml
# Yalnızca push olayında tetiklenir
on: push
```

### Çoklu Event

```yaml
# Push veya pull_request açıldığında tetiklenir
on: [push, pull_request]
```

### Event Konfigürasyonu

Olayları filtrelerle daraltabilirsin. En sık kullanılanlar `branches`, `paths` ve `types`'tır.

```yaml
on:
  push:
    # Yalnızca main ve release/** branch'lerine push olduğunda çalışır
    branches:
      - main
      - "releases/**"
    # Yalnızca src/ altında değişiklik varsa çalışır
    paths:
      - "src/**"

  pull_request:
    # Sadece opened, synchronize ve reopened olaylarında tetiklenir
    types: [opened, synchronize, reopened]

  # Zamanlanmış tetikleyici — UTC ile her gün 08:00'de
  schedule:
    - cron: "0 8 * * *"

  # Manuel tetikleme — Actions sekmesinden "Run workflow" butonu
  workflow_dispatch:
```

`branches` filtresi glob desenleri destekler. `"releases/**"` ifadesi `releases/v1`, `releases/v2.0` gibi tüm alt yolları kapsar.

---

## `jobs` — Job Koleksiyonu

`jobs` anahtarı altında bir veya birden fazla iş tanımlanır. Her job bir ID ile başlar ve varsayılan olarak paralel çalışır.

```yaml
jobs:
  # Job ID'leri küçük harf, tire veya alt çizgi içerebilir
  build:
    runs-on: ubuntu-latest
    steps:
      - run: echo "Build job"

  test:
    runs-on: ubuntu-latest
    steps:
      - run: echo "Test job"
```

---

## `jobs.<id>.runs-on` — Runner Seçimi

Her job'un hangi sanal makinede (runner) çalışacağını belirtir. GitHub'ın sunduğu hosted runner'lar için en yaygın değerler:

```yaml
jobs:
  linux-job:
    # Ubuntu'nun en güncel LTS sürümü
    runs-on: ubuntu-latest

  windows-job:
    # Windows Server runner
    runs-on: windows-latest

  mac-job:
    # macOS runner — iOS/macOS build için gerekli
    runs-on: macos-latest
```

Kendi altyapında self-hosted runner kullanıyorsan `runs-on: self-hosted` ya da etiket listesi yazabilirsin:

```yaml
jobs:
  custom-job:
    runs-on: [self-hosted, linux, x64]
```

---

## `jobs.<id>.needs` — Job Bağımlılığı

`needs` ile job'lar arasında sıralı bağımlılık kurarsın. Belirtilen job(lar) başarıyla tamamlanmadan bu job başlamaz.

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - run: npm run build

  test:
    # test job'u, build tamamlanmadan başlamaz
    needs: build
    runs-on: ubuntu-latest
    steps:
      - run: npm test

  deploy:
    # deploy job'u hem build hem test bitmeden başlamaz
    needs: [build, test]
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploy ediliyor..."
```

`needs` ile oluşturulan bağımlılık zinciri, başarısız bir job olduğunda aşağı akışı otomatik durdurur — ekstra kontrol yazman gerekmez.

---

## `jobs.<id>.if` — Koşullu Job Çalıştırma

`if` ile bir job'un yalnızca belirli koşullar sağlandığında çalışmasını sağlarsın. Expression sözdizimi `${{ }}` kullanılır; ancak `if` anahtarında dış parantezleri atlamak da geçerlidir.

```yaml
jobs:
  deploy:
    # Yalnızca main branch'e push olduğunda deploy yap
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - run: echo "Production'a deploy..."

  notify-on-failure:
    needs: deploy
    # Önceki job başarısız olursa bildirim gönder
    if: failure()
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploy başarısız, ekip bilgilendirildi."
```

Sık kullanılan durum fonksiyonları: `success()`, `failure()`, `cancelled()`, `always()`.

---

## `jobs.<id>.steps[*].uses` — Action Kullanımı

`uses` ile topluluk tarafından yayımlanmış ya da kendi repo'nda tanımladığın action'ları çağırırsın. Format: `{sahibi}/{repo}@{versiyon}`.

```yaml
steps:
  # Repo kodunu runner'a kopyalar — hemen her workflow'da ilk adım
  - uses: actions/checkout@v4

  # Node.js versiyonunu ayarlar
  - uses: actions/setup-node@v4
    with:
      node-version: "20"

  # Lokal action — repo içindeki .github/actions/my-action/action.yml'ı çağırır
  - uses: ./.github/actions/my-action
```

Versiyon olarak commit SHA kullanmak (`actions/checkout@abc1234`) güvenlik açısından daha sağlıklıdır — action sahibi versiyonu üzerine yeni kod yazamaz.

---

## `jobs.<id>.steps[*].run` — Shell Komutu

`run` ile doğrudan shell komutu çalıştırırsın. Linux/macOS runner'larında varsayılan shell `bash`, Windows'ta `pwsh`'tir.

```yaml
steps:
  # Tek satır komut
  - run: npm install

  # Çok satırlı komutlar — | ile yazılır
  - run: |
      echo "Bağımlılıklar yükleniyor..."
      npm ci
      npm run lint
      npm test
```

`|` (literal block scalar) ile yazılan çok satırlı komutlarda her satır ayrı bir komut olarak çalışır ve herhangi birinin exit code'u sıfır dışıysa step başarısız sayılır.

---

## `jobs.<id>.steps[*].with` — Action'a Parametre Geçme

`with` ile bir action'a girdi parametreleri gönderirsin. Hangi parametrelerin geçerli olduğu action'ın kendi `action.yml` dosyasında tanımlıdır.

```yaml
steps:
  - uses: actions/setup-node@v4
    with:
      # node-version, actions/setup-node'un beklediği bir input
      node-version: "20"
      cache: "npm"

  - uses: actions/upload-artifact@v4
    with:
      name: build-output
      path: dist/
      retention-days: 7
```

---

## `jobs.<id>.steps[*].env` — Step Düzeyinde Ortam Değişkeni

`env` ile yalnızca o step'e özgü ortam değişkenleri tanımlarsın. Hassas verileri (token, şifre) bu şekilde inject etmek yaygın bir pratiktir.

```yaml
steps:
  - name: API'ye bağlan
    run: curl -H "Authorization: Bearer $API_TOKEN" https://api.example.com/deploy
    env:
      # GitHub Secrets'tan token al — doğrudan YAML'a yazma!
      API_TOKEN: ${{ secrets.DEPLOY_API_TOKEN }}

  - name: Test çalıştır
    run: npm test
    env:
      NODE_ENV: test
      LOG_LEVEL: debug
```

---

## `env` — Workflow ve Job Düzeyinde Ortam Değişkenleri

`env` anahtarını üç farklı seviyede kullanabilirsin: workflow geneli, job geneli veya step geneli. Daha dar kapsamdaki tanım, üstteki tanımı override eder.

```yaml
# Workflow düzeyinde — tüm job ve step'lerde geçerli
env:
  APP_ENV: production
  NODE_VERSION: "20"

jobs:
  build:
    runs-on: ubuntu-latest
    # Job düzeyinde — yalnızca bu job'un step'lerinde geçerli
    env:
      BUILD_MODE: release
    steps:
      - run: echo "Ortam: $APP_ENV, Mod: $BUILD_MODE"

  test:
    runs-on: ubuntu-latest
    # Job düzeyinde override — test job'u için farklı değer
    env:
      APP_ENV: staging
    steps:
      - run: echo "Test ortamı: $APP_ENV"  # staging yazar
```

---

## `defaults.run` — Varsayılan Shell ve Çalışma Dizini

`defaults.run` ile workflow içindeki tüm `run` step'leri için varsayılan shell ve working-directory belirlersin. Her step'e ayrı ayrı yazmaktan kurtarır.

```yaml
# Workflow düzeyinde varsayılanlar
defaults:
  run:
    shell: bash
    working-directory: ./app

jobs:
  build:
    runs-on: ubuntu-latest
    # Job düzeyinde de tanımlanabilir, workflow düzeyini override eder
    defaults:
      run:
        working-directory: ./packages/core
    steps:
      # Bu komut ./packages/core dizininde çalışır
      - run: npm run build
```

Desteklenen shell değerleri: `bash`, `sh`, `pwsh`, `powershell`, `python`, `cmd`. `defaults.run` içinde context expression (`${{ }}`) kullanılamaz.

---

## `concurrency` — Eş Zamanlı Çalışma Kontrolü

`concurrency` ile aynı grup adına sahip workflow'ların aynı anda yalnızca bir tanesinin çalışmasını garantilersin. Özellikle deploy workflow'larında "önce başlayan deployment henüz sürerken yeni bir push geldiğinde ne yapılsın?" sorusunu çözer.

```yaml
# Workflow düzeyinde — aynı branch için aynı anda tek çalışma
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  # true: yeni çalışma başlayınca bekleyen/çalışan önceki iptal edilir
  cancel-in-progress: true
```

```yaml
# Job düzeyinde — yalnızca deploy job'u için kısıtla
jobs:
  deploy:
    concurrency:
      group: production-deploy
      cancel-in-progress: false  # false: yeni çalışma sırada bekler
    runs-on: ubuntu-latest
    steps:
      - run: ./scripts/deploy.sh
```

`cancel-in-progress: true` CI gibi hızlı geri bildirim istenen senaryolar için idealdir. `false` ise production deploy'larında daha güvenlidir — ortada kalan bir deploy'u kesmek istemezsin.

---

## Tam Örnek

Aşağıdaki workflow yukarıda ele alınan anahtarların büyük çoğunluğunu bir arada kullanıyor. Gerçek bir Node.js projesinde lint → test → deploy akışını gösteriyor.

```yaml
# Workflow adı — Actions sekmesinde görünür
name: Node.js CI/CD

# Her çalışma için dinamik isim
run-name: "${{ github.actor }} → ${{ github.ref_name }} branch'i"

# Tetikleyiciler
on:
  push:
    branches:
      - main
      - "feature/**"
    paths:
      - "src/**"
      - "package.json"
  pull_request:
    types: [opened, synchronize]
  workflow_dispatch:

# Workflow geneli ortam değişkenleri
env:
  NODE_VERSION: "20"
  APP_NAME: my-app

# Tüm run step'leri için varsayılan ayarlar
defaults:
  run:
    shell: bash
    working-directory: .

# Aynı branch için aynı anda tek workflow çalışması
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

jobs:
  # ── 1. JOB: Lint ──────────────────────────────────────────────────
  lint:
    name: Kod Kalitesi Kontrolü
    runs-on: ubuntu-latest
    steps:
      # Repo kodunu runner'a çek
      - uses: actions/checkout@v4

      # Node.js kur
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: "npm"

      # Bağımlılıkları yükle
      - name: Bağımlılıkları yükle
        run: npm ci

      # Lint çalıştır
      - name: ESLint çalıştır
        run: npm run lint

  # ── 2. JOB: Test ──────────────────────────────────────────────────
  test:
    name: Testleri Çalıştır
    # Lint başarılı olmadan test başlamaz
    needs: lint
    runs-on: ubuntu-latest
    # Job düzeyinde env — bu job'a özel
    env:
      NODE_ENV: test
      CI: "true"
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: "npm"

      - run: npm ci

      - name: Testleri çalıştır
        run: npm test -- --coverage

      # Test sonuçlarını artifact olarak sakla
      - uses: actions/upload-artifact@v4
        with:
          name: coverage-report
          path: coverage/
          retention-days: 14

  # ── 3. JOB: Deploy ────────────────────────────────────────────────
  deploy:
    name: Production Deploy
    # Hem lint hem test bitmeden deploy başlamaz
    needs: [lint, test]
    runs-on: ubuntu-latest
    # Yalnızca main branch'e push olduğunda deploy yap
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    steps:
      - uses: actions/checkout@v4

      - name: Deploy scripti çalıştır
        run: ./scripts/deploy.sh
        env:
          # Secret'ı yalnızca bu step'e inject et
          DEPLOY_TOKEN: ${{ secrets.DEPLOY_TOKEN }}
          ENVIRONMENT: production

      - name: Deploy sonucunu bildir
        run: echo "$APP_NAME başarıyla deploy edildi."
```

Bu yapıyı kendi projenizde kullanırken `NODE_VERSION`, `APP_NAME` gibi workflow düzeyi değişkenleri tek yerden güncelleyebilir, tüm job'lara yansıtabilirsin. `needs` zinciri sayesinde lint veya test başarısız olursa deploy hiç başlamaz — ekstra kontrol yazmana gerek kalmaz.
