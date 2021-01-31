# Hosting

Bir web sitesindeki içeriğe ulaşmak için istek gönderdiğimizi ve cevaba göre içeriği görüntülediğimizi biliyoruz. IP adresler ise nereye bakmamızı söylüyor. Buraya kadar tamam ama biz gerçekten nereye bakıyoruz ? Baktığımız web sitesi birinin bilgisayarında çalışıyor da ben ona mı soruyorum şu sayfaya bakmak istiyorum diye ? Hayır, başka birinin bilgisayarında birebir çalışma ihtimali oldukça düşük. 

Diyelim ki bir web sitesi oluşturmak istiyoruz. Bütün kodları yazdık, içerikler tamam. "Ama bunlar hep kendi bilgisayarımızda diğer insanlar nasıl görecek?" dedik ve bu bizi hosting'e getirdi. Web sitesini canlı tutabilmek için sunucuya ihtiyacımız var. Kendi lokalimizde çalışırken kodları derleyip bakarken sunucu olarak kendi bilgisayarımızı kullandık. Şimdi diğer insanlar da kullansın istiyorsak bunu kendi bilgisayarımızda halletmek *çok pahalıdır*, *oldukça karmaşıktır* , *oldukça da zordur*. Bunun için de daha büyük, hızlı ve iyi bilgisayarlara ihtiyacımız var.

Sunucu ihtiyacımızı çözmek için hosting hizmeti sunan şirketler var. Bu şirketler aracılığı ile yer satın alarak, daha güçlü bilgisayarlara içeriğimizi koyuyoruz. Böylelikle web sayfasına bir günde 1 milyon insan girse bile daha hızlı sunucularda sorun yaşama olasılığımızı düşürüyoruz.

### Hosting seçenekleri

Hosting hizmeti olarak farklı seçenekler görebiliriz:

* Shared 
* Dedicated
* VPS
* Cloud
* Managed

**Nedir bunların farkı ?**

Shared -> En ucuz,  en az güçlü, çok da zor olmayan hosting çeşididir. Bir çok web hosting müşterisi aynı bilgisayarı paylaşarak sunucu ihtiyacını giderir. Tüm bu hesapların bilgileri aynı sürücüde depolanır, aynı CPU'da çalışır.

Dedicated -> En pahalısı, en güçlüsü ve en zorudur. Tüm sunucu kontrolü bir kişidedir.

VPS(Virtual Private Server) -> Shared ve dedicated arasında bir yerlerdedir. Orta bir maliyet diyebiliriz, buna göre de gücü de ortadır, zorluğu da. Burada kendi sunucunuza sahip olabilirsiniz ama sunucu sanaldır. 

Cloud ->  Bir çok bilgisayar bir araya gelerek cloud(bulut) oluşur. Cloud içinde tüm bu bilgisayarların gücü kullanılır. Uygulamanızı çalıştırdığınızda bir çok bilgisayarın gücünü kullanmış olursunuz.

Managed -> VPS veya dedicated sunucu gücüne ve bant genişliğine ihtiyacınız var ama nasıl yöneteceğinize dair teknik bilginiz yoksa managed hosting planı size göre.  

![hosting_secenek_karsilastirma](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/hosting/figures/hosting_types.PNG)

## Kaynaklar:
- https://www.whoishostingthis.com/resources/web-hosting/
