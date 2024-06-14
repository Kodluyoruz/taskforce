## Adım 2: Unity Event Fonksiyonları
Kursta yalnızca varsayılan Update() ve Start() olay fonksiyonlarını kullandık, ancak farklı durumlarda kullanmak isteyebileceğiniz başka fonksiyonlar da var.

- Main Camera’yı **çoğaltın**, “Secondary Camera” olarak yeniden adlandırın, ardından Main Camera’yı **devre dışı bırakın**
- Secondary camera’yı birinci şahıs görünümünde **yeniden konumlandırın,** ardından **offset değişkenini** bu konuma uyacak şekilde düzenleyin
- Projenizi çalıştırın ve ne kadar dalgalı olduğunu fark edin
- PlayerController.cs'de "Update"i "FixedUpdate" olarak değiştirin ve **FollowPlayer.cs'de** "Update"i "LateUpdate" olarak değiştirin, ardından **tekrar test edin**
- Her iki script’teki Start() işlevini **silin**, ardından Main Camera’nızı yeniden etkinleştirin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/unity-event-functions/figures/CWC_B.5.2_image2.png)
