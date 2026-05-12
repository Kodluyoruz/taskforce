# Instructions Yazma Best Practices

SKILL.md'nin frontmatter'ı modelin skill'i bulmasını sağlar; gövde ise modelin işi nasıl yapacağına karar vermesini sağlar. Bu derste odak ikinci kısımda: instructions bölümü. Skill yazımının en zor parçası burasıdır, çünkü model yazdığını **literal** okur. "Dikkatli ol", "uygun şekilde formatla" gibi cümleler senin kafanda bir şey ifade eder, modelin kafasında hiçbir spesifik adımla eşleşmez. Bu bölüm iyi niyet beyanı değildir; modelin tek tek izleyeceği adımların kataloğudur. Anthropic'in tekrar tekrar vurguladığı cümle şu: skill yazmak, yeni başlayan bir takım arkadaşına onboarding rehberi hazırlamaya benzer.

## Onboarding takım arkadaşı metaforu

Yeni bir mühendis ekibe katıldığında ona "veriye dikkat et" demezsin. "Veritabanına bağlanırken `read_replica` connection string'ini kullan, write için ayrı bir pool var" dersin. Skill yazımı da aynı: agent senin onboarding ettiğin yeni ekip üyesi. İki şeyi bilmiyor — sizin domain'inizi ve sizin tercih ettiğiniz yöntemleri. Senin işin bu boşluğu doldurmak.

Bu metafor pratiğe iki kural olarak iniyor: **spesifik ol** (modelin tahmin etmesini bekleme; tam metodu, tam parametreyi, tam yolu yaz) ve **karışıklığı önceden tahmin et** ("bu adımda model şuna takılabilir" diye düşündüğün yere bir not bırak). "Make sure to be careful with formatting" cümlesi modele hiçbir karar yardımı vermez. Bunun yerine: "Use 2-space indentation. Trailing commas allowed in JSON5 files only. For Markdown tables, align columns with spaces, not tabs." İkincisi prescriptive: ne yapacağı net, varyasyon alanı dar.

## Adım adım yapılandırma

Talimat metnini düz paragraflar halinde değil, **numaralı veya bullet'lı adımlar** olarak yaz. Her adım atomik olsun: tek bir iş, tek bir tool çağrısı, tek bir karar.

```markdown
## Usage

1. Read the user's CSV path from the first argument.
2. Open the file with `pd.read_csv(path)`.
3. If the file has more than 10,000 rows, sample 1,000 rows with `df.sample(1000, random_state=42)`.
4. For each numeric column, compute mean, median, and std.
5. Output the result as a Markdown table.
```

Her adım için **girdi/çıktı tipini** açıkça söyle. Model bir önceki adımın çıktısını varsayım olarak hatırlamak zorunda kalmasın.

## "Claude'a kod yazdırma" anti-pattern'ı

En sık görülen hata: skill'in talimatları modele runtime'da kod yazdırmaya yönelik oluyor. Örnek:

> Write a Python function that reads the CSV file and summarizes it.

Bu yaklaşım her çağrıda bir öncekinden farklı çıktı üretir, edge case'leri her seferinde yeniden keşfettirir, token harcar ve hata yüzeyini büyütür. Daha iyi pattern: işi önceden bir script'e koy, model sadece **çağırsın**.

> Run `python scripts/summarize_csv.py <path>` and pass the user's CSV path as the first argument.

Faydaları:

- **Deterministik:** Her çağrıda aynı sonuç.
- **Ucuz:** Model kod üretmiyor; sadece bash ile script tetikliyor.
- **Test edilebilir:** Script'i normal unit test ile koruyabilirsin.

Genel ilke: **tekrar eden, mantığı sabit işler script'e; her seferinde değişen, doğal dil gerektiren işler instructions'a.**

## Bash mı Python mı?

Skill'de iki yürütme yolu var: doğrudan bash komutu ve paketlenmiş Python script'i. **Bash** kısa lineer komutlar, var olan script çağrısı, dosya işlemi/hash/format dönüşümü için uygundur. **Python script'i** veri yapısı, döngü, hata yönetimi, validation veya atomik çok adımlı iş gerektiğinde gerekir. Inline Python kötü pattern: model her seferinde sıfırdan yazar, kütüphane import'larını unutur, edge case'leri kaçırır. Aynı işi `scripts/run.py` halinde paketle; SKILL.md sadece `python scripts/run.py --arg X` demekle yetinsin.

## Hata yönetimi ve eskalasyon

Skill talimatlarında en sık ihmal edilen yer: **hata durumları**. "Mutlu yol"u yazmak kolay; problem çıktığında modelin ne yapacağını söylemek zor ama gerekli.

Her kritik adımdan sonra bir "eğer X olursa Y yap" satırı bırak:

