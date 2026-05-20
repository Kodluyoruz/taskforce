# Progressive Disclosure: Üç Katman

Bir agent'a 100 skill yüklediğini düşün. Eğer her skill'in tüm gövdesi, tüm referans dosyaları ve tüm script kodları context window'a girseydi, daha kullanıcının ilk mesajını yazmadan milyonlarca token harcamış olurdun. Token bütçesi de model performansı da çatlardı. Anthropic'in Skills mimarisi bu sorunu **progressive disclosure** ile çözer: skill içeriği tek parça değil, üç katmana bölünmüştür ve her katman farklı bir anda yüklenir. Önceki derste `name`, `description` ve opsiyonel `allowed-tools` gibi metadata alanlarını tek tek inceledik. Bu derste o metadata'nın aslında üç katmanlı bir yükleme şemasının birinci katmanı olduğunu, kalan iki katmanın nasıl tetiklendiğini ve bu tasarımın neden Skills'in en önemli fikri olduğunu açıyorum. Anlamadan, Skills'in neden 100+ skill ölçeğinde ayakta kaldığını anlamak imkansız.

## Level 1 — Metadata (her zaman yüklü)

Birinci katman, her skill'in `SKILL.md` dosyasının başındaki YAML frontmatter'ıdır. Sadece `name` ve `description` field'ları. Agent başladığında bu metadata system prompt'a otomatik olarak dahil edilir; yani agent o an hangi skill'lerin var olduğunu, ne işe yaradıklarını ve hangi durumlarda devreye gireceklerini bilir. Ama henüz hiçbirinin gövdesini okumamıştır.

Yaklaşık maliyet skill başına ~100 token. Yani:

- 10 skill = ~1.000 token
- 100 skill = ~10.000 token
- 1.000 skill = ~100.000 token

İlk iki rakam tamamen yönetilebilir. Üçüncüsü bile bugünün 200k context window'unda hâlâ rahat sığar. Kritik nokta: bu maliyet **sabit**. Kullanıcı ne sorarsa sorsun, hangi skill tetiklenirse tetiklensin, Level 1 hep aynı boyutta kalır.

Bir frontmatter şöyle görünür:

```yaml
---
name: pdf-summary
description: Extract text and tables from PDFs, fill PDF forms, merge documents. Use when working with PDFs or when the user mentions PDF, form, or document extraction.
---
```

Agent'ın gördüğü tek şey bu blok. Skill'in gerisini henüz "bilmiyor" — sadece var olduğunu ve ne zaman lazım olduğunu biliyor.

## Level 2 — Instructions (tetiklenince yüklü)

İkinci katman, `SKILL.md`'nin frontmatter altındaki markdown gövdesidir. Agent, Level 1 metadata'larına bakarak "bu istek bu skill'e uyuyor" kararını verdiği anda, `bash` üzerinden `SKILL.md`'yi okur ve gövde context window'a girer.

İçerik tipik olarak şunları barındırır:

- Adım adım workflow
- Best practice notları
- Hangi script'in ne için çalıştırılacağı
- Hangi referans dosyasına ne zaman gidileceği

Anthropic'in kuralı net: **gövde 5k token altında kalmalı.** Bu sınır rasgele değil; Level 2 her tetiklemede context'e giriyor, ve agent bir görevde birden fazla skill çağırabiliyor. Eğer her skill'in gövdesi 20k token olsaydı, üç skill tetiklenmesi tek başına context window'un büyük kısmını yerdi. Detayları gövdeye değil, Level 3'teki referans dosyalarına çıkarman gerekir.

Level 2'nin maliyeti **yalnız tetiklenen skill'ler için** ödenir. 100 skill yüklü olsa bile, tek görev için belki sadece 1-2 tanesi tetiklenir. Geri kalan 98'i filesystem'de sıfır token tüketerek bekler.

## Level 3 — Resources & scripts (ihtiyaç anında)

