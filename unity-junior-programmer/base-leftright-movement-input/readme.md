### Adım 2: Girdilerde temel sol/sağ hareketi
Şu an sadece gözlemcide aracın sol ve sağ hareketini kontrol edebiliyoruz. Oyuncuya biraz güç vermeli ve bu hareketi kendileri için kontrol etmelerine izin vermeliyiz.

- Üst menüden Düzenle > Proje Ayarları'na tıklayın, sol kenar çubuğundan Girdi Yöneticisi'ni seçin, ardından girişleri keşfetmek için Eksenler'i genişletin
- PlayerController.cs’e, yeni bir public float horizontalInput değişkeni ekleyin
- Update’e, horizontalInput = Input.GetAxis("Horizontal");’ı atayın,sonra gözlemcide görmek için test edin
aracın kontrolünü kazanmak için sağ sol Translate metoduna horizontallnput değişkenini ekleyin
- Gözlemcide , ince ayar yapmak için turnSpeed ve speed değişkenlerini düzenleyin

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/base-leftright-movement-input/figures/CWC_A.2.5_image2.png)
