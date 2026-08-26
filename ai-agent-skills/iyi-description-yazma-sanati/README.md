# İyi Description Yazma Sanatı

Bir skill yazarken kod, instructions, script, referans dosyaları — hepsi önemli. Ama bunların hiçbiri çalışmaz, eğer bir tek satır işini doğru yapmıyorsa: `description`. Description, skill metadata'sının kalbidir. Her sohbet başında modele yüklenen tek metin odur. Agent skill'in dosyalarını okumadan önce sadece bu satıra bakar ve "bu görev bu skill'e uyar mı?" diye karar verir. SKILL.md'in 4000 kelimelik içeriği ne kadar parlak olursa olsun, description kötüyse model dosyayı hiç açmaz. Bu lesson skill yazımının en yüksek getirili tek adımına ayrılmış: keskin, tetiklenebilir, ayırt edici bir description nasıl yazılır.

## Neden description bu kadar önemli?

Progressive disclosure mimarisinde yalnızca `name` ve `description` her sohbete yüklenir. SKILL.md'in tamamı, referans dosyaları, script'ler — bunlar ancak agent description'a bakıp "evet, bu görev bu skill'e uyar" dedikten sonra okunur. Bu yapı onlarca skill'in context maliyeti olmadan yüklü kalmasını mümkün kılar ama description'ı tek karar noktası haline getirir.

Description kötüyse üç tipik sonuç çıkar:

- **Undertriggering.** Skill hiç çağrılmaz. Anthropic mühendislik blogu özellikle bu hatayı vurguluyor: Claude doğal olarak skill'lere "az başvurma" eğilimindedir, yani description'ın biraz "ısrarcı" yazılması gerekir.
- **Overtriggering.** Description çok geniş yazıldığında skill ilgisiz görevlerde de tetiklenir, gürültü yaratır.
- **Yanlış skill seçimi.** İki skill'in description'ı benzer alanları kapsadığında agent ayırt edemez.

Hepsinin kaynağı tek bir yerdir: description, ne yaptığını ve ne zaman kullanılması gerektiğini yeterince net söylemiyordur.

## "What + When to use" formülü

Anthropic'in resmi rehberi description için tek bir kural koyar: hem **what** (skill ne yapar) hem de **when** (Claude bunu ne zaman kullanmalı) cevaplanmalı. Bu iki parçanın ikisi de yoksa description eksiktir.

Pratik şablon:

> "[Eylem cümlesi: skill ne yapar]. Use when [tetikleyici durum 1], [tetikleyici durum 2], or when the user mentions [keyword1], [keyword2]."

İlk yarım cümle ne yaptığını anlatır. İkinci yarım cümle hangi sinyaller geldiğinde çağrılması gerektiğini söyler. Modelin description'ı tararken aradığı şey tam olarak budur: bir aksiyon ve bir tetikleyici.

## İyi description anatomisi

Anthropic'in pre-built skill'lerinden gerçek örnekler:

```yaml
name: pdf
description: Extract text and tables from PDF files, fill forms, merge documents. Use when working with PDF files or when the user mentions PDFs, forms, or document extraction.
```

```yaml
name: xlsx
description: Create spreadsheets, analyze data, generate reports with charts. Use when working with Excel files, spreadsheets, tabular data analysis, or CSV.
```

Her ikisinde de aynı yapı görülür: önce eylem fiilleriyle yetenekler ("extract", "create", "analyze"), sonra `Use when…` ile başlayan açık bir tetikleyici listesi. Keyword'ler ("PDF", "form", "CSV") özellikle seçilmiştir; çünkü kullanıcının prompt'unda muhtemelen bu kelimeler geçer ve agent'ın eşleştirmesi gereken sinyal budur.

## Kötü description anatomisi

```yaml
description: A helper for documents.
```

Hangi belge? Hangi işlem? Hiçbir trigger keyword yok. Agent bunu görür ve "olabilir de olmayabilir de" deyip geçer — undertriggering garantisi.

```yaml
description: A skill.
```

Açıkça yetersiz. Modelin bu satıra dayanarak bir görevi eşleştirmesi imkânsız.

```yaml
description: Use this skill always.
```

Tam tersi hata: her şeyde tetikler. Bir agent'ın elinde böyle bir skill varsa neredeyse her sohbette ilgisiz yere yüklenir, context'i kirletir.

```yaml
description: Extract data, analyze it, send emails, schedule meetings, generate reports, manage calendars, write documents, fix bugs, and more.
```

Bir skill her şeyi yapmaya çalışıyor. Bu hem skill tasarımı hem de description açısından kırmızı bayrak. Agent hangi sinyale göre çağıracağına karar veremez; description efektif olarak boş bir vaat listesidir.

