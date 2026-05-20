## 7.5 Veri kalıcılığını uygulayın

Artık bu uygulamada veri kalıcılığını uygulama zorluğuna başlamaya hazırsınız. Elde etmeniz gereken temel özellikler şunlardır:
- Sahneler arasında veri kaydetme: Bir sahnede ayarlanmış bir veri parçası, başka bir sahnede saklanacak ve kullanılacaktır.
- Oturumlar arasında veri kaydetme: çalışma zamanı sırasında ayarlanmış bir veri parçası kaydedilir ve uygulamanın bir sonraki çalıştırılışında kullanılır.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/implement-data-persistence-7-5/figures/JrProg_C.S_image8.png)

**Alternatif metin:** Sahneler arasında veri kalıcı olduğunda, ikinci sahne açıldığında Sahne 1'den Sahne 2'ye aktarılır.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/implement-data-persistence-7-5/figures/JrProg_C.S_image9.png)

**Alternatif metin:** Oturumlar arasında veriler kalıcı olduğunda, uygulama kapatıldığında saklanır ve ikinci sahne açıldığında Sahne 1'den Sahne 2'ye aktarıldığında geri yüklenir.

Bu özellikleri bir uygulamada uygulamanın birçok yolu olsa da, bunları bu özel zorlukta şu şekilde uygulamanızı öneririz:

**Oyuncu adı (sahneler arasında veri kaydetme)**

- Kullanıcının adını girmesini isteyen bir metin giriş alanı ve bir Başlat düğmesi ile oyun için yeni bir Başlat Menüsü sahnesi oluşturun.
- Kullanıcı Başlat düğmesine tıkladığında, Ana oyun sahnesi yüklenecek ve puanın yanında adı görüntülenecektir.

**Yüksek puan (oturumlar arasında veri kaydetme):**

- Kullanıcı oynarken, mevcut yüksek puan, puanı oluşturan oyuncunun adıyla birlikte ekranda görüntülenecektir.
- Yüksek puan geçilirse, bunun yerine yeni puan ve oyuncu adı görüntülenecektir.
- En yüksek puan, oturumlar arasında kaydedilir, böylece oyuncu uygulamayı kapatıp yeniden açarsa, yüksek puan ve oyuncu adı korunur.

**Kendinizi hırslı hissediyorsanız, ek veri kalıcılığı özellikleri de ekleyebilirsiniz. Örneğin:**

- Yüksek puanı görüntüleyen ayrı bir Yüksek Puan sahnesi oluşturun.
- Tek bir puan yerine birden fazla yüksek puan görüntüleyin.
- Kullanıcıların oyunu yapılandırmasına ve bu bilgileri oturumlar arasında kullanmasına olanak tanıyan bir Ayarlar sahnesi oluşturun. 







