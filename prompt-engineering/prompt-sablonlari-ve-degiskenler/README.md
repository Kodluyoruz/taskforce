# Prompt Şablonları ve Değişkenler

Bir prompt'u bir kez yazıp iyi çalıştığında ne yapıyorsun? Büyük ihtimalle bir sonraki sefere benzer bir şey yazmak için tekrar sıfırdan başlıyorsun. Bazen biraz farklı oluyor, bazen biraz daha iyi, bazen biraz daha kötü — tutarsız. Bu tutarsızlığın kaynağı çoğu zaman prompt'un her seferinde yeniden yazılmasıdır.

Prompt şablonları bu sorunu çözer. Bir kez iyi çalışan bir yapı kurarsın, değişken kısımları işaretlersin ve her kullanımda sadece o kısımları doldurursun. Sonuç: tutarlı, test edilebilir, ölçeklenebilir bir prompt sistemi.

## Şablon Nedir?

Şablon, sabit talimatlar ile değişen içerik arasındaki ayrımı formalize eder.

Bir prompt'un hangi kısımları her kullanımda aynı kalır? Rol tanımı, format gereksinimleri, kalite kriterleri, ton talimatları — bunlar statik.

Hangi kısımlar her kullanımda değişir? İşlenecek metin, konu, hedef kitle, spesifik parametreler — bunlar dinamik.

Şablon, statik kısımları sabit tutar ve dinamik kısımların yerine `{{değişken}}` gibi yer tutucular koyar. Her kullanımda bu yer tutucular gerçek değerlerle doldurulur.

## {{değişken}} Sözdizimi

Yaygın kullanılan yer tutucu formatı çift kıvrık parantezdir: `{{değişken_adı}}`. Bu format, hem insanın gözüne net görünür hem de programatik olarak kolayca ayrıştırılabilir.

Bir şablonun anatomisi şöyle görünür:

```text
Sen deneyimli bir {{uzman_rolü}} olarak davranıyorsun.

Aşağıdaki {{içerik_türü}} için {{görev}} yap.
Format: {{format}}
Uzunluk: {{uzunluk}}

İçerik:
{{içerik}}
```

Burada statik kısım hiç yok gibi görünüyor — ama bu aşırı bir örnek. Gerçek şablonlarda statik kısımlar çok daha fazladır; sadece birkaç yer tutucu bulunur.

## Neden Şablon Kullanmalısın?

Dört temel neden:

**Tutarlılık:** Aynı şablonu kullandığında çıktılar tutarlı bir yapıya ve tona sahip olur. Her seferinde farklı bir prompt yazdığında, modelin davranışı da değişir. Şablon bu değişkenliği kaldırır.

**Test edilebilirlik:** Şablonun kendisini sabit tutup sadece `{{içerik}}` değişkenini değiştirerek sonuçları karşılaştırabilirsin. Hangisi daha iyi çalışıyor? Fark neden kaynaklanıyor? Bu soruları ancak şablon sabitken cevaplayabilirsin.

**Verimlilik:** Aynı türde görevi tekrar tekrar yapıyorsan — müşteri e-postaları, kod review'ları, içerik özetleri — her seferinde prompt'u sıfırdan yazmak zaman kaybıdır. Şablona içeriği yapıştır, doldur, gönder.

**Ölçeklenebilirlik:** Bir şablonu elle 10 kez doldurabilirsin. Ama API üzerinden çalışıyorsan, aynı şablona 100 farklı veriyi otomatik olarak gönderebilirsin — her biri için tutarlı bir format ve kalite garantisiyle.

## Günlük Hayat Örneği

E-posta yazımı, şablonun en kolay anlaşılacağı örnek:

```text
E-posta Şablonu:
---
Konu: {{konu}} hakkında güncelleme

Merhaba {{alıcı_adı}},

{{proje_adı}} projesi hakkında seni bilgilendirmek istedim.

{{ana_mesaj}}

Sorularınız için ulaşabilirsiniz.

İyi çalışmalar,
---
```

Bu şablonu 50 farklı durumda kullanabilirsin. Her seferinde `{{konu}}`, `{{alıcı_adı}}`, `{{proje_adı}}` ve `{{ana_mesaj}}` alanlarını doldurursun. Tonun tutarlı kalması için selamlama ve kapanış formülleri statik — bunları her seferinde yeniden düşünmek zorunda değilsin.

Aynı şablonu model aracılığıyla da kullanabilirsin: "Şu bilgileri kullanarak bu e-posta şablonunu doldur" diyip değişken değerlerini listelersin. Model geri kalan her şeyi halleder.

## Teknik Örnek

Kod review için bir şablon:

```text
Kod Review Şablonu:
---
Aşağıdaki {{dil}} kodunu incele ve şu konulara odaklan: {{odak_noktaları}}.
Her sorun için: (1) nerede olduğunu, (2) neden sorun olduğunu, (3) nasıl düzeltilebileceğini belirt.

Kod:
{{kod_bloğu}}
---
```

Bu şablonu farklı durumlarda nasıl kullanırsın:

```text
Kullanım 1:
- {{dil}} → Python
- {{odak_noktaları}} → güvenlik açıkları ve SQL injection riskleri
- {{kod_bloğu}} → [review edilecek Python kodu]

Kullanım 2:
- {{dil}} → JavaScript
- {{odak_noktaları}} → performans optimizasyonu ve bellek yönetimi
- {{kod_bloğu}} → [review edilecek JS kodu]
```

Kullanım 1'in değerleri yerleştirildiğinde ortaya çıkan tam prompt şöyle görünür:

```text
Aşağıdaki Python kodunu incele ve şu konulara odaklan: güvenlik açıkları ve SQL injection riskleri.
Her sorun için: (1) nerede olduğunu, (2) neden sorun olduğunu, (3) nasıl düzeltilebileceğini belirt.

Kod:
def get_user(username):
    query = "SELECT * FROM users WHERE name = '" + username + "'"
    return db.execute(query)
```

Şablon, talimat kısmını yazmandan kurtardı. Sen yalnızca dil ve odak noktasını değiştirdin; geri kalan her şey otomatik olarak doğru yerde.

Şablonun talimat kısmı aynı kalıyor. Her seferinde yalnızca dil, odak noktası ve kod değişiyor. Bu sayede review formatı tutarlı, gözden kaçırmadığın kısım yok ve iki farklı review'u kolayca karşılaştırabilirsin.

## Şablon Tasarım Rehberi

İyi bir şablon tasarlamak için şu soruyu sor: "Bu görevin hangi kısımları her kullanımda aynı, hangi kısımları değişiyor?"

**Statik tut:**
- Rol ve kimlik tanımı
- Format gereksinimleri (madde, paragraf, tablo)
- Kalite kriterleri ("her madde eylem fiiliyle başlamalı")
- Ton talimatları ("profesyonel ama samimi")
- Çıktı uzunluğu kısıtlamaları

**Değişken yap:**
- İşlenecek içerik (metin, kod, veri)
- Konu veya alan
- Hedef kitle (her kullanımda farklılaşıyorsa)
- Spesifik parametreler (uzunluk, sayı, tarih)

Genel kural: Eğer bir şeyi her seferinde değiştiriyorsan, değişken yap. Eğer her seferinde aynı olmasını istiyorsan, statik bırak.

Son bir nokta: Şablonları bir yerde sakla. Notion'da, bir text dosyasında, bir snippet yöneticisinde — fark etmez. Kolayca ulaşabileceğin, arayabileceğin ve kopyalayabileceğin bir yerde sakla. Zamanla biriken şablon koleksiyonun, en değerli prompt mühendisliği varlığın olacak.
