# Açık ve Net Talimatlar Yazma

Bir modele ne istediğini söylediğinde, model bunu tam olarak anlıyor mu? Çoğu zaman hayır — ama bunu hemen anlamıyorsun. Model sana mantıklı görünen bir cevap veriyor, ama istediğin bu değildi. Sorun modelin "anlamamasında" değil, talimatının belirsizliğinde.

Belirsiz talimat + güçlü model = tahmin edilemez sonuç. Net talimat + güçlü model = güvenilir sonuç.

Bu yazıda belirsizliğin nereden geldiğini ve nasıl ortadan kaldırdığını adım adım göreceksin.

## Belirsizlik Neden Sorun?

Model, bilmediği şeyleri uydurmaz — tahmin eder. Talimatında boşluk bıraktığında, model o boşluğu kendi varsayımlarıyla doldurur. Ve model'in varsayımı, senin istediğin şey olmayabilir.

Somut bir örnekle düşün: "Bana bir özet yaz" dediğinde model şu soruları kendi başına cevaplamak zorundadır:

- Kaç kelimelik bir özet? 3 cümle mi, 3 paragraf mı?
- Kime yazılıyor? Teknik bir okuyucuya mı, genel bir okuyucuya mı?
- Hangi detaylar önemli, hangileri çıkarılmalı?
- Hangi tonu kullanmalı?

Model bu soruları çözmek için metnin içeriğine ve genel bağlamına bakarak tahmin yapar. Bazen isabetli tahminde bulunur, bazen değil. Ne zaman isabetli, ne zaman değil — bunu kontrol edemezsin. Ama talimatını netleştirirsen, bu belirsizliği tamamen ortadan kaldırırsın.

## "Yap" Demek, "Yapma" Demek Değil

Talimatlarını olumlu çerçevede yaz. Modele ne yapmaması gerektiğini söylemek yerine, ne yapması gerektiğini söyle.

Bu sezgisel gelmeyebilir. Ama modelin "yapma" talimatlarını işleme biçimi "yap" talimatlarından farklıdır. "Çok uzun tutma" dediğinde model "uzun" sınırını kendisi belirlemek zorundadır. "Maksimum 3 cümleyle ver" dediğinde ise net bir kriter var.

```text
Zayıf: "Cevabı çok uzun tutma."
Güçlü: "Cevabı maksimum 3 cümleyle ver."

Zayıf: "Teknik jargon kullanma."
Güçlü: "Her teknik terimi, konuya yabancı biri anlayacak şekilde parantez içinde açıkla."

Zayıf: "Abartılı övgü yapma."
Güçlü: "Yalnızca somut ve veriye dayalı gözlemleri belirt."
```

Farkı görüyor musun? İlk versiyonlar sınır çiziyor ama sınırın nerede olduğunu söylemiyor. İkinci versiyonlar tam olarak ne yapılacağını açıklıyor.

## Göreceli Kelimelerden Kaçın

Dilde pek çok kelime görelidir: "kısa", "detaylı", "kapsamlı", "basit", "iyi", "az", "çok". Bu kelimeler günlük konuşmada işe yarar çünkü bağlam onları anlamlı kılar. Ama bir prompt'ta bağlam sınırlıdır ve model bu kelimeleri senden farklı yorumlayabilir.

Göreceli kelimeler yerine somut ve sayısal ifadeler kullan:

- "Kısa" → "3 cümleden fazla olmayan"
- "Detaylı" → "Her adım için ayrı madde, teknik gerekçe dahil"
- "Kapsamlı" → "En az 5 farklı açıyı ele alan"
- "Basit dil" → "Lise düzeyinde okuyucunun anlayabileceği, teknik terim içermeyen"
- "İyi bir özet" → "Ana iddiayı, üç destekleyici argümanı ve sonucu içeren"

Bu dönüşümü yaparken kendine şunu sor: Bu kelimeyi, bir başkasına açıklasaydım nasıl tanımlardım? O tanım genellikle daha net bir talimat haline gelir.

## Scope Netliği

Net bir talimat dört şeyi kapsar: hedef kitle, çıktı uzunluğu, format ve ton. Bunlardan birini atladığında, model o konuda kendi kararını verir.

