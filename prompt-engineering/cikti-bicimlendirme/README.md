# Çıktı Biçimlendirme

## Format Neden Önemli?

Aynı bilgiyi farklı formatlarda sunarsan kullanılabilirliği tamamen değişir. Bir toplantı özetini uzun paragraflar hâlinde yazarsan okuyucu her şeyi okumak zorunda kalır. Aynı özeti madde listesi olarak yazarsan eylem maddeleri saniyeler içinde görünür hale gelir.

Model doğru içeriği üretse bile yanlış formatta sunuyorsa o içeriği ya yeniden işlemek zorunda kalırsın ya da kullanım için uygun değildir. Format, içeriğin ne kadar işe yarayacağını belirler. Bu yüzden prompt yazarken içeriği ne kadar önemsiyorsan formatı da o kadar önemsemelisin.

İyi bir kural: çıktıyı kim, nerede, nasıl kullanacak? Bu sorunun cevabı sana doğru formatı gösterir.

---

## Format Türleri

### Düz Metin

E-postalar, makaleler, hikâyeler, açıklamalar — doğal bir akış içinde okunacak içerikler için en uygun format. Okuyucu baştan sona okumak zorundaysa ve her paragraf bir öncekini kuruyorsa düz metin mantıklı.

Ama aynı içerik taranacaksa, belirli noktalara hızlıca erişilecekse veya karşılaştırma yapılacaksa düz metin işe yaramaz. O zaman yapılandırılmış formata geçilmesi gerekiyor.

### Madde Listesi

Paralel öğeler, adımlar, özellik listesi, özet maddeler — bunlar için madde listesi doğru seçim. Okuyucu öğeleri sıralı görmek istiyorsa veya tek tek işaretlemesi gerekiyorsa liste hayat kurtarır.

```text
"Aşağıdaki toplantı notlarından eylem maddelerini çıkar. Her madde bir satır olsun, sorumlu kişiyle başlasın."
```

Bu talimata modelin verebileceği cevap şuna benzer:
- Ali: Teklif taslağını Çarşamba'ya kadar gönder.
- Zeynep: Müşteri ile saati netleştir.
- Ekip: Revize edilen bütçeyi onayla.

Aynı bilgiyi paragraf hâlinde almak isteseydin "Ali teklif taslağını Çarşamba'ya kadar gönderecek, Zeynep müşteriyle saati netleştirecek ve ekip revize edilen bütçeyi onaylayacak" şeklinde gelirdi — daha uzun, taranması daha zor.

### Tablo

Karşılaştırmalar, özellik matrisleri, yapılandırılmış veriler için tablo güçlü bir format. Birden fazla nesneyi aynı kriterlere göre yan yana görmek istiyorsan tablodan daha iyi seçenek az.

```text
"Python, JavaScript ve Go dillerini şu kriterlere göre karşılaştır: performans, öğrenme eğrisi, kullanım alanı. Markdown tablo formatında yaz."
```

Model bu talimatla şöyle bir şey üretir:

| Kriter | Python | JavaScript | Go |
|---|---|---|---|
| Performans | Orta | Orta | Yüksek |
| Öğrenme eğrisi | Düşük | Orta | Orta |
| Kullanım alanı | Veri bilimi, otomasyon | Web, mobil | Backend, sistem |

Aynı karşılaştırmayı düz metinle yazmak hem daha uzun hem de yan yana bakmayı imkânsız kılar.

### JSON

Çıktıyı kod tarafından okutacaksan JSON doğal seçim. Model JSON üretebilir ama bunu güvenilir hâle getirmek için talimatı dikkatli yazman gerekiyor.

```text
"Aşağıdaki metinden kişi adlarını ve rollerini çıkar. SADECE JSON döndür, başka hiçbir metin ekleme.
Format: {\"kisiler\": [{\"ad\": \"...\", \"rol\": \"...\"}]}"
```

Şema örneği verdiğinde model neyi nasıl dolduracağını bilir. Şema vermezsen alan adlarını tahmin eder — bu bazen tutarlı olur, bazen olmaz.

