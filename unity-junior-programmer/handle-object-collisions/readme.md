## Adım 3: Obje çarpışmalarını işle
Artık tüm bu hareketli objelere sahip olduğuna göre, bunlar birbirleriyle çarpışmaya başlamak zorundalar - her şey çarpıştığında ne olacağını programlamamız gerekiyor.

- Uygunsa, nesnelerinin **Rigidbody kütlesini** düzenle
- Uygunsa, objelerin çarpışma şeklini değiştirmek için objelerine yeni bir **Physics material** **(fizik malzemesi)** oluştur.
- Hangi objelerin hangi objelerle çarpıştığını doğru bir şekilde test edebilmek için objelerine **etiketler** ekle.
- Belirli çarpışmalar meydana geldiğinde ne olması gerektiğini, mesajları **Yok etmek **veya Günlüğü konsola kaydetmek için** OnCollisionEnter()** (Rigidbody çarpışmaları için) veya **OnTriggerEnter()** (tetik tabanlı çarpışmalar için) kullan.

Bu adımın sonunda, objeler çarpışmalara dayalı olarak yok etmeli, sıçramalı veya hiçbir şey yapmamalıdır.
