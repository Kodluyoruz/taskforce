## Adım 2: Parçacığı çarpışmada oynatın
Parçacık efektlerini keşfettik ve çarpışma için bir patlama bulduk, ancak Oynatmak için Player Controllera atamamız ve yeni bir kod yazmamız gerekiyor.
 
- **PlayerController.cs**'de yeni bir **public ParticleSystem explosionParticle;** tanımlayın
- Inspector’da, **patlamayı** patlama parçacık değişkenine atayın
- Oyuncunun bir engelle çarpıştığı **if ifadesinde** **explosionParticle.Play();** fonksiyonunu çağırın, ardından parçacık özelliklerini test edin ve ince ayar yapın.

![figures]()