```markdown
1. Open the file with `open(path)`.
2. If the file does not exist, tell the user: "I cannot find the file at <path>. Please verify the path and try again." Then stop.
3. If the file is empty, tell the user the file is empty and ask if they want to proceed with default sample data.
```

Sessiz başarısızlık en kötü senaryodur: model bir hata yutar, akış devam eder, sonra çıkışta saçma sonuç çıkar. Hatayı her seferinde kullanıcıya yansıt.

## Kullanıcıya soru sormak

Bazı bilgi parçaları skill çağrıldığında eksik olabilir. Model tahmin etmek yerine sormalı; ama her belirsizlikte sorarsa kullanıcıyı yorar. Denge için iki kural: **hangi durumda sorulacağını yaz** ve **default davranış belirt.** Default + sor pattern'i şöyle görünür:

```markdown
- If the user specifies a column, use that column only.
- If the user does not specify a column, default to all numeric columns and continue.
- If the file has no numeric columns, ask the user which text column to count.
```

## Çıktı formatını belirt

"İyi bir özet ver" dersen iyi bir özet üretir ama formatı her seferinde farklı olur. Tutarlı çıktı istiyorsan formatı **şablon halinde** yaz:

```markdown
## Output format

Return the result as:

\`\`\`
## Summary
<one-sentence overview>

## Stats
| Column | Mean | Median | Std |
| ------ | ---- | ------ | --- |
| ...    | ...  | ...    | ... |

## Notes
<bullets for anomalies>
\`\`\`
```

Şablon ne kadar somutsa, çıktı o kadar tutarlı olur.

## Edge case'leri kapsa

Production'da kullanıcılar her zaman beklemediğin girdileri verir. Yaygın sınır durumlarını skill'in içinde adresle:

- **Boş girdi:** "Eğer CSV boşsa kullanıcıya 'dosya boş' diye söyle, devam etme."
- **Çok büyük girdi:** "Eğer satır sayısı 100.000'i geçerse `head -n 1000` ile örnekle ve kullanıcıya bildir."
- **Yanlış format:** "Eğer ondalık ayraç virgül ise, `decimal=','` parametresiyle parse et."
- **Encoding:** "UTF-8 dışında bir encoding varsa, önce `chardet` ile tespit et."

Bu satırlar skill'inin olgunluğunu belirler.

## Prescriptive vs descriptive

İki yazım tarzı arasındaki fark skill yazımının kalbidir.

**Descriptive** — bilgi anlatır, karar bırakır:

```markdown
pdfplumber is a Python library for handling PDFs. It has many features
including text extraction, table detection, and metadata reading. You
can use it in various ways depending on what you need.
```

**Prescriptive** — adımı söyler, karar yükünü kaldırır:

```markdown
1. Open the PDF with `pdfplumber.open(path)`.
2. Iterate over pages: `for page in pdf.pages:`.
3. Extract text with `page.extract_text()`.
4. If the page has tables, use `page.extract_tables()` instead.
5. If text extraction returns None, skip the page.
```

Model literal okur. "Many features" gibi açık uçlu cümleler ona seçim yükü bindirir; seçim yükü tutarsızlığa yol açar. Skill'in instructions kısmı prescriptive yazılır. Reference dosyaları (REFERENCE.md, GUIDE.md) descriptive olabilir; sonraki derste o ayrımı açıyoruz.

İki tarzı yan yana koyalım:

```markdown
# KÖTÜ — descriptive, vague
## Usage

pdfplumber is a Python library that can extract text from PDFs.
You can use it to handle various scenarios. Make sure to handle
edge cases and be careful with formatting.
```

```markdown
# İYİ — prescriptive, specific
## Usage

1. Open the PDF with `pdfplumber.open(path)`.
2. Iterate over pages: `for page in pdf.pages:`.
3. Extract text with `page.extract_text()`.
4. If the page has tables, use `page.extract_tables()` instead.
5. If text extraction returns None, skip the page.

For non-English PDFs, see `REFERENCE.md` for encoding flags.
```

İkincisi daha uzun değil, sadece daha **karar verilmiş**. Karar yazarken alınırsa runtime'da alınmak zorunda kalmaz.

## Sırada: resource ve referans dosyaları

Bu derste instructions gövdesinin nasıl yazılacağını ele aldık: prescriptive cümle, atomik adım, hata eskalasyonu, edge case kapsamı. Ama bazı bilgiler instructions'a sığmaz: büyük şema, uzun rehber, örnek dataset, tablo şeklinde referans veri. Bunları SKILL.md'ye yığarsan token bütçesini patlatırsın; ayrı dosyalara bölersen progressive disclosure'ın üçüncü katmanı devreye girer. Sonraki ders tam olarak bu: resource ve reference dosyalarını nasıl ayırırsın, ne zaman okutursun, isimlendirme ve yapı için hangi konvansiyonları kullanırsın.
