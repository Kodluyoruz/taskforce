## Adım 6: Odak noktası yönünde hareket et
Topu yuvarladık, ama sadece tek bir yönde ileri ve geri gidiyor! Bunun yerine  kameranın (ve odak noktasının) baktığı yönde hareket etmesi gerekiyor.

- Yeni bir private GameObject focalPoint değişkeni tanımla ve Start() fonksiyonu içerisinde çağır: focalPoint = GameObject.Find("Focal Point");
- AddForce metodunu çağırdığın yerde , Vector3.forward değişkenini focalPoint.transform.forward ile değiştir.

![figures]()
