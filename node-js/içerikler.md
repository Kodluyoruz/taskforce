# NODE.JS İÇİNDEKİLER

## Node.js Nedir? 
### [Node.js Nedir?](WhatIsNodeJS/)
#### Sorular
1. Node.js Javascript çalışma ortamı için aşağıdakilerden hangisi söylenemez?
	- Saf Javascript kodlarını çalıştırabiliriz.
	- V8 Javascript Engine barındırır.
	- Varsayılan tarayıcı ile sınırlıdır. (Doğru)
	- Olay odaklı (Event-Driven) çalışır.
	- Asenkron olarak çalışır.
2. "Single Thread" ne anlama gelir?
	- Aynı anda sadece tek bir işlem yapılabilmesi. (Doğru)
	- Senkron çalışma.
	- Asenkron çalışma.
	- Fonksiyonel programlama.
	- Olay odaklı çalışma.

#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Node.js'in genel tanımı, neden ihtiyaç duyduğumuz ve temel özellikleri üzerine açıklamalar yaptık. 

### [Çalışma Ortamının Kurulması](WorkspaceSetup/)
#### Sorular
1. Yok.
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Node.js yazılımını ve VSCode editörünü indirerek, çalışmalarımızı yapacağımız ortamı kurduk. 

### [Asal Sayılar Çalışması](PrimeNUmbersExample/)
#### Sorular
1. Node.JS çalışma ortamında "process.argv[1]" ifadesine ait konsol çıktısı ne olur??
	- Node.js yazılımına ait dosya yolu.
	- Çalıştırılan .js dosyasında kullanılacak 3. argüman.
	- undefined
	- null
	- Çalıştırılan .js dosyasına ait dosya yolu. (Doğru)
2. "process" nesnesi için hangisi söylenemez?
	- Global bir nesnedir.
	- Kullanımı için "require()" zorunludur. (Doğru)
	- Üzerinde çalışılan işlem ile ilgili bilgiler taşır.
	- Node versiyon bilgisi taşır.
	- Dosya yolu bilgisi taşır.
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Node.js'in nasıl çalıştığı üzerine bir örnek yaptık. Konsoldan argüman olarak girilen iki sayı arasındaki asla sayıları konsola yazdırdık böylelikle
artık Javascript kodlarını çalıştırırken tarayıcıya bağımlı olmadığımızı gördük. 
### [Node.js REPL Ortamı](NodejsREPL/)
#### Sorular
1. Node.JS çalışma ortamında "process.argv[1]" ifadesine ait konsol çıktısı ne olur?
	- Node.js yazılımına ait dosya yolu.
	- Çalıştırılan .js dosyasında kullanılacak 3. argüman.
	- undefined
	- null
	- Çalıştırılan .js dosyasına ait dosya yolu. (Doğru)
2. "process" nesnesi için hangisi söylenemez?
	- Global bir nesnedir.
	- Kullanımı için "require()" zorunludur. (Doğru)
	- Üzerinde çalışılan işlem ile ilgili bilgiler taşır.
	- Node versiyon bilgisi taşır.
	- Dosya yolu bilgisi taşır.
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Node.js'in terminal ekranı olan REPL ortamı üzerine konuştuk. Nasıl kullanırız, kullanım avantajları ve dezavantajları nelerdir detaylıca bahsettik. 
### [Ödev 1 - Node.JS Komut Satırı Kullanımı](odev1/)
- Bu ödevde; Node.js çalışma ortamını nasıl kullanacağımızı, argümanları terminal ekranında nasıl belirteceğimizi ve genel Node.js çalışma mantığını pekiştirmeye çalışacağız.

