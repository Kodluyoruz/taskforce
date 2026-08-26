# OpenAI Responses API ile Skills

Skills başlangıçta Anthropic ekosisteminde olgunlaşan bir desen olarak çıktı; ama agentskills.io açık standardı yayınlandıktan kısa süre sonra OpenAI da aynı kalıbı Responses API'ye taşıdı. Tek fark: Claude tarafında skill'ler doğrudan model isteğinin ekosistemine bağlanırken, OpenAI tarafında her şey `shell tool`'un içine sokulmuş durumda. Yani bir skill'i agent'a tanıtmak için ayrı bir endpoint yok; shell tool'unu açıyorsun, environment'a skill'leri iliştiriyorsun, model bu environment içinde bash çalıştırırken `SKILL.md`'leri kendisi okuyor. Bu derste bu mimarinin parçalarını — `container_auto` ile `local` arasındaki farkı, üç farklı skill bağlama yolunu, versiyonlama mantığını ve curated skill kataloğunu — sırayla açıyoruz.

## Shell tool: skills'in giriş kapısı

Responses API'de skills, tek başına yaşayan bir tool değil. Skill'i agent'a tanıtmak için `tools[]` dizisine bir `shell` tool eklemek gerekiyor. Shell tool, model'in bash komutları çalıştırabildiği bir sandbox ortamı sağlıyor; skill'ler de bu sandbox'a filesystem olarak mount ediliyor. Model "şimdi bir CSV'yi özetlemem lazım" dediğinde, environment'a mount edilmiş `csv-insights/SKILL.md` dosyasını `cat` ile okuyor, oradaki talimatlara göre kalan adımları planlıyor.

Bu mimariyi anlamanın en temiz yolu, Anthropic API'deki "skills container'a mount edilir" kalıbının aynısının OpenAI tarafında da geçerli olduğunu görmek. Yalnızca konfigürasyonun girdiği nokta farklı: Claude'da `container.skills` alanına yazarsın, Responses API'de aynı şey `tools[].environment.skills` olarak görünür. Anlamsal olarak aynı şey: model'in bash erişimine, kendisi tetiklediğinde okuyacağı modüler talimat paketleri sunuyorsun.

## container_auto (hosted) vs local

`environment.type` iki değer alıyor ve bu seçim, geri kalan her şeyi belirliyor.

`container_auto` OpenAI tarafında çalışan hosted bir container'ı işaret ediyor. Sen sadece "bu skill'i mount et" diyorsun; container'ın başlatılması, skill dosyalarının indirilmesi ve bash oturumunun yönetilmesi tamamen OpenAI'nın altyapısında oluyor. Bu mod, prototip yaparken veya kullanıcı makinesine dokunmayan workflow'larda en hızlı yol. Veri rezidansı tarafında bir uyarı var: hosted container yaşadığı sürece skill dosyaları ve container içinde üretilen dosyalar erişilebilir kalıyor, container expire ettiğinde temizleniyor. Hassas veriyi kendi altyapına bağlı tutmak istiyorsan bu mod uygun değil.

