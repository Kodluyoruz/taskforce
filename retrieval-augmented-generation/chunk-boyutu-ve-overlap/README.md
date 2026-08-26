# Chunk Boyutu ve Overlap

Hangi stratejiyle böleceğimizi bildik. Şimdi iki kritik parametre var: chunk boyutu ve overlap (örtüşme). Bu ikisini doğru ayarlamak retrieval kalitesini doğrudan etkiliyor.

## Token mu Karakter mi?

Chunk boyutunu karakter sayısıyla ölçmek ilk bakışta mantıklı görünür. Ama embedding modelleri ve LLM'ler metni karakter değil, token cinsinden ölçer. Bu fark önemli.

"Merhaba" kelimesi 7 karakter ama genellikle 1-2 token. "GPT-4" ise 5 karakter ama birden fazla token olarak parse edilebilir. Tokenizasyon modele ve dile göre değiştiğinden karakter sayısı güvenilir bir ölçüt değil.

Kaba bir dönüşüm kuralı var: ortalama bir İngilizce metin için 1 token yaklaşık 4 karakter veya 0,75 kelimeye denk gelir. Türkçe gibi eklemeli diller için bu oran biraz farklı olabilir — bazı Türkçe kelimeler tek token olmak yerine alt birimlerine ayrılır.

Embedding modelin maksimum token kapasitesini aşmamak gerekiyor. `text-embedding-3-small` teknik olarak 8191 tokena kadar kabul eder. Ama bu sınırı doldurmak iyi bir fikir değil: tüm kapasiteyi kullanan tek bir chunk aslında birden fazla konuyu barındırıyor demektir. Pratikte 512-1024 token aralığı çoğu kullanım senaryosu için dengeli bir başlangıç noktası sunar.

## Küçük Chunk (128-256 Token)

Küçük chunk'lar hassas retrieval için idealdir. Kullanıcı spesifik bir bilgi sorduğunda — "Madde 14'teki istisnalar neler?" gibi — bu bilgiyi tam olarak barındıran küçük bir chunk kolayca bulunur.

Token maliyeti açısından da avantajlı. Retrieve edilen chunk'lar LLM'in prompt'una eklenir. Küçük chunk'lar bu prompt'u şişirmez, dolayısıyla API maliyeti düşer.

Ama dezavantajları da gerçek. Bir cümle veya kısa paragraf tek başına yeterli bağlamı taşımayabilir. "Bu madde uygulanmaz." chunk'ı hangi maddeyi kastettiğini söylemez — önceki cümle bir önceki chunk'ta kalmıştır.

Multi-hop (çok-adımlı) sorularda da küçük chunk'lar yetersiz kalır. "Sözleşmenin fesih koşulları ile tazminat hesaplama yöntemi arasındaki ilişki nedir?" gibi bir soru birden fazla chunk'tan bilgiyi bir araya getirmeyi gerektirir. Küçük chunk'lar bu birleştirmeyi güçleştirir.

## Büyük Chunk (512-1024 Token)

Büyük chunk'lar zengin bağlam sağlar. Bir konuyu baştan sona ele alan bir paragraf veya bölüm, tek bir chunk olarak saklanabilir. Retrieve edildiğinde LLM geniş bir bağlamla çalışır ve eksik parça arayışına girmez.

Çok-adımlı sorularda da büyük chunk'lar daha iyi performans gösterir çünkü ilgili bilgiler büyük olasılıkla aynı chunk içinde bir arada bulunur.

Ancak bir chunk ne kadar büyükse o kadar fazla konu barındırıyor olabilir. "Kefalet şartı nedir?" sorusuna verilen yanıt için retrieve edilen bir 1024-tokenlik chunk, kefaletin yanı sıra ödeme planını, fesih prosedürünü ve ekler listesini de içerebilir. LLM bu gürültüyü sielemek zorunda kalır.

"Lost in the middle" (ortada kaybolma) de gerçek bir risk. Araştırmalar LLM'lerin uzun bağlamlarda başa ve sona daha fazla dikkat gösterdiğini, ortada kalan bilgileri görece daha az işlediğini ortaya koyuyor. Büyük chunk'larda kritik bilgi ortada kalabilir.

## Overlap Neden Gerekli?

Bir metni chunk'lara böldüğünde iki chunk arasındaki sınır bir cümlenin veya fikrin tam ortasına denk gelebilir. Overlap bu sorunu hafifletir: bir chunk'ın son kısmı bir sonraki chunk'ın başında tekrar eder.

Somut örnek: 500 tokenlik chunk, 50 token overlap ile kullanıyorsun. Birinci chunk 1-500 tokenini kapsıyor. İkinci chunk 451-950 tokenini kapsıyor — yani 451-500 arasındaki 50 token her iki chunk'ta da yer alıyor. Bu 50-tokenlik örtüşme, birinci chunk'ın sonundaki yarım kalan fikrin ikinci chunk'ta da mevcut olmasını sağlıyor.

Tipik overlap oranı chunk boyutunun yüzde 10-15'i kadardır. 500 tokenlik chunk için 50-75 token mantıklı bir overlap. Overlap'i fazla artırmak depolama maliyetini ve retrieve süresini gereksiz yere şişirir; çok az bırakmak sınır kayıplarını önleyemez.

Overlap sadece bölüm sınırlarındaki bilgi kaybını değil, anlam sürekliliğini de destekler. Retrieve edilen ardışık chunk'lar okunduğunda konunun birinden diğerine nasıl aktığı anlaşılabilir.

## Pratik Başlangıç Noktası

Yeni bir RAG projesi başlatıyorsan şu parametrelerle başla: 512 token chunk boyutu, 50 token overlap. Bu değerler çoğu doküman tipi ve sorgu örüntüsü için makul bir denge noktası sunar.

Sonuçları değerlendirmeden parametre değiştirme. Bir sonraki bölümde ele alacağımız RAGAS gibi değerlendirme çerçeveleri, farklı parametrelerle yapılan deneylerin retrieval kalitesini sistematik biçimde ölçmeni sağlar. Sayısal kanıt olmadan parametre değiştirmek kör uçuş yapmak gibidir.

"Mükemmel" parametre yoktur. Kısa teknik belgelerle çalışıyorsan 256 token daha iyi sonuç verebilir. Uzun hukuki sözleşmelerle çalışıyorsan 768 token gerekebilir. Kendi domain'inde deney yapmadan kesin bir yanıt vermek mümkün değil.

Chunk boyutunu ayarladık. Şimdi chunk'lara ek bilgi ekleyerek aramayı nasıl güçlendiririz?
