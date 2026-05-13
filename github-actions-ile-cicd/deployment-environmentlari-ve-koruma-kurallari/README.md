# Deployment Environment'ları ve Koruma Kuralları

Bir uygulamayı birden fazla ortama deploy ediyorsun: test, staging, production... Her birinin farklı yapılandırmaları, farklı secret'ları ve farklı erişim kuralları var. GitHub Actions'taki **deployment environment** özelliği tam da bu senaryoyu çözmek için tasarlanmış.

## Deployment Environment Nedir?

Deployment environment, bir workflow job'unun deploy ettiği hedef ortamı temsil eder. `staging`, `production`, `preview` gibi isimler verdiğin bu ortamların her biri:

- **Kendine özgü secret'lar ve variable'lar** taşır — production secret'larına sadece production job'u erişebilir
- **Koruma kuralları** ile güvence altına alınabilir — birisi onay vermeden job başlamaz
- **Deployment geçmişini** tutar — hangi commit ne zaman deploy edildi, başarılı mı oldu, kim onayladı, hepsi kayıt altında
- **Deploy URL'i** barındırabilir — GitHub UI'da ve pull request'lerde tıklanabilir link olarak gösterir

Özetle environment, sadece bir isim etiketi değil; CI/CD akışının güvenlik ve izleme katmanıdır.

### Hangi Plan?

- **Public repo**: Tüm GitHub Free planlarında kullanılabilir
- **Private repo**: GitHub Pro veya GitHub Team ve üzeri gerektirir
- **Organization**: Admin yetkisi gerekir

## Environment Oluşturma

Repo sayfasında **Settings → Environments → New environment** yolunu izle. Environment adı gir (max 255 karakter, büyük/küçük harf duyarsız) ve **Configure environment** butonuna bas.

Eğer workflow'da referans verdiğin bir environment henüz oluşturulmamışsa GitHub onu koruma kuralı olmadan otomatik oluşturur. Bunu istemiyorsan önce ayarları belirle.

```yaml
# Environment isimlerini tutarlı tut — küçük harf, tire ile ayır
# Örnek: staging, production, preview-pr-123
```

## Koruma Kuralları

Koruma kuralları, bir job'un environment'a erişmeden önce karşılaması gereken koşulları tanımlar. Kural karşılanmadan job çalışmaz ve environment secret'larına erişemez.

### Required Reviewers

Belirlediğin kişi veya takımlar onay vermeden job `waiting` durumunda bekler. Onay geldiğinde job devam eder, reddedilirse iptal edilir.

**Önemli noktalar:**
- Maksimum **6 reviewer** ekleyebilirsin (kişi veya takım)
- Tek bir reviewerın onayı yeterli — hepsinin onayı gerekmez
- **"Prevent self-review"** seçeneği açıkken workflow'u tetikleyen kişi kendi onayını veremez (production için kesinlikle aç)
- Admin'lerin de bu kuralı atlatamaması için "Prevent administrators from bypassing configured protection rules" seçeneğini etkinleştir

```yaml
# Required Reviewer senaryosu:
# - Workflow çalışır, deploy-production job'u environment'a ulaşmaya çalışır
# - Job "waiting" durumuna geçer, reviewer'lara bildirim gider
# - Reviewer GitHub UI'dan veya API üzerinden onay verir
# - Job devam eder
jobs:
  deploy-production:
    runs-on: ubuntu-latest
    environment: production   # Bu satır required reviewer kuralını devreye sokar
    steps:
      - name: Production deploy
        run: ./scripts/deploy.sh production
```

### Wait Timer

Job başlamadan önce dakika cinsinden bir bekleme süresi ayarlayabilirsin. Required reviewer yoksa bile bu timer, aceleci bir deployment'ın önüne geçer. Deploy öncesi son kez düşünme fırsatı verir.

```yaml
# Wait timer + required reviewer birlikte kullanılabilir
# Örneğin: 10 dakika bekle, sonra reviewer onayı iste
# Her ikisi de environment ayarlarından yapılandırılır — YAML'da belirtilmez
```

### Branch ve Tag Kısıtlamaları

Hangi branch veya tag'lerden deploy yapılabileceğini sınırlarsın. Production environment'ına sadece `main` branch'ten deploy edilmesini zorunlu kılabilirsin — bir feature branch'ten kimse yanlışlıkla production'a deploy edemez.

**Seçenekler:**
- **All branches**: Kısıtlama yok
- **Protected branches**: Sadece branch protection rule'u olan branch'ler
- **Selected branches and tags**: Belirli pattern'lar (örn: `main`, `release/*`, `v*`)

```yaml
# Branch kısıtlaması YAML'da değil, GitHub Settings'ten yapılandırılır.
# Ama workflow'da hangi branch'te çalışacağını da kontrol edebilirsin:

on:
  push:
    branches:
      - main        # Sadece main'e push'ta tetikle

jobs:
  deploy-production:
    # Hem branch kısıtlaması hem de bu trigger koşulu production'ı korur
    environment: production
    runs-on: ubuntu-latest
    steps:
      - name: Deploy
        run: ./deploy.sh
```

## Workflow'da Environment Kullanımı

