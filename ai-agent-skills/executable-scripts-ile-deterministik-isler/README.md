# Executable Scripts ile Deterministik İşler

Önceki ders `resources-ve-referans-dosyalari` agent'ın okuduğu pasif dosyaları anlattı: markdown, JSON, CSV. Bu derste Level 3'ün ikinci yarısına geçiyoruz — agent'ın okumadığı, **çalıştırdığı** dosyalar. Python script'i, bash script'i, küçük bir Node.js helper'ı. Bir CSV'yi özetlemek, bir PDF'ten metin çıkarmak, bir JSON'ı schema'ya göre valide etmek gibi tekrar eden, kuralı belli işler genelde modele yaptırılmaz; bunlar için skill bundle'ına bir script konur, SKILL.md gövdesi "bu işi şu script ile yap" der. Sebep iki kelimeye sığar: deterministik sonuç ve token tasarrufu. Bu dersin amacı script'lerin neden var olduğunu, hangi durumda işe yaradığını ve SKILL.md'ye nasıl bağlandığını netleştirmek.

## Neden script? (LLM-üretilmiş kod ile karşılaştırma)

Aynı işi iki yolla yaptırabilirsin: ya modele her seferinde sıfırdan kod yazdırırsın, ya da bir kez yazdığın script'i bundle'a koyup model çağırır. İlk yol kâğıt üstünde esnek görünür ama pratikte üç sorun çıkarır.

Bir, sonuç deterministik değildir. Aynı CSV için modelin ürettiği summary kodu bu sefer `pandas.describe()` kullanır, sonraki seferde elle döngü yazar; çıktı formatı tutmaz. Tipik bir tablo işleminde model `len(rows)` ile bir sayı, başka bir tetiklemede `df.shape[0]` ile başka bir sayı döndürebilir; ortalama hesabında yuvarlama farklı yere düşer. Aynı girdi, farklı çıktı.

İki, model aritmetikte hata yapar. Toplam, ortalama, percentile gibi hesaplamaları modele yaptırdığında saatte bir kez bir basamağı kaçırır. Script ise `numpy.mean(values)` çalıştırır — yanlış sonuç verme ihtimali sıfır.

Üç, model kodu uzun. Üç satır iş için on beş satır savunmacı boilerplate üretir, hata yönetimi tutarsız, tipler eksik. Bir kez paketlenmiş bir script ise temiz, test edilmiş ve kısa.

Pratik kural: bir iş "şu girdiden şu çıktıyı üret, hep aynı şekilde" diye tanımlanabiliyorsa, modele bırakma — script'e taşı. Model planlamada, karar verme ve metin üretmede güçlü; deterministik veri işlemede script daha güvenilir.

## Token avantajı: kod context'e girmez

Burası Skills mimarisinin en bilinmeyen kısmı. Agent bir markdown dosyasını `bash` ile okuduğunda dosyanın **içeriği context'e girer**; sonraki adımlarda model o token'ları kullanır. Bir Python script'ini çalıştırdığında ise iş tersine işler: script kodu hiçbir zaman context'e girmez, sadece script'in **stdout çıktısı** girer.

Yani 800 satırlık bir `extract_text.py` skill bundle'ında durabilir, görev başına `python scripts/extract_text.py report.pdf` çağrısı olur, modele dönen tek şey çıkan metindir. Agent kodu görmez, sadece sonucu görür. Aynı işi modele yaptırsaydın 800 satırlık kod model çıktısı olarak üretilir, hem token harcar hem de her seferinde biraz farklı yazılır.

Anthropic'in resmi belgesi bu özelliği "efficient script execution" diye geçirir: `validate_form.py` çalıştığında modelin bağlamında sadece "Validation passed" ya da hata mesajı durur. Skill ne kadar derin bir araç taşırsa taşısın, görev başı maliyet sabit kalır.

## Hangi diller, hangi runtime

Üç dil yaygın kullanılır. Python birinci tercih: ekosistem geniş, parse / validate / dönüştürme kütüphaneleri olgun, agent runtime'larında genelde pre-installed. Bash kısa shell işleri için iyidir — dosya taşıma, basit `jq` filtreleri, `curl` çağrıları. Node.js, ekibin JS dünyasındaysa veya runtime Node ile geliyorsa kullanılır.

Hangi bağımlılığı kullanabileceğin runtime'a bağlıdır. Claude API'nin code execution container'ı yaygın Python paketleriyle gelir: `pandas`, `numpy`, `requests`, `pdfplumber`, `python-docx`, `openpyxl`. Standart kütüphaneye dokunmadan bunları import edebilirsin. Claude Code ise kullanıcının makinesinde çalışır; bağımlılık varsayımı zayıf. Burada ya standart kütüphane ile yetinmek ya da `requirements.txt` koyup `pip install` adımını skill'in setup talimatına yazmak gerekir. SKILL.md gövdesinde hangi runtime için yazıldığını netleştirmek, kullanıcıyı sürprize karşı korur.

