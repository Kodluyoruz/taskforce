# İş Parçacığı Havuzları (ThreadPooling)

Thread yaratmak cidden maliyetli bir olaydır. Her Thread için sistemde belli bir kaynak ayrılır. Bu kaynaklar CPU, Hafıza gibi önemli olanlardır. Uygulamamız
çalışırken belli miktarda bir Thread ile sınırlandırmak isteyebiliriz.

Bu nedenle Thread havuzu oluşturup bu havuzu önceden oluşturulmuş ve kullanıma hazır Thread nesneleri ile doldururuz. Böylece, performans kazanımı ve sistem
kaynaklarının verimli kullanımını sağlayabiliriz.

```java
ExecutorService executor = Executors.newFixedThreadPool(15);
```

Yukarıdaki Java’da hazır bulunan “Executors” sınıfındaki “newFixedThreadPool” metodunu çağırarak bir Thread havuzu oluşturabilirsiniz. Ardından bize 15
Thread’in kullanıma hazır halde bulunduğu bir havuz oluşturup verecektir. Bu fonksiyon ayrıca bize bu havuz üzerinde Thread kullanımını yönetecek
“ExecutorService” tipinde bir nesne verecektir. Bu nesne üzerindeki “execute” fonksiyonuyla havuzdaki bir Thread’i kullanıp işimiz bitince tekrar sisteme iade
edeceğiz.

```java
ExecutorService executor = Executors.newFixedThreadPool(15);

QMatic qmatic = new QMatic();

for(int i=0; i < 100; i++) {
 executor.execute(qmatic);
}
```

Yukarıdaki örnekte “QMatic” isminde önceden de kullandığımız Runnable tipinde sıra numarası veren sınıftan bir nesne yaratıyoruz. Bu kod parçasını “execute”
fonksiyonuyla havuzdaki bir Thread’i kullanarak çalıştırıyoruz. Görüldüğü gibi havuz 15 kapasiteli olmasına rağmen döngüde 100 kez Thread kullanma talebi
gelmiş. Eğer havuzda uygun boş bir Thread yoksa beklemede kalacaktır. Havuzdan ilk boşa çıkan Thread nesnesini alıp çalışacaktır.

