## Nesne yönelimli programlamanın prensipleri

Bu eğitimde, nesne yönelimli programlamanın paradigmalarını ve onun dört ilişkili prensiplerini öğreneceksiniz.

Bu eğitimin sonunda,:

- Encapsulation tanımlama
- Inheritance tanımlama
- Polymorphism tanımlama
- Abstraction tanımlama
- OOP’nin temelleri nasıl birlikte organize ve etkili kod oluşturabileceği hakkında açıklama
yapabileceksiniz.

### Adım 1: Genel Bakış
Programlama konusunda daha fazla pratik kazandıkça, sonunda kodun daha etkili bir şekilde yazılabileceğinden şüphelendiğiniz durumları belirlemeye başlayacaksınız. Belki de bir projeye daha fazla script eklerken kendinizi kod satırlarını kopyalayıp yapıştırırken veya değişkenler üzerindeki koruma düzeylerini birden çok kez değiştirirken buldunuz. Spesifik durumdan bağımsız olarak, bu gözlemler daha iyi bir programcı olmanın önemli bir parçasıdır. — saf kod işlevselliğinin ötesinde düşünüyorsunuz ve kodunuzun kullanılabilirliğini düşünüyorsunuz.

Kodun kullanılabilirliğini iyileştirmenin birçok yolu vardır ve hatta en iyi yaklaşım hakkında birçok farklı görüş vardır! Bu, yeni programcılar için çok zor olabilir.Deneyim kazanmanın en iyi yolu, bu yaklaşımları kendiniz denemektir. Başlamanıza yardımcı olmak için size en popüler programlama paradigmalarından (veya kalıplarından) birini göstereceğiz: **nesne yönelimli programlama.**

### Adım 2 - Nesne yönelimli programlama nedir?
Nesne yönelimli programlama (OOP), birbiriyle ilişkili yöntemlerin ve değişkenlerin, bir nesne (OOP'de “nesne”) olarak adlandırılan şeyi oluşturmak için birlikte gruplandırıldığı bir programlama modelidir.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/principles-object-oriented-programming/figures/JrProg_C.4_image1.png)

Alt text: Bir nesne için basit bir kod: değişkenlerden ve metodlardan oluşan  public Rabbit sınıfı

Veriyi nesneler içerisinde organize tutmanın bir çok avantajı var. Kodun neyi başarmaya çalıştığını anlamak için kodu daha anlaşılır kılar. Yukarıdaki örnekte, Rabbit nesnemizin fiziksel görünümünü tanımlayan birkaç değişkeni ve nasıl hareket edebileceğini tanımlayan bir yöntemi olduğunu görebiliriz. Burrow adında ayrı bir sınıf açıp havuç yemek ve burun kıvırmak için Tavşanla ilgili bir dizi metod keşfettiyseniz kafa karıştırıcı olurdu.

Nesneler ayrıca kodunuzun erişilebilirliğini kontrol etmenizi sağlar, bu da projelerinizi oluştururken bir başkasının (hatta kendinizin!) yanlışlıkla kodunuzu bozma olasılığını azaltacağınız anlamına gelir. Ayrıca, kodunuzun farklı bölümlerini daha kolay yeniden kullanabilecek ve başka bir amaca uygun hale getirmek için kullanabileceksiniz.

Her projenin üzerinde çalışan en az iki programcı olduğunu unutmayın: siz ve bundan altı ay sonra, yaptığınız şeyi nasıl veya neden yaptığınızı hatırlamayacağınız zaman. Nesne yönelimli programlama, kodunuzu daha okunaklı hale getirecek ve kendi iyiliğiniz için ve projeniz üzerinde çalışabilecek diğer programcılar için bozulmasını zorlaştıracaktır.

Genellikle OOP'nin sütunları olarak adlandırılan nesne yönelimli programlamanın dört ana ilkesi vardır. Onlar: **abstraction, encapsulation, inheritance ve polymorphism.** Nesne yönelimli programlamayı başarılı bir şekilde kullanmak için sadece bu dört prensibi öğrenmeli ve uygulamalısınız! Bu sütunların her birini daha sonra ayrıntılı olarak öğreneceğiz, ancak şimdilik bunları yüksek düzeyde gözden geçirelim.

### Adım 3: Dört Sütun

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/principles-object-oriented-programming/figures/JrProg_C.4_image2.png)

Alt metin: Abstraction, Encapsulation, Inheritance ve Polymorphism ile soldan sağa etiketlenmiş, arka arkaya dört sütunun görüntüsü

**Abstraction**, diğer programcıların göreceği karmaşık kodu scriptlerden kaldırma ve yalnızca diğer programcıların gerçekten ihtiyaç duyduğu işlevselliği ortaya çıkarma işlemidir. Ayrıntıları "abstract yaptığınızda", yinelenen kodu azaltır ve en kullanışlı metodlara kolay erişim sağlarsınız. Abstraction’ın amacı, kodunuzu olabildiğince temiz ve diğer programcıların (veya kendinizin!) kullanması için basit tutmaktır. Yukarıdaki Rabbit örneğimizde, Hop metodu abstraction için harika bir örnek olacaktır. Hop metodu olmadan, bir programcı Rabbit’in hareket etmesini isterse, RigidBody'sine erişecek ve hızını, sıçrama yüksekliğini vb. ayarlayacak bir kod yazması gerekirdi. Hop yöntemiyle, tüm bu yönler abstract hale getirilerek programcının Tavşan'ın nasıl zıplaması gerektiğine değil ne zaman zıplaması gerektiğine odaklanmasına izin verir.

