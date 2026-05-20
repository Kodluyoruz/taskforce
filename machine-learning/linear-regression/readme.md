# Linear Regression

Link: https://youtu.be/PaFPbb66DxQ

## Linear Regression

Örneğin, paranın insanı mutlu edip etmediğini merak ettiniz ve elinizde ülkelerin maddi açıdan zenginliğini gösteren "Gayri safi yurt içi hasıla" (GSYİH) değerlerini ve hayattan memnun olma seviyelerini içeren bir veri var. Aşağıdaki şekilde bazı ülkelerin değerleri gösterilmiş:<br>

![Şekil 1-17](https://raw.githubusercontent.com/yigitatesh/taskforce/main/machine-learning/linear-regression/figures/figure_1_17.png)

Burada bir yapı görebiliyor musunuz? Evet, burada bir eğilim var. Verinin biraz gürültülü (biraz rastgele) olmasına rağmen hayattan memnuniyet değerlerinin GSYİH değerleri ile birlikte arttığını görebiliriz. Yani GSYİH arttıkça yaşam kalitesi de artmakta. Ve siz de lineer bir fonksiyon ile yaşam kalitesini modellemek istediniz. <br>
Ortaya şöyle bir eşitlik çıktı: <br>
<pre>
    yaşam kalitesi = θ0 + θ1 x GSYİH
</pre>

Bu modelin iki parametresi var, θ0 ve θ1. Bu parametreleri ayarlayarak modelinizin istediğiniz lineer fonksiyonu temsil etmesini sağlayabilirsiniz. Aşağıdaki şekilde bazı olası fonksiyonlar gösterilmiş. Sizce hangisi bu veriyi daha iyi ifade edebilir? 

![Şekil 1-18](https://raw.githubusercontent.com/yigitatesh/taskforce/main/machine-learning/linear-regression/figures/figure_1_18.png)