## Asenkron Javascript 
### [Node.js'in Asenkron Yapısı](AsynchronousJavaScript/)
#### Sorular
1. Hangisi asenkron programlamanın avantajlarından değildir?
	- İşlemlerin birbirlerinin tamamlanmasını beklemeden yapılabilmesi.
	- Aynı anda farklı işlemlerin olay döngüsü içerisinde bulunması.
	- Bir işleme bağlı başka işlemlerin devam şeklinde bağlanabilmesi.
	- İşlemlerin sırasıyla yapılması. (Doğru)
	- İşlem sırasına zorunlu olarak bağımlı kalmamak.
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Asenkron programlama ve bu programlama tekniğinin Node.js için anlamı hakkında konuştuk. Hangi Javascript konuları bizim açımızdan önemlidir 
bundan da bahsettik. Node.js neden asenkron doğaya sahiptir sorusunu cevaplamaya çalıştık.
### [Callback Nedir?](WhatIsCallback/)
#### Sorular
1. Callback fonksiyon için aşağıdakilerden hangisi söylenebilir?
	- Başka bir fonksiyon içerisinde argüman olarak kullanılabilen fonksiyondur. (Doğru)
	- Yüksek seviyeli bir fonksiyon olmak zorundadır.
	- Bir Promise dönmek zorunludur.
	- Await anahtar kelimesi kullanılır.
	- Async anahtar kelimesi kullaılmalıdır.


2. Aşağıdaki kod blokunun çıktısı nasıldır?
```javascript
 
let x = 5;
console.log("1. gelen veri: ", x);

setTimeout(() => {
  x = x + 5;
  console.log("2. gelen veri: ", x);
}, 5000);

x = x + 5;
console.log("3. gelen veri: ", x); 
```

```
1. gelen veri:  5
3. gelen veri:  10
2. gelen veri:  15
(Doğru)
``` 
```
1. gelen veri:  5
3. gelen veri:  15
2. gelen veri:  10
``` 
```
1. gelen veri:  5
2. gelen veri:  10
3. gelen veri:  15
``` 
```
1. gelen veri:  5
2. gelen veri:  5
3. gelen veri:  5
``` 
```
1. gelen veri:  15
2. gelen veri:  15
3. gelen veri:  15
``` 
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Javascript'te kullanılan asenkron tasarım şablonlarından olan **callback** -geri çağrılan- fonksyionlar üzerine konuştuk. Nedir, neden kullanırız 
ve sonrasında örnek çalışma ile konuyu pekiştirmeye çalıştık.
### [Promise Nedir?](WhatIsPromise/)
#### Sorular
1. Promise yapısı ile ilgili aşağıdakilerden hangisi söylenemez?
	- Promise tamamlandığında resolve parametresi çağırılabilir.
	- Promise tamamlandığında reject parametresi çağırılabilir.
	- Executor fonksiyonu ile oluşturulur.
	- Resolve ve Reject sonuçlarını birlikte dönebilir. (Doğru)
	- Bir Javascript nesnesidir.
2. Aşağıdaki kod blokunun çıktısı nasıldır?
```javascript
 
const promise1 = new Promise((resolve, reject) => {
  reject("BAĞLANTI HATASI");
});

promise1
  .then((value) => {
    console.log(value);
  })
  .?????((error) => {
    console.log(error);
  }); kodunun çalıştırılması sonucunda ????? yerine ne yazılmalıdır?
```

```
catch
(Doğru)
``` 
```
then
``` 
```
return
``` 
```
this
``` 
```
Promise
``` 
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Javascript'te kullanılan asenkron tasarım şablonlarından olan **promise** yapısı üzerine konuştuk. Callback fonksiyonlara göre
avantajları nelerdir ondan bahsettik.
### [Async - Await Yapısı](AsyncAwait/)
#### Sorular
1. Bir fonksiyon async anahtar kelimesi ile birlikte tanımlanırsa, fonksiyonun olumlu sonuçlanması sonucunda ne dönüşü olur?
	- undefined döner.
	- argümanlarını döner.
	- promise döner. (Doğru)
	- birşey dönmez.
	- null döner.
