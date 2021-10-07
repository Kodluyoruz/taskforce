REST Prensipleri (Kısıtlamaları) I
======

### İstemci - Sunucu (Client - Server) Modeli
İstemci isteği gönderen, sunucu da ilgili cevabı veren durumundadır. Birbirlerinin sorumluluk alanlarına girmezler. Birbirlerinden bağımsız programlama dillleri ve teknolojiler kullanabilirler.

![REST API](https://github.com/Kodluyoruz/taskforce/blob/main/rest/RESTAPIPrinciplesI/figures/ReqRes.png)

### Tek Tip Arayüz (Uniform Interface) Modeli
Aynı kaynağa yönelik olan tüm istekler, isteğin nereden geldiğinden bağımsız olarak aynı şekilde görünmelidir. Bu aynı zamanda istemci – sunucu bağımsızlığını da destekler.        4 temel özelliği bulunmaktadır. 

![REST API](https://github.com/Kodluyoruz/taskforce/blob/main/rest/RESTAPIPrinciplesI/figures/UniformInterface.jpg)

- Kaynakların tanımlanması (identification of resources), bir kaynak için sunucuya yapılan istek benzersiz bir URI adresi ile tanımlanmalıdır.
  - http://example.com/users (GET)
  - http://example.com/users/11/posts (GET)
  - http://example.com/users/11/posts/5/comments (GET)

