# Java “volatile” Anahtar Kelimesi

“volatile” anahtar kelimesi değişkenin sakladığı değerin Thread’ler tarafından okunmaya çalışıldığında hepsinde aynı değerin okunacağının garantisini verir. Bilgisayar mimarisinde ana hafıza bölgesi vardır. Bir program çalıştığı süre boyunca işlediği veriler ve program komutları bu ana hafıza bölgesinde saklanır.

Bu hafıza bölgesi RAM diye bilinir. Ayrıca, bilgisayar mimarisinde işlemciler (CPU) vardır. CPU ile hafıza bölgesi sürekli haberleşme halindedir. Sıkı bir iletişim trafiği vardır.

Bu nedenle aşağıda da görüldüğü gibi CPU tarafında küçük hafıza bölgeleri bulunur. Bunlara önbellek (cache) adı verilir. Bu önbellekler, ana bellekten veri okuma-yazma hızını minimum seviyeye düşürmek için kullanılmaktadır. Sık kullanılan değişken değerlerini bu önbellek bölgelerine yerleştirilirler. Böylece sürekli ana hafızaya giderek zaman kaybetmek yerine daha hızlı işlem görürler.

“volatile” anahtar kelimesi ile işaretlenmiş bir değişkenin değerine erişmek gerektiğinde direkt olarak ana hafızadan alınacağını ve ilgili değişkene yazma işlemi uygulanacaksa yine direkt olarak ana hafıza bölgesine yazılacağını belirtilmiş olunur.



Akılda " Tamam anladık ana bellekte tutuluyor da benim kafamda hala oturmayan şeyler var. " gibi düşünceler oluşmuş olabilir. Bu tür sorulara yanıt olarak şöyle bir senaryo düşünülebilir. Örneğin, Threadler arasında kontrol edilen bir değişkenin olduğu  multithread bir uygulama yazıldığını ve bu uygulamayı da onlarca thread tarafından çalıştırılabildiğini varsayalım. Ayrıca bu threadlerin de işlemcide farklı çekirdeklerde çalıştırılabileceğini unutmayalım. Böyle bir senaryoda tüm threadler aynı ön belleği kullanamayacağı için programın çalışmasında tutarsızlıklar oluşabilecektir. Bu senaryoda yer alan kontrol değişkeni "**volatile**" olarak işaretlendiğinde ön bellek yerine ana bellekte tutulacaktır. Bu sayede tüm threadler değişkenin durumunu eş zamanlı olarak kontrol edebileceklerdir.



##### Kullanımı:

```java
Erişim_Belirteci volatile Veri_Tipi Değişken_Adı;
```



![volatile-mantigi](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/java102/thread-volatile/figures/volatile_osman_deniz.png)




```java
private volatile int orderNo;
```

Yukarıda QMatic örneğimizde “volatile” anahtar kelimesinin kullanımını gördük.

