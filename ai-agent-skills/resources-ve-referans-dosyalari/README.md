# Resources ve Referans Dosyaları

Bir skill yazarken her şeyi `SKILL.md` gövdesine sığdırmak istersin: tüm adımlar, tüm kurallar, tüm örnekler, tüm tablo, tüm endpoint listesi. Bir süre sonra dosya kabarır, gövde 8-10k token'ı bulur ve her tetiklemede agent'ın context'i şişer. Önceki ders `instructions-yazma-best-practices` SKILL.md gövdesini nasıl kısa ve operasyonel yazacağını anlattı. Bu derste işin diğer yarısını açıyoruz: gövdeye girmemesi gereken içerik nereye gider? Cevap, Level 3 dosyaları — skill bundle'ına eklediğin ama agent ancak gerektiğinde okuduğu reference, schema, template ve dataset dosyaları. Bu katman, Skills'in "ne kadar derin alan bilgisi taşırsa taşısın context'i şişirmemesi"nin sırrı.

## Resource türleri

Level 3 dosyaları tek bir tür değil; beş ayrı kategoride düşünmek faydalı.

**Reference markdown** — `REFERENCE.md`, `FORMS.md`, `EXAMPLES.md` gibi. SKILL.md'de yer alamayacak kadar uzun ya da sık başvurulmayan talimatlar burada durur. Anthropic'in resmi PDF skill'inde `FORMS.md` tam olarak bunu yapıyor: form doldurma akışı SKILL.md'de değil, ayrı dosyada — çünkü her PDF görevi form içermez.

**JSON Schema** — `schema.json`. Input ya da output validation için. Agent'ın ürettiği yapılandırılmış veriyi (ticket listesi, rapor, API isteği) bir kurala bağlamak istediğinde, kuralı schema dosyasına yaz. Skill gövdesi schema'yı kelime kelime tarif etmek zorunda kalmaz; "çıktın `schema.json` ile uyumlu olmalı" demek yeter.

**Template** — `report.md`, `email.html`, `templates/weekly.md`. Çıktının görünüşünü sabit tutmak için. Agent şablonu okur, alanları doldurur, sonucu üretir. Tüm format kuralları gövdede yazılmak yerine örnek dosyada görünür.

**Dataset / lookup** — `codes.csv`, `glossary.json`, `country-codes.csv`. Sabit veri tabloları, sözlükler, kod karşılıkları. Domain-specific terimler, ülke kodları, ürün kodları, kısaltma sözlükleri — agent ihtiyacı olduğunda satır okur.

**Static documentation** — `api-reference.md`, `endpoints.md`. Endpoint listesi, parametre dökümü, response şeması. Sürekli güncellenen ama her görevde tamamını okumaya gerek olmayan içerik.

## Ne zaman Level 3'e taşımalı?

Karar kriteri net: bir cümle hem SKILL.md'de yer kaplayacak hem de sadece dar bir alt senaryoda işe yarayacaksa, dosyaya çıkar. Pratikte üç sinyal yeterli.

İçerik sık kullanılmıyorsa ek dosyaya gitmeli. Bir kuralın yılda bir lazım olduğunu biliyorsan onu her tetiklemede yüklemek anlamsız.

İçerik uzunsa ek dosyaya gitmeli. Pratik eşik: 100 satırı geçen bir bölüm ayrı dosyaya çıkarılır. Anthropic'in best practices kılavuzu da bunu öneriyor: 100 satırı aşan reference dosyalarına table of contents ekle ki agent içinde gezinebilsin.

İçerik runtime'da değişiyorsa ek dosyaya gitmeli. Yeni bir API endpoint, yeni bir ülke kodu, yeni bir form alanı çıktığında ana SKILL.md'yi bozmadan sadece ek dosyayı güncellersin. Bu, skill versiyonlamayı kolaylaştırır.

Tersi de geçerli: bir bilgi her tetiklemede gerçekten gerekliyse, kısaysa ve sabitse, gövdede kalsın.

## SKILL.md'den referans verme

Level 3 dosyalarının okunmasını agent'a kim söyler? Gövde. Buradaki dil çok önemli.

Doğru patern, gövdede inline bir cümle: "For X, see FILE.md." Spesifik, eylem odaklı. Agent bu cümleyi gördüğünde "şu durumda şu dosyaya bak" sinyalini alır ve dosyayı `bash` ile okur. Örnekler:

- "For PDF form filling, see FORMS.md."
- "Country code lookup is in `data/codes.csv`."
- "Validate output against `schema.json` before returning."

Yanlış patern, belirsiz referans: "See the other files." Agent hangi dosyayı, hangi durumda, ne için okuyacağını anlamaz. Tüm bundle'ı taramaya çalışır ya da hiçbirini açmaz.

Bir başka pratik kural: SKILL.md ana akışta kalsın. Yani gövde adım adım iş akışını anlatıyor; her adımın yanına gerekirse "detayı şurada" referansı eklenir. Adımlar dosyaya gönderme cümlelerinden ibaret kalmaz; iskelet gövdede, derin detay dosyada.

## JSON Schema kullanımı

