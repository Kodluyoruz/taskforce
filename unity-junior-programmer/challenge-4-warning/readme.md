## 2. Adım: Uyarı
 
Meydan okumayı projenize aktardığınızda, hataları olması gerekir.

Meydan okumanın amacı, aşağıda listelenen bu hataları düzeltmenizdir. Ayrıca sayfanın alt kısmında, takılırsanız size yardımcı olacak ipuçları da bulunmaktadır.

Hataları düzeltemezseniz ve sorgulama dosyalarını projenizden silmek istiyorsanız, Proje penceresinde Varlıklar > Meydan Okuma 4'e sağ tıklayın ve Sil'i seçin.

İyi şanlar!
 
 
### 3. Adım: Bir düşmanı vurmak onu size geri gönderir
 
- Bir düşmana vurduğunuzda, onu oyuncudan uzaklaştırmalıdır.
 
 

### Adım 4: Oyuncu bir güçlendirme aldığında yeni bir dalga ortaya çıkar
 
- Tüm düşman topları kaldırıldığında yeni bir dalga ortaya çıkmalı
 
 

### Adım 5: Güçlendirme asla kaybolmaz
 
- Güçlendirme yalnızca belirli bir süre devam etmeli, sonra kaybolmalıdır
 
 

### Adım 6: Her dalgada 2 düşman ortaya çıkar
 
- 1. dalgada bir düşman, 2. dalgada iki, 3. dalgada üç düşman vb.
 
 

### 7. Adım: Düşman topları hiçbir yere hareket etmiyor
 
- Düşman topları “Oyuncu Hedefi” nesnesine doğru gitmelidir.
 
 

### 8. Adım: Bonus: Oyuncunun turbo desteğine ihtiyacı var
 
- Oyuncu, boşluk çubuğuna her bastığında bir hız artışı elde etmelidir - ve onu kullandıklarında bir parçacık efekti görünmelidir
 
 

### 9. Adım: Bonus: Düşmanlar asla daha zor olmaz
 
- Düşmanların hızı, her yeni dalgada az miktarda artmalıdır.
 

### Adım 10: İpuçları
 
- Bir düşmana vurduğunuzda, onu oyuncudan uzaklaştırmalıdır.
- 
İpucu - PlayerControllerX.cs'de, oyuncudan bir Vektör almak için [düşman pozisyonundan] [oyuncunun pozisyonundan] çıkarmalısınız - tersini değil

- Tüm düşman topları kaldırıldığında yeni bir dalga ortaya çıkmalı

İpucu - SpawnManagerX.cs'de düşmanCount değişkeninin doğru ayarlanıp ayarlanmadığını kontrol edin

- Güçlendirme yalnızca belirli bir süre devam etmeli, sonra kaybolmalıdır

İpucu - PlayerControllerX.cs'de, PowerupCoolDown Eşyordamı kodu iyi görünüyor, ancak bu eşyordam aslında hiçbir zaman StartCoroutine() yöntemiyle çağrılmaz

- 1. dalgada bir düşman, 2. dalgada iki, 3. dalgada üç düşman vb.

İpucu - SpawnManagerX.cs'de düşmanı ortaya çıkaran for-döngüsü ReligionsToSpawn parametresini kullanmalıdır.

- Düşman topları “Oyuncu Hedefi” nesnesine doğru gitmelidir.

İpucu - EnemyX.cs'de bir hata var: "NullReferenceException: Nesne başvurusu bir nesnenin örneğine ayarlanmadı". PlayerGoal nesnesi hiçbir zaman atanmamış gibi görünüyor.

- Bonus - Oyuncu, boşluk çubuğuna her bastığında bir hız artışı elde etmelidir - ve onu kullandıklarında bir parçacık efekti görünmelidir

İpucu - PlayerController'da, boşluk çubuğuna basıldığında "impuls" kuvveti ekleyen basit bir if ifadesi ekleyin. Parçacık efekti eklemek için önce onu Odak Noktasının alt nesnesi olarak ekleyin.

- Bonus - Düşmanların hızı, her yeni dalgada küçük bir miktar artmalıdır.

İpucu - SpawnManagerX.cs'de düşman hızını izlemeniz ve artırmanız gerekecek. Ardından EnemyX.cs'de bu hız değişkenine başvurun ve Start()'ta ayarlayın.
 

### Adım 11: Daha da fazla zorluk mu istiyorsunuz?
İsterseniz, ana prototipinize Kolay'dan Uzman'a kadar zorluk derecesinde özel bonus özellikler eklemeye çalışarak kendinize daha da meydan okuyabilirsiniz.
 

Bu ekstra bonus mücadeleleri tamamen isteğe bağlıdır. İlgilenmiyorsanız ve sadece kursa devam etmek istiyorsanız, bu adımı tamamlandı olarak işaretlemeniz ve bir sonraki eğitime geçmeniz yeterlidir.
Eğer ilgileniyorsanız, kontrol edin Bonus Özellik eğitimi ve öğrenmeye devam etmek için işiniz bittiğinde buraya geri dönmeyi unutmayın!
