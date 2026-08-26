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
### [MongoDB - CRUD İşlemleri](MongoDBCRUD/)
#### Sorular
1. Tek döküman oluşturmak için hangi fonksiyon kullanılır?
	- insertOne (Doğru)
	- insertMany
	- find
	- deleteOne
	- remove
2. Aşağıdakilerden hangisi MongoDB özelliklerinden değildir?
	- deleteOne
	- decorator (Doğru)
	- insertOne
	- find
	- insertMany
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; MongoDB veritabanı ile pratik CRUD işlemleri yapıldı.
### [Mongoose CRUD İşlemleri](MongooseCRUD/)
#### Sorular
1. Öğrencilerin isim (name) ve yaş (age) bilgilerinin saklandığı StudentSchema yapısı nasıl olur?
```
const StudentSchema = new Schema({
  name: String,
  age: String,
});
``` 
```
new Schema({
  name: String,
  age: Number,
});
``` 
```
const StudentSchema = ({
  name: String,
  age: Number,
});
``` 
```
const StudentSchema = new Schema({
  name: String,
  age: Number,
});
(Doğru)
``` 
```
const StudentSchema = new Schema({
  name: 
  age: 
});
``` 
2. Mongoose ODM ile tek bir veri silmek için hangi fonksiyon kullanılabiliriz?
	- findOne
	- replaceOne
	- deleteOne (Doğru)
	- updateOne
	- removeOne
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Mongoose ODM yapısı üzerine konuştuk ve Mongoose ile pratik CRUD işlemleri yapıldı.
### [Request Body Nesnesi](RequestBody/)
#### Sorular
1. Node.js uygulamalarında bir formdan veri gönderilmesi sırasında hangi HTTP metodu kullanılır?
	- GET
	- PUT
	- PATCH
	- DELETE
	- POST (Doğru)

#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Tarayıcı içerisindeki bilgileri nasıl body özelliği ile yakalayacağımız üzerine konuştuk.
### [Model ve Dinamik İçerik](ModelAndDynamicContent/)
#### Sorular
1. Yok.
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Model kavramı içeriklerimizi nasıl dinamik olarak veritabanından alabileceğimiz üzerine konuştuk.
### [Clean Blog Proje - 3. Bölüm - Ödev 9](odev9/)
- Bu ödevde; Clean Blog projejisinin aşağıdaki özelliklerini yapmaya çalışacağız.
	- cleanblog-test-db adında bir veri tabanı için mongoose ile gerekli bağlantı bilgilerini yazalım.
	- "Add New Post" sayfamızdan göndericeğimiz veriler req.body ile yakalayalım, gerekli middleware fonksiyonarını kullanalım.
	- title:String, detail:String, dateCreated:Date(default now) özelliklerine sahip `Post` modelini oluşturalım.
	- Veri tabanımızda 3 adet pos dökümanı oluşturalım.
	- Oluşturduğumuz post dökümanlarını Blog sitemizin anasayfasında gösterelim.
### [Tekil Fotoğraf Sayfaları](SinglePhotoPages/)
#### Sorular
1. Yok.
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; projemizdeki tekil fotoğraf sayfalarının nasıl olacağı üzerine konuştuk.
### [Clean Blog Proje - 4. Bölüm - Ödev 10](odev10/)
- Bu ödevde; Clean Blog projejisinin aşağıdaki özelliklerini yapmaya çalışacağız.
	- index.ejs içerisinde `/posts/<%= posts[i]._id %>` ile _id bilgisini gönderelim.
	- app.js içerisinde GET metoduyla "/posts/:id" ile gönderilen "_id" yi yakalayalım. .
	- tekil post bilgilerini post.ejs dosyasına gönderelim.
	- post.ejs içerisine post.title, post.detail ve post.dateCreated bilgilerini gönderelim. (her bir post için ayrı image kullanmayacağız)