API üzerinden çalışıyorsan ve JSON güvenilirliği kritikse, bazı modeller "structured outputs" veya "JSON mode" gibi özellikler sunuyor. Bu özellik etkinleştirildiğinde model geçersiz JSON üretemez — parse hatalarını ve arada bir oluşan format sapmalarını önler. Üretim ortamı için değerlendirmeye değer.

### Markdown

Belgeler, raporlar, uzun biçimli yapılandırılmış içerikler için Markdown kullanışlı. H2, H3 başlıkları, liste, tablo, kod bloğu bir arada olduğunda Markdown bunları doğal biçimde taşır.

```text
"Bu teknik belgeyi Markdown formatında yaz. Her bölüm için H2 başlık kullan. Kod örneklerini code fence içine al."
```

---

## Format Zorunlu Kılma

"JSON döndür" demek çoğunlukla yeterli değildir. Model JSON'dan önce "Tabii ki, işte JSON formatında cevap:" gibi bir cümle yazabilir. Bu cümle sonraki aşamada JSON'u parse etmeni engeller.

```text
Yetersiz:
"JSON formatında döndür."
→ Model JSON'dan önce açıklama yazabilir, sonunda yorum ekleyebilir.
```

```text
Daha iyi:
"SADECE aşağıdaki JSON şemasına uygun çıktı ver. Açıklama, özet veya başka hiçbir metin ekleme."
```

Fark şu: ikinci versiyonda model ne yapmaması gerektiğini de açıkça biliyor. Format talebi hem olumlu ("JSON döndür") hem olumsuz ("başka metin ekleme") olarak belirtildiğinde tutarlılık çok daha yüksek oluyor.

Aynı prensip her format için geçerli:

- Liste istiyorsan: "Her madde yeni satırda olsun, madde öncesi tire koy, başlık ve açıklama yazma."
- Kısa cevap istiyorsan: "Maksimum 2 cümle, giriş veya kapanış cümlesi ekleme."
- Tablo istiyorsan: "Yalnızca tablo döndür, tablo öncesinde veya sonrasında metin olmadan."

---

## Şema Göster

JSON veya tablo gibi yapılandırılmış formatlar için şemayı örnekle göstermek çok işe yarar. Model soyut bir tanımı her seferinde aynı şekilde yorumlamayabilir. Somut bir şema gördüğünde sapma payı azalır.

```text
"Her kişi için aşağıdaki alanları içeren bir JSON nesnesi döndür:
{
  \"ad\": \"metin\",
  \"departman\": \"metin\",
  \"gorev\": \"metin veya null\"
}"
```

Null kabul edilip edilmediğini, alanın adının tam olarak ne olması gerektiğini, büyük/küçük harf kuralını — bunların hepsini şemada gösterebilirsin. Talimatla açıklamaya çalışmaktan çok daha az belirsizlik bırakır.

---

## Teknik Olmayan Kullanıcı için Format

Formatlar yalnızca kod ya da teknik içerik için değil. Basit format talimatları herkes için çalışır:

```text
"Cevabını 3 maddeden oluşan bir liste olarak ver. Her madde 1 cümle olsun."
```

```text
"Sonucu şu yapıda yaz: Sorun: [...] Öneri: [...] Beklenen etki: [...]"
```

Bu tür şablonlar modelin serbest bırakıldığında yaratabileceği format belirsizliğini ortadan kaldırır. Üstelik çıktıyı başkasına göndermen gerekiyorsa tutarlı format her seferinde yeniden biçimlendirme zahmetinden kurtarır.

---

## Özet

Format, çıktının ne kadar kullanılabilir olduğunu belirleyen temel bir değişken. Düz metin, madde listesi, tablo, JSON, Markdown — hepsinin uygun olduğu farklı kullanım senaryoları var. Hangi formatı istediğini açıkça belirt, hem ne istediğini hem ne istemediğini söyle ve mümkünse şema veya örnek ekle. Bu üç adım format tutarsızlığının büyük kısmını ortadan kaldırır.
