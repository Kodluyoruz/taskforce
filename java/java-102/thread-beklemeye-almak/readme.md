# Thread’i beklemeye almak

Java’da bir iş parçacığını belli bir süre bekletmek istersek, Thread sınıfına ait “sleep” fonksiyonunu kullanabiliriz.

“sleep” fonksiyonu milisaniye cinsinden bir değer bekler. Yani örneğin 3000 değeri 3 saniyeye karşılık gelmektedir.

```java
try {
    Thread.sleep(10L * 1000L);
} catch (InterruptedException e) {
    e.printStackTrace();
}
```

Yukarıda Thread.sleep ile iş parçacığı 10 saniye beklemeye alınmıştır. “sleep” fonksiyonu hata fırlatabilen bir fonksiyon olduğundan önceki konularda da görmüştük try-catch bloğu içinde kontrol edilmelidir veya fırlattığı hatayı “throws” anahtar kelimesi ile bir üste doğru fırlatmamız gerekmektedir.
