## Adım 5: Atlama kuvvetini ve yerçekimini değiştirin
Atlamanın kuvvetini, sahnenin yerçekimini ve karakterin kütlesini ayarlayarak oyuncuya mükemmel bir sıçrama sağlamamız gerekiyor.

- Sabit kodlanmış değeri yeni public float jumpForce değişkeniyle değiştirin
- Yeni bir public float yerçekimiModifier değişkeni ekleyin ve Start() içinde, Physics.gravity *= graviteModifier;
- Inspectorda, eğlenceli hale getirmek için **gravityModifier, jumpForce ve Rigibody mass** değiştirin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/tweak-the-jump-force-and-gravity/figures/CWC_B.1.2_image3.png)
