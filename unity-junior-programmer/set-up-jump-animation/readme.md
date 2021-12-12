## Adım 3: Bir atlama animasyonu ayarlayın

Koşu animasyonu iyi görünüyor, ancak oyuncu engellerin üzerinden atladığında çok garip gözüküyor. Sırada, adımlarında gerçekten yaylanan bir atlama animasyonu eklememiz gerekiyor.

- PlayerController.cs'de yeni bir private Animator playerAnim tanımlayın;
- Start()'ta playerAnim = GetComponent<Animator>();
- Oyuncunun atladığı zaman için if ifadesinde, atlamayı tetikleyin:
- playerAnim.SetTrigger(“Jump_trig”);
  
  ![figures]()
