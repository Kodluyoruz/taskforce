# Claude API ile Skills

Claude Code'da skill yazmak son derece sade bir deneyimdi: `.claude/skills/` klasörüne `SKILL.md` koy, gerisini CLI hallediyor. Claude API'ye geçtiğinde tablo değişiyor. Artık bir filesystem yok; skill'i HTTP üstünden upload ediyorsun, kullanılmasını istediğin her isteğe bir parametreyle bağlıyorsun ve Anthropic tarafında "code execution container" denen Linux ortamında çalıştırıyorsun. Bu lesson tam o köprüyü kuruyor: hangi beta header'lar gerekli, `container` parametresi nasıl şekilleniyor, pre-built skill'leri tek satırla nasıl açıyorsun, kendi skill'ini multipart ya da zip olarak nasıl yüklüyorsun, workspace üyeleri ile nasıl paylaşıyorsun, runtime'ın network ve package kısıtları nelermiş.

## Beta header'lar (Şubat 2026 itibarıyla zorunlu)

Skills API'si bir GA değil; üç ayrı beta tarafından besleniyor. İstemcinin her isteğinde aşağıdaki `anthropic-beta` header'ı virgülle birleşik şekilde gönderilmek zorunda. Eksik biri varsa request 400 ile reddedilir:

- `code-execution-2025-08-25` — skill'in koştuğu container'ı aktif eder. Skill, izole bir Linux ortamında bash + Python ile çalışır; bu header olmadan container hazır olmaz.
- `skills-2025-10-02` — skill keşfi, upload ve `container.skill_ids` parametresi bu beta ile gelir.
- `files-api-2025-04-14` — kullanıcıdan dosya gelirse (PDF, xlsx, vs.) ya da skill bir çıktı dosyası üretirse Files API üzerinden taşınır.

SDK kullanıyorsan client kurulurken `default_headers` üzerinden vermek en pratiği; ham HTTP atıyorsan her POST'a manuel koy. Header sırası önemli değil, virgül arasındaki boşluklar tolere edilir.

## Container ve skill_id

Skills API'sinin koşum yeri kendi başına bir parametre değil; `code execution` tool'unun container'ına bağlanır. Bir mesaj çağrısında skill aktive etmek için iki şey gerekir: code execution tool'unun açık olması ve `container` alanında `skill_ids` listesinin bulunması.

`container` parametresi ya yeni bir container ister (otomatik yaratılır, request bitince kapanır), ya da daha önce bir cevapta gelen `container.id`'yi yeniden kullanır. Aynı id'yi tekrar gönderirsen container'ın dosya sistemi korunur — bu özellikle çok adımlı agent akışlarında, bir önceki adımda üretilen dosyayı bir sonrakine taşımak için kritik.

`skill_ids` listesi hem pre-built skill kimliklerini (`pdf`, `xlsx`, `docx`, `pptx`) hem de upload ettiğin custom skill'lerin döndürdüğü `skill_id`'leri kabul eder. Aynı request'te birden fazla skill'i listelersen Anthropic hepsinin metadata'sını (~100 token/skill) system prompt'a basar; istek tetiklerse SKILL.md'leri okur. Yani fazladan skill koymanın maliyeti progressive disclosure sayesinde sadece metadata tokeni kadardır.

## Pre-built skills

Anthropic dört adet hazır skill yayınlıyor ve her API workspace'inde otomatik aktif:

- `pdf` — PDF okuma, tablo çıkarma, form doldurma, dosya birleştirme.
- `xlsx` — spreadsheet üretme, formül kurma, grafik ekleme, veri analizi.
- `docx` — Word belgesi yazma, içerik düzenleme, stil uygulama.
- `pptx` — sunum oluşturma, slide düzenleme, içerik analizi.

Bu skill'leri kullanmak için ayrı bir upload gerekmez. Sadece `container={"skill_ids": ["pdf"]}` der ve user mesajında bir Files API id'si geçirirsin; Claude otomatik olarak skill'i tetikler.

## Custom skill upload

Kendi skill'ini API'ye sokmanın iki yolu var:

- **Multipart upload.** `SKILL.md` ve klasördeki diğer dosyaları multipart form-data olarak `/v1/skills` endpoint'ine atarsın. SDK bunu `client.skills.upload(name=..., bundle=...)` çağrısıyla soyutlar; bundle olarak bir directory path verirsin, kütüphane içeriği gezip multipart paketler.
- **Zip upload.** Daha tipik olan akış: skill klasörünü `zip` ile sıkıştırıp tek dosya gönderirsin. CI/CD pipeline'larında pratik; build job klasörü zipler, deploy job upload eder.

Her iki yöntemde de response içinde `skill_id` (kalıcı id) ve `version_number` (otomatik artan integer) döner. `skill_id` runtime'da `container.skill_ids` listesinde kullanılır; `version_number` ise versiyonlama (lesson 14) için.

## Workspace-wide sharing

Claude.ai tarafında her kullanıcı kendi skill'ini ayrı yüklemek zorunda. API tarafında model bambaşka: bir skill bir workspace'e yüklenir, o workspace'in **tüm üyeleri** (insan, service account, CI key fark etmez) skill'i `skill_id` ile çağırabilir. Workspace'ler arası sync yok — başka bir workspace'e taşımak istiyorsan zip'i tekrar upload edersin.

