# Object Anahtar(Key) ve Değer(Value) Yapısının Kullanımı ve Metodları

Bir obje(object), {…} süslü parantezleri ile,  isteğe bağlı olarak bir özellikler(property) listesiyle oluşturulabilir. Property bir "anahtar(key): değer(value)" çiftidir ve burada key("property name" de denir) bir string(yazı tipinde), value herhangi bir veri tipi olabilir.

### Literal ve property tanımlamaları

Obje örneği:

~~~markdown
let car = {		
  brand: "BMW", 	// key(anahtar) "brand" "BMW" value(değerini) tutar 
  year: 2020,  		// key(anahtar) "year" 2020 value(değerini) tutar 
};
~~~

Property değerlerine noktalı yazım(dot notation) kullanarak erişilebilir:

`console.log(car.brand);      // "BMW"

İstediğimiz zaman property ekleyebilir, kaldırabilir ve objeden property okuyabiliriz.
Mevcut bir property'i eklemek veya değiştirmek için şu şekilde yazabiliriz:

`car.model = "320i";          // objeye model isminde bir key ekler ve value olarak string atar `

Bir property’i kaldırmak için silme (delete) operatörünü kullanabiliriz:

`delete car.year;`

Birden fazla kelime içeren property name kullanabiliriz, ancak bunlar tırnak (“”) içinde kullanılmalıdır: 

~~~markdown
let car = {
  brand: "BMW",  
  year: 2020,  		
 "is manual" : true,
};
~~~

### Square brackets kullanımı

Birden fazla kelime içeren property'ler için dot notation kullanamayız.
Bunun yerine “square bracket notation” yani köşeli parantezli yazım kullanılır: 

~~~markdown
let person= {};                     // set (oluştur)
person["likes sea"] = true;         // get (getir)
console.log(person["likes sea"]);   // true (doğru)
delete person["likes sea"];         // delete (sil)
~~~

Köşeli parantezli yazım aynı zamanda property name getirmede kullanılabilir:

~~~markdown
let animal= {};           // set
let key = "flies";        // key atama
animal[key] = true;       // value atama
~~~

Yeni objemiz: 

~~~markdown
animal = {     
   "flies" : true	      // yeni eklediğimiz key value çifti
}; 
~~~

Burada, değişken(variable) key runtime(çalışma zamanında) hesaplanabilir veya kullanıcı girdisine bağlı olabilir. Sonrasında property’e erişmek için kullanabiliyoruz. Bu bize kullanımda esneklik sağlıyor.

~~~markdown
let person = {
  name: "Jack",
  age: 20,
};
let key = prompt("Kişinin hangi özelliğini öğrenmek isterdiniz?", "name");

// değişken ile erişim
alert(person[key]);      // Jack (prompt’a “name” yazarsak erişeceğimiz değer)
~~~

* Dot notation'ı benzer şekilde kullanamayız.

### Computed property kullanımı

Bir obje oluştururken, key'ler için köşeli parantezler yardımıyla dinamik değerler(variable) kullanabiliriz. Buna hesaplanmış özellikler(computed properties) denir.

Computed properties, objedeki hangi property'nin güncelleneceğini dinamik olarak seçmemize olanak tanır.

~~~markdown
function objectify (key, value) {
   return {
[key]: value
  }
}
objectify("name", "Anna");   //  {name: "Anna"} atanmış yeni değer
~~~

\* Key, square brackets [] içine alındığı sürece herhangi bir ifade olabilir.,

### Kompleks Objeler Kullanımı 

Objelerin asıl amaçlarından biride yazılan uygulamaların state'lerini yönetmektir. Bu nedenle kompleks uygulamalarda da kompleks objeler kullanılmaktadır. Kompleks bir obje örneği de 

~~~markdown
let state = {
	users:[
		{name: "Brock", age: 25, favoriteColor: "red"},
		{name: "Jessie", age: 17, favoriteColor: "yellow"},
		{name: "James", age: 41, favoriteColor: "blue"},
		{name: "Winnie", age: 18, favoriteColor: "purple"}
	],
	settings:{
		version: "1.0.5",
        DNS: "105.xx.xx.xx",
        website: "https://www.example.com/"
	},
	banList: ["Ash", "Angelica", "Tom", "Jerry"]
}
~~~