### [Görsel Yüklemek](UploadImage/)
#### Sorular
1. <input name="test" type="file" /> görsel input alanı sonucunda elde edilen req.files.test nesnesi ile görsele ait hangi bilgiye ulaşılamaz?
	- Görselin dosya ismine 
	- body bilgisine (Doğru)
	- mv fonksiyonuna
	- "size" özelliğine
	- md5 checksum özelliğine
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; projemize görsel yüklerken yapılması gereken işlemler üzerine konuştuk.
### [Fotoğraf Bilgisi Güncellemek](UpdatePhoto/)
#### Sorular
1. Yok.
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; projemizdeki tekil fotoğraf bilgilerinin nasıl güncelleyeceğimiz üzerine konuştuk.
### [Fotoğraf Silmek](DeletePhoto/)
#### Sorular
1. Yok.
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; projemizdeki tekil fotoğraf sayfalarının nasıl silineceği üzerine konuştuk.
### [MVC Yeniden Düzenleme](MVCRefactoring/)
#### Sorular
1. Uygulamada Schema düzenlenmesi hangi kod bölümünde yapılır?
	- Controller
	- Route
	- Model (Doğru)
	- View
	- Template
2. Hangisi Node.js uygulamalarında MVC tasarım şablonu kullanılmasının sebeplerinden değildir?
	- Uygulama dosya yapısını düzenlemek.
	- Uygulama hatalarının daha kolay yakalanmasını sağlamak.
	- Tüm kodu tek bir dosya içerisinde toplamak. (Doğru)
	- app.js dosyası içerisinde model oluşturmak.
	- Yönlendirmeler ve ilgili fonksiyonları farklı dosyalar içerisinde yapmak.
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; projemizin MVC yeniden düzenlenmesinin nasıl yapılacağı üzerine konuştuk. Aynı zamanda neden MVC düzenlememiz yapılır ondan bahsettik.
### [Clean Blog Proje - 5. Bölüm - Ödev 11](odev11/)
- Bu ödevde; Clean Blog projejisinin aşağıdaki özelliklerini yapmaya çalışacağız.
	- post.ejs template içerisinde UPDATE ve DELETE butonu oluşturalım.
	- Herhangi bir post verisini güncellemek için gerekli çalışmaları yapalım.
	- Herhangi bir post verisini silmek için gerekli çalışmaları yapalım.
	- Kodumuzu MVC yapısına göre tekrar düzenleyelim.
### [PCAT Sayfalama](PCATPagination/)
#### Sorular
1. Yok.
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; projemizdeki sayfalama özelliğinin nasıl yapılacağı üzerine konuştuk.
### [Heroku - MongoDB Atlas Deployment](HerokuDeployment/)
#### Sorular
1. Yok.
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; projemizin Heroku ortamına nasıl yükleneceği üzerine konuştuk. Aynı zamanda MongoDB Atlas bulut veritabanından faydalandık.
### [Clean Blog Proje - 6. Bölüm - Ödev 12](odev12/)
- Bu ödevde; Clean Blog projejisinin aşağıdaki özelliklerini yapmaya çalışacağız.
	- Uygulamamızı HEROKU ve MongoDB Atlas ücresiz servislerini kullanarak yükleyelim.
	- Not: Uygulamamızda sayfalama ve görsel yükleme işlemlerini yapmadık. Sonraki projemizde de bu özellikleri kullanacağız.

## SmartEdu Projesi 
### [Smartedu Proje Tanıtımı](SmarteduProject/)
#### Sorular
1. Yok
	
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Smartedu projemizi ve projemizde üzerine çalışacağımız konulardan bahsettik.
### [HTTP Durum Kodları](HTTPStatusCodes/)
#### Sorular
1. 201 HTTP yanıt durumu kodu ne ifade eder?
	- İsteğin başarılı olduğunu ve bir kaynağın oluşturulduğu belirtilir. (Doğru)
	- İsteğin sadece başarılı olduğunu belirtir.	
	- İsteğe karşılık alınan yanıta erişim yetkisi olmadığını belirtir.	
	- İstenen kaynağın sunucu tarafından bulunamadığını belirtir.	
	- Sunucu hatası gösterir.	

