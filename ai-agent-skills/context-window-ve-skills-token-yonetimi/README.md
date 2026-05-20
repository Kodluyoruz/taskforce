# Context Window ve Skills'te Token Yönetimi

Bir önceki derste progressive disclosure'ın üç katmanını gördük: metadata her zaman yüklenir, SKILL.md body'si tetiklenince gelir, Level 3 dosyaları sadece okunduğunda context'e girer. Bu kalıbın asıl ödülü mimari değil, **para**. Her gönderdiğin istek belli sayıda input token harcar; modelin döndürdüğü cevap output token tüketir. Skills'in tasarımı tam olarak bu iki kalemi minimum tutmak için kurulmuş. Bu derste context window kavramını sayılarla açıyorum, sonra bir Skills sisteminin token bütçesinin nereden geldiğini, hangi hataların bütçeyi nasıl şişirdiğini ve kullanımı nasıl ölçeceğini gösteriyorum.

## Context window büyüklükleri

Context window, modelin tek bir istekte görebileceği (input + output) toplam token kapasitesidir. system prompt, sohbet geçmişi, yüklü skill metadata'sı, tetiklenen SKILL.md içerikleri, kullanıcı mesajı ve modelin ürettiği cevap — hepsi aynı pencereye sığar. Şubat 2026 itibarıyla yaygın rakamlar:

