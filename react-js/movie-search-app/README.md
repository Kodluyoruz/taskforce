## Movie Search App

Bu ödevde OMDb API kullanarak film araması yapabilme ve filmleri favorilere ekleyebilme fonksiyonları olan bir React uygulaması geliştireceğiz.

### Home Page

![movie-search-app](https://raw.githubusercontent.com/Kodluyoruz/taskforce/react/react-js/movie-search-app/figures/movie-search-app.png)

### Favorites Page

![favorites](https://raw.githubusercontent.com/Kodluyoruz/taskforce/react/react-js/movie-search-app/figures/favorites.png)


### Detail Page

![detail](https://raw.githubusercontent.com/Kodluyoruz/taskforce/react/react-js/movie-search-app/figures/detail.png)


### Proje Nasıl Çalıştırılır

**Proje adresine [buradan](https://github.com/Kodluyoruz/movie-search-app) ulaşabilirsiniz.**

- Projeyi fork'ladıktan ya da indirdikten sonra projenin bulunduğu klasörde "npm install" komutu ile gerekli paketlerin yüklenmesi gerekiyor.
- OMDb API kullanabilmek için bir API key'e ihtiyacımız var. Email adresinizle [buradan](http://www.omdbapi.com/apikey.aspx) alabilirsiniz. API key'i MovieContext component'i içerisinde constant olarak tanımlanmış API_KEY'e atadıktan sonra OMDb API'ı kullanmaya başlayabilirsiniz.
- Daha sonra "npm run start" komutu ile uygulama başlatılabilir.

### Proje Hakkında

Bu projede filmler ile alakalı anahtar kelimeyi arama kutucuğuna yazdıktan sonra OMDb API'ya atılan istek sayesinde film listeleme yapılıyor. Film kartlarının sağ üst köşesinde bulunan yıldız ikonu sayesinde filmleri favorilere ekleyebiliyoruz. Favoriler route'unda eklenilen bu filmleri listeleyebiliyoruz. Film kartına tıkladığımızda ise filme ait daha detaylı bilgiye ulaşabildiğimiz detay sayfası görüntüleniyor.

### Yapılacaklar

- Router.js'de routes içine favorite route'u için config objesi oluşturun. (Hazır olan home route objesine benzer şekilde)
- Film detay sayfasını görüntülemek için Home page içinde bulunan Link component'inde gerekli olan film id'sine göre dinamik routing işlemini gerçekleştiriniz.
- Home sayfasından gönderilen film id'sini Detail sayfasında yakalayabilmek için React Router'ın useParams fonksiyonunu kullanınız.

### NOT
- Dinamik routing ödev olarak beklendiği için her film için sabit id'li bir film detay sayfası görüntülenmektedir. Görevler tamamlandıktan sonra projeniz dinamik bir routing yapısına sahip olacaktır. 
