## 6. Adım: Bir güç açma göstergesi ekleyin
Bu oyunu daha oynanabilir kılmak için, oyuncunun PowerUpye sahip olup olmadığı açık olmalıdır, bu yüzden bunu kullanıcıya göstermek için görsel bir gösterge programlayacağız.
 
- Kitaplıktan, bir Powerup nesnesini sahneye sürükleyin, "PowerUp Göstergesi" olarak yeniden adlandırın ve ölçeğini düzenleyin
- **işaretini kaldır** denetçideki "Etkin" onay kutusu
- PlayerController.cs'de yeni bir genel GameObject powerupIndicator değişkeni bildirin, ardından denetçide Powerup Indicator değişkenini atayın
- Oyuncu açılışla çarpıştığında, gösterge nesnesini Aktif olarak ayarlayın, ardından açılış sona erdiğinde Aktif Değil olarak ayarlayın.
- Update() içinde, Gösterge konumunu oynatıcının konumuna + bir ofset değerine ayarlayın

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/add-powerup-indicator/figures/CWC_B.2.4_image5.png)
