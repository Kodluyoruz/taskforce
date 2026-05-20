# Temel Kavramlar: Workflow, Event, Job, Step, Action, Runner

GitHub Actions'ı kullanmaya başladığında YAML dosyalarına bakıp "bu ne anlama geliyor?" diye sorabilirsin. `on:`, `jobs:`, `steps:`, `uses:`, `runs-on:` — bunlar birbirinden bağımsız anahtar kelimeler değil. Birbirine bağlı, birbirini tetikleyen bir sistemin parçaları. Bu konuda bu altı kavramı tek tek açıklayacağız, aralarındaki ilişkiyi netleştireceğiz ve her şeyi bir arada gösteren çalışan bir örnek inceleyeceğiz.

## Genel Bakış: Bileşenler Birbirini Nasıl Tetikler?

GitHub Actions'ta bir otomasyon süreci şu zincirle işler:

```
Event
  └─► Workflow tetiklenir
        └─► Job'lar çalışır (paralel ya da sıralı)
              └─► Her Job, Step'lerden oluşur
                    └─► Her Step bir Action ya da shell komutu çalıştırır
                          └─► Tüm bunlar bir Runner üzerinde yürütülür
```

Zinciri gerçek bir senaryo üzerinden düşün: Bir developer `main` branch'ine kod push'lar. Bu bir **event**. Bu event, `.github/workflows/ci.yml` dosyasındaki **workflow**'u tetikler. Workflow içinde `test` ve `lint` adında iki **job** tanımlı; bu job'lar aynı anda başlar. Her job, bir **runner** üzerinde temiz bir ortamda açılır. Her job kendi **step**'lerini sırayla çalıştırır: kodu repodan çek, bağımlılıkları yükle, testleri koştur. "Kodu repodan çek" adımı bir **action** kullanır; diğerleri doğrudan shell komutları çalıştırır.

Altı kavramı bu zincir içinde sırayla ele alalım.

## Workflow

Workflow, bir otomasyon sürecinin tamamını tanımlayan YAML dosyası. `.github/workflows/` klasörüne koyduğun her `.yml` veya `.yaml` dosyası bir workflow'dur.

Bir repoda birden fazla workflow olabilir. Örneğin:

```
.github/
└── workflows/
    ├── ci.yml          # Push'larda test ve build
    ├── deploy.yml      # Release tag'inde production deploy
    └── codeql.yml      # Haftalık güvenlik taraması
```

