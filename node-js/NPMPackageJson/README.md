NPM ve Package.json Kavramları
======

Modül kavramı üzerine konuşurken ne söylemiştik? Modül genelde basit bir işlevi olan Javascript dosyasıydı. Bazı durumlarda bunları kendimiz yazarız, 
bazı durumlarda ise örneğin fs modülünde olduğu gibi Node.js çekirdek modüllerini kullanabilir. Çekirdek modülün avantajı nedir? fs modülü örneğine
dönelim biz herhangi bir kod yazmadan bu modüle ait olan önceden yazılmış read, write vs.. gibi fonksiyonları kullanabiliriz.


Ancak Node.js'in geniş uygulama sahasında bizim daha farklı hazır yazılmış kodlara ihtiyacımız olabilir. İşte burada NPM kavramı devreye girer.

## NPM - Node Package Manager
NPM - ( Node Package Manager ), ilk tanımı olarak NPM bize 3. kişiler tarafından yazılan paketleri bulabileceğimiz bir repo ortamı sunar. Bizler
ihtiyacımız olan herhangi bir konuda ihtiyacımız olan bir paketi indirip, kullanabiliriz.

#### Paket (Package) Kavramı
Paket, genellikle birden daha fazla modülden oluşan ortak işlevi olan yazılım parçalarıdır. Paket ile modül ilişkisini şu şekilde düşünebiliriz.
Kare şekline ait formülleri kare.js modülünde bulunduralım, daireye ait formüller daire.js dosyasında olsun. Bunları şekil paketi içerisinde
bulunan modüller olarak düşünebiliriz.


Peki gelelim NPM ortamında bulunan bu paketleri nasıl kullanabileceğize.

## NPM - Komut Satırı Uygulaması
NPM - ikinci tanımı olarak bize bu paketleri yükleyeceğimiz bit komut satırı uygulaması sunar. Bu komut satırı uygulaması Node.js yazılımıyla
birlikte gelir. Windows komut satırına yazdığımızda NPM komut satırı uygulamasının versiyonunu görebiliriz.
```
npm --version
```
## Package.json
Node.js uygulamasını oluştururken kullanacağımız çok farklı dosyalar var değil mi? Kendimiz yazabiliriz, Node çekirdek paketlerini 
kullanabiliriz veya NPM ortamından 3. kişilere ait paketleri indirebiliriz. Tüm bu kodları yönetmemiz için bizim bu bilgileri taşıyan bir
dosyaya ihtiyacımız var, işte bu dosyanın adı package.json. Bu dosyayı oluşturmak için 
```
npm init -y //y flagı yardımıyla tüm soruları varsayılan olarak kabul ederiz.
```
komutunu kullanırız. Oluşturulan varsayılan package.json dosyası aşağıdaki gibidir.

```
{
  "name": "test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

Artık NPM yardımıyla kendi projemize NPM ortamından bir paket indirebiliriz. 

```
npm i paket_adı veya npm install paket_adı
```

Örnek olması açısından `npm i express` komutuyla express paketini indirelim. Burada iki değişiklik olacak node_modules klasörü ve package-lock.json 
dosyası oluşturulacak. Node_modules klasörü incelendiğinde express modulü ve bu modüle bağımlı diğer modüllerin de indirildiğini göreceksiniz. 
package-lock.json dosyası incelendiğinde de bu modüller hakkında detaylı bilgiler bulunacaktır.


Son olarak package.json dosyası incelendiğinde 
```
  "dependencies": {
    "express": "^4.17.1"
  }
```
satırlarını göreceksiniz. Burada artık uygulamamız express paketine bağımlıdır ve kullanabilir.
