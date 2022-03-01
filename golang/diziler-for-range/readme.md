# Golang diziler / for-range yapısı
 
Bu dersimizde kadar temel veri tiplerini gördük. Bunlar nelerdi? İnt, float, complex ve daha niceleri.
Bu dersimizde composite types (Karmaşık veri tipleri) işleyeceğiz.

Array hangi durumlarda kullanılır? aynı veri tipine sahip değişkenlerin performans almak için bir arada tutulmaya ihtiyacı vardır. Örneğin marketten bir domatesi alırken poşetin içinde alırız. Çünkü hepsi domatestir. Bir masaüstü bilgisayar alırken klavye, mouse olmadan bir şey yapmak mümkün değildir.

Bu gibi durumların programlamada karşılığı ise Array yapısıdır. Aslında bir liste gibi çalışır. Array içerisinde aradığımızı bulmak çok kolaydır.

Array sözdizimi:
    Array ismi := [length of array]  {values}

Array'ler aynı veri tipinde olmalıdır. Bu nedenle türünü belirtek gerekir.
