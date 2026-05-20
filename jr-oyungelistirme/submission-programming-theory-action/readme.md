## Programlama teorisi iş başında

Artık nesne yönelimli programlamanın temellerini ve bunların nasıl uygulandığını anladığınıza göre, bunları yepyeni bir projede uygulamaya hazırsınız. Bu aynı zamanda bir versiyon kontrol deposunda dallanma ve birleştirme alıştırması yapmak için iyi bir fırsattır.

Adım 1 Bu görev güncellendi!
Bu görevi, siz bakmıyorken yenilememiz durumunda, lütfen bu sunumu denemeden önce aşağıdaki içeriği tamamladığınızdan emin olun:
 
- Görev— [Junior Programmer:Sahne Akışını ve Verileri Yönetin (Junior Programmer: Manage scene flow and data)](https://learn.unity.com/mission/5f751af7edbc2a0022cdbbb6)
- [Nesne yönelimli programlamada soyutlama (Abstraction in object-oriented programming)](https://learn.unity.com/tutorial/abstraction-in-object-oriented-programming)
- [Nesne yönelimli programlamada kalıtım(miras) ve polimorfizm (Inheritance and polymorphism in object-oriented programming)](https://learn.unity.com/tutorial/encapsulation-in-object-oriented-programming)
- [Nesne yönelimli programlamada kapsülleme (Encapsulation in object-oriented programming)
- Sorunları belirlemek için profil kodu (Profile code to identify issues)](https://learn.unity.com/tutorial/profile-code-to-identify-issues)

### Adım 2 Bu görev güncellendi!
Önceki eğitimlerde, nesne yönelimli programlamanın dört sütununu ve bunların nasıl uygulandığını öğrendiniz:
- **Soyutlama**: Tekrarlanan ayrıntıları veya bilgileri “soyutlayarak” yinelenen kodu azaltmak.
- Kapsülleme: Verileri "kapsülleme" ve bu verileri bir sınıfta birlikte manipüle eden ve onu diğer sınıflar tarafından kötüye kullanılmasına karşı koruyan yöntemler.
- **Kalıtım**: Üst sınıflardan davranış türeyen (veya “miras alan”) alt sınıflar.
- **Polimorfizm**: Yöntemlerin çok sayıda ("çoklu") biçime dönüştürülmesi ("dönüştürme") (yani, yöntem aşırı yüklemesi ve yöntemi geçersiz kılma).
 
Bu sunum görevinde, koddaki bu sütunların her birini gösteren sıfırdan yeni bir proje yaratacaksınız.
 
Kodlamaya başlamadan önce programınızın mimarisini yüksek dikkatle planlayın. Bu arada, versiyon kontrol yazılımını kullanarak dallandırma ve birleştirme kodu alıştırması yapma fırsatınız olacak.
 
Bu challenge kolay olmayacak, ancak tamamladığınızda daha düşünceli, stratejik bir programcı olacaksınız!


Başarılı bir sunum şunları içerecektir:
- Projenizin GitHub reposuna(depo) bağlantı, commit mesajları ve en az iki dal(branch) içeren birden çok commiti gösteren bir bağlantı
- Soyutlamanın gösterilmesi (gereksiz ayrıntıları soyutlayan üst düzey yöntemler)
- Kalıtımın gösterilmesi (parent/child sınıflar)
- Polimorfizmin gösterilmesi (method geçersiz kılma veya aşırı yükleme)
- Kapsüllemenin gösterilmesi (get ve set)


### Adım 3 Yeni bir repo oluşturun ve ilk commitinizi yapın
Teorik programlama yapılarına fazla karışmadan önce, projenizin versiyon kontrolü için doğru şekilde kurulduğundan emin olun.
 

- Unity için “Programming-Theory-Repo.”  gibi bir adla yapılandırılmış yeni bir repo oluşturun.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/submission-programming-theory-action/figures/JrProg_D.S_image1.png)

Alt text: GitHub Masaüstünden Ad “Programming-Theory-Repo” olarak ayarlanmış ve Git Ignore açılır menüsü Unity olarak ayarlanmış yeni bir Depo penceresi oluşturun.

- Deponuzda “Programming Theory Project” gibi yeni bir boş 3D Unity projesi oluşturun.
- Projeniz oluşturulduktan sonra, depoya bir ilk committe bulunun.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/submission-programming-theory-action/figures/JrProg_D.S_image2.png)

Alt text: Özet "initial commit" olarak ayarlanmış ve Açıklama "empty 3d project on Unity 2020LTS " olarak ayarlanmış Github Desktop'ın commit paneli

Artık yeni bir versiyon kontrol deposunda yedeklenmiş boş bir Unity projeniz olmalıdır.

Yukarıdaki görevlerden herhangi birinin nasıl yapılacağına dair bir hatırlatıcıya ihtiyacınız varsa, önceki sunumdaki adımlar(  [steps in the previous submission](https://learn.unity.com/tutorial/submission-data-persistence-in-a-new-repo#60b7cec1edbc2a00200b00e3) ) daha ayrıntılı.

### Adım 4 Projenizi Tasarlayın
Projeniz ve deponuz kullanıma hazır olduğunda, projeniz için nesne yönelimli programlamanın dört sütununu göstermenize izin verecek bir konsept bulmak için biraz zaman ayırın.
 
Bu projenin gerçek bir tam teşekküllü projeden ziyade bir prototip olabileceğini unutmayın. İlkel şekiller kullanabilir veya hatta tamamen metin tabanlı olabilir. Boş bir tuvalle de başlamanız gerekmez – Code ile Ekleyi tamamladıysanız, prototiplerden veya zorluklardan birindeki varlıkları yeniden kullanabilirsiniz. Amaç, sıfırdan görsel bir şaheser yaratmak değil - sadece OOP sütunlarını: soyutlama, kapsülleme, kalıtım ve çok biçimlilik. gösteren yaratıcı bir şey bulmaktır.

![figures]()

**Alt text:** Soyutlama, Kapsülleme, Kalıtım ve Polimorfizm ile soldan sağa etiketlenmiş, arka arkaya dört sütunun görüntüsü.

Konseptinizi geliştirirken, fikirlerinizi bir tasarım belgesinde veya proje özetinde özetleyin ve izleyin. Kod ile Ekleyi tamamladıysanız, Kişisel Proje laboratuvarlarınızda kullandığınız şablondan ilham alın( [Personal Project labs.](https://learn.unity.com/tutorial/lab-1-personal-project-plan?uv=2020.3&courseId=5cf96c41edbc2a2ca6e8810f&projectId=5caccdfbedbc2a3cef0efe63) ). Az önce üzerinde çalıştığınız Kaynak Yönetimi projesinin tasarım özetinden de yararlanabilirsiniz(  [design brief](https://connect-prd-cdn.unity.com/20210602/7105725f-6cb4-4171-a399-ba1b485a7e96/Project_Brief.pdf?_gl=1*wjdq4t*_ga*NDI3MDM1NDEuMTU5MjI0OTM3NA) ). Belgeniz madde işaretli bir taslak, eskizler, diyagramlar içerebilir - fikirlerinizi düzenlemenize ve yinelemenize en iyi ne izin verirse.

Tabii ki, normal proje geliştirme sürecinde, proje özelliklerinizi asla programlama kavramlarını gösterme ihtiyacına dayandıramazsınız! Tersi olurdu: programlama kavramlarına duyulan ihtiyaç proje özellikleri tarafından yönlendirilir. Ancak, öncelikleri tersine çevirmek eğlenceli bir tasarım mücadelesi sunuyor! Bu dört programlama konseptini kullanan bir projeyi nasıl tasarlayabilirsiniz? Sütunları aşağıdaki sırayla düşünmek en yararlı olabilir:

**Kalıtım – nesnelerinizi seçin**

Beyin fırtınanıza başlamak için, davranışları daha genel bir nesneden türeten hangi nesneler düşünebilirsiniz? Diğer nesnelerin alt türleri olan hangi nesneleri düşünebilirsiniz? Örneğin:
- Hayvan → Kedi / Köpek
- Araç → Uçak / Araba / Tekne
- Ekmek kızartma makinesi → Temel ekmek kızartma makinesi / Lüks ekmek kızartma makinesi / Premium ekmek kızartma makinesi

Bunlar, kodunuzda kalıtımla uygulayabileceğiniz parent/child ilişkilerinin yalnızca birkaç örneğidir. Bu sütun hakkında daha fazla ayrıntı için devralma eğitimini inceleyin ( [inheritance tutorial](https://learn.unity.com/tutorial/inheritance-and-polymorphism-in-object-oriented-programming) ).
 
Tasarım belgenizde veya proje özetinizde:
Proje konseptiniz için başlangıç noktası olarak hizmet etmek istediğiniz nesneleri not edin.

**Polymorphism - davranışlarınızı seçin**

Projeniz için kullanabileceğiniz nesnelerin türlerine ve alt türlerine karar verdikten sonra, bu nesnelerin programınızda gerçekleştirebileceği davranış türlerini ve bu davranışların nesne alt türüne bağlı olarak nasıl "değişebileceğini" düşünün. Örneğin:
- Tüm hayvanlar bir Jump() işlevine sahip olabilir, ancak bir kedinin bir köpekten farklı atlama yetenekleri olabilir.
- Tüm araçların bir Move() işlevi olabilir, ancak bir uçak her üç boyutta da hareket eder ve geriye doğru hareket edemez.
- Tüm ekmek kızartma makinelerinin bir Toast() işlevi olabilir, ancak birinci sınıf ekmek kızartma makinesinin özel bir "simit" ayarı da olabilir.

Bildiğiniz gibi polimorfizm aynı adı taşıyan methodların farklı parametre tipleriyle aşırı yüklenilerek birçok forma sahip olması (“poly” + ”morflar”) anlamına da gelir. Bu methodlardan birinin alabileceği farklı parametre girişlerini de düşünebilirsiniz. Örneğin, bir Jump() işlevi, atlamanın maksimum yüksekliğini [Jump(float maxHeight)] veya ona uygulanan kuvveti [Jump(Vector3 jumpForce)] alabilir.

Bu sütun hakkında daha fazla ayrıntı için polimorfizm eğitimini inceleyin.( [polymorphism tutorial](https://learn.unity.com/tutorial/inheritance-and-polymorphism-in-object-oriented-programming) )

Tasarım belgenizde veya proje özetinizde:
Uygulamanızda programlamak istediğiniz işlev veya davranış türlerini listeleyin.

**Kapsülleme – verilerinizi seçin**

Kapsülleme, bir sınıftaki verileri kötüye kullanılmaması ve uygulamanızı bozmaması için korumakla ilgilidir. Diğer sınıfların bunları almasına veya ayarlamasına izin verirken, hangi verileri bu şekilde korumak istediğinizi düşünün. Örneğin:
- Bir hayvan için adını get veya set etmeniz gerekebilir, ancak adın çok uzun olmasını  önleyin.
- Bir araç için yılını get veya set etmeniz gerekebilir, ancak yılın negatif bir sayı   olmadığından emin olun.
- Bir ekmek kızartma makinesi için ekmek türünü get veya set etmeniz gerekebilir, ancak bunun geçerli bir ekmek seçeneği olduğundan emin olun.

Bu sütunla ilgili daha fazla ayrıntı için kapsülleme eğitimini inceleyin( [encapsulation tutorial](https://learn.unity.com/tutorial/encapsulation-in-object-oriented-programming) ).

Tasarım belgenizde veya proje özetinizde:
Projenizde kapsüllemek istediğiniz işlev veya veri türlerini kaydedin.

**Soyutlama – Fonksiyonlarınızı ekleyin**

Soyutlama, muhtemelen kodlamaya başladıktan sonra uygulanması en kolay kavram olacaktır, ancak başlamadan önce projenizde olmasını istediğiniz bazı üst düzey işlevleri düşünmek faydalı olabilir. Örneğin:  

- Hayvanlar için Walk(), Jump(), Talk() fonksiyonları olabilir
- Araçlar için TurnOn(), Move(), ve TurnOff() fonksiyonları olabilir.
- Tost makinası için Start(), SetLevel(), ve Cancel() fonksiyonları olabilir.
- 
Bu sütun hakkında daha fazla ayrıntı için soyutlama eğitimini inceleyin( [abstraction tutorial](https://learn.unity.com/tutorial/abstraction-in-object-oriented-programming) ).

Tasarım belgenizde veya proje özetinizde:
Kodunuzda yeniden kullanım için yararlı olabilecek bazı üst düzey işlevlere dikkat edin.

Şimdi projenizde neyi başarmak istediğinize dair bir fikriniz olmalı - hala çok kavramsal gelse bile - ve fikirlerinizi bir belgeye kaydetmelisiniz.

Projeniz için ne yapacağınız konusunda hala kendinizi kaybolmuş hissediyorsanız, işte size son derece basit bir proje fikri:
- Bir temel “shape” sınıfından (kalıtım) türetilen üç farklı renkli şekil vardır.
- Her şekle tıkladığınızda, geçersiz kılma DisplayText() methodu (polimorfizm) aracılığıyla ekrana farklı bir şey yazdırır.
- Her şekil, adı veya rengi gibi get ve set (kapsülleme) ile özellikler olarak depolanan verileri içerir.
- Kod, daha yüksek düzeyli methodlarla (soyutlama) yinelenen kodu azaltacak şekilde düzenlenir.

### Adım 5 Başlık ekranınız için bir dal(branch) oluşturun ve değişiklikleri commit yapın
Özellikle birden fazla geliştiriciyle çalışırken, branchlar versiyon kontrolü için inanılmaz derecede faydalıdır. Geliştiriciler genellikle yeni bir özelliği uygulamaya başladıklarında yeni bir branch başlatırlar ve deney yaparken diğer geliştiricilerin koduna müdahale etmek istemezler.

Yeni özelliği uyguladıktan sonra branchı tekrar ana branchta birleştirecek ve ardından ortaya çıkan birleştirme çakışmalarıyla ilgileneceksiniz. Birleştirme çakışmalarının ne olduğunu hatırlamıyorsanız, Veersiyon kontrolünü ayarlama eğitimine( [Set up version control](https://learn.unity.com/tutorial/set-up-version-control) ) geri dönebilirsiniz.

Bu işlemden kurtulmak için projenizin başlık ekranı için yeni bir branch oluşturun ve birleştirin. Uygulamanız bir başlık ekranı istemiyorsa, bunun yerine projenizin başka bir basit özelliğini kullanın.

- Deponuzda yeni bir branch oluşturun ve buna "title-screen" gibi bir ad verin. Yeni bir branchın nasıl oluşturulacağından emin değilseniz GitHub belgelerindeki talimatları izleyin ( [instructions in the GitHub documentation](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/managing-branches#creating-a-branch) ). Bu dalda, başka bir geliştiricinin çalışmasına müdahale etmeden yeni özelliğinizi güvenle deneyebileceksiniz.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/submission-programming-theory-action/figures/JrProg_D.S_image4.png)

Alt text: Ad alanındaki metin “title-screen” olarak ayarlanmış bir GitHub Masaüstü penceresi oluşturun.

Şimdi “Mevcut branch”ın yeni branchınıza ayarlandığını görmelisiniz.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/submission-programming-theory-action/figures/JrProg_D.S_image5.png)

Alt text: GitHub Desktop'taki mevcut branch açılır menüsü title-screen”.olarak ayarlandı “
- Yeni branchta başlık ekranınızı geliştirin. Projenizde, sunumunuz için basit bir başlık ekranı oluşturun. Seçtiğiniz proje konseptiyle alakalı olmalı ve aşağıdaki örnekte olduğu gibi çok basit olmalıdır.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/submission-programming-theory-action/figures/JrProg_D.S_image6.png)

**Alt text:** Bir kullanıcının adını girmesi için bir başlık ve bir metin alanı içeren örnek proje başlığı ekranının oyun görünümü.
Çalışmanızı geliştirirken ve kaydederken, versiyon kontrol yazılımınızın Changes panelinde branchınıza yapılan tüm düzenlemeleri ve eklemeleri görmelisiniz.

- Bu branchtaki değişiklikleri ana dal ile birleştirmek için yaptığınız değişiklikleri taahhüt edin. Versiyon kontrol yazılımında bir özet ve açıklama ekleyin, ardından [branch-name] olarak commit et’i seçin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/submission-programming-theory-action/figures/JrProg_D.S_image7.png)

**Alt text:** Özet "title-screen" ve Açıklama "added text title,added entry box for name" olarak ayarlanmış Github Desktop'ın Commit paneli.
Değişiklikleriniz artık branchınıza bağlı ve ana branch ile birleştirilmeye hazır.
### Adım 6 - Branchınızı ana branch ile birleştirin
Başlık ekranınız (veya diğer özelliğiniz) tamamlandığında, artık deneysel branchınızı ana geliştirme branchıyla birleştirmeye hazırsınız.

- Ana şubeye dönmek için, ana şubeyi seçmek için Mevcut Şube açılır menüsünü kullanın.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/submission-programming-theory-action/figures/JrProg_D.S_image8.png)

**Alt text:** GitHub Desktop'ta ana dalın vurgulandığı mevcut dal açılır menüsü.

Ana şubeye geri döndükten sonra, Unity sahnenizdeki tüm değişikliklerin kaybolduğunu göreceksiniz. Endişelenmeyin, yeni özelliğinizi uygulamaya başlamadan önce projenizin durumuna geri döndüğünüz için bu beklenir. Özellik, büyük birleşmeden sonra projede yeniden görünecek.

Son commitinizden bu yana değişiklik yaptıysanız, şubede "Değişiklikleri bırak" mı yoksa ana şubeye "Değişiklikleri getir" arasında seçim yapmanız istenebilir. Bu, şubenizde henüz taahhüt edilmemiş değişiklikleriniz olduğu anlamına gelir. İptal edin, tüm değişikliklerin şubenizde yapıldığından emin olun ve ana şubeye tekrar geçmeyi deneyin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/submission-programming-theory-action/figures/JrProg_D.S_image9.png)

**Alt text:** GitHub masaüstünde dalda değişiklikler olduğuna dair bir uyarı görüntüleyen ve kullanıcıya geçiş yapmadan önce değişiklikleri şubede bırakma veya değişiklikleri yeni şubeye getirme seçeneği sunan Branch değiştir penceresi.

- Branch açılır menüsünden Ana branchla birleştirmek için bir branch seçin'i seçin. Ardından, diğer branchınızı seçin ve [branch-name] ana ile birleştir'i seçin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/submission-programming-theory-action/figures/JrProg_D.S_image10.png)

Alt text: GitHub Desktop'ta " Choose a branch to merge into main" düğmesi vurgulanmış olarak mevcut şube açılır menüsü

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/submission-programming-theory-action/figures/JrProg_D.S_image11.png)

**Alt text:** GitHub Desktop'ta, kullanıcının 1 commiti başlık ekranından ana branch ile birleştirmek istediğini onaylayan birleştirme penceresi. Pencerenin altındaki Birleştir düğmesi vurgulanır.
Unity sahnenize döndüğünüzde, branchınızda yaptığınız değişikliklerin artık ana brancha yansıdığını göreceksiniz. Başarılı bir birleştirme için tebrikler!
### Adım 7  Sunumunuz üzerinde çalışmaya devam edin

Artık reponuzda daha rahat dallanma ve birleştirme yaptığınıza göre, projenizi bu teknikleri kullanarak geliştirmeye devam etmelisiniz.

Unutmayın, projeniz kodunuzda OOP'nin dört sütununun her birini göstermelidir, bu kolay bir başarı olmayacaktır. En az birkaç saat ayırmayı planlayın; bunların çoğu, büyük olasılıkla sorun giderme ve Google'da gezinme için harcanacaktır.

### Adım 8  Projenizi Gönderin
OOP'nin dört sütununu projenize uyguladıktan sonra, lütfen projenizi gönderin ve paylaşın! Yine de yapmadan önce, oyunu baştan sona test ettiğinizden emin olun - veya daha da iyisi, bir arkadaşınıza veya aile üyenize oyun testi yaptırın.
Başarılı bir sunum şunları içerecektir:
- Projenizin GitHub deposuna bir bağlantı, commit mesajları ve en az iki branch ile birden fazla commit gösterir.
- Kalıtımın gösterilmesi (parent/child). Nerede uygulandığını belirtmek için koda “// INHERITANCE” yazan bir yorum ekleyin.
- Polimorfizmin gösterilmesi (method geçersiz kılma veya aşırı yükleme). Nerede uygulandığını belirtmek için koda “// POLİMORFİZM” yazan bir yorum ekleyin.
- Kapsüllemenin gösterilmesi (se ve get). Nerede uygulandığını belirtmek için koda “// ENCAPSULATION” yazan bir yorum ekleyin.
- Soyutlamanın gösterilmesi (gereksiz ayrıntıları soyutlayan üst düzey yöntemler). Nerede uygulandığını belirtmek için koda “// ABSTRACTION” yazan bir yorum ekleyin.

Lütfen projenizin ekran görüntüsünü alın ya da bize yol gösteren bir ekran kaydı yapın, ardından yaptıklarınızı paylaşmak için buraya gönderin.

En az bir diğer içerik oluşturucunun gönderimi hakkında yorum yapmanızı önemle tavsiye ederiz. Meydan okumayı başarıyla tamamladılar mı? Projeyle ilgili neyi beğeniyorsunuz? Eklemeyi düşünebilecekleri harika bir yeni özellik ne olabilir?


