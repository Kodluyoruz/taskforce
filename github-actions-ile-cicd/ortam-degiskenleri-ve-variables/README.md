# Ortam Değişkenleri ve Variables

Workflow'larını yazarken bir noktada şunu fark edeceksin: aynı değeri birden fazla yerde tekrar tekrar yazmak hem hataya açık hem de bakımı zorlaştırıyor. GitHub Actions bunun için birden fazla mekanizma sunuyor — `env` context, `vars` context, yerleşik değişkenler, `GITHUB_OUTPUT` ve `GITHUB_ENV`. Her birinin farklı bir kullanım amacı var; neyi ne zaman kullanacağını öğrendiğinde workflow'larını çok daha temiz yazabilirsin.

## env Context: Ortam Değişkenleri

`env` ile tanımladığın değişkenler runner üzerinde çalışan shell komutlarına ortam değişkeni olarak geçer. Bu değişkenleri üç farklı seviyede tanımlayabilirsin ve her seviye bir alttakini override eder.

```yaml
env:
  NODE_ENV: production    # Workflow seviyesi — tüm job'lara geçer

jobs:
  build:
    runs-on: ubuntu-latest
    env:
      LOG_LEVEL: verbose  # Job seviyesi — bu job'un step'lerine geçer
    steps:
      - name: Build
        env:
          DEBUG: 'true'   # Step seviyesi — sadece bu step'e geçer
        run: npm run build

      - name: Test
        # Bu step'te DEBUG yok, ama LOG_LEVEL ve NODE_ENV var
        run: npm test
```

Override önceliği şu şekilde: **step > job > workflow**

Yani aynı isimde bir değişken hem workflow seviyesinde hem de step seviyesinde tanımlanmışsa, step seviyesindeki kazanır. Bu özelliği belirli bir step'te geçici olarak farklı bir değer kullanmak istediğinde çok işine yarar.

Shell'de bu değişkenlere `$DEGISKEN_ADI` (Linux/macOS) ya da `$env:DEGISKEN_ADI` (Windows/PowerShell) şeklinde erişirsin. Eğer workflow YAML'ı içindeki `if` koşullarında veya expression'larda kullanmak istiyorsan `${{ env.DEGISKEN_ADI }}` syntax'ını kullanman gerekir — çünkü expression'lar runner'a gönderilmeden önce GitHub tarafından değerlendirilir.

```yaml
- name: Ortama göre farklı davran
  if: ${{ env.NODE_ENV == 'production' }}
  run: echo "Production build başlıyor"
```

## vars Context: Configuration Variables

`env` ile tanımlanan değişkenler workflow dosyasında inline olarak durur. Ama bazen bir değeri birden fazla workflow'da kullanmak ya da değeri koda gömmeden yönetmek istersin. İşte `vars` context tam bunun için var.

Configuration variable'ları şuradan eklersin:  
**Settings → Security → Secrets and variables → Actions → Variables sekmesi**

Burada tanımladığın değişkenlere workflow içinden `${{ vars.DEGISKEN_ADI }}` ile erişirsin:

```yaml
steps:
  - name: Deploy URL'yi göster
    run: echo "Deploy URL: ${{ vars.DEPLOY_URL }}"

  - name: App sürümünü logla
    run: echo "Uygulama sürümü: ${{ vars.APP_VERSION }}"
```

Variable'lar repository, environment veya organization seviyesinde tanımlanabilir. Environment seviyesinde tanımlarsan production ve staging için farklı değerler kullanabilirsin — aynı değişken adıyla.

**Secret vs variable farkına dikkat et:** Variable'lar log'larda görünebilir; hassas olmayan yapılandırma değerleri için uygundur (API endpoint'leri, sürüm numaraları, feature flag'leri gibi). API key veya token gibi hassas değerler için secret kullanmalısın — secret'lar log'larda otomatik olarak maskelenir.

## GitHub'ın Yerleşik Değişkenleri

GitHub Actions, her workflow çalıştığında runner'a otomatik olarak bir dizi ortam değişkeni enjekte eder. Bunları `env` key'i olmadan doğrudan kullanabilirsin:

| Değişken | Açıklama |
|---|---|
| `GITHUB_SHA` | Tetikleyen commit'in hash'i |
| `GITHUB_REF` | Branch veya tag referansı |
| `GITHUB_REPOSITORY` | owner/repo formatında repo adı |
| `GITHUB_ACTOR` | Workflow'u tetikleyen kullanıcı |
| `RUNNER_OS` | Runner'ın işletim sistemi |
| `GITHUB_WORKSPACE` | Reponun checkout edildiği dizin |

```yaml
- name: Commit bilgisini logla
  run: echo "Commit: $GITHUB_SHA, Branch: $GITHUB_REF"

- name: Runner bilgisini göster
  run: |
    echo "İşletim sistemi: $RUNNER_OS"
    echo "Çalışma dizini: $GITHUB_WORKSPACE"
    echo "Repo: $GITHUB_REPOSITORY"
    echo "Tetikleyen: $GITHUB_ACTOR"
```

Bu değişkenleri özellikle Docker image tag'leri oluştururken, build artifact'larını isimlendirirken veya notifıkasyon mesajlarına context eklemek istediğinde sıkça kullanacaksın.

## GITHUB_OUTPUT: Step Çıktıları

Bazen bir step'te hesapladığın ya da ürettiğin bir değeri aynı job içindeki başka bir step'te kullanmak istersin. Eski yöntem `set-output` komutuydu; bu artık deprecated. Yeni yöntem `$GITHUB_OUTPUT` dosyasına yazmak:

