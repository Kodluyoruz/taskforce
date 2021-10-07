HTTP Nedir? 
======
**H**yper **T**ext **T**ransfer **P**rotocol ifadesinin kısaltmasıdır. İstemci ile sunucu arasındaki veri akışının kurallarını belirleyen protokoldur. 
İstek – Cevap (request, response) modeline göre çalışır.

![HTTP](https://github.com/Kodluyoruz/taskforce/blob/main/rest/WhatIsHTTP/figures/HTTP.jpeg)

### REST Mimarisinde HTTP'nin Rolü
REST mimarisinin prensiplerinden ilki istemci - sunucu çalışma modelidir. Biz bir istekte bulunuruz ve sunucu isteğimize karşılık olan durumu (state) bize bir sunum
(presentation) olarak gönderir. HTTP protokolü burada bu sunum transferi için kurulan iletişimin kurallarını belirler. REST mimarisine uygun API'ların neredeyse tamamında HTTP protokolü kullanılır.

### HTTP Request
İstek (Request) yapısını belirtir. 4 bölümden oluşur.
![Request](https://github.com/Kodluyoruz/taskforce/blob/main/rest/WhatIsHTTP/figures/Request.png)

- #### İstek Satırı (Request Line)
  Dosya yolunu, HTTP metodunu ve HTTP versiyonunu barındırır.
  
- #### İstek Başlıkları (Request Headers)
  İsteğe ait olan özellikler isim-değer çiftleri şeklinde belirtilir.
  
 - #### Boş Satır (Blank Line)
  Başlık ile mesaj arasındaki boşluğu belirtir.
 
 - #### Mesaj İçeriği (Message Body)
 
