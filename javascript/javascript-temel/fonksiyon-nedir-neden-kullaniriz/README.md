# Fonksiyon Nedir ? Neden Kullanırız?

Fonksiyonlar adından anlaşılacağı gibi belli bir amacı gerçekleştirmek için oluşturulmuş yapılardır. Koda işlevsellik katmak için bunu sık sık kullanırız. Nasıl tanımlandığına gelecek olursak:
### Fonksiyonu Adlandırmak
- İlk olarak  ```function``` ibaresinden sonra fonksiyon adı yazılır. Bir fonksiyonu adı varsa bunlara Normal-Adlandırılmış Fonksiyonlar  (**Regular/Named Functions**) deriz. 
- Burada önemli olan kodun okunabilirliği açısından fonksiyonu işlevine uygun bir biçimde adlandırmaktır, dahası bu bir işlevi belirttiği için fonksiyon adımız bir eylem olmalıdır. Bunun için bazı ön ekler kullanabiliriz. 
- Örneğin değer almak istediğimiz bir fonksiyon adında ön ek olarak ```get``` kullanabiliriz.  
- Bununla birlikte şunu da unutmamalıyız istendiğinde adı olmayan anonim bir fonksiyon da kullanılabilir. Aşağıda bu fonksiyon türünden bahsediliyor :wink:
### Fonksiyon Parametreleri ve Gövdesi
- Sonrasında parantezler içinde alacağı parametreler belirlenir. Parametre olması zorunlu olmadığı gibi fazla parametre geçmek kodun okunurluğunu bozabilir.
- Parametre alan fonksiyonları kullandığımız zaman o parametlere kendimiz bir değer atarız. Atanan bu değere argüman adı verilir.

```javascript 
function printHello(name){                		 //name adında bir parametre aldı
        console.log(“Merhaba” + name);  	
}
printHello(“Şafak”);  // bir argüman vererek fonksiyonu çağırdık. Çıktı: Merhaba Şafak

```
- Son olarak da süslü parantezleri açarak içine çalışmasını istediğimiz javascript kodunu eklenir. Bu javascript koduna fonksiyonun gövdesi- body denir.

Örneğin aşağıdaki fonksiyonunun amacı bizden iki adet değer aldıktan sonra o değerlerin toplamını konsola yazdırmak:

```javascript 
function addition(sayi1,sayi2){  //function name and parameters
        console.log(sayi1+sayi2);     //body
}
```

Bu kodda fonksiyonunun adı addition. sayi1 ve sayi2 fonksiyonunun almış olduğu parametreler oluyor. Fonksiyonun işlevi ise body kısmında ```console.log(sayı1+sayı2)``` belirtilmiş.

- Yukarıda fonksiyonu adlandırmadan da kullanabileceğimizden bahsetmiştik: Anonim fonksiyonların (**Anonymous Functions**) bir adı yoktur ve bir değişkene atanarak yeri geldiğinde kullanılırlar. 
- Değişken adı kullanılarak çağrıldıkları için birden çok anonim fonksiyonu aynı dizide kullanabilirsiniz. 
- Dahası bir değişkene atandıklarından bu değişkeni başka bir fonksiyonun parametresine koyarak callback (geri arama) yapabilirsiniz.

```javascript 
var add = function (sayi1,sayi2){  //Anonim bir fonksiyon oluşturduktan sonra bu 
                                   //fonsksiyonu bir değişkene atadık
        console.log(sayi1+sayi2);
}
```

### Değer Döndüren Fonksiyonlar
- Bazen fonksiyonun geriye göndereceği değeri ekrana çıktı vermek yerine bir değişken ya da başka bir fonksiyonda daha sonra kullanmamız gerekebilir. Bu gibi durumlarda fonksiyon gövdesinde return ifadesini kullanırız.
```javascript 
function addition(sayi1,sayi2){
    return (sayi1+sayi2);
}

var add = addition(1,2);   //add değişkenine 1+2 değerini fonksiyon kullanarak atadık.

```


#### Fonksiyon Kapsamı 

