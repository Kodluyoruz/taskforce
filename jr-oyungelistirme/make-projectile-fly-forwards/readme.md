## Adım 1: Merminin ileriye doğru uçmasını sağlayın

Yapmamız gereken ilk şey, mermiye bir miktar ileri hareket vermek, böylece oyuncu tarafından fırlatıldığında sahne boyunca hızla geçmesini sağlamak.

**Merminin ileriye doğru uçmasını sağlayın**

- Yeni bir “MoveForward” script’i oluşturun, onu yiyecek nesnesine ekleyin ve ardından açın
- Yeni bir public float speed değişkeni belirtin;
- Update() içinde, transform.Translate(Vector3.forward * Time.deltaTime * speed); ekleyin, ardından kaydedin
- Denetleyicide (denetçide), merminin hız değişkenini ayarlayın, ardından test edin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/make-projectile-fly-forwards/figures/CWC_A.4.3_image1.png)

**Alt text:** Flavour
