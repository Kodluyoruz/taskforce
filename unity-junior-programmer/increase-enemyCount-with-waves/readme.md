## Adım 4: Düşman sayısını (enemyCount) dalgalarla artırın 
Artık oluşan düşmanların sayısını kontrol ettiğimize göre, sayılarını dalgalar halinde artırmalıyız. Oyuncu bir düşman dalgasını yendiğinde, yerini almak için daha fazlası oluşturulmalıdır. 

- Yeni bir **public int waveNumber = 1**; tanımlayın, ve onu burada kullanın: **SpawnEnemyWave(waveNumber);** 
- 0 adet düşmanın kalıp kalmadığını test eden if-koşulunda, **waveCount’ı 1 artırın** 

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/increase-enemyCount-with-waves/figures/CWC_B.2.5_image3.png)
