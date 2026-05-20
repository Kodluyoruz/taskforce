
# Object ve Array Destructuring Kullanımı

## Destructuring Nedir?

![resimesim](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/object-ve-array-destructuring-kullanimi/figures/js.jpg)

Destructuring bir obje veya bir array içinden her bir elemanın alınıp bir değişken içine kaydedilmesi.

Bu şekilde bir objemiz olduğunu düşünelim;

```javascript
const foo = { a: 123, b: true }
```

Bu obje içinde `a` ve `b` değerlerini almak isteri isek `foo.a;` ve `foo.b;` yazarak erişebiliriz. Ama bu değerlere erişmek istediğimizde her seferinde `foo` mu yazmak zorundayız? Elbette bunun da bir çözümü var, `a` ve `b` değerlerini bir lokal değişkene yazabiliriz bu sayede her seferinde `foo` yazmak zorunda kalmayız. Örneğin;

```javascript
const foo = { a: 123, b: true }
const a = foo.a;
const b = foo.b;
```

Ama eğer erişmek istediğimiz değer sayısı çok fazla olsa idi gerçekten çok uğraşmak durumunda kalırdık. İşte bu noktada destructuring bizim isimizi kısaltan bir işlev görür ve ayni  işlemi şu şekilde yapabiliriz;

```javascript
const foo = { a: 123, b: true }
const {a,b} = foo;
```

Ama en önemlisi destructuring bir fonksiyonun bir objeyi parametre olarak alması sırasında çok kullanışlıdır. Yani fonksiyona parametre girerken de destructuring yapabiliriz;

```javascript
const cikarma = ( { sayi1, sayi2 } ) => { // Bu satira dikkat
 return sayi1 - sayi2;
}
const sayilar = {
 sayi2: 3,
 sayi1: 5
}
cikarma(sayilar); // sonuc 2
```

Artık fonksiyon içinde devamlı `sayilar.sayi1`, `sayilar.sayi2`  diye tekrarlamamamıza gerek yok ama çıkarma fonksiyonunun parametresine dikkat edin. orada süslü parantezler `{}` bir objeyi temsil etmez, destructuring işlemini temsil eder. Yani çıkarma fonksiyonuna gelen sayılar objesinin içinde `sayi1` ve `sayi2` propertyleri bulunup parçalanıp fonksiyon içinde kullanılabilir hale gelecektir. Destructuring işlemi sırasında sıralama önemsizdir, yani fonksiyonu su şekilde yazmış olsaydık da bir şey değişmeyecekti.

```javascript
const cikarma = ( { sayi2, sayi1 } ) => { // Siralama farkli
 return sayi1 - sayi2;
}
```

artık fonksiyon içinde obje propertyleri kullanılabilir.

## Destructuring Yapan Fonksiyona Gönderilen Obje Eksik Property İçeriyor İse Ne Olacak?

Çıkarma işlemi için problem değil ama bölme işlemi için bu bir problem. Örneğin;

```javascript
const bolme = ( { sayi1, sayi2} ) => {
 return sayi1 / sayi2;
}
const sayilar = {
 sayi1: 8 // dikkat sayi1 gonderdik ama sayi2 unuttuk
}
bolme(sayilar); // NaN yani 'Not a Number' donecektir. 
```

işte bu örnekte `bolme` fonksiyonunda güzelce destructuring yaptık, `sayi1` ve `sayi2`'yi parçalayıp birbirine böldük. Bölme işleminde sıralama önemli ama ayni zamanda ikinci sayı 0 veya hiçbir şey içermeyen `null` veya `undefined` olursa bölme işlemi tanımsız olur. Bu durumda da fonksiyon `NaN` döner.

Fonksiyonu çağıran geliştiricinin böyle bir hata yapmasının önüne geçmek için fonksiyon içinde olmazsa olmaz, mutlaka değer içermesi gereken değişkenlere **default** yani varsayılan bir değer atayabiliriz.

```javascript
const bolme = ( { sayi1, sayi2 = 1} ) => { // default deger atadik
 return sayi1 / sayi2;
}
const sayilar = {
 sayi1: 8 // yine ikinci sayiyi unuttuk
}
bolme(sayilar); // ama bu sefer sonuc 8, NaN degil
```

Burada yine ikinci sayıyı unuttuk ama bu sefer destructuring sırasında olmazsa olmaz ikinci sayıya varsayılan olarak `1` değerini atadık. Artık göndermesek bile `sayi2` her zaman `1` olacaktır ve `sayi1`'in belirsiz bir sayıya bölünmesi hatasından kurtulmuş olacağız.

