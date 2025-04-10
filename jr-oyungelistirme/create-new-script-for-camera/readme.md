### Adım 2: Kamera için yeni bir script oluşturun

Kamera genellikle tek bir pozisyonda sıkışıp kalır.eğer kullanıcıyı takip etmesini istiyorsak kamera için yeni bir script yazmamız gerekiyor

- FollowPlayer adında yeni bir C# scripti oluşturun ve onu kameraya ekleyin
- Scriptin en üstüne public GameObject player; ekleyin
- Main Camera’yı seçin, sonra, gözlemcide player object'i boş player değişkenlerine sürükleyin
- Update()'te, kameranın konumunu oynatıcının konumuna atayın, ardından test edin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/create-new-script-for-camera/figures/CWC_A.2.2_image2.png)
