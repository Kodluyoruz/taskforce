# Dizi(Array) Oluşturmak ve Dizi İçindeki Elemanlara Ulaşmak

 Merhaba arkadaşlar,
javascriptte array(dizi) tanımı birden çok value(değer) saklamamızı sağlar. Bu diziler içinde string, number, boolean, object, tipinde veriler saklanabilir. Dizilerde object(nesne) tipindedir. Bir dizi oluşturmak için yapmamız gereken dizi ismini verip eşittir dedikten sonra köşeli parantezler içinde dizi elemanlarını yazmak. Her eleman arasında bir virgül koymamız gereklidir.    
Örneğin;
```
let arr = [1,2,3];
```
Burada ismi ``arr`` ve sadece number tipinde elemanları olan bir dizi tanımlamış olduk.   
Farklı bir örnek;
```
let arr = [1,2,"bir string ifade",false,{title:"kodluyoruz"}];
```
Burada farklı tiplere sahip elemanları tek bir dizi içinde saklamış olduk.    
Bir dizi içinde farklı bir dizi(diziler) tanımlayabiliriz. Örneğin;    
```
let arr = [1,2,3,["dört","beş","altı"],7,8];
```
### Dizi İçerisindeki Elemanlara Erişim
Artık bir dizi nasıl oluşturulur öğrendiğimize göre bu oluşturduğumuz dizinin elemanlarına nasıl ulaşırız ona bakalım.    
Her dizi elemanının index değeri vardır. İlk elemanın index değeri ``0`` dır. Buna göre ikinci elemanın index değeri ``1`` ve böylece devam eder. Bu index değerlerini kullanarak bizler dizi elemanlarına erişebiliriz.    
Örneğin;
```
let arr = [1,2,3,"dört","beş"];
console.log( arr[3] );
console.log( arr[0] );
```
Burada ``console.log( arr[3] );`` çıktı olarak ``dört`` değerini, ``console.log( arr[0] );`` ise ``1`` değerini bize verecektir.    
Burada index değerini tek tek yazmak yerine bir for döngüsü yardımıyla dizi elemanlarına erişebiliriz.   
Örneğin;
```
let arr = [1,2,3,"dört","beş"];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```
Burada `arr.length` ifadesi dizinin uzunluğunu number tipinde ifade eder. Bu örnekte dizi uzunluğu `5`.   
**NOT:** Dizi uzunluğu için saymaya `1` 'den başlanır.    

Eğer bir dizi içerisinde farklı bir dizi tanımlı ve bu içerideki dizi elemanlarına erişim sağlamak istiyorsak;
```
let arr = [1,2,3,["dört","beş","altı"],7,8];
console.log(arr[2][0]);
```
Burada `console.log(arr[2][0]);` çıktı olarak `dört` yazacaktır. `2` içerideki dizinin index numarası ve `0` bu dizinin ilk elemanını ifade eder.``console.log( arr[4] );`` çıktı olarak `7` verdiğine dikkat edelim.   
Dizi protipinde tanımlı foreach fonksiyonu yardımıyla da dizi elemanlarına erişilebilir.
```
let arr = [1,2,3,"dört","beş"];
arr.forEach((item, index) => {
  console.log(item, index);
});
```
Burada arrow function şeklinde yazılmış forEach metodu her bir dizi elemanı için çalıştırılır. `item` değeri dizinin o anki elamanını tutar ve `index` değeri ise o anki elemanın index değeridir. Bu kodu çalıştırdığımızda dizinin her elemanının aynı for döngüsünde olduğu gibi çıktısını görebiliriz.
