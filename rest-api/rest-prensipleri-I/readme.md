# REST Prensipleri (Kısıtlamaları) I
======

### İstemci - Sunucu (Client - Server) Prensibi
İstemci isteği gönderen, sunucu da ilgili cevabı veren durumundadır. Birbirlerinin sorumluluk alanlarına girmezler. Birbirlerinden bağımsız programlama dillleri ve teknolojiler kullanabilirler.

![REST API](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/rest-api/rest-prensipleri-I/figures/ReqRes.png)

### Tek Tip Arayüz (Uniform Interface) Prensibi
Aynı kaynağa yönelik olan tüm istekler, isteğin nereden geldiğinden bağımsız olarak aynı şekilde görünmelidir. Bu aynı zamanda istemci – sunucu bağımsızlığını da destekler.        4 temel özelliği bulunmaktadır. 

![REST API](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/rest-api/rest-prensipleri-I/figures/UniformInterface.jpg)

- Kaynakların tanımlanması (identification of resources), bir kaynak için sunucuya yapılan istek benzersiz bir URI adresi ile tanımlanmalıdır.
  - http://example.com/users (GET)
  - http://example.com/users/11/posts (GET)
  - http://example.com/users/11/posts/5/comments (GET)

- İstemci tarafında kaynağın değiştirilebilmesi. 
- İstemci ve sunucu birbirlerinin ihtiyaç duyduğu bilgilerin tamamını göndermelidir.
  - Sunucu, Content/Type (JSON, XML..) İstemci( doğru parser seçimi )
  - İstemci, Aynı URI farklı metodlar ve farklı sonuçlar (GET /users vs POST /users)

- Sunucu tarafından gönderilen cevap istenilen verinin yanındabazı ek aksiyonlar da içerebilir. (HATEOAS)

### Durumsuzluk (Statelessness) Prensibi
#### STATE
Söz konusu veriyi - durumu belirtir, örneğin bir veritabanı için düşünürsek veritabanında o an için bulunan veridir. Bir React uygulamasını düşünürsek herhangi bir component’ ın o an ki durumu. Modal’ın açık veya kapalı olması, kullanıcının giriş, çıkış durumu gibi.

**Stateful** ( Durum bilgisi olan ) vs **Stateless** ( Durum bilgisi olmayan ) İstemci tafından gerçekleştirilen her istek birbirinden bağımsızdır ve sunucu bu isteklerin her birini bağımsız olarak değerlendirir. Sunucu istemci tarafından kendisine gönderilen bilgileri tutmamalıdır. Örneğin bir isteğimiz kimlik doğrulama (Authentication) işlemi gerektiriyorsa ilgili tüm bilgiler (token vs..) istemci tarafından sunucuya devamlı olarak gönderilmelidir.

## Daha Fazlası İçin
- [REST - Wiki](https://en.wikipedia.org/wiki/Representational_state_transfer)
- [IBM Technology - What Is REST](https://www.youtube.com/watch?v=lsMQRaeKNDk&t=396s)

