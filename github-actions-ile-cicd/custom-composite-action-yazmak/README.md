# Custom Composite Action Yazmak

Workflow dosyaları büyüdükçe tekrar eden adımlar kaçınılmaz hale gelir. Her pipeline'da aynı Node.js kurulum bloğunu kopyalamak, ileride bakım kabusuna dönüşür. Bir versiyonu güncellersin, diğerlerini unutursun. Custom action yazmak tam bu sorunu çözer — tekrar eden adımları tek bir paket haline getirirsin ve her yerden tek satırla çağırırsın.

## Custom Action Türleri

GitHub Actions üç farklı action tipi destekler. Hangisini seçeceğin, ihtiyacına ve mevcut bilgine göre değişir.

**JavaScript action**: Runner üzerinde doğrudan çalışır, container oluşturma yükü yoktur. Bu yüzden en hızlı seçenek. Ubuntu, Windows ve macOS runner'larında sorunsuz çalışır — cross-platform. Dezavantajı: Node.js bilmeni gerektirir ve mantığını JavaScript ile yazman gerekir.

**Docker container action**: Ortamı, bağımlılıkları ve kodu tek bir container'a paketler. Belirli bir OS veya araç versiyonuna ihtiyacın varsa tam kontrol sağlar. Ancak sadece Linux runner'larında çalışır; container build ve pull işlemleri nedeniyle diğerlerine göre daha yavaştır.

**Composite action**: Birden fazla workflow adımını tek bir action altında birleştirir. Shell komutları ve mevcut action'ları bir arada kullanabilirsin. JavaScript bilgisi gerekmez, Docker kurulumuna gerek yoktur. Öğrenmesi ve yazması en kolay tip budur — bu konu da tam buna odaklanıyor.

## Composite Action Ne Zaman Yazılır?

Aşağıdaki durumlardan herhangi biri seni tanımlıyorsa, composite action yazma vakti gelmiş demektir:

**Aynı adımlar birden fazla workflow'da tekrarlanıyor.** `actions/setup-node`, `actions/cache` ve `npm ci` üçlüsünü her pipeline'a kopyalıyorsan bu klasik bir paketleme fırsatıdır.

```yaml
# Bu bloğu 5 farklı workflow'da tekrarlıyorsan...
- uses: actions/setup-node@v4
  with:
    node-version: '20'

- name: npm cache
  uses: actions/cache@v4
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}

- name: Bağımlılıkları yükle
  run: npm ci
```

Bu üç adımı bir composite action'a taşıyınca tek bir satıra iner: `uses: ./.github/actions/setup-node-npm`. Node.js versiyonunu değiştirmek istediğinde tek bir dosyayı güncellersin, tüm workflow'lar otomatik olarak yeni versiyonu kullanır.

**Adım grubu mantıksal bir birim oluşturuyor.** "Test ortamı hazırlama", "artifact paketleme" ya da "deployment öncesi kontroller" gibi kavramsal bütünlük taşıyan adım grupları iyi birer composite action adayıdır.

**Bakım yükünü azaltmak istiyorsun.** Birden fazla repoda ortak setup adımları varsa, action'ı ayrı bir public repoya koyup her yerden aynı şekilde çağırabilirsin.

## action.yml Metadata Yapısı

Her action'ın kökünde bir `action.yml` dosyası bulunmak zorunda. Bu dosya action'ın adını, açıklamasını, input/output'larını ve çalıştırılacak adımları tanımlar.

```yaml
name: 'Node.js Kurulum ve npm ci'
description: 'Node.js kurar, cache yapar ve npm bağımlılıklarını yükler'
author: 'ekip-adi'

inputs:
  node-version:
    description: 'Node.js versiyonu'
    required: false
    default: '20'         # Verilmezse 20 kullanılır

outputs:
  cache-hit:
    description: 'npm cache bulundu mu'
    value: ${{ steps.npm-cache.outputs.cache-hit }}  # Step output'una referans

runs:
  using: composite    # composite action tanımı — zorunlu alan
  steps:
    - uses: actions/setup-node@v4
      with:
        node-version: ${{ inputs.node-version }}  # Input'u step'e geçir

    - name: npm cache
      id: npm-cache     # Output için id zorunlu
      uses: actions/cache@v4
      with:
        path: ~/.npm
        key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
        restore-keys: |
          ${{ runner.os }}-node-

    - name: Bağımlılıkları yükle
      shell: bash       # composite action step'lerinde shell zorunlu
      run: npm ci
```

