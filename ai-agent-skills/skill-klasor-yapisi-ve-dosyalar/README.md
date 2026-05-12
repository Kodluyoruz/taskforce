# Skill Klasör Yapısı ve Dosyalar

Önceki derste token muhasebesini açtık: metadata her zaman yüklenir, SKILL.md tetiklenince gelir, geri kalan her şey diskte bekler. Bu derste "geri kalanın" fiziksel olarak nereye konduğuna bakıyoruz. Bir skill aslında bir klasördür; içinde tek bir `SKILL.md` olabilir, ya da yan yana onlarca dosya, alt-klasör, script ve template. Hangi dosyayı nereye koyduğun token bütçeni, agent'ın navigation süresini ve skill'in başka bir makineye taşınınca çalışıp çalışmayacağını etkiler.

## Minimal yapı: tek bir SKILL.md

Geçerli bir skill için tek bir dosya yeterlidir.

```
my-skill/
└── SKILL.md
```

`SKILL.md`'nin başında YAML frontmatter (en azından bir `description`), altında modelin uyacağı talimatlar. Hepsi bu. "Tek dosya = gerçek skill" kuralı boş formalite değil; küçük bir convention'u kalıcılaştırırken (örneğin commit mesajı formatın), iki klasör derinliğinde bundle yerine tek markdown yazıp dakikalar içinde bitirebilirsin. Skill'ler küçük doğar, gerektikçe büyür.

## Tipik genişletilmiş yapı

Bir skill bir tek konvansiyondan fazlasını taşımaya başladığında — referans tabloları, executable kodlar, output şablonları — `SKILL.md`'yi şişirmek yerine yan dosyalara dağıtırsın. Olgun bir bundle şöyle görünür:

```
my-skill/
├── SKILL.md                  # manifest (zorunlu)
├── REFERENCE.md              # detaylı referans (Level 3)
├── FORMS.md                  # form doldurma rehberi (Level 3)
├── EXAMPLES.md               # örnek senaryolar (Level 3)
├── scripts/
│   ├── extract.py
│   └── validate.py
├── templates/
│   ├── report.md
│   └── summary.yaml
└── resources/
    ├── schema.json
    └── glossary.md
```

`SKILL.md` hâlâ tek giriş kapısı: modele "ne yapacağını" ve "gerekirse hangi dosyaya bakacağını" söyler. Geri kalan dosyalar token harcamaz, sadece referans verildiğinde okunur. Bu yapı progressive disclosure'ın diske inmiş halidir.

## Onboarding rehberi metaforu

Yeni başlayan bir takım arkadaşı düşün. Ona kalın bir kitap vermezsin; bir onboarding klasörü hazırlarsın. Üstte tek sayfalık bir "buradan başla" notu: hangi sistemleri öğreneceğini, hangi şirket kurallarını okuyacağını, kime danışacağını sıralıyor. Detaylar alt-klasörlerde: API referansı, onboarding form'u, örnek PR şablonu, glossary. Yeni kişi notu okur, sadece o anki görevle ilgili dosyayı açar. Bir skill bundle tam olarak böyle çalışır: `SKILL.md` "buradan başla" notu; `REFERENCE.md`, `scripts/`, `templates/` ise alt-klasörlerdeki spesifik materyaller.

## Topluluğun benimsediği konvansiyonlar

Spec zorlamasa da `anthropics/skills` repo'sundan ve Claude Code dokümanından ortak bir isimlendirme alışkanlığı çıkmış:

- **`scripts/`** — executable kodlar. Agent bash ile çağırır; kod context'e girmez, sadece çıktısı sayılır.
- **`templates/`** veya **`assets/`** — output iskeletleri: doldurulacak markdown, generate edilecek HTML, fontlar, ikonlar.
- **`resources/`** veya **`references/`** — statik veri: schema, glossary, sabit listeler.
- **Büyük harfli markdown dosyaları** (`REFERENCE.md`, `FORMS.md`, `EXAMPLES.md`) — `SKILL.md`'den isimle referans verilen major sub-doc'lar. Büyük harf bir sinyal: "bu önemli, model muhtemelen açacak."
- **Küçük harfli markdown** (`notes.md`, `todo.md`) — daha minor / kişisel.

Uymak zorunlu değil; uyduğunda başka geliştiriciler bundle'ını tanıyor ve pre-built skill örneklerinden kopyaladığın pattern'lar uyumlu duruyor.

## SKILL.md'den yol referansları

Bundle içindeki dosyaları modele tanıtmak için `SKILL.md` gövdesinde relative path ile referans verirsin:

```markdown
## Additional resources

- Detaylı şema kuralları için `REFERENCE.md` dosyasını oku.
- Form doldurma sırasında `FORMS.md`'yi takip et.
- Validation için `scripts/validate.py` çalıştır.
```

