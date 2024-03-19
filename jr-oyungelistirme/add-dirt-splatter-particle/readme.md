## Adım 3: Kir sıçratma parçacığı ekleyin

İhtiyacımız olan bir sonraki parçacık efekti, oyuncunun sahnede hızla koşarken zemini tekmeliyormuş gibi görünmesini sağlamak için bir kir sıçramasıdır. İşin püf noktası, parçacığın yalnızca oyuncu yerdeyken oynaması gerektiğidir.

- FX_DirtSplatter'ı Player'ın child objecti olarak şekilde sürükleyin, yeniden konumlandırın, döndürün ve ayarlarını düzenleyin
- Yeni bir public ParticleSystem dirtParticle; tanımlayın, ardından onu Inspector'a atayın
- Oyuncu zıpladığında veya bir engelle çarpıştığında çalışması için dirtParticle.Stop();  ekleyin
- oyuncu yere düştüğünde çalışması için dirtParticle.Play(); ekleyin

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/add-dirt-splatter-particle/figures/CWC_B.1.5_image2.png)
