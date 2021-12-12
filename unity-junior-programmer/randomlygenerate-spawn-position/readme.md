## Adım 5: Rastgele Doğma Noktası Oluşturma
Düşman başlangıçta ortaya çıkar, ancak her zaman aynı noktada görünür. Bilindik Random sınıfını kullanarak düşmanı rastgele bir konumda ortaya çıkarabiliriz.
 
- SpawnManager.cs’de, **Start()**’ta, **rastgele oluşturulmuş** yeni bir X ve Z oluştur.
- Rastgele X ve Z pozisyonlarıyla yeni bir **Vector3 spawnPos** değişkeni oluştur 
- Yeni **spawnPos** değişkenini  **Instantiate** call’a dahil et.
- Sabit kodlanmış değerleri bir **spawnRange** değişkeniyle değiştir.
- Çalıştığından emin olmak için projeni **Başlat** ve** **Yeniden Başlat**

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/randomlygenerate-spawn-position/figures/CWC_B.2.3_image4.png)
