# Logistic Regression

Link: https://youtu.be/yIYKR4sgzI8

## Lojistik Regresyon

Lojistik Regresyon (Logit Regresyon olarak da bilinir), bir örneğin belirli bir sınıfa ait olma olasılığını tahmin etmek için yaygın olarak kullanılır (örneğin, bir e-postanın spam olma olasılığı nedir?). Tahmin edilen olasılık %50'den büyükse model o örneğin sınıfa ait olduğunu (pozitif sınıf olarak adlandırılır, "1" olarak gösterilir) tahmin eder, eğer %50'den küçükse o sınıfa ait olmadığını (negatif sınıf olarak adlandırılır, "0" olarak gösterilir) tahmin eder. <br>

Lojistik Regresyon, olasılıkları tahmin etmek için **sigmoid** fonksiyonunu kullanır. Sigmoid fonksiyonu 0 ile 1 arasında çıktı veren, grafikte gösterildiğinde "S" şeklinde çıkan bir fonksiyondur. Bu fonksiyon, tüm sayıları 0 ile 1 arasına sıkıştırarak bir olasılık çıktısı verebilir. <br>

Sigmoid fonksiyonunun formülü:

<img src="https://render.githubusercontent.com/render/math?math=\sigma(t) = \frac{\mathrm{1} }{\mathrm{1} %2B e^{(-t)}}" width="150"/>

Sigmoid fonksiyonunun grafiği aşağıdaki gibidir: <br>

![Şekil 4-21](https://raw.githubusercontent.com/yigitatesh/taskforce/main/machine-learning/logistic-regression/figures/figure_4_21.png)

Sigmoid fonksiyonunun çıktısı 1 ise o örnek %100 "1" sınıfına ait ve %0 "0" sınıfına ait olarak tahmin edilir. Fonksiyonun çıktısı 0.3 ise o örnek %30 "1" sınıfına ait ve %70 "0" sınıfına ait olarak tahmin edilir.
