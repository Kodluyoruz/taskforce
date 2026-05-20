## Challenge Genel Bakış:

Topların gökyüzünden rastgele düştüğü ve yere çarpmadan önce onları yakalamak için köpeğinizi göndermeniz gereken bu mücadeleyi programlamak için dizi ve rastgele sayı üretme becerilerinizi kullanın. Bu zorluğu tamamlamak için, değişkenlerinizin doğru şekilde atandığından, if ifadelerinizin doğru programlandığından, çarpışmalarınızın mükemmel bir şekilde algılandığından ve nesnelerin rastgele oluşturulduğundan emin olmanız gerekir.

Dosya ve assetleri [buradan](https://drive.google.com/file/d/1Ok6m24mee7UQ-9250XKFmAGvZBoC-h_r/view?usp=sharing) indirebilirsiniz.


**Challenge Sonucu:**

- Ekranın üzerinde rastgele bir x konumunda rastgele bir top (3'lü) oluşturulur
- Kullanıcı boşluk tuşuna bastığında, bir köpek doğar ve topu yakalamak için koşar.
- Köpek topla çarpışırsa, top yok edilir.
- Top yere çarparsa, bir "Oyun Bitti" debug mesajı görüntülenir.
- Köpekler ve toplar ekrandan çıktıklarında sahneden kaldırılır.

**Adım 1: Genel Bakış**

- Prototip 2 projenizi açın
- Challenge 2 başlangıç dosyalarını indirmek için tıklayın, sıkıştırılmış klasörü çıkarın ve ardından .unitypackage'i projenize aktarın. Bunu nasıl yapacağınızı unutursanız, Ders 1.1, adım 2'ye bakın.
- Project Window > Assets > Challenge 2 > Instructions klasöründe, Challenge’ı tamamlamak için bir kılavuz olarak Challenge 2 - Outcome videosunu kullanın.

**Adım 2: Uyarı**

Meydan okumayı projenize aktardığınızda, hataları olması gerekir.
Meydan okumanın amacı, aşağıda listelenen bu hataları düzeltmenizdir. Ayrıca, takılırsanız size yardımcı olacak sayfanın alt kısmında ipuçları da vardır.
Hataları düzeltemezseniz ve sorgulama dosyalarını projenizden silmek istiyorsanız, Proje penceresinde  Assets > Challenge 2'ye sağ tıklayın ve Sil'i seçin.
İyi şanlar!

**Adım 3: Köpeklerin Ekranın Üst Kısmında Üretilmesi**
 
Topların ekranın üst kısmından üretilmesini sağlayın


**Adım 4: Oyuncu köpekler yerine yeşil toplar üretiyor**
 
Oyuncunun köpekleri üretmesini sağlayın.
 
**Adım 5: Köpeğin yakınında herhangi bir yerde toplar yok ediliyor.**
 
Toplar sadece bir köpekle doğrudan temas halindeyken imha edilmelidir.

**Adım 6: Ekranın dışında hiçbir şey yok olmuyor**
 
Toplar ekranın altından çıktıklarında, köpekler ekranın sol tarafından çıktıklarında imha edilmelidir.

**Adım 7: Sadece bir tür top üretiliyor**
 
Top 1, 2 ve 3 rastgele oluşturulmalıdır

**Adım 8: Bonus: Üretilme aralığı her zaman aynıdır**
 
Üretilme aralığını 3 saniye ile 5 saniye arasında rastgele bir değer yapın

**Adım 9: Bonus: Oyuncu boşluk tuşunu "spam" yapabilir**
 
Oyuncunun yalnızca belirli bir süre geçtikten sonra yeni bir köpek doğurmasına izin verin

**Adım 10: Hints**

**Topların ekranın üst kısmından üretilmesini sağlayın**
İpucu - Spawn Manager nesnesine tıklayın ve “Ball Prefab” dizisine bakın.

**Oyuncunun köpekleri üretmesini sağlayın**
İpucu - Player nesnesine tıklayın ve “Dog Prefab” değişkenine bakın

**Toplar sadece bir köpekle doğrudan temas halindeyken imha edilmelidir.**
İpucu - Köpek prefabindeki kutu çarpıştırıcısına göz atın

**Toplar ekranın altından çıktıklarında, köpekler ekranın sol tarafından çıktıklarında imha edilmelidir.**
İpucu - DestroyOutOfBounds komut dosyasında, lowerLimit ve leftLimit değişkenlerini, büyüktür ve küçüktür işaretlerini ve hangi konumun (x,y,z) test edildiğini iki kez kontrol edin

**Top 1, 2 ve 3 rastgele oluşturulmalıdır**
İpucu - SpawnRandomBall() yönteminde, yeni bir rastgele int dizin değişkeni bildirmeli ve ardından bu değişkeni Instantiate çağrısına dahil etmelisiniz.

**Bonus - Üretilme aralığını 3 saniye ile 5 saniye arasında rastgele bir değer yapın**
İpucu - SpawnRandomBall yönteminde spawnInterval değerini 3 ile 5 saniye arasında yeni bir rastgele sayıya ayarlayın
