```yaml
- name: Versiyon belirle
  id: versiyon
  run: echo "tag=$(git describe --tags --abbrev=0)" >> $GITHUB_OUTPUT

- name: Versiyonu kullan
  run: echo "Yayınlanan versiyon: ${{ steps.versiyon.outputs.tag }}"
```

Dikkat etmen gereken iki şey var:

1. `id:` zorunlu — sonraki step'ler bu ID üzerinden output'a erişir. `id` tanımlamadan yazdığın output erişilemez.
2. Format `key=value` olmalı — her satır bir output. Multi-line değerler için delimiter syntax kullanılır.

Daha kapsamlı bir örnek:

```yaml
jobs:
  prepare:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Build meta bilgilerini hazırla
        id: meta
        run: |
          # Birden fazla output'u aynı step'te yazabilirsin
          echo "version=$(cat package.json | jq -r .version)" >> $GITHUB_OUTPUT
          echo "build_date=$(date +'%Y-%m-%d')" >> $GITHUB_OUTPUT
          echo "short_sha=${GITHUB_SHA::7}" >> $GITHUB_OUTPUT

      - name: Docker image tag'ini oluştur
        run: |
          echo "Image: myapp:${{ steps.meta.outputs.version }}-${{ steps.meta.outputs.short_sha }}"
          echo "Build tarihi: ${{ steps.meta.outputs.build_date }}"
```

## GITHUB_ENV: Sonraki Step'lere Değişken Aktar

`GITHUB_OUTPUT` değerleri step output olarak saklar ve `steps.<id>.outputs.<key>` syntax'ıyla erişilir. Ama bazen bir değeri doğrudan ortam değişkeni olarak set etmek istersin — yani sonraki step'lerde `$DEGISKEN_ADI` şeklinde kullanabilmek için. Bunun için `$GITHUB_ENV` dosyasına yazarsın:

```yaml
- name: Ortam değişkeni ayarla
  run: echo "BUILD_DATE=$(date +'%Y-%m-%d')" >> $GITHUB_ENV

- name: Tarihi kullan
  run: echo "Build tarihi: $BUILD_DATE"
```

`GITHUB_ENV`'e yazdığın değişken aynı step'te değil, sonraki step'lerden itibaren geçerli olur. Bu işlem sadece aynı job içinde çalışır; farklı bir job'a değişken aktarmak istiyorsan job output'ları kullanman gerekir.

Gerçek dünyada bu mekanizmayı genellikle şöyle kullanırsın:

```yaml
- name: Ortamı tespit et
  run: |
    # Branch adına göre deployment ortamını belirle
    if [[ "$GITHUB_REF" == "refs/heads/main" ]]; then
      echo "DEPLOY_ENV=production" >> $GITHUB_ENV
      echo "API_BASE=https://api.example.com" >> $GITHUB_ENV
    else
      echo "DEPLOY_ENV=staging" >> $GITHUB_ENV
      echo "API_BASE=https://staging-api.example.com" >> $GITHUB_ENV
    fi

- name: Deploy et
  run: |
    echo "$DEPLOY_ENV ortamına deploy ediliyor"
    echo "API endpoint: $API_BASE"
    ./deploy.sh --env $DEPLOY_ENV --api $API_BASE
```

## Secret vs Variable vs env Karşılaştırması

Hangi mekanizmanın ne zaman kullanılacağını netleştirmek için aşağıdaki tabloya bakabilirsin:

| | secret | variable (vars) | env |
|---|---|---|---|
| Depolanma | Şifreli | Plain | Workflow'da inline |
| Log'da görünüm | Maskelenir | Görünebilir | Görünür |
| Kullanım | `${{ secrets.X }}` | `${{ vars.X }}` | `$ENV_NAME` |
| Scope | Repo/env/org | Repo/env/org | Workflow/job/step |

Pratik karar rehberi:

- **Secret:** API key, token, şifre, sertifika — log'da asla görünmemeli
- **vars:** Deployment URL'si, sürüm numarası, feature flag — değeri sık değişebilir ama hassas değil
- **env (inline):** Sadece o workflow'a özgü, hassas olmayan, değişmesi gerekmeyen sabit değerler

Bunları birleştiren gerçekçi bir örnek:

```yaml
name: Deploy Pipeline

env:
  NODE_VERSION: '20'          # Workflow genelinde sabit — inline env uygun

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Node.js kur
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}

      - name: Bağımlılıkları yükle
        run: npm ci

      - name: Build
        env:
          # Hassas olmayan yapılandırma — vars'tan
          NEXT_PUBLIC_API_URL: ${{ vars.API_URL }}
          NEXT_PUBLIC_APP_VERSION: ${{ vars.APP_VERSION }}
        run: npm run build

      - name: Deploy
        env:
          # Hassas bilgiler — secrets'tan
          DEPLOY_TOKEN: ${{ secrets.DEPLOY_TOKEN }}
          SSH_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
        run: |
          echo "Deploy URL: ${{ vars.DEPLOY_URL }}"
          echo "Commit: $GITHUB_SHA"
          ./scripts/deploy.sh
```

Bu yapıyla hem workflow'un okunabilirliğini korumuş hem de hassas bilgilerin güvenliğini sağlamış olursun. `vars` ve `secrets` değerleri workflow dosyasının dışında yönetildiği için repo'ya commit etmeden değiştirebilirsin — bu da özellikle farklı ortamlar (staging/production) arasında geçiş yaparken büyük kolaylık sağlar.
