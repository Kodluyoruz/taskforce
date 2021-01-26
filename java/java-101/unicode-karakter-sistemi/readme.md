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