## Adım 5: SpawnManager'ın Prefabs oluşturmasını sağla
Artık tüm hazır yapılarımızı oluşturduğumuza göre, onları belirli aralıklarla ve istersek rastgele konumlarda ortaya çıkarmak için bir spawn manager oluşturabiliriz.

- Boş bir “Spawn Manager” objesi oluştur ve buna yeni bir SpawnManager.cs script’i ekle
- Prefabriklerin için bireysel **GameObject veya GameObject array** (dizi) değişkenleri oluştur, ardından bunları denetleyicide **ata**
- Objeleri aralıklarla (rastgele objeler, rastgele konumlar veya her ikisi) oluşturmak için **Instantiate(), Random.Range()** ve **InvokeRepeating()** yöntemlerini kullan
- Assets klasörüne sağ tıkla Assets folder > **Export Package** (Paketi Dışa Aktar), ardından **Backups** (Yedekler) klasörüne yeni bir versiyonu kaydet

Bu adımın sonunda, objeler uygun konumdan otomatik olarak oluşturulmalıdır.
