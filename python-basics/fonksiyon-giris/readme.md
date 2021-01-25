## Fonksiyonlar

* Çok kod yazmak her zaman iyi bir şey demek değil. 
* Minimal ve okunabilir olması daha önemli.
* Gereksiz kod tekrarından kaçınmak gerekir.
* Bu konularda gayet yardımcı olabilecek bir yapıyı göreceğiz bugün - fonksiyonlar

* Belirli Fonksiyonalite katan kod bloklarını belirli bir yapı altında tutup, o işleme ihtiyaç duyduğum zaman tekrar tekrar kullanabilirim. Bu yapı `fonksiyonlar`

* Fonksiyonlar kodumuzda abstraction (soyutlama) ve decomposition (problemi küçük parçalara ayırma) (modülerlik) yapmamızı sağlar. 

**Abstraction nedir?**

Bir araba düşünün:

* Araba bizi istediğimiz yere götüren bir araç
* Arabanın hareketini sağlayan arka planda çokça mekanizma var
* Motor, yanma vs gibi...

* Ama aracı kullanırken bunları hiç düşünmüyoruz, sürmemiz için gerekli olan sadece pedallara basmak ve direksiyonu çevirmek


`abstraction`nın temel mantığı ayrıntılardansa bütünü düşünmek. Arabanın nasıl çalıştığının ayrıntısını bilmeme gerek yok arabayı kullanmak için, tek bilmem gereken direksiyon ve pedallar ile nasıl kontrol edebileceğim.

Bu mantık yanlış anlaşılmasın. Bu kodun bazı kısımlarını yazmakla ilgilenmeyeceğiz anlamına gelmiyor. İstediğimiz komutlar bütününü bir fonksiyon altında toplayıp (bu örnekte tüm o ateşleme, motorun çalışmasını `pedal` fonksiyonu altına topladığınızı düşünün), artık o eylemi yapmak istediğim zaman sadece o fonksiyonu çağırıyorum ve bu fonksiyonun yaptığını kullanarak daha komplike davranışlar tanımlıyabiliyorum. Buradaki en önemli nokta, üst üste koyarak inşa ettiğim yapıda yazdığım fonksiyonların ayrıntılarındansa ne yaptıklarını bilip ona göre üzerlerine, onları yapının bir parçası olarak görerek mantık kurmak.

Özet olarak: fonksiyonun o işi nasıl yaptığıyla ne yaptığını ayırmak ve ne yaptığına odaklanıp onun üzerine mantık kurmak.

**Decomposition nedir?:**

Elimdeki problemi kendi içerisinde anlamlı, daha küçük problemlere bölmek. Arabanın çalışması arkada yatan bir çok mekanizmayla gerçekleşir. Motorun ateşlenmesi, havanın motora alınması, yakıtın aktarılması vs... Bunların hepsini aslında ayrı ayrı fonksiyonlar olarak düşünebiliriz. Problemi (arabanın hareket etmesini) alt birimlere ayırıp tanımlayıp, çözüyoruz. Birden çok alt yapı bir arada çalışıp daha büyük bir sistem oluşturuyor

* Kodumuzun farklı yerlerinde kullanılabilecek, beraber bir mantık oluşturacak kodlarımı **fonksiyon** tanımlayıp içine yazacağım. 

* Fonksiyonların adı, parametreleri(0 veya daha fazla), açıklaması(opsiyoneli ama iyi bir pratik), ve kodları bulunur

* Sadece adlarını yazınca çağrılmazlar. `()` ile çağırmamız lazım (`function call` veya ` function invocation` olarak geçer)