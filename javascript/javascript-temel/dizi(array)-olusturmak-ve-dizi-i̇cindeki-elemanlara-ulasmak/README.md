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

## ARRAY NEDİR 
1-Programlamanin temel amaclarindan birisi verileri saklamak ve manipule edebilmektir. Arrays (diziler) bu ise yaramaktadir. 

2-Arraylerde bir degisken (variable) tanimlayarak birden fazla degeri (value) saklayabilir ve onlari daha sonra cesitli methotlarla kullanabiliriz.

3-Array olusturmak icin koseli parantez kullaniriz. 

4-Olusturulan arrayde her bir degere 'element' (eleman) denir. 

`let favoriArabalar = ['audi', 'volvo', 'mercedes']`

5-Bir arrayin icine yazabilecegimiz elemanlarin veri tipi (data type) onemli degildir. Ornegin ayni arrayde bir string ile number deger olarak atanabilir.

`let randomDizi = [2021, 'javaScript', true]`

## ARRAY İÇİNDEKİ ELEMANLARA ULAŞMAK
6-Array icindeki bir elemana ulasilmak istendiginde yazilis sirasina gore cagirilmaktadir. 

7-Elemanlarin yazilis siralarini numaralandirmaya 0 dan baslariz.Bu demek oluyor ki bir arraye yazdigimiz ilk elemanin (yani birinci sirada yazdigimiz eleman) numarasi 0'dir. 

8-Elemana ulasmak icin once dizinin degisken adi yazilir daha sonra koseli parantez acilarak elemanin numarasi girilir.

`let marmaraBolgesi = ['istanbul','kocaeli','sakarya','bursa','canakkale']` 

```marmaraBolgesi[0] = istanbul`
marmaraBolgesi[1] = kocaeli 
marmaraBolgesi[2] = sakarya
marmaraBolgesi[3] = bursa
marmaraBolgesi[4] = canakkale```

9- Yukarida yaptigimiz ornekte goruldugu gibi dizinin icinde 5 tane eleman varken cagirdigimiz son elemanimizin numarasi 4. 

10- Bu demek oluyor ki ((dizideki toplam eleman sayisi) - 1) bize dizinin son elemanini verir. 

11- O halde icinde kac tane eleman oldugunu bilmedigimiz bir dizinin son elemanina ulasmak icin su yontemi kullanabiliriz.

`let aylar = ['mart','nisan','mayis','haziran','temmuz']` 
`let sonEleman = aylar[aylar.length - 1]`  // length propertysi bize arrayin icindeki eleman sayisini verir. Ondan bir cikarttigimizda ise son elemanin numarasini elde etmis oluruz.
`console.log(sonEleman) = 'temmuz'`

## TYPE OF ARRAY
12-Bir arrayin veri tipi object dir. 
`typeof aylar = object`

## ARRAYIN LET VEYA CONST İLE DEKLARE EDİLMESİ ARASINDAKİ FARKLAR
13-Arraylari tanimladigimiz degiskenin let veya const ile deklare edilmesi arasinda fark bulunmaktadir. 

14-Let ile deklare ettigimiz bir array daha sonra yeniden tanimlanabilir. 
 
`let gunler = ['pazartesi','sali','carsamba']` 
`gunler     = ['cuma','cumartesi','pazar']` 
`console.log(gunler);` // ['cuma' , 'cumartesi' , 'pazar'] ciktisini alacagiz. Cunku let kullanarak olusturdugumuz bir array yeniden tanimlanabilir.

15-Yukarida yaptigimiz ornegin aynisini const ile yapmayi deneyelim 
`const gunler = ['pazartesi','sali','carsamba']`
`gunler = ['cuma','cumartesi','pazar']` // 'TypeError: Assignment to constant variable' hatasini aliriz. Const ile deklare ettigimiz bir arrayi yeniden tayin edemeyecegimizi belirtmektedir.

16-const ile deklare ettigimiz bir array yeniden tayin edilemese de icerisindeki elemanlara erisme ve degistirme noktasinda let ile aynidir. 

<br>

## Sorular
1- Bir arrayin veri tipi nedir?   <br><br>
  A) boolean      <br>
  B) stringer     <br>
  C) integer      <br>
  D) object       <br>
  
  <br>
  
2- Aşağıdakilerden hangisini konsola "denizli" ifadesini yazdırır?  <br>
   ```let egeBolgesi = ['izmir','aydın','muğla','denizli','manisa']```  <br><br>
  A) console.log(egeBolgesi[1])           <br>
  B) console.log(egeBolgesi[2])           <br>
  C) console.log(egeBolgesi[3])           <br>
  D) console.log(egeBolgesi[4])           <br>
  
  
 <br>
 
 ## Cevaplar
 1- D   <br>
 2- C

