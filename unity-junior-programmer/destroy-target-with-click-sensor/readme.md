## Adım 7: Tıklama ve sensör yoluyla hedefleri yok edin
Artık hedeflerimiz sahnenin altında ortaya çıkıp, havaya fırlayabildiğine göre, oyuncunun onları bir tıklamayla yok etmesini sağlamamız gerekiyor. Ayrıca ekranın altına düşen hedefleri de yok etmemiz gerekiyor.

- **Target.cs** içerisinde, **private void OnMouseDown()** { } şeklinde yeni bir metod oluşturun, bu metodun içerisinde, gameObject’i Destroy edin
- **private void OnTriggerEnter(Collider other)** şeklinde yeni bir metod oluşturun, bu metodun içerisinde, gameObject’i Destroy edin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/destroy-target-with-click-sensor/figures/CWC_B.3.2_image4.png)