Her workflow bağımsızdır. Farklı event'lerle tetiklenebilir, farklı job'lar içerebilir, birbirini doğrudan çağıramazlar (ancak `workflow_call` event'i ile bir workflow başkasını tetikleyebilir, bunu ilerleyen konularda göreceğiz).

Workflow dosyasının adı herhangi bir şey olabilir; GitHub Actions dosyanın içindeki `name:` alanını kullanır. Dosya adı sadece seni organize etmeye yarar.

## Event

Event, bir workflow'u başlatan olaydır. YAML dosyasında `on:` anahtarıyla tanımlanır.

En sık kullanılan event'ler:

- **`push`** — Bir branch'e commit push'landığında
- **`pull_request`** — PR açıldığında, güncellendiğinde ya da kapatıldığında
- **`schedule`** — Cron ifadesiyle belirlenen zamanda (örneğin her gece saat 02:00'de)
- **`workflow_dispatch`** — GitHub arayüzünden ya da API üzerinden manuel tetikleme
- **`release`** — Bir GitHub release oluşturulduğunda veya yayınlandığında

`on:` tek bir event alabilir ya da birden fazla event listesi alabilir:

```yaml
on:
  push:
    branches: [main, develop]   # Sadece bu branch'lere push'larda tetiklenir
  pull_request:
    branches: [main]            # main'e açılan PR'larda tetiklenir
  workflow_dispatch:            # Manuel çalıştırma da mümkün
```

Branch filtresi gibi daraltıcılar eklemezsen, her push her workflow'u tetikler — bu da gereksiz çalışma demek. Event'leri ve filtrelerini düşünerek tanımlamak iyi bir alışkanlık.

## Job

Job, aynı runner üzerinde çalışan step'ler topluluğudur.

Birkaç önemli özelliği var:

**Varsayılan olarak paralel çalışır.** `jobs:` altında birden fazla job tanımlarsan, bunlar aynı anda başlar. Her biri kendi runner'ını alır, birbirinin bitmesini beklemez.

**`needs:` ile sıralı yapılabilir.** Bir job başka bir job'a bağımlıysa, `needs:` anahtarıyla bekleme ilişkisi kurulur:

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps: [...]

  deploy:
    runs-on: ubuntu-latest
    needs: test          # test job'u başarıyla bitmeden deploy başlamaz
    steps: [...]
```

**Her job temiz bir ortamda başlar.** Runner sıfırdan başlatılır. Bir job'un dosya sistemine yazdığı dosyalar diğer job'da mevcut olmaz. Job'lar arasında veri paylaşmak istersen `artifact` kullanman gerekir.

Job'lara anlamlı ID'ler ver: `test`, `build`, `lint`, `deploy` gibi. Bu ID'ler log'larda, `needs:` referanslarında ve GitHub arayüzünde görünür.

## Step

Step, bir job içindeki tek bir iş birimidir.

İki türde olabilir:

- **`run:`** — Doğrudan shell komutu çalıştırır. Ubuntu runner'larında bash, Windows'ta PowerShell varsayılan.
- **`uses:`** — Bir action çağırır. Action, başkası tarafından yazılmış ve paketlenmiş bir iş birimi.

Aynı job içindeki step'ler sırayla çalışır; biri bitmeden diğeri başlamaz. Aynı runner üzerinde olduklarından dosya sistemini paylaşırlar — bir step'in oluşturduğu dosyayı bir sonraki step görebilir.

Step'ler birbirinin çıktısını kullanabilir. Bir step `id:` ile tanımlanırsa, sonraki step'ler `steps.<id>.outputs.<key>` ifadesiyle o step'in ürettiği değerlere ulaşabilir.

Her step'e `name:` vermek zorunlu değil, ama log'ları okurken ne yapıldığını anlamak için faydalı.

## Action

Action, tekrar kullanılabilir ve paketlenmiş bir iş birimidir. Step içinde `uses:` anahtarıyla referans edilir.

Action'lar üç yerden gelebilir:

- **GitHub Marketplace** — Topluluk tarafından paylaşılan ve yayınlanan action'lar. `actions/checkout`, `actions/setup-node`, `actions/upload-artifact` gibi GitHub'ın resmi action'ları da buradan gelir.
- **Aynı repodaki yerel action'lar** — `uses: ./.github/actions/my-action` şeklinde referans edilir.
- **Başka bir repodaki action'lar** — `uses: owner/repo@tag` formatıyla çağrılır.

Sürüm sabitlemek önemlidir. `uses: actions/checkout@v4` yazmak, o action'ın v4 etiketini kullan demek. `@main` gibi branch referansı kullanmak güvenlik açısından önerilmez; birisi o branch'e kötü amaçlı kod push'layabilir.

Kendi action'ını da yazabilirsin. JavaScript, Docker container ya da composite action olarak üç farklı türde action geliştirilebilir. Bu konuyu "Custom Action Yazma" bölümünde ele alacağız.

## Runner

Runner, workflow'un üzerinde çalıştığı makinedir. `runs-on:` anahtarıyla belirtilir.

**GitHub-hosted runner'lar** — GitHub'ın sağladığı ve yönettiği sanal makineler. Her workflow çalışmasında temiz bir ortam başlatılır:

| Label | İşletim Sistemi |
|---|---|
| `ubuntu-latest` | Ubuntu Linux (en güncel LTS) |
| `windows-latest` | Windows Server |
| `macos-latest` | macOS |

GitHub-hosted runner'larda yaygın araçlar önceden kurulu gelir: Node.js, Python, Java, Docker, Git vb.

**Self-hosted runner'lar** — Kendi sunucunu ya da sanal makineni GitHub Actions'a bağlayabilirsin. `runs-on: self-hosted` ya da özel label'larla tanımlanır. Özel donanım gereksinimleri, özel ağ erişimi ya da ücretsiz dakika limitini aşan iş yükleri için tercih edilir.

Her job kendi runner'ında çalışır. Aynı workflow içinde farklı job'lar farklı runner'lar kullanabilir: test'i Ubuntu'da, build'i Windows'ta çalıştırabilirsin.

## Hepsini Bir Arada Gösteren Örnek

Şimdiye kadar anlattıklarımızın tamamını tek bir YAML dosyasında görelim:

```yaml
name: CI Pipeline          # Workflow adı — GitHub Actions sekmesinde görünür

on:                        # Event tanımı — hangi olay bu workflow'u tetikler?
  push:
    branches: [main]       # Sadece main branch'e push'larda tetiklenir
  pull_request:
    branches: [main]       # main'e açılan PR'larda da tetiklenir

jobs:                      # Bu workflow'daki job'lar

  test:                    # Job ID — needs: referanslarında ve arayüzde görünür
    runs-on: ubuntu-latest # Runner seçimi — GitHub-hosted Ubuntu makinesi

    steps:                 # Bu job'un sırayla çalışacak adımları

      - name: Kodu çek     # Step'e okunabilir bir ad vermek log'ları kolaylaştırır
        uses: actions/checkout@v4   # Action kullanımı — repo içeriğini runner'a çeker

      - name: Node.js kur
        uses: actions/setup-node@v4 # Başka bir action — Node.js ortamını hazırlar
        with:
          node-version: '20'        # Action'a parametre geçme

      - name: Bağımlılıkları yükle
        run: npm ci                 # Shell komutu — run: ile çalıştırılır

      - name: Linter çalıştır
        run: npm run lint           # Bir önceki step'in kurduğu bağımlılıkları kullanır

      - name: Testleri çalıştır
        run: npm test               # Test suite'ini koşar; başarısız olursa job durur

  build:                   # İkinci job — test ile paralel başlar
    runs-on: ubuntu-latest
    needs: test            # Ancak test başarıyla biterse çalışır (sıralı ilişki)

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '20'

      - run: npm ci

      - name: Production build al
        run: npm run build          # Build artifact'ını üretir

      - name: Build çıktısını yükle
        uses: actions/upload-artifact@v4  # Artifact'ı diğer job'ların erişimine açar
        with:
          name: build-output
          path: dist/
```

Bu dosyada her kavramın nerede durduğuna bakalım:

- **Workflow** — Dosyanın kendisi. `name: CI Pipeline` satırıyla başlıyor, `.github/workflows/` altında yaşıyor.
- **Event** — `on:` bloğu. `push` ve `pull_request` event'leri, `branches: [main]` filtresiyle sadece main branch için etkinleştirilmiş.
- **Job'lar** — `test` ve `build`. `needs: test` satırı olmasa paralel çalışırlardı; bu satır sayesinde `build`, `test` bitmeden başlamıyor.
- **Runner** — Her iki job da `runs-on: ubuntu-latest` kullanıyor. GitHub'ın Ubuntu sanal makinesi.
- **Step'ler** — Her job kendi `steps:` listesini sırayla işliyor. Step'ler aynı runner üzerinde çalıştığı için `npm ci` sonrası `npm test` node_modules'u hazır buluyor.
- **Action'lar** — `uses: actions/checkout@v4`, `uses: actions/setup-node@v4`, `uses: actions/upload-artifact@v4` satırları. Bunlar GitHub'ın resmi action'ları; paketlenmiş, tekrar kullanılabilir iş birimleri.
- **Shell komutları** — `run: npm ci`, `run: npm run lint`, `run: npm test`, `run: npm run build` satırları. Doğrudan runner'ın bash kabuğunda çalışır.

## Kavramlar Arasındaki Farkı Pekiştirme

Bazen Job ile Step, ya da Step ile Action arasındaki fark karıştırılabilir.

**Job ve Step farkı:** Job, bir runner'ı temsil eder. Step, o runner üzerindeki tek bir görevi temsil eder. Bir job birden fazla step içerir. Job'lar paralel çalışabilir; step'ler kendi job'u içinde hep sıralıdır.

**Step ve Action farkı:** Her step ya bir shell komutu (`run:`) ya da bir action (`uses:`) çalıştırır. Action, bir step'in çağırabileceği hazır bir paket. Her action bir step ama her step bir action değil — bazı step'ler sadece shell komutu çalıştırır.

**Event ve Trigger farkı:** "Trigger" kelimesi günlük konuşmada event ile aynı anlamda kullanılır, ama teknik olarak event olayın kendisi, trigger ise o olayın workflow'u başlatma mekanizması. Pratikte ikisi de aynı şeyi ifade eder.

Bu altı kavramı — workflow, event, job, step, action, runner — içselleştirdiğinde herhangi bir GitHub Actions YAML dosyasını okumak artık çok daha kolay olacak. Bir sonraki adımda bu yapıyı gerçek bir Node.js projesine uygulayacağız.
