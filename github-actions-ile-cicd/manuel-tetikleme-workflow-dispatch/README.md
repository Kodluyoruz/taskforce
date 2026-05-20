# Manuel Tetikleme: workflow_dispatch

GitHub Actions'ın en kullanışlı event'lerinden biri `workflow_dispatch`'tir. Bir push olmadan, bir PR açılmadan, hiçbir otomatik tetikleyici devreye girmeden — sadece sen istediğinde workflow'u başlatırsın. Bu konuda tam olarak bunu inceleyeceğiz.

---

## workflow_dispatch Nedir?

`workflow_dispatch`, bir workflow'u elle başlatmana izin veren event türüdür. Normal şartlarda workflow'lar otomatik event'lere (push, pull_request, schedule vb.) bağlıdır. Ama bazen "şu an çalıştır" demen gerekir — otomatik bir şey olmaksızın.

### Ne zaman kullanılır?

- **Hotfix deploy:** Kritik bir bug düzelttikten sonra anında production'a atmak istiyorsun, ama push yapmak istemiyorsun.
- **Veri migration:** Bir kere çalıştırılacak migration script'ini kontrollü şekilde tetiklemek istiyorsun.
- **On-demand işlemler:** Rapor üretme, veritabanı yedekleme, cache temizleme gibi zamanlamalı değil ama isteğe bağlı görevler.
- **Test veya debug:** CI pipeline'ını belirli parametrelerle test etmek istiyorsun.

Kısaca: "Otomatik tetikleyici yok ama çalışması lazım" dediğin her senaryo için `workflow_dispatch` tam ihtiyacın olan şeydir.

---

## Input'lar

`workflow_dispatch`'in en güçlü özelliği input'lar. Workflow'u başlatırken parametre geçebilirsin — hangi ortama deploy edilecek, hangi versiyon kullanılacak gibi bilgileri çalışma zamanında belirleyebilirsin.

### Input tipleri

| Tip | Açıklama |
|-----|----------|
| `string` | Serbest metin girişi |
| `choice` | Önceden tanımlanmış seçenekler listesi |
| `boolean` | true/false checkbox |
| `number` | Sayısal değer |

Her input şu özellikleri alabilir:

- `description` — Input'un ne işe yaradığını açıklar (UI'da görünür)
- `required` — `true` ise boş bırakılamaz
- `default` — Kullanıcı bir şey girmezse kullanılacak varsayılan değer
- `type` — Yukarıdaki tiplerden biri
- `options` — Sadece `choice` tipinde kullanılır; seçenek listesini tanımlar

### Örnek: Tam input'lu deployment workflow'u

```yaml
name: Manuel Deploy

on:
  workflow_dispatch:
    inputs:
      ortam:
        description: 'Deploy ortamı'   # UI'da açıklama olarak görünür
        required: true
        type: choice
        options:
          - staging
          - production
      versiyon:
        description: 'Deploy edilecek versiyon'
        required: false
        type: string
        default: 'latest'              # Boş bırakılırsa 'latest' kullanılır
      debug_modu:
        description: 'Debug logları aç'
        required: false
        type: boolean
        default: false                 # Checkbox varsayılan olarak kapalı

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Repo'yu çek
        uses: actions/checkout@v4

      - name: Seçilen parametreleri göster
        run: |
          echo "Ortam: ${{ inputs.ortam }}"
          echo "Versiyon: ${{ inputs.versiyon }}"
          echo "Debug modu: ${{ inputs.debug_modu }}"

      - name: Production kontrolü
        # Boolean input'lar string olarak gelir; karşılaştırmada 'true' kullan
        if: ${{ inputs.ortam == 'production' }}
        run: echo "Production'a deploy ediliyor — dikkatli ol!"

      - name: Debug logları
        if: ${{ inputs.debug_modu == 'true' }}
        run: |
          echo "Debug modu aktif"
          env | sort          # Tüm environment variable'ları listele
```

---

## GitHub UI'dan Tetikleme

Workflow'unu `workflow_dispatch` ile tanımladıktan sonra GitHub arayüzünden kolayca tetikleyebilirsin:

