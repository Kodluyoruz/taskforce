# CD Pipeline Tasarımı: Staging ve Production

CI pipeline'ını kurduğunda kod kalitesini otomatik olarak kontrol altına almış oldun. Şimdi bir adım öteye geçme zamanı: o test edilmiş ve build edilmiş kodu gerçek ortamlara taşımak. Bu konu, daha önce gördüğün CI, artifact, environment ve secret konularını tek bir çalışan CD pipeline'ında birleştiriyor.

## CI'dan CD'ye: Genel Akış

Bir değişiklik `main` branch'ine merge edildiği andan itibaren şu akış devreye girer:

```
push to main
    ↓
CI Job: lint → test → build
    ↓
Artifact Upload (dist/)
    ↓
Staging Deploy (artifact indir → staging'e gönder)
    ↓
Manuel Onay (required reviewer bekle)
    ↓
Production Deploy (aynı artifact → production'a gönder)
```

Bu akışın en önemli noktası şu: staging ve production'a **aynı artifact** deploy ediliyor. Build işlemi tek seferlik yapılıyor, çıktısı her iki ortama da taşınıyor. Bu sayede "staging'de test ettiğim ile production'a gönderdiğim farklıydı" sorununu tamamen ortadan kaldırıyorsun.

Her aşama bir öncekinin başarıyla tamamlanmasına bağlı. CI başarısız olursa hiçbir deploy gerçekleşmez. Staging başarısız olursa production'a hiç ulaşılmaz. Bu kasıtlı bir tasarım — hata mümkün olan en erken noktada yakalnıyor.

## needs: ile Job Zinciri

GitHub Actions'ta job'lar varsayılan olarak paralel çalışır. CD pipeline'ında ise sıralama kritik, bu yüzden `needs:` anahtarını kullanıyorsun.

```yaml
jobs:
  ci:
    name: Test ve Build
    runs-on: ubuntu-latest
    # Bu job bağımsız çalışır, herhangi bir önkoşul yok

  deploy-staging:
    name: Staging Deploy
    needs: ci          # ci job'u başarıyla bitmedikçe bu job başlamaz
    runs-on: ubuntu-latest

  deploy-production:
    name: Production Deploy
    needs: deploy-staging   # deploy-staging başarıyla bitmedikçe bu job başlamaz
    runs-on: ubuntu-latest
```

`needs:` bir dizi de alabilir: `needs: [ci, security-scan]` gibi. Bu durumda listedeki tüm job'ların başarıyla tamamlanması gerekir.

Artifact aktarımı bu zincirin içine entegre ediliyor. CI job'u `actions/upload-artifact@v4` ile build çıktısını GitHub'a yükler. Deploy job'ları ise `actions/download-artifact@v4` ile aynı artifact'ı indirir. Her job kendi runner'ında sıfırdan başladığı için dosyaları bu şekilde aktarmak zorunlu.

## concurrency ile Üst Üste Deploy Önleme

Aynı anda iki deploy çalışırsa ne olur? İkisi de aynı sunucuya bağlanmaya çalışır, dosya yazma işlemleri çakışır, biri diğerinin yarım kaldığı bir ortam üzerine deploy eder. Sonuç: bozuk bir production ortamı.

Bunu önlemek için `concurrency:` bloğunu kullanıyorsun:

```yaml
concurrency:
  group: deploy-${{ github.ref }}   # Aynı branch için tek bir deploy akışı
  cancel-in-progress: true           # Yeni deploy geldiğinde eskisini iptal et
```

`group:` değeri bir string — aynı string değerine sahip workflow run'ları aynı concurrency grubuna girer. `cancel-in-progress: true` ile gruba yeni bir run girdiğinde, hâlâ devam eden eski run iptal edilir.

`github.ref` kullanmak önemli: `refs/heads/main` için bir grup, `refs/heads/feature-x` için başka bir grup oluşur. Bu sayede farklı branch'lerde çalışan pipeline'lar birbirini etkilemez.

`cancel-in-progress: false` da bir seçenek — bu durumda yeni run, eskisi bitene kadar kuyrukta bekler. Deploy için genellikle `true` tercih edilir çünkü eski bir commit'i deploy etmektense en güncel olanı deploy etmek istiyorsun.

## Tam CI/CD Pipeline Örneği

Aşağıdaki YAML kopyala-yapıştır kullanıma hazır. Gerçek projende sadece deploy adımlarını kendi altyapına göre güncelliyorsun.

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main]   # Sadece main'e push'ta tetikle

concurrency:
  group: deploy-${{ github.ref }}   # Aynı anda tek deploy
  cancel-in-progress: true

jobs:
  ci:
    name: Test ve Build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'           # node_modules cache'lenir, sonraki run'lar hızlanır
      - run: npm ci
      - run: npm test
      - run: npm run build
      - uses: actions/upload-artifact@v4
        with:
          name: dist             # Artifact adı — download adımında bu ad kullanılır
          path: dist/
          retention-days: 7     # 7 gün sonra otomatik silinir

  deploy-staging:
    name: Staging Deploy
    needs: ci                    # CI başarılıysa çalış
    runs-on: ubuntu-latest
    environment: staging         # Koruma kuralları burada devreye girer
    steps:
      - uses: actions/download-artifact@v4
        with:
          name: dist
          path: dist/
      - name: Staging'e deploy et
        env:
          DEPLOY_KEY: ${{ secrets.STAGING_DEPLOY_KEY }}
        run: |
          echo "Staging'e deploy ediliyor..."
          # Gerçek senaryoda: rsync, ssh, cloud CLI komutu vs.

  deploy-production:
    name: Production Deploy
    needs: deploy-staging        # Staging başarılıysa çalış
    runs-on: ubuntu-latest
    environment:
      name: production           # Required reviewer burada bekler
      url: https://myapp.com
    steps:
      - uses: actions/download-artifact@v4
        with:
          name: dist
          path: dist/
      - name: Production'a deploy et
        env:
          DEPLOY_KEY: ${{ secrets.PROD_DEPLOY_KEY }}
        run: |
          echo "Production'a deploy ediliyor..."
