## Adım 2: Oyuncuyu Takip Etmek İçin Düşman Komut Dosyası Oluşturma
Düşman, oyuncuyu uzaklaştırma gücüne sahiptir, ancak yalnızca oyuncu ona yaklaşırsa. Düşmana oyuncunun pozisyonunu takip etmesini söylemeliyiz, onları adanın etrafında kovalamalıyız.
 
- Yeni bir “Enemy” komut dosyası oluştur ve onu Düşmana ekle.
- **Rigidbody enemyRb;, GameObject player;, ve public float speed;** için 3 farklı değişken belirle.
-  **enemyRb = GetComponent<Rigidbody>();  ve  player = GameObject.Find("Player");** ‘ı başlat.
- **Update()’de**, Oyuncu ve Düşman arasındaki yöne doğru AddForce ekle.
 
 ![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/create-enemy-script-to-follow-player/figures/CWC_B.2.3_image1.png)
