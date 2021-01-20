# Class ve Id Kullanımı

Web sayfamızı oluştururken HTML elementlerimize bazı stil özellikleri eklemek isteriz. Bazı yazıların renkli, bazı resimlerin küçük veya bazı butonların farklı şekilde olması gerekebilir ve biz de bunun için CSS kullanırız. 

Aşağıda html elementlerine nasıl stil özellikleri eklediğimize bakalım.

```html
<p>Bugün kodluyoruz</p>
<p>Yarın da kodluyoruz<p>
```

```css
p {
	color: red;
}
```

**Sonuç**:

![Screenshot_1](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/css/css-ile-class-ve-id-kullanimi/assets/Screenshot_1.jpg)



Yukarıda görüldüğü üzere iki farklı `<p></p>` elementimize kırmızı renk özelliği eklemiş olduk. Fakat sadece belirli `<p></p>` elementine istediğimiz herhangi bir özelliği eklemek istersek ne yapacağız? Bu durumda *class* veya *id* seçicilerini kullanmamız gerekiyor.

#### **Class Kullanımı**

Class seçicisi, HTML üzerinde aynı class’a sahip elemana ulaşmamızı sağlar.

Class seçicisi CSS’de `.` ile belirtilir.

```css
.class{
     özellikler
}
```

```html
<h4>Birinci Başlık</h4>
<h4>İkinci Başlık</h4>
<h4>Üçüncü başlık</h4>
```

Yukarıda 3 adet `<h4></h4>` elementimiz bulunuyor. Bunlardan sadece ikincisine kırmızı renk özelliği eklemek istersek class seçicisini kulanabiliriz.

```html
<h4>Birinci Başlık</h4>
<h4 class="text-red">İkinci Başlık</h4>
<h4>Üçüncü Başlık</h4>

```

Daha sonra bunu istediğimiz özelliği ekleyelim.

```css
.text-red{
   color:red;
}

```



**Sonuç:**

![Screenshot_2](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/css/css-ile-class-ve-id-kullanimi/assets/Screenshot_2.jpg)



Bir class’ı birden fazla HTML elementi için kullanabiliriz.

```html
<h4>Birinci Başlık</h4>
<h4 class="h-green">İkinci Başlık</h4>
<h4 class="h-green">Üçüncü Başlık</h4>

```

```css
.h-green {
   color:green;
}
```

**Sonuç:**

![Screenshot_3](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/css/css-ile-class-ve-id-kullanimi/assets/Screenshot_3.jpg)





Eğer bir HTML elementinin birden fazla class özelliğine sahip olmasını istiyorsak aynı anda iki farklı class’ı kullanabiliriz. Bunun için sadece iki class arasına boşluk bırakmak yeterli olacaktır.

```html
<h4>Birinci Başlık</h4>
<h4 class="h-blue">İkinci Başlık</h4>
<h4 class="h-blue thick">Üçüncü Başlık</h4>

```

```css
.h-blue{
    color:blue;
}
.thick{
       font-style: italic;
}

```

**Sonuç:**

![Screenshot_4](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/css/css-ile-class-ve-id-kullanimi/assets/Screenshot_4.jpg)



Bir HTML elementi kendini kapsayan elementin (parent elementi) stil özelliklerine sahip olur.

```html
<div class="intro">
  <p>Birinci Paragraf</p>
  <p>İkinci Paragraf</p>
</div>ht
```

```css
.intro{
    color:pink;
 }
```

**Sonuç:**

![Screenshot_5](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/css/css-ile-class-ve-id-kullanimi/assets/Screenshot_5.jpg)



Yukarıda `<div></div>` elementine CSS özelliği ekledik fakat altındaki elementler (child elementleri) de bu özelliğe sahip oldu.

#### **Id kullanımı**

Id seçicisi, HTML üzerinde aynı id’ye sahip elemana ulaşmamızı sağlar.

Id seçicisi CSS’de `#` ile belirtilir.

Id seçicisinin kullanım amacı olarak class seçicisinden bir farkı yok diyebiliriz. İkiside belirli HTML elementlerine CSS özellikleri eklemeye yöneliktir. Fakat Id seçicisinin class seçicisinden bazı farkları vardır.

```css
#id {
     özellikler
}

```

Bir id’yi sadece bir HTML elementi üzerinde kullanabiliriz.

```html
<h4 id="main-title">Birinci Başlık</h4>
<h4>İkinci Başlık</h4>
```

```css
#main-title{
	color:red;
}

```

**Sonuç:**

![Screenshot_6](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/css/css-ile-class-ve-id-kullanimi/assets/Screenshot_6.jpg)

Aşağıdaki **yanlış** bir kullanımdır!

```html
<p id="title">Birinci paragraf</p>
<p id="title">İkinci paragraf</p>
```

Bir html elementinin sadece bir tane id’si olabilir. 

Aşağıdakiler **yanlış** kullanımlardır.

```html
<p id="title" id="text-green">Birinci paragraf</p>
<p id="title text-blue">İkinci paragraf</p>
```

Böyle kullanımlar geçerli **değildir.**



## Sorular

**1. Aşağıdakilerden hangisi doğru bir kullanımdır?**

A.

```css
.{title
	color:red;
}
```

B.

```css
title#{
	color:blue;
}
```

C.

```css
.title{
   color:green;
}
```

D.

```
title{
    color:pink;
}
```



<details> 
    <summary>
    Cevap
    </summary>
    <p>Doğru cevap: C seçeneği</p>
</details>


**2.  Aşağıdaki ifadelerden hangisi yanlıştır?**

**A.** Bir html elementi birden fazla class'a sahip olabilir.

**B.** Bir html elementi sadece bir  id'ye sahip olabilir.

**C.** Bir class birden fazla html elementinde kullanılabilir.

**D.** Bir id birden fazla html elementinde kullanılabilir.



<details> 
    <summary>
    Cevap
    </summary>
    <p>Doğru cevap: D seçeneği</p>
    <p>
        Bir id sadece bir html elemanında kullanılabilir.
    </p>
</details>

**3.**Aşağıdaki  kodun çıktısı nedir?

```html
<p class="main-text intro"> Birinci paragraf</p>
<p class="main-text"> İkinci paragraf</p>
<p id="outro"> Üçüncü paragraf</p>
```

```css
.main-text {
    font-style: italic;
}

.intro {
    color:red;
}

#outro {
    color:green;
}
```



**A.**

![Screenshot_7](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/css/css-ile-class-ve-id-kullanimi/assets/Screenshot_7.jpg)

**B.**

![Screenshot_8](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/css/css-ile-class-ve-id-kullanimi/assets/Screenshot_8.jpg)

**C.**

![Screenshot_9](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/css/css-ile-class-ve-id-kullanimi/assets/Screenshot_9.jpg)

**D.**

![Screenshot_10](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/css/css-ile-class-ve-id-kullanimi/assets/Screenshot_10.jpg)



<details> 
    <summary>
    Cevap
    </summary>
    <p>Doğru cevap: B seçeneği</p>
</details>






#### **Kaynaklar**

www.w3schools.com
