## Adım 5: Yeni dalgalarla birlikte Güçlendirme oluşturun 
Oyunumuz neredeyse tamamlandı, ancak kaçırdığımız bir şey var. Düşmanlar, her dalgada oluşmaya devam ediyor, ancak güçlendirme sadece bir kez kullanılabilir ve kullanıldıktan sonra sonsuza dek kaybolmakta ve oyuncuyu savunmasız bırakmakta. Güçlendirmeleri, her düşman dalgasında rastgele bir konumda ortaya çıkarmamız gerekiyor, böylece oyuncunun tekrardan düşmanla savaşma şansı olur. 

- SpawnManager.cs içerisinde, yeni bir **public GameObject powerupPrefab** değişkeni oluşturun, ve **prefab**’i inspector üzerinde atayın ve sahneden silin 
- Start() içerisinde, yeni bir Powerup (güçlendirme) **Instantiate** edin 
- **SpawnEnemyWave()** çağrısından önce, yeni bir Powerup Instantiate edin 

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/spawn-powerups-with-new-waves/figures/CWC_B.2.5_image5.png)
