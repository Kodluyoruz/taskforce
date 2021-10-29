# Unity Hub’ı Öğrenmeye Başla
Bu öğrenme projesinde, bu yolda kullanacağınız ilk Unity projesini oluşturacaksınız. Yol boyunca Unity Hub, Unity Editor ve Paket Yöneticisi hakkında bilgi edinecek ve bunları daha rahat kullanacaksınız.

Bu öğrenme projesinin sonunda şunları yapabileceksiniz:

- Projeler oluşturmak ve yönetmek için Unity Hub'ı kullanın
- Unity Editor'ün pencerelerini tanımlayın.
- Yeni 3D GameObjects oluşturun.
- Unity dönüştürme araçlarını kullanarak Sahne görünümünde 3B nesneleri taşıyın, döndürün ve ölçeklendirin.
- Görünümünüzü değiştirmek için bir sahnede gezinin.
- Paket Yöneticisini kullanarak Unity'nin işlevselliğini Paketler ile geliştirin.


Bu patikaya başlamadan önce ihtiyacın olan tüm eğitimi sana verecektir. Unity Hub, Unity Editor ve Package Manager’ı kullanmak için hızlı bir tur alacaksın, böylece bu özellikleri ileride kullanabileceksin. Bu eğitimin sonunda şunları yapabiliyor olacaksın:

- Explain the role of Unity Hub in creating and managing projects.
- Unity Hub’ın projeleri yaratırken ve yönetirken nasıl bir rolü olduğunu açıklayabilmek.
- Explain the sections of the Hub interface.
- Hub arayüzünün bölümlerini açıklayabilmek.
- Identify versions of the Unity Editor by version number.
- Unity Editor versiyonlarını versiyon numarasına bakarak ayırt edebilmek.
- Install versions of the Unity Editor.
- Unity Editor’ın farklı versiyonlarını indirebilmek.
- Review the templates available for projects.
- Proje yaratmak için var olan şablonları inceleyebilmek.
- Create a new Unity project with your chosen Unity version and template.
- Seçtiğin Unity versiyonu ve şablonu ile yeni bir Unity projesi oluşturabilmek.


**Aşama 1: Genel bakış**

Unity Hub, oluşturduğun projeleri ve Unity Editor'ün sürekli gelişen sürümlerini yönetmen için önemli bir araçtır. Bu eğitimde yeni bir proje başlatmak ve görevleri tamamlamak için projeyi yapılandırmak için Hub’ı kullanacaksın. Ayrıca Hub’ın önemli özelliklerinin gösterildiği bir tura katılacaksın.

**Aşama 2: Unity Hub’ı Keşfet**

Hub bir çok Unity aracını ve kaynağını bir araya getirip güncel kalmanı ve organize olmanı sağlar.

Henüz açık değilse Unity Hub'ı aç. Unity Hub'ın ana menüsünü göreceksin. Aşağıda açıklanan sekmelerin her birine hızlıca bir göz at.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/get-started-with-the-unity-hub/figures/Foundations_CwU_2.1.3.0_HubDefault.png)
Unity Hub varsayılan görünümü

**Project sekmesi**

Unity'de, tıpkı ofis uygulamalarını kullanarak birden çok belgede veya grafik yazılımı kullanarak birden çok görüntüde çalışmak gibi birden çok projede çalışacaksın. **Projeler sekmesi,** yeni projeler oluşturup içe aktaracağın ve mevcut projeleri yöneteceğin yerdir.

**Learn sekmesi**

Learn sekmesi, Unity'nin eğitim kaynaklarına anında gidebileceğin yerdir. Öne çıkan öğrenme deneyimleri ve belirli becerilerle ilgili eğitimleri görmek için Öğren sekmesine bakman yeterli. 

**Community sekmesi**

Community sekmesi, daha geniş Unity topluluğu ile iletişim kurabileceğin çeşitli yerleri listeleyen hızlı bir başvuru kaynağıdır. 


**Install sekmesi**

Motor geliştikçe Unity'nin yeni sürümlerini kurman gerekecek. İndirmeler sekmesi, bu yüklemeleri Hub'da yöneteceğin ve yapılandıracağın yerdir. 


**Hub tercihleri ve hesap ayarları**

Hub'ın ana ekranında iki ekstra kontrol vardır:

1. **Ayarları (dişli simgesi)** seçmek, Unity Hub için **Tercih ayarlarını** açar.
2. **Baş harflerinizi** seçtiğinizde Unity ID'niz için bir hesap menüsü açılır.

**Aşama 3: Unity sürümlerini tanımlayın**

Unity Editor her zaman değişiyor ve gelişiyor ve çeşitli sürümler ve yapılar sürekli olarak yayınlanıyor. Unity Hub'da Düzenleyici'nin birçok sürümünü yönetebilirsiniz. İki farklı Unity sürümü türü vardır:

- Long-Term Support (LTS) sürümü
- TECH Stream releases, alpha ve beta sürümü

Genel bir kural olarak, Unity projeniz için en son LTS sürümünü kullanmalısınız.

Aşağıdakileri içeren farklı bir sürüm kullanmak isteyebileceğiniz bazı durumlar vardır:

- Yalnızca bir TECH akışı sürümünde bulunan özellikleri kullanma.
- Halihazırda farklı bir sürümde devam etmekte olan ortak bir projeye katılmak.

