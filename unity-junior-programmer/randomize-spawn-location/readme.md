## Adım 4: Doğma yerini rastgele belirleyin

AnimalIndex'ten rastgele hayvanlar oluşturmak için S tuşuna basabiliriz, ancak hepsi aynı yerde açılır! Ekranda düz bir çizgide ilerlememeleri için ortaya çıkma konumlarını rastgele ayarlamamız gerekiyor.

- Vector3 için X değerini Random.Range(-20, 20) ile değiştirin, ardından test edin
- if-ifadesi içinde yeni bir yerel Vector3 spawnPos değişkeni yapın
- Sınıfın en üstünde, spawnRangeX ve spawnPosZ için private float  değişkenleri oluşturun

![figures]()
