# Secret'lar ve Güvenli Değişken Yönetimi

Bir CI/CD pipeline yazarken kaçınılmaz olarak şu sorularla karşılaşırsın: "API key'i nereye koyacağım? Deployment şifresini workflow'a nasıl aktaracağım?" Bu soruların yanlış cevabı credentials'ı kaynak koduna gömmek, doğru cevabı ise GitHub'ın secret mekanizmasını kullanmak.

## Secret Nedir?

Secret, workflow'a güvenli şekilde aktarılması gereken hassas bilgidir. API key, database şifresi, service token, SSH private key, cloud provider credentials — bunların hepsi secret kategorisine girer.

Secret'ların kaynak kodda plain text olarak durmaması gerekir. `config.yml` içinde ya da `.env` dosyasında hardcode edilmiş bir API key:

- Repository'e erişimi olan herkes tarafından görülebilir
- Git history'den silinse bile geçmişte iz bırakır
- Public repo'larda internet üzerinden erişilebilir hale gelir

GitHub, secret'ları şifreli olarak saklar. Workflow çalışırken runner'a aktarılırlar, ancak log çıktılarında asla plain text olarak görünmezler — GitHub bu değerleri otomatik olarak maskeler ve `***` şeklinde gösterir.

## Secret Seviyeleri

GitHub Actions'ta üç farklı seviyede secret tanımlayabilirsin. Hangi seviyeyi seçeceğin erişim kapsamına göre belirlenir.

### Repository Secret

Sadece tanımlandığı repository'e özgüdür. Tek bir proje için kullandığın API key veya token'lar için uygundur.

**Nerede oluşturulur:** Repo → Settings → Security → Secrets and variables → Actions → Secrets sekmesi

Bu seviyeye erişmek için repo'da `write` iznine ya da collaborator statüsüne ihtiyacın var.

### Environment Secret

Belirli bir deployment environment'ına — örneğin `production`, `staging`, `development` — özgü secret'lardır. Environment protection rules ile birleştiğinde güçlü bir deployment güvenliği sağlar.

Örneğin `staging` environment'ında farklı bir database URL, `production` environment'ında farklı bir database URL kullanıyorsan, bunları ayrı environment secret olarak tanımlarsın. Aynı secret adı her environment'ta farklı değer alabilir.

**Nerede oluşturulur:** Repo → Settings → Environments → [environment adı] → Environment secrets

Bu seviyeye erişmek için repository owner (kişisel repo) ya da `admin` izni (organization repo) gerekir.

### Organization Secret

Birden fazla repository'de aynı secret'ı kullanmak istediğinde organization seviyesinde tanımlarsın. Organizasyon içindeki hangi repo'ların bu secret'a erişeceğini access policy ile kontrol edebilirsin: tüm repo'lar, sadece private repo'lar ya da seçili repo'lar.

**Nerede oluşturulur:** Organization → Settings → Secrets and variables → Actions

Organization secret'ları, aynı kimlik bilgilerini kullanan onlarca repo'yu tek yerden yönetmeni sağlar. Örneğin şirketin NPM token'ı veya ortak bir notification service key'i burada tutulabilir.

## Secret Oluşturma

### GitHub UI ile

1. Repository ana sayfasına git
2. **Settings** sekmesini aç
3. Sol menüden **Secrets and variables** → **Actions** yolunu izle
4. **New repository secret** butonuna tıkla
5. **Name** alanına secret adını yaz — büyük harf ve underscore convention'ını kullan: `DATABASE_URL`, `API_TOKEN`, `DEPLOY_SSH_KEY`
6. **Value** alanına değeri yapıştır
7. **Add secret** ile kaydet

Secret bir kez kaydedildikten sonra değerini UI üzerinden göremezsin. Sadece güncelleyebilir ya da silebilirsin.

### GitHub CLI ile

```bash
# Interaktif olarak değer gir
gh secret set API_TOKEN

# Değeri doğrudan geç
gh secret set API_TOKEN --body "your-token-value"

# Dosyadan oku
gh secret set SSH_PRIVATE_KEY < ~/.ssh/id_rsa

# Environment secret oluştur
gh secret set DATABASE_URL --env production

# Organization secret oluştur (tüm repo'lara açık)
gh secret set SHARED_TOKEN --org my-org --visibility all

# Organization secret oluştur (belirli repo'lara)
gh secret set SHARED_TOKEN --org my-org --repos "repo1,repo2"
```

## Workflow'da Secret Kullanımı

Secret'lara `secrets` context üzerinden erişirsin.

