# Konu Metni

## Binary Search

Sıralı bir array'de eleman ararken her karşılaştırmamızda baktığımız array'in yarısını eleyebiliriz. Her defasında elimizdeki array'in ortasına bakarsak aradığımız eleman ortadaki sayıdan küçükse sağ tarafı, büyükse sol tarafı direkt eleyebiliriz. Böylece çok hızlı bir şekilde arama yapabiliriz.

Bir sözlükte kelime aradığımızı düşünelim. Sözlüğün her sayfasına teker teker bakar mıyız? Hayır, elbette bakmayız. Sözlüğün ortasını açıp ona göre hangi tarafa gideceğimize karar verebiliriz. Hatta "patika" kelimesini arıyorsak "p" harfi orta ile son kısım arasında olacağı için orta kısmın daha sağ tarafını açabiliriz. Böylece arama işlemini daha da hızlandırmış oluruz.

### Time complexity

Her defasında array 2'ye bölündüğü için "n" elemanlı bir dizide aramak "log(n)" birim zaman alır. Binary search algoritmasının worst case time complexity'si "**O(log(n))**" olur.



# Sorular

1. Gerçek hayattan bir binary search örneği verin.

2. Binary search algoritmasını kod olarak yazın.

   Cevap:

   ````python
   def binary_search(eleman, liste):
       """binary search
       aranan eleman bulunursa indeksi dönülür
       bulunamazsa -1 döndürür"""
       sol = -1
       sag = len(liste)
       
       while sag - sol > 1:
           orta = (sol + sag) // 2
           if liste[orta] == eleman:
               return orta
           elif liste[orta] < eleman:
               sol = orta
           else:
               sag = orta
       
       return -1
   ````

3. İnterpolation search algoritmasını araştırınız.

# Ücretsiz Kaynak

* [CS50 Kodluyoruz videosu](https://www.youtube.com/watch?v=jjqgP9dpD1k) linkindeki videonun 22.00 dakikasındaki kısmından searching algoritmalarının eğlenceli bir anlatımını izleyebilirsiniz.
* [Youtube videosu](https://www.youtube.com/watch?v=E6IOrZUpvSE) linkinden binary search algoritmasının animasyonunu izleyebilirsiniz.

