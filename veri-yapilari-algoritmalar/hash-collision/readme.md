# Konu Metni

## Hash Collision

Hash collision (hash çarpışması), hash function'ın farklı anahtarlar için aynı indeks değerini oluşturması durumudur. 

Örneğin, bir hash table'da "tak" sözcüğü ve anlamı bulunmakta. Bu hash table'a "kat" sözcüğünü eklemek istiyorum ancak aynı indeks değerini veriyor. O indekste bir veri olup olmadığına bakmadan, "kat" sözcüğünün anlamını oraya yazarsak sözlükteki "tak" sözcüğünün anlamını kaybetmiş oluruz.

Peki bu hash collision probleminin çözümü nedir?

**Separate chaining** (ayrı zincirleme) adlı bir yöntem kullanılabilir. Bu yöntemde, hash table'daki her kısım birer linked list olarak kullanılır. Aynı indekslere sahip olan anahtarlar, o indeksteki linked list'te tutulur. Örneğin, hash function "tak" ve "kat" sözcükleri için aynı indeksi veriyor ve şu anda hash table'da "tak" sözcüğü bulunmakta. "kat" sözcüğü hash table'a eklenirken o indeksteki linked list'in en son kısmına eklenir. Böylece bir indekste birden fazla bilgi art arda olacak şekilde tutulabilir.

Hash collision arttıkça hash table'da ekleme, silme, arama işlemleri linked list'lerde dolaşılacağından dolayı daha uzun sürer ve hash table'ın performansı düşer. Bu yüzden bir hash function ne kadar az hash collision üretiyorsa o kadar iyidir.



# Sorular

1. Girilen anahtar değerin harflerinin ASCII değerlerini toplayıp bu toplamın 10'a bölümünden kalanı indeks olarak veren bir fonksiyon yazınız.

   Cevap:

   ````py
   def hash_func(anahtar):
   	toplam = 0
   	for harf in anahtar:
   		# bir karakterin ASCII değeri "ord" fonksiyonu yardımıyla bulunabilir.
   		toplam += ord(harf)
   	return toplam % 10
   ````

2. İlk soruda yazdığınız fonksiyonda, aynı indeks çıktısını veren iki kelime bulup yazınız.

   Örnek: "patika" ve "ak" sözcükleri "4" çıktısını veriyor.

3. Başka yöntemlerle de hash collision sorunu çözülebilir mi? Araştırınız.



# Ücretsiz Kaynak

* [Hashing](https://yazilimdnyasi.wordpress.com/2020/02/14/hashing-nedir-veri-yapilari/) linkinde hash table ve hash collision hakkında bilgi edinebilirsiniz.
