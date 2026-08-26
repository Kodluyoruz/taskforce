# Push, Pull Request ve Schedule Trigger'ları

Bir workflow'un ne zaman çalışacağını belirleyen şey `on:` bloğundaki trigger tanımıdır. GitHub Actions'ta onlarca farklı event var; ama günlük CI/CD hayatında en çok karşılaşacağın üçü şunlar: `push`, `pull_request` ve `schedule`. Bu üçünü iyi anlarsan iş akışlarının büyük bölümünü rahatlıkla kurabilirsin.

---

## push Trigger

`push` event'i, bir branch ya da tag'e commit gönderildiği anda tetiklenir. Filtre tanımlamazsan repository'deki **tüm branch'lerdeki** her push bu workflow'u başlatır — bu çoğu zaman istediğin şey değildir.

### Temel Kullanım

```yaml
on:
  push:
    branches:
      - main          # Sadece main branch'e gelen push'larda çalış
```

### Branch Filtreleme

Glob pattern'ları desteklenir; bu sayede belirli bir branch grubunu hedefleyebilirsin.

```yaml
on:
  push:
    branches:
      - main
      - 'releases/**'   # releases/1.0, releases/2.x, vb. hepsini kapsar
      - 'feature/**'    # feature/ ile başlayan tüm branch'ler
```

### Tag Filtreleme

Semantic versioning ile çalışıyorsan tag push'larında da tetikleyebilirsin:

```yaml
on:
  push:
    tags:
      - 'v*.*.*'        # v1.0.0, v2.3.1 gibi tag'lerde çalışır
```

### Dikkat: Activity Type Yok

`pull_request` ve diğer bazı event'lerin aksine, `push` için `types:` filtresi **yoktur**. Push ya olur ya olmaz — daha ince ayrım yapamazsın. Branch ve path filtreleri bu ihtiyacı karşılar.

### Path Filtreleme

Sadece belirli dosyalar değiştiğinde workflow'u çalıştırmak istiyorsan `paths` filtresini kullanabilirsin. Mesela yalnızca backend kodu değiştiyse backend testlerini koşturmak mantıklıdır:

```yaml
on:
  push:
    branches:
      - main
    paths:
      - 'src/backend/**'   # Sadece backend dizinindeki değişiklikler
      - 'package.json'     # veya package.json değiştiğinde
```

---

## pull_request Trigger

`pull_request` event'i, bir PR açıldığında, yeni commit push'landığında (synchronize) veya yeniden açıldığında tetiklenir. CI için en yaygın kullanılan trigger'dır çünkü kodu main'e almadan önce kontrol etmeni sağlar.

### Temel Kullanım

```yaml
on:
  pull_request:
    types: [opened, synchronize, reopened]  # En yaygın üçlü kombinasyon
    branches:
      - main    # Sadece main'e açılan PR'larda çalış
```

### Activity Types

`pull_request` event'inin çok sayıda activity type'ı var. Hangilerinin sana lazım olduğunu `types:` ile belirtirsin:

| Type | Ne zaman tetiklenir? |
|---|---|
| `opened` | PR ilk açıldığında |
| `synchronize` | PR'a yeni commit push'landığında |
| `reopened` | Kapalı PR yeniden açıldığında |
| `closed` | PR kapatıldığında (merge veya iptal) |
| `labeled` | PR'a label eklendiğinde |
| `unlabeled` | PR'dan label kaldırıldığında |
| `ready_for_review` | Draft PR'dan çıkıp review'a alındığında |
| `review_requested` | Review isteği gönderildiğinde |

`types:` tanımlamazsan varsayılan olarak `opened`, `synchronize` ve `reopened` çalışır.

### Draft PR'ları Atlamak

Draft aşamasındaki PR'lara workflow harcamamak istiyorsan:

```yaml
on:
  pull_request:
    types: [opened, synchronize, reopened, ready_for_review]
    branches:
      - main

jobs:
  ci:
    # Draft PR ise bu job'u atla
    if: github.event.pull_request.draft == false
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
```

### Guvenlik Notu: Fork PR'ları

Bu nokta önemli. Bir kullanıcı senin repository'ini fork'layıp PR açtığında workflow yine çalışır, **ama `GITHUB_TOKEN`'ın yetkileri kısıtlıdır ve repository secret'larına erişilemez.** Bu güvenlik önlemi kasıtlı; aksi hâlde herhangi biri PR açarak secret'larını çalabilirdi.

Fork PR'larında:
- `secrets.GITHUB_TOKEN` read-only olarak çalışır
- `secrets.MY_SECRET` gibi repository secret'larına erişilemez
- Workflow run'ı daha kısıtlı bir ortamda başlar

Bu nedenle harici contributor'lardan gelen PR'larda deploy ya da publish gibi adımları tetikleme; bunları `push` event'iyle merge sonrasına bırak.

