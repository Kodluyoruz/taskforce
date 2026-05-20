Eminim birçoğunuza internet nedir? Diye sorsam, bizimle dalga mı geçiyorsun? Diye hayıflanırsınız. Peki o halde soruyorum. Gerçekten internet nedir? 🤔

Bu dersimizde alışkanlıklarımızdan yola çıkarak genel konseptlerin neler olduğunu somut modeller üzerinden öğreniyoruz. Bunlar arasında;

- Ağ nedir?
- İnternet Nedir?
- LAN, WLAN, WAN, Wi-fi kavramları,
- TCP, IP, DNS, Domain Name, Domain Name Server,
- HTTP, Host ve Hosting kavramları,
- Tarayıcı, Web sayfası, Client, Server kavramları

ve çok daha fazlasına değiniyoruz. Eğlenceli bir ders olacağına inanıyorum. Vakit kaybetmeden hemen dersimize geçelim!

# İnternet Nedir?

İnternet, belirli standartlar dahilindeki protokoller aracılığı ile iletişimi sağlayan küresel bir ağdır. Dağıtık sistem mimarisi vardır, bu sayede merkezi değildir, biri tarafından yönetilmez.

## Kaynaklar:
- https://roadmap.sh/guides/what-is-internet
- https://www.youtube.com/watch?v=kHxcf2wK_ck&feature=youtu.be
- https://code.org/

# Fiziksel Elemanlar ve Wifi

