# Düzenli İfadeler (Regex)

Bazen bir metnin belli bir desene uygun olup olmadığını denetlemek isteriz. Örneğin, elinizde bir metin var ve siz bu metnin bir eposta adresi olup olmadığını test etmek istiyorsunuz. Bu gibi durumlarda çok fazla kontrol kodu yazmak gerekir. Fakat bunun önüne geçebilmek için **düzenli ifadeler (regex – regular expressions)** kavramı ortaya atılmıştır.

Regex, yalnızca Java’ya özgü olmayıp bütün programlama dillerinde mevcuttur. Dolayısıyla regex kuralları herhangi bir dile ait değildir. Her programlama dili için regex motorları yazılmıştır.

Regex kullanarak bir desen oluştururuz ve bir metnin bu desene uyup uymadığını kontrol ederiz. Java’da bunu **_Pattern_** ve **_Matcher_** sınıflarını kullanarak yaparız.

## Pattern sınıfı

Bir regex desenini belirtmek için **_Pattern_** sınıfını kullanırız. Bu sınıfın yapılandırıcıları bizden gizlenmiştir. Dolayısıyla **_Pattern_** nesnesi oluşturmak için **statik** **_compile()_** metodunu kullanırız. Bu metodun yapısı aşağıdaki gibidir:

```java
public static Pattern compile(String pattern)
```

Parametre olarak **_String_** türünde bir regex deseni veririz ve bu deseni temsil eden bir **_Pattern_** nesnesi oluşturmuş oluruz.

## Matcher sınıfı

**_Matcher_** sınıfının yapılandırıcılarına erişemeyiz. Bu sınıfı ancak bir **_Pattern_** nesnesi üzerinden oluşturabiliriz. Bunun için **_Pattern_** sınıfının **_matcher()_** metodunu kullanırız. Bu metodun yapısı şu şekildedir:

```java
public Matcher matcher(CharSequence str)
```

Bir **_Pattern_** nesnesi oluşturduktan sonra bu metodu kullanarak bir **_Matcher_** nesnesi elde ederiz. Parametre olarak bir metin veririz ve bu **_Matcher_** nesnesini kullanarak metnin o desene uyup uymadığını denetleriz.

Matcher sınıfının en çok kullanılan metodu şudur:

```java
public boolean matches()
```

Bu metot, metnin desene uyup uymadığı bilgisini döndürür. Eğer parametre olarak verilen metin, **_Pattern_** nesnesiyle belirtilen regex desenine uyuyorsa true döndürür. Eğer metnin içinde desene uyan birden fazla kısım mevcutsa bunu **_find()_** metoduyla tespit ederiz:

```java
public boolean find()
```

Bu metot, metnin içinde desene uyan bir kısım olduğu sürece **true**, aksi halde **false** döndürür.

## Regex deseni tanımlamak

Regex desenlerinin kendine özgü bir dili vardır. En çok kullanılan bazı kuralları burada anlatarak bazı regex desenlerini tanımlayalım.

### Harf ve rakamlar

Regex deseni içinde kullanılan harf ve rakamlar metindeki harf ve rakamlarla eşleşir.

### Joker karakteri

Nokta işaretinin (.) regex deseni içinde özel bir anlamı vardır. Bu karakter, metnin içindeki herhangi bir karakterle eşleşir.

| Desen: | ka.ak |
| - | - |
| kavak | EŞLEŞİR |
| kazak | EŞLEŞİR |
| kaçak | EŞLEŞİR |
| kayak | EŞLEŞİR |
| kaymak | EŞLEŞMEZ |

### Escape Karakteri

Regex deseni içinde özel bir anlamı olan karakterleri desen içinde kullanmak istiyorsanız önüne escape karakteri (\) koymanız gerekir. Örneğin, metnin içinde nokta aramak istiyorsanız desen içinde \\. kullanmanız gerekir.

| Desen:| \\\. |
| - | - |
| abc.def | EŞLEŞİR |
| abcdef | EŞLEŞMEZ |