2. Nodemon uygulamasını sadece uygulama geiştirme amaçlı kullanmak (devDependency) için nasıl indirmemiz gerekir?
		
	- npm i nodemon	
	- npm i --save nodemon
	- npm i -D nodemon (Doğru)	
	- npm nodemon	
	- nodemon npm --save-dev	

#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; SmartEdu projesinin genel kurulumunu ve HTTP Status Codes konusuna genel bir giriş yaptık. 

### [Linkleri Güncellemek](LinkUpdates/)
#### Sorular
1. SmartEdu projesinde "contact" sayfasının linkini aktif etmek için hangi kodu yazmamız gerekir?
	- <%= page_name ==='contact' 'active' %>
	- <%= page_name ==='contact' && 'active' %> (Doğru)	
	- <% page_name ==='contact' && 'active' %>	
	- <%= page_name ='contact' && 'active' %>		
	- <%= page_name 'contact' && 'active' %>		
	

#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; SmartEdu projemizin statik dosyalarını, template sayfalarını oluşturduk. Sonrasında her sayfaya ait olan linkleri nasıl
aktif hale getireceğimizden bahsettik. 

### [Routing - Yönlendirme](Routing/)
#### Sorular
```
1. 
app.get('/random', function (req, res) {
  res.send('TEST')
}) yönlendirmesi hangi istek ile eşleşir?
```
		
- /index	
- /test	
- /app	
- /random (Doğru)
- /send		
	

#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; SmartEdu projemizin yönlendirme routing klasörünü oluşturduk ve bu yönlendirme dosyalarına bağlı olarak ilgili controller
dosyası oluşturuldu. 

### [Kurs Modeli](CourseModel/)
#### Sorular
1. Oluşturulan herhangi bir modelde ilgili alanın zorunlu olduğunu belirtmek için hangi anahtar kelime kullanılır?
		
	- type	
	- unique	
	- must	
	- trim	
	- required (Doğru)

2. Oluşturulan herhangi bir modelde ilgili alanın benzersiz olduğunu belirtmek için hangi anahtar kelime kullanılır?
		
	- required	
	- unique (Doğru)	
	- type	
	- String	
	- Number
	
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; SmartEdu projemizin ilk modeli olan "Course" modelini oluşturduk.

### [Postman ve API](PostmanAndAPI/)
#### Sorular
1. Yok
	
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Postman uygulaması ve kullanım şekli üzerine konuştuk.

### [Kursları Listelemek](CourseListing/)
#### Sorular
1. Yok
	
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; SmartEdu projemizdeki kurslar sayfasını oluşturduk ve veritabanında bulunan kurs dökümanını sayfa içerisinde yazdırdık.

### [Tekil Kurs Sayfası ve Slugify](SingleCourseAndSlugify/)
#### Sorular
1. Oluşturulan herhangi bir modelde ilgili alanın zorunlu olduğunu belirtmek için hangi anahtar kelime kullanılır?		
		
	- req.body	
	- req.query
	- req.true (Doğru)
	- req.id	
	- req.slug
	
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; SmartEdu projemizdeki her kursun kendisine özel tekil kurs sayfasını oluşturduk ve aynı zamanda slugify paketini kullandık.

### [Kategori Oluşturmak ve Listelemek](CategoryListing/)
#### Sorular
1. Yok
	
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; SmartEdu projemizdeki kategori bölümünü oluşturduk ve kursları kategorilere göre listeledik.

### [Kayıt Sayfası ve Bcrypt Paketi](RegisterAndBcrypt/)
#### Sorular
1. Yok
	
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; SmartEdu projemizdeki kayıt sayfasını oluşturduk ve Bcrypt paketi hakkında konuştuk.

