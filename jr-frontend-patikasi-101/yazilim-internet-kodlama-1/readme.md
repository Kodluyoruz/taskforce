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


