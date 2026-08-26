# İlk Skill'inizi Yazma — Quickstart

Önceki bölümde skill klasörünün anatomisini, hangi dosyanın ne işe yaradığını, YAML frontmatter alanlarının nasıl davrandığını masada açtık. Bu lesson ile birlikte teori bitiyor ve elimizi gerçekten kirletiyoruz: sıfırdan tek başına çalışan, küçük ama tam bir skill üreteceğiz. Adı `csv-summary` olacak; bir CSV dosyasını okuyacak, satır ve sütun sayısını verecek, sayısal kolonlar için kısa istatistikler üretecek. Hem Claude Code üzerinde filesystem'den, hem de OpenAI Responses API üzerinde hosted bir bundle olarak deneyeceğiz. Sonra da skill tetiklenmezse ne yapılır, çıktı yamuk gelirse nereden başlanır — onu da gösterip kapatacağız.

## Hedef: csv-summary skill'i

Skill'in yapacağı iş çok dar: kullanıcı bir CSV dosyası verdiğinde, agent o dosyayı işler ve şu üç bilgiyi döndürür:

1. Toplam satır sayısı.
2. Sütun isimleri.
3. Her sayısal sütun için ortalama, minimum ve maksimum.

Bu kadar. Mucize yok, format zorlaması yok, başka bir tool çağrısı yok. İlk skill için "yapması gereken iş net, tetiklendiği durum net" olması en önemli kriter — çünkü hem description yazmak kolaylaşıyor, hem de doğrulama sırasında "bu çalıştı mı?" sorusuna kesin cevap verebiliyorsun.

## Adım 1: Klasör ve SKILL.md

İlk olarak klasörü kuralım. Skill adı YAML'daki `name` ile, klasör adı ile ve bundle içindeki tek `SKILL.md` ile tutarlı olmak zorunda:

```bash
mkdir csv-summary
cd csv-summary
```

İçine `SKILL.md` ekliyoruz. Burada iki şey önemli: frontmatter'daki `description`, agent'ın startup'ta okuduğu metadata'dır. Yani skill'in **ne zaman** devreye gireceği bu satırda yazılı olmazsa, agent uygun istek gelse bile skill'i yüklemez. İkincisi, SKILL.md gövdesi sadece skill tetiklendiğinde context'e giriyor; bu yüzden gövdeyi kısa, talimat odaklı tutuyoruz.

```markdown
---
name: csv-summary
description: Read a CSV file, count rows and columns, list column names, and produce a short statistical summary (mean/min/max for numeric columns). Use when the user uploads a CSV file, asks for CSV summary, or wants quick data exploration.
---

# CSV Summary

Verilen bir CSV dosyasını özetlemek için `scripts/summarize.py` script'ini çalıştır.

## Kullanım

1. Kullanıcının verdiği CSV dosya yolunu al.
2. `python scripts/summarize.py <csv_path>` çalıştır.
3. Çıktıyı kullanıcıya markdown tablosu olarak sun.

Detay parametreler için `REFERENCE.md`'ye bak.
```

Description hem **ne yaptığını** hem de **ne zaman kullanılacağını** içeriyor. Bu desen tesadüfi değil; agent'ın router'ı bu iki bilgiyi de görmezse skill'i yanlış yerde tetikler ya da hiç tetiklemez.

## Adım 2: Script ekle

Skill'in beyni SKILL.md değil — gerçek iş `scripts/summarize.py` içinde. Bu önemli bir tasarım kararı: deterministik şeyler (sayma, ortalama alma, sütun listeleme) script'e gider, çünkü script'in kodu hiçbir zaman context window'a girmez; sadece çıktısı girer. Model bu sayede hem daha az token harcar hem de aritmetik hata yapmaz.

```bash
mkdir scripts
```

```python
# scripts/summarize.py
import sys
import csv
import statistics

def summarize(path: str):
    with open(path, newline='', encoding='utf-8') as f:
        rows = list(csv.DictReader(f))

    if not rows:
        print("CSV boş.")
        return

    print(f"Toplam satır: {len(rows)}")
    print(f"Sütunlar: {', '.join(rows[0].keys())}")

    # Sayısal sütunlar için ortalama, min, max
    for col in rows[0].keys():
        try:
            vals = [float(r[col]) for r in rows if r[col]]
            print(f"  {col}: mean={statistics.mean(vals):.2f}, "
                  f"min={min(vals)}, max={max(vals)}")
        except (ValueError, TypeError):
            continue

if __name__ == "__main__":
    summarize(sys.argv[1])
```

Sade tutuyoruz. İlk skill'de "her durumu kapsayan" bir script yazma tuzağına düşmemek lazım — önce çalışan en küçük versiyonu çıkar, sonra ihtiyaç çıktıkça büyüt.

## Adım 3: Claude Code'da test (filesystem)

Skill'in filesystem'e konulduğu yer hangi scope'ta çalışacağını belirliyor. Sadece kendi makinende kullanacaksan `~/.claude/skills/` altına; bir proje ekibiyle paylaşacaksan repo köküne `.claude/skills/` altına koyuyorsun:

