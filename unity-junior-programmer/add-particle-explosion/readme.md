## Adım 7: Parçacık patlaması ekle
Skor tamamen çalışıyor ama hedeflere tıklamak bir nevi… tatmin edici değil. İşleri canlandırmak için bir hedefe tıklandığında biraz patlayan parçacıklar ekleyelim!

- Target.cs’te yeni bir public **ParticleSystem** explosionParticle değişkeni ekle
- Her target prefab’in için **Explosion Particle** değişkenine Course Library > Particles’tan bir particle prefab ata  
- **OnMouseDown()** fonksiyonunda yeni bir explosion prefab’i oluştur.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/add-particle-explosion/figures/CWC_B.3.3_image5.png)
