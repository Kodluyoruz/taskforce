# JavaScript Temel INDEX

#### JavaScript Nedir? ####
- [JavaScript Nedir?](javascript-nedir/)
  - Sorular
    - JavaScript, kimin tarafından ve hangi yılda geliştirilmiştir?
      - James Gosling tarafından 1995 yılında
      - Guido van Rossum tarafından 1991 yılında
      - Brenden Eich tarafından 1995 yılında (Doğru)
      - Dennis Ritchie tarafından 1972 yılında
    - Aşağıdakilerden yer alan seçeneklerden hangisi doğrudur?
      - JavaScript sadece web sayfalarını interaktif ve fonksiyonel hale getirmeye yarayan bir betik dilidir.
      - JavaScript sadece internet tarayıcılarında çalışır.
      - JavaScript ile Java aynı dildir.
      - JavaScript prototip-tabanlı bir dildir. (Doğru)
    - Aşağıdakilerden yer alan seçeneklerden hangisi bir JavaScript teknolojisi (Library / Framework) değildir?
      - Phaser
      - Django (Doğru)
      - React
      - Express
    - Aşağıdakilerden yer alan ECMAScript versiyonlarından hangisi yayınlanmamıştır?
      - ES4 / ECMAScript 4 (Doğru)
      - ES6 / ECMAScript 2015 (Haziran 2015)
      - ES2016 / ECMAScript 2016
      - ES2019 / ECMAScript 2019
  - Video
    - https://www.youtube.com/watch?v=gndWkaTyo6g
    - Video başlığında belirttiğimiz "Neden JavaScript?" sorusuna en güzel cevabı StackOverflow'un kurucularından olan Jeff Atwood açıklamıştır.
      “Any application that can be written in JavaScript, will eventually be written in JavaScript(JavaScript ile yazılabilecek herhangi bir uygulama, eninde sonunda JavaScript ile yazılacaktır.)." - Atwood’s Law
      Kısaca ifade etmek gerekirse burada dile getirilen JavaScript dilinin limitleri dahilinde bir uygulama yazılabilirse, bir gün muhakkak başka bir dille yazılmış olsa bile bu uygulama JavaScript'e geçeceğidir. Atwood bu sözleri 2007 yılında söylediğinde JavaScript bugünkü kadar popüler değildi. Günümüzde ise JavaScript en popüler dillerden birisidir.
 
