# Swagger UI Nedir ?

Swagger UI, oluşturduğumuz API'lar ile ilgili bilgileri görselleştirmemiz ve otomatik dökümantasyon oluşturabilmemize yarayan yardımcı bir arayüzdür. Bu arayüz sayesinde web api projemizde hangi resource'lara sahip olduğumuzu ve bu resourcelarla ilgili hangi eylemleri yapabileceğimizle ilgili bir dökümantasyon oluşturmuş oluruz. Bu sayede hem ekip içindeki, hem de API'mizi kullanacak diğer geliştirici arkadaşların bilgi sahibi olmasını sağlamış oluruz.

Bir .net core web api projesi yarattığımızda proje içerisine varsayılan olarak swagger ui eklentisi eklenmiş olarak gelir. Development ortamında çalışan uygulama için varsayılan olarak `https://localhost:5001/swagger/index.html`adresinden erişilebilir.

Swagger UI içerisinde bir eylemle ilgili olarak temel iki çeşit bilgi bulunur.

- Parameters : Http Put ve Http Post çağrımlarının beklediği parametreleri gördüğümüz yerdir.

- Responses : Http talebine karşılık olarak nasıl bir HTTP response'u oluşturabileceğini, response içerisinde hangi tipte bir data döneceğini detaylı olarak görebiliriz.

Swagger UI aracılığı ile eylemlerin beklediği parametreleri kolay bir şekilde doldurarak örnek çağrımlar yapabilir, dönen cevapları gözlemleyebiliriz.

**İnceleme Önerisi:** Swagger UI ile ilgili detaylı bilgi için [tıklayınız.](https://swagger.io/tools/swagger-ui/)