İnternette paylaştığımız bilgiler [bit](https://tr.wikipedia.org/wiki/Bit_(bili%C5%9Fim)) formatında gidiyor ve ne kullanırsak kullanalım kaynak her zaman fiziksel bir elemana dayanıyor. 

Bu elektrik, ışığın geçtiği kablo veya modemden yayılan dalgalar olabilir ama ana kaynak elle tutulur oluyor. 

Kullandığımız geleneksel yöntem elektrik, ışık ise fiber olarak hayatımıza girmiş çok daha yüksek hızlara çıkabildiğimiz yeni nesil bir yöntem. 

Wifi'ye bağlandığımızda bilgi havadan geliyor gibi görünse de orada bağlandığımız modem olduğunu unutmamamız gerekli. Bu durumda dalgalar aracılığı ile iletim sağlanıyor.

Bilgi **bit**'e dönüştürülüyor ve fiziksel elemanlar aracılığı ile hedefe ulaşıyor. 

*Burada karşılaştığımız bir terim olan **bant genişliği** ise saniyede gönderebildiğimiz bit sayısını ifade ediyor.* Bant genişliğinin yüksek olması taşıyacağı bit sayısını arttırıyor ve dolayısıyla o kadar hızlı iletim yapabiliyoruz.

Kullandığımız fiziksel elemanların birbirine göre güçlü ve zayıf yanları var. **Bunları aşağıdaki tabloda görebilirsiniz:**

![fiziksel_elemanlar_tablo](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/fiziksel-elemanlar/figures/fiziksel_eleman_tablo.PNG)

## Kaynaklar:
- https://roadmap.sh/guides/what-is-internet
- https://www.youtube.com/watch?v=kHxcf2wK_ck&feature=youtu.be
- https://code.org/

# IP Adres ve DNS'e Giriş

İnternete bağlanan her bir cihazın kendine has bir **IP** *(Internet Protocol)* adresi vardır. 

**IP** adresler sayılardan ve belirli bir formattan oluşur. *Bu adresleri belirleyen sistem önceleri IPv4 sistemi olsa da şimdilerde yerini IPv6 alıyor.* IPv4 ile 32 bitlik bir IP adres uzunluğuna sahipken, IPv6 ile 128 bitlik bir uzunluğa erişti. Bu ise daha fazla cihaza özel adres verilmesini sağladı. 

Siz de kendi bilgisayarınıza ait IP adresini öğrenmek isterseniz *komut satırından(Terminal ekranından)* `ipconfig` yazarak görüntüleyebilirsiniz.**Eğer komut satırı/terminal kavramlarının ne olduğuna uzaksanız [buradaki Terminal Kullanımı](https://app.patika.dev/moduller/visual-studio-code-kullanimi/terminal-kullanimi) dersi içerisinde nasıl açacağınızı ve kullanacağınızı görebilirsiniz.**
Bir web sitesine girmek istediğinizde o servise ait IP adresine bağlanmanız gerekir. Ama kimse Google'a veya Instagram'a bu yolla bağlanmaz. Bunun yerine sitenin adını yani *domain* adresini biliriz. 

Web sitesi adını **DNS** (Domain Name System) sunucuları üzerinde sorgular ve eşleşen IP adres ile iletişim kurarız. Bunu fark etmeden cihazlarımız bizim için yapar ve olumlu sonuç dönüldüğünde siteyi karşımızda görürüz.

Yani *kodluyoruz.org* adresini tarayıcınıza yazdığınızda domain sunucusu üzerinde kodluyoruz'a ait IP adresi (adresleri) aranır ve eşleşen adrese sizi yönlendirir. Bir web sitesi kurmak istediğinizde almanız gereken *domain*'in yaptığı şey de tam olarak budur.



## Kaynaklar:
- https://roadmap.sh/guides/what-is-internet
- https://www.youtube.com/watch?v=kHxcf2wK_ck&feature=youtu.be
- https://code.org/


# Paketler, Yönlendirme ve Güvenilirlik

Bilginin bir cihazdan diğerine gitmesi için illa ki dümdüz bir yola ihtiyacı yoktur. Bu yol karmaşık olabilir. Trafik durumuna göre veri farklı yollardan hedefe ulaşabilir. Bu trafiği **yönlendiriciler(routers)** yönetir.

**Bir örnek verelim:**

Trendyol gibi Türkiye'de üzerinde milyonlarca insanın kullandığı bir e-ticaret sitesini düşünelim. Böyle bir platform genellikle sunucularını tek bir merkezde tutmaz. Bunun yerine İstanbul, Ankara veya farklı şehirler olmak üzere birkaç noktada konumlandırır. **Bunun temelde iki sebebi vardır:**

* Bağlantı isteği gönderdiğiniz sunucu fiziksel olarak ne kadar uzakta olursa o kadar geç bağlanırsınız. Bütün sunucular İstanbul'da olsaydı Hakkari'den birisi istek yolladığında geçikme yaşanabilirdi. Bunun olmaması için Ankara gibi nispeten Türkiye'nin orta noktası olan bir şehirde 2. bir merkez açmak süreci hızlandıracaktır.
* İkinci sebep ise güvenlik ve olası sorunlar. Eğer sunucuları tuttuğunuz yerde bir elektrik kesintisi yaşansa veya başka bir durumdan ötürü cihazlar kapansa kimse istek gönderemezdi. Dolayısıyla bembeyaz bir ekran ile karşılaşırdınız. Bunun olmaması için farklı bir şehirde 2. bir merkez kurulup olası durumlarda trafik o noktaya yönlendirilir.

İşte bu gibi durumları yöneten ve size en yakın sunucu ile iletişim kurmanızı sağlayan şey **routers**'lardır.

**Nasıl çalışır?**

Bilgi bitlere dönüştükten sonra paketler içerisinde hedefe gönderilir. Her paket içerisinde **hedef** ve **kaynak IP adresler** bulunur. Böylelikle nereden geldiği ve nereye gideceği bilgisi karışmaz. Paketler farklı yollardan veya farklı zamanlarda hedefe ulaşabilir. Tüm paketler hedefe ulaştığında birleştirilir ve bilgi bütünleşir.

**Peki paketler hedefe ulaşamazsa ne olur ?**

Bu durumun çözümü olarak yeni bir protokol karşımıza çıkıyor: **TCP** (Transmission Control Protocol). TCP tüm paketlerin geldiğini onaylayana kadar paketleri tekrar tekrar talep ediyor. Tüm paketler geldiğinde ise işlem tamamlanıyor, TCP işlemi onaylıyor.

* Farklı yol seçenekleri(Yönlendiriciler yardım eder)-> Arızaya dayanıklılık, Güvenilirlik, Yedeklilik

* TCP+Yönlendiriciler -> Ölçeklendirilebilirlik

## Kaynaklar:
- https://roadmap.sh/guides/what-is-internet
- https://www.youtube.com/watch?v=kHxcf2wK_ck&feature=youtu.be
- https://code.org/

# HTTP ve HTML'e Giriş

**HTTP** *(HyperText Transfer Protocol)* web sitelerinde iletişimi sağlayan standart protokoldür.

İletişim sırasında çeşitli komutlar ile istekler iletilir. 

**Örneğin:** 

Kullanıcı giriş sayfasına ulaşmak için **GET** isteği gider giriş sayfası gelir, parola ve kullanıcı adını girdikten sonra tamama basıldığında **POST** ile girilen bilgiler sunucuya gönderilir. Bilgiler doğruysa kullanıcıya özel sayfa gelir. *(GET ve POST kavramlarına ileride değineceğiz.)*

*HTML*, bir web sitesinin temel görünümünü oluşturduğumuz dildir. Yazı kalın mı olsun italik mi olsun sağda mı olsun solda mı gibi seçenekler sunar.

İnternette gezinmek, gözetlenme ve onay olmadan değiştirme gibi tehlikeleri barındırır. 

Bilgilerimizin çalınma tehlikesi olduğu için güvenilir olmayan siteler konusunda dikkatli olmalıyız. 

**Bir web sitesini güvenilir yapan nedir ?** 

Öncelikle TLS(Transport Layer Security) ve SSL(Security Sockets Layer) kullanarak güvenli bir kanal oluşturması gereklidir. *HTTPS* (HyperText Transfer Protocol Security) protokolü kullanarak istekleri iletmesini bekleriz. Bu kanalda kullanmak üzere bir **sertifikaya** da ihtiyacı vardır. 

**Peki kullandığımız websitesinin güvenilir bir kanal kullanıp kullanmadığını nasıl anlayacağız ?**

Tarayıcımız ile bir adrese girdiğimizde `http` yerine `https` ile başladığına ve kilit işaretinin olduğuna dikkat etmeliyiz, sertifika olmadığında tarayıcımız uyarı verecektir.

![web_security](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/http-html-giris/figures/web_security.png)

Son dönemde Google `https` kullanmayan ve özellikle bizden bilgi talep eden servisleri göstermeme kararı aldı. Bir web sitesi oluşturduğumuzda `https` sertifikamızın olduğuna emin olmalıyız. 

### Kaynaklar:
- https://roadmap.sh/guides/what-is-internet
- https://www.youtube.com/watch?v=kHxcf2wK_ck&feature=youtu.be
- https://code.org/

# Şifreleme ve Public Key

İki cihaz iletişim kurarken, veriyi olduğu gibi gönderseydi araya biri girip veriyi değiştirebilir ve bize ulaştırabilirdi. Çünkü veri hedefe ulaştığı sürece ufak bir gecikme olduğunu düşünürdük. Bu sebeple veriyi olduğu gibi göndermek yerine şifreliyoruz. 

Bunun için çeşitli yöntemler var ve şifreleme yüzyıllardan beridir kullanılıyor. *Sezar şifreleme* bilenen eski yöntemlerden biri . Bu yöntemde mesajı gönderenin ve alanın bildiği bir anahtar sayı vardır. Mesajdaki her harf ayrı olarak ele alınır ve alfabede anahtar sayı kadar kaydırılır. Örneğin anahtar sayımız 3 olsun ve göndermek istediğimiz mesaj: "Sifreleme".  Aşağıdaki gibi her harfi alfabedeki 3 sıra sonraki harf ile değiştiriyoruz.

S i f r e l e m e  -> V l i u h o h p h 

Sonuç olarak elde ettiğimiz "Vliuhohph" mesajını gönderiyoruz. Alıcı bunu alıp alfabede geriye doğru gidiyor ve mesajı çözüyor. 

![Sezar_3_anahtar](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/internet-sifreleme/figures/Sezar_3_anahtar.gif)

Bu yöntem eskide çok kullanılmış olsa da günümüzde alfabedeki sınırlı harf ve bilgisayarlarımızın işlem gücüyle ile çözülmesi oldukça kolay. Saniyeleri bulmadan sezar şifreleme çözülüyor. Günümüzde **256 bitlik** anahtarlar ile şifreleme yapılıyor. Bu anahtarlar kullanılarak veri değiştiriliyor anlaşılamaz hale geliyor.

**Peki anahtar bizde vardı bununla şifreledik karşı taraf nasıl çözecek ?**

Bu durumu çözmek için de asimetrik şifreleme var.

Asimetrik şifrelemede iki anahtarımız var : genel(public) anahtar ve özel(private) anahtar. Genel anahtar ile ekleme yapılabilir ama özel anahtar kimde ise veriyi o görebilir mantığı vardır. İnternette TLS ve SSL protokollerinde de bu yöntem temel alınır.

Whatsapp'a birisiyle mesajlaşırken gördüğünüz bu uyarı mesajınızın iki taraf arasında şifrelendiğini gösterir.

![whasapp-sifreleme](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/internet-sifreleme/figures/whasapp-sifreleme.png)

## Kaynaklar:
- https://roadmap.sh/guides/what-is-internet
- https://www.youtube.com/watch?v=kHxcf2wK_ck&feature=youtu.be
- https://code.org/
- https://tr.wikipedia.org/wiki/Sezar_%C5%9Fifrelemesi

# Siber Güvenlik ve Suçlar

**En bilinen siber suçlar:**

Virüsler, DDoS ataklar ve oltalama(phishing) yöntemleridir.  

**Virüsler** bilgisayarımızda çoğu şeye erişim sağlayarak dosyalarımız üzerinde işlem yapabilirlerken, **DDoS** ataklarda ise **virüsler** sayesinde ele geçirilmiş bilgisayarlardan bir ordu oluşturularak bir web sitesini aşırı talebe boğma amaçlanır. 

**Bu durumu şu şekilde örneklendirebiliriz.**

Virüsler sayesinde kendi kendine sürüş yeteneğine sahip otomobillimiz ele geçirilir ve virüsü yöneten kişi bu aracı istediği lokasyona yönlendirebilir aynı zamanda bütün bilgilere (resimler, dosyalar, internet geçmişi) erişebilir.

**DDoS**, atağını ise ele geçirilmiş binler hatta milyonlarca aracın aynı cadde üzerine yönlendirilmesi olarak düşünebilirsiniz. Bu sayede o lokasyonda büyük bir trafik sağlanır ve saldırıya maruz kalan sunucu iş göremez hale gelir.

**Oltalama** yöntemi ise çok basit bir dikkatsizlik sonucu oluşur. Ve kandırma yeteneğine bağlıdır. Genellikle kullandığınız bir servisi taklit ederek sizden giriş bilgilerinizi isterler. Eğer bu durumu kontrol etmez ve istenilen bilgileri karşı tarafa verirseniz, bu bilgiler kötü niyetli kişilerin eline geçer.

**Örneğin:**

Mail kutunuza düşen bir emailin bankadan geldiğine inanırsınız. Ve linke tıklayarak giriş bilgilerinizi vererek giriş yaparsınız. O sırada bilgisayar korsanları bilgileriniz ile gerçek sistemden giriş yapabilirler. Bu sebeple izin veren bütün uygulamalarda 2 adımlı doğrulama hizmetini açmanızı ve araya bir katman daha katmanızı öneririz.

Siber suçlar yazılım kaynaklı gibi görünse de çoğu insan kaynaklıdır. Biz ne kadar dikkat edersek saldırıya uğrama ihtimalimiz o kadar azalır.

## Kaynaklar:
- https://roadmap.sh/guides/what-is-internet
- https://www.youtube.com/watch?v=kHxcf2wK_ck&feature=youtu.be
- https://code.org/
# Browsers (Tarayıcılar)

Masaüstünde ve mobil cihazlarımızda birçok tarayıcı var.

Kullanıcıların hangi tarayıcıları tercih ettiğine baktığımızda büyük yüzdeyi **Chrome** alıyor. Bu bilgi bizim için önemli çünkü kodlama yaparken neredeyse pek çok standart aynı olsa da zaman zaman bazı komutlarda tarayıcı davranışları değişiklik gösteriyor ve bu durumları ekstra komutlarla düzenlememiz gerekebiliyor.

**Peki tarayıcılar ne işe yarar?**

Tarayıcılar kullanıcının seçtiği web kaynağını görüntülemek için sunucuya istek yapar ve gelen cevabı kullanıcıya gösterir. Ana görevi budur. Yapılan isteğin cevabı genelde HTML içeriktir ama PDF, görüntü, video gibi farklı içerik tipleri de olabilir. Kaynağın tam konumu kullanıcı tarafından **URI** *(Uniform Resource Identifier)* kullanılarak belirtilir. 

Tarayıcılar yorumlama ve HTML dosya görüntülemede belirli standartlara uyar. Bu standartlar **W3C** tarafından belirlenir. Tarayıcıların kullanıcı arayüzlerinde belirli bir standart olmamasına rağmen genel kullanıcı alışkanlıklarını bozmamak ve de belirli bilgilere ihtiyaç tüm tarayıcılarda ortak olduğu için benzer özellikler içerirler.

**Örneğin:**

Hepsinde adres çubuğu vardır, sayfa yenileme ve işlemin durdurulması için butonlar vardır.

Tarayıcıların ana işlevleri:

- **Kullanıcı Arayüzü:** Ekranda gördüğümüz butonlar, araç çubukları gibi elemanları içeren arayüz.

- **Tarayıcı Motoru:** Rendering motoru ve kullanıcı arayüzü arasında sıraya koyma aksiyonlarını denetler.

- **Rendering Motoru:** Görüntüleme için istek yapılmış içeriği görüntülemeden sorumludur.

**Örneğin:** Bir HTML içeriği için istek yapıldı, gelen içerikte HTML ve CSS çözümlenir ve ekranda görüntülenir.

- **Ağ İletişimi  (Networking):** HTTP istekleri gibi network istekleri için kullanılır. Kullanılan platformdan bağımsız olarak farklı platformlar için farklı uygulamalar kullanılarak çözümler sunulur.

- **Kullanıcı Arayüzü (UI-User Interface)** **Backend:** Combobox ve pencereler gibi basit grafiksel araçları çizmek için kullanılır.  İşletim sistemi kullanıcı arayüz metodları kullanır. Böylelikle platform bağımsız genel bir arayüz ortaya çıkar.

- **JavaScript Yorumlayıcı:** JavaScript kodları ayrıştırılır ve çalıştırılır.

- **Veri Belleği (Data Storage):** Süreklilik (persistence) katmanıdır. Tarayıcı verilerin hepsini lokal olarak depolamak isteyebilir, çerezler (cookies) bu tür verilere örnektir. IndexedDB, localStorage, WebSQL ve FileSystem gibi farklı depolama sistemlerini de tarayıcılar destekler.

Chrome gibi tarayıcılar her sekmede bir tane olacak şekilde birden fazla rendering motoru çalıştırırlar. Her sekme ayrı işlemlerde çalışır. Çok fazla sekme ile çalıştığınızda RAM'inizin şişme sebebi tam olarak budur.

**Tarayıcıların ana bileşenlerinde akış şeması aşağıdaki gibidir:**

![tarayici_bilesenler](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/Browsers/figures/tarayici_bilesenler.PNG)

Rendering motorunun görevi istek yapılmış içeriği ekranda görüntülemektir. Görevinden dolayı tarayıcılar için oldukça kritik bir bileşendir. Varsayılan olarak *XML* ve *HTML* dokümanlarını görüntüler ama eklenti ve uzantılar sayesinde diğer dokümanları da görüntüleyebilir. 

**Örneğin:** 

Pdf dokümanı varsayılan olarak görüntülenmez ama pdf eklentisi ile görüntülenebilir. 

**Farklı tarayıcılar farklı rendering motorları kullanır.**

\- Internet Explorer **Trident**,

\- Firefox **Gecko**,

\- Safari **WebKit**,

\- Chrome ve Opera **Blink**

kullanıyorlar. WebKit, ilk zamanlarında Linux için oluşturulmuş açık kaynak bir rendering motorudur, sonradan Apple tarafından Mac ve Windows desteklemesi için değiştirilmiştir.

![render_motoru_akis](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/Browsers/figures/render_motoru_akis.PNG)

Rendering motoru HTML belgesini aldığında çözümlemeye başlar, belgedeki elementleri içerik ağacı (content tree) olarak adlandırılan ağaçta yer alan DOM  düğümlerine çevirir. 

Motor aynı zamanda hem harici CSS dosyalarını hem de satır içi style elemanlarını da ayrıştırır. HTML'de bulunan görsel talimatlar ile diğer tasarım bilgileri başka bir ağaç olan render ağacını oluşturur. 

**Render ağacı** boyut ve renk gibi görsel özellikleri içeren dikdörtgenler bulundurur. Bu dikdörtgenler ekranda görünmek üzere düzgün sırada bulunurlar.

Render ağacı oluşturduktan sonra düzenleme (layout) işlemi başlar. Bu işlemde düğümdeki elemanlara ekranda nerede görüntüleneceklerine dair tam koordinatlar verilir. Sonraki aşama ise boyama (painting) aşamasıdır. Render ağacındaki her düğüm işlenerek UI (Kullanıcı Arayüzü) backend katmanı kullanılarak boyama işlemi yapılır.

Tüm bu süreç kademeli olarak gerçekleşir. Tarayıcılar daha iyi kullanıcı deneyimi sunmak için olabildiğince hızlı ekrana getirmeye çalışırlar. Bir adım tüm içerik için tamamen bitince diğer adım başlar gibi sıralı bir süreç olduğunu düşünmemek gerekir. İçerik parçalara ayrılır ve bu parçalar için işlem gerçekleşir. 

**Örneğin:** Sayfa gelirken bir anda bütün elemenları görüntülenmesi yerine ilk önce yazıların sonra görsellerin geldiğine şahit olmuşsunuzdur. Bunun sebebi yazının işlemlerden çok daha hızlı geçip süreç bitince de ekrana yansıtılması görseller için ise sürecin tamamlanmamış olmasındandır.

## Kaynaklar:

* https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/#Parser_Lexer_combination

# IP (Internet Protocol)

Bir noktadan diğer noktaya veri iletişimini sağlarken verinin yolculuğunu sağlayan iletişim sistemine network denir. 

**Peki veri nereden nereye gideceğini nasıl bilir?**

Eğer sadece iki cihazı kablo ile bağlasaydık ve veri iletişimi sağlasaydık, verinin kafası karışmazdı ve karşı bilgisayara giderdi. Eğer sistemde verinin çıkacağı bilgisayara başka bir bilgisayar daha bağlasaydık bu sefer hangisine gideceğini nasıl bilecekti?

![](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/IP/figures/hangi_yon.PNG)

**Veri iletişiminin sağlandığı ağda çok fazla cihaz olabilir.** Hepsini fiziksel olarak bağlamamıza gerek yoktur. **Yönlendiriciler(routers)** üzerinden iletişim sağlanır. 

Yönlendiriciler ağdaki karmaşıklığı gidererek ağdaki iletişim için yardımcı olurlar. İnternet büyük bir ağdır ve milyonlarca cihaz bu ağ içinde iletişimdedir. İnternete bağlanırken bir yönlendiriciye bağlanırız ve ulaşmak istediğimiz noktaya kadar yönlendiriciler bizi adım adım götürür. *Tıpkı adres sorduğumuz insanlar gibi bize yardımcı olurlar!*

![internette_iletisim](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/IP/figures/iletisim.PNG)

**Yönlendiriciler** ağ üzerindeki diğer yönlendiricilere veya cihazlara yönlendirme yaparken bir tablo kullanır. Bu gitmek istenilen adrese göre "sağdan git soldan git" diye adres tarif etmek gibidir.

***Aşağıdaki resimde yönlendirme nasıl yapılır basitçe görmek için bir şema var.***

 Burada okların yönü gidilecek tarafı belirtiyor. Üstündeki sayılar ise hedefin adresine göre kara vermemiz için yönlendirme bilgileri, eğer `!` işareti görüyorsak da yanındaki sayı hariç diğerleri kabul demek. 

**Kareler yönlendiricileri, daireler ise cihazları temsil ediyor.**



![network_router](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/IP/figures/network_router_mantigi.PNG)



**Şimdi 1 numaralı cihazdan veriyi 5 numaralı cihaza göndermeye çalışalım.** 

**1**'deki çıkış oku bize diyor ki "Eğer hedefin **1** değilse yönlendiriciye gidebilirsin". Hedefimiz **5** numaralı cihaza gitmek olduğu için kolaylıkla yönlendiriciye gidiyoruz. 

Yönlendiricide iki seçenek bizi bekliyor ve bize "Hedefin **2**'ye gitmek ise yukarıya **3,4,5,6** numaralı cihazlardan birine gitmek ise aşağıya yönlen." diyor. Aşağıdaki ikinci yönlendiriciye yöneliyoruz. Halen hedefimize ulaşamadık yönlendirici bu sefer daha fazla seçeneğe sahip. "Eğer **3**'e gitmek istersen yukarı, **6**'ya gitmek istersen aşağıdaki **6** numaralı cihaza, **4** veya **5** numaralı cihazlardan birine gitmek istersen aşağıdaki diğer yönlendiriciye git" diyor. **3.** yönlendiriciye gittiğimizde ise "**5**'e gitmek istersen **5** numaralı cihaza yönlenebilirsin."  diyor ve hedefimize ulaşıyoruz.

İnternet yukarıdaki şemadan daha karmaşık ama basit hatlarıyla bakıldığında aynı mantığın olduğu görebiliriz. Yukarıda cihazlara net numaralar vermiştik, **internette de IP adresler vardır.** 2 tane IP versiyonu vardır: IPv4 ve IPv6. 

`Ipv4 Adres Örneği: 192.168.1.152`

`IPv6 Adres Örneği:4ggr:1925:5656:7:600:t4tt:tc54:98vt `

*Bilgisayarınızın IP adresini öğrenmek isterseniz bir komut satırı açın (Windows için: Windows+R tuşuna basıp gelen ekranda `cmd` yazabilirsiniz). Komut satırında `ipconfig` yazarsanız çıkan sonuçta IP adresinizi öğrenebilirsiniz.*

Normalde cihazları gerçekten birbirine bağlamış olsak ve yönlendirici kullanmasak *daha hızlı* iletişim sağlayabiliriz. *Ama direkt bağlamak hem maliyetli hem de bakımı zor.* **IP** ile veri gönderirken veri paketlere bölünür. Paketlerin kaybolması gibi durumlarda iletişim kopar. Aşırı fazla paket olması da yönlendiricilerde trafik olmasına yol açabilir. Bu sebeple yavaşlık olur. Ama veriyi tek parça halinde gönderirsek de fazla maliyetlidir.

Yönlendirici ağda iki veya daha fazla seçeneği olduğunda **trafik kontrolü** yapılabilir. Trafik durumuna göre farklı rotalarda önererek veri paketlerinin daha hızlı gitmesini sağlayabilir. Buna **connectionless** *(bağlantı gerektirmeyen)* kavramı denilir. Veriler bir bilgisayardan diğerine belirli bir akış kontrolü olmadan farklı rotalar ile gidebilir.

IP ile veri iletiminin %100 gerçekleşeceğini garanti edemeyiz. Aktarım sırasında hatalar meydana gelirse iletişim gerçekleşmez. Bu yüzden *güvenilmez(unreliable)* bir protokoldür. **TCP** gibi güvenilir bir protokol ile kullanıldığında güvenilir hale gelir.

## Kaynaklar:
- https://www.cloudflare.com/learning/network-layer/what-is-a-network-switch/
- https://www.wpbeginner.com/glossary/ip-address/
- https://www.tutorialspoint.com/internet_technologies/internet_protocols.htm

# TCP (Transmission Control Protocol)

TCP, ağdaki cihazlar arası iletişimi kolaylaştıran bağlantı odaklı(connection oriented) iletişim protokolüdür. IP protokolü ile beraber çalışırlar, genelde TCP/IP olarak beraber görürüz. TCP/IP beraber internetin temel taşlarını oluşturur.

TCP protokolünü diğerlerinden ayıran bağlantının sağlanması konusundaki kaygısıdır. Mesaj gönderileceğinde sorun yaşamamak adına bağlantının varlığından emin olur.

TCP bağlantısı istemci(client) ve sunucu(server) arasında gerçekleşir. İstemci ve sunucu arasında veri alışverişi başlamadan önce 3-way handshake ile bağlantı doğrulanır. Bunun amacı veri gönderimi için güvenilir, veriyi düşürmeyecek bir bağlantı olduğunu kanıtlamak. Bu kanıtlama için standart paketler gönderiliyor. İstemci tarafından SYN biti işaretlenmiş(rastgele işaretleme yapılıyor) paket gönderiliyor. Sunucu paketi aldığında biti bir artırarak, kendi de rastgele bir biti işaretleyerek gönderiyor. İstemci sunucudan gelen paketi aldığında kendi gönderdiğinin bir fazlasını bulduğu için mutlu, demek ki yolda paketi yanlış yere gitmemiş. Bu sefer kendi bitine dokunmadan sunucunun gönderdiği biti bir artırıyor ve tekrar paketi gönderiyor. Paketi alan sunucu da mutlu. İstemci ve sunucuyu mutlu ettiğimizde iletişim başlıyor, artık mesajları gönderebileceğimiz bir bağlantı kanalı oluştu.

![3_way_handshake](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/TCP/figures/3_way_handshake.png)

TCP iki yönlüdür (bidirectional). Yani hem sunucu istemciye mesaj/veri gönderebilir hem de istemci sunucuya mesaj/veri gönderebilir. Veri ise bir bütün halinde karşı tarafa iletilmez, paketler halinde gönderilir. TCP, verinin eksiksiz karşı tarafa gitmesini istediği için önlemler alır. Veri alışverişi sırasında ACK gelmeyen paketlerde (ki bu karşı tarafın mesajı aldım deme yoludur) tekrar paketi gönderir. Veri paketler halinde gönderildiği için gönderirken bir listeye yazar ve ACK geldikçe tamam bunu göndermişiz diyerek listeden siler gibi düşünebilir. Eğer ACK alamazsa ki bu da paket kayboldu demektir, yeniden gönderilecekler listesi tutar ve paket orada yer alır.

Peki bir paketin düştüğünü nasıl anlıyor? Paketi gönderdi, hemen ACK gelmezse tekrar mı göndersin? Bir saniye sonra beklese belki gelecekti, değil mi? İşte bu sorunu da çözmek için timeout süremiz var. Bu süre dolduğunda ACK mesajı gelmediyse o paket kayboldu diye düşünülür. Evet belki 1 saniye sonra gelecekti ama süremiz doldu cevap veren taraf için üzgünüz tekrar paket ona ulaştığında bu sefer elini çabuk tutsun ACK ile aldım desin :)

TCP bağlantısı genelde dosya alışverişi, metin mesajları gibi giderken kayıp yaşamasını istemeyeceğimiz bilgilerde kullanılır. Paketlerin gidip gitmediği kontrol edildiği için hata kontrolü sağlanmış olur, daha güvenilir bir hal alır. Gitmeyen paketleri tekrar gönderir, bazı durumlarda paket boyutu fazlaca artabileceği için maalesef ki yavaşlığa sebep olur.

TCP bağlantısını kendiniz de rahatlıkla kodlayabilirsiniz. Bir programlama dili seçin ve TCP server/TCP client olarak arama yapın. İstemediğiniz kadar örnek çıkacaktır. Java için örneklerden birine şu linkten ulaşabilirsiniz: "[TCP Sunucu-İstemci Java üzerinden örnek](https://github.com/aysedemirel/Socket-Programming/tree/master/BasicClientServer)". Linkteki projede basit bir sunucu-istemci kodu vardır. Kendi bilgisayarınıza alarak istemci ve sunucuyu ayrı ayrı çalıştırırsanız konsol üzerinden veri alışverişi gerçekleştirebilirsiniz. Kodda geliştirme yaparak TCP tabanlı kendi mesajlaşma uygulamanızı yapabilirsiniz :) Mesaj trafiğini incelemek için [Wireshark](https://www.wireshark.org/#download) uygulamasını indirerek gözlem yapabilirsiniz.

## Kaynaklar:
- https://medium.com/@gokhansengun/tcp-nas%C4%B1l-%C3%A7al%C4%B1%C5%9F%C4%B1r-1-484612c5264f
- https://searchnetworking.techtarget.com/definition/TCP

# HTTP Nedir?

**HTTP** *(Hyper-TextTransfer Protocol)*, istemci ve sunucunun birbiri ile nasıl iletişim kurduğunu standartlaştıran **TCP/IP** tabanlı **application layer** *(uygulama katmanlı)* iletişim protokolüdür. İçeriğin internet üzerinden nasıl talep edildiğini ve iletildiğini tanımlar. 

Varsayılan olarak **TCP** portu 80’dir ama diğer portlar da kullanılabilir. Ama **HTTPS** 443 portunu kullanır. 

İstemci ve sunucu ilk önce **TCP** bağlantısı kurar. İletişimin güvenli olduğunu kanıtlamak için **üçlü el sıkışma** *(three-way handshake)* denilen paket alışverişi gerçekleştirilir. 

![http](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/http/figures/http.png)

İletişim güvenli olduktan sonra istek ve cevaplar ile veri alışverişi başlar. **HTTP** protokolü burada devreye girer. **HTTP** bir protokol olarak mesajlaşmanın nasıl olacağını tanımlar. Belirli formatlar sağlayarak iki tarafın da aynı dili konuşmasını sağlar. 

Genel format "method istek-hedefi HTTP/x" şeklindedir. 

**Örneğin:** 

"GET /doc HTTP/1.1" gibi.

![http_istek_yapi](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/http/figures/http_istek_yapi.png)



**Protokol içerisinde çeşitli metodlar mevcuttur.**

**Bunlar:** *"GET,POST,PUT,HEAD,DELETE*"

| Method | Açıklama                                                 |
| ------ | -------------------------------------------------------- |
| GET    | İstediğimiz web sayfasını okumak için kullanılır. (READ) |
| HEAD |  İstediğimiz web sayfasının header bilgisini sunucudan almak için kullanılır. |
| PUT | Web sayfasına bir dosyayı saklaması için talep gönderilirken kullanılır. (UPDATE) |
| POST | Bir veriyi ilgili sayfaya göndermek için kullanılan http istek mesajında kullanılır. (CREATE, INSERT)|
| DELETE | Bir veri silinmek isteniyorsa kullanılır. |
| TRACE | Sunucu tarafında gelen istekleri görüntülemek için kullanılır. |
| CONNECT | İstenilen kaynakla iki yönlü iletişim başlatmak için kullanılır. Bir tünel açar. |
| OPTIONS |  Belirli seçenekleri sorgulamak için kullanılır. |

- Host olarak belirtilen hangi web sitesine bu talebi yaptığımızdır. 

- Bağlantının nasıl devam edileceği de belirtilir. **İki türlü devam edebilir:**

- **"close"** ve **"keep-alive"** 
  - Eğer `Connection:close` olarak bağlantı kurulmuşsa istek için cevap gelince bağlantı sonlandırılır. 
  - `Keep-alive` olarak kurulmuşsa bağlantı devam eder. 
  - `Close` her seferinde bağlantı kurmayı gerektirdiği için **performans ve kaynak** kaybına sebep olabilir.

* Tarayıcılarımızın kendine ait `"user-agent"` var. Bununla sunucu tarayıcıya özel ayarlar yapabiliyor ya da tarayıcıya özel içerikler üretebiliyor. 
* `"Accept-language"` başlığı ile tercih edilen dil belirtiliyor. 

Sunucu cevap döndüğünde de istek gibi **HTTP** formatında gelir. İlk satırda **durum kodu** olur. 

**Durum kodu** *(status code)*, isteğimiz ile cevabın uyumunu gösterir.  Bu kodlar gruplar halindedir. 

- 100 ile başlayan kodlar "Bilgi" amaçlı
- 200 ile başlayan kodlar "Başarı" ile gerçekleşen komut bildirmek amaçlı
- 300 ile başlayan kodlar "Yönlendirme" amaçlı gönderilir bu kodu gördüğümüzde yönlendirdiği şekilde aksiyon alırız
- 400 ile başlayan kodlar "İstemci Hatası" bildirmek içindir yanlış kaynağı istemiş olmak gibi
- 500 ile başlayan kodlar "Sunucu Hatası" bildirmek amaçlıdır sunucuda problem olduğunda verilir. 

**Örnek olarak bazı durum kodları şunlardır:**

| Kod | Açıklama                                                         |
| --- | ---------------------------------------------------------------- |
| 102 | İşleme devam ediliyor. Bilgi amaçlı sunucu tarafından gönderilir.|
| 200 | İstek başarılı bir şekilde gerçekleşmiştir. Veriler HTTP cevap mesajı ile gönderilmiştir. |
| 301 | İstenilen objenin yeri değişmiştir ve location başlığında yeni yeri istemciye söylenmiştir. |
| 400 | Sunucu istenilen mesajı anlayamamıştır. |
| 404 | İstenilen obje sunucu üzerinde bulunmamaktadır. (Klasik 404 Not Found sayfa bulunamadı hatası) |
| 503 | Sunucu ulaşılabilir değil. |

Cevap içerisinde aynı zamanda sunucu başlığı da bulunuyor. Bu kullanılan web servisinin adı ve işletim sistemi adını dönüyor. Bu başlık zorunlu olmadığı için genelde **HTTP** cevap mesajında bulunmaz.

Bir diğer başlık `"Last-modified"`, istenilen objenin en son ne zaman düzenlendiğini bildiriyor. 

`"Content-Lenght"`, gönderilen objenin boyutunu byte cinsinden bildiriyor, bu header kullanım amacı veri parça parça geldiğinde istemciye 'Veri akmaya devam ediyor,cevap bitmedi.' mesajını vermek.

`"Set-cookie"` başlığı, sunucunun çerez (cookies) oluşturması için bulunuyor.

`"Content-Type"`, gönderilen verinin tipini belirtiyor.

Başlık kısmından sonra body kısmı bulunuyor ve sunucudan veri geliyorken sunucudan istenilen objenin kendisi bulunuyor (tabi durum kodu OK ise). Body içeriği, istek sırasında header içerisinde `"content-type"` ile belirtilen format ile gelir.

**Peki bu HTTP trafiğini nasıl görebiliriz?**

Daha önce bunlarla hiç karşılaşmama ihtimaliniz yüksek. Yukarıda anlattıklarımızı denemeniz için gelin öncelikle bir tarayıcı açalım. Tarayıcı üzerinde **F12'ye** bastığınızda bir pencere açılacak. Sayfa içerisinde sağ tık **incele** ile de ulaşabilirsiniz.

Açılan pencerede **"Network"** seçeneğine tıklarsanız tüm trafiği görebilirsiniz. **Durum kodlarını fark ettiniz mi?**

![network_sekmesi](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/http/figures/network_sekmesi.png)

Gelen-giden paketlerden birinin üstüne tıklarsanız aşağıdaki gibi detaylı bakmak için yan pencere açıldığını göreceksiniz. Bu pencere üzerinden paketin header, cevap ön izlemesi (Preview), cevap body içeriği (Response), zaman detayları (Timing), çerez bilgilerini (Cookies) görebilirsiniz.

![network_detay](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/http/figures/network_icerik.png)

 ## Kaynaklar:
- https://kamranahmed.info/blog/2016/08/13/http-in-depth/
- https://umuttosun.com/http-protokolu/

# DNS (Domain Name System)

Bilgisayarlar veya diğer cihazlar iletişim kurmak için **IP** adres kullanırlar. Bu her biri cihaz için **kimlik** gibidir. Veri nereye gideceğini elindeki adres ile bilir. Şu ana kadar defalarca Google, Youtube gibi bir sürü web sitesini ziyaret etmişsinizdir. 

**Peki kaç tanesinin IP adresini biliyorsunuz ?**

Muhtemelen bilmiyorsunuz, biliyorsanız da çok azını. *IP adreslerini bilmeden bu sitelere nasıl erişiyoruz peki?* Çünkü öğrendiklerimize göre internette her şey aslında veri almak/vermekten ibaret ve bu da IP gibi protokoller aracılığı ile oluyor. 

Evet, belki IP adreslerini bilmiyoruz ama ulaşmak istediğimiz web sitelerinin **alan adlarını**  (domain name) biliyoruz.

**Örneğin:**

[www.google.com](http://www.google.com/) yazdığımızda IP adresini bilmemize gerek yok. Bizim bilmemize gerek yok ama tarayıcı **halen IP adrese ihtiyaç duyuyor.** Bunun için de DNS sunucuları var. Biz alan adı ile bir web sayfasına erişmek istediğimizde arka planda bu sunuculara gidip IP adreslerini soruyoruz. 

![URL](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/DNS/figures/URL.png)

DNS sunucularına sorarken hızlı olmak için belli bir sıra ile sorulur. Öncelikle **lokalde** veya **ağda** ön bellekte (cache) bu alan adı daha önce saklanmış mı diye bakılıyor. Daha önce bu web sitesine girmişsek ilk önce saklanan IP adrese istek atılır. Eğer başarılı değilse tekrardan doğru IP'ye ulaşmak için **root DNS** sunucularında aranır. 

Her **TLD** *(Top Level Domain-Üst Düzey alan Adı)* ,ki bunlar `.com,.me,.io` gibidir, kendi sunucusuna sahiptir. 

**Root DNS** ise alan adı geldiğinde hangi **TLD**'nin sorumlu olduğunu bulmaktan sorumludur. Root hangi **TLD** sunucusuna gidileceğini söyledikten sonra **TLD** sunucusunda aradığımız bilgiyi nerede bulabileceğimize yönelik tekrardan yönlendirme olur. IP bilgisine erişilir ve iletişim sağlanır:

![Root_DNS](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/DNS/figures/ROOT_DNS.png)

## Kaynaklar:

- https://www.quora.com/What-is-a-TLD
- https://www.netnod.se/i-root/what-are-root-name-servers
- https://roadmap.sh/guides/dns-in-one-picture
- https://howdns.works/
# Domain Name (Alan Adı)

Bir web sitesine ulaşırken "www.ornek.com" gibi bir uzantı gireriz. Burada `www` kısmı her web sitesinde ortak olduğu için hatırlamamız gereken kısım `"ornek.com"` olur. Eğer bu kısmı hatırlarsak web sitesine direkt giriş sağlayabiliriz. İşte bu kısım yani `"ornek.com"` **domain name(alan adı)**.

Bir cihazdan diğer cihaza ulaşmak için IP adres gerekliydi. Ama tüm web sitelerinin IP adresini hatırlamamızı düşünmek bile çılgınca. Bu yüzden alan adları IP adreslere karşılık gelen kullanıcı dostu metinlerdir. 

**IP adres ve alan adını telefon rehberi gibi düşünebiliriz. Tanıdığı herkesin telefon numarasını ezbere bilen kaç kişi kaldı ki?**

Artık herkes telefon numaralarını isimlere göre kaydediyor ve numaraları kimse hatırlamıyor. Alan adı da böyle, herkes `"google.com"` bilir.

Bir web sitesi oluştururken de alan adı alırız. Böylelikle web sitemize girmek için o ismi kullanabiliriz.

**Yapısı ise şu şekildedir:**

![hierarchy](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/domain-name/figures/hierarchy_domain_name.png) 

## Kaynaklar:

- https://en.wikipedia.org/wiki/Domain_name
- https://www.cloudflare.com/learning/dns/glossary/what-is-a-domain-name/

# Hosting

Bir web sitesindeki içeriğe ulaşmak için istek gönderdiğimizi ve cevaba göre içeriği görüntülediğimizi biliyoruz. 

**IP** adresler ise nereye bakmamız gerektiğini söylüyor . Buraya kadar tamam ama biz gerçekten nereye bakıyoruz? 

Baktığımız web sitesi birinin bilgisayarında çalışıyor da ben ona mı soruyorum şu sayfaya bakmak istiyorum diye? -Hayır, başka birinin bilgisayarında birebir çalışma ihtimali oldukça düşük. *(Ama mümkün!)*

Diyelim ki bir web sitesi oluşturmak istiyoruz. Bütün kodları yazdık, içerikler tamam.

**"Ama bunlar hep kendi bilgisayarımızda diğer insanlar nasıl görecek?"**

Bu soru bizi **hosting**'e getirdi. Web sitesini canlı tutabilmek için sunucuya ihtiyacımız var. Kendi lokalimizde çalışırken kodları derleyip bakarken sunucu olarak kendi bilgisayarımızı kullandık. *(Buna local'de çalışmak da denir.)*

Şimdi diğer insanlar da kullansın istiyorsak bunu kendi bilgisayarımızda halletmek *çok pahalıdır*, *oldukça karmaşıktır*, *oldukça da zordur*. Bunun için de daha büyük, hızlı ve iyi bilgisayarlara ihtiyacımız var.

Sunucu ihtiyacımızı çözmek için **hosting** hizmeti sunan şirketler var. Bu şirketler aracılığı ile yer satın alarak, daha güçlü bilgisayarlara içeriğimizi koyuyoruz. Böylelikle web sayfasına bir günde 1 milyon insan girse bile daha hızlı sunucularda sorun yaşama olasılığımızı düşürüyoruz. Burada sorun yaşayacağımız tek durum güçlü bilgisayara sahip olamamak değil aynı zamanda iyi ve stabil bir internet bağlantısına da sahip olamamaktır. *(Türkiye'de iyi bir hosting firması sırf bu yüzden bir metro istasyonunun tam yanında konumlanmış. Sebebi ise geçikme olmadan ana fiber omurgasına ulaşmak! Bu şartı evimizde genellikle sağlayamayız.)*

### Hosting seçenekleri

Hosting hizmeti olarak farklı seçenekler görebiliriz:

* Shared 
* Dedicated
* VPS
* Cloud
* Managed

**Nedir bunların farkı ?**

| Hizmet | Açıklama |
| ------ | -------- |
|Shared | En ucuz,  en az güçlü, çok da zor olmayan hosting çeşididir. Birçok web hosting müşterisi aynı bilgisayarı paylaşarak sunucu ihtiyacını giderir. Tüm bu hesapların bilgileri aynı sürücüde depolanır, aynı CPU'da çalışır. Basit siteler için idealdir. |
|Dedicated | En pahalısı, en güçlüsü ve en zorudur. Tüm sunucu kontrolü bir kişidedir. Bu opsiyonu hosting firmasından bir bilgisayar kiralamak gibi düşünebilirsiniz. Onların altyapısını ve cihazlarını kullanırsınız ama kontrol sizdedir. İyi bir teknik bilgi gerektirir. |
|VPS (Virtual Private Server) | Shared ve dedicated arasında bir yerlerdedir. Orta bir maliyet diyebiliriz, buna göre de gücü de ortadır, zorluğu da. Burada kendi sunucunuza sahip olabilirsiniz ama sunucu sanaldır. Yani bir cihaz içerisinde size ayrılmış bir alanı kullanırsınız. |
|Cloud | Birçok bilgisayar bir araya gelerek cloud(bulut) oluşur. Cloud içinde tüm bu bilgisayarların gücü kullanılır. Uygulamanızı çalıştırdığınızda birçok bilgisayarın gücünü kullanmış olursunuz. En pratik ve ulaşılabilir yöntemdir. |
|Managed | VPS veya dedicated sunucu gücüne ve bant genişliğine ihtiyacınız var ama nasıl yöneteceğinize dair teknik bilginiz yoksa managed hosting planı size göre. |

![hosting_secenek_karsilastirma](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/hosting/figures/hosting_types.PNG)

## Kaynaklar:
- https://www.whoishostingthis.com/resources/web-hosting/

