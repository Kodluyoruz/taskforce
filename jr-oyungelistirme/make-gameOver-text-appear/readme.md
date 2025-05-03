## GameOver metninin görünmesini sağla

Adım 2: GameOver metninin görünmesini sağlayın Ekranda güzel Game Over metni var, ancak şu anda öylece duruyor ve görüşümüzü engelliyor. Onu devre dışı bırakmalıyız ki oyun bittiğinde tekrar görünebilsin.

- GameManager.cs'de yeni bir genel TextMeshProUGUI gameOverText oluşturun; ve denetçide Game Over nesnesini ona atayın
- Game Over metnini varsayılan olarak devre dışı bırakmak için Etkin onay kutusunun işaretini kaldırın.
- Start()'ta Game Over metnini etkinleştirin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/make-gameOver-text-appear/figures/CWC_B.3.4_image1.png)
