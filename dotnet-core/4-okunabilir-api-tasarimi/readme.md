# Okunabilir API Tasarımı

Okunabilir API'lar tasarlamak sizin developerlar ile ortak bir dil konuşabilmeniz için oldukça önemlidir. Projeye sizden sonra dahil olacak developlerların sadece içgüdüsel olarak endpointe baktığında hangi amaçla yaratıldığını anlayabiliyor olması gerekir. Aynı zamanda API'nizi kullanacak olan diğer developerlar da ilk bakışta bir API'ın isimlendirmesinden hangi amaçla kullanıldığını rahatlıkla anlayabilmelidir.

Bu amaçla okunabilir API tasarlamak için aşağıdaki genel kurallara dikkat edilerek API isimlendirmek doğru bir yöntem olacaktır.

- Aksiyon ifadelerinden kaçınılmalı : Aksiyon ifadelerini sizin yerinize http verb'leri zaten yapacaktır, bu nedenle isimlendirme yapılırken aksiyon ifadelerinden kaçınılmalıdır.

  - Örnek : `/Books/getBooks` yerine zaten bu isteği HTTP GET ile yapacağımızdan yalnızca `/Books/` olması daha doğru olacaktır. Bir endpointi okurken önünde hangi http verb kullanacaksak onunla birlikte okuyarak isimlendireceğimizi düşünmeliyiz.

- Controller yani resource isimlendirmesi çoğul olacak şekilde yapılmalı. Doğası gereği aslında bu kaynakların çoğul yani birden fazla olduğunu göz önünde bulundurmalıyız.
  - Örnek : `Book/`yerine `Books/` kullanılmalı.

Örnekler :

| Yanlış                     | Doğru                   |
| -------------------------- | ----------------------- |
| GET /Books/getBook/1       | GET /Books/1            |
| GET /Book?name=netcore     | GET /Books?name=netcore |
| POST /Books/create         | POST /Books             |
| DELETE /Books/deleteBook/1 | DELETE /Books/1         |
| PUT /Books/updateBook/11   | PUT /Books/11           |

**Okuma Önerisi:** Okunabilir API tasarımı ile ilgili daha detaylı bilgi almak için [tıklayınız.](https://medium.com/@harunrst11/anla%C5%9F%C4%B1l%C4%B1r-bir-rest-api-tasar%C4%B1m%C4%B1-nas%C4%B1l-olmal%C4%B1d%C4%B1r-6afbf251023c)
