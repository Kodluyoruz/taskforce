# Ön-tanımlı (Built-in) Skills

Bir önceki derste skill'lerin RAG ve MCP ile beraber kurulan mimari içinde nereye oturduğunu konuştuk. Şimdi pratik tarafa geçiyoruz: ilk skill'ini yazmadan önce bilmen gereken bir şey var — hem Anthropic hem OpenAI, en yaygın dosya formatları için **pre-built** skill'leri zaten sunuyor. PowerPoint, Excel, Word, PDF — bunların hepsi için kullanıma hazır skill'ler var ve doğru platformda doğru parametreyi geçtiğinde anında çalışıyorlar. Bu derste hangi pre-built skill'lerin mevcut olduğunu, hangi platformda nasıl erişildiğini, neyin ücretsiz geldiğini, sınırlarının nerede olduğunu ve "her şeyi sıfırdan yazmam gerekir mi?" sorusunun cevabını netleştireceğiz.

## Anthropic pre-built skill seti

Şubat 2026 itibarıyla Anthropic dört temel ofis formatı için skill yayınlamış durumda. İsimlendirme dosya uzantılarıyla aynı: kısa, hatırlaması kolay.

- **`pptx` (PowerPoint).** Sunum oluşturma, slayt düzenleme, var olan deck içeriğini analiz etme. Tipik tetikleyici: "Bu üç sayfalık raporu 8 slaytlık bir sunuma çevir" veya "Şu deck'in başlıklarını ve bullet'larını çıkar". Skill ID: `pptx`.
- **`xlsx` (Excel).** Spreadsheet üretme, veri analizi, grafik ve pivot çıkarma. Tetikleyici örneği: "Bu CSV'yi aylık satış grafikleriyle birlikte xlsx olarak ver", "Bölgeye göre satış pivot tablosu yap". Skill ID: `xlsx`.
- **`docx` (Word).** Doküman oluşturma, metin düzenleme, biçimlendirme. Tetikleyici: "Bu taslaktan resmi bir Word docx üret, başlık stilleri ve numaralı liste ekle". Skill ID: `docx`.
- **`pdf` (PDF).** Metin ve tablo çıkarma, form doldurma, doküman birleştirme, biçimli PDF raporu üretme. Tetikleyici: "Bu PDF'in ilk beş sayfasını özetle", "Şu formun sayısal alanlarını çıkar". Skill ID: `pdf`.

Bu dördünün ortak özelliği: ofis formatlarının **kütüphane bazlı** doğru kullanımını biliyorlar. `pptx` Python'da `python-pptx` ile slayt üretirken hangi sınıfı çağıracağını, hangi adımda layout'u set edeceğini biliyor; modelin bunu prompt'tan tahmin etmesine gerek kalmıyor. Yani format-spesifik teknik bilgi modelden çıkartılıp skill'e taşınmış.

## Hangi platformda nasıl erişilir?

Aynı skill seti, üç farklı yüzeyde farklı şekilde aktif oluyor.

- **Claude API.** Code execution tool ile birlikte `container` parametresine `skill_ids` listesi geçirilir. Örneğin `container={"skill_ids": ["pdf", "xlsx"]}` derken sadece bu iki skill yüklü gelir. Manuel kurulum yok; isim referansı yeter.
- **Claude.ai (web).** Pro / Max / Team / Enterprise plan'larında pre-built skill'ler **arka planda otomatik aktif**. Kullanıcı "şu Excel'i hazırla" dediğinde Claude `xlsx` skill'ini kendi seçer, kendi yükler. Ayar ekranında "skill aç/kapa" gibi bir adım yok — Anthropic bunu kendi tarafında yönetiyor.
- **Claude Code.** Burada durum biraz farklı. Claude Code filesystem-based çalışır; pre-built skill'ler de bir klasör olarak yaşar. Eğer bir skill'i Claude Code içinde kullanmak istiyorsan `anthropics/skills` GitHub repo'sundan kopyalayıp `~/.claude/skills/` ya da `.claude/skills/` altına yerleştirirsin. Yani API'deki "isim referansı" rahatlığı Claude Code'da geçerli değil.

Bu üç yüzeyin senkron olmadığını hatırlamak önemli: API'ye yüklediğin custom skill Claude.ai'da gözükmez, Claude.ai'da yüklediğin custom skill API'ye taşınmaz. Ama pre-built'ler Anthropic tarafından yönetildiği için API ve Claude.ai üzerinde tutarlı şekilde mevcut.

## OpenAI curated skills

OpenAI tarafında durum 2026 başı itibarıyla daha dar. Anthropic'in dört formatına paralel bir set yok; bunun yerine `openai-spreadsheets` gibi temel curated skill'ler `skill_reference` ile çağrılıyor. Responses API'de shell tool altında `environment.skills` dizisine eklenir:

