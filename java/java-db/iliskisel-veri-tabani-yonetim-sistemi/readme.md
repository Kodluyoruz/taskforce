# İlişkisel Veri tabanı Yönetim Sistemi

İlişkisel veri tabanı yönetim sistemlerinde veriler satır ve sütun şeklinde bir formatta tablolar halinde saklanır. Oluşturulan tablodaki sütunlar bir nesnenin niteliklerini ifade eder. O nesneyle ilişkili özellikler sütunlar halinde bir tabloda bir araya getirilir. İşte bu veri formatı nedeniyle “İlişkisel Veri tabanı Yönetim Sistemleri” denilmektedir. Tablolar arasında ilişki kurulabildiği için bu ismi almamıştır.

Aksine birbiriyle ilişkili niteliklerin bir tabloda toplanmasıyla oluşan veri formatından dolayı ismini almıştır. Örneğin: Ders isminde bir varlığımız olduğunu düşünürsek Ders nesnesini tanımlayan alakalı özellikleri bir araya getirmeye çalışırız. Dersin ismi, kaç saatten oluştuğu, hangi dönem olduğu gibi birçok özellik bir araya gelip “Ders” tablosunu oluşturur.

![](figures/image_1.png)

İlişkisel veri tabanlarında tablolar arasında da ilişki kurulabilir. Örneğin: Öğrencinin kimlik bilgileri bir tabloda yer alırken, öğrenciye ait adres bilgileri başka tabloda yer alabilir. Doğru olanı da tasarımsal açıdan böyledir zaten. Öğrenci ve Adres tabloları arasında bir ilişki kurabiliriz. 

İlişkisel model, uygulama yazılımları ve veritabanı kopyaları arasında veri tutarlılığını korumakta en iyi çözümdür. Örneğin, bir müşteri bir ATM'ye para yatırıp cep telefonunda hesap bakiyesine baktığında, yatırdığı paranın güncel hesap bakiyesine derhal yansıdığını görmeyi bekler. İlişkisel veritabanları, bu tür veri tutarlılığında üstün performans gösterir ve bir veritabanının birden fazla örneğinin her zaman aynı verilere sahip olmasını sağlar.

Diğer veritabanı türlerinin büyük miktarlarda verilerle bu gerçek zamanlı tutarlılık seviyesini yakalaması zordur. NoSQL gibi bazı veritabanları yalnızca “nihai tutarlılık” sağlayabilir. Bu ilkeye göre veritabanı ölçeklendirildiğinde veya aynı anda birden fazla kullanıcı aynı verilere eriştiğinde verilerin “en güncel hale ulaşması” biraz zaman alır. Nihai tutarlılık bir ürün kataloğundaki girişleri tutmak gibi bazı kullanımlar için kabul edilebilir, ancak alışveriş sepeti işlemleri gibi kritik iş operasyonları için ilişkisel veritabanı hâlâ altın standarttır. 

**İlişkisel Veri Tabanlarının Avantajları**

* Doğru kurulmuş, doğru indexlenmiş ve doğru yönetilen bir veri tabanı her büyüklükteki şirketin işini kolaylaştırır. Veriye kolay ve zahmetsiz ulaşmak vakit kaybını önlediği gibi aynı zamanda şirketlerin zarar etmesini de önler.
* Verinin bir arada ve tutarlı olmasını sağlayan ilişkisel veri tabanları birçok yazılımda bu özelliği ile kolaylık sağlar.
* Stok takibi, e-ticaret işlemleri gibi alanlarda sıkça kullanılan bu sistem kritik müşteri bilgisini yönetmek açısından uygundur.
* Normalizasyon ile veri tekrarından kaçınılması mümkündür.

**İlişkisel Veri Tabanlarının Dezavantajları**

* İlişkisel bir veri tabanının kurulması, bakım maliyetleri, programlama ve yönetim işi için kalifiye eleman çalıştırmak maliyetlidir.
* Veri alanlarının uzunluğunda bazı kısıtlamalar sebebiyle yapısal sınırlandırmaları bulunmaktadır.
* Çok fazla fiziksel alana ihtiyaç duyar.

**İlişki tipleri:**

* Bire bir (OneToOne) (1-1) 
* Bire çok (OneToMany) (1-N) 
* Birçoğa bir (ManyToOne) (N-1) 
* Birçoğa Birçok (ManyToMany) (N-N) 

**Sorular**

1- Tablo üzerindeki her bir satır ne olarak adlandırılır?

A.Kayıt

B.Sorgu

C.İlişkili veri

D.Sütun

E.Hiçbiri

2- Aşağıdakilerden hangisi tablo için yanlıştır?

A.Tablolar satır ve sütunlardan oluşur.

B.Her satır tablo içinde tekil bir değere sahip olmalıdır.

C.Tablolar arası gerekli ilişkiler kurulmalıdır.

D.Veriler hücrelerde saklanır.

E.Her tabloda bir Foreing Key (Yabancı Anahtar) tanımlanmalıdır.

Cevaplar

1: A

2: E

**Kaynakça**
> [Kaynak 1](http://www.sqlekibi.com/sql-server/veri-tabani-yonetim-sistemi-dbms-ve-iliskisel-veri-tabani-rdbms-ne-demektir.html/)
>
> [Kaynak 2](http://auzefkitap.istanbul.edu.tr/kitap/cografi_bilgi_sistemleri_onlisans_ue/veritabanlarina_giris.pdf)