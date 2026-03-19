# CSS Transforms (Dönüşümler) - 2D ve 3D Transforms

CSS `transform` özelliği, HTML elementlerini görsel olarak değiştirmenize olanak tanır. Elementleri ölçeklendirebilir (büyütüp küçültebilir), döndürebilir, eğebilir veya hareket ettirebilirsiniz. Bu özellik özellikle `transition` ve `animation` ile birlikte kullanıldığında çok güçlü görsel efektler yaratır.

Transform işlemleri sayfa düzenini (layout) bozmaz, yani diğer elementleri itmez veya çekmez. Sadece elementin görsel sunumunu değiştirir.

---

## 1. 2D Transform Özellikleri

İki boyutlu alanda (X ve Y eksenleri) yapılan dönüşüm işlemleridir.

### translate() (Hareket Ettirme)
Elementi mevcut konumundan X (yatay) ve Y (dikey) eksenlerinde hareket ettirir.

```css
.kutu {
  /* X ekseninde 50px sağa, Y ekseninde 20px aşağıya kaydırır */
  transform: translate(50px, 20px);
  
  /* Sadece X veya Y ekseninde de kullanılabilir */
  /* transform: translateX(50px); */
  /* transform: translateY(20px); */
}
```

### scale() (Ölçeklendirme)
Elementin boyutunu büyütür veya küçültür. `1` değeri varsayılan boyuttur.

```css
.kutu {
  /* Genişliği ve yüksekliği 1.5 kat büyütür */
  transform: scale(1.5);
  
  /* Genişliği 2 kat, yüksekliği yarıya indirir */
  /* transform: scale(2, 0.5); */
  
  /* Sadece X veya Y ekseninde de kullanılabilir */
  /* transform: scaleX(2); */
  /* transform: scaleY(0.5); */
}
```

### rotate() (Döndürme)
Elementi belirli bir derece (`deg`) kadar döndürür. Pozitif değerler saat yönünde, negatif değerler saat yönünün tersine döndürür.

```css
.kutu {
  /* Saat yönünde 45 derece döndürür */
  transform: rotate(45deg);
  
  /* Saat yönünün tersine 90 derece döndürür */
  /* transform: rotate(-90deg); */
}
```

### skew() (Eğme)
Elementi X ve Y eksenlerinde belirli bir derece eğerek paralelkenar benzeri şekiller oluşturmayı sağlar.

```css
.kutu {
  /* X ekseninde 20 derece, Y ekseninde 10 derece eğer */
  transform: skew(20deg, 10deg);
  
  /* Sadece X veya Y ekseninde de kullanılabilir */
  /* transform: skewX(20deg); */
  /* transform: skewY(10deg); */
}
```

---

## 2. 3D Transform Özellikleri

Üç boyutlu alanda (X, Y ve Z eksenleri) yapılan dönüşüm işlemleridir. Z ekseni derinliği (bize doğru veya bizden uzağa) temsil eder.

3D dönüşümlerin doğru çalışması ve derinlik hissi vermesi için ebeveyn elementte `perspective` özelliği kullanılmalıdır.

### perspective (Derinlik Bakış Açısı)
```css
.sahne {
  /* Ebeveyn elemente derinlik kazandırır */
  perspective: 1000px;
}
```

### rotateX(), rotateY(), rotateZ()
Elementi 3 boyutlu eksenlerde döndürür.

```css
.kutu {
  /* Y ekseni etrafında (kapı gibi) 180 derece döner */
  transform: rotateY(180deg);
  
  /* X ekseni etrafında (takla atar gibi) 45 derece döner */
  /* transform: rotateX(45deg); */
}
```

### translateZ() ve translate3d()
Elementi Z ekseninde (size doğru veya sizden uzağa) hareket ettirir.

```css
.kutu {
  /* Bize doğru 100px yaklaşır (perspective ayarlanmışsa) */
  transform: translateZ(100px);
  
  /* X, Y ve Z eksenlerinde aynı anda hareket */
  /* transform: translate3d(50px, 50px, 100px); */
}
```

---

## 3. Transform Origin (Merkez Noktası)

Varsayılan olarak `transform` işlemleri elementin tam merkezinden (`50% 50%`) gerçekleşir. `transform-origin` özelliği bu referans noktasını değiştirmenize olanak tanır.

```css
.kutu {
  /* Dönme veya büyüme işleminin sol üst köşeden başlamasını sağlar */
  transform-origin: top left; /* veya 0% 0% */
  transform: rotate(45deg);
}
```

---

## 4. Birden Fazla Transform Kullanımı

Birden fazla dönüşüm işlemini aynı anda uygulamak için aralarına **virgül koymadan** boşluk bırakarak yazmalısınız. **Sıra önemlidir!** Element önce çevrilir sonra hareket ederse, hareket yönü de çevrilmiş olur.

```css
.kutu {
  /* Önce 50px sağa kayar, GİTTİĞİ YERDE 45 derece döner */
  transform: translateX(50px) rotate(45deg);
}
```

## Kaynaklar
- [MDN Web Docs - transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [W3Schools - CSS 2D Transforms](https://www.w3schools.com/css/css3_2dtransforms.asp)
- [W3Schools - CSS 3D Transforms](https://www.w3schools.com/css/css3_3dtransforms.asp)
