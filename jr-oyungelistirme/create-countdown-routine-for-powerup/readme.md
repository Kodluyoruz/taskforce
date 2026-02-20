## Adım 5: PowerUp için CountDown Rutini Oluşturun
PowerUpnin sonsuza kadar sürmesi düşmanlar için adil olmaz - bu nedenle, oyuncu PowerUp’ı topladığı zaman başlayan ve zamanlayıcı bittiğinde PowerUp yeteneğini kaldıran bir CountDown sayacı programlayacağız.

- Yeni bir IEnumerator PowerupCountdownRoutine () ekleyin {}
- PowerupCountdownRoutine içinde, 7 saniye bekleyin, ardından PowerUp’ı devre dışı bırakın
- Oyuncu PowerUp ile çarpıştığında, Coroutines’i başlatın

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/create-countdown-routine-for-powerup/figures/CWC_B.2.4_image4.png)
