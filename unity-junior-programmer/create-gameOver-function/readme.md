## 3. Adım: GameOver işlevi oluşturun

Oyunun başında geçici olarak "Oyun Bitti" metninin görünmesini sağladık, ancak aslında "İyi" nesnelerden biri kaçırıldığında ve düştüğünde onu tetiklemek istiyoruz.

- Yeni bir **public void GameOver()** işlevi oluşturun ve oyunu etkinleştiren kodu içindeki metnin üzerine taşıyın
- Hedef sensörle çarpışırsa, Target.cs'de **gameManager.GameOver()'ı** çağırın
- Kötü nesneye yeni bir "Kötü" etiketi ekleyin, yalnızca kötü bir nesne değilse oyunu tetikleyecek bir koşul ekleyin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/create-gameOver-function/figures/CWC_B.3.4_image2.png)
