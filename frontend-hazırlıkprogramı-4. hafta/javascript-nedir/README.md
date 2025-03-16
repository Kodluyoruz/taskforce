# JavaScript Nedir?

JavaScript, kısaltılmış haliyle JS, high-level (0 ve 1'larden oluşan makine dilinden farklı olarak günlük yaşamdaki konuşma diline yakın olan yüksek seviyeli programlama dili), sıklıkla just-in-time compiled (program başladığı anda kodun makine diline çevrildiği) ve multi-paradigm (birden fazla programlama) paradigmasını bünyesinde barındıran, böylelikle spesifik bir problemin çözümünde o dile özgü tekil bir paradigmanın sınırları içinde kalıp zorlanmak yerine çözüme yönelik uygun programlama metodolojisinin seçilerek, minimum maliyetle maksimum verim alınmasına yönelik programlama (tasarım) konseptidir.

JavaScript prototip-tabanlı, dinamik türlere ve birinci-sınıf fonksiyonlara sahip bir betik dildir. Nesne yönelimli, imperatif ve fonksiyonel programlama prensiplerine sahiptir.

**JavaScript ile Java farklı dillerdir.**

![Java-vs-JavaScript](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/javascript-nedir/figures/java-javascript.png)

JavaScript ve Java arasında; isimleri, yazım şekli ve standart kütüphanelerindeki benzerlikler dışında bir bağlantı yoktur ve iki dilin semantikleri çok farklıdır. JavaScript'in yazım şekli C programlama dilinden türetilmiş, semantiği ve tasarımı ise Self ve Scheme programlama dillerinden esinlenmiştir. JavaScript isminin kaynağından, JavaScript'in Tarihi bölümünde bahsedeceğiz.

## HTML, CSS ve JavaScript (Web'in temel taşları)

![Html-Css-Js](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/javascript-nedir/figures/www-core-html-css-js.png)

HTML ve CSS ile JavaScript, World Wide Web'in (kısaca WWW veya Web) **temel üç öğesinden** biridir. Yaygın olarak web tarayıcılarında kullanılmakta olan JavaScript ile yazılan istemci tarafı betikler sayesinde tarayıcının kullanıcıyla etkileşimde bulunması, tarayıcının kontrol edilmesi, asenkron bir şekilde sunucu ile iletişime geçilmesi ve web sayfası içeriğinin değiştirilmesi gibi işlevler sağlanır.

Aşağıda yer alan görseldeki gibi HTML bir web sitesinin iskeletini yani ana yapısını oluşturmakta, CSS bu ana yapıya görsellik ve şekil vermekte, JavaScript ise yapının fonksiyonel olarak çalışmasını sağlamaktadır.

![Website Structure](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/javascript-nedir/figures/website-structure.jpg)

**JavaScript, her Front-end ve Web yazılımcısının, HTML ve CSS ile birlikte bilmesi gereken bir dildir.**

JavaScript kodları, HTML ve CSS gibi doğrudan tarayıcı tarafından çalıştırılmazlar. Tarayıcılarda yerleşik halde bulunan JavaScript motoru (JavaScript Engine) sayesinde, JavaScript kodları makine diline çevirir ve çalıştırır. Günümüzde internet sitelerinin **%95**'inden fazlası JavaScript kullanmakta ve modern tüm internet tarayıcıları yerleşik JavaScript Motoru barındırmaktadır.

En çok kullanılan tarayıcalardaki JavaScript Motorları, Chrome, Opera ve Edge'de V8, Firefox'da SpiderMonkey, Safari'de Nitro, Internet Explorer'da Chakra'dır.

## JavaScript'in Tarihi

### Başlangıç ve İsim
Mosaic Web Browser'ın yazılım ekibinin önemli isimleri Mosaic şirketinden ayrılarak, Netscape isimli şirketi kurmuşlar ve 1994 yılında Netscape Navigator adındaki, yayınlandıktan sonra oldukça geniş kitleye ulaşan internet tarayıcısını geliştirmişlerdir. O yıllarda statik olan internet sayfalarını interaktif hale getirebilmek amacıyla Sun Microsystems ile Java dilini ve ekibi aldıkları Brenden Eich ile de Scheme dilini tarayıcıya yerleşik hale getirmek için çalışmalara başlamışlardır. Kısa bir süre sonra Netscape yönetimi, en iyi seçimin söz dizimi Java'ya benzeyen ve Scheme ile diğer script dillerine benzemeyen bir dil geliştirilmesi olduğuna karar vermiş ve bu görevi Brenden Eich'a vermişlerdir. Önce Mocha ardından da LiveScript isimlerini alan bu yeni dil, Eylül 1995'te Navigator'un yeni sürümünde yer bulmuş, üç ay sonra ise ismi o dönem çok popüler olan Java dilinin popülerliğinden yararlanmak amacıyla ismi JavaScript olarak değiştirilmiştir.

![Brenden Eich](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/javascript-nedir/figures/brenden-eich.jpg)

### ECMAScript'in Ortaya Çıkışı

1996 yılının Kasım ayında Netscape firması JavaScript'in endüstri standardı olarak belirlenmesi amacıyla ECMA International'a (Avrupa Bilgisayar Üreticileri Birliği) başvuruda bulunduğunu ilan etti. Bunun sonucunda standardize edilen sürüm ECMAScript olarak isimlendirildi ve 1997 yılının haziran ayında ECMA International, ECMA-262 standartları çerçevesinde ilk sürüm ECMAScript (kısca ES) yayınladı. Haziran 1998'de ISO/IEC-16262 standardına uyumlu hale getirilecek değişiklikler yapılarak ECMAScript 2, Aralık 1999'da ise ECMAScript 3 yayınlandı.

ECMAScript 4 üzerinde ciddi bir çalışma yapılmasına rağmen asla tamamlanamadı, ancak beşinci sürüm için önemli bir ilham kaynağı oldu. ECMAScript 5, 2009 yılının aralık ayında yayınlandı. En son yayınlanan versiyonu ECMAScript 2020, Haziran 2020'de yayınladı.

#### ECMAScript Verisyonları

```
1. ES1 / ECMAScript 1 (Haziran 1997)
2. ES2 / ECMAScript 2 (Haziran 1998)
3. ES3 / ECMAScript 3 (Aralık 1999)
- ES4 / ECMAScript 4 (Yayınlanmadı)
4. ES5 / ECMAScript 5 (Aralık 2009)
5. ES5.1 / ECMAScript 5.1 (Haziran 2011)
6. ES6 / ECMAScript 2015 (Haziran 2015)
7. ES2016 / ECMAScript 2016 (Haziran 2016)
8. ES2017 / ECMAScript 2017 (Haziran 2017)
9. ES2018 / ECMAScript 2018 (Haziran 2018)
10. ES2019 / ECMAScript 2019 (Haziran 2019)
11. ES2020 / ECMAScript 2020 (Haziran 2020)
```

**JavaScript sadece tarayıcılarda çalışmakla sınırlı değildir.**

## JavaScript Kullanım Alanları

JavaScript'in tarihi konusunda da belirteceğimiz gibi, JavaScript'in ortaya çıkış amacı siteleri interaktif ve fonksiyonel hale getirmekti. Ancak ECMA Standartı ile hızla değişen ve gelişen JavaScript, yazılımcıların talepleri doğrultusunda sürekli üzerine koyarak ve yeni bir dönem başlatan Node.js'in geliştirilmesiyle, oldukça önemli güncellemeler de alarak her alanda kullanabilecek bir dil haline geldi. Böylece tüm dünyanın en çok kullanılan yazılım dili olarak son yıllarda hep ilk sıralarda yer edinmeyi başardı.

**JavaScript'in kullanılabileceği alanlar:**

- Front-end
- Back-end
- Mobil (Mobile)
- Masaüstü (Desktop)
- Oyun (Game)
- Makine Öğrenmesi, Derin Öğrenme ve Yapay Zeka (Machine Learning, Deep Learning & Artificial Intelligence)

### Front-End Alanında JavaScript
JavaScript, Front-end tarafında ilk yıllarında olduğu gibi yalın olarak bir diğer ismiyle Vanilla JavaScript olarak kullanabildiği gibi geliştirilen birçok farklı kütüphane (library) ve çatı (framework) ile de kullanabilmektedir. Son yıllarda ortaya çıkan başarılı kütüphane ve çatılar neticesinde, yalın JavaScript kullanımı azalsa da bu kütüphane ve çatıların temelini JavaScript oluşturduğu için, kesinlikle öğrenilmesi gerekmektedir.

En çok kullanılan JavaScript Front-end teknolojileri aşağıdaki görselde yer almaktadır. Bunlar soldan sağa doğru; Angular, React, Vue, Ember ve Svelte'dir.

![js-frontend-frameworks](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/javascript-nedir/figures/js-frontend-frameworks.jpg)


### Back-End Alanında JavaScript
![nodejs-logo](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/javascript-nedir/figures/nodejs-logo.png)


Ryan Dahl'ın geliştirdiği Node.js isimli JavaScript çalışma ortamı (runtime environment) sayesinde tarayıcılar dışında da JavaScript kodları çalıştırılabilir hale geldi ve yeni bir dönem başlamış oldu. Böylece istemci tarafında kalmamakla birlikte sunucu tarafında da JavaScript uygulamalarının yolu açıldı. Node.js Chrome tarayıcısındaki V8 JavaScript Motorunu kullanmaktadır.

![ryan-dahl](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/javascript-nedir/figures/ryan-dahl.jpg)

### Mobil (Mobile) Alanında JavaScript

En çok kullanılan JavaScript mobil teknolojileri aşağıdaki görselde yer almaktadır. Bunlar soldan sağa doğru; React Native, Ionic, NativeScript, Cordova ve Mobile Angular UI'dır.

![js-mobile-frameworks](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/javascript-nedir/figures/js-mobile-frameworks.jpg)


### Masaüstü (Desktop) Alanında JavaScript

En çok kullanılan JavaScript masaüstü teknolojileri aşağıdaki görselde yer almaktadır. Bunlar soldan sağa doğru; Electron, nw.js, appjs, Meteor ve Proton Native'dir.

![js-desktop-frameworks](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/javascript-nedir/figures/js-desktop-frameworks.jpg)


### Oyun (Game) Alanında JavaScript

En çok kullanılan JavaScript oyun teknolojileri aşağıdaki görselde yer almaktadır. Bunlar soldan sağa doğru; PixiJS, MelonJS, Phaser, BabylonJS ve Impact'tır.

![js-game-frameworks](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/javascript-nedir/figures/js-game-frameworks.jpg)


### Makine Öğrenmesi, Derin Öğrenme ve Yapay Zeka (Machine Learning, Deep Learning & Artificial Intelligence) Alanında JavaScript

En çok kullanılan JavaScript Makine Öğrenmesi, Derin Öğrenme ve Yapay Zeka teknolojileri aşağıdaki görselde yer almaktadır. Bunlar soldan sağa doğru; ml5.js, Brain.js, TensorFlow.js, ConvNetJS ve Synaptic.js'tir.

![js-ml-dl-ai-frameworks](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/javascript-nedir/figures/js-ml-dl-ai-frameworks.jpg)


## Kaynaklar:
- [Wikipedia](https://wikipedia.org)