```bash
# Personal skill — sadece sen kullanacaksın
mv csv-summary ~/.claude/skills/

# veya project skill — repo'yla birlikte paylaşılır
mv csv-summary .claude/skills/
```

Sonra `Claude Code` başlat ve şunu sor: "Bu CSV'yi özetle: ~/Downloads/sales.csv". Eğer description'ın iyiyse, agent SKILL.md'yi `bash` ile okur, script'i çalıştırır ve çıktıyı sana markdown olarak sunar. Tetikleme olduğunu transcript'ten anlayabilirsin — bash çağrısı `cat ~/.claude/skills/csv-summary/SKILL.md` ya da benzer bir okumayla başlar.

## Adım 4: OpenAI Responses API ile test (hosted)

OpenAI tarafında akış biraz farklı. Burada skill bir dosya sistemi konumu değil; önce `upload` edilen ve sonra `skill_id` ile referans verilen bir bundle. Yani önce zip'leyip yüklüyorsun, sonra her response çağrısında o id'yi `tools[].environment.skills` altına bağlıyorsun:

```bash
zip -r csv-summary.zip csv-summary/
```

Yüklemeyi `/v1/skills` endpoint'ine multipart ya da zip olarak yapıyorsun (CLI veya HTTP — ekibin tercihine göre). Dönüşte aldığın `skill_id` ile şöyle bir çağrı atıyorsun:

```python
from openai import OpenAI
client = OpenAI()

response = client.responses.create(
    model="gpt-5.5",
    tools=[{
        "type": "shell",
        "environment": {
            "type": "container_auto",
            "skills": [{"type": "skill_reference", "skill_id": "csv-summary"}]
        }
    }],
    input="Şu CSV'yi özetle: /tmp/sales.csv"
)
print(response.output_text)
```

Burada `container_auto` hosted shell'i tetikliyor; container ayağa kalkıyor, skill mount ediliyor, model SKILL.md'yi okuyup script'i çalıştırıyor, sonucu döndürüyor. Local shell modunda ise `skill_id` yerine `name` + `path` veriyorsun ve kendi makinendeki dosyaları kullanıyor. Aynı SKILL.md, iki farklı runtime, sıfır değişiklik — açık standardın pratik faydası tam burası.

## Doğrulama ve iterasyon

Skill yazmanın gerçek kısmı bu adımdan sonra başlıyor. İlk çağrı çalıştığında üç soruyu peş peşe sormak lazım:

- **Skill tetiklendi mi?** Agent SKILL.md'yi okumadıysa description yetersiz ya da yanıltıcı demektir. "Use when..." kısmını zenginleştir, kullanıcının kullanacağı tipik ifadeleri ekle ("CSV summary", "data exploration", "veri özetle").
- **Doğru script çalıştı mı, doğru argümanla?** Çalışmıyorsa SKILL.md'deki kullanım adımları muğlak demektir. Komutu tam yaz: `python scripts/summarize.py <csv_path>`. Model çoğu zaman "tahmin" yapar; tahmine yer bırakma.
- **Çıktı kullanıcıya doğru formatta ulaştı mı?** Script terminal çıktısı veriyor ama kullanıcı tablo bekliyorsa, SKILL.md'ye "çıktıyı markdown tablosu olarak sun" satırı şart.

Tek tek değiştir, tek tek dene. Aynı anda hem description'ı hem script'i değiştirirsen hangi düzeltmenin işe yaradığını bilemezsin.

Bir başka pratik mesele: token bütçesi. SKILL.md gövdesi tetiklendiğinde context'e giriyor; yani 200 satırlık bir gövde her çağrıda bedeli vardır. Bu yüzden uzun parametre listeleri, edge case'ler, örnek girdiler — bunların hepsi ayrı `REFERENCE.md` dosyasına gider. Model gerektiğinde okur, gerekmediğinde dokunmaz.

Quickstart'tan çıkarman gereken üç şey:

1. **Tek görev, tek skill.** "Genel veri asistanı" değil, "CSV özetleyen skill." Dar görev = iyi description = doğru tetikleme.
2. **Deterministik iş script'te, esnek yönlendirme markdown'da.** Hesap yapmayı modele bırakma; talimat vermeyi script'e bırakma.
3. **Önce çalıştır, sonra büyüt.** İlk skill 6 dosyadan azdır: 1 `SKILL.md`, 1 script, opsiyonel `REFERENCE.md`. Karmaşık geldi mi, kötü tasarım demektir.

## Sırada: SKILL.md'yi derinlemesine yazmak

Şimdi elinde çalışan ufak bir bundle var ve frontmatter'ın işine yaradığını gözünle gördün. Bir sonraki ders, `SKILL.md`'nin gövdesine zoom yapacak: markdown başlık hiyerarşisinin neyi etkilediği, "quickstart pattern" denen örnek-ile-açıklama düzeni, talimatların hangi kişide yazılması gerektiği, hangi cümle yapılarının agent'ı daha iyi yönlendirdiği, "Use when X — do Y — return Z" kalıbı gibi konuları açacağız. Yani: bu derste skill kurduk, sonraki derste skill'i **daha iyi yazıyoruz**.
