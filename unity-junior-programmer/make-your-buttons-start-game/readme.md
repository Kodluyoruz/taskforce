## Adım 4: Yeni Butonlarınız ile Oyunu Başlatma
Etrafa sıçrayan hedef nesneleri görmezden gelirseniz Başlık Ekranı  harika görünüyor, ancak oyunu gerçekten başlatmak için hiçbir yol yok. SetDifficulty ile iletişim kurabilen bir StartGame metoduna ihtiyacımız var.

- GameManager.cs içinde, yeni bir** public void StartGame()** fonksiyonu oluşturun ve **Start()** metodundan her şeyi alıp bu fonksiyona taşıyın.
- DifficultyButton.cs içinde, yeni bir **private GameManager gameManager** değişkeni oluşturun ve **Start()** metodu içinde atayın.
- **SetDifficulty()** metodunun içinde, **gameManager.StartGame()**; metodunu çağırın.

![figures]()
