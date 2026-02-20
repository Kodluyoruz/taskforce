# ViewModel ve Dto Kavramları

## ViewModel
View model kullanıcıya gösterilecek olan verinin modelidir diyebiliriz. Genelde UI bazında tanımlanır. Yani bir View'ın bir ViewModel'i olması beklenir. Çünkü ViewModel'lerin kullanılma motivativasyonu gereksiz bilginin client'a indirilmemesidir. Yani bir view'da kullanılmayacak olan veri API'dan geri döndürülmemelir. Uygulama içerisinde sadece adminin görmesi gereken bilgiyi yetkisi düz kullanıcının client'ına indirmek doğru değildir. Bu veri güvenliği açığına neden olur.

Peki birden fazla view için aynı ViewModel'in kullanıldığını düşünelim. Bize ne dezavantaj sağlar? View'lardan birinde extra bir alan gösterilmesi gerektiğinde bu bilgiyi ViewModel'e eklersek birden fazla view da bu veriyi döndürmüş oluruz. Aslında istemediğim bir veriyi kontrolsüzce client'a taşımama neden olur. Bu hassas bir veri de olabilir. Üstelik işler çığırından çıktığında bunu tespit etmekte çok güçleşir. O nedenle ViewModel'ler view bazında dikkatli şekilde kullanılmalıdır. Disiplinli bir şekilde en küçük bir ekran için bile varolan ViewModel kullanılmadan yeni bir ViewModel yapılarak kullanılmalıdır.

Bir diğer kritik nokta ise entity'e veri map'lemek için kullanılan model ile UI'a veri dönmek için kullanılan modelin aynı olmasıdır. Bu kullanımda fazladan verinin expose edilmesine yani client'a indirilmesine neden olur. Bu yaklaşımda veri güvenliği sorunlarına neden olacağı için kaçınılmalıdır. 

## DTO (Data Transfer Object)
DTO yani Data Transfer Object. View model ve DTO kullanımı çok karıştırılan 2 kavramdır. View model son kullanıcıya gösterilecek veriyi döndürmek için kullanılırkeni Dto uygulama katmanları arasında veriyi transfer etmek için kullanılır. Genel olarak database den gelen veriyi source olarak kullanır.

DTO da asıl amaç katmanları arasındaki yapılabilecek call yani çağrım sayılarını azaltmaktır. Bir katmanda elimizde var olan data diğer katmanda kullanılacak ise, veriyi tasımak diğer katmanda yeniden çağrım yapmamak için anlamlı bir çözümdür. Ve Dto'lar nerdeyse hiç davranış içermezler. Veriyi olduğu gibi ileten Dumb objelerdir. 