## Peki Fazladan Gönderdiğimiz Bu Değerlere Ne Oluyor?

Destructuring sırasında açıkça belirmediğimiz değer fonksiyon içinde erişilemez. Örneğin burada fonksiyon parametresinde `sayi2`'ye varsayılan değer atamayı geç komple destructure yapmayı unuttuk.

```javascript
const bolme = ( { sayi1 } ) => { // dikkat sayi2 unutuldu
 return sayi1 / sayi2;
}
const sayilar = {
 sayi1: 8,
 sayi2: 4 // ama sayi2 gonderdik
}
bolme(sayilar); // ReferenceError: sayi2 is not defined
```

Bu durumda `ReferenceError: sayi2 is not defined` yani sayı iki tanımlanmamış diye bir hata alırız, çünkü fonksiyona `sayi2` göndersek bile fonksiyon içinde `sayi2` ye olan erişimimizi tamamen kaybettik.

Bu durum bu örnekteki gibi iki tane değer içeren objelerde problem değil ama eğer obje birçok değer içeriyor ise bu hata çok kez yapılan bir hata. Bu noktada **spreading operator** imdadımıza yetişiyor.

## Rest Operator

Örneğin fonksiyonumuz ikiden fazla değer alması gerekiyor ise ne olacak? Örneğin bir toplama fonksiyonumuz var bu fonksiyon 5 sayıyı toplayacak.

```javascript
const toplama = ({ sayi1, sayi2 }) => { // dikkat sadece 2 sayi
 return sayi1 + sayi2 + sayi3 + sayi4 + sayi5;
}
const sayilar = {
 sayi1: 8,
 sayi2: 4,
 sayi3: 7,
 sayi4: 9,
 sayi5: 11
}
toplama(sayilar); //ReferenceError: sayi3 is not defined
```

Örneğin fonksiyona gönderdiğimiz obje 5 tane sayı içeriyor ama biz sadece ilk ikisini destructure yaptık. Bu durumda `sayi3` için bu şekilde hata alırız.  `ReferenceError: sayi3 is not defined`

Ama `Rest Operator` ile diyebiliriz ki `sayi1` ve `sayi2`'yi destructure yap. Bu sefer de diğer sayıları kaybederiz. Bu durumda spreading operator ile diyebiliriz ki tamam destructuring yap ama geri kalan diğer sayıları da bana ver.

```javascript
const toplama = ({ sayi1, sayi2, ...args }) => {
 let sonuc = sayi1 + sayi2;
 for (let sayi in args){
  sonuc += args[sayi];
 }
 return sonuc;
}
const sayilar = {
 sayi1: 8,
 sayi2: 4,
 sayi3: 7,
 sayi4: 9,
 sayi5: 11
}
toplama(sayilar); // 39 doner
```

Yani burada `{sayi1, sayi2, ...args}` ile diyoruz ki `sayi1` ve `sayi2` destructure olsun ama geri kalanlar `args` değişkende obje olarak kalsın yani args `{ sayi3: 7, sayi4: 9, sayi5: 11 }` seklinde bir obje kalır ve bu obje destructuringden arta kalan değerleri içeren bir objedir.

Bir obje içindeki tüm değerleri de `for...in` ile teker teker dolaşabilir. `for...in` seklinde oluşturduğumuz döngü yani `for (let sayi in args)` satiri der ki `args` içindeki tüm propertylerin **key**'lerini dön bana. Bu döngüdeki `sayi` değişken her bir property için bize `sayi3` , `sayi4`, `sayi5` string anahtarını döner. Ama biz anahtar değil de değerleri almak istersek `args[sayi]` yazabiliriz. bu bize teker teker `7`, `9`, `11` sayılarını dönecektir ve toplama işlemine bunu bir döngüde dahil edebiliriz.

Elbette gerçek hayat için mantıklı bir işlem değil bu ama spreading özelliğinin anlaşılması için böyle bir fonksiyon yazılabilir. hatta `for...in` yerine `map()` veya `reduce()` fonksiyonları kullanarak bu örnek daha da iyi hale getirilebilir.

## Kaynaklar

- JavaScript Destructin Hikayesi  [medium.com/@emrahday](https://medium.com/@emrahday/javascriptde-destructuring-hikayesi-bf5884ed1fa5)