`local` ise tam tersi: shell tool, kullanıcının kendi makinesinde (veya kontrol ettiği bir runtime'da) komutları çalıştırıyor. OpenAI sadece komutları üretiyor; uygulayan sensin. Bu modda skill dosyaları da yerel filesystem'de duruyor ve hosted'a hiç çıkmıyor. Veri saklama, ağ erişimi ve kaynak limitleri tamamen senin elinde.

## Skill bağlama yolları

Üç farklı şekilde skill iliştirebiliyorsun ve hangisinin geçerli olduğu environment tipine bağlı.

İlk yol `skill_reference`. Sadece `container_auto` modunda çalışıyor. Daha önce OpenAI'a yüklediğin (multipart veya zip ile) bir skill'in `skill_id`'sini veriyorsun, container açıldığında o skill ilgili sürümle birlikte mount ediliyor. Hosted katalog ile çalışmanın tipik yolu bu.

İkinci yol local path. Sadece `local` shell için geçerli. Skill'i bir `skill_id` ile değil, üç alanla tanıtıyorsun: `name`, `description` ve filesystem `path`. Path, çalışan runtime'ın gördüğü mutlak veya göreli bir dizine işaret etmeli — örneğin `/Users/me/skills/csv-insights`. Local shell modu `skill_reference`'ı kabul etmiyor, çünkü hosted katalog ile bağlantısı yok; skill bilgisini dosya sisteminden alıyor.

Üçüncü yol inline base64 zip. Önceden upload etmeden, küçük bir skill'i tek istekte iliştirmek için kullanılıyor. `environment.skills` dizisi içine base64'lenmiş bir zip paketi koyuyorsun, API o paketi açıp container'a mount ediyor. Versiyonlama, paylaşım veya audit gerekmiyorsa pratik bir kestirme.

## Curated skills

OpenAI, ortak ihtiyaçlar için bir dizi first-party skill maintain ediyor. `openai-spreadsheets` bunların en bilineni: spreadsheet'lerle çalışma, hücre formülleri yazma ve veri özetleme için hazır gelen bir skill. Kullanmak için ekstra upload yok; doğrudan `skill_id` ile referans veriyorsun:

```python
{"type": "skill_reference", "skill_id": "openai-spreadsheets"}
```

Curated katalog büyüdükçe, çok kullanılan workflow'lar için (data analysis, document drafting, code refactoring gibi) bu kalıba bağlı kalıp kendi skill'ini sıfırdan yazmamak ciddi zaman kazandırıyor.

## Custom upload akışı

Kendi skill'ini hosted katalogda yayınlamak istiyorsan iki yol var. Birincisi `multipart` form data: skill klasörünün her dosyasını ayrı bir part olarak yüklüyorsun, her part'ın `path` alanı tek bir top-level folder içindeki konumu söylüyor. İkincisi zip upload: tüm dizini tek bir top-level klasör altında zip'liyorsun, dosyayı tek istekte yolluyorsun. Her iki yol da aynı agentskills.io spec'i doğruluyor — `SKILL.md` dosyası tek olmalı (case-insensitive match), frontmatter şartlara uymalı.

Limitler sıkı: zip için 50MB üst sınırı, skill başına 500 dosya ve sıkıştırılmamış halde her dosya için 25MB. Bu limitler kasıtlı; çünkü skill bir kütüphane değil, model'in okuyacağı bir talimat paketi. Büyük binary'leri skill'in içine koymak yerine ayrı bir storage'a yönlendirip skill'den indirme komutu vermek doğru desen.

## Versiyonlama

Skill yükleyince her upload yeni bir version olarak işaretleniyor. `latest_version` her zaman en son yüklenene işaret ediyor, `default_version` ise referans verirken sürüm belirtmediğinde devreye giriyor. `skill_reference.version` alanı integer (`3` gibi) veya `"latest"` string'i kabul ediyor.

Sürüm yönetiminin önemli kuralı: default version silinemiyor — önce başka bir sürümü default yapman gerekiyor. Son kalan sürümü silersen skill komple kaldırılıyor. Bu mantık, üretimde "yanlışlıkla silip kırma" senaryolarını engellemek için pratik.

## Network ve container kısıtları

`container_auto` modunda network erişimi OpenAI'nın container politikalarına bağlı. Shell tool dokümanı, ağ açıkken (özellikle outbound HTTP'ye izin verildiğinde) prompt injection ile veri sızdırma riskinin ciddi şekilde arttığını vurguluyor — kötü niyetli bir `SKILL.md`, görünmez talimatlarla container'daki dosyaları dış bir endpoint'e gönderebilir. OpenAI dokümanı bu yüzden "skill'leri privileged kod gibi değerlendir, end-user'a açık katalogdan skill seçtirme" diye açıkça uyarıyor.

`local` modda kontrol tamamen sende: hangi network'ten konuştuğu, hangi dosya sistemine eriştiği, hangi env değişkenleri gördüğü — hepsi runtime'ın elinde. Hassas iş yüklerinde tercih edilen mod genelde bu.

## Akış diyagramı

```
+----------------+     +-----------------+     +-----------------+
| client.        |     | OpenAI          |     | Container       |
| responses.     |---->| Responses API   |---->| shell tool      |
| create(        |     | + tools[shell]  |     | + skill mounts  |
|   tools=[shell]|     |                 |     |                 |
| )              |     |                 |     | SKILL.md loaded |
+----------------+     +-----------------+     | bash runs       |
                                               +-----------------+
```

Hosted shell + `skill_reference` (Python):

```python
from openai import OpenAI
client = OpenAI()

response = client.responses.create(
    model="gpt-5.5",
    tools=[{
        "type": "shell",
        "environment": {
            "type": "container_auto",
            "skills": [
                {"type": "skill_reference", "skill_id": "openai-spreadsheets"},
                {"type": "skill_reference", "skill_id": "weekly-report", "version": 3}
            ]
        }
    }],
    input="Q4 satis verilerini analiz et: /tmp/sales.csv"
)
print(response.output_text)
```

Local shell (kullanıcının makinesinde):

```python
response = client.responses.create(
    model="gpt-5.5",
    tools=[{
        "type": "shell",
        "environment": {
            "type": "local",
            "skills": [{
                "name": "csv-insights",
                "description": "Summarize CSV files and produce a markdown report.",
                "path": "/Users/me/skills/csv-insights"
            }]
        }
    }],
    input="Bu CSV'yi ozetle: ./data.csv"
)
```

JavaScript hosted shell:

```javascript
const response = await client.responses.create({
  model: 'gpt-5.5',
  tools: [{
    type: 'shell',
    environment: {
      type: 'container_auto',
      skills: [{ type: 'skill_reference', skill_id: 'openai-spreadsheets' }]
    }
  }],
  input: 'Add 144 and 377.'
});
```

## Sırada ne var?

Aynı skill paketini Responses API üzerinden üç farklı modla — `inline` zip, `skill_reference` ile hosted, `local` path ile yerel — bağlayabildiğini gördük. Her birinin kendine göre zaman, gizlilik ve operasyonel maliyet karakteri var. Bir sonraki derste bu üç modu yan yana koyup hangi senaryoda hangisini seçmek gerektiğini detaylı karşılaştırıyoruz: deployment hızı, sürüm yönetimi, audit izleri ve veri rezidansı açılarından `inline`, `hosted` ve `local` arasındaki farkları tek tek açıyoruz.
