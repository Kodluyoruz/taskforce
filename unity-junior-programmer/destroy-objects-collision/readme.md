## Adım 4: Çarpışma anında nesneleri yok edin

Artık hayvanlar ve merminin tetikleyicili Kutu Çarpıştırıcıları olduğuna göre, onları çarpma anında yok etmek için yeni bir script yazmamız gerekiyor.

- Yeni bir DetectCollisions.cs script oluşturun, onu her bir hayvan prefabrik yapısına ekleyin, ardından açın
- Finalden önce } otomatik tamamlamayı kullanarak OnTriggerEnter işlevini ekleyin
- OnTriggerEnter'da Destroy(gameObject); yazın, ardından test edin
- OnTriggerEnter'da Destroy(other.gameObject) yerleştirin;

![figures]()