Unity ekibinin üyeleriyle bunları videoda daha ayrıntılı olarak inceleyelim.

Sürüm numaraları esas olarak yıldan ve küçük bir sürüm numarasından oluşur: 1, 2 veya 3. Yılda iki TECH akışı sürümü (2021.1 ve 2021.2) ve bir Uzun Vadeli Destek sürümü (2021.3 LTS).


**Not:** 2018 ve 2019'da üç TECH akışı sürümü ve bir LTS sürümü vardı.

Unity Hub'da, 2021.2.6f1 gibi bir yapı numarasına sahip sürüm numaralarını göreceksiniz. Yapı numarasındaki harfler aşağıdakileri belirtir:

- Alpha (a)
- Beta (b)
- Son sürüm için aday (rc)
- Son sürüm (f)

**Aşama 4: Hub'ınıza bir Unity yüklemesi ekleyin**

Unity'yi ilk kurduğunuzda, muhtemelen en son LTS sürümünü yüklemeniz için yönlendirildiniz. Bir seferde tipik olarak iki LTS sürümü mevcuttur. Alıştırma olarak, bu yüklemelerin Hub'da nasıl göründüğünü görebilmek için ek bir LTS sürümü yüklemeyi deneyin:

1. Yüklemeler sekmesine gidin. Hangi sürümü yüklediğinize dikkat edin. 
2. **Ekle**'yi seçin ve mevcut "Resmi Yayın İzinleri"ne göz atın. 
3. Sahip olduğunuzdan farklı bir LTS sürümü seçin ve yükleyin.

Güncel adım adım rehberlik için bu talimatlara ve [Unity sürümünün yüklenmesiyle ilgili sorun giderme ipuçlarına bakın.](https://learn.unity.com/tutorial/project-setup-processes#60ed7a3fedbc2a001f71f1aa)

**Aşama 5: En son yüklemenize bir modül ekleyin**

Modüller, Unity sürümü kurulumuna ekleyebileceğiniz ek bileşenlerdir. Bunlar genellikle Unity ile uygulamalar oluşturabileceğiniz Android veya iOS gibi çeşitli platformlar için destek içerir.

Bu yolda, web'de oynanabilir uygulamalar yayınlamanıza izin veren WebGL kullanarak projeler oluşturacaksınız. Bu modülü ekleyelim:


1. Unity Hub'ı açın ve **Installs** sekmesini seçin. 
2. En güncel LTS kurulumunuzu bulun ve üç noktalı simgesini seçin. 
3. **Modül Ekle'yi** seçin. 
4. Listeyi kaydırarak **WebGL Build Support'u** bulun ve seçin. 
5. Devam etmek için **İLERİ**'yi seçin ve modülü kurulumunuza ekleyin.


Ek rehberliğe ihtiyacınız varsa, [kurulu bir Unity sürümüne modül eklemeyle ilgili güncel talimatlara bakın.](https://learn.unity.com/tutorial/project-setup-processes#60ed7a4cedbc2a002096b758)

**Aşama 6:Şablonlar nelerdir?**

Unity'yi kullandıkça, birçok proje oluşturmanız olasıdır. Projeleriniz, 2D veya 3D gibi genel formatlarında ve kalite ve performans standartlarını karşılamak için gereken teknolojide büyük farklılıklar gösterebilir.

**Şablonlar**, yaygın en iyi uygulamalara dayalı önceden seçilmiş ayarlar ve özellik setleriyle çeşitli biçimlerde "başlangıç" Unity projeleridir. Bazı şablonlar, Unity'yi ilk kurduğunuzda karşılaşmış olabileceğiniz Microgame şablonları gibi örnek projeler ve öğreticiler bile içerir.

Unity'nin her sürümünün kendi şablonları vardır. Yeni bir proje oluşturduğunuzda bu şablonları kullanacaksınız. Unity'yi öğrendikçe, çeşitli türler hakkında daha fazla şey öğreneceksiniz.

Bunlar hakkında daha fazla bilgi edinmek için Proje Şablonları'ndaki [Unity Manual](https://docs.unity3d.com/Manual/ProjectTemplates.html) konusuna bakın.


**Aşama 7:Yeni bir proje oluştur**

Artık Unity kurulumu ve bir şablon kullanarak yeni bir proje oluşturmaya hazırsınız.

1. Projeler sekmesine gidin. 
2. WebGL oluşturma desteğine sahip Unity sürümünü seçmek için **YENİ** düğmesinin yanındaki açılır menüyü kullanın. 
3. Bir sonraki ekranda **3D Şablonu** seçin. 
4. Projenize “Essentials 3D project” adını verin 
5. İsterseniz bu proje için konumu değiştirin, ancak şimdilik konumu olduğu gibi bırakmakta bir sakınca yoktur. 
6. **OLUŞTUR**'u seçin.


Güncel, adım adım rehberlik için, Kurulum eklemede sorun yaşıyorsanız, yeni bir Unity projesi oluşturmaya ilişkin bu adım adım [talimatlara](https://learn.unity.com/tutorial/project-setup-processes#60f6aedeedbc2a7e96802196) bakın.

Unity Editor yeni projenize açılacaktır. Unity Hub kapanacak.


**Aşama 8: Sonraki adım**

Hub'da bir proje oluşturdunuz ve Unity Editor önünüzde. Yeni projenizde oluşturmaya başlamak için bir sonraki eğitime geçin!





