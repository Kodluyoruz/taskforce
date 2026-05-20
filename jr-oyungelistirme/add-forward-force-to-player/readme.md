## Adım 5: Oyuncuya ileri kuvvet ekle
Kamera adanın etrafında mükemmel bir şekilde dönüyor ama şimdi oyuncuyu hareket ettirmemiz gerekiyor.

- “PlayerController” (oyuncu kontrolü) olarak adlandırılmış bir script oluştur ve Player olarak adlandırılan nesneye ata ve script dosyasını aç.
- Yeni bir public float speed değişkeni tanımlayıp onu başlatın.
- Yeni bir private RigidBody playerRb değişkeni tanımlayın ve onu **Start()** fonksiyonu içinde çağırın.
- **Update()**  fonksiyonu içinde  yeni  “Vertical” (dikey) input’a bağlı olan bir **forwardInput** değişkeni tanımla.
- **forwardInput** değişkenine bağlı olarak oyuncuyu ilerleten **AddForce()** methodunu çağıtın.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/add-forward-force-to-player/figures/CWC_B.2.2_image2.png)
