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