Yukarıda gördüğünüz gibi obje içinde her türlü veri türünü saklayabiliyoruz. Örnekteki "users" property'si içinde obje tutan bir array'e denk gelmekte. "settings" propertysinde ise obje içinde obje tutulmakta. "banList" propertysinde ise basit bir array tutulmakta.

"banList" propertysinde 3. elemana ulaşmak istersek şu şekilde ulaşabiliriz. 

~~~markdown
alert(state.banList[2])
~~~

"settings" lerdeki "website" değerine ulaşmak isersek şu şekilde ulaşabiliriz. 

~~~markdown
alert(state.settings.website)
~~~

"user" larda James'in en sevdiği rengi öğrenmek istersek, o veriye şu şekilde ulaşabiliriz. 

~~~markdown
alert(state.users[2].favoriteColor)
~~~

### JSON Veri Tipini Obje Olarak Kullanmak

Değişmeyen ve statik olarak kullanmanız gereken verileri JSON derslerinde de anlatıldığı gibi ".json "dosya eklentisi ile bir dizinde kaydedip uygulamanızda bu değişmeyen verilerden yararlanmak isteyebilirsiniz. Projenizde JSON dosyalarıyla çalışabilmeniz için önce onu dosyada import etmeniz ve obje şekline çevirmeniz gerekmektedir. Bu işlem çok basit bir şekilde yapılabilir.

~~~markdown
const veri = require("./dosyanizin/dizini/veri.json") // Bu işlemde require fonksiyonu ile dosyanızı import etmektesiniz

// Bu işlemden sonra veri bileşenini obje şeklinde kullanabilirsiniz. 
~~~

### Özet 

~~~markdown
* Objeler, birkaç özel niteliğe sahip ilişkilendirilebilir array(dizi)'lerdir.
* Key / value şeklinde property'leri saklar.
* Key ifadesi string veya sembol olmalıdır.
* Value ifadesi herhangi bir değer alabilir.
* Belli bir property'e erişmek için kullanabileceklerimiz: 
  * Dot notation: obj.property 
  * Square brackets notation obj[“property”]. Bu özellik key'in obj[varWithKey] gibi bir değişkenden alınmasına izin verir.

Bu zamana kadar bahsettiğimiz objeler “plain object” olarak isimlendirilir. 

~~~

### Obje Metodları

Plain objects için aşağıdaki metotlar(method) kullanılabilir: 

~~~markdown
Object.keys(obj) – Key’lerden oluşan bir array döner(return).
Object.values(obj) – Value’lardan oluşan bir array döner.
Object.entries(obj) – [key, value] çiftlerinden oluşan bir array döner. 
~~~

Tüm bu Object.* metotları array veri tipinde değer döner.

~~~markdown
let person = {
  name: “Jack”,
  age: 20
};

Object.keys(person) = ["name", "age"]
Object.values(person) = ["Jack", 20]
Object.entries(person) = [ ["name","Jack"], ["age",20] ]
~~~

### JSON Metodları 

Objenizi String veri türüne çevirip, projenizde objelerinizi direk sayfaya basmak isterseniz, onun içinde bir metot bulunmakta.  

~~~markdown
let person = {
  name: “Jack”,
  age: 20
};

document.getElementById("demo").innerHTML = JSON.stringify(person); // Bu objenizi bir stringe çevirip demo idsine basacaktır.

let stringObject = JSON.stringify(person);

let newPerson = JSON.parse(stringObject); 
// parse methodu da stringtify methodunun tersi olarak çalışır ve stringi objeye çevirir 
~~~

## Kaynaklar

- [Javascript.info](https://javascript.info/object)

- [Medium](https://medium.com/dailyjs/how-to-use-javascript-computed-properties-8f6f096379e3#:~:text=Computed%20properties%20allow%20you%20to%20dynamically%20choose%20what%20property%20in,name%20and%20value%20from%20event.)

