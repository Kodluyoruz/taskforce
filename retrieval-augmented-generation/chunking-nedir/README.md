# Chunking Nedir?

Elimizde embedding modeli ve vektör veritabanı var. Ama 500 sayfalık bir PDF'i olduğu gibi vektöre dönüştüremezsin. Bu derste chunking'in neden gerekli olduğunu ve nasıl çalıştığını açıklıyorum.

## Problem: Büyük Dokümanı Ne Yapacaksın?

Bir embedding modeli girdi olarak metin alır ve bunu sabit boyutlu bir vektöre sıkıştırır. 500 sayfalık bir hukuk sözleşmesini tek parça olarak bu modele verirsen iki sorunla karşılaşırsın.

Birincisi anlam kaybı. Embedding modeli tüm belgeyi tek bir vektöre indirgemek zorunda kalır. "Madde 14'teki kefalet şartı nedir?" sorusuna yanıt olacak spesifik bilgi, yüzlerce başka paragrafın ortasında eriyip gider. Vektör belgenin genel atmosferini yakalar ama belirli bir cümleyi değil.

İkincisi token limiti. Embedding modelleri ve LLM'ler belirli bir maksimum giriş boyutunu aşamaz. `text-embedding-3-small` modeli en fazla 8191 token kabul eder. `text-embedding-ada-002` ise 8192 token. 500 sayfalık bir PDF bu sınırı kolayca aşar — dosyanın büyük kısmı modele hiç ulaşamaz.

Çözüm: dokümanı anlamlı parçalara böl. Her parça ayrı ayrı işlenir, ayrı vektöre dönüştürülür ve vektör veritabanına ayrı ayrı yazılır. Sorgulama sırasında da yalnızca ilgili parçalar geri getirilir, tüm doküman değil.

## Chunk Nedir?

Chunk (parça), dokümanın anlam bütünlüğü mümkün olduğunca korunarak bölündüğü en küçük indekslenebilir birimdir.

Bölme birimi doküman türüne ve seçilen stratejiye göre değişir. Bir akademik makalede doğal sınır paragraf olabilir. Bir kod kütüphanesi dokümantasyonunda fonksiyon açıklamaları birer chunk oluşturabilir. Bir sözleşme metninde maddeler doğal bölüm noktaları verir.

Her chunk bağımsız bir varlık olarak yaşar: kendi embedding vektörüne sahiptir, vektör veritabanında kendi satırında durur, ve sorgulama sırasında tek başına retrieve edilebilir. Kullanıcı bir soru sorduğunda sistem tüm dokümanı değil, soruya en yakın chunk veya chunk'ları getirir.

Bu bağımsızlık hem arama kalitesini hem de maliyet verimliliğini doğrudan etkiler. Doğru boyutlandırılmış chunk'lar LLM'e gereksiz bilgi yüklenmesini önler; bu da hem daha iyi yanıtlar hem de daha düşük token maliyeti anlamına gelir.

## Chunking'in Retrieval'a Etkisi

Chunk boyutu rastgele seçilecek bir parametre değil. Çok büyük chunk'larla çalışırsak şu sorunlar çıkar:

**Alakasız bilgi kirliliği.** Büyük bir chunk birden fazla konuyu kapsayabilir. "Kefalet şartı nedir?" sorusuna yapılan aramada, kefalet maddesiyle aynı chunk'ta yer alan ödeme planı veya sözleşme süresi bilgisi de retrieve edilir. LLM bu gürültüyle boğuşmak zorunda kalır.

**"Needle in a haystack" problemi.** Araştırmalar, LLM'lerin uzun bağlamlarda bağlamın ortasındaki bilgiyi daha az dikkatle işlediğini gösteriyor. Büyük chunk içinde kritik cümle ortada kalırsa model onu gözden kaçırabilir.

**Yüksek token maliyeti.** Retrieve edilen her chunk LLM'in prompt'una eklenir. Büyük chunk'lar prompt boyutunu şişirir; bu direkt olarak API maliyeti demek.

Çok küçük chunk'larda da sorunlar var:

**Bağlam kopukluğu.** Bir cümle veya cümle parçası gerçek bir fikri taşıyacak kadar yeterli olmayabilir. "Bu madde uygulanmaz." gibi bir chunk, neyin uygulanmayacağını söylemez.

**Multi-hop sorularda yetersizlik.** "Kefalet şartının istisnaları hangi maddede açıklanmış?" gibi soruları yanıtlamak birden fazla bilginin bir arada değerlendirilmesini gerektirir. Çok küçük chunk'lar bu bütünsel resmi kuramaz.

## Genel Akış

Bir dokümanın RAG sistemine dahil edilmesinin tam akışını anlatıyorum.

Önce doküman sisteme yüklenir. Bu bir PDF olabilir, bir web sayfası olabilir, bir veritabanı kaydı olabilir. Yükleme aşamasında ham metin çıkarılır — PDF'den metin ayıklama, HTML'den tag temizleme gibi ön işlemler bu noktada yapılır.

Ardından metin parçalara bölünür. Hangi strateji kullanılacağına doküman türü ve hedef kullanım senaryosu karar verir. Bu aşamada chunk boyutu ve overlap (örtüşme) gibi parametreler de devreye girer.

Her parça sırayla embedding modeline verilir. Model bu metni alır ve bir sayı dizisine — yani vektöre — dönüştürür. Örneğin `text-embedding-3-small` her metni 1536 boyutlu bir vektöre indirger.

Son olarak her parçanın vektörü, orijinal metniyle birlikte vektör veritabanına yazılır. Sorgulama zamanında kullanıcının sorusu da aynı modelden geçirilir ve en yakın vektörler bulunur.

Chunking'in neden gerekli olduğunu anladık. Hangi stratejiyle böleceğiz?
