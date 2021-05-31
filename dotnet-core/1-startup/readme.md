# Startup.cs

Bir web api projesi oluşturduğumuzda, uygulamamız için gerekli ayarları yapabilmemiz için Startup.cs dosyasındaki Startup class'ı varsayılan ayarlar ile kurulu olarak oluşturulur. Bu class içerisindeki ayarlar ile uygulamamızın nasıl davranacağını, hangi bileşenleri kullanacağını belirtmiş oluruz.

Bir dotnet uygulaması ayağa kalktığında ilk olarak Program.cs çalışır. Çünkü dotnet core yani dotnet5 aynı zamanda bir console uygulamasıdır. Bildiğiniz üzere bir console uygulamasında da ilk olarak Program.cs çalışır. O nedenle uygulama içerisinde kullanılacak konfigurasyon dosyasının ne olacağı bu noktada uygulamaya gösterilir. Bu da Startup.cs dosyasıdır.

Startup.cs içerisinde 2 adet temel metot bulunur. Bu metotlar aracılığı ile uygulamamızın ayarlarını oluştururuz. Bu metotlar ve detaylarını aşağıdaki şekilde özetleyebiliriz.

- **Configure()** : Bu metot uygulamamıza gelen HTTP isteklerini hangi aşamalardan geçirerek bir HTTP cevabı oluşturacağımızı belirttiğimiz metottur. Startup içerisinde bu metodun doldurulması ve doğru ayarlarlanması gereklidir. İlerleyen derslerde middleware kavramından bahsedeceğiz. Bu middleware'ler kullanılarak uygulama içerisinde bir pipeline oluşturulur. İşte bu pipeline configure() dosyası içerisinde belirlenir.

- **ConfigureServices()** : Bu metot aracılığı ile uygulamamızın içerisinde kullanacağımız bileşenlerin ayarlarını yapabiliriz. ConfigureServices metodu içerisinde uygulamanın kullanacağı servisler eklenir ve konfigüre edilir. Servisleriyse belli bir işi yapmaktan sorumlu kod parçaları, sınıflar yada kütüphaneler gibi düşünebilirsiniz. Kısaca onlara bileşenler de diyebiliriz.
