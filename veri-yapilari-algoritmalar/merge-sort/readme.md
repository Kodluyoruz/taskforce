# Konu Metni

## Merge Sort

Merge sort, hız kazandırmak için "**parçala-fethet**" (divide and conquer) yöntemi kullanan bir sorting algoritmasıdır. İlk önce array 2'ye bölünerek küçük array'lere ayrılır. Sonra da bu array'ler sıralanarak birleştirilir. 



![](https://raw.githubusercontent.com/yigitatesh/Kodluyoruz/main/figures/veri-yapilari-algoritmalar/merge_sort.PNG)

Yukarıda görüldüğü gibi array 2'ye bölünerek 1 elemanlı array'lere ayrılmıştır. Ondan sonra ise sıralanarak birleştirme işlemi yapılmıştır. Örneğin, sol orta kısımda 38 ve 27 sayısı birleştirilmiş, [27, 38] şeklinde bir array elde edilmiştir. Sonra bu 2 elemanlı array'ler de sıralanarak birleştirilir. Buradaki avantaj, sıralanmış küçük array'lerin sıralanarak birleştirilmesidir. Zaten sıralı olduğu bilinen array'lerin karşılaştırılması daha kolaydır.

### Time complexity

İlk önce küçük array'ler birleştirilirken yapılan karşılaştırma sayılarını hesaplayalım. Bu sayı; 1 elemanlı array'ler için 4, 2 elemanlı array'ler için 6 ve 4 elemanlı array'ler için 7'dir. Yukarıdaki array'in eleman sayısına "n" diyelim. Worst case'i hesapladığımızdan dolayı karşılaştırma sayısı olarak "7 = n-1" yani "n" diyebiliriz. Peki kaç array sırasını karşılaştırıyoruz. Her seferinde array'i 2'ye böldüğümüz için bu sayı          "2^x = n" yani "log(n)" şeklinde çıkacaktır. Yukarıdaki örnekte görüldüğü gibi 7 elemanlı bir array'de bu sayı "log(7)" yani yukarı yuvarlandığında "3" olacaktır. "log(n)" array serisi karşılaştırılmakta ve her karşılaştırma "n" birim zaman almaktadır. Sonuç olarak, merge sort algoritmasının worst case time complexity'si "**O(n x log(n))**" şeklinde bulunur.



# Sorular

1. "O(n x log(n))" time complexity'si, "O(n^2)" ile karşılaştırıldığında yeterince iyi midir?

   Cevap: Evet. Özellikle n sayısı büyüdüğünde çok büyük farklar olduğu görülecektir. Log(n) fonksiyonu çok yavaş bir şekilde arttığından ve sayı büyüdükçe artma şiddeti azaldığından dolayı "O(n x log(n))" performansı "O(n)" performansına yakındır.

2. Merge sort algoritmasının space complexity'si nedir? Araştırınız.

   Cevap: O(n).

3. Merge sort algoritmasını kod olarak yazınız.

   Cevap:

   ````python
   def merge_sort(array):
       """merge sort"""
       if len(array) > 1:
           orta = len(array) // 2
           sol = merge_sort(array[:orta])
           sag = merge_sort(array[orta:])
           return merge(sol, sag)
       else:
           return array
   
   def merge(sol, sag):
       """iki array'i sıralayarak birleştirir"""
       sirali_array = []
       
       while len(sol) > 0 and len(sag) > 0:
           if sol[0] <= sag[0]:
               sirali_array.append(sol.pop(0))
           else:
               sirali_array.append(sag.pop(0))
               
       while len(sol) > 0:
           sirali_array.append(sol.pop(0))
       while len(sag) > 0:
           sirali_array.append(sag.pop(0))
           
       return sirali_array
   ````

   

# Ücretsiz Kaynak

* [Video](https://www.youtube.com/watch?v=JSceec-wEyw) linkine tıklayarak merge sort algoritmasını görüntülü bir şekilde görebilirsiniz.

