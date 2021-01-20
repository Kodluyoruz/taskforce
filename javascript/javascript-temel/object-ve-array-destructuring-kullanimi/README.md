# Object/Array Destructuring

Obje ve dizilerin parçalarına ayrılıp değişkenlere atanmasıdır.  Büyük yapılardan kullanışlı ve küçük parçalar çıkarmak için kullanılır.

### Object Destructuring

Aşağıdaki *ayarlar* nesnesini kullanarak konuyu anlamaya çalışalım.

```javascript
let ayarlar = {
    userName: "kodluyoruz",
    password: "kodladik",
    isActive: false,
    ip: "127.0.0.1",
    domainName: "kodluyoruz.org"
}
```

##### Obje içerisindeki bilgilerin tek seferde çıkarılılmasına ve kullanılmasına olanak sağlar. 

```javascript
let {userName: user, password, isActive, ip, domainName} = ayarlar;
```

Yukarıda yaptığımız işlem sayesinde ihtiyacımız olan değişkenleri daha rahat kullanabileceğiz.

Ek olarak *"userName: user"* şeklindeki kullanım userName değişkenini user olarak kullanmak istediğim anlamına geliyor.

```javascript
console.log(user); //"kodluyoruz"
console.log(ip); //"127.0.0.1"
```

##### Bazı bilgileri aldıktan sonra kalanları yeni bir objeye eklemek için de kullanılır.

```javascript
let {userName, password, isActive, ...yeniObje} = ayarlar;
```

Yukarıdaki kullanımda *ayarlar* nesnesindeki ilk üç değişkeni alıp kalanları *yeniObje* isminde yeni nesneye atadık.

```javascript
console.log(yeniObje); //{ip: "127.0.0.1", domainName: "kodluyoruz.org"}
```

##### Destructuring ile kopyalama işlemi

```javascript
let ayarlar2 = {...ayarlar};
```

Yukarıdaki işlem ile *ayarlar* nesnesini olduğu gibi *ayarlar2* ismindeki yeni nesneye kopyalamış olduk.

### Array Destructuring

Object destructuring ile aynı şekilde kullanılır.

Aşağıdaki *puan* ismindeki diziyi kullanarak durumu gösterelim.

```javascript
let puan = [50, 60, 70, 80, 90, 100];
```

*puan* değişkeninin 1. ve 2. indexini tek seferde kullanmak istesek;

```javascript
let [ilkPuan, ikinciPuan, ...kalanPuanlar] = puan;
```

Yukarıdaki kullanımda ilk puanı *ilkPuan*, ikinci puanı *ikinciPuan* ismiyle kullanabileceğimizi belirttik. Kalan punları ise *kalanPuanlar* ismindeki yeni diziye yolladık.

```javascript
console.log(ilkpuan); //50
console.log(kalanPuanlar); //[70, 80, 90 100]
```

Kopyalama işlemi de aynı şekilde yapılır;

```javascript
let puan2 = [...puan];
```

### Sorular

Aşağıdaki soruları kendiniz yaparak konuyu pekiştirin.

```javascript
let mevsimler = [ilkbahar, yaz, sonbahar, kış];
```

##### Soru 1: Yukarıdaki *mevsimler* dizisinin ilk ve ikinci elemanını "ilkMevsim" ve "ikinciMevsim" ismiyle kullanıma açın, kalanını ise "kalanMevsimler" isminde yeni bir diziye atayın.

[Soru 1 Çözüm](https://codepen.io/sahinaykkt/pen/KKgJeoM?editors=0011)

```javascript
let bilgisayar = {
    monitor: "philips",
    klavye: "microsoft",
    mouse: "logitech",
    kulaklık: "kingston"
};
```

##### Soru2: Yukarıdaki *bilgisayar* objesini *bilgisayar2* adındaki yeni bir objeye kopyalayın ve yeni objenin monitörünün markasını "viewsonic" olarak değiştirin.

[Soru 2 Çözüm](https://codepen.io/sahinaykkt/pen/ExgrRrE?editors=0011)