**Encapsulation**, abstraction’a benzer, çünkü kapsayıcı amacı programcıyı kod karmaşıklığından ayırmaktır, ancak burada odak noktası daha çok erişebilirlik biçimindeki kod güvenliğidir. Encapsulation, size diğer programcılar için kodlama araçları sağlar ve yalnızca sizin değişkenlerinizi ve yöntemlerinizi amaçlandığı şekilde kullanmalarını sağlar. Encapsulated kodda, diğer programcılar değişkenlerin değerlerini veya nesnelerin özelliklerini kolayca değiştiremezler. Diğer scriptlerin kodunuza erişebileceği tüm farklı yolları hesaba katmak imkansızdır, bu nedenle yalnızca amaçlandığı gibi çalışabilmesi için oluşturduğunuz şeyi encapsulate etmek çok daha iyidir. Örneğin, Rabbit’in  kulak tipi duyma kabiliyetini etkilediğini varsayalım. Bir kere bu değer atandıktan sonra değiştirilmemeli. Değerin korunduğundan emin olmak için onu private olarak ayarlasınız ki diğer scriptlerin erişmesini engellersiniz.

**Inheritance**, alt sınıflar olarak adlandırılan diğer sınıfların oluşturulabileceği bir ana sınıf oluşturma işlemidir. Alt sınıf, ana sınıfın veya üst sınıfın tüm özelliklerini otomatik olarak alabilir. Bu, iki sınıfın da kullanması gereken kodların tekrar yazılmasını azaltır. Örnek olarak, Bunny isminde yeni bir sınıf oluşturmak istediğimizi düşünelim. Rabbit sınıfı gibi sabit veya sarkık kulakları var, özel bir rengi olan kürkü var ve sıçrayabiliyor. Inheritance olmadan, gerçekten de daha önce yazdığınız tüm kodları kopyalayıp yeni sınıfa yapıştırmak zorundasınız. Inheritance ile sadece Rabbit sınıfına genişletmelisiniz, var olan fonksiyonalite Bunny sınıfı tarafından erişilebilir olur. Bunny sınıfı, Bunny özelinde Bunny yemeği yemek gibi özellikler geliştirebilir.

**Polymorphism**, inheritance kullanmanın en kullanışlı yönlerinden biridir. Üst sınıftan miras alınan koda alternatif fonksiyonalite oluşturmanıza izin verir. Örnek olarak, Bunny alt sınıfımız evcil bir Rabbit’i temsil eder. Rabbit’in yapabildiği kadar sıçrayabilir ama Bunny, vahşi atasından biraz daha yavaş olmalıdır. Polymorphism ile Hop metodunun içeriğini geçersiz kılabilir ve Bunny için eşsiz olan özel kodları yazabilirsiniz. Metod çağrısı yine aynı olacaktır ancak çağrıldığı varlığa göre doğru kod çalışacaktır.

### Adım 4 - Görevlerdeki nesne yönelimli programlama
Bazı şeylerin tanıdık geldiğini düşünüyorsanız, haklısınız! Bu süreçte kodunuza OOP prensiplerini uygulamış olmalısnız. Bu görevin geri kalan kısmında çalışırken, projeniz için yeni işlevler yazarken hangi sütunu uygulayabileceğinizi düşünmeye çalışın. Bir sonraki görevde, kodunuzu yinelemenin ve iyileştirmenin yollarını ararken her bir sütunu derinlemesine inceleyeceğiz.


### Adım 5 - Sıradaki adımlar
Nesne yönelimli programlama var olan tek programlama paradigması olmadığını belirtmek gerek. Uygulama oluşturmak için birçok yaklaşım var ve Unity’de yaptığınız her şey için nesne yönelimli programlama kullanmayacaksınız. Nesne yönelimli programlama ve aslında tüm programlama kalıpları yalnızca alet çantanızdaki birer alettirler, bazıları bir şeyi diğerinden daha iyi yapsa da, gerçek anlamda üstün bir paradigma yoktur. Karşılaştığınız zorluk için en uygun aracı seçmeyi hiçbir zaman unutmayın Bununla birlikte, nesne yönelimli programlama iyi yapılandırılmıştır ve yeni programcılar için harika bir araçtır. Sonraki görevlerde ilerledikçe, bu temel kavramlar hakkındaki bilginizi arttıracaksınız.

Bir sonraki eğitimde, projeye başlama zamanı! Kullanıcının iki sahne arasında hareket edebilmesi ve uygulamadan çıkabilmesi için sahne akışını uygulayacak ve düğmeleri yapılandıracaksınız.








