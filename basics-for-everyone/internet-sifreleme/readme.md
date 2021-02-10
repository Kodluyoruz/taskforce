# Şifreleme ve Public Key

İki cihaz iletişim kurarken, veriyi olduğu gibi gönderseydi araya biri girip veriyi değiştirebilir ve bize ulaştırabilirdi. Çünkü veri hedefe ulaştığı sürece ufak bir gecikme olduğunu düşünürdük. Bu sebeple veriyi olduğu gibi göndermek yerine şifreliyoruz. 

Bunun için çeşitli yöntemler var. Günümüzde **256 bitlik** anahtarlar ile şifreleme yapılıyor. Bu anahtarlar kullanılarak veri değiştiriliyor anlaşılamaz hale geliyor. 

**Peki anahtar bizde vardı bununla şifreledik karşı taraf nasıl çözecek ?**

Bu durumu çözmek için de asimetrik şifreleme var.

Asimetrik şifrelemede iki anahtarımız var : genel(public) anahtar ve özel(private) anahtar. Genel anahtar ile ekleme yapılabilir ama özel anahtar kimde ise veriyi o görebilir mantığı vardır. İnternette TLS ve SSL protokollerinde de bu yöntem temel alınır.

Whatsapp'a birisiyle mesajlaşırken gördüğünüz bu uyarı mesajınızın iki taraf arasında şifrelendiğini gösterir.

![image-20210210161356734](figures/whasapp-sifreleme.png)

## Kaynaklar:
- https://roadmap.sh/guides/what-is-internet
- https://www.youtube.com/watch?v=kHxcf2wK_ck&feature=youtu.be
- https://code.org/

