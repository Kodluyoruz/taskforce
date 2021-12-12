## Adım 2: Uyarı

Meydan okumayı projenize aktardığınızda, hataları olması gerekir.

Meydan okumanın amacı, aşağıda listelenen bu hataları düzeltmenizdir. Ayrıca sayfanın alt kısmında, takılırsanız size yardımcı olacak ipuçları da bulunmaktadır.

Hataları düzeltemezseniz ve sorgulama dosyalarını projenizden silmek istiyorsanız, Proje penceresinde Varlıklar > Meydan Okuma 3'e sağ tıklayın ve Sil'i seçin.
İyi şanslar!
 
### Adım 3: Oyuncu balonu kontrol edemez
- Oyuncu boşluk çubuğuna bastığında balon yukarı çıkmalıdır
 
### Adım 4: Arka plan yalnızca oyun bittiğinde hareket eder
- Arka plan başlangıçta hareket etmeli, oyun bittiğinde durmalı
 
### Adım 5: Hiçbir nesne oluşturulmaz
- Her birkaç saniyede bir bomba veya para nesneleri oluşturun
 
### Adım 6: Havai fişekler balonun yanında görünür
- Havai fişek gösterisini balonun konumunda yapın
 
### Adım 7: Arka plan düzgün şekilde tekrarlanmıyor
- Arka planın sorunsuz bir şekilde tekrarlanmasını sağlayın
 
### Adım 8: Bonus: Balon çok yüksekte yüzebilir
- Oyuncunun balonunu çok yükseğe uçurmasını engelle
 
### Adım 9: Bonus: Balon yerin altına düşebilir
- Balonun zeminden sekiyormuş gibi görünmesini sağlayın ve ekranın altından çıkmasını önleyin. Bu olduğunda da bir ses efekti olmalı!
 
### Adım 10: İpuçları
- **Oyuncu boşluk çubuğuna bastığında balon yukarı çıkmalıdır**

İpucu - Oynatıcının katıBody değişkeninde bir “NullReferenceExcepton” hatası var - GetComponent<> yöntemi kullanılarak Start()'ta atanması gerekiyor

- **Arka plan başlangıçta hareket etmeli, oyun bittiğinde durmalı**

İpucu - MoveLeftX.cs'de, oyun bitmemişse nesneler yalnızca sola çevirmelidir

- **Her birkaç saniyede bir bomba veya para nesneleri oluşturun**

İpucu - "Yöntemi çağırmaya çalışılıyor: SpawnManagerX.PrawnsObject çağrılamadı" diyen bir hata mesajı var - yazım önemli

- **Havai fişek gösterisini balonun konumunda yapın**

İpucu - Havai fişek parçacığı Player'ın bir alt nesnesidir - ancak konumunun yine de aynı konumda ayarlanması gerekir

- **Arka planın sorunsuz bir şekilde tekrarlanmasını sağlayın**

İpucu - RepeatWidth değişkeni, yüksekliğinin yarısı değil, arka plan genişliğinin yarısı olmalıdır

- **Bonus - Oyuncunun balonunu çok yükseğe uçurmasını önleyin**

İpucu - Balonun DüşükYeterli olup olmadığını kontrol etmek için bir boolean ekleyin, ardından oyuncunun yalnızca bu boolean doğruysa yukarı doğru kuvvet eklemesine izin verin

- **Bonus - Balonun yerden sekiyormuş gibi görünmesini sağlayın ve ekranın altından çıkmasını önleyin. Bu olduğunda da bir ses efekti olmalı!**

- İpucu - Balonun yerdeki nesneyle çarpışıp çarpışmadığını test etmenin bir yolunu bulun, ardından çarparsa yukarı doğru bir itme kuvveti ekleyin
 
### Adım 11: Daha da fazla zorluk mu istiyorsunuz?

İsterseniz, ana prototipinize Kolay'dan Uzman'a kadar zorluk derecesinde özel bonus özellikler eklemeye çalışarak kendinize daha da meydan okuyabilirsiniz.
 
 
Bu ekstra bonus mücadeleleri tamamen isteğe bağlıdır. İlgilenmiyorsanız ve sad ece kursa devam etmek istiyorsanız, bu adımı tamamlandı olarak işaretlemeniz ve bir sonraki eğitime geçmeniz yeterlidir.
Eğer ilgileniyorsanız, kontrol edin Bonus Özellik eğitimi ve öğrenmeye devam etmek için işiniz bittiğinde buraya geri dönmeyi unutmayın!
