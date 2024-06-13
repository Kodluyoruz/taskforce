## Adım 2: Zorluk Seviyesi İçin DifficultyButton Scripti Ekleme
Zorluk seviyesi butonlarımız harika görünüyor, ancak şu an için hiçbir şey yapmıyorlar. Özel işlevlere sahip olmaları için önce onlara yeni bir script atamamız gerekir.

- 3 yeni buton için her birinin Button componentinde **On Click()** bölümünde, RestartGame işlevini kaldırmak için eksi (-) butonuna tıklayın.
- Yeni bir **DifficultyButton.cs** scripti oluşturun ve bunu **3 butonun her birine** ekleyin.
- Scriptinizin en üst kısmına **using UnityEngine.UI** kütüphanesini ekleyin.
- Yeni bir** private Button button** değişkeni oluşturun; ve onu Start() metodu içinde atayın.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/add-DifficultyButton-script/figures/CWC_B.3.5_image1.png)
