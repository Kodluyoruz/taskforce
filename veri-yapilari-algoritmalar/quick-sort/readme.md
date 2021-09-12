# Konu Metni

## Quick Sort

Quick sort, array'den her seferinde bir pivot eleman seçilip, pivot elemandan küçük olan sayıları sol array'e, pivot elemandan büyük olan sayıları sağ array'e konulduğu ve bu işlemin sağ ve sol array için tekrarlandığı sorting algoritmasıdır.  



![](https://raw.githubusercontent.com/yigitatesh/Kodluyoruz/main/figures/veri-yapilari-algoritmalar/quick_sort.jpg)

Yukarıda görüldüğü gibi bir pivot eleman seçilir ve bu elemana göre array 2'ye bölünür. 



### Time complexity

Quick sort algoritması da "**parçala-fethet**" yöntemini kullanır. Array'in eleman sayısına "n" diyelim. Her array 2'ye bölündüğünde yaklaşık "n" tane karşılaştırma yapılır. Array'lerin her seferinde tam olarak 2'ye bölündüğünü varsayarsak toplam bölünme sayısı "log(n)" olacaktır ve bu da "average case" olacaktır. Sonuç olarak, quick sort algoritmasının **average case** time complexity'si "**O(n x log(n))**" olur. 

Peki worst case'i nedir? Her seferinde array'in tüm elemanlarının sağ tarafa bölündüğünü düşünelim. Her seferinde pivot elemana göre sıralama yapıldığı için pivot ortada ve geri kalan array sağda kalacaktır. Bu durumda toplam "n" tane array bölünmesi yapılacak ve her bölünmede "n" karşılaştırma olacağından **worst case** time complexity'si "**O(n^2)**" olacaktır. Ancak genelde bu durum gözlenmediğinden dolayı bu algoritmanın genel performansı "**O(n x log(n))**" olacaktır. 



# Sorular

1. Quick sort algoritmasında neden worst case yerine average case'i tercih ederiz?

   Cevap: Worst case durumunun görülme olasılığı çok düşük olduğundan ve genelde average case performansı görüldüğünden dolayı quick sort için average case tercih edilir.

2. Neden quick sort genelde merge sort'tan daha hızlıdır?

   Cevap: Average case time complexity'leri aynıdır ancak quick sort algoritmasının katsayısı daha düşüktür. Biz katsayıları Big-O notasyonunda ihmal etsek de pratikte katsayılar da fark yaratabilir.

3. Quick sort algoritmasını kod olarak yazınız.

   Cevap: 

   ````python
   def quick_sort(array):
       """quick sort algoritması"""
       if len(array) < 2:
           return array
       # pivot seçimi
       pivot = array.pop()
       sol = []
       sag = []
       
       # pivot elemana göre sol ve sağ array'leri oluştur
       for i in array:
           if i < pivot:
               sol.append(i)
           else:
               sag.append(i)
       # recursive quick sort işlemi
       return quick_sort(sol) + [pivot] + quick_sort(sag)
   ````

   

# Ücretsiz Kaynak

* [Video](https://www.youtube.com/watch?v=XE4VP_8Y0BU) linkinden quick sort algoritmasının anlatımını izleyebilirsiniz.
* [Video](https://www.youtube.com/watch?v=es2T6KY45cA) linkinden quick sort ve merge sort'un karşılaştırıldığı bir animasyonu izleyebilirsiniz.

