## Lambda Expessions(Lambda İfadeleri)

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
