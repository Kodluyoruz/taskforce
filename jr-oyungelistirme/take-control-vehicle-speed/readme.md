### Adım 3: Araç hızının kontrolünü elinize alın
Oyuncunun direksiyon simidini kontrol etmesine izin verdik, ancak aynı zamanda gaz pedalını ve freni de kontrol etmelerini istiyoruz.

- Yeni bir public forwardInput değişkeni oluşturun
- Update’e, forwardInput = Input.GetAxis("Vertical"); ataması yapın.
- forward Translate metoduna  forwardInput değişkenini ekleyin ve test edin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/take-control-vehicle-speed/figures/CWC_A.2.5_image3.png)
