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