2. Bir async fonksiyon await anahtar kelimesi ile birlikte kullanılırsa ......... ?
	- İlgili Promise olumlu bir şekilde dönene kadar async fonksiyonunun çalışması bekletilir. (Doğru)
	- Fonksiyon daha öncelikli olarak çalışır.
	- Sıradaki fonksiyona geçilir.
	- Reject olur.
	- Resolve olur.
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Javascript'te kullanılan asenkron tasarım şablonlarından olan **async await** yapısı üzerine konuştuk. Promise yapısı göre
avantajları nelerdir ondan bahsettik.
### [Ödev 2 - Post Sıralama ve Post Ekleme](odev2/)
- Bu ödevde; Node.js'in asenkron doğası hakkında örnek bir çalışma yapacağız. "Post Sıralama ve Post Ekleme" ile Promise ve Async-Await yapılarının
tekrarını yapacağız. 
## Node.js Temelleri
### [Olay Odaklı - Bloklamayan](EventDrivenNonBlocking/)
#### Sorular
1. Yok.
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Node.js Javascript çalışma ortamının son olarak olarak olay tabanlı ve bloklamayan tsanımları üzerine konuştuk. Node.js neden bloklamayan şekilde
çalışır, olay döngüsü nedir gibi soruları cevaplamaya çalıştık.
### [Modül Kavramı](WhatIsAModule/)
#### Sorular
1. Node.js uygulamalarında modül kavramının sıklıkla kullanılmasının nedeni aşağıdakilerden hangisi değildir?
	- Kod hatalarının daha kolay yakalanması.
	- Kod yönetiminin daha kolay sağlanması.
	- Modül haline getirilen Javascript kodun tekrar tekrar kullanılabilmesi.
	- İşlevlerin farklı dosyalara dağıtılması.
	- Daha az .js uzantılı dosya oluşturulması. (Doğru)
2. const { func1, func2 } = require('./otherFile'); şeklinde alınan fonksiyonların kullanımı nasıl olur?
	- import func1(), func2()
	- require func1(), func2()
	- export func1(), func2()
	- func1(), func2() (Doğru)
	- module.export func1(), func2()
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Node.js'in en önemli konu başlıklarından olan modül kavramı ve kullanım avantajları üzerine konuştuk.
### [Ödev 3 - Daire Modülü](odev3/)
- Bu ödevde; Node.js çalışma ortamı için kendi modülümüzü oluşturup bu modülü nasıl kullanacağımız bilgisini kullanacağız.
### [FS Modülü Kullanımı](FSModule/)
#### Sorular
1. Node.js fs modülünde yeni bir klasör oluşturmak için hangi fonksiyon kullanılır?
	- fs.readFile
	- fs.writeFile
	- fs.mkdir (Doğru)
	- fs.readFileSync
	- fs.unlink
2. Node.js fs modülünde dosya silmek için hangi fonksiyon kullanılır?
	- fs.rmdir
	- rm.deleteFile
	- rm.removeFile
	- fs.unlink (Doğru)
	- fs.appendFile
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Node.js Javascript çalışma ortamının en önemli çekirdek modülü olan "fs" modülü üzerine konuştuk. Ayrıca çekirdek modülü nedir ondan da
bahsettik.
### [Ödev 4 - FS Modülü Çalışması](odev4/)
- Bu ödevde; Node.js çekirdek modülü olan "fs" modülü hakkındaki bilgilerimizi pekiştirmeye çalışacağız.
### [NPM ve Package.json Kavramları](NPMPackageJson/)
#### Sorular
1. NPM komutları ile aşağıdakilerden hangisini yapamayız? 
	- Node.js çekirdek paketlerini indirmek. (Doğru)
	- Yeni paketler yüklemek.
	- Varolan paketleri silmek.
	- Paketleri güncellemek.
	- Paketleri listelemek.
