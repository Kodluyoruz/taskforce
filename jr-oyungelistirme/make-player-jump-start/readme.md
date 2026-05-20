## Adım 3: Oyuncunun başlangıçta zıplamasını sağlayın
Şimdiye kadar, yalnızca bir gameobject veya dönüştürme bileşeninin tamamında yöntemler çağırdık. Oyuncunun kuvveti ve yerçekimi üzerinde daha fazla kontrol istiyorsak, özellikle oyuncunun Rigidbody bileşeninde yöntemler çağırmamız gerekir.

- **PlayerController.cs'de** yeni bir özel **Rigidbody playerRb** değişkeni tanımlayın; 
- **Start() ‘ta**, playerRb = **GetComponent<Rigidbody>()**; atayın.
- **Start()'ta**, oyuncunun oyunun başında atlamasını sağlamak için AddForce yöntemini kullanın.
  
  ![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/make-player-jump-start/figures/CWC_B.1.2_image1.png)
