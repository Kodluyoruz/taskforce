## Adım 6: Yeniden başlatma düğmesinin çalışmasını sağlayın

Sahneye Yeniden Başlat düğmesini ekledik ve iyi GÖRÜNÜYOR, ancak şimdi gerçekten çalışmasını sağlamamız ve oyunu yeniden başlatmamız gerekiyor.

- GameManager.cs'de **UnityEngine.SceneManagement** kullanarak ekleyin;
- Geçerli sahneyi yeniden yükleyen yeni bir **public void RestartGame()** işlevi oluşturun
- Buton imlecinde, yeni bir **On Click event** olayı eklemek için + öğesine tıklayın, bunu **Game Manager** nesnesine sürükleyin ve **GameManager.RestartGame** işlevini seçin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/make-restart-button-work/figures/CWC_B.3.4_image4.png)
