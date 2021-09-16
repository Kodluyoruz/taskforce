# Konu Metni

## Selection Sort

Bir sayı dizisinin tamamının dolaşılıp en küçük elemanın başa yazıldığı, sonra da geri kalan sayıların en küçüğünün 2. eleman yerine yazıldığı ve bu şekilde dizinin sonuna kadar giden sorting algoritmasıdır.

Örneğin, şöyle bir dizimiz olsun: dizi = [3, 1, 2] 

İlk önce tüm dizide en küçük elemanı bulup ilk eleman olan "3" sayısının yerine yazarız. Burada "1" sayısı ile "3" sayısını yer değiştiririz ve yeni dizi şöyle olur: dizi = [1, 3, 2]

Sonra, 2. eleman ve ondan sonraki sayıların en küçüğü bulunur ve 2. elemanla yer değiştirilir. Burada "2" ile "3" sayısını yer değiştiririz. Yeni dizi şöyle olur: dizi = [1, 2, 3]

Dizinin sonuna ulaştığımız için işlemler biter ve dizi sıralanmış olur.

### Time complexity

Bu sorting algoritmasında, tüm array "n" kez dolaşılır ve ilk dolaşmada "n" eleman, 2. dolaşmada ise "n-1" eleman dolaşılır. Toplam işlem sayısı "n + (n-1) + (n-2) + ... + 1" şeklinde ifade edilir ve bu ifade    "(n x (n+1))/2" yani "(n^2)/2 + n/2" ifadesine eşit olur. Big-O notasyonunda katsayılardan ve küçük ifadelerden kurtuluruz ve son ifade "**O(n^2)**" şeklinde olur. 

### Space complexity

Bildiğimiz gibi algoritmalarda ne kadar ekstra hafızanın kullanıldığı yani "space complexity" de önemlidir. Space complexity'de kullanılan ekstra hafıza yazılır. Selection sort işleminde verilen array üzerinde yani "in-place" işlemler yapıldığı için ekstra hafıza kullanılmaz. Bu yüzden, bu algoritmanın space complexity'si "**O(1)**" yani "**constant space**" olarak bulunur.



# Sorular

1. Selection sort'un best case ve worst case'leri farklı mıdır?

   Cevap: Hayır, aynıdır. Sorting işlemini durdurma mekanizması olmadığı için her seferinde "O(n^2)" olur.

2. Sizce "O(n^2)" bir sorting algoritması için iyi bir time complexity midir?

   Cevap: O(n^2) complexity'si n sayısı arttıkça fazlaca büyür. Bu yüzden yeterince iyi değildir ve daha iyi algoritmalar vardır.

3. Selection sort algoritmasını kod olarak yazınız.

   Cevap:

   ````python
   def selection_sort(array):
       for i in range(0, len(array) - 1):
           # en küçük elemanı bul
           en_kucuk = i
           for j in range(i+1, len(array)):
               if array[j] < array[en_kucuk]:
                   en_kucuk = j
           # elemanları değiştir
           array[en_kucuk], array[i] = array[i], array[en_kucuk]
       return array
   ````

   

# Ücretsiz Kaynak

* [Video](https://www.youtube.com/watch?v=xWBP4lzkoyM) linkine giderek görüntülü bir şekilde algoritmayı görebilirsiniz.
* [Medium paylaşımı](https://medium.com/kodcular/selection-sort-algoritmas%C4%B1-nedir-484c40c9473c) linkine tıklayarak bir selection sort anlatımını bulabilirsiniz.

