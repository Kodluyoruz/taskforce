# Yeniden Kullanılabilir Workflow'lar (Reusable Workflows)

CI/CD pipeline'larını birden fazla repoda yönetmek başlangıçta kolay görünür. İkinci ya da üçüncü repoya geçtiğinde "şu YAML'ı kopyalayayım" diye düşünürsün. Onuncu repoya geldiğinde ise Node.js versiyonunu güncellemek için on ayrı dosyayı değiştirmek zorunda kalırsın. GitHub Actions'ın **reusable workflow** özelliği tam bu sorunu çözer.

## Neden Reusable Workflow?

Büyük organizasyonlarda onlarca, hatta yüzlerce repo olabilir. Bu repoların hepsinin benzer bir CI sürecine ihtiyacı vardır: bağımlılıkları kur, testleri çalıştır, build al, deploy et. Bu adımları her repoya ayrı ayrı YAML olarak yazmak birkaç ciddi sorun doğurur:

- **Bakım cehennemi:** Node.js versiyonunu 20'den 22'ye çıkarmak istiyorsun. 10 repo varsa 10 dosya değiştirirsin, birini unutursun, CI tutarsız çalışmaya başlar.
- **Standart dışılık:** Her ekip kendi yorumuyla CI yazar. Biri `npm test`, diğeri `npx jest --coverage` kullanır. Şirket standardı yok olur.
- **Gizli hata riski:** Bir güvenlik açığı bir action sürümünde ortaya çıktı. Hangi repolar o versiyonu kullanıyor? Cevap: bilmiyorsun.

Reusable workflow mantığı şudur: CI mantığını **bir yerde** tanımlarsın, diğer repolar o workflow'u **çağırır**. Merkezdeki dosyayı bir kez değiştirirsin, hepsi güncellenir.

Bu mimaride iki kavram var:

- **Callee (çağrılan):** `workflow_call` ile tanımlanmış, paylaşılan workflow dosyası.
- **Caller (çağıran):** `uses:` anahtar kelimesiyle callee'yi çağıran workflow.

## workflow_call ile Tanımlama

Bir workflow'u yeniden kullanılabilir yapmak için `on:` bölümüne `workflow_call` eklersen yeterlidir. `inputs` ve `secrets` ile dışarıdan parametre alabilirsin.

```yaml
# .github/workflows/shared-ci.yml
# Bu dosya callee'dir — başka workflow'lar tarafından çağrılır

on:
  workflow_call:
    inputs:
      node-version:
        description: 'Node.js versiyonu'
        required: false
        type: string
        default: '20'          # Belirtilmezse 20 kullanılır
      run-lint:
        description: 'Lint adımı çalışsın mı?'
        required: false
        type: boolean
        default: true
    secrets:
      NPM_TOKEN:
        required: false        # Özel npm registry kullanıyorsa gerekli

jobs:
  ci:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: ${{ inputs.node-version }}   # Input kullanımı
          cache: 'npm'

      # NPM_TOKEN varsa .npmrc yapılandırması
      - name: Configure npm registry
        if: ${{ secrets.NPM_TOKEN != '' }}
        run: |
          echo "//registry.npmjs.org/:_authToken=${{ secrets.NPM_TOKEN }}" > .npmrc

      - run: npm ci

      # run-lint input'u true ise çalışır
      - name: Lint
        if: ${{ inputs.run-lint }}
        run: npm run lint

      - run: npm test
```

Input türleri üçtür: `string`, `boolean`, `number`. Tür uyumsuzluğunda workflow başlamadan hata alırsın.

## Workflow'u Çağırma

### Aynı Repodan

Workflow callee ile aynı repodaysa `./` ile göreceli yol kullanırsın:

```yaml
# .github/workflows/main.yml
# Bu dosya caller'dır — shared-ci.yml'yi çağırır

on:
  push:
    branches: [main]
  pull_request:

jobs:
  test:
    uses: ./.github/workflows/shared-ci.yml   # Aynı repodaki callee
    with:
      node-version: '22'
      run-lint: true
    secrets: inherit   # Tüm secret'ları callee'ye geç
```

`secrets: inherit` ile caller'ın erişebildiği tüm secret'lar otomatik olarak callee'ye aktarılır. Aynı organizasyon içindeki repolar için bu kısayol çok kullanışlıdır.

### Başka Bir Repodan

Organizasyonun merkezi bir `shared-workflows` reposu varsa, diğer repolar oradan çağırır:

```yaml
# Başka bir repodaki .github/workflows/deploy.yml

jobs:
  # Merkezi CI workflow'unu çağır
  test:
    uses: my-org/shared-workflows/.github/workflows/ci.yml@main
    with:
      node-version: '20'
    secrets:
      NPM_TOKEN: ${{ secrets.NPM_TOKEN }}   # Explicit geçiş

  # Merkezi deploy workflow'unu çağır
  deploy:
    needs: test
    uses: my-org/shared-workflows/.github/workflows/deploy.yml@v2.1.0
    with:
      environment: 'production'
    secrets: inherit
```

Ref olarak `@main`, `@v2.1.0` ya da `@abc1234` (commit SHA) kullanabilirsin. Güvenlik açısından en sağlam seçenek commit SHA'sıdır; bir tag geriye dönük değiştirilebilir, SHA değiştirilemez.

## Output'lar