## Yazma teknikleri

**1. Tetikleyici keyword'leri yerleştir.** Kullanıcı hangi sözcükleri kullandığında skill çağrılmalı? Bu sözcükleri description'a literal olarak koy. Bir email skill'i için "email", "newsletter", "outreach", "campaign". Agent semantik eşleştirme yapar ama literal eşleşmeler güveni artırır.

**2. Use case'leri açıkça listele.** "Use when the user uploads a PDF", "Use when the user asks for sprint summary" gibi açık koşullar yaz. Soyut betimleme yerine kullanıcı davranışını tarif et.

**3. Sınırı belirt.** Skill ne yapmaz? "For Word documents, use the docx skill instead" gibi bir cümle hem yanlış tetiklemeyi azaltır hem de skill'ler arasındaki sınırı netleştirir.

**4. Hafifçe ısrarcı ol.** Claude'un eğilimi az çağırma yönünde. Skill ekibin için önemli bir akışı temsil ediyorsa "Make sure to use this skill whenever the user mentions X, even if they don't explicitly ask" gibi yönlendirici bir cümle eklemek meşrudur.

**5. Karakter bütçesini akıllı kullan.** Sınır 1024 karakter ama bu "sınıra kadar doldur" demek değil. Çok uzun description'lar agent'ın dikkatini dağıtır. Pratik sweet spot 150-350 karakter — yetenekleri ve tetikleyicileri taşımaya yetecek kadar geniş, dikkati dağıtmayacak kadar dar.

**6. Eylem fiilleriyle başla.** "Extract", "create", "analyze", "summarize", "generate". İlk üç kelimenin skill'in ne yaptığını kabaca anlatması gerekir — model başlangıç kelimelerine daha çok ağırlık verir.

## Çoklu skill çakışmasında ayrıştırma

Bir projede birden çok PDF skill'i olabilir: özet çıkaran, form dolduran, birden çok PDF'i birleştiren. Description'lar **benzersiz keyword'lere** odaklanmalı:

- `pdf-summary` → "Use when the user wants to summarize a PDF, extract key points, or generate an executive summary."
- `pdf-forms` → "Use when the user uploads a PDF form that needs filling, mentions form fields, or wants to populate a PDF template."
- `pdf-merge` → "Use when the user wants to combine, merge, or concatenate multiple PDF files into one document."

Aynı dosya tipini kapsasalar da tetikleyici niyet (summarize / fill / merge) ve keyword seti farklı. Agent karar verirken bu farklılıklara tutunur.

## A/B test: iter etmek

Description ilk seferde mükemmel olmaz. Yazdıktan sonra skill'i gerçek ortamda test et:

- Tetiklenmesi gereken görevlerde skill çağrılıyor mu? Çağrılmıyorsa keyword'ler eksik ya da yeterince ısrarcı değil.
- Tetiklenmemesi gereken görevlerde çağrılıyor mu? Çağrılıyorsa fazla geniş; sınır cümleleri ekle.
- İki skill aynı görevde birden çağrılıyor mu? Description'ları daha keskin ayrıştırmalı.

Yaz, dene, gözlemle, düzelt — bu döngü skill'in gerçek değerini ortaya çıkaran şeydir. Doğru anda yüklenmeyen bir skill yokmuş gibidir.

## Yan yana iki örnek

```yaml
# İyi
---
name: weekly-status-report
description: Generate a weekly status report from JIRA tickets and GitHub PRs. Use when the user asks for a weekly summary, sprint review, team status update, or mentions Friday report.
---
```

```yaml
# Kötü
---
name: report-helper
description: Helps with reports.
---
```

İki skill aynı işi yapıyor olabilir. Birincide model "weekly summary", "sprint review", "Friday report" sinyallerini gördüğü an doğru skill'e gider. İkincide "report" kelimesini yakalasa bile hangi rapor olduğunu bilmez ve büyük olasılıkla skill'i hiç çağırmaz.

## Sırada ne var?

Description yazma sanatı tek seferlik bir iş değildir. Bir skill'in ömrü boyunca description birkaç kez değişir: yeni yetenekler eklenir, yanlış tetikleme tespit edilir, başka skill'lerle çakışma çıkar. Bu da bizi doğrudan bir sonraki konuya götürüyor: **skill yaşam döngüsü ve versiyonlama**. Skill'i ilk kez yazıp bitirmek bir şey, aylar boyunca güncel ve doğru tetiklenen tutmak başka bir şey. Sonraki ders skill'leri nasıl sürümlediğimizi, eski sürümleri kırmadan nasıl ilerlediğimizi ve ne zaman emekliye ayırdığımızı açıyor.