**Hedef kitle**: Kim okuyacak? Uzman mı, acemi mi? Teknik geçmişi var mı?

**Uzunluk**: Kaç kelime, kaç cümle, kaç madde? "Kısa" yetmez — sayı ver.

**Format**: Paragraf mı, madde listesi mi, tablo mu, JSON mu? Belirtmezsen model kendi kararını verir.

**Ton**: Resmi mi, samimi mi? Nesnel mi, ikna edici mi? Akademik mi, konuşma dili mi?

Bu dört boyutu prompt'una eklediğinde, model için sabit dört kriter oluşturmuş olursun. Modelin tahmin etmesi gereken alan dramatik biçimde daralır.

## Kötü/İyi Karşılaştırmalar

Teorik açıklamayı bir kenara bırak ve gerçek örneklere bakalım.

**1. E-posta Yazma**

```text
Kötü: "Bana bir e-posta yaz."

İyi:  "Bir iş arkadaşına proje gecikme bildirimi e-postası yaz. Ton profesyonel ama samimi olsun. Maksimum 150 kelime. Gecikmeni kısaca açıkla ve yeni teslim tarihini belirt."
```

İlk prompt'ta model format, ton, uzunluk ve içerik konusunda tamamen serbest. İkinci prompt'ta bunların hepsi tanımlanmış. Model sadece metni yazmak zorunda.

**2. Kod Düzeltme**

```text
Kötü: "Kodu düzelt."

İyi:  "Aşağıdaki Python fonksiyonundaki bug'ı bul ve düzelt. Değişikliği yaptıktan sonra hangi satırı neden değiştirdiğini tek cümleyle açıkla."
```

İlk prompt'ta model hangi sorunu düzelteceğini, açıklama yapıp yapmayacağını, nasıl bir açıklama yazacağını kendisi belirlemek zorunda. İkinci prompt'ta hem görev hem de beklenen format net.

**3. Kavram Anlatımı**

```text
Kötü: "Anlat."

İyi:  "Blockchain'i, teknik bilgisi olmayan bir lise öğrencisine 3 paragrafta açıkla. Teknik jargon kullanma, günlük hayattan analoglar kullan."
```

"Anlat" komutu hem hedef kitleyi hem uzunluğu hem tonu hem de yöntemi belirsiz bırakıyor. İkinci versiyonda bunların hepsi yerli yerinde.

## Tek Talep Kuralı

Bir prompt'a birden fazla görev sıkıştırma. "Şunu anlat, şunun bir özetini çıkar, bunu İngilizce'ye çevir ve ayrıca alternatifler öner" — bu dört farklı görev. Model dördünü de yapar ama dördünü de kısmen.

Tek talep kuralı basit: **Bir prompt = Bir görev.**

Karmaşık bir iş akışın varsa, onu ardışık prompt'lara böl. Birinciden aldığın sonucu ikinci prompt'a taşı. Bu yaklaşım hem çıktı kalitesini artırır hem de her adımda ne aldığını kontrol etmeni sağlar.

```text
Zayıf:
"Bu makaleyi özetle, ana argümanları listele, zayıf noktaları belirt ve İngilizce'ye çevir."

Güçlü (dört ayrı prompt):
1. "Bu makaleyi 3 cümlede özetle."
2. "Makalenin ana argümanlarını madde listesi olarak çıkar."
3. "Bu argümanların zayıf noktalarını belirt."
4. "Şu özeti İngilizce'ye çevir: [1. prompt'tan gelen özet]"
```

Ardışık prompt'lar daha fazla çaba gibi görünebilir. Ama her adımda sonucu kontrol edip yönlendirebiliyorsun — bu, tek seferlik belirsiz bir prompt'tan çok daha verimli bir süreçtir.

Net talimat yazmak bir alışkanlık meselesi. Prompt'unu yazmadan önce bir saniye dur ve şunu sor: "Bu talimatı okuyan biri, tam olarak ne yapması gerektiğini biliyor mu?" Eğer cevap "evet" değilse, netleştirme yapmaya devam et.
