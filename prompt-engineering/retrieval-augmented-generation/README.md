# Retrieval-Augmented Generation (RAG)

## Neden RAG?

Bir LLM'in bilgisi eğitim verisinde ne varsa onunla sınırlıdır. Model, eğitim kesim tarihinden sonra gerçekleşen olayları bilmiyor. Şirketinin iç dokümanlarını bilmiyor. Geçen hafta imzalanan sözleşmeyi, Q3 satış raporunu ya da yeni çıkan ürün kılavuzunu bilmiyor.

Bu sınırı prompt mühendisliğiyle aşmanın yolu RAG'dır: Retrieval-Augmented Generation. Türkçeye "geri çağırma destekli üretim" diye çevrilse de bu ifade çok da yerleşik değil, pratikte herkes RAG diyor.

Temel fikir şu: modele soruyu sormadan önce, soruyla alakalı bilgileri bir kaynaktan çekip prompt'a ekle. Model eğitim verisine güvenmek yerine, sana verdiğin bu bilgilere dayanarak yanıt üretsin. Hem bilgi güncel olur hem de model nereden bildiğini söyleyebilir.

RAG olmadan şu tablo çıkar: model ya eski bilgilerle tahmin yapar, ya da "Bu konuda bilgim yok" der. RAG ile tablo değişir: model sana verdiğin belgeler üzerinden çalışır, taze ve doğrulanabilir yanıtlar üretir.

---

## Kütüphane Analojisi

Sınav düşün. Kapalı kitap sınav: sadece kafanda ne varsa ona dayanıyorsun. Açık kitap sınav: yanında referans kaynakları var ve gerektiğinde bakabiliyorsun.

LLM'ler normalde kapalı kitap sınavda oturuyor. Eğitim sırasında gördükleri her şey hafızalarında var, ama bunun dışına çıkamıyorlar. RAG ise modele açık kitap imkânı tanıyor.

Ama burada ince bir nokta var: açık kitap sınavda başarı "doğru sayfayı bulup açabilmek"ten geçiyor. Kitabı önüne açsan da yanlış bölüme baksan sınav yine gider. İşte RAG'ın "retrieval" kısmı tam olarak bunu hallediyor — doğru belgeleri bulup prompt'a koymak. Sonrasını model hallediyor.

Analoji biraz daha genişletilebilir: kütüphane milyonlarca sayfadan oluşuyor, ama sınav sırasında hepsini taşıyamazsın. Sadece soruyla ilgili bölümleri seçip getiriyorsun. Bu seçim ne kadar isabetli olursa model o kadar iyi yanıt üretiyor.

---

## RAG'ın Çalışma Mantığı

Konsept olarak RAG dört adımdan oluşuyor. Kod ya da teknik altyapıya girmeden bu adımları anlamak, prompt tasarımı için yeterli.

**1. Kullanıcı soruyor**

Her şey bir kullanıcı sorusuyla başlıyor: "Q3 2025'te hangi segment en fazla büyüdü?" ya da "Ürün garanti koşulları nelerdir?"

**2. Sistem alakalı belgeleri buluyor**

Soru bir arama sistemine gidiyor. Bu sistem şirketin belge havuzuna bakıyor ve soruyla en alakalı parçaları çekiyor. Bu parçalar "chunk" olarak adlandırılıyor — belgelerin bölünmüş parçaları. Örneğin 50 sayfalık bir rapor yerine sadece ilgili 3 paragraf geliyor.

Retrieval aşaması ne kadar iyi çalışırsa model o kadar iyi materyalle çalışıyor. Alakasız ya da eksik belgeler gelirse model de eksik yanıt üretiyor. Çünkü model sana ne verirsen onunla çalışıyor — sihir yapmıyor.

**3. Belgeler prompt'a ekleniyor**

Bulunan chunk'lar, kullanıcının sorusuyla birlikte bir prompt oluşturuyor. Model hem soruyu hem de belgeleri bir arada görüyor. Prompt'un nasıl yapılandırıldığı bu aşamada belirleyici — aşağıda bu konu detaylanıyor.

**4. Model belgelere dayanarak yanıt üretiyor**

