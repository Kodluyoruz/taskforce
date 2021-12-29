## Aşama 5: Hedefler yok edildiğinde skor ekle
Artık skoru güncellemek için bir yöntemimiz olduğuna göre, bir hedef yok edildiğinde onu hedef scriptine çağırmalıyız.

- GameManager.cs’te UpdateScore’u public yap
- Target.cs’te “private GameManager gameManager;”a bir referans oluştur
- Find() metodunu kullanarak  Start()’ta GameManager’ı başlat
- Bir hedef yok edildiğinde “UpdateScore(5);”i çağır ve sonra metod çağrısını SpawnTarget()’ten sil.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/add-score-when-targets-destroyed/figures/CWC_B.3.3_image3.png)