### [Giriş Sayfası ve Giriş İşlemi](LoginPage/)
#### Sorular
1. Yok
	
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; SmartEdu projemizdeki giriş sayfasını oluşturduk ve giriş işlemleri üzerine konuştuk.

### [Session Nedir?](WhatIsSession/)
#### Sorular
1. Yok
	
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Session -oturum- kavaramı üzerine konuştuk.

### [Çıkış İşlemi](SmarteduLogout/)
#### Sorular
1. Yok
	
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Session'ı -oturum- nasıl sonlandıracağımız konusu üzerine konuştuk.

### [Kişiye Özel İçerik](PersonalizedContent/)
#### Sorular
1. Yok
	
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Kişiye özel içerik sayfasını **dashboard** nasıl oluşturacağımız üzerine konuştuk.

### [Özel Middleware](CustomMiddleware/)
#### Sorular
1. Yok
	
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Nasıl ihtiyaçlarımıza göre özel ara yazılımları (Middleware) oluşturacağımız üzerine konuştuk.

### [Kullanıcı Rolleri](UserRoles/)
#### Sorular
1. Yok
	
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Kayıt olan kullanıcılar için nasıl farklı roller oluşturabileceğimiz üzerine konuştuk.

### [Kurs Oluşturmak](CreateCourse/)
#### Sorular
1. Yok
	
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Öğretmen yetkisine sahip olan kullanıcının nasıl yeni bir kurs oluşturabileceği üzerine konuştuk.

### [Kurs - Öğretmen İlişkisi](CourseAndTeacher/)
#### Sorular
1. Yok
	
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Kurs ile onu oluşturan öğretmen kullanıcısının arasındaki ilişkiyi konuştuk.

### [Kurs - Öğrenci İlişkisi](CourseAndStudent/)
#### Sorular
1. Yok
	
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Kurs ile onu oluşturan öğrenci kullanıcısının arasındaki ilişkiyi konuştuk. Öğrenci kullanıcısının derse nasıl kaydedileceğini inceledik.

### [Kurs - Öğrenci İlişkisi II](CourseAndStudentII/)
#### Sorular
1. Yok
	
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Kurs ile onu oluşturan öğrenci kullanıcısının arasındaki ilişkiyi konuşmaya devam ettik.

### [Arama - Search Alanı](SearchArea/)
#### Sorular
1. Yok
	
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Smartedu projemizdeki arama alanını oluşturduk.

### [İletişim Sayfası ve Mail Göndermek](SendEmail/)
#### Sorular
1. Yok
	
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Smartedu projemizdeki iletişim sayfasını oluşturduk ve nodemailer eklentisi yardımıyla mail gönderme işlemini yaptık.

### [Bildirim Mesajları](FlashMessages/)
#### Sorular
1. Yok
	
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Smartedu projemizdeki bildirim mesajları üzerine konuştuk.

### [Kayıt ve Kullanıcı Doğrulama](Validation/)
#### Sorular
1. Yok
	
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Smartedu projemizdeki kayıt ve giriş sayfalarındaki kullanıcı doğrulama işlemleri üzerine konuştuk.

### [Kurs Silmek](DeleteCourse/)
#### Sorular
1. Yok
	
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Smartedu projemizdeki kursları nasıl sileceğimiz üzerine konuştuk.

### [Kurs Güncellemek](UpdateCourse/)
#### Sorular
1. Yok
	
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Smartedu projemizdeki kursları nasıl güncelleyeceğimiz üzerine konuştuk.

### [Admin Alanı ve Kullanıcı Silmek](AdminArea/)
#### Sorular
1. Yok
	
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Smartedu projemizde admin alanını nasıl oluşturacağımızı ve kullanıcıları nasıl sileceğimiz üzerine konuştuk.

### [Smartedu Deployment](SmarteduDeployment/)
#### Sorular
1. Yok
	
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Smartedu projemizi Heroku ortamına nasıl yükleyeceğimiz üzerine konuştuk.
