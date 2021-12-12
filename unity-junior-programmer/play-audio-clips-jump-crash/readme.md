## Adım 6: Zıplayınce Ve Çarpınca Ses Klibi Çalma 
PlayerController'da atlamaya ve çarpmaya ses klipleri atadık. Şimdi onları doğru zamanda çalarak oyunumuza tam bir ses deneyimi yaşatmamız gerekiyor.
 
- Oynatıcıya bir Audio Source bileşeni ekleyin
- Yeni bir private AudioSource playerAudio; tanımlayın ve playerAudio = GetComponent<AudioSource>(); olarak initialize edin
- Karakter zıpladığında playerAudio.PlayOneShot(jumpSound, 1.0f);  fonksiyonunu çağırın
- Karakter çarptığında playerAudio.PlayOneShot'ı çağırın(crashSound, 1.0f);  fonksiyonunu çağırın.
  
  ![figures]()
