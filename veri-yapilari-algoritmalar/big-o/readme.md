# Konu Metni

## Big-O Notasyonu

Big-O notasyonu, bir algoritmanın çalışma zamanının standartlaştırılmış bir şekilde gösterilmesidir. Örneğin, bir isim array'i içinde bir ismi bulmaya çalışıyorsak ve ilk elemandan başlayıp son elemana kadar teker teker dolaşıyorsak bu işlemimizin worst case'i array uzunluğu kadar birim zaman alır. Array uzunluğuna da "n" dersek bu işlem aldığı birim zaman "n" olur. Bu sonucu Big-O notasyonu ile göstericek olursak bu işlemin zamanı "**O(n)**" olur. Bu işlem zamanına, girdi sayısı ne kadar artarsa işlem zamanı o oranda arttığı için, "**doğrusal zaman**" denir.

Örneğin, bir array'de indeksi belirli bir elemana ulaşmaya çalışıyorsak bu işlem anında yapılır. Bu işlemin zamanı da "**O(1)**" şeklinde gösterilir ve "**sabit zaman**" denir.

Bir isim array'inde isimler a'dan z'ye sıralı ise isimleri baştan sona aramamıza gerek yoktur. İlk önce array'in ortasına bakarız ve oradaki isim aradığımız isimden önce geliyorsa array'in sağ tarafında aramaya devam ederiz. Her seferinde bu şekilde ikiye bölerek array'in çoğu kısmını aramamış ve arama işlemini çok daha hızlandırmış oluruz. Her seferinde ikiye böldüğümüz için buradaki worst case, "2^x = n" işleminde x'in bulunmasıyla elde edilir. Bu işlemde "x" sayısı ise "log(n)" sayısına eşittir. Böylece bu işlemin zamanını "**O(log(n))**" olarak bulmuş oluruz. Bu işlem zamanına "**logaritmik zaman**" denir.

Bir programda bir döngü ve o döngünün içinde de bir döngü varsa ve her döngü "n" iterasyon yapıyorsa bu programın zamanı "**O(nxn) = O(n^2)**" olur. Bu duruma ise "**karesiyle ilişkili zaman**" denir.

Aşağıda bazı Big-O notasyonu kuralları verilmiştir:

* Big-O notasyonunda katsayılar ihmal edilir.

  Örneğin, "O(2n)" ile "O(n)" aynı zaman anlamına yani "O(n)" anlamına gelmektedir.

* Big-O notasyonunda en yüksek zamanlar seçilir, diğer zamanlar ihmal edilir.

  Örneğin, "O(n^2 + 2n + 1)" zamanı "O(n^2)" zamanına eşittir. "2n" ve "1" değerleri "n^2" değerinin yanında önemsiz kalır. Bu ihmalin sebebi de "n" sayısı büyüdükçe "n^2" sayısı çok daha büyük olacağından, bu sayının yanında "2n" ve "1" sayılarının değerinin kalmamasıdır.



# Sorular

1. Aşağıdaki fonksiyonun Big-O notasyonundaki zamanı nedir?

   ````python
   def faktoriyel(x):
       if x == 0:
           return 1
       return x * faktoriyel(x-1)
   ````

   Cevap: Yukarıdaki faktöriyel fonksiyonunda girdi "n" ise yapılan çarpma işlemi sayısı da "n" olur. Sonuç olarak bu fonksiyonun Big-O notasyonu "O(n)" olur.

2. Big-O notasyonu "O(n^2)" olan bir fonksiyon yazınız.

   Cevap:

   ````python
   def carp(liste):
       """listenin her elemanını birbiriyle çarparak tüm çarpımları toplar"""
       sonuc = 0
       for i in range(len(liste)):
           for j in liste[i:]:
               sonuc += liste[i] * j
       return sonuc
   ````

3. En yavaş çalışacak olan Big-O notasyonu zamanı nedir?

   Cevap: O(n^n).

# Ücretsiz Kaynak

* [Medium paylaşımı 1](https://medium.com/kodcular/nedir-bu-big-o-notation-b8b9f1416d30) ve [Medium paylaşımı 2](https://medium.com/@sgoksel/algoritma-analizi-ve-big-o-notasyonu-3b7aefa8a051) linklerinden Big-O notasyonu hakkında bilgi edinebilirsiniz.

