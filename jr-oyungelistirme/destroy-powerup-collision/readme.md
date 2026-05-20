## Adım 2: Çarpışmada PowerUp’ı yok edin
PowerUpyi çalıştırmanın ilk adımı olarak, oyuncu ona vurduğunda onu ortadan kaldıracağız ve oyuncunun onu aldığını takip etmek için yeni bir boolean değişkeni ayarlayacağız.

- PlayerController.cs'de yeni bir OnTriggerEnter() yöntemi ekleyin
- Çarpışmada other.CompareTag("Powerup") açılışını yok eden bir if ifadesi ekleyin
- Yeni bir genel bool hasPowerup oluşturun; ve hasPowerup = true olarak ayarlayın; Powerup ile çarpıştığınızda

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/destroy-powerup-collision/figures/CWC_B.2.4_image1.png)