| Model | Context Window | Max Output |
| --- | --- | --- |
| Claude Opus 4.7 | 1.000.000 | 128.000 |
| Claude Sonnet 4.6 | 200.000 (paid plan'da 1M) | 64.000 |
| GPT-5.5 (API) | 1.000.000 | 128.000 |
| GPT-5.5 (Codex) | 400.000 | 128.000 |

Daha geniş window daha rahat çalışmak demek, ama her token ücretli. 1M kapasiteye sahip olman 1M'i boş yere doldurabileceğin anlamına gelmez; agentic iş akışlarında SWE-bench ölçeğinde görev başı 1-3.5M token (denemeler dahil) tüketim sıradan bir rakam. O yüzden Skills'in tasarımı baştan beri "olabildiğince az şey yükle, gerekince oku" prensibi üzerine kuruludur.

## Skills'in maliyet kalemleri

Maliyeti üç katmana göre düşünmek lazım:

1. **Level 1 — Metadata (her istekte sabit).** Yüklü her skill için YAML frontmatter'daki `name` ve `description` system prompt'a otomatik eklenir. Anthropic'in resmi rehberi skill başına ortalama **~100 token** veriyor. Bu, ne yaparsan yap her isteğin dibine konan bir sabit overhead'tir.

2. **Level 2 — SKILL.md body (tetiklenince).** Description bir isteğe uyduğunda model SKILL.md'yi bash ile okur ve içeriği context'e alır. Best practice tavsiyesi: **5.000 token altı**. Tipik aralık 2-5k.

3. **Level 3 — Bundled dosyalar ve script'ler (sadece okunduğunda).** REFERENCE.md, schema'lar, örnekler — Claude ihtiyaç duyduğunda bash ile açar, sadece o dosyanın token'ı gelir. Executable script'ler ise daha güzeldir: kodun kendisi context'e girmez, sadece çıktısı sayılır. 200 satırlık bir Python script `print("OK")` yazdığında modele yalnızca `OK` döner.

## Sayısal örnekler

Üç katmanı çarpınca pratik tablo şöyle çıkıyor:

| Senaryo | Sabit metadata | Tetiklenen body | Toplam |
| --- | --- | --- | --- |
| 10 skill yüklü, hiçbiri tetiklenmedi | 10 × 100 = 1.000 | 0 | **1.000** |
| 10 skill yüklü, 1 tetiklendi (4k body) | 1.000 | 4.000 | **5.000** |
| 100 skill yüklü, hiçbiri tetiklenmedi | 100 × 100 = 10.000 | 0 | **10.000** |
| 100 skill yüklü, 3 tetiklendi (4k body) | 10.000 | 12.000 | **22.000** |
| 1.000 skill yüklü | 100.000 | — | **100.000 (sadece metadata)** |

Son satır kritik: 1.000 skill yüklediğin gün, daha kullanıcı bir mesaj atmadan 100k token sistemde durur. 200k window'lu bir modelde bunun %50'sini sabit overhead'e ayırmak ciddi rakam. Bu yüzden description'ı keskin yazmak (ki sadece gerçekten gerekli skill'ler tetiklensin) ve gerekiyorsa skill'leri başka workspace'lere ayırmak iş yükü değil bütçe meselesidir.

## Token tasarrufu için best practices

- **SKILL.md body'sini 5k token altında tut.** Anthropic'in resmi best practice'i. Daha uzun olacaksa parçala: ana akışı SKILL.md'de bırak, detay için `REFERENCE.md`'ye veya `FORMS.md`'ye yönlendir.
- **Description'ı 1024 char limit içinde tut ama dar yaz.** "PDF işler" yerine "PDF metni çıkar, formları doldur, dosyaları birleştir; kullanıcı PDF ya da form bahsettiğinde devreye al." Geniş description gereksiz tetiklenme demek, gereksiz tetiklenme her seferinde 4k body demek.
- **Büyük örnekler, schema'lar, dataset'ler Level 3'e gitsin.** "On-demand file access" mimarisi tam bunun için var: 50 sayfa API dökümantasyonu bundled durabilir ama sadece o anki göreve gereken sayfa context'e girer.
- **Script'leri executable file olarak ver.** SKILL.md'ye 80 satır Python yapıştırmak yerine `scripts/validate.py` koy. Kod context'e girmez; sadece script'in stdout'u sayılır.
- **Tekrar eden talimatları REFERENCE.md'ye yığ.** Aynı uyarıyı her tetiklemede 200 token harcayarak yüklemek yerine ihtiyaç anında okunan ayrı dosyaya bırak.
- **Prompt caching'i aç.** Anthropic'te cache read tokens taban fiyatının 0.1 katına geliyor — sabit kalan sistem prompt + metadata bloğu cache'e konunca her sonraki istek %90'a yakın daha ucuza dönüyor.

## Yaygın hatalar

- **SKILL.md'ye 20 sayfa belge yapıştırmak.** Her tetiklemede 20 sayfa context'e girer. Birkaç gün sonra fatura konuşur.
- **Description'ı her şeye uyacak şekilde geniş yazmak.** "Genel yardım için kullan" gibi bir cümle yüzünden skill alakasız her istekte tetiklenir, body her seferinde context'e iner.
- **Script kodunu inline yazmak.** 200 satır validation kodu SKILL.md gövdesinde durduğunda bash'le çalıştırılamaz, modele her seferinde 200 satır olarak gelir. Aynı kodu `scripts/validate.py` koyduğunda model bash ile çağırır, sadece çıktısı sayılır.
- **Kullanılmayan eski skill'leri bırakmak.** 30 skill'in 6'sı aktif, 24'ü ölü olsa bile o 24'ün metadata'sı her isteğin başında durmaya devam eder. Skills'in yaşam döngüsünde temizlik yapmadan büyüyen sistemler sessiz sessiz pahalılaşır.

## Token kullanımını izleme

Optimizasyona başlamadan önce ölçmek lazım. İki büyük sağlayıcı da kullanımı response'un `usage` field'ında döndürür.

```python
# Anthropic SDK
response = client.messages.create(model="claude-sonnet-4-6", ...)
print(response.usage)
# Usage(
#   input_tokens=4521,
#   output_tokens=312,
#   cache_creation_input_tokens=0,
#   cache_read_input_tokens=1800
# )
```

`cache_read_input_tokens` sürekli sıfır geliyorsa prompt caching çalışmıyor demektir; orası fırsat. OpenAI tarafında benzer yapıda `usage.prompt_tokens`, `usage.completion_tokens` ve `usage.prompt_tokens_details.cached_tokens` döner. Bir skill bütçesi takip etmek istiyorsan basit bir yaklaşım:

```python
# Tipik 100 skill yüklü bir sistemin sabit overhead'i
SKILL_SAYISI = 100
ORTALAMA_METADATA_TOKEN = 100
sabit_overhead = SKILL_SAYISI * ORTALAMA_METADATA_TOKEN
print(f"Her istekte sabit: {sabit_overhead} token")

# Bir istek için fiili kullanım
istek_token = response.usage.input_tokens + response.usage.output_tokens
print(f"Bu isteğin payı: {istek_token} token")
```

Tek bir grafik bile çıkarsan — günlük input/output token + cache hit oranı — hangi skill'in ucuz, hangisinin pahalı olduğunu birkaç gün içinde görürsün.

## Sırada: klasör yapısı

Token bütçesini koruyan ana hareket "büyük içeriği Level 3'e at" olduğuna göre, bir sonraki ders Level 3 dosyalarının nasıl organize edileceğini açıyor: SKILL.md, REFERENCE.md, scripts/, assets/ klasörlerinin sorumlulukları, hangi dosyanın nereye konulacağı ve klasör hiyerarşisinin progressive disclosure mantığıyla nasıl örtüştüğü.

## Quiz

**1) 100 skill yüklü bir sistemde, hiçbir skill tetiklenmemiş bile olsa her isteğin başında yaklaşık ne kadar sabit token overhead'i oluşur?**

- A) 1.000 token
- B) 10.000 token (Doğru)
- C) 100.000 token
- D) 0 token, çünkü tetiklenmemiş skill'ler context'e girmez

**2) Anthropic'in best practice rehberine göre bir SKILL.md body'sinin token bütçesi yaklaşık ne olmalıdır?**

- A) 100 token altı
- B) 5.000 token altı (Doğru)
- C) 50.000 token altı
- D) Sınırsız, çünkü body sadece tetiklenince yüklenir

**3) 200 satırlık bir Python script'ini SKILL.md gövdesine inline yapıştırmak yerine `scripts/validate.py` olarak ayırmanın token açısından temel avantajı nedir?**

- A) Script daha hızlı çalışır
- B) Inline kod ile aynı maliyet, sadece okuma daha kolay olur
- C) Executable dosyada kodun kendisi context'e girmez; yalnızca script'in stdout çıktısı token harcar (Doğru)
- D) Anthropic executable script'leri ücretsiz çalıştırır

**4) Bir Claude API çağrısının `usage` field'ında `cache_read_input_tokens` değerinin sürekli 0 gelmesi büyük olasılıkla neyi gösterir?**

- A) Modelin context window'u dolmuş
- B) Prompt caching gerektiği gibi devreye girmiyor; cache'lenebilecek sabit prefix kullanılmamış (Doğru)
- C) Skill tetiklenmemiş
- D) Output token üretilmemiş
