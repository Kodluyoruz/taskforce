# Tür Dönüşümleri

Türler arasında kurallara aykırı olmadığı sürece dönüşüm yapılabilir. Tür dönüşümüne, türleri birbirinden farklı değişkenler arasında atama yaparken ihtiyaç duyulur. Örneğin, int türündeki bir değişkenin değerini long türündeki bir değişkene aktarmak istiyorsanız. Tür dönüşümleri ikiye ayrılır.

## Dolaylı tür dönüşümü (Implicit type casting)

İlkel veri türlerini anlatırken, her bir türün kendine ait bir değer aralığı olduğundan söz etmiştik. Eğer değer aralığı düşük bir türden yüksek bir türe dönüşüm yapılıyorsa burada dolaylı tür dönüşümü söz konusudur.

Örneğin, int türünde bir değişkeniniz var. Bunun değerini long türündeki bir değişkene aktarmak istiyorsunuz. Bildiğiniz gibi, int türünün alabileceği bütün değerler long türünün değer aralığında zaten tanımlıdır. Dolayısıyla bu dönüşüm sorunsuz bir şekilde gerçekleşecektir. Aşağıdaki örneği inceleyelim:

```java
int a = 5;
long b = a;
```

Yukarıdaki örnekte ilk önce int türünde bir değişken tanımlanıyor ve bu değişken üzerinden long türündeki bir değişkene atama yapılıyor. Burada gördüğünüz gibi, atama operatörü (=) kullanarak değişkenin ismini yazmanız yeterlidir. İlk bakışta burada bir tür uyumsuzluğu varmış gibi gözükebilir, int türünde bir değeri long türüne aktarmaya çalışıyorsunuz. Fakat burada arka planda bir tür dönüşümü yapılmaktadır. Bizim bu dönüşüm için ekstra kod yazmamız gerekmediğinden, bu tarz dönüşümlere dolaylı tür dönüşümü denir.

Dolaylı tür dönüşümü yalnızca daha az kapsayıcı bir türden daha çok kapsayıcı bir türe doğru yapılabilir. Bu nedenle bu tür dönüşümler **genişleyen dönüşüm (widening conversion)** olarak da adlandırılır.

## Doğrudan tür dönüşümü (Explicit type casting)

Dolaylı tür dönüşümünün aksine, daha kapsayıcı bir türden daha az kapsayıcı bir türe doğru yapılan dönüşümlere doğrudan tür dönüşümü denir. Doğrudan denmesinin sebebi, yapılacak dönüşümün yönünü belirtmemiz gerektiğindendir.

Bunu gösterebilmek için yukarıdaki örneğin tam tersini inceleyelim:

```java
long a = 5;
int b = (int) a;
```

Görüldüğü gibi, doğrudan tür dönüşümü yaparken, dönüştürülecek türün adı değişkenin adından önce parantez içinde yazılır. Bunu yaparak Java’ya, türü dönüştüreceği yönü belirtmiş oluruz.

Doğrudan tür dönüşümleri, **daralan dönüşüm (narrowing conversion)** olarak da adlandırılır.