Üçüncü katman, skill bundle'ındaki ek dosyalardır: `FORMS.md`, `REFERENCE.md`, `templates/output.yaml`, `data/lookup.json`, `scripts/extract.py`. Bunlar `SKILL.md`'nin gövdesi tarafından referans edildiğinde, agent yine `bash` ile okur. Referans edilmeyen dosyalar hiç açılmaz.

İki davranış farkı kritik:

**Markdown ve veri dosyaları:** Agent okuduğu anda içerik context window'a girer. Yani `REFERENCE.md` 8k token'sa, okumadan önce 0, okuduktan sonra 8k token harcamış olursun. Ama bu kararı **agent görev anında verir**; gereksiz dosya açılmaz.

**Executable script'ler:** Burası progressive disclosure'ın en güzel parçası. `scripts/extract.py` dosyasının **kodu** asla context window'a girmez. Agent script'i `bash` ile çalıştırır; sadece **stdout çıktısı** context'e döner. Yani 500 satırlık bir Python script'i tek satırlık bir çıktı üretiyorsa, agent o işi yapmak için sadece o tek satırlık token bütçesi harcar. Kod ile çıktının ayrılması Skills'i deterministik işlerde son derece ucuz hale getirir.

Toplam: Level 3 "effectively unlimited". Bundle'a istediğin kadar referans, dataset, script koyabilirsin; agent ihtiyacı olmadıkça hiçbiri context'e dokunmaz.

## Üç katmanın karşılaştırması

```
| Level | Yükleme zamanı            | Token maliyeti        | İçerik tipi                          |
| ----- | ------------------------- | --------------------- | ------------------------------------ |
| 1     | Başlangıçta her zaman     | ~100 / skill          | YAML frontmatter (name + description)|
| 2     | Skill tetiklenince        | <5k / tetikleme       | SKILL.md markdown gövdesi            |
| 3     | İhtiyaç anında bash ile   | Sadece okunan/çıktı   | Ek dosyalar, scripts (kod != output) |
```

Görsel olarak akış şöyle ilerler:

```
Progressive Disclosure — Üç Katman

  ┌────────────────────────────────────────────────────────┐
  │ LEVEL 1: METADATA  (hep yüklü, ~100 token/skill)       │
  │ ────────────────────────────────────────────────────── │
  │ ---                                                    │
  │ name: pdf-summary                                      │
  │ description: Extract text from PDFs...                 │
  │ ---                                                    │
  └────────────────────────────────────────────────────────┘
                            │
                  Agent description'ı okur
                  "Bu skill bana lazım" der
                            ▼
  ┌────────────────────────────────────────────────────────┐
  │ LEVEL 2: INSTRUCTIONS  (tetiklenince, <5k token)       │
  │ ────────────────────────────────────────────────────── │
  │ # PDF Summary                                          │
  │ 1. pdfplumber ile metni çıkar                          │
  │ 2. extract.py script'ini çağır                         │
  │ 3. Detaylı kurallar için REFERENCE.md'ye bak           │
  └────────────────────────────────────────────────────────┘
                            │
                  Agent bir dosyayı/script'i çağırır
                            ▼
  ┌────────────────────────────────────────────────────────┐
  │ LEVEL 3: RESOURCES & SCRIPTS  (ihtiyaç anında)         │
  │ ────────────────────────────────────────────────────── │
  │ scripts/extract.py    — kod context'e girmez,          │
  │                          sadece stdout çıktısı girer   │
  │ REFERENCE.md          — sadece okunduğu kadar token    │
  │ templates/output.yaml — sadece okunan kadar            │
  └────────────────────────────────────────────────────────┘
```

## Tasarım sebebi: neden böyle bölündü?

Üç katman keyfi bir bölüm değil; doğrudan token bütçesi matematiğinden çıkıyor.

