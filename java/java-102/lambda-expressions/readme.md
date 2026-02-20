# Lambda Expressions(Lambda İfadeleri)

Lambda ifadeleri, fonksiyon yazımının tek satıra indirgenmiş halidir. Bir fonksiyon görevi gördüğü için daha çok fonksiyonel dillerde kullanılmakla birlikte, Java8'den sonra Java dilinde de yerini almıştır. 

Lambda ifadelerini tanımlamak için arrow function dediğimiz fonksiyonlardan kullandığımız, -> şeklinde olan arrow operatörünü kullanırız. Örneğin;

```java
() - > 5 
```

yukarıdaki ifade en basit haliyle bir arrow function'dır. Bu örnekte; soldaki parantez ifadesi bir veya birden fazla parametre alırken, sağ taraftaki 5 sayısı ise fonksiyonun bize ne döndürdüğünü gösterir. 

Bu arrow function'ı normal bir fonksiyonda(metotta) yazarsak ise aşağıdaki ifadeye denk gelir:

```java
int getValue(){
    return 5;
}
```

Lambda ifadeleri tek başlarına anlam ifade etmezler, çünkü aslında sadece bir metot implementasyonudur. Bu yüzden fonksiyonel interface gibi tek bir işin yapıldığı bir sınıfa ait olmalıdırlar. 

Fonksiyonel interface'ler içerisinde abstract metot bulunduran interface'lerdir ve bu abstract metotlar da sadece tek bir iş yapacak şekilde oluşturulur.

```java
interface MyValue{
    int getValue();
}
```

Yukarıda abstract metot bulunduran bir fonksiyel interface örneği görüyoruz. Bunu lambda ifadeleri ile çağırmak istersek aşağıdaki gibi yazarız:

```java
MyValue value = () -> 5;
```

Bu örnekteki gibi metot imzasını ve lambda ifadelerini doğru verdiğimiz sürece abstract metot çağırma işlemini sadece tek bir satır ile yapabiliriz. 



Lambda ifadelerinin bir diğer özelliği; tek bir fonksiyonel interface'den birden fazla lambda metodu oluşturulabilmesidir. Bir örnek verelim. Diyelim aşağıdaki gibi bir fonksiyonel interface'imiz var:

```java
public interface MyTest{
   boolean test(int a, int b);
}

public class Main{
    public static void main(String[] args){
        MyTest lessThan = (x,y) -> x<y;
        System.out.println("3 is less than 5 "+lessThan.test(3,5));
        MyTest moreThan = (x,y) -> x>y;
        System.out.println("3 is more than 5 "+lessThan.test(3,5));
    }
}
```

Output:

```java
3 is less than 5 true
3 is more than 5 false
```

Yukarıdaki örnekte gördüğümüz gibi, MyTest isimli fonksiyonel interface'imizdeki test metodumuzu hem lessThan hem de moreThan metotları ile ilişkilendirmiş olduk. Böylece doğru koşulları yazdığımız zaman tek bir abstract metodumuz birden fazla lambda metodu için çalışmış oldu. 

Bu basit bir örnekti ama gerçek hayatta lambda ile çözebileceğimiz daha zor problemler olabilir. Bu gibi durumlarda da block lambda dediğimiz birden fazla koşula veya duruma dayalı lambda ifadelerini kullanırız. Yine çok karmaşık olmayan ama basit de olmayan bir örnekle açıklayalım.

```java
public interface MyFunc{
   String function(int a);
}

public class Main{
    public static void main(String[] args){
        MyFunc isPositiveOrNegative = (x) ->{
            String result="";
            result = x > 0 ? "Positive" : "Negative";
            return result;
        };
        System.out.println(isPositiveOrNegative.function(15));
        System.out.println(isPositiveOrNegative.function(-15));
    }
}
```

Output:

```java
Positive
Negative
```

Yukarıdaki örneğimizde birden fazla koşula bağlı bir durumu ele aldık. Bu yüzden bunu if-else gibi de düşünebilirsiniz. Örneğimizde; MyFunc isimli fonksiyonel interface'imizde String dönen ve int tipinde parametre alan bir metot yarattık. Bunu main class'ımızda isPositiveOrNegative metodumuzla ilişkilendirdik. Bu metot şunu yapıyor; int tipindeki parametremiz yani x sıfırdan büyükse ('?' if olarak düşünülebilir) "Positive" yaz, değilse(':' else olarak düşünülebilir) "Negative" yaz. İşte bu kadar basit. 

Görüldüğü gibi Lambda ifadeleri işimizi kolaylaştırmakla kalmayıp bizi kod kalabalığından da kurtarıyor. Bu konuda daha detaylı bilgi edinmek için tutorial'ları da inceleyebilirsiniz.

## Anonim Sınıflar

Bir arayüz veya soyut sınıf üzerinden tanımlanan ve ismi olmayan sınıflara anonim sınıf denir. Bu sınıflar oluşturuldukları anda kullanılırlar. Anonim sınıfların bir örneğini alamazsınız; çünkü isimleri yoktur.

