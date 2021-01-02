# Objeler Key - Value Çiftleri Erişim ve Metodları

Bir obje(object), {…} süslü parantezleri ile,  isteğe bağlı olarak bir özellikler(property) listesiyle oluşturulabilir. Property bir "anahtar(key): değer(value)" çiftidir ve burada key("property name" de denir) bir string(yazı tipinde), value herhangi bir veri tipi olabilir.

### Literals and properties

Obje örneği:

~~~markdown
let car = {		
  brand: "BMW", 	// key(anahtar) "brand" "BMW" value(değerini) tutar 
  year: 2020,  		// key(anahtar) "year" 2020 value(değerini) tutar 
};
~~~
Property değerlerine noktalı yazım(dot notation) kullanarak erişilebilir:

`console.log( car.brand );      // “BMW”`

İstediğimiz zaman property ekleyebilir, kaldırabilir ve objeden property okuyabiliriz.
Mevcut bir property'i eklemek veya değiştirmek için şu şekilde yazabiliriz:

`car.model = “320i”;      // objeye model isminde bir key ekler ve value olarak string atar `

Bir property’i kaldırmak için silme (delete) operatörünü kullanabiliriz:

`delete car.year;`

Birden fazla kelime içeren property name kullanabiliriz, ancak bunlar tırnak (“”) içinde kullanılmalıdır: 
~~~markdown
let car = {
  brand: "BMW",  
  year: 2020,  		
 “is manual” : true,
};
~~~
### Square brackets

Birden fazla kelime içeren property'ler için dot notation kullanamayız.
Bunun yerine “square bracket notation” yani köşeli parantezli yazım kullanılır: 
~~~markdown
let person= {};                     // set (oluştur)
person["likes sea"] = true;         // get (getir)
console.log(person["likes sea"]);   // true (doğru)
delete person["likes sea"];         // delete (sil)
~~~
Köşeli parantezli yazım aynı zamanda özellik ismini getirmede kullanılabilir:

~~~markdown
let animal= {};           // set(oluştur)
let key = "flies";    // key atama
person[key] = true;       // value atama`
~~~
Yeni objemiz: 
~~~markdown
animal = {     
   “flies” : true	  // yeni eklediğimiz key value çifti
}; 
~~~
Burada, değişken(variable) key runtime(çalışma zamanında) hesaplanabilir veya kullanıcı girdisine bağlı olabilir. Sonrasında property’e erişmek için kullanabiliyoruz. Bu bize kullanımda esneklik sağlıyor.
~~~markdown
let person = {
  name: "Jack”,
  age: 20,
};
let key = prompt("Kişinin hangi özelliğini öğrenmek isterdiniz?", "name");

// değişken ile erişim
alert( person[key] );   // Jack(prompt’a “name” yazarsak erişeceğimiz değer)
~~~
Dot notation'ı benzer şekilde kullanamayız.

### Computed Properties

Bir obje oluştururken, key'ler için köşeli parantezler yardımıyla dinamik değerler(variable) kullanabiliriz. Buna hesaplanmış özellikler(computed properties) denir.

Computed properties, objedeki hangi property'nin güncelleneceğini dinamik olarak seçmemize olanak tanır.

~~~markdown
function myObj (key, value) {
   return {
[key]: value
  };
};
myObj{name: “Anna”}   // atanmış yeni değer
~~~
\* Key, square brackets [] içine alındığı sürece herhangi bir ifade olabilir.,

### Özet 

Objeler, birkaç özel niteliğe sahip ilişkilendirilebilir array(dizi)'lerdir.
Key / value şeklinde property'leri saklar.
Key ifadesi string veya sembol olmalıdır.
Value ifadesi herhangi bir değer alabilir.
Belli bir property'e erişmek için kullanabileceklerimiz: 
Dot notation: obj.property 
Square brackets notation obj[“property”]. Square bracket key'in obj [varWithKey] gibi bir değişkenden alınmasına izin verir.
Bu zamana kadar bahsettiğimiz objeler “plain object” olarak isimlendirilir. 

### Obje Methodları

Plain objects için aşağıdaki metodlar kullanılabilir: 

Object.keys(obj) – Key’lerden oluşan bir array döner(return).
Object.values(obj) – Value’lardan oluşan bir array döner.
Object.entries(obj) – [key, value] çiftlerinden oluşan bir array döner. 

Tüm bu Object.* metodları array veri tipinde değer döner.
~~~markdown
let person = {
  name: “Jack”,
  age: 20
};

Object.keys(person) = ["name", "age"]
Object.values(person) = ["Jack", 20]
Object.entries(person) = [ ["name","Jack"], ["age",20] ]

~~~

#### Referanslar:

[Javascript.info](https://javascript.info/object)


[Medium](https://medium.com/dailyjs/how-to-use-javascript-computed-properties-8f6f096379e3#:~:text=Computed%20properties%20allow%20you%20to%20dynamically%20choose%20what%20property%20in,name%20and%20value%20from%20event.)
