## Adım 4: PowerUp ile ekstra geri tepme uygulayın
PowerUpnin mükemmel bir şekilde kurulması koşuluyla, şimdi gerçek PowerUp yeteneğini programlamaya hazırız: oyuncu PowerUp ile bir düşmanla çarpıştığında, düşman uçmalı!
 
- OnCollisionEnter() içinde, Düşmanın Rigidbody bileşenini almak için yeni bir yerel değişken tanımlayın
- Yönü oyuncudan uzaklaştırmak için yeni bir değişken bildirin
- Yeni bir powerupStrength değişkeni kullanarak düşmana bir itici kuvvet ekleyin

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/apply-extra-knockback-with-powerup/figures/CWC_B.2.4_image3.png)
