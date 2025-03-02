# Ödev 1
**ArrayList** adında yeni bir sınıf oluşturun. Bu sınıf bir koleksiyon sınıfı olacaktır. Sınıf arka planda bir dizi tutacaktır, eklenen elemanlar bu dizide tutulacak ve gerekirse dizinin boyutu artırılacaktır.

**ArrayList** sınıfının özellikleri şu şekilde olacaktır:

- Sınıf jenerik olacaktır.
- Listenin elemanları bir dizide tutulacak, bu dizi private olacaktır. Dizinin başlangıç kapasitesi 14 olacaktır. Eğer bu kapasite yetersiz kalırsa kapasitesi eski değerin 2 katı olan yeni bir dizi oluşturulacak ve artık bu dizi kullanılacaktır.
- add() metodu yazınız. Bu metot parametre olarak bir nesne alacak ve bu nesneyi dizinin sonuna ekleyecektir.
- insert() metodu yazınız. Bu metot parametre olarak bir index değeri ve bir nesne alır. Nesneyi belirtilen indekse ekler, varsa diğer elemanları birer aşağı kaydırır.
- count() metodu yazınız. Bu metot listenin içindeki eleman sayısını döndürür.
get() metodu yazınız. Bu metot parametre olarak bir indeks değeri alır ve o indeksteki elemanı döndürür.
-  set() metodu yazınız. Bu metot parametre olarak bir index değeri ve bir nesne alır. Nesneyi belirtilen indeks değerinin üzerine yazar.
- remove() metodu yazınız. Parametre olarak bir nesne alacak, eğer bu nesne listede varsa silecektir.
- contains() metodu yazınız. Bu metot parametre olarak bir nesne alır ve bu nesnenin listede olup olmadığı bilgisini döndürür.
- indexOf() metodu yazınız. Bu metot parametre olarak aldığı nesneyi listede arar, bulursa index değerini, bulamazsa -1 döndürür.
