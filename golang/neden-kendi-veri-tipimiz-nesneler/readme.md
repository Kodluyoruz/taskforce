# Neden kendi veri tipimizi kullanmalıyız? / Golang'da Nesne Yönelimli Yaklaşım

Geçen dersimizde struct yapısı ile farklı veri türlerini bir arada kullanmayı öğrendik. Bu dersimizde ise kendi veri tipimizi nasıl oluşturabiliriz bunu öğrenicez.

Öncelikle kendi veri tipimizin yazılım şekli Go'da şöyle: type my_type type_of_value. İlk type sabit yazılır, daha sonrası kendim nasıl bir tür oluşturucam ona bakarım. Mesela kalem türü oluşturabilirim. Type of value ise değerin hangi tür olacağı; string mi, integer mı, float mı? Böylelikle kendi programımız için kullanacağımız veri tipini oluşturmuş olduk.