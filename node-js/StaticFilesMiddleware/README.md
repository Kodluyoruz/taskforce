Statik Dosyalarla Çalışmak
======

Bir web uygulaması oluştururken, bu uygulamanın iskeleti statik dosyalardır. Biz oluşturmak istediğimiz uygulamanın iskelet yapısı ile ilgili css, html, js 
dosyalarını ve görsellerini öncelikle göndermek isteriz. 


Bir express uygulamasında statik dosyaları kullanmak için, express web çatısının `express.static` gömülü middleware fonksiyonu kullanılır. Bu statik dosyaları 
uygulamanın kök klasörü içerisindeki `public` isminde bir klasör oluşturup, statik dosyaların tamamını bu klasörün içerisine koyalım. app.js dosyasının 
içerisinde de aşağıdaki kodu eklememiz gerekiyor.

```
app.use(express.static('public'));
```
### Middleware
Yukarıda söylediğimiz birşey var, diyoruz ki express.static bir middleware fonksiyonudur, peki şunu soralım o zaman middleware nedir? Daha önce 
söylediğimiz gibi Node.js uygulaması temelinde bir request ve response döngüsüdür. Biz bir istekte bulunuyoruz ve buna karşılık bir cevap istiyoruz. İşte
bu request - response döngüsünün içerisindeki görevi olan her fonksiyona `middleware` denir. Yani herşey request ve responsun 'middle'ında ortasında
yapılır.


Middleware kullanarak aşağıdaki işlemleri gerçekleştirebiliriz.
- Herhangi bir fonksiyon çalıştırılabiliriz.
- Request ve Response nesnelerini değiştirebiliriz.
- Request - Response döngüsü sonlandırılabilir.
- next() metodu ile sonraki middleware çağırılabilinir.


Aşağıdaki görselde klasik middleware yapısını görebilirsiniz. Gördüğünüz üzere get request de bir middlewaredir. Dikkatinizi çekecek bir diğer nokta 
kodumuzda `next` metodu kullanmıyoruz çünkü `send` ile aynı döngüyü sonlandırıyoruz '/' adresine ulaşmak için.

![Middleware](https://github.com/Kodluyoruz/taskforce/blob/node.js/node-js/StaticFilesMiddleware/figures/middleware.png)

Şimdi kendi middleware fonksiyonumuzu oluşturalım myLogger isminde. 
```javascript
const myLogger = (req, res, next) => {
  console.log('Middleware Log 1');
  next();
}
```

Bu middleware'i çalıştırmak için kaydetmemiz gerekiyor.
```
app.use(express.static('public'));
app.use(myLogger);
```

uygulamamızı çalıştırdığımızda myLogger middleware kodumuzunda çalıştığını göreceksiniz.


Son olarak statik dosyalarımızı çalıştırdık, peki ilgili html dosyalarına nasıl ulaşacağız. Aslında bunun daha kolay bir yöntemini göreceğiz ileride
ancak burada öncelikle path modülünü çağıralım.

```
const path = require('path');
```
sonrasında ise temp klasörü içerisindeki index.html dosyasına ulaşmak için

```javascript
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'temp/index.html'));
});
```
kodunu kullanacağız. Uygulamamızı tekrar çalıştırdığımızda index sayfamızı başarılı bir şekilde görebiliriz.
