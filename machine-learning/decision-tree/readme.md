# Karar Ağacı

Link: https://youtu.be/_L39rN6gz7Y

## Karar Ağacı Nedir?

Otomobil ve motosiklet araçlarını sınıflandırdığmızı düşünelim. İkisini kolaylıkla birbirinden ayırabiliriz değil mi? Aracın tekerlek sayısına bakarız ve 4 tekerlekli ise otomobil, 2 tekerlekli ise motosiklet diye sınıflandırırız. Hadi problemi biraz daha zorlaştıralım. Otomobil, motosiklet ve bisiklet araçlarını sınıflandırmaya çalışalım. Tek seferde sınıflandıramayız sanırım. Peki nasıl bir yol izleyelim? Şöyle yapalım: Bazı soruları art arda soralım ve aldığımız cevaplara göre sınıfı bilinmeyen aracı sınıflandıralım. İlk önce aracın tekerlek sayısına bakalım, 4 tekerlekli ise direkt olarak otomobil diyebiliriz. Ancak 2 tekerlekli ise ya motosiklet ya da bisiklet diyebiliriz. Araç 2 tekerlekli ise başka bir ayırıcı soru sorarak bisiklet ve motosiklet mi olduğunu bulabiliriz. Örneğin, pedalları var mı? Pedalları varsa bisiklet, yoksa motosiklet diye sınıflandırırız. İşte, bir **Karar Ağacı** oluşturmuş olduk! Karar Ağacı da böyle sınıfları birbirinden ayırıcı sorular sorarak yeni verinin hangi sınıfa ait olduğunu tahmin eder. Karar Ağacının ne olduğunu anladık, şimdi de özelliklerine göz atalım!<br>

## Karar Ağacının Özellikleri

Karar Ağaçları, hem sınıflandırma hem de regresyon görevlerini ve hatta çok çıktılı görevleri gerçekleştirebilen çok yönlü Makine Öğrenimi algoritmalarıdır. Ayrıca, karmaşık veri kümelerini öğrenebilen çok güçlü algoritmalardır. <br>

Karar Ağaçları, öğrenme kapasiteleri çok olduğu için, eğer ağacı basitleştirmezsek, genelde veriyi aşırı öğrenir. Yani eğitim verisinde çok iyi performans sergilerken yeni veriler için doğru tahminde bulunmakta zorlanır. Bu yüzden, Karar Ağaçlarının derinliği az tutulmaya çalışılır ve aşırı öğrenmeye sebep olan dalları kesilir. Sonuç olarak, Karar Ağaçları çok güçlü algoritmalardır ve aşırı öğrenmemeleri için derinlik gibi parametrelerin dikkatlice seçilmesi gerekir. <br>

## Karar Ağacı Nasıl Çalışır?

![Şekil 6-1](https://raw.githubusercontent.com/yigitatesh/taskforce/main/machine-learning/decision-tree/figures/figure_6_1.png)

Şimdi yukarıdaki şekilde gösterilen ağacın nasıl tahminler yaptığını görelim. Diyelim ki bir iris çiçeği buldunuz ve onu sınıflandırmak istiyorsunuz. Kök düğümden başlarsınız (derinlik 0, üstte): bu düğüm, çiçeğin taç yaprağı uzunluğunun 2,45 cm'den küçük olup olmadığını sorar. Eğer öyleyse, kökün sol alt düğümüne inersiniz (derinlik 1, sol). Bu durumda, bu bir yaprak düğümdür (yani, herhangi bir alt düğümü yoktur), bu nedenle herhangi bir soru sormaz: sadece o düğüm için tahmin edilen sınıfa bakabilirsiniz ve Karar Ağacı, çiçeğinizin İris-Setosa sınıfına ait olduğunu tahmin eder. <br>

Şimdi başka bir çiçek bulduğunuzu varsayalım, ancak bu sefer taç yaprağı uzunluğu 2,45 cm'den fazladır. Kökün sağ alt düğümüne (derinlik 1, sağ) inmelisiniz. Bu düğümde ise Karar Ağacı başka bir soru soruyor: taç yaprağı genişliği 1,75 cm'den küçük mü? Öyleyse, çiçeğiniz büyük olasılıkla İris-Versicolor sınıfına aittir (derinlik 2, sol). Değilse, muhtemelen Iris-Virginica sınıfındandır (derinlik 2, sağda). İşte bu kadar basit. <br>

![Şekil 6-2](https://raw.githubusercontent.com/yigitatesh/taskforce/main/machine-learning/decision-tree/figures/figure_6_2.png)

Yukarıdaki şekil, bu Karar Ağacının karar sınırlarını göstermektedir. Kalın dikey çizgi, kök düğümün (derinlik 0) karar sınırını temsil eder: taç yaprağı uzunluğu = 2,45 cm. Sol alan saf olduğu için (yani sadece İris-Setosa sınıfı bulunduğu için), daha fazla bölünemez ve orası direkt olarak İris-Setosa olarak tahmin edilir. Ancak, sağ alan saf değildir (hem İris-Virginica hem de İris-Versicolor sınıfları bulunduğu için), bu nedenle derinliği 1 olan sağ düğüm, onu taç yaprağı genişliği = 1,75 cm şeklinde (kesik çizgi ile temsil edilmiş) ikiye böler. Maksimum derinlik 2 olarak ayarlandığından, Karar Ağacı tam burada durur. Ancak, maksimum_derinlik değerini 3 olarak ayarlarsanız, derinliği 2 olan iki düğümün her biri başka bir karar sınırı ekler, tekrardan bölünürler (noktalı çizgilerle temsil edilmiş). <br>
