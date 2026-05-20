## Adım 6: return methodunu Bir Doğma Noktası Yapma
Rastgele bir spawn pozisyonu oluşturmak için kullandığımız kod mükemmel ve onu çokça kullanacağız. Komut dosyasını temizlemek ve daha sonra bu kodu kullanmak istiyorsak, onu özel bir işlevde saklamamız gerekir.
 
- **Vector3 GenerateSpawnPosition()** { } adında yeni bir fonksiyon oluştur.
- **spawnPosX** and **spawnPosZ** değişkenlerini yeni bir methoda kopyalayıp yapıştır.
- Satırı yeni methodundaki **return randomPos;** ‘a ekle
- **Instantiate** call’daki kodu yeni işlev adınla değiştir: GenerateSpawnPosition()

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/make-method-return-spawn-point/figures/CWC_B.2.3_image5.png)
