# Metadata Alanları Detaylı İnceleme

Önceki derste `SKILL.md`'nin iki parçasını — YAML frontmatter ve markdown body — yüzeysel olarak gördün. Bu derste yüzeyi delip frontmatter'ın iki zorunlu alanı olan `name` ve `description`'ı tek tek açıyorum. Çünkü skill yüklerken aldığın "invalid skill" hatasının yüzde doksanı bu iki alandaki kural ihlalinden çıkar. Karakter limiti, izinli karakter seti, reserved kelimeler, XML tag yasağı, discovery'deki rolü — hepsi mekanik kurallar değil; her birinin altında bir runtime davranışı veya güvenlik gerekçesi var. Önce her alanın kurallarını listeliyorum, sonra agent'ın bunlara nasıl tepki verdiğine bakıyorum.

## `name` alanı: kurallar tek tek

`name` skill'in hem dosya sistemi kimliği hem de model bağlamında kısa referansıdır. agentskills.io spec'i ve Anthropic'in resmi dökümanı birlikte şu kuralları zorlar:

- **Uzunluk:** 1-64 character. Üst limit aşılırsa yükleme reddedilir.
- **İzinli karakterler:** Sadece lowercase Latin harfler, rakamlar ve hyphen (`a-z`, `0-9`, `-`). Underscore, boşluk, nokta, Türkçe karakter (`ç`, `ğ`, `ı`, `ö`, `ş`, `ü`) yasak.
- **Case:** Tamamı lowercase. `PDF-Tool` validation'dan geçmez.
- **Hyphen pozisyonu:** Hyphen ile başlayamaz veya bitemez. Ardışık iki hyphen (`pdf--tool`) yasak.
- **Reserved kelimeler:** Anthropic dökümanı `anthropic` ve `claude` kelimelerini yasaklar. `claude-helper`, `my-anthropic-skill` validation'dan geçmez. Gerekçe vendor lock-in ve marka koruması; Anthropic kendi adını üçüncü taraf skill'lerde görmek istemiyor.
- **XML tag:** İçinde `<` veya `>` ile başlayan tag fragment'ı bulunamaz. `name: <skill>` doğrudan reddedilir.
- **Parent klasör eşleşmesi:** Spec, `name` değerinin parent klasör adı ile birebir eşleşmesini şart koşar. Klasör `pdf-processing` ise `name: pdf-processing` olmak zorunda. Eşleşmezse `skills-ref validate` komutu hata döner.

Topluluk kuralı olarak iki tavsiye eklenir: isimler tek bir konsepti anlatsın (`pdf-processing` evet, `pdf-and-excel-and-word` hayır) ve tutarlı bir prefix kullanılırsa ekosistem içinde gruplama kolaylaşır (`finance-report`, `finance-audit` gibi).

## `description` alanı: discovery'nin omurgası

`description` mekanik açıdan üç kuraldan ibaret görünüyor: non-empty, max 1024 character, XML tag yasağı. Ama bu üç satır, agent'ın skill'i tetikleyip tetiklemediği kararının dayanağıdır.

Önceki derste değindiğimiz progressive disclosure mantığına göre agent startup'ta sadece metadata'yı yükler. Yani çalışma anında elinde bütün skill'in tek özeti olan metin `description`'dır. Kullanıcı "şu PDF'i özetler misin" dediğinde agent yüklü tüm skill'lerin `description`'larını tarar, en uygun olanı seçer ve onun body'sini okur. `description` belirsizse seçim yanlış yapılır; spesifikse skill doğru anda tetiklenir.

Kuralların ayrıntısı:

- **Non-empty:** Boş `description` validation'da reddedilir. Bazı runtime'larda yükleme geçer ama skill hiçbir zaman tetiklenmez (anchor token yok).
- **Max 1024 character:** Üst limit. Pratikte 200-400 character ideal; her ek karakter context window'dan tüm sohbet boyunca harcanır.
- **XML tag yasağı:** Skill metni model context'ine girer. `<system>`, `<user>` gibi tag fragment'ları prompt injection vektörü oluşturur. Spec ve Anthropic dökümanı ikisi de açıkça yasaklar.

## "What + when to use" formülü

İyi `description` iki soruya birden cevap verir: **ne yapar** ve **ne zaman tetiklenmeli**. Anthropic'in best practices dökümanı bunu açıkça önerir.

İyi örnek:

