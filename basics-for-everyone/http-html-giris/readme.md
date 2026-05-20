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

