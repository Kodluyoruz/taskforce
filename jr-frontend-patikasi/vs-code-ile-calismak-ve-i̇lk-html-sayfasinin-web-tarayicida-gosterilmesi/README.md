# Visual Studio Code

### Visual Studio Code Nedir?
Visual Studio Code (VS Code) bütün işletim sistemlerinde çalışabilen ve yapacağımız yazılımlar için kodlarımızı yazabileceğimiz bir text editörüdür. 

### Visual Studio Code Yükleme
VS Code programını ücretsiz bir şekilde [bu adresten](https://code.visualstudio.com/Download) indirebilirsiniz. Bilgisayarınız işletim sistemi ve işlemci özelliklerine göre indireceğiniz VS Code programını bilgisayarınıza kurabilirsiniz.

![](https://github.com/Kodluyoruz/taskforce/raw/main/html/vs-code-ile-calismak-ve-i%CC%87lk-html-sayfasinin-web-tarayicida-gosterilmesi/figures/vscode-dowloand.png)


### Visual Studio Code ile Dosyaların Oluşturulması
Öncelikle VS Code'da çalışabilmemiz için bilgisayarımızda çalışacağımız klasörü oluşturmamız gerekmektedir. Örneğin masaüstünde çalışmak istiyorsak ve yazdığımız kodları burada tutmak istiyorsak ilk olarak masaüstünde bir klasör oluşturmamız gerekmektedir. Klasör oluşturma işlemini tamamladıktan sonra bilgisayarımıza yüklediğimiz VS Code programımızı çalıştırıyoruz ve karşımıza şu şekilde bir ekran çıkıyor;

![vscode-start](https://github.com/Kodluyoruz/taskforce/raw/main/html/vs-code-ile-calismak-ve-i%CC%87lk-html-sayfasinin-web-tarayicida-gosterilmesi/figures/vscode-start.jpg)

Bu ekran üzerinde open folder'ı tıkladıktan sonra az önce oluşturduğumuz ve çalışmak istediğimiz klasörümüzü seçiyoruz veya oluşturduğumuz dosyayı sürükle bırak yöntemiyle de açabiliriz. Proje klasörümüz açıldıktan artık bu ekranda proje geliştirme işlemlerimizi yapabiliriz. Burada dikkat etmemiz gereken en önemli konu oluşturduğumuz dosya ismiyle VS Code'a gelen klasör adının ismi aynı olmalıdır. Eğer bir farklılık var ise klasör seçerken bir yanlışlık yapmışız demektir.

Artık proje oluşturacağımız ana klasörümüzü oluşturduk bundan sonra oluşturacağımız klasörleri veya dosyaları ana klasörümüzün yanında bulunan ikonlardan yapabiliriz.

![vscode-file](https://github.com/Kodluyoruz/taskforce/raw/main/html/vs-code-ile-calismak-ve-i%CC%87lk-html-sayfasinin-web-tarayicida-gosterilmesi/figures/vscode-file.png)

Solda bulunan ikondan dosya, sağda bulunan ikondan ise klasör oluşurabiliriz. Burada açacağımız dosya ve klasörlerimiz oluşturduğumuz ana klasörün altına otamatik olarak gelecektir. Bu alanda iç içe klasörler oluşturup içerisindeki klasörler veya dosyaları sürekle bırak yöntemi ile istediğimiz düzeni oluşturabiliriz.

### Visual Studio Code ile html Dosyasının Oluşturulması ve Web Browserda Gösterilmesi
Klasörümüzü oluşturduğumuza göre artık ilk html klasörümüzü oluşturabiliriz. Bunu oluşturmak için ana klasörümüzün yanında bulunan "new file" ikonuna basıyoruz. Açılan dosyada bizim dosyaya bir isim vermemiz beklenmektedir. Yazacağımız bu isim text editörümüzün html etiketlerini tanıyabilmesi için oldukça önem taşımaktadır. Eğer dosyamızın uzantısını .html şeklinde yapmazsak text editörümüz html etiketlerini tanımyacaktır.

**.html** uzantılı yapmadığımız dosya

![vscode-html-1](https://github.com/Kodluyoruz/taskforce/raw/main/html/vs-code-ile-calismak-ve-i%CC%87lk-html-sayfasinin-web-tarayicida-gosterilmesi/figures/vscode-html-1.png)

.html uzantılı yaptığımız dosya

![vscode-html-2](https://github.com/Kodluyoruz/taskforce/raw/main/html/vs-code-ile-calismak-ve-i%CC%87lk-html-sayfasinin-web-tarayicida-gosterilmesi/figures/vscode-html-2.png)

İkisine baktığımızda birinde sağ altta Plain Text yazarken diğerinde html etiketlerimizi anladığını gösteren HTML ibaresi yer almaktadır.

Doğru olarak yazdığımız index.html dosyamızda ilk html etiketimizi oluşturalım. Başlık etiketi için kullanılan h1 etiketi ile alıştırmamızı yapalım.

```html
<h1> Buraya İstediğimiz Başlığı Yazabiliriz </h1>
```

h1 etiketleri arasına istediğimiz bir başlığı yazabiliriz. Aşağıda verilen örnekte h1 etiketlerimiz arasına "Kodluyoruz" yazılmıştır.

![vscode-kodluyoruz](https://github.com/Kodluyoruz/taskforce/raw/main/html/vs-code-ile-calismak-ve-i%CC%87lk-html-sayfasinin-web-tarayicida-gosterilmesi/figures/vscode-kodluyoruz.JPG)

Oluşturduğumuz dosyamızı çalıştırmadan önce kaydetmemiz gerekmektedir. Eğer bir değişiklik yapmış ve dosyamızı kaydetmemişsek yazdığımız dosyanın üzerinde bir nokta ve en solda Explorer'da kaç dosyanın kayıtlı olmadığı gösteren bir ikon göreceğiz.

![vscode-dosya](https://github.com/Kodluyoruz/taskforce/raw/main/html/vs-code-ile-calismak-ve-i%CC%87lk-html-sayfasinin-web-tarayicida-gosterilmesi/figures/vscode-dosya.png)

Oluşturduğumuz index dosyamızı File > Save ile veya CTRL+S ile kaydettikten sonra ilk html etiketimizi web browserda görüntüleyebilmek için ana klasörümüzün altında oluşturduğumuz index dosyamızı açıyoruz.

**veeee ilk HTML sayfamız web tarayacımızda görülmekte**

![vscode-ilk-html](https://github.com/Kodluyoruz/taskforce/raw/main/html/vs-code-ile-calismak-ve-i%CC%87lk-html-sayfasinin-web-tarayicida-gosterilmesi/figures/vscode-ilk-html.JPG)


## Kaynaklar
- Kodluyoruz Frontend End 101 Video Eğitimi - Hakan Yalçınkaya
- https://code.visualstudio.com/
- https://guides.github.com/features/mastering-markdown/