`using: composite` satırı olmadan action çalışmaz. Bu alan GitHub'a bunun composite tipinde bir action olduğunu söyler.

## Klasör Yapısı

Composite action'ı repo içinde yerel olarak kullanmak için standart konum `.github/actions/` altıdır:

```
.github/
  actions/
    setup-node-npm/
      action.yml        # Metadata dosyası — zorunlu isim
  workflows/
    ci.yml
    deploy.yml
```

Action adını klasör adı belirler. `setup-node-npm` klasörüne koyduğun action'ı `./.github/actions/setup-node-npm` şeklinde referans alırsın.

## Yerel Kullanım

Aynı repo içindeki bir action'ı çağırmak için göreli yol kullanırsın:

```yaml
name: CI

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4  # Checkout olmadan yerel action bulunamaz

      - uses: ./.github/actions/setup-node-npm   # Yerel action — nokta ile başlar
        with:
          node-version: '22'        # Input geçmek opsiyonel, default '20' kullanılır

      - run: npm test
```

`actions/checkout@v4` adımı olmadan yerel action'lar çalışmaz. Checkout yapılmadan repo dosyaları runner üzerinde mevcut olmadığından `action.yml` okunamaz.

## Inputs ve Outputs Kullanımı

**Input okuma:** Action içindeki adımlarda `${{ inputs.parametre-adi }}` söz dizimini kullanırsın. Input değerlerini `run:` adımlarında environment variable olarak da geçebilirsin:

```yaml
- name: Sürüm bilgisini göster
  shell: bash
  env:
    NODE_VER: ${{ inputs.node-version }}  # bash'te env var olarak kullan
  run: echo "Node.js $NODE_VER kuruluyor"
```

**Output üretme:** `$GITHUB_OUTPUT` dosyasına `key=value` formatında yazarak output üretirsin. Bu, eski `set-output` komutunun yerini almıştır:

```yaml
- name: Versiyon oku
  id: ver                  # id olmadan output referans alınamaz
  shell: bash
  run: echo "version=$(node -p 'require(`./package.json`).version')" >> $GITHUB_OUTPUT
```

Bu action'ı kullanan workflow'da output'a şöyle erişilir:

```yaml
- uses: ./.github/actions/setup-node-npm
  id: setup                # Caller tarafında da id gerekli

- run: echo "Cache durumu: ${{ steps.setup.outputs.cache-hit }}"
```

## shell: Zorunluluğu

Composite action içindeki `run:` adımlarında `shell:` alanı zorunludur. Normal workflow adımlarında varsayılan shell otomatik belirlenir, ama composite action'larda bu davranış yoktur.

```yaml
runs:
  using: composite
  steps:
    - name: Doğru kullanım
      shell: bash          # zorunlu — olmadan hata verir
      run: echo "Merhaba"

    - name: Windows uyumlu
      shell: pwsh          # PowerShell Core
      run: Write-Host "Windows'ta da çalışır"

    - name: Python adımı
      shell: python        # Python da kullanılabilir
      run: print("Python adımı")
```

Yaygın `shell` seçenekleri: `bash`, `sh`, `pwsh`, `python`, `cmd` (Windows).

## github.action_path Kullanımı

Action'ın kendi dizinindeki script dosyalarını çalıştırmak için `github.action_path` context değişkenini kullanırsın. Bu, action nerede çalışırsa çalışsın script'e doğru yolu verir:

```yaml
runs:
  using: composite
  steps:
    - name: Özel script çalıştır
      shell: bash
      run: |
        # github.action_path action.yml'nin bulunduğu dizini gösterir
        bash "${{ github.action_path }}/scripts/setup.sh"
```

Script dosyasının executable olması gerekir. Commit etmeden önce `chmod +x scripts/setup.sh` çalıştırmayı unutma.

## GitHub Marketplace'e Yayımlama

Action'ını Marketplace'e yayımlamak istiyorsan birkaç gereksinim var:

