## Adım 4: Boşluk çubuğuna basıldığında oyuncunun zıplamasını sağlayın

Oyuncunun başlangıçta atlamasını istemiyoruz - sadece boşluk butonuna basarak bunu söylediğimizde atlamalılar.

- **Update()** içinde, boşluk çubuğuna basılıp basılmadığını kontrol eden bir if-then ifadesi ekleyin.
- AddForce kodunu Start()'tan **kesip** if ifadesine **yapıştırın**.
- AddForce çağrısına** ForceMode.Impulse** parametresini ekleyin, ardından kuvvet çarpan değerini azaltın.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/make-player-jump-if-spacebar-pressed/figures/CWC_B.1.2_image2.png)
