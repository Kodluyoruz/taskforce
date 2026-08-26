## 3. Adım: Düşmanı ve PowerUp’ı test edin
PowerUp yalnızca çok özel bir durumda devreye girer: oyuncunun bir PowerUp’ı olduğunda VE bir düşmanla çarpıştıklarında - bu yüzden önce bu çok özel durumu test edeceğiz.

- Yeni bir "Düşman" etiketi oluşturun ve bunu Düşman Hazır Yapısına uygulayın
- PlayerController.cs'de OnCollisionEnter() işlevini ekleyin
- Düşman etiketi ve hasPowerup boolean için çift koşul testi ile if ifadesini oluşturun
- Çalıştığından emin olmak için bir Debug.Log oluşturun

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/test-for-enemy-powerup/figures/CWC_B.2.4_image2.png)
