## Adım 6: Zorluğu Değiştirmek İçin Parametre Atama
Zorluk butonları oyunu başlatır, ancak yine de oyunun zorluğunu değiştirmezler. Yapmamız gereken son şey, zorluk butonlarının hedef nesnelerin ortaya çıkma oranını etkilemesini sağlamak.

- DifficultyButton.cs içinde, yeni bir public **int difficulty** değişkeni oluşturun, ardından Inspector ‘dan, **Easy** zorluğunu 1 olarak, Medium zorluğunu 2 olarak ve **Hard** zorluğunu 3 olarak ayarlayın.
- **StartGame()**  metoduna parametre olarak **int difficulty** değişkeni ekleyin.
- **StartGame()** içine, **spawnRate /= difficulty;** olacak şekilde ekleme yapın.
- Difficulty parametresini **StartGame(difficulty)** metoduna ileterek DifficultyButton.cs ‘deki hatayı düzeltin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/use-parameter-change-difficulty/figures/CWC_B.3.5_image5.png)


