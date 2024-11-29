## Adım 5: StartGame’de Başlık Ekranını Devre Dışı Bırakma
Oyun başladığında başlık ekranının kaybolmasını istiyorsak, onları tek tek kapatmak yerine boş bir objede saklamalıyız. Tek boş parent objeyi devre dışı bırakmak çok daha kolaydır.

- Canvas’a sağ tıklayın ve Create > Empty Object ‘i seçin, sonrasında “Title Screen” olarak yeniden isimlendirin ve **3 butonu ve title** ‘ı üzerine sürükleyin.
- GameManager.cs içinde, yeni bir **public GameObject titleScreen**; değişkeni oluşturun ve inspector’den atayın.
- **StartGame()** içinde “Title Screen” objesini devre dışı bırakın.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/use-parameter-change-difficulty/figures/CWC_B.3.5_image4.png)
