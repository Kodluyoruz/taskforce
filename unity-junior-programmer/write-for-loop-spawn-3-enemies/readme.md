## Adım 1: 3 Düşman oluşturmak için for-döngüsü kullanın 
Birden fazla düşman ortaya çıkararak oyuncuya meydan okumalıyız. Bunu yapmak için, düşman örneğini bir döngü ile tekrarlayacağız.

- SpawnManager.cs'deki Start() fonksiyonunda, tek bir kez çalışan Instantiate işlemini, 3 kez çalışıp düşman oluşturacak olan for-döngüsü ile değiştiriniz. 
- For-döngüsünü yeni bir void SpawnEnemyWave() fonksiyonuna taşıyın, ardından onu Start() içerisinden çağırın. 

![figures]()
