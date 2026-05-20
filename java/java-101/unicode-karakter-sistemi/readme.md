# Unicode Karakter Sistemi

Bilgisayar dünyasında karakterler sayısal ifadeler ile temsil edilir. Aslında, her harfin veya sembolün bir sayısal karşılığı vardır. Dünyadaki çoğu dile ait karakterleri tanımlayan sisteme Unicode Karakter Sistemi denir.

Unicode sistemi dışında kullanılan diğer karakter sistemleri:

- **ASCII** (American Standard Code for Information Interchange)
- **ISO 8859-1** (Batı Dilleri için)
- **KOI-8** (Rusça için)
- **GB18030** ve **BIG-5** (Çince ve diğer diller için)

Unicode sistemi ile tüm dillere ait karakterler 2 Byte şeklinde tanımlandığı için uluslararası bir standarda sahiptir. Bu nedenle Java tarafından tercih edilmiştir. Diğer karakter sistemlerinden birbirine dönüşüm yapmak sorunlu ve maliyetli bir iştir.

| **Notasyon** | **Temsil Eden Karakter**             |
| ------------ | ------------------------------------ |
| \n           | Yeni satır (0x0a)                    |
| \r           | Satırbaşı (0x0d)                     |
| \b           | Geri tuşu (0x08)                     |
| \s           | Boşluk (0x20)                        |
| \t           | Bir tab Boşluk                       |
| \ "          | Çift Tırnak Kaçış Karakteri          |
| \ '          | Tek Tırnak KaçışKarakteri            |
| \ \          | Ters slash karakteri                 |
| \uxxxx       | Hexadecimal UNICODE Karakteri (xxxx) |
###### Unicode sistemine neden ihtiyaç duyuldu ? 

Bir bilgisayarın, metinleri insanlar gibi anlayabilmesi için karakterleri sayılara dönüştüren bir kod olması gerekir. Kodlar ise karakter kodlaması kullanılarak çalıştırılır. Unicode kullanılmaya başlanmadan önce de karakter kodlamaları kullanılıyordu. Ancak kullanılan karakter şemalarının belirli bir standardı olmadığı için  yüzlerce farklı sistem ve binlerce farklı karakter kodlamasının kullanılması gerekiyordu. Ortada bir standart olmadığı için bir karakter kodlamasındaki değer farklı bir sembolü oluştururken ötekindeki değer daha farklı bir sembolü meydana getirebiliyordu. Bilgisayarların *(özellikle sunucuların)* bazen birden fazla karakter kodlamasına göre veri işlemesi gerekiyordu. Karakter kodlamalarındaki farklılıklar ve karmaşalar nedeniyle veriler istemsiz olarak değişiyor, bozuluyor ve kullanılamaz hale gelebiliyordu.

Unicode standardı bu sorunların tamamına kesin bir çözüm oldu. Her karakter için benzersiz bir numara kullanılarak platformlar arası karmaşalara çözüm getirildi. Bugün Unicode kodlaması artık her yerde kullanılıyor. Tüm işletim sistemleri, arama motorları, internet tarayıcıları, bilgisayarlar ve hatta akıllı telefonlar bile. Unicode karakter tablosuna aşağıdaki linkten erişebilirsiniz. 

 https://unicode-table.com	

###### Peki küçük bir bulmacaya ne dersiniz?

Aşağıda unicode karakterleri kullanılarak yazılmış küçük bir java programı görüyoruz. Peki ne mi yazdırıyor? (tabloyu kullanmanızı tavsiye ederim  )

```java
          \u0070\u0075\u0062\u006c\u0069\u0063\u0020\u0020\u0020\u0020
          \u0063\u006c\u0061\u0073\u0073\u0020\u004d\u0061\u0069\u006e
          \u007b\u0070\u0075\u0062\u006c\u0069\u0063\u0020\u0020\u0020
          \u0020\u0020\u0020\u0020\u0073\u0074\u0061\u0074\u0069\u0063
          \u0076\u006f\u0069\u0064\u0020\u006d\u0061\u0069\u006e\u0028
          \u0053\u0074\u0072\u0069\u006e\u0067\u005b\u005d\u0020\u0020
          \u0020\u0020\u0020\u0020\u0061\u0072\u0067\u0073\u0029\u007b
          \u0053\u0079\u0073\u0074\u0065\u006d\u002e\u006f\u0075\u0074
          \u002e\u0070\u0072\u0069\u006e\u0074\u006c\u006e\u0028\u0020
          \u0022\u004b\u006f\u0064\u006c\u0075\u0079\u006f\u0022\u002b
          \u0022\u0072\u0075\u007a\u0020\u0022\u0029\u003b\u007d\u007d
```
(Çıktı: "Kodluyoruz")