1. Repona git, üstteki **Actions** sekmesine tıkla.
2. Sol panelde workflow adını bul ve üstüne tıkla.
3. Sağ tarafta **"Run workflow"** butonunu göreceksin — tıkla.
4. Açılan panelden hangi **branch**'i kullanacağını seç.
5. Tanımladığın input'ları doldur (choice için dropdown, boolean için checkbox göreceksin).
6. **"Run workflow"** butonuna bas — workflow kuyruğa girer ve çalışmaya başlar.

> **Dikkat:** "Run workflow" butonu sadece workflow dosyası **default branch**'te (genellikle `main`) varsa görünür. Feature branch'inde yazdığın bir workflow'u UI'dan tetikleyemezsin — önce default branch'e merge etmen gerekir.

---

## GitHub CLI ile Tetikleme

GitHub web arayüzünü açmak istemiyorsan, `gh` CLI ile doğrudan terminalden tetikleyebilirsin:

```bash
# Temel kullanım — sadece workflow adı ve branch
gh workflow run deploy.yml --ref main

# Input'larla birlikte — -f flag'i ile key=value geçersin
gh workflow run deploy.yml --ref main \
  -f ortam=staging \
  -f versiyon=1.2.3 \
  -f debug_modu=false

# Workflow ID ile de çalışır (gh workflow list ile ID'leri görebilirsin)
gh workflow run 1234567 --ref main -f ortam=production
```

CLI ile tetiklemek, özellikle script'ler veya başka otomasyonlardan workflow başlatmak istediğinde işe yarar. CI dışında bir araç (örneğin bir Slack bot veya internal tool) `gh workflow run` komutunu çağırabilir.

---

## push ile Birlikte Kullanım

`workflow_dispatch`'i diğer event'lerle birleştirebilirsin. Aynı workflow hem otomatik hem de manuel tetiklensin istiyorsan `on` bloğuna ikisini de yazman yeterli:

```yaml
on:
  push:
    branches:
      - main                 # main'e push gelince otomatik çalışır
  pull_request:
    branches:
      - main                 # main'e PR açılınca da çalışır
  workflow_dispatch:         # Yukarıdakilerin yanı sıra elle de tetiklenebilir
    inputs:
      ortam:
        description: 'Hedef ortam'
        required: false
        type: choice
        options:
          - staging
          - production
        default: staging
```

Bu kombinasyon çok yaygındır: otomatik CI push'ta çalışsın, ama gerektiğinde farklı parametrelerle manuel tetikleyebileyim.

Input'ların sadece `workflow_dispatch` üzerinden geldiğini unutma. `push` ile tetiklendiğinde `inputs.ortam` boş olacaktır — bu durumda `default` değeri ya da `||` operatörüyle fallback kullanabilirsin:

```yaml
      - name: Ortam belirle
        run: |
          # workflow_dispatch ile gelmediyse 'staging' kullan
          ORTAM="${{ inputs.ortam || 'staging' }}"
          echo "Kullanılan ortam: $ORTAM"
```

---

## Pratik Notlar

**Default branch zorunluluğu:** `workflow_dispatch` tetikleyicisi sadece workflow dosyası default branch'te olduğunda GitHub UI'da görünür. Bu bir kısıtlama değil, tasarım tercihidir — UI üzerinden test etmek için kodu önce `main`'e almanı bekler. CLI ile başka branch'leri `--ref` parametresiyle belirtebilirsin.

**Boolean input'lar string gelir:** `inputs` context'inden gelen boolean değerler aslında `'true'` veya `'false'` string'leridir. Koşullu adımlarda `== 'true'` şeklinde karşılaştırman gerekir:

```yaml
# Doğru kullanım
if: ${{ inputs.debug_modu == 'true' }}

# Bu beklenmedik davranışa yol açabilir
if: ${{ inputs.debug_modu }}
```

**Input sayısı sınırı:** Bir `workflow_dispatch` event'inde en fazla 25 input tanımlayabilirsin. Bunun üzerine çıkman gerekiyorsa JSON string input kullanıp içinde parse etmeyi düşün.

**Güvenlik:** `workflow_dispatch` her zaman workflow run oluşturur — GITHUB_TOKEN'ın kısıtlamalarından etkilenmez. Bu yüzden repo'ya write erişimi olan herkes bu workflow'u tetikleyebilir. Kritik ortamlar için environment protection rules eklemeni öneririm (bu konuya ilerleyen bölümlerde değineceğiz).
