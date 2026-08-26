## Adım 3: Skor metnini ve değişkeni başlat
UI’de skoru görüntülemek için harika bir yerimiz var, ancak orada hiçbir şey görüntülenmiyor! Oyuncunun puanlarını takip edebileceği bir skor değişkeni görüntülemek için UI’ye ihtiyacımız var.

- GameManager.cs’in en üstüne “using TMPro;” ekle.
- Yeni bir public TextMeshProUGUI scoreText belirle, ardından inspector’da bu değişkeni ata
- Yeni bir private int score değişkeni oluştur ve score = 0 olarak Start(); başlat
- Ayrıca Start()’ta scoreText.text = "Score: " + score; olarak ayarla.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/initialize-score-text-variable/figures/CWC_B.3.3_image1.png)
