## Adım 7: Tıklama ve sensör yoluyla hedefleri yok edin
Artık hedeflerimiz sahnenin altında ortaya çıkıp, havaya fırlayabildiğine göre, oyuncunun onları bir tıklamayla yok etmesini sağlamamız gerekiyor. Ayrıca ekranın altına düşen hedefleri de yok etmemiz gerekiyor.

- **Target.cs** içerisinde, **private void OnMouseDown()** { } şeklinde yeni bir metod oluşturun, bu metodun içerisinde, gameObject’i Destroy edin
- **private void OnTriggerEnter(Collider other)** şeklinde yeni bir metod oluşturun, bu metodun içerisinde, gameObject’i Destroy edin.

![figures]()
