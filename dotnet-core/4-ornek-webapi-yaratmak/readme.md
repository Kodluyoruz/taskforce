# Örnek Web Api Yaratmak

.NET ile Web Api projesi oluşturmak istediğimizde, aşağıdaki dotnet komutlarını kullanarak bir Web Api projesi yaratabiliriz.

- Mevcut bulunduğumuz dizin ile aynı isimde bir webapi oluşturmak için `dotnet new webapi`

- Proje için ayrı bir dizin oluşturarak projeyi isimlendirmek için : `dotnet new webapi -n {ProjeAdi}`
  - Örnek : `dotnet new webapi -n BookStore`

Tüm proje dosyalarımızla ilgili bilgileri bir arada tutmamıza yarayan solution dosyamızı ise `dotnet new sln {SolutionAdi}` komutu ile oluşturabiliriz.

- Örnek: `dotnet new sln BookStoreSoln`

Oluşturdumuz solution dosyasına kullanacağımız projeleri eklemek için aşağıdaki gibi `dotnet sln add {ProjeAdi}` komutunu kullanabiliriz.

- Örnek : `dotnet sln add BookStoreWebApi`

**Inceleme Önerisi:** `dotnet new --list` komutu ile webapi proje tipi dışında oluşturabileceğimiz tüm proje tiplerini incelemek için [tıklayınız.](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-new#arguments)