Şimdi anonim sınıfları anlayabilmek için bir örnek yapalım. Öncelikle bir arayüz tanımlayalım:

```java
public interface Operation
{
    int operate(int x, int y);
}
```

**_Operation_** isminde bir arayüz tanımladık ve içine **operate()** adında bir metot yazdık. Bu metot int türünde iki sayıyı parametre olarak alır, bu sayılar üzerinde bir işlem yapar ve sonucu yine int türünde döndürür.

Şimdi bu arayüzü kullanan bir metot yazalım:

```java
public class Math
{
	public static int operateTwoNumbers(int x, int y, Operation operation)
	{
		return operation.operate(x, y);
	}
}
```

_Math_ adında bir sınıf tanımladık ve bu sınıf içinde statik **_operateTwoNumbers()_** metodunu yazdık. Bu metot int türünde iki sayıyı parametre alıyor ve bu sayılar üzerinde bir işlem yapıyor; fakat bu işlemin nasıl yapılacağını yine parametre olarak aldığımız **_Operation_** türündeki nesneden öğreniyoruz.

Şimdi, iki sayıyı toplayan bir **Operation sınıfı** yazalım:

```java
public class AdditionOperation implements Operation
{
	@Override
	public int operate(int x, int y)
	{
		return x + y;
	}
}
```

Şimdi aşağıdaki işlemi gerçekleştirebiliriz:

```java
int result = Math.operateTwoNumbers(5, 10, new AdditionOperation());
System.out.println(result);
```

Bu kodu çalıştırdığınızda konsola 15 yazar; çünkü **_AdditionOperation_** sınıfı toplama işlemi yapmaktadır. Fakat burada şunu düşünelim: diyelim ki, bu metodu sadece bir kez kullandık. Sadece bir kez kullandığımız bu metot için **_AdditionOperation_** adında bir sınıf yazmamıza gerek var mıdır?

Bunun yerine anonim sınıfları kullanabilirdik. Şimdi yukarıdaki kodu anonim sınıf kullanarak tekrar yazalım:

```java
int result = Math.operateTwoNumbers(5, 10, new Operation()
{
    @Override
    public int operate(int x, int y)
    {
    	return x + y;
    }
});
System.out.println(result);
```

Kalın olarak belirttiğimiz kod anonim sınıf kodudur. Gördüğünüz gibi, new deyimini kullanarak **_Operation_** türünde bir nesne oluşturduk; fakat bildiğiniz gibi, new deyimini arayüzler üzerinde kullanamayız, yalnızca sınıflar üzerinde kullanabiliriz. Burada da new deyimini kullanarak bir sınıf oluşturduk; fakat bu sınıfın bir ismi yoktur. Bu sınıfla ilgili bildiğimiz tek şey, **_Operation_** arayüzünü uyguladığıdır, dolayısıyla **_operate()_** metodunu yazmak zorundadır.

Anonim sınıflar, yukarıda da gördüğümüz gibi, bir arayüz veya soyut sınıf üzerinden oluşturulan isimsiz sınıflardır. Bu sayede, bir daha hiçbir zaman kullanmayacağımız **_AdditionOperation_** sınıfını yazmamıza gerek kalmaz.

Lambda ifadeleri, anonim sınıf kullanarak yazdığımız kodları daha kısa yazmamıza imkân tanır. Lambda ifadelerini kullanarak, yukarıda yazdığımız kodu aşağıdaki gibi tek satırda da yazabiliriz:

```java
int result = Math.operateTwoNumbers(5, 10, (x, y) -> x + y);
System.out.println(result);
```

Kalın olarak belirttiğimiz kod bir lambda ifadesidir. Gördüğünüz gibi, anonim sınıf yerine lambda ifadesi kullandığımız zaman kodu tek satıra indirgedik.

Şimdi, lambda ifadelerini daha ayrıntılı incelemeden önce, fonksiyonel arayüzlerden bahsedelim.

### Sorular

**1)** Arrow function nedir?

Cevap: Sadece kendi fiziksel ortamını etkileyen, girdisi ve çıktısı olan matematiksel bir ifadeye benzeyen, kısaltılmış bir fonksiyon ifadesidir.

**2)** Lambda ifadelerinde ? ve : ifadelerinin Java dilindeki karşılığı nedir?

Cevap: if-else koşul ifadelerinin karşılığıdır.

## Kaynaklar

- https://medium.com/s%C4%B1f%C4%B1rdan-i%CC%87leri-d%C3%BCzeye-java-e%C4%9Fitim-serisi/lambda-ifadeleri-ve-fonksiyonel-interface-64312ad545a3

- https://www.w3schools.com/java/java_lambda.asp

- https://blog.burakkutbay.com/java-8-lambda-expressions-nedir-lambda-ifadeleri-kullanim-ornekleri.html/

- (https://www.mobilhanem.com/java-8-lambda-ifadeleri/