Bu, kurumsal kullanım için doğru taraf: skill kütüphanesini bir kez merkezi olarak hazırla, herkes aynı versiyonu görsün. Ama yan etkisi şudur: bir workspace üyesinin upload ettiği skill, prensip olarak diğer üyelerin koşum ortamına dahil olur; iç governance gerekir.

## Versiyonlama

Aynı `name` ile ikinci kez upload yaparsan API yeni bir version yaratır, `latest_version` otomatik artar, `default_version` el değmediği sürece eski sayıda kalır. Mantığın detayı lesson 14'te; pratik kural sade: production isteklerinde `skill_id` zaten o workspace'in default version'ına bağlanır, hassas akışlarda `version_number`'ı request body'sinde explicit set ederek "latest" sürprizinden korunursun.

## Network ve package kısıtları

API container'ı kasten kapalı:

- **No internet access.** Skill içinden `curl`, `pip install`, `npm install` çalışmaz. Dış API'ye ihtiyacın varsa skill'in dışında, kendi backend'inde çağrı yap, sonucu user message olarak Claude'a ver.
- **Pre-installed package'ler.** Container'da Python (3.11+), bash ve Anthropic tarafından bakılan bir kütüphane listesi gelir: `pdfplumber`, `openpyxl`, `python-docx`, `python-pptx`, `pandas`, `numpy`, `pillow`, `matplotlib` gibi tipik veri işleme paketleri hazır. Tam liste code execution tool dokümantasyonunda yayınlanır ve değişebilir.
- **Runtime'da paket yükleyemezsin.** Skill'inin bağımlılığı önceden listede yoksa o skill API'de koşmaz; o işi Claude Code tarafında, kullanıcı makinesinde yapman gerekir.

## Limit ve quota

Upload tarafında üç sayı önemli:

- **Zip max 50 MB.** Sıkıştırılmış bundle bu sınırı aşamaz.
- **Uncompressed max 25 MB içerik.** Açıldığında toplam içerik bu eşiği geçemez (büyük resource dosyalarına dikkat).
- **Dosya max 500 adet.** SKILL.md, alt markdown'lar, script'ler, image'ler dahil her şey sayılır.

Hatalar açıklayıcı: `bundle_too_large`, `too_many_files`, `invalid_skill_md` gibi error code'larla 400 döner. Bundle dosyasının kökünde **mutlaka** `SKILL.md` olmalı; alt klasörde olursa upload reddedilir.

## Akış diyagramı

```
+----------------+      +-------------------+      +------------------+
|  Your code     |----->|  Anthropic API    |----->|  Container       |
|                |      |  (beta headers)   |      |  + skill mount   |
|  client.       |      |                   |      |                  |
|  messages.     |      |  Routes message + |      |  SKILL.md loaded |
|  create(       |      |  skill_id to      |      |  bash runs       |
|    container=  |      |  container        |      |  scripts         |
|    {skill_ids})|      |                   |      |                  |
+----------------+      +-------------------+      +------------------+
                                                            |
                                          response.content  v
                              <----- (skill output included)
```

Soldaki kutuda istemci kodu yaşar — beta header'lar, `container` parametresi, skill listesi. Ortadaki API katmanı isteği doğrular ve container'a yönlendirir; metadata sistem prompt'a düşer. Sağdaki container, gerekirse bash ile SKILL.md'yi okur, script çalıştırır, dosya üretir; sonuç istemciye `response.content` üstünden geri akar.

## Python örneği

```python
import anthropic

client = anthropic.Anthropic(
    default_headers={
        "anthropic-beta": "code-execution-2025-08-25,skills-2025-10-02,files-api-2025-04-14"
    }
)

# Pre-built PDF skill kullan
response = client.messages.create(
    model="claude-opus-4-7",
    max_tokens=4096,
    container={"skill_ids": ["pdf"]},
    messages=[
        {"role": "user", "content": "Bu PDF'in ozetini ver: <file>"}
    ]
)
print(response.content[0].text)
```

Custom skill upload tarafı:

```python
# Bundle'i yukle
with open("./weekly-report.zip", "rb") as f:
    skill = client.skills.upload(
        name="weekly-report",
        bundle=f
    )
print(skill.skill_id, skill.version_number)
```

İlk çağrı pre-built `pdf` skill'ini açar; ikinci snippet bir zip bundle'ı upload eder ve dönen `skill_id`'yi bir sonraki `messages.create` çağrısında `container.skill_ids` listesine ekleyerek custom skill'i devreye sokar.

## Sırada: claude.ai ile Skills

API tarafında skill bir workspace artefaktı: zip ile yüklenir, `skill_id` ile çağrılır, koşum ortamı kapalı bir container'dır. Aynı skill kavramı claude.ai'da tamamen farklı bir kullanıcı deneyimine sahip — upload ayarlar panelinden yapılır, sharing kullanıcı bazlıdır, network erişimi plan ayarına göre değişir. Lesson 25'te tam olarak claude.ai üzerinden skill yükleme akışını, plan farklarını (Pro, Max, Team, Enterprise) ve Settings > Features arayüzünü işleyeceğiz.
