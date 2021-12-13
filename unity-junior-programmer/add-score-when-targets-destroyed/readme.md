## Aşama 5: Hedefler yok edildiğinde skor ekle
Artık skoru güncellemek için bir yöntemimiz olduğuna göre, bir hedef yok edildiğinde onu hedef scriptine çağırmalıyız.

- GameManager.cs’te UpdateScore’u public yap
- Target.cs’te “private GameManager gameManager;”a bir referans oluştur
- Find() metodunu kullanarak  Start()’ta GameManager’ı başlat
- Bir hedef yok edildiğinde “UpdateScore(5);”i çağır ve sonra metod çağrısını SpawnTarget()’ten sil
