## Aşama 2: Uyarı
Meydan okumayı projene aktardığında, **hataları olması gerekir.**

Meydan okumanın amacı, aşağıda listelenen bu hataları düzeltmendir. Ayrıca, takılırsan sana yardımcı olacak ipuçları da sayfanın alt kısmında bulunmaktadır.

Hataları düzeltemezsen ve meydan okuma dosyalarını projenden silmek istiyorsan, Project penceresinde Assets > **Challenge 5'e** sağ tıkla ve Delete'i seç.

İyi şanslar!

**Aşama 3: Zorluk butonları dağınık gözüküyor**
 
Butonlardaki metni yatay ve dikey olarak ortala
 
**Aşama 4: Yiyecekler çok çabuk yok ediliyor**

Yiyecekler, fare dokunduğunda değil, yalnızca oyuncu tıkladığında yok edilmelidir
 
**Aşama 5: Skor “score” kelimesiyle değiştiriliyor**

Değer, “Score:”dan sonra görüntülenecek şekilde her zaman “Score:__” yazmalı

**Aşama 6: Kaybettikten sonra yeniden başlamanın bir yolu yok **

Ekrandaki Restart butonunun oyunda görünür olmasını sağla 

**Aşama 7: Zorluk butonları zorluğu değiştirmiyor**

spawnRate hep çok hızlı. Easy’ye tıkladığında spawnRate daha yavaş olmalı, Hard’a tıkladığında spawnRate daha hızlı olmalı.

**Aşama 8: Bonus: Oyun sonsuza kadar gidebilir**

Tam sayılarla (yani 59, 58, 57, vb.) 60'tan geriye sayan ve 0'a ulaştığında oyunu bitirme sekansını tetikleyen bir "Time: __" görüntüsü ekle.


**Aşama 9: İpuçları**

**Butonlardaki metni yatay ve dikey olarak ortala**

İpucu - Hierarchy’de button objectlerinden birini genişletirsen, içinde "Text" objectini görürsün - bu "Text" objectinin özelliklerini düzenlemen gerekir.

**Yiyecekler, fare dokunduğunda değil, yalnızca oyuncu tıkladığında yok edilmelidir**

İpucu - OnMouseEnter(), farenin bir nesnenin collider’ına ne zaman girdiğini algılar - OnMouseDown(), farenin bir nesnenin collider’ına ne zaman tıkladığını algılar

**Değer, “Score:”dan sonra görüntülenecek şekilde her zaman “Score:__” yazmalı**

İpucu - Skor metnini ayarladığında, “Score:” kelimesini ve gerçek skor değerini eklemen (birleştirmen) gerekir

**Ekrandaki Restart butonunun oyunda görünür olmasını sağla** 

İpucu - GameOver() yönteminde yeniden başlat butonunun yeniden etkinleştirildiğinden emin ol

**spawnRate hep çok hızlı. Easy’ye tıkladığında spawnRate daha yavaş olmalı, Hard’a tıkladığında spawnRate daha hızlı olmalı.**

İpucu - Butonların scriptinden Game Manager scriptine aktarılan hiçbir bilgi (veya parametre) yok, bir zorluk parametresi uygulaman gerekiyor.

**Tam sayılarla (yani 59, 58, 57, vb.) 60'tan geriye sayan ve 0'a ulaştığında oyunu bitirme sekansını tetikleyen bir "Time: __" görüntüsü ekleyin.**

İpucu - “Unity Count down timer C#”yi Google’la. “Time.deltaTime” çıkarmayı ve yalnızca tam sayıları görüntülemek için Mathf.Round() yöntemini kullanmayı içerecektir


**Aşama 10: Daha çok meydan okuma mı istiyorsun?**

İstersen, ana prototipine, Kolaydan Uzmana kadar zorluk derecesinde değişen özel bonus özellikler eklemeye çalışarak kendine daha da meydan okuyabilirsin.

Bu ekstra bonus mücadeleleri tamamen isteğe bağlı. İlgilenmiyorsan ve sadece kursa devam etmek istiyorsan, bu adımı tamamlandı olarak işaretle ve bir sonraki eğitime geç.

Eğer ilgileniyorsan, Bonus Özellik eğitimine göz at ve işin bittiğinde öğrenmeye devam etmek için buraya geri dönmeyi unutma!
