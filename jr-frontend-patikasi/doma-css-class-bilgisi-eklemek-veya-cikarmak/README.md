## ClassList

JavaScrip’te CSS classlarını manipule etmenin en iyi yollarından biri `classList` kullanmaktır. `classList` bir öğenin sınıf isimlerini `DOMTokenList` olarak döndürür.
`classList` özelliği tüm modern browserlarda çalışır.

### Syntax
```javascript
const elementClasses = elementNodeReference.classList;
```

### Properties
```HTML
  <div id="content" class="main red">JavaScript classList</div>
```
- `add()` : HTML öğesine bir veya daha fazla class ekler.

```JavaScript
let div = document.querySelector('#content');
div.classList.add('info');
```
Yukarıda `content` id'li ögeyi seçtik ve ona `info` class'ını ekledik.

```JavaScript
let div = document.querySelector('#content');
div.classList.add('info','visible','block');
```
Tek seferde birden fazla da `class` ekleyebiliriz.

- `remove()` : HTML öğesinden bir veya daha fazla class'ı siler.

```JavaScript
let div = document.querySelector('#content');
div.classList.remove('info');
```
Yukarıda `content` id'li ögeyi seçtik ve ona ait `info` class'ını kaldırdık.


- `item()` : HTML de  class'ı verilen **index**  sırasına göre döndürür. Eğer index, `class length`'inden (sayısından) daha büyük veya `length`'ine eşit olursa `undefined` döner.

```JavaScript
let div = document.querySelector('#content');
div.classList.item(0);
```
Yukarıda `content` id'li ögeyi seçtik ve ona ait ilk `class`'ı çağırdık.

- `contains()` : Element verilen class'ı içeriyorsa `true`, içermiyorsa `false` döner. *Bu sayede bir işlem yaptırmadan önce kontrol edebiliriz.*

```JavaScript
let div = document.querySelector('#content');
div.classList.contains('warning');  
```
- `Toggle()` : `classList.add()` ve `classList.remove()` yöntemini aynı anda çağırmak yerine `classList.toggle()` yöntemini kullanılabilir. 

Bu metodu kullanmadan önce `contain()` metodu ile sinisin var olup olmadığını manuel olarak kontrol etmek gerekir.

```JavaScript
let div = document.querySelector('#content');
div.classList.toggle('visible');
```
- `replace()` : Bir CSS sınıfını başka bir sınıfla değiştirmek için kullanılır.
```JavaScript
let div = document.querySelector('#content');
div.classList.replace('info','block');
```
- `length()` : Bir öğede bulunan sınıf sayısını  bilmemizi sağlar.

**Aşağıda codepen ile deneyimleyebilirsiniz!**

### Alıştırma önerisi

1. Codepen'de oluşturmuş olan butona tıklandığımızda çemberin rengini `classList` metotlarını kullanarak değiştirdik. Başka `button`'lar ve `class`'lar ekleyiniz.

**Aşağıda codepen ile deneyimleyebilirsiniz!**

2. Codepen'de oluşturmuş olan `button`'lara tıklandığında istenilen değişiklikleri yapınız.

- **Add Butonu:** Yeni bir class ekleyiniz ve yeni oluşturulan class'a css bilgisi ekleyerek kutunun arka plan rengini **turuncu** yapınız.

- **Remove Butonu:** Kutunun içindeki metnin class'ına, önceden eklenmiş  css class'ını **kaldırınız.**
- **Replace Butonu:** Yeni bir class oluşturunuz, istediğiniz özellikleri css ile veriniz. Add butonu ile eklediğiniz class ile değiştiriniz.
- **Item Butonu:** `p` elementinin class isimlerinin ilkini ekrana `alert` ile yazdırınız. 
- **Contains Butonu:** `p` elementinin `classList` classını içerip içermediğini kontrol ediniz. Eğer içeriyorsa  ekrana alert ile `True`, içermiyorsa `False`  yazdırınız. 

**Aşağıda codepen ile deneyimleyebilirsiniz!**

