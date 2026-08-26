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
console.log(arr[3][0]);
```
Burada `console.log(arr[3][0]);` çıktı olarak `dört` yazacaktır. `2` içerideki dizinin index numarası ve `0` bu dizinin ilk elemanını ifade eder.``console.log( arr[4] );`` çıktı olarak `7` verdiğine dikkat edelim. 
Dizi protipinde tanımlı foreach fonksiyonu yardımıyla da dizi elemanlarına erişilebilir.

```
let arr = [1,2,3,"dört","beş"];
arr.forEach((item, index) => {
  console.log(item, index);
});
```
Burada arrow function şeklinde yazılmış forEach metodu her bir dizi elemanı için çalıştırılır. `item` değeri dizinin o anki elamanını tutar ve `index` değeri ise o anki elemanın index değeridir. Bu kodu çalıştırdığımızda dizinin her elemanının aynı for döngüsünde olduğu gibi çıktısını görebiliriz.

### Array Nedir? 
1. Programlamanın temel amaçlarından birisi verileri saklamak ve manipule edebilmektir. Arrays (diziler) bu ise yaramaktadır. 

2. Array'lerde bir değişken (variable) tanımlayarak birden fazla değeri (value) saklayabilir ve onları daha sonra çeşitli metotlarla kullanabiliriz.

3. Array oluşturmak için köşeli parantez kullanırız. 

4. Oluşturulan array'de her bir değere 'element' (eleman) denir. 

`let favoriArabalar = ['audi', 'volvo', 'mercedes']`

5. Bir array'in içine yazabileceğimiz elemanların veri tipi (data type) önemli değildir. Örneğin aynı array'de bir string ile number değer olarak atanabilir.

`let randomDizi = [2021, 'javaScript', true]`

### Array İçindeki Elemanlara Ulaşmak
6. Array içindeki bir elemana ulaşılmak istendiğinde yazılış sırasına göre çağırılmaktadır. 

7. Elemanların yazılış sıralarını numaralandırmaya 0' dan başlarız. Bu demek oluyor ki bir arraye' yazdığımız ilk elemanın (yani birinci sırada yazdığımız eleman) numarası 0'dır. 

8. Elemana ulaşmak için önce dizinin değişken adı yazılır daha sonra köşeli parantez açılarak elemanın numarası girilir.

`let marmaraBolgesi = ['istanbul','kocaeli','sakarya','bursa','canakkale']` 

```marmaraBolgesi[0] = istanbul`
marmaraBolgesi[1] = kocaeli 
marmaraBolgesi[2] = sakarya
marmaraBolgesi[3] = bursa
marmaraBolgesi[4] = canakkale```

9. Yukarıda yaptığımız örnekte görüldüğü gibi dizinin içinde 5 tane eleman varken çağırdığımız son elemanımızın numarası 4'tür. 

10. Bu demek oluyor ki ((dizideki toplam eleman sayısı) - 1) bize dizinin son elemanını verir. 

11. O halde içinde kaç tane eleman olduğunu bilmediğimiz bir dizinin son elemanına ulaşmak için şu yöntemi kullanabiliriz.

`let aylar = ['mart','nisan','mayis','haziran','temmuz']` 
`let sonEleman = aylar[aylar.length - 1]`  // length propertysi bize array'in içindeki eleman sayısını verir. Ondan bir çıkarttığımızda ise son elemanın numarasını elde etmiş oluruz.
`console.log(sonEleman) = 'temmuz'`

### Type Of Array
12. Bir array'in veri tipi object'dir. 
    `typeof aylar = object`

### Array'in Let Veya Const İle Deklare Edilmesi Arasındaki Farklar
13. Array'lari tanımladığımız değişkenin let veya const ile deklare edilmesi arasında fark bulunmaktadır. 

14. Let ile deklare ettiğimiz bir array daha sonra yeniden tanımlanabilir. 

`let gunler = ['pazartesi','sali','carsamba']` 
`gunler     = ['cuma','cumartesi','pazar']` 
`console.log(gunler);` // ['cuma' , 'cumartesi' , 'pazar'] çıktısını alacağız. Çünkü let kullanarak oluşturduğumuz bir array yeniden tanımlanabilir.

15. Yukarıda yaptığımız örneğin aynısını const ile yapmayı deneyelim 
    `const gunler = ['pazartesi','sali','carsamba']`
    `gunler = ['cuma','cumartesi','pazar']` // 'TypeError: Assignment to constant variable' hatasını alırız. Const ile deklare ettiğimiz bir array'i yeniden tayin edemeyeceğimizi belirtmektedir.

16. const ile deklare ettiğimiz bir array yeniden tayin edilemese de içerisindeki elemanlara erişme ve değiştirme noktasında let ile aynıdır. 

