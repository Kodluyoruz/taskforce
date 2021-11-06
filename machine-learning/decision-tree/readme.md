# Karar Ağacı

Link: https://youtu.be/_L39rN6gz7Y

## Karar Ağaçları

Karar Ağaçları, hem sınıflandırma hem de regresyon görevlerini ve hatta çok çıktılı görevleri gerçekleştirebilen çok yönlü Makine Öğrenimi algoritmalarıdır. Ayrıca, karmaşık veri kümelerini sığdırabilen çok güçlü algoritmalardır. <br>

Şimdi Şekil 6-1'de gösterilen ağacın nasıl tahminler yaptığını görelim. Diyelim ki bir iris çiçeği buldunuz ve onu sınıflandırmak istiyorsunuz. Kök düğümden başlarsınız (derinlik 0, üstte): bu düğüm, çiçeğin taç yaprağı uzunluğunun 2,45 cm'den küçük olup olmadığını sorar. Eğer öyleyse, kökün sol alt düğümüne inersiniz (derinlik 1, sol). Bu durumda, bu bir yaprak düğümdür (yani, herhangi bir alt düğümü yoktur), bu nedenle herhangi bir soru sormaz: sadece o düğüm için tahmin edilen sınıfa bakabilirsiniz ve Karar Ağacı, çiçeğinizin İris-Setosa sınıfına ait olduğunu tahmin eder. <br>

Şimdi başka bir çiçek bulduğunuzu varsayalım, ancak bu sefer taç yaprağı uzunluğu 2,45 cm'den fazladır. Kökün sağ alt düğümüne (derinlik 1, sağ) inmelisiniz. Bu düğümde ise Karar Ağacı başka bir soru soruyor: taç yaprağı genişliği 1,75 cm'den küçük mü? Öyleyse, çiçeğiniz büyük olasılıkla İris-Versicolor sınıfına aittir (derinlik 2, sol). Değilse, muhtemelen Iris-Virginica sınıfındandır (derinlik 2, sağda). İşte bu kadar basit. <br>

Şekil 6-2, bu Karar Ağacının karar sınırlarını göstermektedir. Kalın dikey çizgi, kök düğümün (derinlik 0) karar sınırını temsil eder: taç yaprağı uzunluğu = 2,45 cm. Sol alan saf olduğu için (yani sadece İris-Setosa sınıfı bulunduğu için), daha fazla bölünemez ve orası direkt olarak İris-Setosa olarak tahmin edilir. Ancak, sağ alan saf değildir (hem İris-Virginica hem de İris-Versicolor sınıfları bulunduğu için), bu nedenle derinliği 1 olan sağ düğüm, onu taç yaprağı genişliği = 1,75 cm şeklinde (kesik çizgi ile temsil edilmiş) ikiye böler. Maksimum derinlik 2 olarak ayarlandığından, Karar Ağacı tam burada durur. Ancak, maksimum_derinlik değerini 3 olarak ayarlarsanız, derinliği 2 olan iki düğümün her biri başka bir karar sınırı ekler, tekrardan bölünürler (noktalı çizgilerle temsil edilmiş). <br>
