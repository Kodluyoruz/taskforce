## Adım 9: Aralıklarla engeller ortaya çıkarın

SpawnManager başlangıçta hazır yapıları başlatır, ancak yeni bir metod yazmalı ve bir zamanlayıcıda engeller oluşturmak için InvokeRepeating'i kullanmalıyız. Son olarak, devrilmemesi için karakterin RigidBody'sini değiştirmeliyiz.

- Yeni bir **void SpawnObstacle** yöntemi oluşturun, ardından Instantiate çağrısını bunun içine taşıyın
- **startDelay** ve **repeatRate** için yeni float değişkenler oluşturun
- **InvokeRepeating()** yöntemini kullanarak engellerinizin aralıklarla ortaya çıkmasını sağlayın.
- Player Rigid Body bileşeninde, **Constraints** genişletin, ardından Y konumu hariç hepsini dondurun.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/spawn-obstacles-intervals/figures/CWC_B.1.2_image7.png)