2. Package.json dosyası hangi bilgiyi taşımaz?
	- Proje ismi.
	- Proje başlangıç dosyası.
	- İndirilen paket isimleri.
	- Projede kullanılan tüm js dosyalarının listesi. (Doğru)
	- Proje versiyonu.
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Node.js'in çalışma yapısında çok önemli yerler tutan NPM ve Package.json kavramları üzerine konuştuk.
### [Request - Response Döngüsü](RequestResponseLoop/)
#### Sorular
1. Yok.
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Node.js çalışma ortamının en önemli çalışma alanlarından olan WEB'in nasıl çalıştığına dair özet bir çalışma yaptık.
### [Bir Web Sunucusu Yazmak](CreateAWebServer/)
#### Sorular
1. Node.js http modülü sunucu oluşturmak için hangi metodu kullanır?
	- findServer
	- listenServer
	- writeServer
	- server
	- createServer (Doğru)
2. Node.js http modülü ile url değişimleri hangi özellik ile yakalanır?
	- res.url
	- req.url (Doğru)
	- url
	- req
	- res
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Node.js'in çekirdek modülü olan http modülü ile kendi web sunucumuzu oluşturmak üzerine konuştuk.
### [Ödev 5 - Kendi Web Sunucumuz](odev5/)
- Bu ödevde; Node.js çekirdek modülü olan "http" modülü ile web sunucusu oluşturma bilgilerimizi pekiştireceğiz.
### [Express.js Giriş](WhatIsExpress/)
#### Sorular
1. Express.js ile '/' adresine bir post request gönderelim ve cevap olarak 'POST Request' yazdıralım. Hangi kod bu işlemi yapar?
```
app.post('/', function (req, res) {
  res.send('POST Request')
})
(Doğru)
``` 
```
app.get('/', function (req, res) {
  res.send('POST Request')
})
``` 
```
app.get('/', function (req, res) {
  console.log('POST Request')
})
``` 
```
app.post('/', function (req, res) {
  console.log('POST Request')
})
``` 
```
app.put('/', function (req, res) {
  res.send('POST Request')
})
``` 
2. Aşağıdaki hangi paket ile bir web sunucusu oluşturulamaz?
	- http modülü
	- fs modülü (Doğru)
	- express.js
	- koa.js
	- hapi.js
### [Ödev 6 - Koa.js ile Web Sunucusu Yazımı](odev6/)
- Bu ödevde; Node.js üzerine yazılımı başka bir çatı olan Koa.js ile bir web sunucusu oluşturmaya çalışacağız.
## PCAT Projesi
### [PCAT Proje Tanıtımı](PCATProject/)
#### Sorular
1. Yok.
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; PCAT projesinin genel yapısı ve pratiğini yapacağımız genel konular üzerine konuştuk.
### [PCAT Projesi Çalışma Ortamı](PCATWorkspace/)
#### Sorular
1. Yok.
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; PCAT projesinin çalışma ortamını oluşturduk. Prettier ve GitHub ayarlarını tamamladık.
### [PCAT Projesi Express Nodemon Kurulumu](PCATExpressNodemon/)
#### Sorular
1. --save-dev flagı ne için kullanılır?
	- Modülü silmek.
	- Web sunucusunu indirmek.
	- Uygulamamızın modüle geliştirme aşamasında bağımlı olduğunu belirtmek. (Doğru)
	- Web sunucusunu başlatmak.
	- Uygulamanın çalışması için modülün gerekli olduğunu belirtmek.
2. Nodemon modülü ne için kullanılır?
	- Farklı modülleri indirmek.
	- Sunucunun kod değişiklikleri sonucunda çalışmasını yeniden başlatması. (Doğru)
	- İndirilen tüm modüllerin kaydedilmesini sağlamak.
	- Tüm modüllerin geliştime amaçlı indirileceğini belirtmek.
	- Yeni modül indirilmesini engellemek.
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Express.js ve Nodemon paketlerinin kurulumu tamamlandı ve bu paketlerin temelleri üzerine konuşuldu.
### [Clean Blog Proje - 1. Bölüm - Ödev 7](odev7/)
- Bu ödevde; Clean Blog projejisinin aşağıdaki özelliklerini yapmaya çalışacağız.
	- CleanBlog proje klasörünü oluşturalım.
	- Package.json dosyasını oluşturalım.
	- Prettier ayarlarını yapalım.(İsteğe bağlı)
	- Express ve Nodemon modüllerini indirelim.
	- `git init` ile lokal repomuzu oluşturalım.
	- get request içerisinde const blog = { id: 1, title: "Blog title", description: "Blog description" }, içeriğini gönderelim.
	- .gitignore dosyası oluşturalım ve ilk repomuzu gönderelim.