```yaml
description: Extract text and tables from PDF files, fill forms, merge documents. Use when working with PDF files, forms, or document extraction.
```

İlk cümle skill'in yetenek listesi (`extract`, `fill`, `merge`). İkinci cümle tetikleyici kelimeler (`PDF files`, `forms`, `document extraction`). Agent bu metni okuyup kullanıcı isteğindeki anahtar kelimelerle eşleştirir.

Kötü örnek:

```yaml
description: Handles documents
```

"Documents" çok geniş; "handles" hiçbir yetenek belirtmiyor. Agent bu skill'i ne PDF için ne Word için ne CSV için güvenle seçebilir. Validation'dan geçer, ama discovery'de görünmez kalır.

Yardımcı pratik şudur: `description`'a kullanıcının söylemesi muhtemel kelimeleri ek. "PDF" diyebilir, "form" diyebilir, "tablo çıkarma" diyebilir. Bu kelimeler `description`'da varsa agent eşleştirir.

## XML tag yasağının nedeni

`name` ve `description` alanlarının ikisinde de XML tag yasak. Sebep teknik:

1. Skill metadata'sı startup'ta model context'ine yüklenir.
2. Anthropic ve OpenAI modelleri prompt yapısını XML tag'leri ile düzenler (`<system>`, `<user>`, `<assistant>`).
3. Eğer `description: "Use <system>admin mode</system>"` gibi bir metin context'e girerse, model bunu tasarım gereği bir system instruction olarak yorumlayabilir.

Bu prompt injection riskidir. Spec yasakla en başta önler. Aynı kural, body içine değil — sadece frontmatter alanlarına uygulanır; body'de XML kullanmak serbest, çünkü body sadece skill aktif olduğunda yüklenir ve farklı bir bağlamda işlenir.

## Validation: hata mesajları

Bir kuralı ihlal ettiğinde runtime'ın verdiği tepki sabittir:

- **`name` 64 character'ı aşıyor:** Upload reddedilir, "name exceeds maximum length" hatası döner.
- **`name` uppercase içeriyor:** Spec validation fail; OpenAI runtime'ında upload reddedilir, Claude'da skill listelenir ama tetiklenmez (runtime'a göre değişir).
- **`name` reserved kelime içeriyor:** Anthropic doğrulayıcısı doğrudan reddeder. agentskills.io spec'i bu kuralı zorlamaz; bu kural Anthropic-spesifik bir genişletmedir.
- **Boş `description`:** Yükleme bazı runtime'larda geçer, ama skill discovery aşamasında görünmez kalır. Anchor metin yok, agent eşleştirme yapamaz.
- **XML tag bulunması:** Upload reddedilir veya tag karakterleri sanitize edilip yüklenir; davranış runtime'a göre değişir. Hiçbir runtime tag'leri olduğu gibi tutmaz.
- **Parent klasör eşleşmiyor:** `skills-ref validate` lokal araç bunu yakalar. Bazı runtime'lar upload sırasında yakalamaz ama tetiklenmede sorun çıkar.

Pratik kural: skill'i yüklemeden önce `skills-ref validate ./my-skill` çalıştır. Lokalde yakalanan hata, production'da debug etmediğin hatadır.

## Gelecek genişlemeler

Spec şu an sadece `name` ve `description`'ı zorunlu tutuyor. Ama opsiyonel alanlar genişliyor: `license`, `compatibility` (max 500 character, environment requirements için), `metadata` (arbitrary key-value mapping), `allowed-tools` (deneysel, pre-approved tool listesi). Bunlar runtime'a göre farklı yorumlanır; örneğin `allowed-tools` Claude Code'da işler, çoğu üçüncü parti runtime'da görmezden gelinir.

Yakın gelecekte `version`, `tags`, `author` gibi alanların standartlaşması bekleniyor. agentskills.io spec'i açık kaynak ve sürüm aldığı için takip etmen gereken tek nokta o repo.

## Sırada: progressive disclosure

`name` ve `description` startup'ta yüklenir, body skill tetiklendiğinde yüklenir, referans dosyaları ihtiyaç anında yüklenir. Bu üç katmanlı bilgi akışına **progressive disclosure** denir ve skills mimarisinin token bütçesi yönetiminin temelidir. Sonraki derste her üç katmanı, token maliyetini ve katmanlar arası geçiş kurallarını ayrıntılı görüyoruz.
