## 4. Adım: Yumurtlamayı durdurun ve GameOver'da puan kazanın

“Oyun Bitti” mesajı tam istediğimiz zaman çıkıyor ama oyunun kendisi oynamaya devam ediyor. Oyunu gerçekten durdurmak ve buna “Oyun Bitti” demek için, hedef oluşturmayı ve oyuncu için puan üretmeyi bırakmamız gerekiyor.

- Yeni bir **public bool isGameActive** oluşturun;

- Start()'ta ilk satır olarak **isGameActive = true; ve GameOver()'da isGameActive = false** olarak ayarlayın;

- Yumurtlamayı önlemek için **SpawnTarget()** eşyordamında **while(true)** öğesini **while(isGameActive)** olarak değiştirin

- Puanlamayı önlemek için Target.cs'de **OnMouseDown()** işlevinde **if (gameManager.isGameActive) {** koşulunu ekleyin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/stop-spawning-score-gameOver/figures/CWC_B.3.4_image3.png)
