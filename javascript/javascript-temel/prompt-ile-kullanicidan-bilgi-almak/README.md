# prompt ile Kullanıcıdan Nasıl Bilgi Alınır ?

Javascript kullanıcı ile iletişim kurmamızı sağlayabilen etkileşimli bir dil'dir.Ve biliyoruz ki kullanıcı ile etkileşimi sağlamının bir yolu kullanıcıdan bilgi istemektir.

Javascript ile ilgilenenler, javascript'te prompt komutu ile sağlarlar.

### => Şimdi birlikte kullanıcıdan istenilen kelimeyi sayfaya nasıl yazdıracağımıza bakalım...

Öncelikle bir fonksiyon belirleriz bu fonksiyn içerisinde prompt ile kullanıdan bilgi ister "document.write" ile'de sayfamıza yazdırırz.
Özelikle bunları aynı fonksiyon içerisinde yazıyoruz ki sayfamız açıldığında ilk olarak fonksiyonumuz yüklensin ve belirtilen uygulamalar yorumlanıp sırası ile sayfamızda gösterilsin.

 - <script> tagları arasında veya .js dosyamıza yazacağımız fonksiyonumuza geçelim.

Fonskiyonumuzun ismi istek olsun, function istek()



    function istek()

      {

      var kelime=prompt("Bir değer giriniz","lütfen sadece kelime giriniz..")

      document.write(kelime)

      }
      
   - Prompt Kullanışına geçelim ...
   
var a=prompt(Bir değer giriniz","lütfen sadece kelime giriniz..")

Yukarıdaki gibidir.var 
a=prompt diyerek girilecek değer'e "a" değişkenini atıyoruz ki daha sonra sayfamızda yazdırılmak üzere lazım olucak.

- Prompt'ta ilk olarak yazılan ;
 
 "Bir değer giriniz" --> Kullanıcıya yönetilen bilgi girişinin başlığının soru halidir.

- Prompt'ta ikinci olarak yazılan;
 
 "lütfen sadece kelime giriniz.." -->Text(input) içerisinde gösterilcek uyarıdır. Boş da bırakılabilir.

Eveet, Prompt komutunu da kavradık.Şimdi iki işlemimiz kaldı.

1- Kullanıcı tarafından girilen kelimenin sayfada gösterimi.
2-  Fonksiyonun sayfamız açıldığında çağırılıması.
   
1- "document.write" komutu bulunan sayfa içerisinde istenileni yazdırmak için kullanılır.Biliyoruz ki değişken yazdırmak istenildiğinde (") kullanmıyoruz.

       document.write(a)
 
2-Sayfamız açıldığında fonksiyonun yüklenmesi için body içerisine "onload" komutu ile fonksiyonumuzu çağıralım.

      <body onload="mesaj()">
      </body>
      
      
- Eveet,işte bu kadar.Şimdi sorulara geçelim !

# Sorular 
Soru 1: Prompt ile aşağıdakilerden hangisi yapılır ?
  - Kullanıcı ile etkileşim sağlanmasında kullanılabilir. (Doğru)
  - Bir yazının fontunun değiştirilmesine yardımcı olur.
  - Yalnızca .js uzantılı dosyalar içerisinde kullanılır.Html'e entegre          edilemez.
  - Linklerin işlevselliği için kullanılır.
  
Soru 2 :Aşağıdakilerden hangisi Prompt syntax söz dizimine uygundur ?
  - a=prompt(Bir değer giriniz,"") 
  -  var kelime=prompt(,"")
  -  kelime=prompt("Bir değer giriniz",değer giriniz)
  - var a=prompt(Bir değer giriniz,) .(Doğru)
  
  Teşekkürler...

       
 # KAYNAKÇA
 - http://www.erelcolak.com/javascript-temelleri-prompt-ile-kullanicidan-bilgi-almak/
 - https://sanalkurs.net/kullanicidan-bilgi-girisi-istemesi-prompt-2953.html