Agent gerektiğinde `bash: cat REFERENCE.md` ya da `python scripts/validate.py input.json` üretir. Kritik nokta: yollar bundle root'una göre relative olmalı. Mutlak path (`/Users/alperen/...`) yazarsan skill başka bir makinede çalışmaz. Claude Code'da `${CLAUDE_SKILL_DIR}` gibi substitution değişkenleri tam bu portability için var; skill kişisel, project ya da plugin seviyesinde nereye kurulursa kurulsun yol doğru çözülür. Ek olarak: modele "şu durumda şu dosyaya bak" diye direktif vermek, sadece "FORMS.md exists" demekten çok daha sağlam tetikleyicidir.

## Pre-built örnek: anthropics/skills/pdf

`anthropics/skills` repo'sundaki resmi `pdf` skill iyi bir reference olarak duruyor. Tipik yapı:

```
pdf-skill/
├── SKILL.md         # ana talimatlar, dispatcher
├── FORMS.md         # form-filling alt rehberi
├── REFERENCE.md     # API ve schema referansı
└── scripts/
    └── fill_form.py # deterministik form doldurma
```

`SKILL.md` modelin görevi anlamasına yetecek kadar talimat içerir ve gerektiğinde `FORMS.md`'ye veya `REFERENCE.md`'ye yönlendirir. `scripts/fill_form.py` ise deterministik bir iş — alanları sıralı doldurmak, validation yapmak — için var; modelin kendi başına aynı kodu üretmesini beklemekten çok daha güvenilir ve token'ı çok daha az.

## Yaygın hatalar

Bundle iskeletini bozan birkaç tekrar eden kalıp:

- **Kodu `SKILL.md` gövdesine inline yazmak.** 200 satırlık bir Python parsing fonksiyonunu manifest'e yapıştırmak hem token harcar hem de modelin kodu satır satır "yeniden hayal etmesini" gerektirir. `scripts/` tam bu yüzden var: kod context'e değil, çıktı context'e girer.
- **Mutlak path kullanmak.** `/Users/foo/skills/...` skill'i taşınamaz hale getirir. Her zaman relative path ya da platformun skill-dir değişkeni.
- **Çok katmanlı iç içe klasör.** `resources/v2/spec/schemas/forms/main.json` gibi 5 seviyelik yol agent'ın navigation maliyetini artırır. Pratik üst sınır 2-3 seviye.
- **Klasör isimlerini icat etmek.** `code/`, `bin/`, `stuff/` okuyana ne olduğunu söylemez. Yerleşik isimlere — `scripts/`, `templates/`, `resources/` — sadık kal.
- **Hiç referans vermeden dosya bırakmak.** `SKILL.md` `EXAMPLES.md`'den bahsetmiyorsa modelin onu açması için sebep yok. Referans verilmeyen dosya ölü ağırlıktır.

## Sırada ne var?

İskeleti kurmak işin yarısı; diğer yarısı modelin bu iskeleti **doğru zamanda fark etmesini** sağlamak. Skill'in en başındaki `description` alanı tam burada devreye giriyor. Description, modelin bin tane skill arasından seninkini hangi anda tetikleyeceğine karar verdiği tek satırdır. Bir sonraki derste iyi description nasıl yazılır, hangi kalıplar tetikleme oranını artırır, hangi tuzaklar skill'i "var ama hiç çağrılmıyor" haline sokar — onu konuşacağız.

## Quiz

**1) Minimal geçerli bir skill bundle'ı için zorunlu olan tek dosya hangisidir?**

- a) `REFERENCE.md`
- b) `SKILL.md` *(Doğru)*
- c) `scripts/main.py`
- d) `manifest.yaml`

**2) Bir skill bundle'ında `scripts/` klasörünün asıl amacı nedir?**

- a) Modelin executable kodları bash ile çalıştırması; kodun kendisi context'e girmez, sadece çıktısı sayılır *(Doğru)*
- b) Skill metadata'sını saklamak
- c) Bundle'ın ismini ve sürümünü taşımak
- d) `SKILL.md`'nin yedek kopyasını tutmak

**3) `SKILL.md` içinden başka bir dosyaya referans verirken aşağıdakilerden hangisi doğru yaklaşımdır?**

- a) Mutlak path kullanmak (`/Users/me/skills/...`)
- b) Sadece dosya adını yazıp açıklama vermemek
- c) Bundle root'una göre relative path kullanmak ve "şu durumda şu dosyaya bak" şeklinde direktif vermek *(Doğru)*
- d) Dosyanın URL'ini GitHub'dan kopyalamak

**4) Aşağıdakilerden hangisi bundle yapısı için yaygın bir hatadır?**

- a) `scripts/`, `templates/`, `resources/` gibi yerleşik isimleri kullanmak
- b) 200 satırlık bir Python kodunu `SKILL.md` gövdesine inline yapıştırmak *(Doğru)*
- c) Büyük harfli sub-doc'ları (`REFERENCE.md`, `FORMS.md`) `SKILL.md`'den isimle referans vermek
- d) Bundle'ı 2-3 seviyeden derin iç içe klasörlere bölmemek
