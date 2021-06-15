# Http Protokolü

Restful servisler Http protokolü ile çalışır. Nasıl çalıştığını anlamak adına http prokolünün özellikleriyle ilgili bilgi sahibi olmak faydalı olacaktır.

## Http Nedir?

Hyper Text Transfer Protokol kelimelerinin baş harflerinden meydana gelen bir metin aktarı protokolüdür. Protokol oluşu ise bu veri aktarımının kurallarının önceden belirlenmiş olmasından gelir.

Örnek olarak statik web site düşünelim. Web site içerisinde yüzlerce nesne farklı formatlarda bulunur, buna css, imaj ve videolar dahildir. Http protokolü bu web sayfalarının (genelde html formatta olurlar) client(istemci) ve server(sunucu) arasındaki bu alışverişten sorumludur.

## Client - Server

**Client**'ları istemciler yani bilgisayarınızdaki tarayıcılar gibi düşünebilirsiniz. Siz tarayıcınızın adres çubuğuna bir url yazdığınızda uzaktaki bir sunucudan bir talepte bulunursunuz. Burda istemci sizin yerinize tarayıcınızdır, yani Client.

**Server** yani sunucu ise tarayıcınız aracılığıyla bulunduğunuz isteği karşılayan, eğer uygun ise size cevabı dönen makinedir.

Http protokolü client-server mimarisi ile çalışır. Yani tarayıcınız sunucuya isteği Http aracılığıyla gönderir.

![Client Server Mimarisi](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/dotnet-core/1-http-ptotokolu/figures/client-server.jpeg)

Bir server'a birden fazla client aynı anda istekte bulunabilir. Ama client'ların birbirinden haberi yoktur. Client'lar ve server arasındaysa Http Request ve Http Response'ları gider gelir.

Http arka planda internet üzerinden paket aktarımı protokolü olan TCP protokolünü kullanır.

## Http Request Metotları (Http İstek Metotları)

Aşağıdaki Http Metotları ile CRUD(Create-Read-Update-Delete) işlemler yapabiliriz.

- **Http GET:** Sunucudan veri almak için kullanılan http metodur. CRUD içerisinde **Read** yani okuma işlemine karşılık gelir.

- **Http POST:** Sunucuya yani host'a bir veri seti göndermek için kullanılır. Genel olarak post işlemler sonunda insert yani bir veri setine veri eklenmesi beklenir. CRUD içerisinde **Create** yani veri ekleme işlemine karşılık gelir.

- **Http PUT:** Sunucuda yani host'da halihazırda bulunan bir veriyi değiştirmek için kullanılan isteklerdir. CRUD içerisinde **Update** yani güncelleme işlemine karşılık gelir.

- **Http DELETE:** Bir verinin sunucudan yani hosttan tamamen silinmesi için kullanılır. CRUD içerisinde **Delete** yani silme işlemine karşılık gelir.

## Http Responses (Http Cevapları)

Örnek Http Cevabı:

    HTTP/1.1 200 OK
    Date: Wed, 12 May 2021 15:44:04 GMT
    Server: Apache/2.2.3 (CentOS)
    Content-Type: text/html
    (Response Body..)

Response temelde aşağıdaki yapılardan oluşur.

- **Durum Satırı:** Http protokolünün versiyonu, durum kodu, durum kodunun mesaj olarak karşılığından oluşur. Yukarıdaki örnekte : _HTTP/1.1 200 OK_
  Bu satıra baktığımızda kolaylıkla Http 1.1 protokolünün kullanıldığını isteğe karşılık 200 durum kodu döndüğünü ve OK mesajına karşılık geldiğini okuyabiliyoruz. bir Http request'i gönderdiğimizde dönen response içerisinde ilk baktığımız yer genelde durum satırı olur. Çünkü burası çağrımın statüsünü içerir.
- **Date:** Sunucunun istemcinin çağrısında cevap verdiği, tarihtir.
- **Server:** Sunucu ile ilgili bilgiyi içerir.
- **Content Type**: Sunucunun geri gönderdiği nesnenin türünü içerir.
- **Response Body**: Sunucunun döndüğü veriyi içeren bölümdür.

## Http Durum Kodları

Sunucudan bir istekte bulunduğumuzda sunucu durum satırında bu çağrının başarılı olarak gercekleşip gerçeklemediği bilgisini döner. Eğer çağrım sırasında bir hata oluştuysa hatayı tanımlayacak kodu da burda döner.
Ortak dil konuşulması adına Http Protokolünün sunmuş olduğu bazı durum kodları vardır.
En temelde bilinmesi gereken kodlar aşağıdaki gibidir.

- 200: OK (İstek başarılı)
- 401: Unauthorized (Yetki Hatası)
- 403: Forbidden (Hatalı Erişim İsteği)
- 404: Not Found (Kaynak bulunamadı)
- 500: Internal Server Error (Sunucu içerisinde hata oluştu)

**Okuma Önerisi:** Http durum kodlarının tamamı için [tıklayınız.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

**Okuma Önerisi:** Http Protokolü ve metotları ile ilgili daha detay bilgi için lütfen [tıklayınız.](https://developer.mozilla.org/en-US/docs/Web/HTTP)
