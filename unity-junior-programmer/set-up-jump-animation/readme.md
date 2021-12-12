## Adım 3: Bir atlama animasyonu ayarlayın

Koşu animasyonu iyi görünüyor, ancak oyuncu engellerin üzerinden atladığında çok garip gözüküyor. Sırada, adımlarında gerçekten yaylanan bir atlama animasyonu eklememiz gerekiyor.

- PlayerController.cs'de yeni bir private Animator playerAnim tanımlayın;
- Start()'ta playerAnim = GetComponent<Animator>();
- Oyuncunun atladığı zaman için if ifadesinde, atlamayı tetikleyin:
- playerAnim.SetTrigger(“Jump_trig”);
  
  ![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/set-up-jump-animation/figures/CWC_B.1.4_image1.png)
