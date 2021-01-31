## ClassList

JavaScrip’te CSS classlarını manipule etmenin en iyi yollarından biri classList kullanmaktır. ClassList bir öğenin sınıf isimlerini DOMTokenList olarak döndürür.
ClassList özelliği tüm modern browserlarda calışır.
### Syntax
```
const elementClasses = elementNodeReference.classList;
```

### Properties
```HTML
  <div id="content" class="main red">JavaScript classList</div>
```
*  **add()** : HTML ogesine bir veya daha fazla class ekler.

```JavaScript
 let div = document.querySelector('#content');
 div.classList.add('info');
```
```JavaScript
let div = document.querySelector('#content');
div.classList.add('info','visible','block');
```
* **remove()** : HTML oğesinden bir veya daha fazla classı siler.
```JavaScript
let div = document.querySelector('#content');
div.classList.remove('info');
```
* **item()** : HTML de  classı verilen index  sırasına göre döndürür. Eğer index class length inden daha büyük veya length'ine eşit olursa undefined döner.

```JavaScript
let div = document.querySelector('#content');
div.classList.item(0);
```
* **contains()** : Element verilen classı içeriyorsa true, içermiyorsa false döner.
```JavaScript
let div = document.querySelector('#content');
div.classList.contains('warning');  
```
* **Toggle()** : classList.add () ve classList.remove () yöntemini aynı anda çağırmak yerine classList.toggle () yöntemini kullanılabilir. 
 Bu metodu kullanmadan once contain() metodu ile sinisin var olup olmadigini manuel olarak kontrol etmek gerekir.
```JavaScript
let div = document.querySelector('#content');
div.classList.toggle('visible');
```
* **replace()** : Bir CSS sınıfını başka bir sınıfla değiştirmek için kullanılır.
```JavaScript
let div = document.querySelector('#content');
div.classList.replace('info','block');
```
* **length()** : Bir öğede bulunan sınıf sayısını  bilmemizi sağlar.
  [Codepen'de deneyin](https://codepen.io/brcthn/pen/zYKjVjR)
  
### Sorular
```
Soru 1: Codepen'de oluşturmuş olan butona tıklandındığında çemberin rengini classList metodlarını kullanarak degiştiriniz.
```
[Codepen'de deneyin](https://codepen.io/brcthn/pen/abmYaRv)

Soru 2: Codepen'de oluşturmuş olan butonlara tıklandındığında istenilen değişiklikleri yapiniz.
 -Add Butonu: Yeni bir class ekleyiniz ve yeni oluşturulan classa css bilgisi ekleyerek kutunun arka plan rengini turuncu yapınız.
- Remove Butonu: Kutunun içindeki metnin classına, önceden eklenmiş  css  classını kaldırınız.
- Replace Butonu: Yeni bir class oluşturunuz, istediğiniz özellikleri css ile veriniz. Add  butonu ile eklediğiniz class ile degiştiriniz.
- Item Butonu: p elementinin class isimlerinin  ilkini ekrana alert ile yazdırınız. 
- Contains Butonu: p elementinin "classList" classını içerip içermediğini kontrol ediniz. Eğer içeriyorsa  ekrana alert ile "True", içermiyorsa "False"  yazdırınız. 

[Codepen'de deneyin](https://codepen.io/brcthn/pen/wvzXZZq)
