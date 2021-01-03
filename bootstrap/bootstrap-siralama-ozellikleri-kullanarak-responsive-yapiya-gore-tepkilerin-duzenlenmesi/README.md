# Bootstrap Sıralama Özellikleri Kullanarak Responsive Yapıya Göre Tepkilerin Düzenlenmesi

Bootstrap'de sıralama özelliği(order),içeriklerin HTML'de yazılan sırayla değil(kodlar yukarıdan aşağı okunarak sıralanır) bizim belirlediğimiz sıraya göre sıralamamızı sağlayan bir kavramdır.Genellikle responsive yapılar oluştururken kullanılır.Örneğin xl genişliğinde çalışıyorsunuz ve web siteniz 3 parçadan oluşuyor,fakat siz sm genişliğinde ki ekranlarda 1. içeriğinizin ilk gözükmesini değil son gözükmesini istiyorsunuz.3.içeriğinizin ise ilk görülmesini istiyorsunuz.Yani aslında; 

1.İçeriğiniz | 2.İçeriğiniz |3.İçeriğiniz
-- | -- | -- 

Bura web sitenizin xl görüntüsü olsun istiyorsunuz fakat sm genişliğinde ise aşağıdaki görüntü oluşsun istiyorsunuz

3.İçeriğiniz | 2.İçeriğiniz |1.İçeriğiniz
-- | -- | -- 

Tam olarak Order kavramı bu işlemi yapmanıza yardımcı oluyor peki nasıl ?
Yukarıda ki web sitesi görüntümüzü gelin koda dökelim 
```html
<div class="d-flex">
  <div class="p-2 ">1. İçeriğimiz</div>
  <div class="p-2 ">2. İçeriğimiz</div>
  <div class="p-2">3. İçeriğimiz</div>
</div>
```
Bu bizim sitemizin genel içeriğini oluşturan kodlarımız.Fakat biz sm ekranlarda dizilimi değiştirmek istiyoruz o zaman yapmamız gereken tek şey ; 
```html
<div class="d-flex">
  <div class="order-sm-3 p-2">1. İçeriğimiz</div>
  <div class="order-sm-2 p-2">2. İçeriğimiz</div>
  <div class="order-sm-1 p-2">3. İçeriğimiz</div>
</div>
```
Artık sitemiz sm genişliklerde aşağıda ki gibi gözükecektir

3.İçeriğiniz | 2.İçeriğiniz |1.İçeriğiniz
-- | -- | -- 

İstediğimizi gerçekleştirmiş olduk Order kavramı bootstrap'te bütün kırılma noktaları(xs-sm-md-lg-xl-xxl) için tanımlanmış class'lara sahiptir.Bunlar ; 
- order-0
- order-1
- order-2
- order-3
- order-4
- order-5
- order-sm-0
- order-sm-1
- order-sm-2
- order-sm-3
- order-sm-4
- order-sm-5
- order-md-0
- order-md-1
- order-md-2
- order-md-3
- order-md-4
- order-md-5
- order-lg-0
- order-lg-1
- order-lg-2
- order-lg-3
- order-lg-4
- order-lg-5
- order-xl-0
- order-xl-1
- order-xl-2
- order-xl-3
- order-xl-4
- order-xl-5
- order-xxl-0
- order-xxl-1
- order-xxl-2
- order-xxl-3
- order-xxl-4
- order-xxl-5
#İstediğiniz kırılma noktalarında istediğiniz sıralamayı gerçekleştirebilirsiniz, tek kullanım şekli bu şekilde değildir.Aşağıdaki class'ları kullanarakta sıralama işlemlerinizi gerçekleştirebilirsiniz.
- order-first
- order-last
- order-sm-first
- order-sm-last
- order-md-first
- order-md-last
- order-lg-first
- order-lg-last
- order-xl-first
- order-xl-last
- order-xxl-first
- order-xxl-last
