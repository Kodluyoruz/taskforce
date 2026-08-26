# SKILL.md Derinlemesine Yazma Rehberi

Bir önceki derste tek dosyalık bir skill'i 10 dakikada ayağa kaldırdın. Ama "çalışıyor" ile "iyi yazılmış" arasında ciddi bir fark var. SKILL.md, agent'ın taşıyıcı belgesi: bir kez tetiklendiğinde tamamı context window'a giriyor ve her token, modelin asıl işe ayıracağı bütçeden eksiliyor. Bu yüzden gövde hem **kısa** hem de **doğru hiyerarşide** olmalı. Bu derste başlık düzenini, "Quick start" pattern'ini, kod bloğu disiplinini, ek dosyalara link vermeyi ve Anthropic'in pre-built skill'lerinde tekrarlanan şablonu inceleyeceğiz.

## Başlık hiyerarşisi

`Markdown` gövdesinde başlıklar, agent'ın belgeyi tararken yakaladığı en güçlü sinyaldir. Şu hiyerarşiye uy:

- **H1 (`#`):** Skill'in adı. YAML frontmatter'daki `name` zaten bu bilgiyi taşıdığı için H1 teknik olarak zorunlu değildir; ama Anthropic'in pre-built skill'lerinin neredeyse tamamında bulunur ve insan okuyucu için de yararlıdır.
- **H2 (`##`):** Ana bölümler: `Quick start`, `When to use`, `Detailed usage`, `Reference`, `Examples`.
- **H3 (`###`):** H2 altındaki alt konular. Örneğin `## Detailed usage` altında `### Extracting text`, `### Filling forms` gibi.
- H4 ve aşağısına nadiren in. Üç seviye genelde yeterli, dördüncüye ihtiyaç duyduğunda muhtemelen o bölümü ayrı bir dosyaya taşıma zamanı gelmiştir.

Tek bir uzun paragraf yerine başlıklarla bölünmüş bir belge, agent için arama indeksi gibi çalışır. Model `bash` ile `grep` çalıştırıp tam ihtiyacı olan bölüme atlayabilir.

## "Quick start" pattern (Anthropic kuralı)

Anthropic dökümantasyonunda örnek olarak verilen SKILL.md'nin ilk H2'si her zaman `## Quick start`'tır. Sebep basit: agent SKILL.md'yi okuduğu **ilk üç-beş satırda** işe başlayabilmeli. Quick start bölümü en yaygın kullanım senaryosunu, çalıştırılabilir bir kod parçasıyla birlikte verir. Detaylar altta gelir.

Tipik bir quick start:

````markdown
# PDF Processing

## Quick start

PDF'ten metin çıkarmak için `pdfplumber` kullan:

```python
import pdfplumber

with pdfplumber.open("document.pdf") as pdf:
    text = pdf.pages[0].extract_text()
```

Form doldurma için `FORMS.md`'ye bak.
````

Üç şey dikkatini çeksin: (1) tek bir somut görev, (2) copy-paste çalışan kod, (3) ileri senaryolar için ek dosyaya köprü. Bu pattern olmadan agent belgenin tamamını okumak zorunda kalır.

## Progressive markdown: detayı ek dosyalara taşı

Skill'lerin üç katmanlı yükleme modelini (`progressive markdown` ya da progressive disclosure) hatırla: metadata her zaman yüklenir, SKILL.md tetiklendiğinde yüklenir, ek dosyalar ise yalnızca referans verildiğinde okunur. SKILL.md = Level 2; `FORMS.md`, `REFERENCE.md`, `EXAMPLES.md` = Level 3.

Pratik karar kuralı: bir bilgi parçası **her tetiklemede** lazım mı, yoksa **bazen** mi? Her tetiklemede lazımsa SKILL.md'de kalsın. Bazen lazımsa ek dosyaya taşı ve SKILL.md'den "şu durumda şu dosyaya bak" diye işaret et.

Anthropic'in dökümante ettiği hedef: SKILL.md gövdesi **5.000 token'ın altında** kalsın. Üstüne çıkıyorsan büyük ihtimalle nadir kullanılan örnekleri ya da uzun API referansını ayrı bir dosyaya taşıman gerekiyor.

## Kod blokları

Kod blokları SKILL.md'nin en kritik unsuru. Çünkü model bir tool'u nasıl çağıracağını, bir komutu nasıl yazacağını çoğu zaman buradan öğrenir.

Kurallar:

1. **Her zaman dil etiketi ver.** ` ```python `, ` ```bash `, ` ```yaml `, ` ```json `. Dil etiketi olmayan bir blok, agent için olduğu kadar `GFM` render eden insan okuyucu için de değer kaybeder (syntax highlight kaybolur).
2. **Çalışır kod yaz.** Copy-paste edildiğinde hata vermesin. Pseudo-code yazıyorsan açıkça belirt.
3. **Kısa tut.** 3-10 satırlık örnek, 50 satırlık örnekten neredeyse her zaman daha iyidir. Uzun örneği `examples/` klasörüne ayrı dosya olarak koy.
4. **Yorum dilini tutarlı seç.** Türkçe ya da İngilizce — agent için fark etmez ama belge içinde karıştırma.

## Listeler ve vurgu

Listeler iki amaçla kullanılır ve karıştırılırsa belge bulanıklaşır:

- **Numaralı liste (`1.`, `2.`):** Sırası önemli adımlar. Bir workflow, bir kurulum prosedürü, bir karar ağacı.
- **Madde işareti (`-`):** Sırası önemsiz seçenekler, özellikler veya bilgi parçaları.

Vurgu için iki araç var:

- `**bold**`: Kritik uyarılar (`**Asla production veritabanına yazma.**`), anahtar terimler, dikkat çekilmesi gereken kelimeler.
- `_italic_`: Terim tanımı veya nüans.