Javascriptde fonksiyon içinde tanımlamış olduğunuz değişkene fonksiyon dışındaki herhangi bir yerden erişemezsiniz. Çünkü o değişken tanımlandığı fonksiyonun **kapsamındadır**. Bu sebeple değişkenimiz o fonksiyon içinde kullanılan bir **lokal değişkendir**.  Fakat tanımlanan fonksiyon tanımlandığı kapsamdaki diğer değişkenlere erişebilir. Yani fonksiyon kendi dışında tanımlanan fakat aynı kapsamda bulunduğu **global değişkenlere** de erişebilir. Aşağıda örneğini görerek bunu çok daha iyi anlayacağız:

```javascript 
//global değişkenleri tanımlıyoruz
var sayi1 = 5;
var sayi2 = 2;   
function addition(){
    var sayi3 = 3;             //sayi3 adında lokal bir değişken tanımlıyoruz
    return sayi1+sayi2+sayi3;  //Fonksiyon içinde global ve local değişkenleri kullanıyoruz
}

function multiplication(){
    return sayi1*sayi3;  
//Burada hata alıyoruz: bunun nedeni başka bir fonksiyonun içinde tanımlı olan sayi3 lokal değişkenini kapsamı dışında 
//kullanmaya çalışmamız. sayi1 değişkeni ise global olduğundan burada kullanılabilir
}

```

### Callback Fonksiyonlar ve Asenkron Çalışma

Senkron dediğimiz kavram şunu ifade etmektedir: kodumuz yukarıdan aşağı doğru sırayla işlenir ve bir satırdaki işlem bitmeden bir sonraki satıra geçilmez. Asenkron yapıda ise fonksiyonların birbirlerini beklemelerine gerek yoktur. Uzun zaman ala veya farklı görevleri olan fonksiyonlar aynı anda çalışabilir.
Javascript asenkron yapıdaki bir programlama dilidir.Bunu anlamak için içinde  setTimeout(parameter1, parameter2) fonksiyonunu kullanacağız. Bu fonksiyon gördüğünüz gibi iki parametre ile kullanılacak: ilk parametre çalışması istenen fonksiyonu, ikinci parametre ise ne kadar süre sonra çalışması istendiğini ifade ediyor. Örneğin 1000 yazılarak 1000 milisaniye yani 1 saniye gecikme sağlanıyor.
```javascript 

function printScreen1 (){
    console.log(“İlk ekran çıktısı”);
}

 function printScreen2 (){
   setTimeout(function(){
console.log(“İkinci ekran çıktısı”)  
}, 3000);
}

function printScreen3 (){
    console.log(“Üçüncü ekran çıktısı”);
}
printScreen1();
printScreen2();
printScreen3();


```
Çıktımız şu şekilde olacaktır:
```
İlk ekran çıktısı
Üçüncü ekran çıktısı
İkinci ekran çıktısı
```
Bunun sebebi asenkron çalışma yapısıdır. printScreen1 fonksiyonu çalıştıktan sonra printScreen2 fonksiyonun çalışması için beklemeden printScreen3 fonksiyonumuz çalışır.  Bu durumdan kurtulmak için callback kullanıyoruz denebilir. 
Callback fonksiyonlar başka bir fonksiyonu parametre olarak alan fonksiyonlardır. Yani aslında asenkron yapıda bile fonksiyonlar için bir çalışma sırası belirlememize yardımcı olur.   
Örneğin yukarıda verilen kodumuzun sırasıyla birinci, ikinci ve üçüncü çıktıları vermesini istiyoruz. 
```javascript 

function printScreen1() {
    console.log("İlk ekran çıktısı");
  }

  function printScreen2(callback1, callback2) {
    setTimeout(function () {
      callback1();
      console.log("İkinci ekran çıktısı")
      callback2();
    }, 3000);
  }

  function printScreen3() {
    console.log("Üçüncü ekran çıktısı");
  }


 printScreen2(printScreen1, printScreen3);


```
Bu şekilde çıktımız nihayet istediğimiz gibi olacaktır.