Model artık serbest tahmin yapmak yerine elindeki belgelerden çalışıyor. "Bu bilgi hangi belgede var?" sorusunu yanıtlayabiliyor, çünkü belgeleri görmüş.

---

## Prompt'a Belge Nasıl Eklenir?

Bu, prompt mühendisliğinin en pratik kısmı. Belgeleri prompt'a nasıl yerleştirdiğin modelin ne kadar iyi yanıt vereceğini doğrudan etkiliyor.

XML tag'leri kullanmak en temiz çözüm. Her belge ayrı bir tag içinde, başlığı ve içeriği net biçimde ayrışmış:

```text
<belge index="1">
Başlık: Q3 2025 Satış Raporu
İçerik: Üçüncü çeyrekte toplam gelir 2.4 milyon TL olarak gerçekleşti. En yüksek büyüme B2B segmentinde %34 ile kaydedildi. Müşteri kaybı (churn) bir önceki çeyreğe göre %12 geriledi.
</belge>

<belge index="2">
Başlık: Q2 2025 Satış Raporu
İçerik: İkinci çeyrekte toplam gelir 2.1 milyon TL oldu. B2C segmenti %18 büyüdü.
</belge>

Yukarıdaki raporlara dayanarak: Q3'te hangi segment en fazla büyüdü ve bir önceki çeyrekle karşılaştırıldığında churn nasıl değişti? Cevabında hangi belgeden aldığını belirt.
```

Bu yapıda birkaç şey dikkat çekiyor:

- Her belgeye bir `index` numarası verilmiş. Bu sayede model "Belge 1'e göre..." diyebiliyor.
- Başlık ve içerik ayrı satırlarda. Model hangi bilginin hangi belgeden geldiğini net görüyor.
- Soru en sonda yer alıyor. Bu önemli — bu sıranın neden önemli olduğu aşağıda açık.

Alternatif olarak numaralandırılmış bir yapı da işe yarıyor:

```text
--- Belge 1: Müşteri Sözleşmesi (15 Mart 2025) ---
Sözleşme süresi 12 aydır. İptal bildirimi 30 gün önceden yazılı olarak yapılmalıdır. Erken fesih durumunda kalan ay ücretlerinin %50'si ödenir.

--- Belge 2: Ürün Kılavuzu (v2.3) ---
Garanti süresi satın alma tarihinden itibaren 2 yıldır. Fiziksel hasar garanti kapsamı dışındadır.

Soru: Müşteri sözleşmeyi 6. ayda feshetmek isterse ne kadar ödeme yapar? Garanti süreci ile herhangi bir çakışma var mı?
```

Her iki yapı da çalışıyor. XML tag'li yapı, özellikle çok sayıda belge varsa biraz daha temiz kalıyor.

---

## Kaynak Atıfı

Model belgelere dayanarak yanıt üretmeli, ama bunu yaparken nereden aldığını da söylemeli. Bunu sağlamak için explicit bir talimat gerekiyor. Model kendi başına atıf vermez — sen isteyene kadar vermez.

```text
"Yanıtını yalnızca yukarıdaki belgeler üzerine dayandır. Her iddia için hangi belgeden aldığını belirt. Eğer belgeler soruyu cevaplamak için yeterli değilse, 'Bu soruya yanıt vermek için yeterli bilgi bulunamadı.' de."
```

Bu talimat iki şey yapıyor: birincisi modeli belgelere kilitleyor, ikincisi "yeterli bilgi yoksa söyle" diyerek hallüsinasyonun önünü kesiyor.

Kaynak atıfı neden bu kadar değerli? Çünkü modelin yanıtını doğrulamana imkân tanıyor. Model "Belge 1'e göre..." dediğinde o belgeye bakıp kontrolü kendin yapabiliyorsun. Atıf yoksa modelin ne söylediğini doğrulamanın yolu kalmıyor — ya güveniyorsun ya da güvenmiyorsun.

Aynı zamanda hata yakalamayı kolaylaştırıyor. Model "Belge 3'te şu yazıyor: ..." dediğinde ve sen Belge 3'e bakıp o cümleyi göremiyorsan, modelin bir şeyi karıştırdığını ya da ürettiğini anlıyorsun.

