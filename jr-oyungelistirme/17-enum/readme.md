# Enum

Uygulama geliştirirken sabit değerlerle çalışmak durumunda kalırız. Bu noktalarda okunabilirliği yüksek bir program yazmak istiyorsak enum lasrdan faydalanırız.

**"enum"** anahtar kelimesi enumeration yani numaralandırma kelimesinden gelir. Sayısal verilerı string ifadelerle saklamanızı sağlar. Okunabilirliğe katkısı da tam olarak burdan gelir diyebiliriz. 

    enum Gunler 
    {
        Pazartesi, 
        Sali, 
        Carsamba, 
        Persembe, 
        Cuma, 
        Cumartesi, 
        Pazar
    };

Yukarıda Gunler enum'ını görüyorsunuz. Enum lar default olarak 1'den başlar.

```Gunler.Pazartesi ``` ifadesi ile Pazartesi'nin string ifadesine erişebiliriz. Eğer Pazartesinin 1. gün oldugu bilgisine ihtiyacımız varsa o da şu şekildedir: ```(int)Gunler.Pazartesi** ```