## SKILL.md'den nasıl çağrılır

Çağrı her zaman `bash` üzerinden yapılır. Agent SKILL.md'yi okur, talimatta bir komut görürse onu shell'de çalıştırır. Kalıp basit:

```python
# scripts/extract_text.py
import sys
import pdfplumber

def extract(path: str) -> str:
    with pdfplumber.open(path) as pdf:
        return "\n".join(p.extract_text() or "" for p in pdf.pages)

if __name__ == "__main__":
    print(extract(sys.argv[1]))
```

SKILL.md gövdesinde karşılığı tek bölümdür:

```markdown
## Usage
PDF'ten metin çıkarmak için:

\`\`\`bash
python scripts/extract_text.py <pdf_path>
\`\`\`

Çıktı stdout'a yazılır.
```

Dikkat edilecek üç şey var. Bir, komut spesifik olmalı — "bir Python script'i kullan" değil, tam komut. İki, argüman placeholder'ları net olmalı (`<pdf_path>`); agent neyi nereye koyacağını anlasın. Üç, ne yapacağı tek cümle özetlenmeli, modelin kodu okumasına gerek kalmasın.

## Argüman ve çıktı yönetimi

Script'e veri geçirmenin üç yolu vardır. **argv** kısa ve sabit argümanlar için iyidir: dosya yolu, mod, format. **stdin** uzun veya yapılandırılmış veri için kullanılır: agent JSON'u `echo` ile pipe eder. **Environment variable** ise gizli değerler (API key, token) ve runtime ayarları için tercih edilir.

Çıktı tarafında tek kural: structured stdout. Agent stdout'u okur ve içine bakar; serbest metin yerine sabit format ver. JSON en güvenli seçim — model parse edebilir, format kaymaz. Tablo göstereceksen markdown tablo, listeyse satır başına bir öğe. "Validation passed" gibi tek satırlık status mesajları da yeterlidir; önemli olan agent'ın çıktıyı her seferinde aynı şekilde yorumlayabilmesi.

Loglar ve teşhis mesajları stderr'e yazılmalı, stdout'a değil. Böylece agent'ın gördüğü stdout sadece veriden ibaret kalır, debug çıktısı parsing'i bozmaz.

## Hata yönetimi

Script bir iş yapmayı denerken hata aldığında iki şey yapması gerekir: non-zero exit code döndürmek ve stderr'e açıklayıcı bir mesaj yazmak. Python'da bu `sys.exit(1)` veya `raise` ile olur; bash'te `exit 1`. Sessiz başarısızlık (exit 0 + boş çıktı) en kötü senaryodur — agent başarılı sandığı bir sonuçla yoluna devam eder.

SKILL.md tarafında karşılık fallback talimatıdır: "Script non-zero ile çıkarsa stderr'i oku, hatayı kullanıcıya ilet ve dosyanın geçerli bir PDF olduğunu doğrulamasını iste." Agent bu tek cümle sayesinde scripts kodunu okumadan da hata patikasını yürütebilir. İyi bir skill mutlaka mutlu yol dışında bir de "fail durumunda ne yapılır" satırı içerir.

## Test ve bağımlılık yönetimi

Bir script'i bundle'a koymadan önce kendi makinende manuel çalıştır. Mutlu yol dışında en az üç edge case dene: boş input, bozuk format, beklenmeyen büyük dosya. Çıktının agent için okunabilir olduğunu, hata yolunun düzgün exit code döndürdüğünü gör. Mümkünse küçük bir `tests/` klasörü ekle, basit fixture dosyalarıyla `pytest` veya `bats` çalıştır — skill'i her güncellediğinde aynı testleri tekrar koşmak refactor sırasında geri adım atmanı kolaylaştırır.

Bağımlılıkları SKILL.md'de tek satırla deklare et: "Requires Python 3.10+ ve `pdfplumber`." Eğer runtime sandboxlu ise paketin orada var olduğunu doğrula. Eğer kullanıcı ortamına çıkıyorsa, `requirements.txt`'i bundle'a koy ve agent'a "ilk çalıştırmadan önce `pip install -r requirements.txt` koş" demesini söyle.

## Sırada: multi-file skill mimari tasarımı

Şimdiye kadar Level 3'ün iki tarafını gördün: pasif reference / template / dataset dosyaları ve aktif executable script'ler. Bir skill genelde her ikisinden birer parça taşır — bir `REFERENCE.md`, bir `schema.json`, bir `scripts/extract.py`. Bu parçaları doğru klasör yapısında düzenlemek, hangi dosyanın hangi durumda okunacağını gövdeden işaret etmek ve büyüdükçe bundle'ı temiz tutmak başlı başına bir tasarım meselesi. Sonraki ders `multi-file-skill-mimari-tasarimi` tam bunu açıyor: çok dosyalı bir skill'i sıfırdan nasıl planlarsın, klasör konvansiyonları nelerdir, kompleks bir alanı bundle içine nasıl çoğul katmanda paketlersin.
