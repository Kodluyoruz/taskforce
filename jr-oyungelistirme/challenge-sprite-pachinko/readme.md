# Challenge: Sprite pachinko

Yeni becerilerinizi test etme zamanı! Bu meydan okuma ödevinde, Sprites kullanarak pachinko tarzı bir etkileşim yaratacaksınız. Nereye indiğini görmek için bir daire (veya ne istersen) bir "iğne" (diğer Sprite'lar) ızgarasından geçireceksin.
Bu Görevin gerekliliklerini tamamlamak için 2D projenizi bu eğitimdeki galeriye gönderin. (Başkalarıyla paylaşabilir veya gizli tutabilirsiniz.)

**Aşama 1: Genel Bakış**
 
Bu meydan okumada, Sprites kullanarak kendi Sahnenizi oluşturacaksınız. Bu zorluğu karşılama sürecinde şunları yapacaksınız:
 
- Yeni bir 2B Sahne oluşturun.
- Yeni Sprite'lar oluşturun.
- Sahne görünümünde 2B ve/veya 3B alanda gezinin.
- Sprite'ları taşıyın, döndürün ve ölçeklendirin.
- Ana Kamerayı hareket ettirin ve döndürün.
- Sprites'a bir RigidBody 2D Bileşeni ekleyin.
- Sprite'lara Çarpıştırıcı Bileşeni ekleyin.
- Oyun görünümünde oyununuzu test edin.

**Aşama 2: Sahnenizi Oluşturun**

Bu meydan okumada, buna benzer basit bir pachinko tarzı oyun oluşturun:

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/challenge-sprite-pachinko/figures/B.5.4-1.png)
Sahne görünümünde görüntülenen bir pachinko tarzı oyun kurulumu

Aşağıda birkaç talimat verilmiştir, ancak yaratıcı kısım tamamen size kalmış.
- Önceki öğreticide yüklediğiniz Sprite'ları veya kendi projelerinizden Sprite'ları kullanın.
- Her Sprite'a fiziksel özellikler kazandırmak için RigidBody 2D ve Çarpıştırıcı Bileşenlerini kullanın.
- Şapkalar ve zemin düzlemleri gibi nesneleri öne taşımak için Denetçi penceresindeki Katmanda Sırala özelliğini kullanın. Bu nesneler için "Katmanda Sırala" özelliğinin 1 olarak ayarlanması, her bir nesneyi ileriye doğru hareket ettirecek ve topun geride kalmasına izin verecektir.
**İpucu**: Bir Sprite'ı yerinde dondurmak için RigidBody 2D Bileşeninin Kısıtlamalar bölümünü kullanın.
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/challenge-sprite-pachinko/figures/B.5.4-3.png)
RigidBody bileşenindeki Dondur seçeneği
- İyi bir bakış açısı bulmak için Ana Kamerayı konumlandırın.
- Sahneyi test etmek için çalıştırın ve top oluşturduğunuz pachinkodan geçene kadar gerekli ayarlamaları yapın.
- Farklı şekillerde daha fazla düşen Sprite eklemeyi deneyin. Diğer şekillerde 2D Çarpıştırıcılarla deneyler yapın.
- Sahneyi benzersiz bir şekilde kendinize ait kılmak için öğrendiğiniz diğer becerileri uygulayın.


[Unity projenizin bir WebGL derlemesini oluşturmak ve yayınlamak için bu adımları izleyin.](https://learn.unity.com/tutorial/creating-and-publishing-webgl-builds)