### Tekrar belirteçleri

Metnin içinde bir karakterin birden fazla kez tekrarlanacağı durumlarda tekrar belirteçlerini kullanırız. 6 farklı tekrar belirteci vardır:

| ? | Kendisinden önceki karakterin metinde bulunmadığını veya en fazla 1 defa bulunduğunu belirtir. |
| - | - |
| * | Kendisinden önceki karakterin metinde bulunmadığını veya 1 ya da daha fazla defa bulunduğunu belirtir. |
| + | Kendisinden önceki karakterin metinde en az 1 defa bulunduğunu belirtir. |
| {n} | Kendisinden önceki karakterin metinde n defa bulunduğunu belirtir. |
| {n,} | Kendisinden önceki karakterin metinde en az n defa bulunduğunu belirtir. |
| {n,m} | Kendisinden önceki karakterin metinde en az n, en çok m defa bulunduğunu belirtir. |

| Desen: | sa?t |
| - | - |
| st | EŞLEŞİR |
| sat | EŞLEŞİR |
| saat | EŞLEŞMEZ |

| Desen: | sa+t |
| - | - |
| st | EŞLEŞMEZ |
| sat | EŞLEŞİR |
| saat | EŞLEŞİR |

| Desen: | sa\*t |
| - | - |
| st | EŞLEŞİR |
| sat | EŞLEŞİR |
| saat | EŞLEŞİR |

| Desen: | sa{2}t |
| - | - |
| st | EŞLEŞMEZ |
| sat | EŞLEŞMEZ |
| saat | EŞLEŞİR |

| Desen: | sa{2,}t |
| - | - |
| sat | EŞLEŞMEZ |
| saat | EŞLEŞİR |
| saaat | EŞLEŞİR |

| Desen: | sa{2,4}t |
| - | - |
| sat | EŞLEŞMEZ |
| saat | EŞLEŞİR |
| saaat | EŞLEŞİR |
| saaaat | EŞLEŞİR |
| saaaaat | EŞLEŞMEZ |

### Karakter kümesi

Metnin içinde birden fazla karakterle eşleşebilecek bir kısım varsa bu karakterleri belirtmek için köşeli parantezler kullanılır. Köşeli parantezler tek bir karakter belirtir; fakat bu karakter içinde belirtilen karakterlerden herhangi biri olabilir.

| Desen: | ka[yzm]ak |
| - | - |
| kavak | EŞLEŞMEZ |
| kazak | EŞLEŞİR |
| kaçak | EŞLEŞMEZ |
| kayak | EŞLEŞİR |
| kaymak | EŞLEŞMEZ |

Karakter kümesinin sonuna tekrar belirteçleri koyulabilir, böylece birden fazla kez tekrarlanması sağlanır.

| Desen: | ka[yzm]+ak |
| - | - |
| kazak | EŞLEŞİR |
| kayak | EŞLEŞİR |
| kaymak | EŞLEŞİR |

### Dışlama karakteri

Yukarıda bir karakter kümesi belirlemeyi görmüştük. Eğer karakter kümesinin içindeki karakterlerle değil, o karakterlerin dışındaki bütün karakterlerle eşlenmesi isteniyorsa, dışlama karakteri (^) kullanılır. Dışlama karakterleri o karakterlerin eşleşmemesini sağlar. Eper dışlama karakteri kullanılacaksa, küme içine yazılacak ilk karakter olmalıdır.

| Desen: | ka\[^yzm]ak |
| - | - |
| kavak | EŞLEŞİR |
| kazak | EŞLEŞMEZ |
| kaçak | EŞLEŞİR |
| kayak | EŞLEŞMEZ |

### Aralık karakteri

Belli bir aralığın içindeki karakterlerin tümünü küme içinde yazmak yerine aralık karakteri (-) kullanılabilir.

| Desen: | [0-3] |
| - | - |
| 0 | EŞLEŞİR |
| 1 | EŞLEŞİR |
| 2 | EŞLEŞİR |
| 3 | EŞLEŞİR |
| 4 | EŞLEŞMEZ |

