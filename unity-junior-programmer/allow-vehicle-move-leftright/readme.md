### Adım 1: Aracın sola/sağa hareket etmesine izin verin

Şimdiye kadar, araç sadece yol boyunca dümdüz ilerleyebildi. Engellerden kaçınmak için sola ve sağa hareket edebilmemiz gerekiyor.

- PlayerController.cs’nin tepesine, public float turnSpeed; değişkeni ekleyin
- Update()’e,  transform.Translate(Vector3.right * Time.deltaTime * turnSpeed);’ i ekleyin
- oyununuzu çalıştırın, aracı sağa sola haraket eetirmek için ve turnSpeed değişkeninin kayağını kullanın

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/allow-vehicle-move-leftright/figures/CWC_A.2.5_image1.png)
