

# Veri Tabanı Yönetim Sistemi Mimarisi

Modern veri tabanı yönetim sistemleri istemci-sunucu (Client-Server) mimarisine sahiptir. Bu nedenle MySQL kurulumu yaptığımızda aslında sunucu şeklinde isteklere cevap verebilen bir yazılım çözümünü ayağa kaldırmış oluruz. Kullanıcılar veya yazdığımız programlar veri tabanlarıyla ve onların içindeki tablolarla etkileşim kurmak istediğinde veri tabanı sunucu yazılımına istekler ulaşır. Sunucu yazılımı bu istekleri ilgili veri tabanında işletir ve sonuçları istemciye geri döner.

![veritabanı-calisma](figures/veritabanı-calisma.png)



Aslında DBMS (Database Management Sytem) tasarımı mimariye bağlıdır. İstemci - Sunucu mimarisi, çok sayıda PC, web sunucusu, veri tabanı sunucusu ve ağlara bağlı diğer bileşenlerle başa çıkmak için kullanılabilir.  Bunu biraz daha açıklayalım.

DBMS package mimarisi, bir adet sıkıca birbirine entegre edilmiş tekil mimariden, client/server (istemci/sunucu) olarak tanımlayabileceğimiz modern DBMS package mimarisine doğru gelişmiştir. Artık büyük merkezi bir bilgisayar yerine yüzlercesine ayrılmış ve kişisel bilgisayarlar web server, database server, file server (dosya server), application server(uygulama server) gibi birçok bilgisayar ile iletişim halinde olmaya başlamışlardır. DBMS mimarisi 2 module dayanıyor diyebiliriz.

* Client Module : İş yerleri ve kişisel bilgisayarlar bu gruba girer. Yani uygulama ve arayüzler üzerinden database' e bağlananlardır. Client modulu kullanıcı etkileşimini elinde bulundurur ve GUI (Grafical User Interface) gibi kulanıcı dostu arayüz sağlar.
* Server Module : Veri saklama, ulaşım, arama ve diğer fonksiyonları sağlar.

Bir DBMS tasarımı mimarisine bağlıdır.Merkezi, merkezi olmayan ya da hiyerarşik bir yapıda olabilir. Örneğin, bir istemci sunucu mimarisinde, sunucu makinesindeki veri tabanı sistemleri, istemci makine tarafından yapılan istekleri çalıştırabilir.

											## 																	DBMS Mimari türleri

![databasearchitecture](figures/dbms-architecture.png)



DBMS mimarisi tek katmanlı veya çok katmanlı olarak görülebilir. Yukarıdaki resimde de görüldüğü gibi 3 farklı mimari gözükmektedir.

* ## 1 Katmanlı Mimari

  ![1tier](figures/1-tier.png)

   

  Tek katmanlı mimari, bir yazılım uygulaması veya teknolojisi için gerekli tüm bileşenlerin tek bir sunucu veya platforma yerleştirilmesini içerir. Buradan yapılan herhangi bir değişiklik doğrudan veri tabanının kendisinde yapılacaktır. Ağ bağlantısı gerektirmez. 1 Katmanlı mimari, veri tabanı ile doğrudan iletişim kurabildiği için yerel uygulama geliştirmede tercih edilir. Veri tabanı tasarımcıları ve programcıları normalde tek katmanlı mimari kullanmayı tercih ederler.

  Örneğin veri tabanımızda öğrenci kayıtları olduğunu düşünelim. Öğrenci kayıtlarını almak için istek yapıp ve kayıtların veri tabanından sizin tarafınızdan getirilecektir. Bu tür yapılar yerel veri tabanı sistemi olarak adlandırılır.

  ## 

  

## Veri Modeli

Veri tabanları verilerin tablolar halinde saklandığı alanlardı. Bu veriler kalıcı diskte (Hard-Disk) belli bir format biçiminde saklanır. Veri tabanı aşağıdaki 3 yapıdan oluşur.

* Entity (Varlık): Gerçek hayat nesnesini veya kavramını ifade eder. Örneğin, öğrenci, çalışan personel, adres, maaş gibi kavramlar veya nesneler varlıkları ifade eder. Varlıklar genelde veritabanı dünyasında tablolar şeklinde ifade edilir.

* Nitelik (Attribute): Yukarıda bahsettiğimiz gerçek hayat varlığı veya kavramının niteliklerini ifade eder. Örneğin, öğrenciyi tanımlayan nitelikler numarası, bölümü, ismi, soy ismi gibi nitelikleridir. İşte bu nitelikler tablodaki sütunları ifade ederler. Her nitelik bir sütunu ifade edebilir.

* İlişki (Relationship): İki varlık arasındaki mantıksal bağlantıyı ifade eder. Örneğin Öğrenci ile Ders varlıkları arasında doğası gereği bir ilişki söz konusudur. Yahut, Personel ile Maaş arasında da benzer bir ilişki vardır. Varlıklar arasındaki ilişki veri tabanı dünyasında tablolar arasındaki ilişkiyi ifade eder.

### İlişkisel Veri Modeli

Varlıkların veri tabanı tarafında tabloları ifade ettiğinden bahsetmiştik. Ayrıca, bu varlıkların birçok niteliği bulunmaktaydı. Bu nitelikler tablolardaki sütunları ifade etmektedir. Bu birbiriyle ilişki niteliklerin bir araya gelmesiyle ilişki veri modeli ortaya çıkmaktadır.

![ilişkisel-veritabani](figures/iliskisel-veritabanı.png)

Yukarıdaki örnekte “OGRENCI” isminde bir tablo oluşturulmuştur. “Ogrenci_No”, “Sinif” ve “Bolum” isminde nitelikler bir araya gelerek bu tablo yapısını meydana getirmiştir. Tablodaki her bir satır ise bir öğrenci kaydını ifade etmektedir. Yani bir gerçek hayat varlığının verileriyle birlikte tabloda yer almasını ifade eder.