### [Statik Dosyalar - Middleware Giriş](StaticFilesMiddleware/)
#### Sorular
1. Middleware yapısı ile ilgili aşağıdakilerden hangisi söylenemez?
	- Request nesnesinde değişiklik yapabilir.
	- Response nesnesinde değişiklik yapabilir.
	- Sadece bir sefer kullanılır. (Doğru)
	- Request - Response döngüsünü sonlandırabilir.
	- next metodu kullanılabilir.
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; projemizin statik dosyalarının nasıl kaydedileceğini üzerine konuştuk. Middleware kavramı nedir, nasıl kullanırız konularından
bahsettik.
### [Template Engine Kavramı](TemplateEngine/)
#### Sorular
1. Template Engine ile hangisini yapamayız?
	- app.js içerisine html kodları yazılabilir. (Doğru)
	- Dinamik içerikleri gösterebiliriz.
	- Statik içerikleri gösterebiliriz.
	- Değişken değerlerini gösterebilir.
	- Saf Javascript kodu yazılabilir.
2. Template Engine yapısı içerisindeki partials klasörü kullanmamızın amacı nedir?
	- Template dosyalarının tamamını tek bir klasör içerine yerleştirmek.
	- Saf javascript kodlarını bu klasör içerisine yerleştirmek.
	- İlgili template dosyasına ait kodları yazmak.
	- Tüm template kodlarını tek bir klasöre yerleştirmek.
	- Ortak kullanılan kod parçalarının tekrar tekrar yazılmasını önlemek. (Doğru)
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Template Engine kavramı nedir? Projemizde nasıl kullanırız ve avantajları nedir üzerine konuştuk.
### [Clean Blog Proje - 2. Bölüm - Ödev 8](odev8/)
- Bu ödevde; Clean Blog projejisinin aşağıdaki özelliklerini yapmaya çalışacağız.
	- Public klasörü oluşturup statik dosyalarımızı içerisine yerleştirelim.
	- İlgili middleware fonksiyonunu yazarak public klasörümüzü uygulamamıza kaydedelim.
	- EJS modülünü indirelim.
	- Uygulamamızda EJS modülünü kullanacağımızı belirtelim.
	- Views klasörü oluşturalım ve tüm .html dosyalarımız views klasörü içerisinde .ejs dosyalarına çevirelim.
	- Partials klasör yapısını oluşturalım.
	- İlgili yönlendirmeleri ve _navigation.ejs klasöründeki link düzenlemelerini yapalım.
### [MongoDB Giriş](MongoDBIntro/)
#### Sorular
1. Aşağıdakilerden hangisi bir NoSQL veritabanı değildir?
	- MongoDB
	- CouchDB
	- Redis
	- PostgreSQL (Doğru)
	- DynamoDB
2. Aşağıdakilerden hangisi MongoDB özelliklerinden değildir?
	- NoSQL bir veritabanıdır.
	- Katı Schema yapısına sahiptir. (Doğru)
	- Döküman tabanlıdır.
	- Dağıtık bir veritabanıdır.
	- Yatay olarak ölçeklenebilir.
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; MongoDB veritabanı nedir üzerine genel bir tanımlama yapıldı. SQL ve NoSQL veritabanı şablonları arasındaki farklardan bahsedildi.
### [MongoDB - Compass Kurulumu](MongoDBCompassSetup/)
#### Sorular
1. Yok
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; MongoDB veritabanı kurulumu üzerine konuştuk. Ayrıca MongoDB veritabanıyla ile birlikte çok sıklıkla kullanılan bir grafik arayüz 
olan Compass kurulumu da yapıldı.
