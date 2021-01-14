---
typora-copy-images-to: figures
---

# TERMİNAL 



## Terminal Nedir?

​	Terminal nasıl kullanılır anlamak için önce terminalin ne olduğunu anlamak gerekir. Bunun için de ilk olarak komut satırından bahsetmek istiyoruz. Komut satırı, bilgisayarınız için bir yazı arabirimidir. Terminal ise yazdığınız komutları bilgisayar işletim sistemine göndermek için geliştirilmiş bir programdır. 

​	Yazılım alanında kendinizi daha da geliştirmek istediğinizde yollarınız terminalle kesişebilir ve bazı komut satıları girmeniz gerekebilir. Peki terminali nasıl kullanacaksınız? Gelin şimdi bundan bahsedelim.



## Terminal Nasıl Kullanılır?

​	Bu kısımda terminale yazdığınız komut satırlarıyla, tıpkı **Finder** uygulaması ile **Mac OS**‘da veya **Windows Explorer** ile **Windows**‘da yaptığınız gibi, bilgisayarınızdaki dosya veya klasörlere nasıl ulaşabileceğinize ve nasıl yeni klasörler oluşturabileceğinizi anlatacağız. 



### Adım 1: Terminali Açmak

​	İlerlemeden önce, sizlerden kullandığınız işletim sisteminin terminali açmanızı ve sonrasında adımlarda yer verdiğimiz komut satırlarını denemenizi rica ediyoruz. Bu şekilde açıklamasını okuduğunuz komut satırlarını daha kolay öğrenebilir ve hatırlayabilirsiniz.

​	Ek olarak terminalde kullanacağınız komut satırları Linux ve Mac OS işletim sistemlerinde benzerlik gösterirken; Windows işletim sisteminde küçük farklılıklar gösterebilir. Gelin şimdi "Adım 1"e dönelim ve terminali nasıl açacağımızdan bahsedelim.



**Terminal** uygulamasını başlatmak için:

* **Mac OS** bilgisayarlarda ilk önce **⌘** **+** **Space** tuşlarına birlikte basın ardından **Spotlight Search** açıldıktan sonra **terminal** yazıp **Enter** tuşuna basabilirsiniz.

//Buraya adım adım görseller ekleyebiliriz

![terminal1](figures/terminal1.png)



* ​	**Linux** tabanlı sistemlerde **Ctrl** + **Alt** + **T** tuşlarına birlikte basabilirsiniz.

  //Buraya adım adım görseller ekleyebiliriz

  ![terminal2](figures/terminal2.jpg)



* **Windows** tabanlı sistemlerde ilk önce **Win** + **R** tuşlarına birlikte basın ardından, açılan **Çalıştır** penceresine *cmd* yazıp **Enter** tuşuna basabilirsiniz.

  //Tuş kombinasyonları ve açılan pencerenin fotoğraflarını ekleyebiliriz.



### Adım 2:  İçerikleri Sıralamak

​	Bulunduğunuz klasördeki içerikleri sıralamak için:

* **Mac Os** ve **Linux** tabanlı sistemlerde terminale ***ls*** komut satırını yazabilirsiniz.
* **Windows** tabanlı işletim sistemlerde terminale ***dir*** komut satırını yazabilirsiniz.



## Bilgi Köşesi!

***ls*** : Bu komut satırı **Mac Os** *ve* **Linux** tabanlı sistemlerde terminale yazıldığında klasördeki içerikler listelenir.

***dir*** : Bu komut satırı **Windows** tabanlı sistemlerde terminale yazıldığında klasördeki içerikler listelenir.

//Resimler ve CS50 den alıntılar yerleştirebilir



### Adım 3: Klasörler Arası Geçiş Yapmak

#### a) Klasöre Girme

​	Bulunduğunuz klasördeki içerikleri listeledikten sonra, karşınıza çıkan herhangi bir klasöre girmek için:

* *Windows*, *Mac Os* ve *Linux* tabanlı sistemlerde terminale ***cd*** komut satırını yazabilirsiniz.
* Bu komut satırı *cd* yanında bir parametre daha alır. Bu parametre girmek istediğiniz klasörün adıdır.
  * Örnek: **cd Desktop**

##### b) Klasörden Çıkmak

​	Bulunduğunuz klasörden bir üst klasöre çıkmak için:

* *Windows*, *Mac Os* ve *Linux* tabanlı sistemlerde terminale ***cd ..*** komut satırını yazabilirsiniz.



## Bilgi Köşesi!

***cd <klasorismi>*** : Bu komut satırı *Windows*, *Mac Os* ve *Linux* tabanlı sistemlerde terminale yazıldığında ismi yazılan dizine girilir. 

***cd ..*** : Bu komut satırı *Windows*, *Mac Os* ve *Linux* tabanlı sistemlerde terminale yazıldığında bir üst dizine geri dönülür.

//Resimler ve CS50 den alıntılar yerleştirebilir



### Adım 4: Yeni Klasör Oluşturmak

​	Bulunduğunuz klasörün içinde yeni bir klasör oluşturmak için:

* *Windows*, *Mac Os* ve *Linux* tabanlı sistemlerde terminale ***mkdir*** komut satırını yazabilirsiniz.

* Bu komut satırı *mkdir* yanında bir parametre daha alır. Bu parametre oluşturmak istediğiniz klasörün adıdır.

* Örnek: **mkdir Kodluyoruz**



## Bilgi Köşesi!

***mkdir <klasorismi>*** : Bu komut satırı *Windows*, *Mac Os* ve *Linux* tabanlı sistemlerde terminale yazıldığında belirtilen klasör isminde yeni bir klasör oluşturur. 



### Adım 5: Bulunduğunuz Klasörü Görmek

​	Bulunduğunuz klasörü terminal ekranına yazdırmak için:

* *Windows*, *Mac Os* ve *Linux* tabanlı sistemlerde terminale ***pwd*** komut satırını yazabilirsiniz.



## Bilgi Köşesi!

***pwd*** : Bu komut satırı *Windows*, *Mac Os* ve *Linux* tabanlı sistemlerde terminale yazıldığında halihazırda bulunulan klasörü ekrana yazdırır. 