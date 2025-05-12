Node.js Nedir?
======

Node.js, Chrome V8 JavaScript Engine'i temel alan bir JavaScript çalışma ortamıdır. Bu çalışma ortamı sayesinde bizler Javascript kodlarını kullanmak için tarayıcı 
kısıtlamalarından kurtulmuş oluruz. En kısa ifadeyle Node.JS tarayıcılara ihtiyaç duymadan heryerde çalışabilir.

## Tarihçesi

Node.js'in ilk sunumu Ryan Dahl tarafından JSCONF 2009 yılında yapıldı. 
[Sunum videosunu buradan izleyebilirsiniz.](https://www.youtube.com/watch?v=ztspvPYybIY) Ayakta alkışlanan bu sunum sonrasında tarayıcı engelinden kurtulan Javascript, front-end ve 
back-end çalışmalarda kullanılan en popüler programlama dili olmuştur.

## Node.js Nasıl Çalışır?
### Event-Driven:
Node.js event-driven **olay odaklı** çalışır. Tek thread kullanmasından, yani aynı anda sadece bir işlem yapabilmesi nedeniyle node.js kendisinden istenilen işleri 
bir olay döngüsünün içerisinde değerlendirir.
### Non-Blocking:
Node.js non-blocking **engelemeyen** çalışır. Node.js işlem sırasına koyduğu bir olayın tamamlanmasını beklemeden diğer olayı işleme alabilir, bunun sonucu olarak Node.js 
iş akışını engellemez.
### Asynchronous:
Node.js asynchronous **asenkron** çalışır. Asenkron çalışma, kod akışının yukarıdan aşağıya ilerlemediği, işlemlerin birbirini beklemediği çalışma türüdür. 
Bu sayede işlem sırası olaya göre belirlenebilir.

======

> Node.js çalışma mantığı üzerine sıkça kullanılan bir benzetmeden biz de faydalanalım. Çalışma ortamımızın bir restoran olduğunu düşünelim ve bu restoranımızda 
> tek başına çalışan ve doğal olarak aynı anda tek bir iş yapabilicek **single thread** bir garson arkadaşımız olsun. Bu garson arkadaşımız bir masadan sipariş aldıktan sonra 
> orada beklemez değil mi? İlgili siparişi mutfak tarafında bildirdikten sonra başka masalara bakabilir **non blocking**. Başka masadan da sipariş aldıktan sonra bir diğer
> masayı düzenleyebileceği gibi olay sırasına göre yeni müşterileri de karşılayabilir **event-driven**. 
> 

## Daha Fazlası İçin
- [Node.js Resmi Sitesi](https://nodejs.org/en/about/)
- [Stackoverflow How Node.js Works](https://stackoverflow.com/questions/9497076/how-node-js-works)
- [Freecodecamp What exactly is Node.js?](https://www.freecodecamp.org/news/what-exactly-is-node-js-ae36e97449f5/)