Eğer Skills tek katman olsaydı — yani her skill'in tüm içeriği baştan yüklenseydi — 100 skill yüklü bir agent'ın context'i daha kullanıcı bir şey yazmadan dolardı. Eğer iki katman olsaydı — metadata + gövde — gövdenin içine her şeyi sıkıştırmak zorunda kalırdın, dolayısıyla ya skill'leri küçük tutardın ya da context'e ağır yük bindirirdin.

Üç katmanla şu pratik özellikler aynı anda geliyor:

- **Skill sayısı serbest:** Level 1 ucuz olduğu için yüzlerce skill yüklü tutmak realistik.
- **Skill içeriği serbest:** Level 3 sınırsız olduğu için detaylı referansları, geniş dataset'leri, karmaşık script'leri bundle'a koymak realistik.
- **Görev başı maliyet düşük:** Görev anında sadece ilgili skill'in gövdesi (Level 2) ve onun referansları (Level 3) yüklenir.

Sonuç: agent **hem geniş yetenek yelpazesi taşır hem her görevde sadece o görevin ihtiyacı kadar token harcar.**

## Onboarding rehberi metaforu

Yeni bir takım arkadaşına onboarding hazırladığını düşün. Her şeyi tek belgeye sığdırmaya çalışmazsın — bu, her gün açacağı 300 sayfalık bir doküman olurdu. Bunun yerine:

1. Bir karşılama özeti — "Şu işleri yapacaksın, ekipte X, Y, Z var" (Level 1).
2. Her iş için kısa bir how-to — "Müşteri raporu hazırlarken şu adımları izle, detaylı kuralları şu klasörde bul" (Level 2).
3. Detaylı referans klasörleri, şablonlar, otomasyon script'leri — kişi sadece o işe geldiği zaman bakar (Level 3).

Progressive disclosure aynı mantığı agent için kurar. Filesystem skill'in dolapları, `SKILL.md` özet kartı, ek dosyalar uzman raporlarıdır.

## Skill yazarken bu ne demek?

Üç katman yapısı, skill'i nasıl yapılandıracağına dair somut kararlar dayatır:

- `SKILL.md` gövdesini kısa tut — özet + akış + ana adımlar. Hedef 5k token altı.
- Detaylı kuralları, schema'ları, edge case listelerini `REFERENCE.md`'ye, `FORMS.md`'ye, `EXAMPLES.md`'ye çıkar.
- Deterministik bir işi (PDF parse, schema validation, regex temizliği) varsa agent'a yazdırmak yerine `scripts/` altına paketle. Kod context'e girmez, çıktısı girer — hem daha ucuz hem daha güvenilir.
- Template'leri, sabit dataset'leri `templates/` veya `data/` altına koy; gövdeden referans ver.

PDF skill örneği bu prensibe uyar:

```
pdf-summary/
├── SKILL.md              # Level 1 (frontmatter) + Level 2 (gövde)
├── REFERENCE.md          # Level 3 — extract.py parametreleri
├── templates/
│   └── summary.md        # Level 3 — output template
└── scripts/
    └── extract.py        # Level 3 — kod context'e girmez
```

Yeni bir skill yazarken kendine şu soruyu sor: "Bu cümle gerçekten her tetiklemede gerekli mi, yoksa sadece belirli alt durumlarda mı?" Cevap "alt durumlarda" ise içerik Level 3'e gider.

## Sırada: token bütçesi ve performans

Üç katman mantığı, Skills'in context window'da neden bu kadar verimli olduğunu açıklıyor. Ama sayılarla oynamadıkça soyut kalıyor: 100 skill yüklü bir agent görev başına gerçekten ne kadar token harcıyor? Skill gövdesi 6k token olsa ne olur? Aynı görevde üç skill tetiklenirse context nasıl şişer? Sonraki derste `context window ve Skills token yönetimi` başlığı altında bu hesabı yapıyoruz — model performansı, latency ve maliyet üzerindeki gerçek etkiyle birlikte.