---

## Granülarite Seçimi

Kaynak atıfının ne kadar ayrıntılı olacağı bir tasarım kararı. Üç seviye var:

**Belge seviyesi:** "Belge 2'ye göre..."

En kaba granülarite. Belge çok uzunsa kullanıcının içinde nereye bakacağını bilmesi güç. Kısa belgeler için yeterli.

**Chunk/bölüm seviyesi:** "Q3 raporunun gelir bölümüne göre..."

Çoğu use-case için pratik tatlı nokta bu. Belge içindeki hangi bölümden konuşulduğunu söylüyor, ama cümle cümle takip etme derdi de yok. Hem yeterince spesifik hem de okunabilir.

**Cümle seviyesi:** "Raporda şu cümle yer almaktadır: '...'"

En ayrıntılı. Hukuki metinler, sözleşmeler ya da ciddi doğrulama gerektiren içerikler için değerli. Ama her yanıt için bu seviyeye gitmek hem gereksiz hem de yanıtı uzatıyor.

Tavsiye: chunk/bölüm seviyesini varsayılan olarak benimse. Özellikle kontrol edilmesi gereken hassas bilgilerde cümle seviyesine geç.

---

## RAG'da Yaygın Hatalar

**Çok fazla belge eklemek**

Context window sonsuz değil. Onlarca sayfalık belge ekleyince model neye odaklanacağını bilemez. İlgili 3 belge, ilgisiz 20 belgeden her zaman daha iyi. Retrieval aşaması ne kadar isabetli olursa prompt o kadar temiz kalıyor.

**Alakasız belgeler eklemek**

Retrieval sisteminin getirdiği her belgeyi körce prompt'a ekleme. Bir belge soruyla ne kadar az ilgiliyse o kadar çok gürültü yaratıyor. Model düzgün bir içerikle ilgisiz içeriği aynı context window'da gördüğünde odağı dağılıyor.

**Kaynak atıfı istememek**

"Belgelerden yanıtla" demek yeterli değil. Modelin nereden aldığını belirtmesini açıkça istemedikçe bu davranışı güvenilir biçimde gerçekleştirmiyor. Atıf talep etmek hem doğrulamayı kolaylaştırıyor hem de modeli daha dikkatli çalışmaya yönlendiriyor.

**Soruyu başa koymak**

Belgeleri sona, soruyu başa koymak yaygın bir hata. Transformer modelleri tüm bağlamı aynı anda işler, ama bağlam penceresinin ortasına düşen içeriğe daha az dikkat eder — buna "lost in the middle" etkisi deniyor. Soruyu başa koyduğunda, belgeler eklenince soru ortada kalır ve bu etkiden olumsuz etkilenir. Doğru yapı: önce belgeler, en sonda soru. Bu sıra sorunun bağlamın en güvenilir erişilen konumunda — sonunda — bulunmasını sağlıyor.

---

## Kullanım Senaryoları

RAG'ın pratik değeri en iyi örneklerle anlaşılıyor:

**Şirket içi bilgi tabanı sorgusu:** "Hangi müşterinin sözleşmesi bu ay bitiyor?" gibi bir soruyu tüm sözleşme belgelerini tarayan bir sistem yanıtlıyor. Model eğitimde bu sözleşmeleri görmemiş — ama sen ona verirsen kullanabiliyor.

**Güncel haber ve rapor özeti:** Piyasa raporu ya da sektör haberi günlük değişiyor. Modelin bilgisi eski kalacak ama sen güncel belgeleri prompt'a eklersen model güncel bilgiyle çalışıyor.

**Müşteri sözleşmesi analizi:** "Bu sözleşmede bizi kısıtlayan maddeler nelerdir?" sorusu için sözleşme metnini prompt'a ekleyip analiz isteyebilirsin. Model hukuki metin okuyup senin soruna odaklanıyor.

**Teknik dokümantasyon Q&A:** Uzun API dökümanları ya da ürün kılavuzları içinde belirli bir soruyu bulmak yorucu. RAG bu süreyi dakikalar yerine saniyelere indiriyor. Kullanıcı sorar, sistem ilgili bölümü getirir, model yanıtlar.
