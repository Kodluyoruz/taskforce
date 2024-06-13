
# Bootstrap’te Display Özellikleri ile Responsive Yapıya Göre İstenilen Blokların Gösterilmesi / Gizlenmesi

Bootstrap 5’teki display özellikleri sayesinde, CSS’teki display özelliği daha kolay bir kullanıma kavuşuyor.

CSS’teki display özelliğini kısaca hatırlayalım.

```css
display: none;
/* Elemanı sayfadan tamamen kaldırır */

display: block;
/* Elemente blok seviyesi elementlerin (<div>, <header>, <h1> gibi) görünüm özelliğini kazandırır.  */

display: inline;
/* Elemente <span>, <a>, <img> elementlerinde olduğu gibi, satır içi yerleşim özelliği kazandırır. Element satırı tamamen kaplamaz, içeriği kadar yer kaplar.  */

display: inline-block;
/* Elementleri satır içi element gibi yan yana dizmek için kullanılır. */

display: flex;
/* Element inline element gibi davranır ve bunun yanında flexbox modeline uygun görünüme sahip olur. */

display: grid;
/* Element, blok level bir element gibi davranır ve grid model görünümüne uygun davranır. */

```

Bootstrap display özelliği sayesinde çok daha kolay bir şekilde responsive uyumlu hazır grid sistemler inşa edebiliriz. Bunun için oluşturacağımız element için class değerine `d.{value}` girmemiz yeterlidir.
`{value}` değeri aşağıdakilerden herhangi biri olabilir:

```
none
inline
inline-block
block
grid
table
table-cell
table-row
flex
inline-flex
```

## Breakpoint’ler
Bootstrap’te ekran boyutları için hazır tanımlamalar bulunmaktadır. Bu tanımlamalara göre elementlerin görünürlüğünü açık/kapalı olarak class tag’inde belirtebiliriz. Bu sayede responsive uyumlu dinamik bir görünüm elde ederiz:

|Breakpoint         |infix        |Boyutlar          |
|-------------------|-------------|------------------|
|X-Small		 	        |-			         |<576px	        		 |
|Small              |sm           |≥576px            |
|Medium          	  |md		         |≥768px			         |
|Large			 	         |lg		         |≥992px			         |
|Extra Large	 	     |xl		         |≥1200px			        |
|Extra extra large  |xxl		        |≥1400px			        |


## Alıştırma
Şimdi, Bootstrap özelliklerini kullanarak 5 adet `h1` oluşturalım ve bu `h1` elementlerinin display özelliklerini ayarlayalım.

Bootstrap display class’larında ilk belirtilen değer aksi belirtilmedikçe diğer ekran boyutlarında da geçerli olmaktadır. Örneğin **XS** (mobil) boyutu için görünür olmayan bir element ekstra bir tanım yapılmadıkça diğer ekran boyutlarında da görünür olmayacaktır. **XS** boyutunda `d-none` (CSS’teki `display:none;` ile eşdeğer) olarak tanımlanmış bir elementi **MD** (Laptop) boyutunda ekranda görünür hale getirmek için

İlk elementimiz mobil yani “**xs**” boyutu için görünür olmalı. Bunun için class tag’ine `d-block` yazmamız gerekiyor ve bu da CSS’teki `display:block;` satırına eşdeğer. Fakat bir sonraki boyut ve sonrasında elementi gizlemek için `display:none;` olarak ayarlamamız gerekiyor. Bunun için Bootstrap’te sonraki boyut olan “sm” boyutu için `d-sm-none` tanımlamasını yapıyoruz. Böylece sm ve daha sonraki ekran boyutları için `display:none` tanımlamasını yapmış oluyoruz:

```html
<h1 class="d-block d-sm-none bg-warning p-5 text-white mx-auto">XS - Birinci Element - Mobil Görünüm</h1>
```

Bir sonraki h1 elementi için ise sadece **sm** ekran boyutunda görünür olmasını istiyoruz. Bunun için standart olarak d-none özelliği tanımlayıp ardından **sm** ekran boyutu için `d-sm-block ` tanımlaması yapıyoruz. Sonraki ekran boyutları için elementi gizlemenin yolu ise, bir sonraki ekran boyutunda yine `display:none` tanımlaması yapmak. Bunun için `d-md-none` yazabiliriz:

```html
<h1 class="d-none d-sm-block d-md-none bg-primary p-5 text-white mx-auto">SM - İkinci Element - Tablet Görünüm</h1>
```

Sonraki `h1` elementinde sadece **md** ekran boyutunda görünür olması için varsayılan olarak `d-none` tanımlaması yapıp ardından `d-md-block` yazmalıyız. Sonraki ekran boyutlarında görünürlüğü kapatmak için ise `d-lg-none` yazmamız yeterli olacaktır:

```html
<h1 class="d-none d-md-block d-lg-none bg-success p-5 text-white mx-auto">MD - Üçüncü Element - Laptop Görünüm</h1>
```

Sonraki `h1` elementinde önce `d-none`, ardından **lg** ekran boyutunda görünür hale getirmek için `d—lg-block`, sonraki ekran boyutlarında gizli hale getirmek için ise `d-xl-none` yazabiliriz:

```html
 <h1 class="d-none d-lg-block d-xl-none bg-danger p-5 text-white mx-auto">LG - Dördüncü Element - Normal Ekran Görünüm</h1>
```

Son ekran boyutunda görünmesini istediğimiz `h1` elementini ise varsayılan olarak `d-none` şeklinde ayarlıyoruz. Ardından `d-xl-block` yazmamız yeterli olacaktır. Bu ekrandan daha büyük tanımlı bir ekran bulunmadığı için, başka bir tanımlama yapmamıza gerek yoktur:

```html
<h1 class="d-none d-xl-block bg-info p-5 text-white mx-auto">XL - Beşinci Element - Büyük Ekran Görünüm</h1>
```

Yukarıdaki satırlarda yazdığımız `h1` elementlerinin farklı ekran boyutlarında görünümleri şu şekildedir:

### 1200px Genişlik:
![](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/bootstrap/display-ozellikleri-ile-responsive-yapiya-gore-i%CC%87stenilen-bloklarin-gosterilmesi-gizlenmesi/figures/1200.png)

### 992px Genişlik:
![](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/bootstrap/display-ozellikleri-ile-responsive-yapiya-gore-i%CC%87stenilen-bloklarin-gosterilmesi-gizlenmesi/figures/992.png)

### 768px Genişlik:
![](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/bootstrap/display-ozellikleri-ile-responsive-yapiya-gore-i%CC%87stenilen-bloklarin-gosterilmesi-gizlenmesi/figures/768.png)

### 576px Genişlik:
![](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/bootstrap/display-ozellikleri-ile-responsive-yapiya-gore-i%CC%87stenilen-bloklarin-gosterilmesi-gizlenmesi/figures/576.png)

### 420px Genişlik:
![](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/bootstrap/display-ozellikleri-ile-responsive-yapiya-gore-i%CC%87stenilen-bloklarin-gosterilmesi-gizlenmesi/figures/420.png)

Görüldüğü üzere, 5 farklı `h1` elementini farklı ekran boyutlarında göstermiş ve diğer boyutlarda gizlemiş olduk.

## Kaynaklar
- [CSS display - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/display)  
- [CSS display property - w3schools](https://www.w3schools.com/cssref/pr_class_display.asp)  
- [Display Property - Bootstrap](https://getbootstrap.com/docs/4.0/utilities/display/)  
- [Bootstrap Utilities - w3schools](https://www.w3schools.com/bootstrap4/bootstrap_utilities.asp)`
