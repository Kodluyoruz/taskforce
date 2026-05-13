# Yaygın Hatalar ve Kaçınma Yolları

Prompt mühendisliği öğrenirken en hızlı ilerleme yolu hataları tanımaktır — hem başkalarının hatalarını, hem kendi hatalarını. Bu yazıda en sık karşılaşılan yedi antipattern'i, her birinin neden sorun yarattığını ve nasıl düzeltileceğini görüyorsun.

## 1. Belirsiz Talimat

**Ne oluyor:** Prompt çok genel bırakılıyor. Model ne üretmesi gerektiğini, kime hitap etmesi gerektiğini ve hangi formatta sunması gerektiğini tahmin etmek zorunda kalıyor. Sonuç doğru ama işe yaramayan bir cevap — çünkü senin istediğin bu değildi.

```text
Kötü:
"Pazarlama hakkında bir şeyler yaz."

İyi:
"B2B SaaS şirketleri için LinkedIn'de içerik pazarlamasının nasıl yapılacağını anlatan 400 kelimelik bir blog giriş paragrafı yaz. Ton profesyonel ama erişilebilir olsun. Bir istatistik veya araştırma bulgusunu dahil et."
```

Talimat ne kadar spesifik olursa, modelin tahmin etmesi gereken o kadar az şey kalır.

## 2. Aşırı Kısıtlama

**Ne oluyor:** Birbiriyle çelişen veya birlikte yerine getirilmesi imkânsız kısıtlamalar verilmiş. "2 cümlede anlat, ama tüm teknik detayları dahil et" — bu ikisi aynı anda gerçekleşemeyen şeyler. Model bir tanesini seçmek zorunda kalır ve hangisini seçtiğini sen kontrol edemezsin.

```text
Kötü:
"Bu konuyu çok kısa özetle ama hiçbir detayı atama, hem teknik hem de teknik olmayan kullanıcılara hitap et."

İyi:
"Bu konuyu teknik bilgisi olmayan kullanıcılara 3 paragrafta özetle. Teknik terimlerden kaçın, günlük dil kullan."
```

Kısıtlamaların arasında öncelik sırası kur. Hepsini aynı ağırlıkla veremiyorsan, hangisi daha önemli?

## 3. Bağlam Eksikliği

**Ne oluyor:** Model senin kim olduğunu, neden sorduğunu ve ne için kullanacağını bilmiyor. Sonuç: genel, herkese hitap eden, hiç kimsenin durumuna tam uymayan bir cevap.

```text
Kötü:
"Fiyatlandırma stratejisi nasıl belirlenir?"

İyi:
"Ben 2 yıllık bir freelance grafik tasarımcıyım, aylık 3-4 kurumsal müşteri alıyorum. Saatlik fiyatımı nasıl belirlemeliyim? Türkiye pazarı için düşünüyorum, müşterilerimin büyük çoğunluğu KOBİ'ler."
```

İki cümle bağlam, modelin cevabını senin gerçek durumuna göre şekillendirir. Bu iki cümle olmadan model "genel girişim" perspektifinden yazar.

## 4. Tek Seferde Çok Fazla Görev

**Ne oluyor:** Birden fazla bağımsız görev tek bir prompt'a sıkıştırılmış. Model hepsini yapar, ama hepsini yüzeysel yapar. Her görev ayrı bir odak gerektirdiği için, hepsini aynı anda verdiğinde dikkat dağılır.

```text
Kötü:
"Bu metni özetle, İngilizce'ye çevir, SEO başlıkları oluştur ve sosyal medya paylaşımı için de uyarla."

İyi:
"Bu metni 3 cümlede Türkçe özetle." (Sonucu aldıktan sonra sırayla diğer görevleri ver.)
```

Ardışık prompt'lar hem çıktı kalitesini artırır hem de her adımda sonucu kontrol etmeni sağlar.

## 5. Olumsuz Talimat Tuzağı

**Ne oluyor:** Modele ne yapmaması gerektiği söyleniyor ama ne yapması gerektiği söylenmiyor. "Çok uzun yazma", "abartma", "tekrar etme" — bunlar sınır çiziyor ama model o sınırın içinde ne yapacağını hâlâ bilmiyor.

```text
Kötü:
"Cevabı çok uzun yapma, teknik terimler kullanma ve gereksiz detaylara girme."

İyi:
"Cevabını maksimum 3 cümleyle ver. Her teknik terimi bir analogla açıkla. Yalnızca soruyla doğrudan ilgili bilgileri dahil et."
```

Her "yapma" talimatını bir "yap" talimatına dönüştür. Ne istemediğini değil, ne istediğini söyle.

## 6. Format Belirtmemek

**Ne oluyor:** Modele çıktının hangi formatta olması gerektiği söylenmemiş. Model kendi tercihini uygular — genellikle paragraf. Ama sen belki tablo, belki JSON, belki madde listesi istiyordun. İkisi arasındaki farkı sonradan düzeltmek hem zaman hem de ek prompt gerektirir.

```text
Kötü:
"Bu ürünün avantajlarını ve dezavantajlarını listele."

İyi:
"Bu ürünün avantajlarını ve dezavantajlarını karşılaştırmalı bir tablo olarak sun. İki sütun: Avantajlar | Dezavantajlar. Her sütunda en az 4 madde olsun."
```

Format, talimatın ayrılmaz bir parçasıdır. Hangi formatta olmasını istiyorsan, bunu açıkça belirt.

## 7. Sonucu Kontrol Etmemek

**Ne oluyor:** Modelin ilk cevabı kabul edilip kullanılıyor. Ama ilk sonuç her zaman en iyi sonuç değil. Değerlendirme kriteri olmadan neyin iyi neyin kötü olduğunu da bilmiyorsun — dolayısıyla rastgele bir çıktıyla devam ediyorsun.

```text
Kötü:
"Bize yeni bir pazarlama sloganı yaz."
→ Model: "Geleceğe doğru adım atın!"
→ Tepki: "Güzel, kullanalım." ← Kriter yok, kontrol yok.

İyi:
"Bize yeni bir pazarlama sloganı yaz. Slogan: ürünümüzün hız özelliğini vurgulamalı,
5 kelimeyi geçmemeli, enerji verici bir ton taşımalı."
→ Model: "Geleceğe doğru adım atın!"
→ Kontrol: 5 kelime ✓ | hız vurgusu ✗ | enerji tonu belirsiz ✗
→ Tepki: "Hız bileşeni eksik, prompt'u düzelt."
```

Başarı kriteri basit olabilir: "3 madde var mı? Her madde eylem fiiliyle başlıyor mu? Konu dışına çıkmış mı?" Bu soruları sormak, kör bir kabulden çok daha iyi sonuçlar doğurur.

---

Bu yedi hata her deneyim seviyesinde karşına çıkar. Uzman prompt mühendisleri de bazen belirsiz talimat yazar, bazen bağlamı unutur, bazen ilk sonucu kabul eder. Farkı yaratan şey, bu hataları fark ettiğinde ne yaptığındır.

Bir prompt'tan beklediğin sonucu alamadığında, bu listeye bak. Çoğu zaman sorun yedi maddenin birinde yatıyor. Tek bir hatayı düzeltmek, seni hayal kırıklığı yaratan bir sonuçtan işe yarayan birine götürmek için yeterli.
