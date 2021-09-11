# Konu Metni

## Sorting

Sorting (sıralama), bir eleman dizisini belirli bir sıralama ölçütüne göre sıralamaktır. Bu sıralama ölçütleri; artan, azalan, alfabetik, kelimenin uzunluğuna göre artan gibi farklı ölçütler olabilir. Örneğin; Bir Türkçe sözlükte kelimeler, insanların kelimeleri kolay bulabilmesi için alfabetik olarak sıralanmıştır.

### Sorting neden kullanılır?

* Bir array'i sıralarsak eleman arama işlemi hızlanır. Hatırladığımız gibi array'i ikiye böle böle bir elemanı daha hızlı bir şekilde arayabiliriz.
* Mode ve kartiller gibi bazı istatistik terimleri sıralama yapmadan bulunamaz.
* Sorting yaptığımızda, array'deki en yakın değerleri taşıyan veriler yan yana gelir. Böylece, herhangi bir veriye en yakın olan veriler bulunabilir.



# Sorular

1. Gerçek hayattan bir sorting örneği veriniz.

2. Bubble sort algoritmasını araştırınız ve algoritmayı kod olarak olarak yazınız.

   Cevap:

   ````python
   def bubble_sort(array):
       siralandi = False
       # bir sayı değişim işlemi yapılmazsa array sıralanmış demektir
       # o zaman sıralama işlemi bitirilir
       while not siralandi:
           siralandi = True
       	for i in range(len(array) - 1):
           	if array[i] > array[i+1]:
                   array[i], array[i+1] = array[i+1], array[i]
                   siralandi = False
       
       return array
   ````

3. Bubble sort'un worst case Big-O notasyonunu hesaplayınız.

   Cevap: En kötü senaryoda n elemanlı bir array'i "n" defa dolaşır. Her dolaşmada da "n" tane eleman geçiliyorsa Big-O notasyonu "O(n^2)" olur.

# Ücretsiz Kaynak

* [Sorting algoritmaları](https://www.halildurmus.com/2021/02/22/siralama-algoritmalari-sorting-algorithms/) linkinden farklı sorting algoritmalarına bakabilirsiniz.
* [Bubble sort](https://tsafaelmali.medium.com/bubble-sort-algoritmas%C4%B1-nedir-9811bd921b8d) linkinden basit bir sorting algoritması olan "bubble sort" algoritmasına bakabilirsiniz.

