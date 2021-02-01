# Collection Arayüzü (interface) ve Alt Sınıfları

“Collection” interface’den kalıtım alan alt sınıflar “java.util” paketi altında toplanmıştır. “Collection” interface ile liste tipinde veri tutan bir veri yapısında hangi işlevlerin olması gerektiği belirtilmiştir. Liste tipinde veri tutacak olan her sınıf doğrudan veya dolaylı yoldan bu interface’den kalıtım almalıdır. Bu nedenle soyağacının en tepesinde “Collection” interface yer almaktadır.

Java Collection sınıfları ile liste halindeki veri üzerinde arama, ekleme, silme, sıralama gibi işlemler yapabilirsiniz.

Biliyoruzki interface’ler de birbirinden kalıtım alabilir. “Collection” interface’den kalıtım almış en önemli arayüzler “List”, “Queue”, “Set” interfae’leridir.

 

Bu üç interface’den kalıtım alan alt sınıflar ise aşağıdaki gibidir.

 

\-    List interface’den kalıtım alan alt sınıflar: ArrayList, LinkedList, Vector, Stack

\-    Queue interface’den kalıtım alan alt sınıflar: PriorityQueue, ArrayQueue

\-    Set interface’den kalıtım alan alt sınıflar: HashSet, LinkedHashSet, TreeSet

 

Collection interface’den türeyen alt sınıfların sağlamak zorunda olduğu fonksiyonlar:

 

| int size()                                       | Veri kümesinin  eleman sayısını verir.                       |
| ------------------------------------------------ | ------------------------------------------------------------ |
| boolean  isEmpty()                               | Veri kümesinde  eleman yoksa true döner.                     |
| boolean  contains(Object element)                | Veri kümesinde  aranan elemanın olup olmadığını true/false şeklinde belirtir. |
| Iterator<E>  iterator()                          | Veri  kümesindeki elemanları tek tek dolaşmayı sağlayan nesneyi verir. |
| Object[]  toArray()                              | Veri kümesini dizi  halinde verir.                           |
| boolean add(E  e)                                | Veri kümesine  eleman eklemeyi sağlar.                       |
| boolean remove(Object  element)                  | Veri kümesinden  eleman silmeyi sağlar.                      |
| boolean  addAll(Collection<? extends E elements) | Collection  tipinde başka bir veri kümesini olduğu gibi mevcut veri kümesine bütünüyle  ekler. |
| void clear()                                     | Veri  kümesindeki tüm elemanları temizler, siler.            |
| boolean  removeAll(Collection<?> elements)       | Verilen  elemanlar kümesini mevcut veri kümesinden siler.    |

Collection interface’den kalıtım alan alt sınıfları kendiniz de türetebilirsiniz.
