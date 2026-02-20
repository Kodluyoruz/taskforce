# Diğer HTML Etiketleri Hakkında

HTML öğrenirken sıkça sorulan bir soru tüm etiketlerin öğrenilmesi gerekip gerekmediğidir. HTML güncel olarak 100’den fazla etiket içerir ancak bunların hepsini öğrenmek mümkün değildir. Günümüzde birçok HTML sayfası semantik elementler ve  10-12 adet semantik olmayan etiket ile oluşturulabilir.

Etiket     | İşlevi 
-----------|-----------|
h1         | Başlık
p          | Paragraf
i - em     | Eğik - Vurgulu Yazı
b - strong | Kalın - Koyu Yazı
a          | Link
ul & li    | Sırasız liste ve liste elemanı
blockquote | Alıntı
hr         | Yatay çizgi ekleme
img        | Görsel
div        | Bölme 

Yukarıdaki tabloda yaygın kullanılan semantik olmayan etiketler ve görevleri verilmiştir. Bunlar dışında bir etikete ihtiyaç duyulduğunda istenen fonksiyona dair yapılacak araştırmayla ilgili etikete ulaşılabilir. 



  ### Emmet ###
  HTML ve CSS etiketlerinde kullanım kolaylığı sağlaması açısından **Emmet** oldukça faydalı bir eklentidir. Kısaltılmış kod yapıları yardımıyla uzun kod blokları oluşturmayı sağlar.

**Asıl koda dönüşmeden önceki Emmet yapısı:**
```html
<!doctype html>
<html lang ="en">
<head>
  <title>Demo</title>
</head>
<body>
  ul#nav>li.item$*4>a{Item $}
</body>
</html>
```

**Emmet sonrası kodun tam formu:**
```html
<!doctype html>
<html lang ="en">
<head>
  <title>Demo</title>
</head>
<body>
  <ul id="nav>
    <li class="item1"><a href="">Item 1</a></li>
    <li class="item2"><a href="">Item 2</a></li>
    <li class="item3"><a href="">Item 3</a></li>
    <li class="item4"><a href="">Item 4</a></li>
	</ul>
</body>
</html>
```

## Kaynaklar
- http://www.99lime.com/_bak/topics/you-only-need-10-tags/
- https://emmet.io/
- https://www.themt.co/blog/5-bilisim/353-emmet-nedir-ve-ne-ise-yarar
