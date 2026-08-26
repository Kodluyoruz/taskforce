## Adım 3: Kullanıcının yatay girişini alın

Player'ı soldan sağa hareket ettirmek istiyorsak, kullanıcının girdisini izleyen bir değişkene ihtiyacımız var.

- Varlıklar klasörünüzde bir "Komut Dosyaları" klasörü ve içinde bir "PlayerController" komut dosyası oluşturun.
- Eklemek komut dosyasını Player'a yazın ve açın
- PlayerController.cs dosyasının en üstünde, yeni bir genel kayan noktalı yatayGiriş bildir
- Update() içinde, yatayInput = Input.GetAxis(“Horizontal”) olarak ayarlayın, ardından denetçide çalıştığından emin olmak için test edin

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/get-users-horizontal-input/figures/CWC_A.4.2_image1.png)
