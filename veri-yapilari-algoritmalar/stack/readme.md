# Konu Metni

## Stack

Stack (**yığın**), tek taraftan ekleme ve çıkarma yapılabilen bir veri yapısıdır. 

Örneğin, tabakların üst üste dizildiğini düşünelim. Bu yapıda tabaklar sadece en üstten alındığından ve en üste yeni bir tabak koyulabildiğinden dolayı bu yapı bir stack'tir. Stack'te yeni bir eleman eklemeye **push**, bir eleman çıkarmaya **pop** adı verilir. Son giren tabak, her zaman ilk çıkacağı için stack, son giren ilk çıkar anlamına gelen "**Last in first out**", kısaca **LIFO** bir yapıdır.

Bu veri yapısının kullanışlı olduğu yerlerden biri, işlemlerin önceliklerinin farklı olduğu bir işlem listesidir. Önceliği yüksek olan işlemler en üst sıralarda yer alır ve en önce bitirilir. Çok önemli olmayan işlemler ise en alt sıralarda kalır ve en son bitirilir.



# Sorular

1. Gerçek hayattan bir stack veri yapısı örneği veriniz.

2. [Hackerrank problemi](https://www.hackerrank.com/challenges/maximum-element/problem) linkine giderek stack problemini çözünüz.

3. Bir Python liste veri yapısını stack olarak kullanmak istersek push ve pop işlemlerini nasıl yapabiliriz, kod yazarak gösteriniz.

   Cevap:

   ````python
   # stack adında bir liste oluşturalım
   stack = [1, 3, 5]
   
   # push işlemi için "append" metodunu kullanabiliriz
   stack.append(7) # stack = [1, 3, 5, 7]
   
   # pop işlemi için yine "pop" metodunu kullanabiliriz
   stack.pop() # stack = [1, 3, 5]
   ````

   

# Ücretsiz Kaynak

* [Medium paylaşımı](https://medium.com/@tolgahan.cepel/do%C4%9Frusal-veri-yap%C4%B1lar%C4%B1-3-y%C4%B1%C4%9F%C4%B1t-stack-6c5db18ee934) linkinde ayrıntılı ve resimli bir stack anlatımı bulabilirsiniz.

