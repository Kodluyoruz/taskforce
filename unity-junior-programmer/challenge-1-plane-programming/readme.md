## Mücadeleye Genel Bakış:
Gökyüzündeki engellerin etrafında bir uçağı uçurmak için sürüş simülasyonunda öğrendiğiniz becerileri kullanın. Uçağın eğimini yukarı ve aşağı kontrol etmek için yukarı ve aşağı oklardan kullanıcının girdisini almanız gerekecek. Ayrıca, görüşte tutabilmek için kameranın uçağı takip etmesini sağlamanız gerekecek.
 
Meydan Okuma Sonucu:
●   	Uçak sabit bir hızla ileri doğru hareket eder.
●   	Yukarı/aşağı okları uçağın burnunu yukarı ve aşağı yatırır
●   	Kamera uçarken uçağın yanından takip ediyor

Dosya ve assetlere [erişebilirsiniz.](https://drive.google.com/file/d/18cPHefVnu5Ekhyhl_x4UWsUqCzKVQBGX/view?usp=sharing)

### Adım: 1. Meydan Okumaya Genel Bakış
- Prototip 1 projenizi açın
- İndirmek için tıklayın, sıkıştırılmış klasörü çıkarın ve ardından .unitypackage'i projenize aktarın
Bunu nasıl yapacağınızı unutursanız, bkz. Ders 1.1, 2. adım
- Proje Penceresi > Varlıklar > Meydan Okuma 1 > Talimatlar klasöründe, meydan okumayı tamamlamak için bir kılavuz olarak Meydan Okuma 1 - Sonuç videosunu kullanın
 
### Adım 2: Uyarı
Meydan okumayı projenize aktardığınızda, hataları olması gerekir.
Meydan okumanın amacı, aşağıda listelenen bu hataları düzeltmenizdir. Ayrıca sayfanın alt kısmında, takılırsanız size yardımcı olacak ipuçları da bulunmaktadır.
Hataları düzeltemezseniz ve sorgulama dosyalarını projenizden silmek istiyorsanız, Proje penceresinde Varlıklar > Meydan Okuma 1'e sağ tıklayın ve Sil'i seçin.
İyi şanlar!
 
 
### Adım 3: Uçak geriye doğru gidiyor
- Uçağın ileri gitmesini sağlayın
Adım 4: Uçak çok hızlı gidiyor

- Uçağı yönetilebilir bir hıza kadar yavaşlatın
 
### Adım 5: Uçak otomatik olarak eğiliyor

- Uçağı yalnızca kullanıcı yukarı/aşağı oklara basarsa yatırın
### Adım 6: Kamera uçağın önünde

- Uçağın yanında olacak şekilde yeniden konumlandırın
### Adım 7: Kamera uçağı takip etmiyor

- Kameranın uçağı takip etmesini sağlayın
### Adım 8: Bonus: Uçağın pervanesi dönmüyor

- Uçağın pervanesini döndüren bir komut dosyası oluşturun
### Adım 9: İpuçları

**Uçağın ileri gitmesini sağlayın**
- İpucu: Vector3.back bir nesneyi geriye doğru hareket ettirir, Vector3.forward ise ileri gitmesini sağlar

**Uçağı yönetilebilir bir hıza kadar yavaşlatın**
- İpucu: Bir değeri Time.deltaTime ile çarparsanız, 1x/kare'den 1x/saniyeye değişecektir.

**Uçağı yalnızca kullanıcı yukarı/aşağı oklara basarsa yatırın**
- İpucu: PlaneController.cs'de Update()'de verticalInput değeri atanır, ancak bu değer aslında Rotate() çağrısında hiçbir zaman kullanılmaz

**Uçağın yanında olacak şekilde yeniden konumlandırın**
- İpucu: Kameranın konumu için X=30, Y=0, Z=10'u ve kameranın dönüşü için X=0, Y=-90, Z=0'ı deneyin

**Kameranın uçağı takip etmesini sağlayın**
- İpucu: FollowPlane.cs'de, ne düzlem ne de ofset değişkenlerine bir değer atanmaz - kameranın denetçisinde düzlem değişkenini atayın ve kodda offset = new Vector3(30, 0, 10) değerini atayın

**Bonus - Pervaneyi döndürün**
- İpucu: Uçağın bir "Pervane" alt nesnesi var - yeni bir "SpinPropellerX.cs" komut dosyası oluşturmalı ve her kareyi Z ekseni etrafında döndürmesini sağlamalısınız.
 
 
### Adım 10: Daha da fazla zorluk mu istiyorsunuz?
İsterseniz, ana prototipinize Kolay'dan Uzman'a kadar zorluk derecesinde özel bonus özellikler eklemeye çalışarak kendinize daha da meydan okuyabilirsiniz.
 

Bu ekstra bonus mücadeleleri tamamen isteğe bağlıdır. İlgilenmiyorsanız ve sadece kursa devam etmek istiyorsanız, bu adımı tamamlandı olarak işaretlemeniz ve bir sonraki eğitime geçmeniz yeterlidir.
Eğer ilgileniyorsanız, kontrol edin [Bonus Özellik eğitimi](https://learn.unity.com/tutorial/bonus-features-1-share-your-work) ve öğrenmeye devam etmek için işiniz bittiğinde buraya geri dönmeyi unutmayın!
