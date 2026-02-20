## 7. Adım: Oyun bittiğinde yeniden başlat düğmesini göster

Yeniden Başlatma Düğmesi harika görünüyor, ancak tüm oyun boyunca yüzümüzde olmasını istemiyoruz. “Oyun Bitti” mesajına benzer şekilde, oyun aktifken Yeniden Başlat Düğmesini kapatacağız.

- GameManager.cs'in en üstüne **UnityEngine.UI **kullanarak ekleyin;
- Yeni bir **public Button restartButton**; ve denetçide buna **Yeniden Başlatma** butonuna atayın
- Denetçideki **Yeniden Başlatma Butonu** için "Etkin" onay kutusunun işaretini kaldırın
- GameOver işlevinde **Yeniden Başlat Butonunu** etkinleştirin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/show-restart-button-on-game-over/figures/CWC_B.3.4_image5.png)
