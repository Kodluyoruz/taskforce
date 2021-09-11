# Konu Metni

## Hash Table

Hash table, verilerin **anahtar-değer** ikilisi olarak tutulduğu ve değerlere anahtarlar üzerinden hızlıca erişilebilen bir veri yapısıdır. 

Örneğin, bir **Türkçe sözlük**, kelime-anlam ikililerinden oluşur. Burada kelimeler anahtarlardır ve anlamlar ise değerlerdir. Bir kelimenin anlamını öğrenmek için o kelimeyi bulur ve karşısında yazılmış olan anlama bakarız. Anahtar-değer ikililerinden oluştuğu için sözlükler, hash table veri yapısına örnektir.

Peki bu anahtarlardan değerlere nasıl ulaşılıyor? 

Array'i hatırlayacak olursak her elemanın bir indeksi yani sırası vardı. Örneğin, "elma, armut, çilek" array'inde elma 1. eleman, armut 2. eleman ve çilek de 3. elemandır. Hash table denilen veri yapısını oluşturabilmek için ise anahtarları indekslere dönüştüren bir fonksiyon gerekmektedir. Bu fonksiyona **hash function** denir. Örneğin bu fonksiyon, anahtar verisinin harflerinin ASCII karakter değerlerini toplayan bir fonksiyon olabilir. Yani sözlükte "baba" kelimesinin anlamını bulurken bu harflerin ASCII değerleri toplanınca çıkan indeks sayısına gidilip kelimenin anlamı bulunabilir. Kısacası, hash table da bir array'dir ama indeksleri sadece sayı değil yazı gibi başka veri tipleri de olabilir.

# Sorular

1. Gerçek hayattan bir hash table veri yapısı örneği veriniz.

3. Hash table yapısında iki farklı anahtar aynı indekse denk gelebilir mi?

   Cevap: Evet, denk gelebilir. Örneğin, hash function harflerin ASCII değerlerini topluyorsa "kara" ve "akar" sözcüklerinin indeks değerleri aynı olacaktır.
   
3. ````python
   cumle = "iki kere iki dört eder"
   ````

   Yukarıdaki "cumle" adlı değişkendeki kelimeleri ve o kelimelerin sayısını bulan bir program yazınız.

   Cevap:

   ````py
   hash_table = {}
   kelime_listesi = cumle.split()
   
   for kelime in kelime_listesi:
   	# kelime hash table'da varsa sayısını bir artır
   	if hash_table[kelime]:
   		hash_table[kelime] += 1
   	# kelime hash table'da yoksa kelimeyi sayısı 1 olacak şekilde ekle
   	else:
   		hash_table[kelime] = 1
   		
   print(hash_table)
   ````

   



# Ücretsiz Kaynak

* [Hackerrank problemi](https://www.hackerrank.com/challenges/ctci-ransom-note/problem) linkine tıklayarak sayfadaki problemi istediğiniz programlama dilini kullanarak çözebilirsiniz.
* Hash table hakkında daha fazla bilgi için [hash table](https://yazilimdnyasi.wordpress.com/2020/02/14/hashing-nedir-veri-yapilari/) linkine göz atabilirsiniz.

