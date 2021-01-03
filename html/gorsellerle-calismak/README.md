# Görsellerle Çalışmak

Merhaba arkadaşlar bu yazıda HTML belgemize resim ekleme , bu resimlerle çalışma konusunda bilgi edineceğiz.
Öncelikle html sayfamıza resim eklemek için **<img>** tagini kullanırız. 

### - Src=""
Kod bloğundaki **src=""** özelliğine resmin url ya da dosya adresi belirtilerek resim html sayfasına çağırılır.

`<img src="ornek.jpg"/> `

Yukarıdaki örnekte resim html dosyasıyla aynı dizinde olduğu için direkt adını ve uzantısını yazmak yeterlidir. Burada img uzantısına dikkat etmek önemli, html dsoyaları nasıl **.html** ile bitiyorsa tüm resim dosyalarının sonu da **.xbm, .gif, .png veya .jpg** ile bitmelidir.

Diyelim ki projenin içerisinde bir dizin oluşturdunuz (images) ve resminizi bu dizine eklediniz. Bu defa çağırmak için öncelikle images dizinine gitmek gerekiyor.

`<img src="images/ornek.jpg"/> `

Ya da resim bir üst dizinde kalıyor olabilir. Bu durumda bir üst dizine çıkıp images dizinini bulup resmi çağırmak gerekiyor. (Üst dizine çıkmak için ../ kullanırız.)

`<img src="../images/ornek.jpg"/>`

 Bu şekilde istediğiniz kadar üst dizine çıkabilirsiniz.
 
`<img src="../../images/ornek.jpg"/>`
 
 Resmi webden çağırmak için resmin urlini src=”…” parametesine eklemek yeterlidir.
 
### - Alt=""
Alt textlerin temel amacı, görüntüleri göremeyen kullanıcılar için metinler sunmaktır. Kullanıcı resmi görüntüleyemez ise (Yavaş bağlantı, src özelliğinde hata vb.) alt özelliği görüntü için alternatif bilgilendirici bir metin içerir.

`<img src="../images/kedi.jpg" alt="Yavru Kedi"/>	`

### - Title=""
Title özelliği kullanıcıyı bilgilendirme amacı taşır. Cursor ile resmin üzerine gelince bu özelliğe verilen text mesajı görünür. Ek açıklama gerektirecek resimlerde kullanabiliriz. Bilgilendirme amacı taşır.

`<img src="../images/kedi.jpg" title="image"/>	`

**NOT**: _Title ve Alt parametreli SEO açısından önem taşımaktadır.

### - Width ve Height
Resme istenen ölçüleri vermek için width ve height özellikleri kullanılır. **Width yatay genişlik, Height ise dikey uzunluk** için kullanılır.Width ve Height özellikleri tanımlanmadığı zaman resim sayfada gerçek ölçüleri ile görünür. Bu ölçülerden yanlızca birine değer verildiğinde  resim oranları korunarak belirlenen ölçüde görünür. Her iki özelliğe de değer verildiğinde resim oranları yeni verilen ölçülerde olduğu gibi görünür. Bu kullanım resim ölçüleri ile uyumlu olmadığı zaman resimde oransal bozukluklar oluşur.

```html
<img src="resim.jpg" width="300" />
<img src="resim.jpg" height="400" />
<img src="resim.jpg" width="300" height="600" />
<img src="resim.jpg" height="100%" />

```

### - Border 
Resmi belirtilen kalınlıkta çerçeve içine alır. Daha gelişmiş CSS border özelliği bunun yerine kullanılabilir.
Border örneği: Resme 3 pixel kalınlıkta border verir.

`<img src="resim.jpg" border="3" />`

### - Align
Web sayfasında resmin gözükeceği pozisyonu belirlemede align özelliği kullanılır. Bu özelliğe verilebilecek değerler şunlardır: left, right. Resmin sağa veya sola yaslı çıkmasını sağlar.

`<img src="resim.jpg" align="right" />`

### - Onload event
Bu olay resim yüklenmesi tamamlandığında çalışacak fonksiyonu belirler. Herhangi bir nedenle resim yüklenemezse ya da belirtilen adreste resim yoksa fonksiyon çalışmaz.

```javascript
<html>
    <body>
        <img src="resim.jpg" onload="resimYuklendi()" />
    </body>
    <script>
        function resimYuklendi(){
            alert("Resim yüklendi.");
        }
    </script>
</html>
```






 
 
 






