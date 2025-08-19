
# Prompt ile Kullanıcıdan Nasıl Bilgi Alınır?

Javascript kullanıcı ile iletişim kurmamızı sağlayabilen etkileşimli bir dildir ve biliyoruz ki kullanıcı ile etkileşimi sağlamının bir yolu kullanıcıdan bilgi istemektir.

Javascript ile ilgilenenler, Javascript'te prompt komutu ile sağlarlar.

Şimdi birlikte kullanıcıdan istenilen kelimeyi sayfaya nasıl yazdıracağımıza bakalım...

Öncelikle bir fonksiyon belirleriz bu fonksiyon içerisinde prompt ile kullanıcıdan bilgi ister `document.write` ile de sayfamıza yazdırırız.
Özelikle bunları aynı fonksiyon içerisinde yazıyoruz ki sayfamız açıldığında ilk olarak fonksiyonumuz yüklensin ve belirtilen uygulamalar yorumlanıp sırası ile sayfamızda gösterilsin.

 - `<script>` tagları arasında veya `.js` dosyamıza yazacağımız fonksiyonumuza geçelim.

Fonksiyonumuzun ismi `istek` olsun, `function istek()`;

```javascript
function istek()
{
  var kelime=prompt("Bir değer giriniz","lütfen sadece kelime giriniz..")
  document.write(kelime)
}
```
## Prompt Kullanışına geçelim

`var a=prompt(Bir değer giriniz","lütfen sadece kelime giriniz..")`

Yukarıdaki gibidir. var `a=prompt` diyerek girilecek değere `a` değişkenini atıyoruz ki daha sonra sayfamızda yazdırılmak üzere lazım olacak.

**Prompt'ta ilk olarak yazılan;**

- `"Bir değer giriniz"` = Kullanıcıya yönetilen bilgi girişinin başlığının soru halidir.

**Prompt'ta ikinci olarak yazılan;**

- `"lütfen sadece kelime giriniz.."` = `Text(input)` içerisinde gösterilecek uyarıdır. *Boş da bırakılabilir.*

**Evet, Prompt komutunu da kavradık. Şimdi iki işlemimiz kaldı.**
1. Kullanıcı tarafından girilen kelimenin sayfada gösterimi.
2.  Fonksiyonun sayfamız açıldığında çağırılması.

1. `document.write` komutu bulunan sayfa içerisinde istenileni yazdırmak için kullanılır. Biliyoruz ki değişken yazdırmak istenildiğinde `"` kullanmıyoruz.

```javascript
document.write(a)
```

2. Sayfamız açıldığında fonksiyonun yüklenmesi için body içerisine `onload` komutu ile fonksiyonumuzu çağıralım.

```html
<body onload="mesaj()">
</body>
```

Evet, işte bu kadar. Şimdi alıştırmalara geçelim!

### Prompt ile Kullanıcıdan Bilgi Almak

`Prompt()` kullanıcıya soru sorup klavyeden girilen bilgiyle işlem yapan, o bilgiyi döndüren bir `window` metodudur. `alert()` gibi Html üzerinde, HTML sayfasından bağımsız çalışır ve karşımıza **diyalog penceresi** şeklinde çıkar.

### `Prompt()` Kullanımı:

```JavaScript
//prompt("Sorulacak olan soru", "kutunun içerisi")
prompt("Boyunuzu giriniz", "Örnek: 166 cm");

//Örnek kısmı diyalog kutusunun içerisinde gözükecektir
```

Bu metotla birlikte ekranda "**Boyunuzu giriniz"** yazısı ve altında da diyalog kutusu belirecektir. *Bu diyalog kutusunda da "**örnek: 166**" yazacaktır fakat zorunlu bir kullanım değildir ve genel olarak kullanıcıya rehberlik etmek için kullanılır.*

Burada `prompt()` yapısını bir değişken içine atmadığımız için istenilen girdiyi girip **Tamam** tuşuna bassak bile bize bir işlem dönmeyecektir ya da hafızasında girilen bilgiyi tutmayacaktır. Eğer `prompt()` metodumuzu bir değişken içine atarsak, vereceğimiz cevap o değişkenin bir değeri haline gelir.

```javascript
var isim = prompt("Adınız nedir?");
console.log("Merhaba, " + isim);

//Çıktı:
//Merhaba, yazdığınızAd
```

Artık `prompt()` komutumuz bir değişken içinde olduğu için `console.log()` içerisine değişken adımızı yazarak konsol ekranında görebildik. Böylelikle normal bir değişkenle yapabildiğimiz her şeyi artık bu tanımlı değişkenle de yapabiliriz.

### Prompt Mantığı
Kullanıcı **Tamam** düğmesini tıkladığında, giriş alanına girilen metin döndürülür. Kullanıcı herhangi bir metin girmeden Tamam'ı tıklarsa, boş bir dize döndürülür. Kullanıcı **İptal** düğmesini tıklarsa, bu işlev boş döndürür.

**Aşağıda codepen ile deneyin!**

## Kaynaklar
- http://www.erelcolak.com/javascript-temelleri-prompt-ile-kullanicidan-bilgi-almak/
- https://sanalkurs.net/kullanicidan-bilgi-girisi-istemesi-prompt-2953.html
