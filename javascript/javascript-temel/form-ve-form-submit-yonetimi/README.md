# Form ve Form submit yönetimi

Formlar kullanıcıdan bilgi almak için kullanılırlar. Formların en basit örneği olan input ile başlayalım. Tek satırlık numeri, harf veya ikisinin kombini olarakta girilebilir.


## Form özellikleri

ACTION :
action = Formunuzu submit ettikten sonra nasıl bir aksiyon alacağını belirlersiniz. Genellikle formlarda gönderi işlemi tamamlandıktan sonra form datası server'a gönderilir. Fakat server haricinde kendimiz bu form datasını başka bir dosyaya atayabiliriz. Örneğimizde görüleceği gibi dosyamız "script.js" adlı bir dosyaya gönderiliyor. Form datasının yönetimi bundan sonra bu dosya üzerinden yürütülür.


Örnek kullanım ``` <form action="/script.js"></form> ```






METHOD :
method = Form datanızın hangi methdola gönderileceğine karar verir. "Get" veya "Post" request olarak. Bu özellik verilmemesi durumunda default olarak "Get" methodu formunuza atanır. 


Örnek kullanım  ``` <form action="/script.js" method="get">" veya "<form action="/script.js" method="post"> ```






- AUTOCOMPLETE :
autocomplete = Ingilizce ismindende anlaşılacağı üzere formunuzda otomatik tamamlama özelliğini açıp veya kapatmak için işinize yarar. Bu özelliği açmak daha önceki entrylerinize göre formun tamamlama yapmasını sağlayacaktır.


Örnek kullanım ``` <form action="/script.js" autocomplete="on"> veya <form action="/script.js" autocomplete="off"> ```






NOVALIDATE :
novalidate = Aktif olduğu sürece gönderdiğiniz form datanızın otomatik olarak doğrulanmamasını söyler.


Örnek kullanım ``` "<form action="/my_script.js" novalidate>" ```






#### Form taglerinizde birden fazla element bulundurabilirsiniz. Bunlardan olmazsa olmazı inputlar & butonlardır. Input elemanlarının başlıca özellikleri olarak ;

#### fname = Görünecek olan yazıyı belirler. Bu yazı, adete bir html etiketi gibi görünür.

#### type = Bu kısımda formunuzun text/numerik bir form olacağına karar verirsiniz.

#### name = Inputunuzun name özelliğini belirlersiniz. Genelde isimlendirme küçük harf verilir backend kısmına uygun olması için

#### value = Inputtaki aktif görünecek olan yazı için verilir. Örnek olarak butonların üzerindeki yazı gibi düşünebiliriz.

Sizin için hazırladığım basit bir örnekte form ve input özelliklerini deneyebilirsiniz.

Son olarak öğrendiklerinizden emin olmak için https://jsfiddle.net/ adresinden : Kullanıcı için isim, soyisim, telefon numarası ve adres isteyen bir form oluşturmanızı istiyorum.

Link için : - https://codepen.io/llker-kurtulan/pen/ExgQYjX

Kaynaklar : - https://www.w3schools.com/html/html_forms.asp
            - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
            - https://www.tutorialspoint.com/html/html_forms.htm

            
