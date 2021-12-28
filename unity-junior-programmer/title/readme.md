## Başlık

Bu eğitimde, gerçek zamanlı 3D deneyim tasarımının temellerini keşfedeceksin.
- Üretimin farklı aşamalarını özetleyeceksin.
- Dijital bir deneyim oluşturmak için temel tasarım sürecini gözden geçiriceksin.
- Gerçek zamanlı 3B deneyim oluşturmaya yönelik ortak yaklaşımları göz önünde bulunduracaksın.
- Belirli bir senaryo için kendi özel tasarım sürecinizi tanımlayacaksın.

### Adım 1: Genel Bakış
Unity gibi gerçek zamanlı 3D motorlar, birinci şahıs nişancı oyunlarından artırılmış gerçekliğin ön saflarında XR deneyimlerine kadar dijital deneyimler oluşturmak için kullanılan araçlardır. Bu deneyimler tam olarak oluşmuyor: kapsamlı tasarım ve geliştirme süreçlerinin sonucudur. Bu öğretici sizi bu süreçlerle tanıştırır, böylece bunları kendi projelerinizde kullanabilirsiniz.

### Adım 2: Deneyim tasarımı ve gerçek zamanlı üretim döngüsü

Tasarım sürecini incelemeden önce, tasarımın [gerçek zamanlı üretim döngüsündeki](https://learn.unity.com/tutorial/the-real-time-production-cycle#5fa45dd6edbc2a0020bc7e41) rolünü göz önünde bulundurmak için bir dakikanızı ayıralım.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/title/figures/JrProg_C.1_image1.png)

Alt metin: Üst üste binen renkli daireler aracılığıyla üretim aşamalarının bulanıklaşmasını gösteren dört üretim aşamasının diyagramı. Üretim Öncesi ve Üretim aşamaları üzerinde yeşil bir daire, Üretim ve Üretim Sonrası aşamaları üzerinde mor bir daire ve bu iki dairenin üst üste geldiği turuncu bir bölüm vardır.

Tasarım esas olarak gerçek zamanlı üretim döngüsünün harmanlanmış ilk üç aşamasında yer alır: üretim öncesi, üretim ve üretim sonrası. Bununla birlikte, tasarımın tüm döngü boyunca önemli bir etkisi vardır. Örneğin, operasyon döngüsü aşamasındaki bulgular sürekli iyileştirme için devam eden tasarım çalışmalarına neden olabilir.

Birçok profesyonel proje, ürün yöneticilerini, tasarımcıları, geliştiricileri ve farklı disiplinlerden test uzmanlarını içeren büyük ekipleri içerir. “Tasarımcı” resmi rolünüzün bir parçası olmasa bile, tasarım sürecini net bir şekilde anlamanız sizin için hala değerlidir. Aslında, tasarımı anlamak, Öğrenme Yollarınızda yönlendirileceğiniz projelerde bile yardımcı olacaktır!

Tasarımın tüm gerçek zamanlı üretim döngüsünü nasıl etkilediği hakkında daha fazla bilgi edinmek için aşağıdaki videoyu izleyin.

### Adım 3: Tasarım süreci: fikir ve araştırma

Dijital bir deneyim tasarlamanın temel süreci, her türlü başka şeyi tasarlamaya benzer. Bu süreci, düşünce ve araştırmadan başlayarak gerçek zamanlı 3D deneyim yaratmaya odaklanarak gözden geçirelim.

**Aşama 1: Bir sorunu tanımlayın veya bir fikir tanımlayın**

Gerçek zamanlı 3D için tasarım normalde üst düzey bir sorun bildirimi veya fikri ile başlar. Bu fikir hedef odaklı olabilir; örneğin, "Mimar müşterimin tasarımlarını 3D olarak görselleştirmesini kolaylaştırmak istiyorum; bu, şu anda denedikleri çözümler tarafından iyi ele alınmıyor." Ya da çok üst düzey bir fikir olabilir; Örneğin, "Çok oyunculu bir taktik RPG oluşturmak istiyoruz.”

Durum ne olursa olsun, bu ilk ifade proje için [Oyun Tasarım Belgesinin](https://learn.unity.com/tutorial/lab-1-personal-project-plan) temeli olmalıdır. Bu, birçok farklı biçim alabilir ve tasarım ve geliştirmeye rehberlik etmek için tek hakikat kaynağı olarak işlev görür.

**Aşama 2: Kullanıcı ve pazar araştırması yapmak**

Bir sonraki aşama, hedef kullanıcıları ve şu anda ihtiyaçlarını karşılamak için mevcut olanları araştırmak için biraz zaman ayırmaktır. Tüm tasarım faaliyetleri, hedef kullanıcıların ihtiyaçları göz önünde bulundurularak başlar; tasarım ve geliştirme süreci, bu ihtiyaçları karşılamanın belirli bir yolunun gerçekleştirilmesidir. 

Sorununuzu çözmek için başka tekliflerin mevcut olup olmadığını veya benzer bir şey olup olmadığını öğrenmek için rekabetçi bir araştırma yapmak önemlidir. Bu size yardımcı olabilir:
- Teknolojik veya başka türlü projenin kapsamını bilgilendirebilecek ilgili kısıtlamaları belirleyin.
- Önerilen projenizin benzersiz değer önerisini, mevcut olanlara kıyasla daha iyi anlayın.

Bu aşamada, farklı yeteneklere sahip veya az temsil edilen kültürlerden gelen insanlar gibi belirli bir alanda yetersiz temsil edilen veya marjinalleştirilenlerin ihtiyaçlarını göz önünde bulundurmak için bir tasarım metodolojisi olan kapsayıcı tasarımı dikkate almak da önemlidir.

**Aşama 3: Kullanıcı kişilikleri oluşturma ve kullanım durumlarını tanımlama**

Kullanıcı araştırması, belirli kullanıcı kişiliklerine kodlanmıştır. Kişiler, kullanıcı araştırmanızda tanımlanan öngörülere dayanarak arketipik hedef kullanıcıların kurgusal profilleridir. Bu kişiler kullanıcı ihtiyaçlarını açıkça tanımlar ve ekibin kullanıcılara odaklanmasını sağlamak için tasarım süreci boyunca kullanılır. Bu çalışmanın bir kısmı, hedef kişilerin ihtiyaçlarının farklı olacağı farklı kullanım durumlarının belirlenmesini de içerebilir.

### Adım 4: Tasarım süreci: kısa ve ilk prototiplerin açıklığa kavuşturulması

Ardından, bu araştırmanın tasarımları geliştirmek ve geliştirme için güçlü bir temel oluşturmak için nasıl kullanıldığını gözden geçirelim.

**Aşama 4:  Özeti ve hedefleri netleştirin**

Bu aşama, tam tasarım çalışmalarına başlamadan önceki son hazırlık aşamasıdır. Bu, belirlenen kullanıcı ihtiyaçlarına göre özeti hassaslaştırmak ve bunları göz önünde bulundurarak hedeflerinizi netleştirmek için bir fırsattır.
Bu süreç, tasarım çalışmalarınız için sıkı bir odaklanma sağlamanıza yardımcı olacaktır.

**Aşama 5: Ön tasarımlar oluşturma**

Ardından, özeti ele almak için ön tasarımlar oluşturulur. Bu, ekibin içinde bulunduğu keşif ve yinelemeli bir tasarım aşamasıdır:

- Örnek tasarımlar oluşturur
- Tanımlanan kullanıcı ihtiyaçlarına ve oyun tasarım belgesine karşı onları daha geniş ekiple değerlendirir
- Tasarımları rafine eder veya yeni bir yönde hareket eder ve ardından döngüyü tekrarlar

Deneyime ve ilgili ekibe bağlı olarak, tasarım çalışmaları birden fazla iş akışına bölünebilir. Örneğin, bir ekip gerçek zamanlı bir deneyim yerine yeni bir telefon tasarlıyorsa, donanım ve işletim deneyimi için ayrı ekiplere ayrılabilir.

Bu tasarım aşaması şunları içerebilir:

- Basit eskizlerden karmaşık şemalara kadar deneyimin görsel temsillerini oluşturma
- Fiziksel veya dijital beyaz tahta kullanarak kullanıcı deneyimi akışını veya dallanma mantığını eşleme
- Kullanıcı arabirimi (UI) wireframe'leri oluşturma
- Konsept sanat ve diğer görsel tasarım eskizlerinin üretilmesi

**Aşama 6: Prototip**

Daha sonra, tasarımlar deneyimin bir veya daha fazla temel prototipini oluşturmak için kullanılır. Yaratıcı veya ekip tarafından kullanılan projeye ve tasarım metodolojisine bağlı olarak, bu aşama ön tasarımların oluşturulmasıyla örtüşebilir.

Ön tasarımlarda olduğu gibi prototip (ler) de tanımlanan kullanıcı ihtiyaçlarına ve oyun tasarımı gereksinimlerine göre değerlendirilir; bu tasarım ve geliştirme süreci boyunca devam eder. Bu aşamada, hedef kullanıcılardan harici kullanıcı geri bildirimi istenebilir veya geri bildirim dahili olarak kalabilir.

### Adım 5: Tasarım süreci: yinelemeli tasarım ve geliştirme

Son olarak, seçilen prototipler tam tasarım ve geliştirme için bir kavram kanıtı olarak kullanılır.

**Aşama 7: Tasarım ve geliştirmenin yinelemeli döngüsünü takip edin**

Prototip (ler) proje karar vericileri tarafından imzalandığında, yinelemeli bir döngü başlar:

- Dizayn
- İnşa etmek
- Test
- Değerlendirmek
- Tasarımı hassaslaştırın

Bu aşama, proje kapsamına ve seçilen tasarım metodolojisine bağlı olarak çeşitli şekillerde düzenlenebilir. Bu aşama boyunca, deneyimin tanımlanmış kullanıcı ihtiyaçlarını karşıladığından emin olmak için düzenli testlerle değerlendirme devam etmektedir.

Ek olarak, deneyim genellikle lansmana hazır olmadan önce kapsamlı iç ve dış testlerden ve kullanıcı geri bildirim döngülerinden geçer.

### Adım 6: Ortak gerçek zamanlı deneyim tasarım ve geliştirme yaklaşımları

Önceki adımlarda özetlenen üst düzey süreç, projenin ve ekibin gereksinimlerine bağlı olarak uygulamada biraz farklılık gösterecektir. Bu farklılıklar bir tasarım ve geliştirme yaklaşımı olarak tanımlanmaktadır. Örneğin, yalnız bir amatör geliştiricinin tasarım ve geliştirme sürecine büyük bir AAA oyun geliştirme ekibinden farklı bir şekilde yaklaşması muhtemeldir. Bu yaklaşımlar farklı olmakla birlikte, tasarım ve geliştirme sürecinin temel ilkeleri aynı kalmaktadır.

Gerçek zamanlı deneyim tasarımında kullanılan bazı yaygın yaklaşımları gözden geçirelim.

**Waterfall yaklaşımı**

Waterfall  yaklaşımı geleneksel yazılım geliştirmede yaygın olarak kullanılır; oyun oluşturmak için daha az yaygındır, ancak bazen oyun dışı gerçek zamanlı deneyim oluşturmada kullanılır. Bu yaklaşımda üretim öncesi tamamlandıktan sonra tasarım ve geliştirme tanımlanmış ve ayrık doğrusal aşamalarda tamamlanır. Bir aşama tamamlandığında ve imzalandığında, aşağıya doğru akan bir şelale gibi bir sonraki aşama başlatılır.

Tasarım ve geliştirmeye yönelik bu yaklaşım, farklı aşamalar arasındaki bağımlılıklar nedeniyle, oluşturulduktan sonra bir şeyleri değiştirmeyi zorlaştırır. Bu sınırlama nedeniyle, aşağıda açıklanan çevik ve karma yaklaşımlar genellikle tercih edilir.

**Agile yaklaşımı**

[Agile tasarım ve geliştirme](https://learn.unity.com/project/agile-development?courseId=5ef12a7eedbc2a0020b2774a) ise yinelemeli bir yaklaşımdır. Deneyimi aşamalı olarak planlamak, oluşturmak ve geliştirmek için işlevler arası ekiplerde belirli özellikler üzerinde çalışmayı içerir. 

Bu, tasarım ve geliştirme ekiplerine daha fazla esneklik sağlayan ve yeni keşiflere ve değişen gereksinimlere uyum sağlamalarını sağlayan çok daha esnek bir metodolojidir. Bu yaklaşımın genellikle hassasiyetten ziyade çevikliği (adından da anlaşılacağı gibi) desteklediği düşünülür, ancak bu tam hikaye değildir: her şey ekibin yaklaşımı nasıl uyguladığına ve tanımlanmış önceliklerinin ne olduğuna bağlıdır.

**Hibrit yaklaşımlar**

Hem çevik hem de şelale unsurlarını kullanan hibrit bir yaklaşım, proje ön üretimi sırasında nispeten doğrusal bir hazırlığa sahip olmayı içerebilir, ancak daha sonra belirli özelliklere odaklanan döngülerde yinelemeli olarak oluşturma ve test etme içerebilir.

**Proje yönetimi ve tasarım yaklaşımları**

Bu metodolojilerin proje yönetimi yönü ve bunları uygulamanıza yardımcı olmak için kullanabileceğiniz araçlar hakkında daha fazla bilgi için [Proje yönetimine giriş ve ekip çalışmasını](https://learn.unity.com/tutorial/introduction-to-project-management-and-teamwork) gözden geçirin.

### Adım 7: Alıştırma: Özel bir tasarım süreci planlayın

Bu eğitimde, gerçek zamanlı deneyimler oluşturmak için kullanılan üst düzey tasarım sürecini gözden geçirmek için zaman ayırdınız ve belirli bir duruma göre özel bir yaklaşım belirlediniz.

Bir dahaki sefere yeni bir projeye başladığınızda, bir Öğrenme Yolu sunumu veya dikkatinizi çeken kişisel bir proje olsun, belirlediğiniz sürece geri dönün. Yeni durumun kısıtlamalarına ne kadar iyi uyduğunu düşünün ve gerekirse ayarlayın. Ardından, proje üzerinde çalışırken tasarım ve geliştirmenize rehberlik etmek ve yapı kazandırmak için kişisel yaklaşımınızı kullanın.

Ne yarattığını görmek için sabırsızlanıyoruz!