- Action'ın kendi **public** reposunda olması gerekir (mono-repo içinde gömülü olmamalı)
- `action.yml` reponun **kökünde** yer almalıdır
- Repo'da bir release oluşturursun, GitHub sana Marketplace'e yayımlama seçeneği sunar

```
my-setup-action/           # Bağımsız repo
  action.yml               # Kök dizinde — zorunlu
  README.md
  scripts/
    setup.sh
```

Yayımlandıktan sonra başkaları `uses: kullanici-adi/my-setup-action@v1` şeklinde kullanabilir.

Repo içi action'lar için bu gereksinimlere uymak zorunda değilsin — `.github/actions/` altındaki yapı yeterlidir.

## Composite vs Reusable Workflow

Composite action ile reusable workflow benzer sorunları farklı granülaritede çözer. Hangisini kullanacağını belirlemek için aşağıdaki tabloya bakabilirsin:

| | Composite Action | Reusable Workflow |
|---|---|---|
| Ne paketler | Step'ler | Job'lar |
| Nerede kullanılır | Bir job'un step'i olarak | Workflow'un job'u olarak |
| runner seçimi | Caller'ın runner'ı kullanılır | Callee kendi runner'ını tanımlar |
| Secret paylaşımı | Otomatik miras alır | `secrets: inherit` gerekir |
| Karmaşıklık | Düşük | Orta |
| Ne zaman tercih edilir | Adım grubu paylaşımı | Tam job mantığı paylaşımı |

Kural basit: birkaç adımı paketleyeceksen composite action, bir veya daha fazla job'u paketleyeceksen reusable workflow.

## Tam Örnek: Setup Action ve Kullanımı

Aşağıda eksiksiz bir composite action ve onu kullanan bir workflow örneği var:

**`.github/actions/setup-node-npm/action.yml`:**

```yaml
name: 'Node.js Setup'
description: 'Node.js kurar, npm cache yapılandırır ve bağımlılıkları yükler'
author: 'my-team'

inputs:
  node-version:
    description: 'Kullanılacak Node.js major versiyonu'
    required: false
    default: '20'
  working-directory:
    description: 'npm ci komutunun çalışacağı dizin'
    required: false
    default: '.'    # Varsayılan olarak repo kökü

outputs:
  cache-hit:
    description: 'npm cache mevcut muydu'
    value: ${{ steps.cache.outputs.cache-hit }}
  node-version:
    description: 'Kurulan Node.js versiyonu'
    value: ${{ steps.setup.outputs.node-version }}

runs:
  using: composite
  steps:
    - name: Node.js kur
      id: setup
      uses: actions/setup-node@v4
      with:
        node-version: ${{ inputs.node-version }}

    - name: npm cache yapılandır
      id: cache
      uses: actions/cache@v4
      with:
        path: ~/.npm
        # package-lock.json değişince cache otomatik geçersiz olur
        key: ${{ runner.os }}-node${{ inputs.node-version }}-${{ hashFiles('**/package-lock.json') }}
        restore-keys: |
          ${{ runner.os }}-node${{ inputs.node-version }}-
          ${{ runner.os }}-node-

    - name: npm bağımlılıklarını yükle
      shell: bash
      working-directory: ${{ inputs.working-directory }}
      run: npm ci --prefer-offline  # Cache mevcutsa network'e gitme
```

**`.github/workflows/ci.yml`:**

```yaml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Node.js ve bağımlılıkları hazırla
        id: node-setup
        uses: ./.github/actions/setup-node-npm
        with:
          node-version: '22'

      # Output'u kullan
      - name: Cache durumunu logla
        shell: bash
        run: |
          echo "Cache hit: ${{ steps.node-setup.outputs.cache-hit }}"
          echo "Node version: ${{ steps.node-setup.outputs.node-version }}"

      - name: Testleri çalıştır
        run: npm test

      - name: Build al
        run: npm run build
```

Composite action'ı bir kez yazıp `ci.yml`, `deploy.yml`, `release.yml` gibi tüm workflow'lardan aynı şekilde çağırabilirsin. Node.js versiyonunu 20'den 22'ye çıkarmak istediğinde sadece `action.yml` dosyasındaki `default: '20'` satırını değiştirmen yeterli — başka hiçbir dosyaya dokunmana gerek yok.