Callee'den değer döndürmek istiyorsan `outputs` tanımlarsın. Tipik kullanım: build adımında üretilen versiyon numarası, artifact adı veya deploy URL'i.

```yaml
# .github/workflows/shared-build.yml
# Build yapar ve versiyon bilgisini dışa aktarır

on:
  workflow_call:
    outputs:
      version:
        description: 'Build versiyonu (git tag)'
        value: ${{ jobs.build.outputs.version }}
      artifact-name:
        description: 'Yüklenen artifact adı'
        value: ${{ jobs.build.outputs.artifact-name }}

jobs:
  build:
    runs-on: ubuntu-latest
    outputs:
      version: ${{ steps.ver.outputs.tag }}             # Step output'u job output'a bağla
      artifact-name: ${{ steps.artifact.outputs.name }}

    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0   # git describe için tüm history gerekli

      - name: Versiyon belirle
        id: ver
        run: echo "tag=$(git describe --tags --always)" >> $GITHUB_OUTPUT

      - name: Build
        run: npm run build

      - name: Artifact adı oluştur
        id: artifact
        run: echo "name=app-${{ steps.ver.outputs.tag }}" >> $GITHUB_OUTPUT

      - uses: actions/upload-artifact@v4
        with:
          name: ${{ steps.artifact.outputs.name }}
          path: dist/
```

Caller bu output'ları `needs` bağlamı üzerinden okur:

```yaml
# Caller workflow — build output'larını kullanır

jobs:
  build:
    uses: my-org/shared-workflows/.github/workflows/build.yml@main

  deploy:
    needs: build   # build job'ının bitmesini bekle
    runs-on: ubuntu-latest
    steps:
      - name: Versiyon bilgisini göster
        run: echo "Deploying version ${{ needs.build.outputs.version }}"

      - uses: actions/download-artifact@v4
        with:
          name: ${{ needs.build.outputs.artifact-name }}   # Output kullanımı

      - name: Deploy
        run: ./scripts/deploy.sh
```

## secrets: inherit

`secrets: inherit` kullanıldığında caller'ın erişebildiği tüm repository secret'ları callee'ye aktarılır. Her secret'ı tek tek listelemek yerine bu kısayolu kullanabilirsin.

```yaml
# Aynı organizasyondaki repolar için kısa yol
jobs:
  ci:
    uses: my-org/shared-workflows/.github/workflows/ci.yml@main
    secrets: inherit
```

```yaml
# Explicit geçiş — hangi secret'ların geçtiğini açıkça görmek istiyorsan
jobs:
  ci:
    uses: my-org/shared-workflows/.github/workflows/ci.yml@main
    secrets:
      NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
      SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
```

Önemli bir nokta: `secrets: inherit` ile geçilen secret'lar yalnızca **doğrudan çağrılan** callee'ye ulaşır. Callee'nin çağırdığı başka bir workflow (nested callee) bu secret'lara otomatik erişemez; orada da açıkça geçmen gerekir.

## Kısıtlamalar

Reusable workflow'ları kullanmadan önce şu sınırları bilmek işe yarar:

- **Maksimum 10 nesting seviyesi:** Caller dahil zincirde en fazla 10 workflow olabilir. A → B → C → ... → J şeklinde gidebilirsin ama J'den sonrası çalışmaz.
- **Loop yasak:** A workflow'u B'yi çağırıyorsa, B'nin A'yı çağırması mümkün değil. GitHub bu döngüyü tespit eder ve workflow başlamadan hata verir.
- **Environment secret'ları geçirilemiyor:** Caller'da bir `environment:` tanımladıysan ve o environment'a özgü secret'ların varsa, bunları `workflow_call` üzerinden callee'ye geçiremezsin. `on: workflow_call` `environment` keyword'ünü desteklemez.
- **Callee `.github/workflows/` kök dizininde olmalı:** Alt klasörler desteklenmez; `.github/workflows/nested/ci.yml` gibi bir yol kullanılamaz.
- **Job düzeyinde `if:` kullanımı:** Bir callee job'ını koşullu çağırmak için `if:` ekleyebilirsin, ama bu `if:` caller tarafında job tanımına yazılır.

```yaml
# Koşullu çağırma — sadece main branch'te deploy et
jobs:
  deploy:
    if: github.ref == 'refs/heads/main'   # Bu koşul sağlanmazsa job atlanır
    uses: my-org/shared-workflows/.github/workflows/deploy.yml@main
    secrets: inherit
```

## Ne Zaman Kullanmalı?

Reusable workflow her duruma uygun değil. Şu koşulları gördüğünde düşün:

- **Birden fazla repoda aynı CI adımları tekrarlanıyor.** İkinci kez kopyaladığında reusable workflow zamanıdır.
- **Kurumsal standart pipeline tanımlamak istiyorsun.** Tüm backend servislerinin aynı test + güvenlik taraması sürecinden geçmesini zorunlu kılmak için merkezi bir callee idealdir.
- **Bir değişiklikle tüm repoları güncellemek istiyorsun.** `actions/setup-node@v3` kullanan 15 repo varsa ve v4'e geçmek istiyorsan, sadece callee'yi güncellirsin.

Tek bir repoda çalışıyorsan ya da her reponun CI'ı gerçekten farklıysa reusable workflow ek karmaşıklık yaratır. Bu durumda composite action veya düz YAML daha pratiktir.
