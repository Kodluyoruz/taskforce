# Açıklama Satırları Oluşturmak

Web sayfalarımızı hazırlarken açıklama satırlarını nasıl oluştururuz, hangi durumlarda kullanırız, amacı nedir bu açıklama satırlarının gibi konuları inceliyor olacağız. 

Web sayfalarımızı hazırlarken bazı durumlarda açıklama satırlarına ihtiyaç duyarız. Eğer HTML'e başlamadan önce herhangi bir yazılım dili ile ilgilendiyseniz yorum/açıklama satırlarını kullanmışsınızdır. HTML tarafında açıklama satırlarının yazım stili diğer dillere göre daha farklı. 

## Açıklama satırı eklemeli miyim?
Evet, eklemelisin. Çünkü açıklama satırlarını kodunuzu 2 ay sonra tekrar gözden geçirmek için açtığınızda neyin nerede olduğunu anlamanız açısından fayda sağlayacaktır. Sadece kendimiz ile de bitmiyor. Projeyi farklı bir kişiye devrettiğinizde veya paylaştığımızda yazdığınız yorum satırlarının başka biri tarafından okunması karşı taraf için de fayda sağlayacaktır. Hatta yazdığımız kodların reçetesi veya ilacın üzerine yazılan kullanım talimatı gibi yorumlayabiliriz. :)

## Açıklama satırı nasıl oluşturulur?
Açıklama satırını HTML kodumuzda `<!–` ile başlatıp `–>` ile bitecek şekilde yazabiliyoruz. "ile başlatıp" yazan alana yorumlarımızı ekleyebiliyoruz. 

## Açıklama satırı web sayfasında görünür mü?
Hayır, kullanıcılar web sayfanızda açıklama satırlarını görmezler. Ayrıca açıklama satırları web tarayıcıları tarafından herhangi bir işleme tabi tutulmazlar. Fakat kullanıcı sayfanızda sağ tıklayıp kaynağı görüntüle dediğinde açıklama satırlarınızı görebilir. 

## Hadi örneklendirelim!
Aşağıdaki örnekte birden fazla HTML elementlerini tanımlayıp aralara açıklama satırları ekliyoruz. Böylelikle HTML kodumuz daha okunabilir bir hal alabiliyor. Hangi elementin nerede kapatıldığını veya açıklama satırına yazacağımız o kodun işlevi ile daha açıklayıcı bir hale getiriyoruz. Aşağıdaki örnekte **index.html** dosyasının body elementi içerisine yazacağımız kodları paylaşıyorum.

```html
<!--nav element başlangıç-->
<nav>
    <ul>
        <li>Anasayfa</li>
        <li>Kurumsal</li>
        <li>İletişim</li>
    </ul>
</nav>
<!--nav element bitiş-->
 
<!--section element başlangıç-->
<section>
    <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.</p>
</section>
<!--section element bitiş-->
 
<!--footer element başlangıç-->
<footer>
    Copyright © 2021
</footer>
<!--footer element bitiş-->
```

**Aşağıda codepen kullanarak pratik yapabilirsin!**

## Kaynaklar

- https://www.mehsatek.com/html-yorum-satiri-html-yorum-kodu/