| Desen: | [a-c] |
| - | - |
| a | EŞLEŞİR |
| b | EŞLEŞİR |
| c | EŞLEŞİR |
| d | EŞLEŞMEZ |
| e | EŞLEŞMEZ |

Bütün harflerle eşleşmek için [a-zA-Z]; bütün rakamlarla eşleşmek için [0-9] desenlerini kullanabilirsiniz.

### Gruplama karakteri

Gruplamak istediğiniz karakterleri parantez içine alabilirsiniz. Bu sayede, örneğin, bir karakter grubunun birden fazla kez tekrarını sağlayabilirsiniz.

| Desen: | (ana)+ |
| - | - |
| an | EŞLEŞMEZ |
| ana | EŞLEŞİR |
| anaana | EŞLEŞİR |



## Bir regex örneği

Regex deseni tanımlarken sık kullanılan bazı kuralları yukarıda anlattık. Fakat regex konusu bundan çok daha kapsamlıdır. Daha ayrıntılı bilgi için araştırma yapmanızı şiddetle tavsiye ederim. Şimdi biz regex kullanan bir Java örneği yazalım. Bu örnekte bir metnin “0(5XX) XXX-XX-XX” desenine uyup uymadığını kontrol edeceğiz.

```java
Pattern pattern = Pattern.compile("0\\(5[0-9]{2}\\) [0-9]{3}-[0-9]{2}-[0-9]{2}");

String[] numbers = {"0(532) 315-23-79","0(554) 289-213-124","0531981-66-34","0(567) 144-78-63",};

for (String number : numbers)
{
	Matcher matcher = pattern.matcher(number);
	
    if (matcher.find())
	{
		System.out.println(number + " numarası desene uyuyor.");
	}
	else
	{
		System.out.println(number + " numarası desene UYMUYOR.");
	}
}
```

Yukarıdaki kodu çalıştırdığınızda çıktısı aşağıdaki gibi olur:

```java
0(532) 315-23-79 numarası desene uyuyor.
0(554) 289-213-124 numarası desene UYMUYOR.
0531981-66-34 numarası desene UYMUYOR.
0(567) 144-78-63 numarası desene uyuyor.
```







###  ===Pattern ve Matcher - Örnek



``` java
import java.util.regex.Pattern;
import java.util.regex.Matcher;
```



> Ufak bir senaryo oluşturalım.
>
> `-Bir desenimiz var ve bu desenimizin içeriği "yağışlı" olsun.`
>
> `-Bir de desenimizin eşleşeceği kalıbımız olsun "Bugün hava yağışlı"`



```java
// Desen
Pattern pattern = Pattern.compile("yağışlı", Pattern.CASE_INSENSITIVE);
```

#####  *Nedir bu 'CASE_INSENSITIVE' ?* => istenilen desenin *büyük ve küçük* olmasına bakılmaksızın karakterlerle eşlemeyi sağlar. 

##### Yani üst kısımdaki kod satırında olan "yağışlı" ifadesi  "yAĞışLı" büyüklü küçüklü de yazılmış olsaydı bunu önemsemeyecek ve karakterlerle eşleşmeyi yapacaktı.

```java
// Desenin eşleşeceği kalıp
Matcher matcher = pattern.matcher("Bugün hava yağışlı");
```

```java
/* 
 Eşleşmenin içerisinde istediğimiz deseni arıyor ve
 boolean bir sonuç üretiyor(true-false)
*/
		boolean matchFound = matcher.find();
```

`Projeyi debug modda çalıştırdığımız zaman görüyoruz ki eşleşme sağlandığı için "matchFound" değişkeni "true" sonucunu bize veriyor.`
![](figures/boolean-matchFound(debug_mod).png)

```java
if (matchFound)
{
   System.out.println("Eşleşme bulundu");
}
else
{
   System.out.println("Eşlenme bulunamadı");
}
```

```java
Ekran Çıktısı: Eşleşme bulundu
```





​								