```yaml
name: CI/CD Pipeline

on:
  push:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Testleri çalıştır
        run: npm test

  deploy-staging:
    needs: test           # Test geçmeden staging'e gitme
    runs-on: ubuntu-latest
    environment: staging  # Staging environment — koruma kuralı yok, otomatik devam eder
    steps:
      - uses: actions/checkout@v4
      - name: Staging'e deploy et
        env:
          STAGING_KEY: ${{ secrets.DEPLOY_KEY }}  # Staging'e özgü secret
        run: ./scripts/deploy.sh staging

  deploy-production:
    needs: deploy-staging   # Staging başarılı olmadan production'a geçme
    runs-on: ubuntu-latest
    environment:
      name: production
      url: https://myapp.com   # Deploy URL — GitHub UI ve PR'larda tıklanabilir link
    steps:
      - uses: actions/checkout@v4
      - name: Production'a deploy et
        env:
          PROD_KEY: ${{ secrets.PROD_DEPLOY_KEY }}    # Production'a özgü secret
          APP_VERSION: ${{ vars.APP_VERSION }}         # Environment variable
        run: ./scripts/deploy.sh production
```

Bu workflow'da:
1. `test` job'u başarısız olursa hiçbir deploy tetiklenmez
2. `deploy-staging` koruma kuralı olmadan otomatik çalışır
3. `deploy-production` required reviewer bekliyorsa onay gelmeden duraklar

## Environment Secret'ları

Environment'a özgü secret'lar, **sadece o environment'ı kullanan job'larda** erişilebilir. Repo-level secret'lardan daha kısıtlıdır.

**Öncelik sırası:** Environment secret > Repository secret > Organization secret

Aynı isimde bir repo secret ve bir environment secret varsa, environment secret kazanır.

```yaml
jobs:
  deploy:
    environment: production
    runs-on: ubuntu-latest
    steps:
      - name: Secret'ı kullan
        env:
          # Bu secret sadece production environment koruma kuralları geçilince açılır
          DB_PASSWORD: ${{ secrets.DB_PASSWORD }}
          # vars context ile environment variable'ına eriş
          API_URL: ${{ vars.API_BASE_URL }}
        run: ./deploy.sh
```

Secret'lar hiçbir zaman log'a yazdırılmaz — GitHub bunları otomatik maskeler. Yanlışlıkla `echo $DB_PASSWORD` yazsan bile log'da `***` görürsün.

## Deployment Geçmişi

Repo'nun ana sayfasında sağ tarafta **Environments** bölümü görünür. Her environment'a tıklayarak:

- Son deployment'ın durumunu görürsün: `success`, `failure`, `in_progress`
- Hangi commit deploy edildiğini, kim tetiklediğini takip edersin
- Deployment URL'ini ziyaret edebilirsin

REST API üzerinden programatik erişim de mümkün:

```bash
# Bir repo'nun tüm deployment'larını listele
curl -H "Authorization: token $GITHUB_TOKEN" \
  https://api.github.com/repos/OWNER/REPO/deployments

# Belirli bir environment'ın deployment'larını filtrele
curl -H "Authorization: token $GITHUB_TOKEN" \
  "https://api.github.com/repos/OWNER/REPO/deployments?environment=production"
```

## Pratik Senaryo: Staging → Production Akışı

Gerçek bir proje için önerilen yapı:

```yaml
name: Deploy Pipeline

on:
  push:
    branches: [main]

jobs:
  # 1. Adım: CI — testler, lint, build
  ci:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm test
      - run: npm run build

  # 2. Adım: Staging deploy — CI geçince otomatik
  staging:
    needs: ci
    runs-on: ubuntu-latest
    environment:
      name: staging
      url: https://staging.myapp.com   # PR'larda "View deployment" linki
    steps:
      - uses: actions/checkout@v4
      - name: Staging'e deploy et
        env:
          DEPLOY_TOKEN: ${{ secrets.STAGING_DEPLOY_TOKEN }}
          DB_URL: ${{ vars.STAGING_DB_URL }}
        run: |
          ./scripts/deploy.sh \
            --env staging \
            --token "$DEPLOY_TOKEN" \
            --db "$DB_URL"

  # 3. Adım: Production deploy — required reviewer onayı bekler
  production:
    needs: staging
    runs-on: ubuntu-latest
    environment:
      name: production
      url: https://myapp.com
    steps:
      - uses: actions/checkout@v4
      - name: Production'a deploy et
        env:
          DEPLOY_TOKEN: ${{ secrets.PROD_DEPLOY_TOKEN }}
          DB_URL: ${{ vars.PROD_DB_URL }}
        run: |
          ./scripts/deploy.sh \
            --env production \
            --token "$DEPLOY_TOKEN" \
            --db "$DB_URL"
      - name: Deployment sonrasını doğrula
        run: |
          # Health check — deploy başarılı mı?
          curl --fail https://myapp.com/health || exit 1
```

Bu yapıda:
- CI başarısız olursa hiçbir deploy olmaz
- Staging'e push her merge'de otomatik gider — ekip değişiklikleri hemen test ortamında görebilir
- Production için required reviewer `waiting` state'inde tutar — ekip lideri veya DevOps mühendisi onaylar
- Her iki environment için ayrı secret ve variable setleri var — staging credential'ları production'a karışmaz

## Environment'ı Silmek

Settings → Environments → ilgili environment'ın yanındaki çöp kutusu ikonu → onayla.

Silme işlemi:
- O environment'a ait tüm secret ve variable'ları siler
- O environment'ı bekleyen job'ları otomatik olarak **fail** eder
- Deployment geçmişini siler

Bu yüzden production environment'ını silmeden önce iki kez düşün.