```python
{
    "type": "shell",
    "environment": {
        "type": "container_auto",
        "skills": [{"type": "skill_reference", "skill_id": "openai-spreadsheets"}]
    }
}
```

OpenAI'ın bu listesi büyüyecek bir set; ama bugün Anthropic'in pptx + xlsx + docx + pdf kombinasyonu kadar geniş değil. Office formatlarıyla iş yapacaksan API tarafında Anthropic daha fazla şey vermiş durumda.

## Open-source: `anthropics/skills` repo

Pre-built skill'lerin kaynak kodu kapalı değil. `github.com/anthropics/skills` reposu hem Anthropic'in resmi skill'lerinin source'unu hem de topluluğun katkı yaptığı örnekleri barındırıyor.

- **`claude-api` skill.** Anthropic API'nin kendi referansını taşıyan bir skill — sekiz dil için SDK örnekleri, best practice'ler, model dokümantasyonu. **Claude Code'a bundled** geliyor; ayrı kurmaya gerek yok. Sen Anthropic SDK ile bir uygulama yazarken otomatik tetikleniyor; modelin "şu modelin context window'u kaç?" gibi soruları her seferinde web'den bulmasına gerek kalmıyor.
- **Pre-built skill source kodu.** `pptx`, `xlsx`, `docx`, `pdf` skill'lerinin nasıl yazıldığını okuyabiliyorsun. Kendi skill'ini yazarken pattern almak için iyi bir başlangıç noktası.
- **Topluluk örnekleri.** Sektörlere göre (devops, veri analizi, içerik üretimi) farklı katkılar PR'larla repoda büyüyor.

## Pre-built vs custom

İkisi farklı şeyler için iyi.

- **Pre-built avantajı:** hızlı başlangıç, sıfır setup, Anthropic'in bakım sorumluluğu. Yarın `python-pptx` versiyonu kırılırsa düzeltmek senin değil onların derdi.
- **Custom avantajı:** kendi domain'inin dili, kendi şirketinin kuralları, kendi araçların. Tam kontrol; ama bakım da senin.

Pratikte iki seçenek çatışmaz; **birleşir**. Tipik bir kurulum: pre-built `xlsx`'i baz olarak bırakırsın, üstüne "şirket raporları" diye bir custom skill eklersin. Custom skill spesifik tablo şablonlarını, başlık tonunu, brand renklerini söyler; xlsx skill'i ise hangi `python-openpyxl` çağrısının doğru olduğunu bilir. Compose ederek kullanırsın — model gerektiğinde her ikisini birden okur.

## Pre-built'in sınırları

Pre-built skill'ler genel amaçlıdır ve bu kasıtlı bir tercih. Onlar:

- Sektör-spesifik kurallar bilmez. Bir SaaS şirketinin "MRR raporu" şablonu pre-built `xlsx`'de yoktur, olamaz da.
- Şirketin marka tonunu, izin verilen başlık stilini, kullanılması yasak ifadeleri bilmez.
- Sadece **format bilgisi** taşır (PowerPoint API'sini biliyor), **iş akışı** bilgisi değil. "Müşteri review sunumunu hazırlarken hangi sırayla hangi slaytları koyarız" sorusunun cevabı sende.

Bu yüzden ciddi bir kurulumda neredeyse her zaman pre-built + custom kombinasyonu görürsün. Pre-built temeli kurar; custom'lar üstüne organizasyona özgü katmanı koyar.

## Pre-built `pdf` skill örneği

API üzerinden tek satırla aktif etmek bu kadar:

```python
import anthropic

client = anthropic.Anthropic(
    default_headers={
        "anthropic-beta": "code-execution-2025-08-25,skills-2025-10-02,files-api-2025-04-14"
    }
)

file = client.files.upload(file=open("rapor.pdf", "rb"), purpose="container")

response = client.messages.create(
    model="claude-opus-4-7",
    max_tokens=4096,
    container={
        "skill_ids": ["pdf"],
        "file_ids": [file.id]
    },
    messages=[{"role": "user", "content": "Bu PDF'in ilk 5 sayfasını özetle."}]
)
print(response.content[0].text)
```

`skill_ids` listesine eklediğin an, model `pdf` skill'inin `SKILL.md` metadata'sını görür; PDF içeren bir istek geldiğinde skill'in kendisini okur; içerideki Python kodunu code execution tool ile çalıştırır. Sen sadece dosyayı yükleyip soruyu sordun.

## Sırada ne var?

Pre-built skill seti çoğu dosya işini hazır şekilde halletse de yazılım dünyasında asıl iş şirketin kendi alanında: bir hukuk firmasının sözleşme şablonu, bir finans ekibinin raporlama kuralları, bir devops takımının runbook'u. Bir sonraki derste bu domain-spesifik skill örneklerine geçiyoruz: farklı sektörlerin tipik skill ihtiyaçları neye benziyor, neyi pre-built'ten kalıp olarak alabiliyorsun, neyi sıfırdan yazman gerekiyor.
