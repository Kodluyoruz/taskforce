## Adım 6: Her hedefe birer puan değeri ata
Hedefler tıklandığında skor güncelleniyor, ancak hedeflerin her birine farklı bir değer vermek istiyoruz. İyi nesnelerin puan değerleri değişmeli ve kötü nesneler puan düşürmeli.

- Target.cs’te yeni bir public int pointValue değişkeni oluştur
- Target prefab’in her inspector’ında, kötü hedefin negatif değeri dahil olmak üzere Point Value’yu değerleri her neyse onlara ayarla
- “UpdateScore(pointValue);”a yeni bir değişken ekle.

![figures]()