Bu videoda kısaca Atwood Yasası'nı ve JavaScript'in önemini anlattık.
- [Birçok Platformda Hello World ve Hello World'ün Önemi](helloworld/)
  - Sorular
    - X
  - Video
    - https://www.youtube.com/watch?v=p9vBqtM7blk
    - Bu videoda; JavaScript ile birçok platformda "Merhaba Dünya" kodumuzu yazıp ilk kez JavaScript kodumuzu çalıştıracağız.

#### Değişkenlerle Çalışmak ####
- [Degisken Tanimlama: var, ES6 ile Birlikte Gelen let ve const Değişken Tanımlama Yapısının Kullanımı, var ile Arasındaki Farklar](degisken-tanimlama-var-es6-ile-birlikte-gelen-let-ve-const-degisken-tanimlama-yapisinin-kullanimi-var-ile-arasindaki-farklar/)
  - Sorular
    - X
  - Video
    - https://www.youtube.com/watch?v=E739Sr5n2Hw
    - Bu videoda; JavaScript'te değişken tanımlarken kullandığımız var, let, const kullanımını ve aralarındaki farkları anlattık.
- [Number Veri Turu Kullanımı, Temel Aritmetik İşlemler ve İşlem Önceliği ve Arttırma ve Azaltma İşlemleri](number-veri-turu-kullanimi-temel-aritmetik-i̇slemler-ve-i̇slem-onceligi-ve-arttirma-ve-azaltma-i̇slemleri/)
  - Sorular
    - X
  - Video
    - https://www.youtube.com/watch?v=QwEISRm7OxY
    - Bu videoda; değişken tanımlarken kullanabileceğimiz Number Veri Türü ile çalışmak, toplama, çıkarma, bölme, çarpma, üst alma, mod alma ve yakın sayıya yuvarlama işlemleri ile ilgili egzersizler yaptık.
- [Boolean Veri Türü İle Çalışmak](boolean-veri-turu-i̇le-calismak/)
  - Sorular
    - `let a; Boolean(a);` ifadenin çıktısı nedir?
      - True
      - False (Doğru)
    - `const b  = "0"; Boolean(b);` ifadenin çıktısı nedir?
      - True
      - False (Doğru)
    - Aşağıdakilerden hangisi false döner?
      - `var x = 10 / 'a'; console.log(Boolean(x));` (Doğru)
      - `var y = "" || -2 || 'JavaScript'; console.log(Boolean(y));`
      - `var z = {2:'js'}; console.log(Boolean(z));`
    - Aşağıdakilerden hangisi true döner?
      - `var t = "" && -2 && 'JavaScript'; console.log(Boolean(t));`
      - `var w = false || 0; console.log(Boolean(w));`
      - `var a = true; console.log(Boolean(a));` (Doğru)
  - Video
    - https://www.youtube.com/watch?v=JQist2dAI80
    - Bu videoda; Boolean Veri Türünü ve true/false yapılarını anlattık.
- [Değişken Türünü Kontrol Etmek ve Değişken Türünü Değiştirmek](degisken-turunu-kontrol-etmek-ve-degisken-turunu-degistirmek/)
  - Sorular
    - X
  - Video
    - https://www.youtube.com/watch?v=T-VYmfC3gB0
    - Bu videoda; typeof ile birlikte değişken türlerini kontrol etmeyi anlatılmış olup parsInt, parsFloat ve toString yapıları ile değişken türlerini dönüştürme egzersizleri yaptık.
- [Template Literals Kullanımı](template-literals-kullanimi/)
  - Sorular
    - X
  - Video
    - https://www.youtube.com/watch?v=snHmVqVKpqE
    - Bu videoda; Template Literals ile değişkenlerin String yapılar oluştururken bize ne tür kolaylıklar sağladığını anlattık.
- [String Veri Türü İşlemleri](string-veri-turu-i̇slemleri/)
  - Sorular
    - Regular Expressions işlemlerinde çok kullanılan metin içinde arama methodu hangisidir ?
      - indexOf Metodu
      - lastIndexOf Metodu
      - Slice Metodu
      - Search Metodu (Doğru)
    - Bir ifade arayıp, o ifadeyi başka bir metin ile değiştirmeye yarayan method hangisidir ?
      - Search Metodu
      - Concat Metodu
      - Replace Metodu (Doğru)
      - indexOf Metodu
    - Index numarası ile belirtilen karakterin Unicode değerini veren method hangisidir ?
      - Substring Metodu
      - Replace Metodu
      - Split Metodu
      - charCodeAt Metodu (Doğru)
  - Video
    - https://www.youtube.com/watch?v=mXbLdT-XfzU
    - Metinsel(string) verilerimiz içerisinde arama yapma, değiştirme, karakter bulma, istediğimiz kelimenin olup olmadığını kontrol etme gibi birçok işlem yapmamız gerekebilir. Bu videoda; string veri türü metotlarını hep birlikte öğreneceğiz.
#### DOM ile Çalışmak ####
- [Document Object Model(DOM) Nedir](document-object-model(dom)-nedir/)
- [DOM içerisinden Etiket ve ID ile Öğe Seçimi](dom-icerisinden-etiket-ve-id-ile-oge-secimi/)
- [prompt ile Kullanıcıdan Bilgi Almak](prompt-ile-kullanicidan-bilgi-almak/)
- [Liste içerisindeki Öğeye Erişmek ve Yeni Öğe Eklemek](liste-icerisindeki-ogeye-erismek-ve-yeni-oge-eklemek/)
- [DOM'a CSS Class Bilgisi Eklemek veya Çıkarmak](dom'a-css-class-bilgisi-eklemek-veya-cikarmak/)

#### Karar Yapıları / Koşullar ####
- [Karşılaştırma Operatörleri ve Mantıksal Operatörler](karsilastirma-operatorleri-ve-mantiksal-operatorler/)
- [Koşul Yapısı Kullanımı (if / else)](kosul-yapisi-kullanimi-(if-else)/)
- [Çoklu Koşul Yapısı Kullanımı](coklu-kosul-yapisi-kullanimi/)
- [Ternary Operator( koşul ? doğruysa : yanlışsa) ile If Kullanımı](ternary-operator(-kosul-dogruysa-yanlissa)-ile-if-kullanimi/)

#### Fonksiyonlar ####
- [Fonksiyon Nedir ? Neden Kullanırız?](fonksiyon-nedir-neden-kullaniriz/)
- [Fonsiyona Parametre(params) ve Geridönüş(return) Eklemek](fonsiyona-parametre(params)-ve-geridonus(return)-eklemek/)
- [Fat Arrow () => Fonksiyonu Kullanımı](fat-arrow-fonksiyonu-kullanimi/)
- [DOM Etkinlikleriyle Çalışmak](dom-etkinlikleriyle-calismak/)

#### localStorage ####
- [localStorage ile Veri Eklemek, Düzenlemek ve Silmek](localstorage-ile-veri-eklemek-duzenlemek-ve-silmek/)
- [localStorage içerisine Farklı Türde Veriler Eklemek](localstorage-icerisine-farkli-turde-veriler-eklemek/)

#### Form ####
- [Form ve Form Submit Yönetimi](form-ve-form-submit-yonetimi/)
- [Input içerisinden Değer Almak](input-icerisinden-deger-almak/)

#### Dizi(Array) Veri Tipiyle Çalışmak ####
- [Dizi(Array) Oluşturmak ve Dizi İçindeki Elemanlara Ulaşmak](dizi(array)-olusturmak-ve-dizi-i̇cindeki-elemanlara-ulasmak/)
- [Diziye Yeni Eleman Eklemek, Çıkartmak ve Güncellemek](diziye-yeni-eleman-eklemek-cikartmak-ve-guncellemek/)
- [Array(Dizi) Metotlarının Kullanımı ve Array içinde Array Oluşturma](array(dizi)-metotlarinin-kullanimi-ve-array-icinde-array-olusturma/)

#### Döngüler ####
- [for Döngüsü Kullanımı](for-dongusu-kullanimi/)
- [break ve continue Kullanımı](break-ve-continue-kullanimi/)
- [while Döngüsü](while-dongusu/)
- [forEach ile Array içerisindeki Öğelerin Çağrılması](foreach-ile-array-icerisindeki-ogelerin-cagrilmasi/)
- [Filter ile Array İçerisinde Sadece İstenilen Bilgilerin Yeni Listeye Eklenmesi](filter-ile-array-i̇cerisinde-sadece-i̇stenilen-bilgilerin-yeni-listeye-eklenmesi/)
- [Map ile Array İçerisideki Yapının Değiştirilerek Yeni Liste Oluşturulması](map-ile-array-i̇cerisideki-yapinin-degistirilerek-yeni-liste-olusturulmasi/)

#### Nesne(Object) ####

- [Object(Nesne) Nedir ? Nasıl Oluşturulur](object(nesne)-nedir-nasil-olusturulur/)
- [Object Anahtar(Key) ve Değer(Value) Yapısının Kullanımı / Erişimi](object-anahtar(key)-ve-deger(value)-yapisinin-kullanimi-erisimi/)
- [Nesnelere Nasıl Metot Ekleriz?](nesnelere-nasil-metot-ekleriz/)
- [Object ve Array Destructuring Kullanımı](object-ve-array-destructuring-kullanimi/)

#### Hata Yönetimi ####
- [try ve catch Kullanımı](try-ve-catch-kullanimi/)

#### Fetch API ####
- [Fetch API ile Çalışmak](fetch-api-ile-calismak/)