En sık yapılan hata her cümlede bir şeyi bold yapmak. Her şey önemliyse hiçbir şey önemli değildir. Bir bölümde en fazla iki-üç bold yeter.

## Anthropic pre-built skill'lerinin şablonu

Anthropic'in yayınladığı `pdf`, `pptx`, `xlsx`, `docx` skill'leri incelendiğinde tekrarlanan bir iskelet ortaya çıkıyor. Yeni bir skill yazarken bu şablonu başlangıç noktası olarak al:

```markdown
# <Skill Name>

## Quick start
<En yaygın görev + çalışır kod örneği — 3-5 satır>

## When to use
<Hangi durumlarda tetiklenmeli, hangi durumlarda tetiklenmemeli>

## Detailed usage
<Step-by-step talimatlar, alt başlıklarla bölünmüş>

## Reference
<Ayrıntılı API/parametre listesi için bkz. REFERENCE.md>
```

Bu dört bölüm bir `quick start pattern` etrafında örgülü: önce hızlı kazanç, sonra kapsam, sonra detay, en sonda derin referans. Agent ilk üç bölümle çoğu işi bitirir; sadece köşe durumlarda Reference'a iner.

## Diğer dosyalara link

SKILL.md'den ek dosyalara köprü atarken sade ol:

- Inline referans: `Form doldurma için FORMS.md'ye bak.`
- Liste içinde: `- Tablo çıkarımı: TABLES.md`
- Mutlak URL yazma. Skill paketlendiğinde göreli dosya adı yeterli.

Agent bu cümleyi gördüğünde `bash` ile dosyayı okur. Bu yüzden dosya adının **doğru** ve `LS` ile listelendiğinde **var olduğundan** emin ol. Var olmayan bir dosyaya referans vermek, modelin geri dönüp belirsiz bir tahmin yapmasına yol açar.

İyi pratik: köprü atarken dosyada **ne bulunacağını** bir cümleyle özetle. Agent "şimdi mi okumalıyım" kararını sağlıklı verir.

## Yaygın hatalar

Production'a giden skill'lerde sıkça karşılaşılan yanlışlar:

- **H1 + tek paragraf.** Belgeyi başlıklarla bölmeyip duvar metin halinde yazmak. Agent bölüm bulamaz, tamamı yer kaplar.
- **Quick start yok.** Belge bir tarih anlatımı gibi başlıyor; agent ilk 30 saniyede iş yapamıyor.
- **Kod örneği yok.** Sadece düz metin talimat. Model "anladım" der, sonra uydurma bir API çağrısı üretir.
- **Dil etiketi olmayan `code block`'lar.** Üç backtick var, ama `python` ya da `bash` yok. Hem render kötü hem de model bağlamı yakalamakta zorlanır.
- **Her şeye bold.** Vurgu enflasyonu — hiçbir uyarı dikkat çekmiyor.
- **5k token'ı aşan dev SKILL.md.** Nadir senaryoları ayrı dosyaya taşımayı reddetmenin sonucu. Her tetiklemede gereksiz token harcaması.
- **Var olmayan dosyaya referans.** "Bkz. FORMS.md" yazıyorsun ama klasörde böyle bir dosya yok.

Opsiyonel olarak `markdownlint` veya `mdformat` ile CI'da biçim tutarlılığını otomatik kontrol edebilirsin.

## Sırada: instructions yazma best practices

Markdown'ın **biçimini** çözdük: başlıklar, kod blokları, listeler, ek dosya bağlantıları. Sırada **içerik** geliyor. SKILL.md'nin gövdesine ne yazıyorsun? Hangi cümle kalıbı agent'a en net sinyali verir, hangi anti-pattern modeli yanlış yola sokar, "Bunu yapma" mı yoksa "Şunu yap" mı daha iyi çalışır? Bir sonraki derste talimat (`instructions`) yazma best practice'lerini ele alıyoruz — biçim güzel, şimdi sıra muhtevada.

## Quiz

**1. Anthropic'in dökümante ettiği SKILL.md gövdesi için önerilen token üst sınırı nedir?**

- a) 1.000 token
- b) 5.000 token (Doğru)
- c) 20.000 token
- d) Üst sınır yoktur

**2. SKILL.md'nin ilk H2 bölümü için Anthropic örneklerinde tekrarlanan başlık aşağıdakilerden hangisidir?**

- a) `## Introduction`
- b) `## Overview`
- c) `## Quick start` (Doğru)
- d) `## Background`

**3. Kod blokları için aşağıdakilerden hangisi doğru pratiktir?**

- a) Dil etiketini atlayıp sadece üç backtick koymak
- b) Mümkün olduğunca uzun, 50+ satırlık örnekler vermek
- c) Üç backtick'ten sonra dil etiketi yazmak ve örnekleri kısa tutmak (Doğru)
- d) HTML `<pre>` etiketi kullanmak

**4. Progressive markdown disclosure'a göre nadir kullanılan ileri senaryolar nereye yazılmalıdır?**

- a) SKILL.md'nin sonuna eklenmeli
- b) YAML frontmatter'a sıkıştırılmalı
- c) SKILL.md'den referans verilen ayrı bir markdown dosyasına (örn. `FORMS.md`) taşınmalı (Doğru)
- d) Yorum satırı olarak gizlenmeli

**5. Aşağıdakilerden hangisi yaygın bir SKILL.md anti-pattern'idir?**

- a) Her bölümde en fazla iki-üç bold kullanmak
- b) Üç katmanlı başlık hiyerarşisi kullanmak
- c) Ek dosyalara inline referans atmak
- d) Var olmayan bir dosyaya "bkz." referansı vermek (Doğru)