```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: API çağrısı yap
        env:
          # Secret'ı environment variable olarak adımın scope'una taşı
          API_TOKEN: ${{ secrets.API_TOKEN }}
          DATABASE_URL: ${{ secrets.DATABASE_URL }}
        run: |
          # Shell variable olarak kullan — log'a düşmez
          curl -H "Authorization: Bearer $API_TOKEN" https://api.example.com/deploy
```

```yaml
      - name: Docker Hub'a push et
        uses: docker/login-action@v3
        with:
          # Action input'u olarak da geçirebilirsin
          username: ${{ secrets.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}
```

**Kaçınman gereken kullanım:**

```yaml
      # YANLIŞ: secret doğrudan run komutunun argümanına geçirilmesi
      # Process listing'de görünebilir, log'a düşebilir
      - name: Kötü örnek
        run: curl -H "Authorization: Bearer ${{ secrets.API_TOKEN }}" https://api.example.com
```

Yukarıdaki örnekte `${{ secrets.API_TOKEN }}` değeri shell komutunun içine yazılır. GitHub bunu log'da maskeler ama bu yaklaşım process listing'de (`ps aux`) görünür olma riskini taşır. Her zaman `env:` bloğunu kullan.

## GITHUB_TOKEN

Her workflow çalışmasında GitHub otomatik olarak `GITHUB_TOKEN` adında özel bir token üretir. Bu token'ı kendin oluşturmak zorunda değilsin — her zaman hazır gelir.

Bu token ile:

- Repo içeriğini okuyabilir ve yazabilirsin
- Pull request açabilir, yorum ekleyebilirsin
- Release oluşturabilirsin
- GitHub Packages'a push edebilirsin

```yaml
jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Release oluştur
        env:
          # İki kullanım biçimi de aynı token'a işaret eder
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          # veya: GH_TOKEN: ${{ github.token }}
        run: gh release create v1.0.0 --title "v1.0.0" --generate-notes
```

### Permissions ile Kapsamı Daralt

`GITHUB_TOKEN`'ın varsayılan izinleri repo ayarlarına göre değişir. Minimum gerekli izin prensibini uygulamak için `permissions:` bloğunu açıkça tanımla:

```yaml
# Workflow genelinde izinleri kısıtla
permissions:
  contents: read       # Repo içeriğini sadece okuyabilir
  pull-requests: write # PR'lara yorum yapabilir
  issues: read         # Issue'ları okuyabilir

jobs:
  lint:
    runs-on: ubuntu-latest
    # Job seviyesinde de tanımlanabilir — workflow tanımını override eder
    permissions:
      contents: read
    steps:
      - uses: actions/checkout@v4
```

```yaml
# Tüm izinleri kapat, sadece ihtiyacın olanı aç
permissions: {}  # Hiçbir izin yok

jobs:
  security-scan:
    runs-on: ubuntu-latest
    permissions:
      security-events: write  # Sadece security event yazma yetkisi
    steps:
      - name: Güvenlik taraması yap
        run: echo "Scanning..."
```

## Fork PR'larında Secret Güvenliği

Fork'tan gelen pull request'lerde secret'lar runner'a aktarılmaz. Bu kasıtlı bir güvenlik kısıtlamasıdır.

Senaryo: Biri senin public repo'unu fork'ladı ve bir PR açtı. PR'ın trigger ettiği workflow, senin secret'larına erişmeye çalışsa bile erişemez. Fork sahibi bu yolla secret'larına ulaşamaz.

`pull_request` event'i ile tetiklenen workflow'larda secret'lar boş gelir (`GITHUB_TOKEN` hariç — o da kısıtlı izinlerle gelir).

**`pull_request_target` ile dikkatli ol:**

```yaml
# pull_request_target base branch context'inde çalışır
# Secret'lara erişebilir AMA fork'tan gelen kod çalıştırırsan tehlikelidir
on:
  pull_request_target:
    types: [opened, synchronize]

jobs:
  label:
    runs-on: ubuntu-latest
    permissions:
      pull-requests: write
    steps:
      # checkout kullanmadan, sadece metadata ile çalışmak güvenlidir
      - name: PR'a label ekle
        uses: actions/github-script@v7
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
          script: |
            github.rest.issues.addLabels({
              owner: context.repo.owner,
              repo: context.repo.repo,
              issue_number: context.payload.pull_request.number,
              labels: ['needs-review']
            })
```

`pull_request_target` ile fork'tan gelen kodu `actions/checkout` ile çekip çalıştırırsan, o kod senin secret'larına erişebilir hale gelir. Bu ciddi bir güvenlik açığıdır.

## Hassas Veriyi Maskeleme

