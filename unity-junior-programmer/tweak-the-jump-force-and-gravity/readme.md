## Adım 5: Atlama kuvvetini ve yerçekimini değiştirin
Atlamanın kuvvetini, sahnenin yerçekimini ve karakterin kütlesini ayarlayarak oyuncuya mükemmel bir sıçrama sağlamamız gerekiyor.

- Sabit kodlanmış değeri yeni public float jumpForce değişkeniyle değiştirin
- Yeni bir public float yerçekimiModifier değişkeni ekleyin ve Start() içinde, Physics.gravity *= graviteModifier;
- Inspectorda, eğlenceli hale getirmek için **gravityModifier, jumpForce ve Rigibody mass** değiştirin.

![figures]()
