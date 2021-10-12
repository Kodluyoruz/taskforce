# HTTP Nedir? 

**H**yper **T**ext **T**ransfer **P**rotocol ifadesinin kısaltmasıdır. İstemci ile sunucu arasındaki veri akışının kurallarını belirleyen protokoldur. 
İstek – Cevap (request, response) modeline göre çalışır.

![HTTP](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/rest-api/http-nedir/figures/HTTP.jpeg)

### REST Mimarisinde HTTP'nin Rolü
REST mimarisinin prensiplerinden ilki istemci - sunucu çalışma modelidir. Biz bir istekte bulunuruz ve sunucu isteğimize karşılık olan durumu (state) bize bir sunum
(presentation) olarak gönderir. HTTP protokolü burada bu sunum transferi için kurulan iletişimin kurallarını belirler. REST mimarisine uygun API'ların neredeyse tamamında HTTP protokolü kullanılır.

### HTTP Request
İstek (Request) yapısını belirtir. 4 bölümden oluşur.

![Request](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/rest-api/http-nedir/figures/Request.png)

- #### İstek Satırı (Request Line)
  Dosya yolunu, HTTP metodunu ve HTTP versiyonunu barındırır.
  
- #### İstek Başlıkları (Request Headers)
  İsteğe ait olan özellikler isim-değer çiftleri şeklinde belirtilir.
  
 - #### Boş Satır (Blank Line)
    Başlıklar ile mesaj içeriği arasındaki boşluğu belirtir.
 
 - #### Mesaj İçeriği (Message Body)
  Yapılan isteğin detayları belirtilir.
  
### HTTP Response
Cevap (Response) yapısını belirtir. 4 bölümden oluşur.

![Response](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/rest-api/http-nedir/figures/Response.png)

- #### Durum Satırı (Status Line)
  HTTP versiyonunu ve HTTP durum kodunu belirtir.
  
- #### Cevap Başlıkları (Request Headers)
  Cevaba ait olan özellikler isim-değer çiftleri şeklinde belirtilir.
  
 - #### Boş Satır (Blank Line)
    Başlıklar ile mesaj içeriği arasındaki boşluğu belirtir.
 
 - #### Mesaj İçeriği (Message Body)
  Alınan cevabın detayları belirtilir.

 ## Daha Fazlası İçin
- [HTTP - MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [HTTP - WIKI](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)

