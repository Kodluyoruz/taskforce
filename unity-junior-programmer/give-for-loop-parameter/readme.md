## Adım 2: For-döngüsüne bir parametre verin 
Şu anda SpawnEnemyWave tam olarak 3 düşman oluşturuyor, ancak oyun sırasında ortaya çıkan düşman sayısını dinamik olarak arttırmak istiyorsak, bu metoda bilgi aktarabilmemiz gerekiyor. 

- **SpawnEnemyWave** fonksiyonuna **int enemiesToSpawn** parametresini ekleyin 
- Bunu: i < __ bununla değiştirin: i < **enemiesToSpawn** 
- Bu yeni değişkeni Start() içerisindeki fonksiyon çağrısına ekleyin: **SpawnEnemyWave(___)**; 

![figures]()
