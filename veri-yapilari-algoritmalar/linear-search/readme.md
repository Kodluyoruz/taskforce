# Konu Metni

## Linear Search

Linear search (doğrusal arama), bir dizide istenilen elemanın her elemanı tek tek dolaşarak aramak demektir. 

Örneğin, şöyle bir sayı listesi olsun: liste = [1, 5, 2,  8, 4]

Bu listede "8" sayısının olup olmadığını öğrenmek için tüm elemanları tek tek dolaşırız. "1" sayısından başlarız ve 5, 2 sayılarını geçtikten sonra 8 sayısına ulaşırız.

### Time complexity

"n" elemanlı bir dizide arama yapıyorsak worst case'de, aradığımız elemanın dizinin sonunda olduğunda, tüm elemanları dolaşmak zorunda olduğumuzdan dolayı time complexity'si "**O(n)**" olur. Best case'de, aranılan eleman dizinin ilk elemanı olduğunda, eleman direkt olarak bulunur ve 1 birim zaman alır. Ancak bu durum nadiren görülür.



# Sorular

1. Gerçek hayattan bir linear search örneği veriniz.

2. Sıralı bir array'de arama yapmak için linear search'ten daha iyi bir algoritma var mıdır?

   Cevap: Evet, vardır. Binary search algoritması ile array'i sürekli 2'ye bölerek çok daha hızlı bir şekilde arama yapılabilir.

3. Linear search algoritmasını kod olarak yazınız.

   Cevap:

   Direkt olarak Python dilinin "in" keyword'ünü kullanabiliriz:

   ````python
   liste = [1, 5, 2, 8, 4]
   print(8 in liste)
   ````

   Veya bir "for" döngüsü ile bir fonksiyon olarak yazabiliriz:

   ````python
   def ara(eleman, liste):
       for i in liste:
           if eleman == i:
               return True
       return False
   ````

   

# Ücretsiz Kaynak

* [Hackerrank problemi](https://www.hackerrank.com/contests/17cs1102/challenges/1-a-linear-search) linkindeki linear search problemini çözebilirsiniz.

