## Adım 2: Arka planın konumunu sıfırlayın

Arka planı tekrarlamak ve hızla geçen bir dünya yanılsamasını sağlamak için, arka plan nesnesinin konumunu mükemmel bir şekilde bir araya gelecek şekilde sıfırlamamız gerekir.

- Yeni bir değişken özel Vector3 startPos bildirin;
- Start()'ta, = transform.position; atayarak startPos değişkenini gerçek başlangıç ​​konumuna ayarlayın.
- Update() içinde, belirli bir mesafe hareket ederse konumu sıfırlamak için bir if ifadesi yazın.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/reset-position-background/figures/CWC_B.1.3_image1.png)
