# İskeletinin Genel Yapısını Anlamak

**Html sayfalarının en temel bileşenleri nelerdir ? Bir html iskeleti nasıl oluşturulur ?**

Web tasarım konusunda araştırma yapan hemen herkesin karşına çıkan temel kavram **HTML**'dir. Web sayfalarını oluşturma aşamasında kullanılan standart bir metin işaret dili olan **HTML açılımı** **“Hyper Text Markup Language”** olarak bilinir. Genel bilinen yanlış kanının aksine **HTML** bir programlama dili değildir. 

Daha açık anlatmak gerekirse, Chrome, Firefox, Yandex gibi tarayıcıların okuyup anlamlandırdığı dil **HTML** dilidir.

Bir html sayfası oluşturmadan önce mutlaka **HTML 5 standartlarına uygun bir html iskeleti** oluşturmalıyız. Web sayfalarımızı **HTML 5** standardına uygun hazırlamamız büyük önem taşımaktadır çünkü arama motorları tarafından önemsenmektedir.

### HTML iskelet örneği

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Page Title</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="stylesheet" href="">
<style>
</style>
<script src=""></script>
</head>
<body>

<img src="img_la.jpg" alt="LA" style="width:100%">

<div class="">
 <h1>Bu bir h1 boyutunda başlık.</h1>
 <p>Bu bir paragraf.</p>
 <p>Bu başka bir paragraf.</p>
</div>

</body>
</html>
```

### HTML'nizi Yapılandırma
**HTML** yapısında sayfanın genel yapısını tanımlamak ve bazı basit başlık bilgilerini sağlamak için 3 farklı etiket bulunur. Bu üç etiket `<html>` , `<head>` ve `<body>` her web sayfasının temel iskeletini oluşturur. 

Ayrıca, her şeyi yüklemeden önce sayfa hakkında basit bilgiler *(başlığı veya yazarı gibi)* sağlarlar. Sayfa yapısı etiketleri, sayfanın görüntülendiğinde nasıl görüneceğini etkilemez; sadece tarayıcılara yardımcı olmak için bulunurlar.

### `DOCTYPE` tanıtıcı
Bir sayfa yapısı etiketi olmasa da, XHTML 1.0 ve HTML 5 standartları web sayfalarınıza ek bir gereklilik getirir. Her sayfanın ilk satırı, sayfanızın uygun olduğu HTML sürümünü tanımlayan bir DOCTYPE tanımlayıcısı ve bazı durumlarda, spesifikasyonu tanımlayan Belge Türü Tanımını (DTD) içermelidir . Bunu `<html>` , `<head>` ve `<body>` etiketleri takip eder. HTML 5 belge türü, sayfa yapısı etiketlerinden önce görünür.

### `<html>` etiketi
Her HTML sayfasındaki ilk sayfa yapısı etiketi `<html>` etiketidir. Bu dosyanın içeriğinin HTML dilinde olduğunu gösterir. `<html>` etiketi `DOCTYPE` tanımlamasından hemen sonra kullanılmalıdır. Web sayfanızdaki tüm metin ve HTML öğeleri HTML etiketlerinin başlangıcına ve bitişine yerleştirilmelidir.

`<html>` etiketi sayfasını oluşturan etiketlerin tümünün bir kabı olarak hizmet vermektedir. Bunu dışarıda bırakırsanız, ki bunu yapmamalısınız çünkü bu, sayfanızı geçersiz kılar, tarayıcı sizin için bir `<html>` etiketi oluşturur, böylece sayfa HTML işlemcisi için anlamlı olur.

### `<head>` etiketi
`<head>` etiketi sayfayla ilgili bilgiler içeren etiketler için bir kapsayıcıdır. Genellikle sayfanın `<head>` bölümünde yalnızca birkaç etiket kullanılır. Sayfanızın hiçbir metnini başlığa ( `<head>` etiketleri arasına ) koymamalısınız. Yine `<head>` etiketinin arasında bulunan `lang` anahtar kelimesinin amacı sayfa içeriğinin hangi dilde oluştuğudur. Bunu belirtmemizin sebebi arama motorlarında bize bu sayfayı tarayıcımızın diliyle zıt düştüğü durumda çevirme tavsiyesi verip vermemesini sağlamaktır.

### `<head>` etiketi arasında bulunan diğer anahtar kelimelerin görevleri
- `<meta>` : Sayfamızı tanımlayan açıklamaların bulunduğu kısımdır. Sayfa açıklaması, sayfa başlığı, kullanılan karakter seti tanımlaması gibi işlemler burada tanımlanıyor.
- `<title>`: Tarayıcı penceresinin sekmesindeki başlığı buradan belirtiyoruz.
- `<style>`: Sayfada kullanılan stil işlemlerinin tanımlaması yapılır. Örneğin arka plan rengi yazı rengi ya da nesnelerin hizalanması gibi işlemler.

### `<body>` etiketi
HTML sayfanızın içeriği `<body>` etiketi içinde bulunur . Bu, tüm metni ve diğer içeriği *(bağlantılar, resimler vb.)* içerir. 

Aşağıdaki örnekte etiketlerin iç içe olduğunu göreceksiniz. Yani hem  `<body>` ve `</body>` hem de `<head>` ve `</head>` etiketlerini  `<html>` etiketlerinin kapsadığını göreceksiniz. Tüm HTML etiketleri bu şekilde çalışır ve metnin tek tek iç içe bölümlerini oluşturur.

**Örnek:**
```html
<! DOCTYPE html> 
<html> 
<head> 
<title> Bu bir başlıktır.</title> 
</head> 
<body> 
... sayfanız ... 
</body> 
</html>
```

Etiketleri asla çakıştırmamaya dikkat etmelisiniz. Yani, asla aşağıdaki gibi bir şey yapmayın:

```html
<! DOCTYPE html> 
<html> 
<head> 
<body> 
</head> 
</body> 
</html>
```

Bir HTML etiketini her kapatışınızda, en son kapatılmamış etiketi kapattığınızdan emin olun.

## Kaynaklar
- Learning the Basics of HTML [informit.com](https://www.informit.com/articles/article.aspx?p=2472081)
- Using an HTML Skeleton [w3schools.com](https://www.w3schools.com/w3css/w3css_web_html.asp)
