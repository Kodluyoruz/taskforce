# Ortam Dosyaları

`dotnet new webapi` komutu ile bir web api projesi oluşturduğunuzda yada Visual Studio içerisinde bir template aracılığıyla herhangi bir .Net core projesi yarattığınızda varsayılan olarak 2 tane settings dosyası ile karşılaşırız.

- appsettings.json
- appsettings.Development.json

Bu ortam dosyalarını uygulama içerisinde ihtiyaç duyduğumuz statik ifadeleri metinsel formatta tutmak için kullanırız. Dosya yapısı olarak json formatı kullanılır.

appsettings.json içerisinde tutulabilecek ifadelere örnek olarak veritabanı bağlantı bilgilerini verebiliriz. Uygulama içerisinde her yere bağlantı bilgisi yazdığımızı düşünelim. Gün geldiğinde veritabanı değiştiğinde bu bağlantı bilgisini uygulamanın her yerinde değiştirmek zorunda kalırız. Ama tek bir dosya içerisinden yönetirsek, sadece bir yerde değiştirdiğimizde tüm uygulama değişen veriye erişmiş olur.

Örnek bir proje yarattığınızda karşımıza çıkan bir diğer dosya appsettings.Development.json'dır. Burdaki Development ifadesini bir değişken gibi düşünebilirsiniz. Uygulamanın çalıştığı ortama göre farklı ayarları kullanabilmesi için appsettings.{Ortam}.json formatında dosya ekleyerek ortamlara göre uygulama ayarlarını değiştirebiliriz. Genel olarak aşağıdaki 3 ortam için appsettings dosyaları uygulama içerisinde bulunur.

- Development : Uygulama geliştirme aşamasında kullanılacak ayarlar için bu ortam kullanılır.
- Test (Staging): Geliştirilmesi tamamlanmış test edilme aşamasında kullanılacak ayarlar için bu ortam kullanılır.
- Production : Geliştirilmesi ve testi tamamlanmış gerçek ortamda kullanılacak ayarlar için bu ortam kullanılır.

**Inceleme Önerisi:** Farklı ortam ayarları ile ilgili detaylı bilgi için [tıklayınız.](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/environments?view=aspnetcore-5.0#environments)
