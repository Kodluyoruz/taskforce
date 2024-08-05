## Aşama 4: Yeni bir UpdateScore oluştur
Skor metni, puan değişkenini mükemmel bir şekilde görüntülüyor ancak hiçbir zaman güncellenmiyor. UI’de görüntülenecek, puanları toplayan yeni bir fonksiyon yazmamız gerekiyor.

- Bir int scoreToAdd parametresi gerektiren yeni bir private void UpdateScore metodu oluştur
- Yeni metodun içine “**scoreText.text = "Score: " + score;**”u kesip yapıştır sonra Start()’a UpdateScore(0)’ı çağır
- **UpdateScore()’da** score += scoreToAdd; ekleyerek skoru arttır 
- spawnTarget() fonksiyonunda UpdateScore(5)’i çağır.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/create-new-updateScore-method/figures/CWC_B.3.3_image2.png)
