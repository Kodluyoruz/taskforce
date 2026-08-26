## Adım 3: Düşmanlar eğer düşerlerse onları yok edin 
Oyuncu tüm düşmanlardan kurtulduğunda, kendisini biraz yalnız hissedebilir. Düşen düşmanları yok etmemiz ve sonuncusu yenildiğinde ise yeni bir düşman dalgası oluşturmamız gerekiyor! 

- Enemy.cs içerisinde, eğer konumları -Y değerinden düşükse düşmanları destroy edin (yok edin) 
- SpawnManager.cs içerisinde, yeni bir public int enemyCount değişkeni tanımlayın 
- Update() içerisinde, şöyle ayarlayın: enemyCount = FindObjectsOfType<Enemy>().Length; 
- Eğer enemyCount == 0 ise SpawnEnemyWave if-ifadesini yazın, ardından Start()'tan silin 
  
  ![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/destroy-enemies-if-they-fall-off/figures/CWC_B.2.5_image3.png)