Bazen bir secret olmayan ama yine de log'da gözükmesini istemediğin dinamik değerler oluşursun. Örneğin bir API'den dönen geçici token ya da runtime'da üretilen bir credential. Bunları `add-mask` komutuyla maskele:

```yaml
steps:
  - name: Geçici token al
    id: get-token
    run: |
      # API'den dönen değeri bir değişkene al
      TEMP_TOKEN=$(curl -s https://auth.example.com/token | jq -r '.access_token')
      
      # Log'larda *** olarak görünsün
      echo "::add-mask::$TEMP_TOKEN"
      
      # Sonraki adımlara output olarak ilet
      echo "token=$TEMP_TOKEN" >> $GITHUB_OUTPUT

  - name: Maskelenmiş token'ı kullan
    env:
      AUTH_TOKEN: ${{ steps.get-token.outputs.token }}
    run: |
      # Log'da *** görünür, gerçek değer gizlenir
      curl -H "Authorization: Bearer $AUTH_TOKEN" https://api.example.com
```

## Büyük Secret'lar İçin GPG Şifreleme

GitHub'ın secret başına 48 KB limiti var. Büyük bir JSON credentials dosyası veya uzun bir private key gibi değerleri bu limiti aşıyorsa GPG şifreleme kullan:

```bash
# Lokal makinede: dosyayı şifrele
gpg --symmetric --cipher-algo AES256 credentials.json
# credentials.json.gpg oluşur

# Şifrelenmiş dosyayı repo'ya commit et
# GPG passphrase'i secret olarak kaydet: GPG_PASSPHRASE
gh secret set GPG_PASSPHRASE
```

```yaml
steps:
  - name: Şifreli dosyayı çöz
    env:
      GPG_PASSPHRASE: ${{ secrets.GPG_PASSPHRASE }}
    run: |
      # Passphrase ile dosyayı çöz
      gpg --quiet --batch --yes \
        --passphrase="$GPG_PASSPHRASE" \
        --output credentials.json \
        credentials.json.gpg
      
      # credentials.json artık kullanılabilir
      cat credentials.json | jq '.project_id'
```

## Güvenlik Best Practices

**Secret'ları command line argümanı olarak geçirme.** Çalışan process'ler `ps aux` ile listelenebilir ve argümanlar görünür. Her zaman environment variable kullan.

**`if:` koşulunda secret kullanamazsın.** Aşağıdaki kullanım çalışmaz:

```yaml
# Bu çalışmaz — secret'lar if: conditional'ında evaluate edilmez
- name: Koşullu adım
  if: ${{ secrets.DEPLOY_TOKEN != '' }}
  run: echo "Token mevcut"
```

Bunun yerine secret'ın varlığını kontrol etmek için bir önceki adımda environment variable'a al ve output olarak ilet.

**Minimum izin prensibini uygula.** Her workflow için `permissions:` bloğunu açıkça yaz ve sadece ihtiyaç duyulan izinleri ver. `GITHUB_TOKEN`'ın varsayılan izinlerini körü körüne kullanma.

**Secret isimlerinde büyük harf ve underscore kullan.** `API_TOKEN`, `DATABASE_URL`, `DEPLOY_SSH_KEY` gibi. Okunabilirlik ve convention açısından önemli.

**Secret'ları log'a yazdırma.** `echo ${{ secrets.MY_SECRET }}` gibi ifadeler GitHub tarafından otomatik maskelenir ancak bu alışkanlığı edinme. Debug için geçici olarak bile olsa secret'ı doğrudan print etmekten kaçın.

**Reusable workflow'lara secret'lar otomatik geçmez.** Başka bir workflow'u `uses:` ile çağırıyorsan, secret'ları açıkça `secrets:` bloğuyla iletmen gerekir:

```yaml
jobs:
  call-deploy:
    uses: ./.github/workflows/deploy.yml
    secrets:
      # Secret'ları reusable workflow'a açıkça ilet
      deploy-token: ${{ secrets.DEPLOY_TOKEN }}
      db-url: ${{ secrets.DATABASE_URL }}
```

Ya da tüm secret'ları toplu iletmek için:

```yaml
jobs:
  call-deploy:
    uses: ./.github/workflows/deploy.yml
    secrets: inherit  # Tüm secret'ları devral
```

**Cloud provider'lar için OIDC'yi değerlendir.** AWS, Azure, GCP gibi büyük cloud provider'larla çalışıyorsan, long-lived credentials saklamak yerine OpenID Connect ile keyless authentication yapabilirsin. Secret saklamak zorunda kalmadan geçici token alırsın — bu yaklaşım secret rotation sorununu tamamen ortadan kaldırır.
