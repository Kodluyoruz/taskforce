# Linklerle Çalışmak

Bir HTML dosyası içerisinde herhangi bir sayfaya, sayfa içine, bir websitesine, e-mail, telefon adreslerine ya da dosya yolu belirtilen herhangi bir dosyaya (resim, video, zip vb.) erişmek için kullanılan HTML etiketidir. Genel yapısı `<a></a>` şeklindedir.

```html
<a href="gitmek istenilen yer">Gidilecek yer için isim tanımlaması</a>
```

![a-tagi](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/html/linklerle-calismak/figures/a-tagi.png)

## HTML sayfaları içinde kullanımı:

### Sayfalar arası kullanımı: 
HTML sayfalar arası geçiş yapmak için linklerden şu şekilde faydalanırız. Şu an üzerinde çalıştığımız klasörün içerisinde bir **linksayfasi.html** adında dosya oluşturduk ve içerisine bir şeyler yazdık. Şimdi HTML'de sayfalar arası linkleme ile yeni oluşturduğumuz sayfaya gitmek için link oluşturacağız: 

```html
<a href="linksayfasi.html">İkinci sayfaya git</a>
```

Bunu oluşturduğumuzda tarayıcı ekranımızda  **İkinci sayfaya git** diye bir link oluşacak (üzerine gelindiğinde mousenin el işaretine dönmesinden anlaşılabilir)

**Örneği görelim:**
![sayfalar-arasi-link](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/html/linklerle-calismak/figures/sayfalar-arasi-link.gif)

### Sayfa içerisinde kullanımı: 
Sayfa içerisinde herhangi bir başlığa ya da bölüme gitmek için linkler kullanılabilir. Aynı sayfada işlem yapacağımız için birden fazla satır ekleyeceğim ve en aşağıya scroll ile kaydırmak yerine link yardımı ile gideceğim. Bunun için de gidilecek bölüm için `a` tagine `name` özelliği verilmelidir:

```html
<a href="#sonbolum">Aşağı Git</a>

<a name="sonbolum"></a>
```

![sayfaici-link](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/html/linklerle-calismak/figures/sayfaici-link.gif)


### Website yönlendirmesinde kullanımı: 
`a` etiketinde `href` özelliğine verilen herhangi bir websitesi adresine kolayca gidilebilir. Burada `target` özelliğini göreceğiz. Bu özellik, gitmek istediğimiz bağlantının geçerli pencerede mi yoksa yeni bir pencerede mi açılması için kullanılır. `_self` özelliği geçerli pencerede açılması içindir. Varsayılan olarak böyledir. `_blank` özelliği ise yeni bir pencerede açılması içindir. **Kodluyoruz**'un internet sitesine gidelim:

![website-link](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/html/linklerle-calismak/figures/website-link.gif)

### Mail ve telefon yönlendirmesinde kullanımı: 
`a` etiketinin `href` özelliğine verilen `mailto:` ve `tel:` özellikleri sayesinde direkt olarak herhangi bir e-mail adresine posta gönderilebilir ya da geçerli bir telefon numarası aranabilir. **Kodluyoruz**'un e-mailine gidelim ve rastgele bir numaraya gidelim.

```html
<a href="mailto:info@kodluyoruz.org">Kodluyoruz'a mail atınız.</a>
```

**Yukarıda öğrendiklerinizi aşağıda deneyebilirsin!**