```yaml
on:
  pull_request:
    types: [opened, synchronize, reopened]
    branches:
      - main
    paths:
      - 'src/**'          # Sadece kaynak kod değişikliklerinde
      - '*.json'          # veya konfigürasyon dosyalarında
```

---

## schedule Trigger

`schedule` event'i, workflow'u belirli bir zaman planına göre otomatik olarak başlatır. Nightly build, haftalık rapor, dependency update kontrolü gibi durumlar için biçilmiş kaftandır. Bir commit ya da PR beklemeye gerek yok.

### Cron Syntax

POSIX cron formatını kullanır. Beş alan vardır:

```
┌───────────── dakika (0-59)
│ ┌───────────── saat (0-23)
│ │ ┌───────────── ayın günü (1-31)
│ │ │ ┌───────────── ay (1-12)
│ │ │ │ ┌───────────── haftanın günü (0-6, 0=Pazar)
│ │ │ │ │
* * * * *
```

Saat dilimi **her zaman UTC'dir** — kendi saat dilimine göre hesap yapman gerekiyor.

### Örnekler

```yaml
on:
  schedule:
    - cron: '0 2 * * *'    # Her gün saat 02:00 UTC'de (TR için 05:00)
    - cron: '0 9 * * 1'    # Her Pazartesi 09:00 UTC'de (TR için 12:00)
    - cron: '*/30 * * * *' # Her 30 dakikada bir
    - cron: '0 0 1 * *'    # Her ayın ilk günü gece yarısı UTC
    - cron: '0 6 * * 1-5'  # Hafta içi her gün 06:00 UTC'de
```

### Minimum Aralık

GitHub Actions, schedule trigger'lar için minimum **5 dakika** sınırı koymuştur. Bundan daha sık tetikleyemezsin. Ayrıca yoğun dönemlerde (GitHub'ın sunucularında trafik fazlaysa) schedule tetiklemeler birkaç dakika gecikebilir — kesin zamanlama garantisi yoktur.

### Repository Aktifliği

GitHub, uzun süredir herhangi bir aktivite olmayan public repository'lerdeki schedule workflow'larını otomatik olarak devre dışı bırakabilir. Bunu önlemek için repository'i aktif tutman ya da workflow'ı manuel tetikleyerek zaman zaman çalıştırman gerekir.

```yaml
on:
  schedule:
    - cron: '0 0 * * 0'    # Her Pazar gece yarısı UTC — haftalık temizlik/kontrol
  workflow_dispatch:        # Manuel tetikleme de açık bırak
```

---

## Birden Fazla Trigger Birlikte

`on:` bloğu birden fazla event kabul eder. Gerçek projelerde genellikle birkaç trigger birlikte tanımlanır:

```yaml
on:
  push:
    branches:
      - main               # main'e merge sonrası deploy pipeline'ını başlat
  pull_request:
    types: [opened, synchronize, reopened]
    branches:
      - main               # PR açıkken test ve lint çalıştır
  schedule:
    - cron: '0 3 * * *'   # Her gece 03:00 UTC'de nightly build
  workflow_dispatch:        # Gerektiğinde elle de tetiklenebilsin
```

Bu yapı çok yaygındır: PR'da CI çalışır, merge sonrası deploy çalışır, gece ise nightly test suite devreye girer.

---

## push mu, pull_request mı?

İkisi de "kod değişti" anlamına gelir; ama farklı amaçlara hizmet eder. Hangisini ne zaman kullanacağına karar verirken şu soruları sor:

**`pull_request` kullan — eğer:**
- Kodu main'e almadan önce doğrulamak istiyorsan (test, lint, type check)
- PR'daki değişikliklere otomatik yorum bırakmak istiyorsan
- Code coverage raporu ya da güvenlik taraması istiyorsan
- Build'in kırılıp kırılmadığını merge öncesi görmek istiyorsan

**`push` kullan — eğer:**
- main'e merge olmuş kodu deploy etmek istiyorsan
- Merge sonrası bir şeyleri tetiklemek istiyorsan (örn. Docker image build & push)
- Tag push'larında release üretmek istiyorsan
- Tüm branch'lerdeki değişiklikleri izlemek istiyorsan

### Tipik Pattern

Çoğu projede ikisi birlikte kullanılır:

```yaml
on:
  pull_request:
    branches: [main]
    types: [opened, synchronize, reopened]

# --- ayrı bir workflow dosyasında ---

on:
  push:
    branches: [main]
```

PR açıkken `pull_request` event'i devreye girer ve testleri koşar. PR merge edildiğinde `push` event'i tetiklenir ve deploy başlar. Bu ikili yapı sayesinde hatalı kod ne main'e girer ne de üretime çıkar.

---

Trigger'ları doğru yapılandırmak, workflow'larının gereksiz yere çalışmasını engeller ve hem CI süresini hem de GitHub Actions dakikalarını verimli kullanmanı sağlar. Bir sonraki adımda bu trigger'larla tetiklenen job'ların nasıl yapılandırıldığına bakacağız.
