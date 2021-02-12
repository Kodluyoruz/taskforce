# Java “volatile” Anahtar Kelimesi

“volatile” anahtar kelimesi değişkenin sakladığı değerin Thread’ler tarafından okunmaya çalışıldığında hepsinde aynı değerin okunacağının garantisini verir. Bilgisayar mimarisinde ana hafıza bölgemiz vardır. Biz program çalıştığı süre boyunca işlediği verileri ve programın komutlarını bu ana hafıza bölgesinde saklarız. 

Bu hafıza bölgesi RAM diye bilinir. Ayrıca, bilgisayar mimarisinde işlemciler (CPU) vardır. CPU ile hafıza bölgesi sürekli haberleşme halindedir. Sıkı bir iletişim trafiği vardır.

Bu nedenle aşağıdada görüldüğü gibi CPU tarafında küçük hafıza bölgeleri bulunur. Bu hafıza bölgeleri sık kullanılan değişken değerlerini buraya cache’lerler. Böylece sürekli ana hafızaya giderek zaman kaybetmek yerine daha hızlı işlem görürler. 

“volatile” anahtar kelimesi ile işaretlenmiş bir değişkenin değerine erişmek gerektiğinde direkt olarak ana hafızadan alınacağını ve ilgili değişkene yazma işlemi uygulanacaksa yine direkt olarak ana hafıza bölgesine yazılacağını belirtmiş oluruz. 

Böylece bu değişken üzerinde işlem yapan tüm Thread’ler aynı değeri görecekleri garanti altına alınmış olunur. Normalde “volatile” demeseydik değişkenimiz CPU cache bölgesinden okunabilirdi. Bu durumda tutarsız durumlar oluşabilirdi. Kritik değerler için “volatile” anahtar kelimesi kullanabilirsiniz.

![volatile-mantigi](figures/volatile.png)

```java
private volatile int orderNo;
```

Yukarıda QMatic örneğimizde “volatile” anahtar kelimesinin kullanımını gördük.