```

Buradaki `environment: staging` ve `environment: production` tanımları, daha önce gördüğün environment koruma kurallarını aktive eder. Production environment'ında `Required reviewers` ayarlandıysa, `deploy-production` job'u başlamadan önce GitHub onay bekler. Bu onay bekleme süresi iş akışını durdurmaz — runner tahsis edilmez, dakika harcanmaz.

## Platform-Agnostic Deploy Adımı

Pipeline yapısı her zaman aynı, değişen sadece deploy komutları. Yaygın pattern'lar:

**SSH + rsync ile sunucuya kopyalama:**
```bash
# Artifact indir, sunucuya gönder
rsync -avz --delete dist/ user@server:/var/www/app/
```

Bu yaklaşımda `DEPLOY_KEY` secret'ı SSH private key içerir. Runner'da `~/.ssh/` dizinine yazılır, sonra rsync veya ssh komutu ile sunucuya bağlanılır.

**Cloud provider CLI:**
- AWS: `aws s3 sync dist/ s3://my-bucket/` veya `aws ecs update-service`
- Azure: `az storage blob upload-batch` veya `az webapp deploy`
- GCP: `gcloud app deploy` veya `gsutil rsync`

Her provider kendi action'ını da sunuyor — AWS için `aws-actions/configure-aws-credentials`, Azure için `azure/login` gibi. Bu action'lar kimlik doğrulamayı kolaylaştırıyor.

**Docker ile container deploy:**
```bash
# Image build et, registry'e push et, container'ı yeniden başlat
docker build -t myapp:${{ github.sha }} .
docker push registry.example.com/myapp:${{ github.sha }}
ssh user@server "docker pull registry.example.com/myapp:${{ github.sha }} && docker compose up -d"
```

Docker yaklaşımında artifact olarak dist/ yerine Docker image kullanılabilir — build job'u image oluşturup registry'e push eder, deploy job'u sadece pull + restart yapar.

Hangi yöntemi seçersen seç, pipeline iskeletinin değişmediğini görüyorsun: needs zinciri, concurrency kontrolü, environment onayı, secret üzerinden kimlik doğrulama. Bunlar platform bağımsız — sadece son `run:` satırları değişiyor.

## Job Başarısızlığında Davranış

`needs:` zinciri "fast fail" prensibiyle çalışır: zincirin herhangi bir halkası kırılınca sonraki job'lar çalışmaz.

- `ci` başarısız olursa: `deploy-staging` ve `deploy-production` her ikisi de `skipped` durumuna geçer. Kodu test etmeden deploy etmek mümkün değil.
- `deploy-staging` başarısız olursa: `deploy-production` `skipped` olur. Staging'de başarısız olan bir değişiklik production'a ulaşamaz.
- `deploy-production` başarısız olursa: Pipeline orada durur. Workflow run sayfasında kırmızı görünür, gerekli kişilere bildirim gider.

Bu kaskat davranışı manuel müdahale gerektirmeden çalışır. CI'da test başarısız oldu mu? Production hiç etkilenmedi. Staging deploy sırasında sunucuya bağlanılamadı mı? Production olduğu gibi kaldı.

Başarısız bir adımı atlamak istersen `if: always()` veya `if: failure()` koşullarını kullanabilirsin — örneğin cleanup job'ları için. Ama deploy zincirinde bu koşullara genellikle ihtiyaç duymazsın.

## İyi Bir CD Pipeline'ın Özellikleri

Son olarak, sağlıklı bir CD pipeline'ını tanımlayan özelliklere bakmak gerekiyor. Bunlar teknik kurallar değil, tasarım hedefleri.

**Tekrarlanabilirlik (idempotency):** Aynı commit'i iki kez deploy etmek, bir kez deploy etmekle aynı sonucu vermelidir. Bu özelliği kazanmanın en iyi yolu artifact kullanmak — her deploy aynı build çıktısından başlar.

**Hızlı geri alınabilirlik (rollback):** Bir şeyler ters giderse önceki çalışan versiyona dönebilmelisin. Basit yöntem: artifact retention-days'i yeterince yüksek tut, önceki başarılı run'ın artifact'ını indir ve deploy et. Daha gelişmiş yaklaşım: deploy hedefinde versiyonlu dizinler kullanmak ve symlink'i değiştirerek rollback yapmak.

**Gözlemlenebilirlik:** Her deploy'un ne zaman, kim tarafından (hangi commit ile), ne kadar sürdüğü ve başarılı olup olmadığı görünür olmalı. GitHub Actions bu bilgiyi otomatik olarak sağlıyor — Actions sekmesinde her run için tam log geçmişi mevcut. Environment'a `url:` tanımlarsan son deploy'un URL'i de oradan erişilebilir hale gelir.

**Onay mekanizması:** Doğrudan production'a deploy etmek yerine, bir insanın değişikliği görmesi ve onaylaması production ortamını koruyan en basit mekanizmadır. GitHub'ın environment required reviewers özelliği bu işi workflow kodunu değiştirmeden yapıyor — tamamen konfigürasyon tarafında kalıyor.

Bu dört özelliği sağlayan bir pipeline, hem güvenle çalıştırılabilen hem de bir şeyler ters gittiğinde hızla düzeltilebilen bir sistem ortaya koyuyor. CI kısmında test kalitesini, CD kısmında deploy güvenliğini sağladığında, kod değişikliklerini production'a taşımak rutin ve güvenilir bir süreç haline geliyor.
