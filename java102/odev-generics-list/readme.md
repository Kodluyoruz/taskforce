# Kendi Liste Sınıfımızı Yazmak

Java'da generic yapısını kullanarak verileri tuttuğumuz bir sınıf tasarlıyoruz.

Sınıfın amacı içerisinde dinamik bir Array (Dizi) tutması ve veri tipini dinamik olarak alması. Bunun için generic bir sınıf oluşturulması gerekli.

**NOT : COLLECTION SINIFI KULLANILMAYACAKTIR ! KENDİ LİSTE SINIFIMIZI OLUŞTURMALIYIZ.**

Sınıf özellikleri :

- Sınıf içerisindeki dizinin varsayılan boyutu 10 ve dizinin eleman sayısı ihtiyaç duydukça 2 katı şeklinde artmalı.
- Sınıfa ait iki tür constructor metot bulunmalı
    - MyList() : Boş contructor kullanılırsa dizinin başlangıç boyutu 10 olmalıdır.
    - MyList(int capacity) : Dizinin başlangıç değeri capacity parametresinden alınmalıdır.
- size() : dizideki eleman sayısını verir.
- getCapacity() : dizinin kapasite değerini verir.
- add(T data) : sınıfa ait diziye eleman eklemek için kullanılmalıdır. Eğer dizide yeteri kadar yer yok ise, dizi boyutu 2 katına çıkartılmalıdır.

### Örnek

````java

public class Ata {
    public static void main(String[] args) {
        MyList<Integer> liste = new MyList<>();
        System.out.println("Dizideki Eleman Sayısı : " + liste.size());
        System.out.println("Dizinin Kapasitesi : " + liste.getCapacity());
        liste.add(10);
        liste.add(20);
        liste.add(30);
        liste.add(40);
        System.out.println("Dizideki Eleman Sayısı : " + liste.size());
        System.out.println("Dizinin Kapasitesi : " + liste.getCapacity());
        liste.add(50);
        liste.add(60);
        liste.add(70);
        liste.add(80);
        liste.add(90);
        liste.add(100);
        liste.add(110);
        System.out.println("Dizideki Eleman Sayısı : " + liste.size());
        System.out.println("Dizinin Kapasitesi : " + liste.getCapacity());
    }
}


````

### Çıktısı

```
Dizinin Kapasitesi : 10
Dizideki Eleman Sayısı : 0
Dizinin Kapasitesi : 10
Dizideki Eleman Sayısı : 4
Dizinin Kapasitesi : 20
Dizideki Eleman Sayısı : 11
```

- get(int index): verilen indisteki değeri döndürür. Geçersiz indis girilerse null döndürür.
- remove(int index): verilen indisteki veriyi silmeli ve silinen indis sonrasında ki verileri sol doğru kaydırmalı. Geçersiz indis girilerse null döndürür.
- set(int index, T data) : verilen indisteki veriyi yenisi ile değiştirme işlemini yapmalıdır. Geçersiz indis girilerse null döndürür.
- String toString() : Sınıfa ait dizideki elemanları listeleyen bir metot.

### Örnek

````java
public class Ata {
    public static void main(String[] args) {
        MyList<Integer> liste = new MyList<>();
        liste.add(10);
        liste.add(20);
        liste.add(30);
        System.out.println("2. indisteki değer : " + liste.get(2));
        liste.remove(2);
        liste.add(40);
        liste.set(0, 100);
        System.out.println("2. indisteki değer : " + liste.get(2));
        System.out.println(liste.toString());
    }
}
````

### Çıktısı

````
2. indisteki değer : 30
2. indisteki değer : 40
[100,20,40]
````

- int indexOf(T data) : Parametrede verilen nesnenin listedeki indeksini verir. Nesne listede yoksa -1 değerini verir.
- int lastIndexOf(T data) :  Belirtilen öğenin listedeki son indeksini söyler. Nesne listede yoksa -1 değerini verir.
- boolean isEmpty() : Listenin boş olup olmadığını söyler.
- T[] toArray() : Listedeki öğeleri, aynı sırayla bir array haline getirir.
- clear() : Listedeki bütün öğeleri siler, boş liste haline getirir.
- MyList<T> sublist(int start,int finish) : Parametrede verilen indeks aralığına ait bir liste döner.
- boolean contains(T data) : Parametrede verilen değerin dizide olup olmadığını söyler.

### Örnek

````
public class Ata {
    public static void main(String[] args) {
        MyList<Integer> liste = new MyList<>();
        System.out.println("Liste Durumu : " + (liste.isEmpty() ? "Boş" : "Dolu"));
        liste.add(10);
        liste.add(20);
        liste.add(30);
        liste.add(40);
        liste.add(20);
        liste.add(50);
        liste.add(60);
        liste.add(70);

        System.out.println("Liste Durumu : " + (liste.isEmpty() ? "Boş" : "Dolu"));

        // Bulduğu ilk indeksi verir
        System.out.println("Indeks : " + liste.indexOf(20));

        // Bulamazsa -1 döndürür
        System.out.println("Indeks :" + liste.indexOf(100));

        // Bulduğu son indeksi verir
        System.out.println("Indeks : " + liste.lastIndexOf(20));

        // Listeyi Object[] dizisi olarak geri verir.
        Object[] dizi = liste.toArray();
        System.out.println("Object dizisinin ilk elemanı :" + dizi[0]);

        // Liste veri türünde alt bir liste oluşturdu
        MyList<Integer> altListem = liste.subList(0, 3);
        System.out.println(altListem.toString());

        // Değerim listedeki olup olmadığını sorguladı
        System.out.println("Listemde 20 değeri : " + liste.contains(20));
        System.out.println("Listemde 120 değeri : " + liste.contains(120));

        // Listeyi tamamen boşaltır ve varsayılan boyutuna çevirir
        liste.clear();
        System.out.println(liste.toString());
        
    }
}

````

### Çıktısı

````
Liste Durumu : Boş
Liste Durumu : Dolu
Indeks : 1
Indeks :-1
Indeks : 4
Object dizisinin ilk elemanı :10
[10,20,30,40]
Listemde 20 değeri : true
Listemde 120 değeri : false
[]

````