JSON Schema, JSON çıktısının uyacağı kuralları yapılandırılmış olarak yazmanı sağlar. Tip kontrolü, zorunlu alanlar, enum değerleri, format kuralları — hepsi tek bir dosyada. Agent çıktıyı ürettikten sonra script ile valide edebilir, hata varsa kendi düzeltebilir.

Tipik bir validation dosyası şuna benzer:

```json
{
  "type": "object",
  "properties": {
    "report_date": {"type": "string", "format": "date"},
    "tickets": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {"type": "string"},
          "status": {"enum": ["open", "closed", "in-progress"]}
        }
      }
    }
  },
  "required": ["report_date", "tickets"]
}
```

SKILL.md tarafında karşılığı tek cümle: "Output JSON şu schema'ya uymalı: `schema.json`. Validation için `scripts/validate.py` çalıştır." Agent bu cümleyi okuyup çıktısını schema'ya göre kendi denetler — sen gövdede "tarih formatı YYYY-MM-DD olmalı, status üç değerden biri olmalı" gibi onlarca satır yazmaktan kurtulursun.

## Template dosyaları

Template, çıktının iskeletini sabitler. Agent şablonu okur, değişkenleri doldurur. Format kuralları gövdeye değil, şablonun kendisine yazılı.

```markdown
# Weekly Report — {{ date }}

## Highlights
{{ for highlight in highlights }}
- {{ highlight }}
{{ end }}

## Tickets Closed
| ID | Title | Owner |
|---|---|---|
{{ for t in closed }}
| {{ t.id }} | {{ t.title }} | {{ t.owner }} |
{{ end }}
```

SKILL.md karşılığı: "Çıktıyı `templates/weekly.md` şablonuna doldur. Eksik alanları boş bırakma — yoksa kullanıcıya sor." Format değişmek istediğinde tek dosyayı güncellersin; gövde dokunmadan kalır.

## Lookup / dataset

Sabit veri tabloları skill bundle'ının en hafif Level 3 dosyalarıdır. CSV ya da JSON formatında, agent satır satır okuyabilir.

```
codes.csv:
country_code,country_name
US,United States
TR,Turkey
DE,Germany
```

SKILL.md karşılığı: "Ülke kodunu `data/codes.csv` dosyasından oku ve ülke adına çevir." Sözlük 1.000 satır da olsa SKILL.md'ye dokunmaz; agent yalnız gerekli satırı bulup okur. Hukuk skill'inde glossary, finans skill'inde para birimi tablosu, e-ticaret skill'inde ürün kategori kodları aynı patern.

## Token verimliliği avantajı

Bu yapının somut faydası context window'da görünür. SKILL.md gövdesi her tetiklemede yükleniyor; Level 3 dosyaları sadece referans edildiğinde. Fark ölçek büyüdükçe yığılır:

- 1.000 satırlık glossary SKILL.md'ye yazılsaydı, skill her tetiklendiğinde context o satırları yutardı.
- Aynı glossary `data/glossary.json` olarak bundle'da dururken context'e sıfır token yükler. Agent bir terimi araması gerektiğinde `bash` ile dosyayı açar; sadece okuduğu kadar token harcar.

Aynı mantık schema, template ve API reference için de geçerli. Skill ne kadar derin domain bilgisi taşırsa taşısın, görev başı maliyet o görevin gerçekten ihtiyaç duyduğu içerikle sınırlı kalır.

## Yaygın kullanım örnekleri

Pratikte hangi dosya hangi rolde durur, küçük bir harita:

- `REFERENCE.md` — tüm parametreler, return değerleri, edge case listesi. Agent dar bir sorunla karşılaşınca açar.
- `EXAMPLES.md` — başarılı senaryoların tam örnekleri. Agent emin olamadığı bir akışta örnek üzerinden hizalanır.
- `FORMS.md` — PDF / web form alanları, varsayılan değerler, doldurma sırası.
- `GLOSSARY.md` — domain terimleri. Hukuk, sağlık, finans gibi alanlarda neredeyse zorunlu.
- `schema.json` — input ya da output validation şeması.
- `templates/*.md` — rapor, e-posta, mesaj şablonu.
- `data/codes.csv` — sabit lookup tablosu.
- `api-reference.md` — endpoint listesi, request / response örnekleri.

Bir skill bunların hepsini taşımak zorunda değil; bir skill genelde 2-3 tane Level 3 dosyasıyla başlar, ihtiyaca göre büyür.

## Sırada: executable scripts (köprü)

Şimdiye kadar konuştuğumuz dosyalar pasif: markdown, JSON, CSV. Agent okur, içeriği context'e alır, kararını verir. Ama Level 3'ün ikinci tarafı var: çalıştırılabilir kod. Bir Python script'i, bir bash dosyası, bir validator — agent bunları okumaz, **çalıştırır**. Kod context'e hiç girmez; sadece çıktısı girer. Sonraki ders `executable-scripts-ile-deterministik-isler` tam olarak bunu açıyor: deterministik işleri (parse, validate, dönüştür) neden script'e bırakman gerektiğini ve script'lerin reference dosyalarından nasıl farklı bir token davranışı sergilediğini.
