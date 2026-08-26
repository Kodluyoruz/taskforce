# Özyineleme (Recursion)

Bir metodun kendini çağırmasına **özyineleme (recursion)** denir. Bu tarz metotlara **özyineli (recursive) metot** denir. Özyineli algoritmalara verilebilecek en meşhur örnek faktöriyel hesabıdır. Bir sayının faktöriyeli aşağıdaki gibi hesaplanır:

		n! = n * (n – 1)!
		f(n) = n * f(n – 1)

Gördüğünüz gibi, sayıyı 1 azaltarak yine faktöriyel fonksiyonunu çağırıyoruz. Java’da da bu tarz metotlar yazabiliriz. Özyineli metot yazarken dikkat etmemiz gereken önemli bir nokta, metoda bir çıkış koşulu yazmaktır. Eğer metoda bir çıkış noktası yazmazsak, sonsuza kadar aynı metot çağrılmaya devam eder. Aşağıdaki örneği inceleyelim:

```java
int factorial(int number)
{
	return number * factorial(number – 1);
}
```

Burada özyineli bir metot yazdığımızı görebilirsiniz; çünkü metodun içinde yine aynı metodu çağırıyoruz. Fakat bu metoda bir çıkış noktası yazmadığımız için metodumuz sonsuza kadar kendini çağırır ve bir süre sonra _StackOverflowException_ hatası alırız. Aşağıda düzgün bir özyineli metot yazdık:

```java
int factorial(int number)
{
	if (number == 1)
	{
		return 1;
	}

    return number * factorial(number – 1);
}
```

Yukarıda dikkat etmeniz gereken nokta, özyineli metoda bir çıkış noktası yazmış olmamızdır. Eğer parametre olarak aldığımız sayı 1 ise metodumuz 1 değerini döndürür; çünkü 1’in faktöriyeli 1’dir. Diğer durumlarda ise metodumuz kendini çağırmaya devam eder.

```java
System.out.println(factorial(4)); // Konsola 24 yazar
System.out.println(factorial(5)); // Konsola 120 yazar
```



Factorial probleminde bellekte neler olduğuna bir bakalım. 5 sayısının factoriali ni bulurken özyineleme fonksiyon şu adımları yapar.

f(5)     =    5 * f (4)

​				5 * ( 4 * f (3) )

​				5 * ( 4 * ( 3 *  f(2) ) )

​				5 * ( 4 * ( 3 * ( 2 * f(1) ) ) )

​				5 * ( 4 * ( 3 * ( 2 * ( 1 * f(0) ) ) ) )

​				5 * ( 4 * ( 3 * ( 2 * ( 1 * 1 ) ) ) ) 

​				5 * ( 4 * ( 3 * ( 2 * 1 ) ) )

​				5 * ( 4 * ( 3 * 2 ) )

​				5 * ( 4 * 6 )

​				5 * 24

​				120

Çözüme dikkatli bir şekilde baktığımızda ana bellekte olan işlemi birazcık anlayabiliyoruz. f ( 5 ) hesaplanırken program akışı f( 5 )  - - > f( 4 ) - - > f ( 3 )  - - > f ( 2 )  - - > f ( 1 ) - - > f ( 0 ) değerleri bulunuyor. f ( )  öz yinele  (recursion) fonksiyonunun taban parçası f ( 0 ) dır. Program akışı 1 - 1 - 2 - 6  - 24 - 120 değerlerini kullanarak başa dönüyor.

Şimdi farklı örnekler yaparak bu konuyu biraz daha pekiştirelim.

İlk örneğimiz fibonacci serisi : 

 Dizinin ilk sayı değeri 0, ikincisi 1 ve her ardışık elemanı da önceki iki elemanın değerinin toplamı alınarak bulunur. Fibonacci sayıları 0 ,1 ,1 , 2 , 3  , 5 , 8 , 13 , 21 , 34 , 55 , 89 , 144 , 233 , . . . . şeklinde devam eden sayılar dizisidir. Matematiksel olarak  
$$
Fn = F n-1 +F n-2
$$
şeklinde dir. 

F0 = 0 ve F1 = 1 dir.

```java
public class Recursion {
      static int fibonacci(int n){
        if (n<=1){
            return n;
        }else{
            return fibonacci(n-1)+fibonacci(n-2);
        }
    }
    public static void main(String[] args){
        System.out.println(fibonacci(5));//Cıktı 5 dir.
    }
}
/*
0, 1 , 1 , 2 , 3 , 5 , 8 , 13 , 21 , 34 , 55 , 89 , 144 , 233 , 377 , 610 , 987 , 1597 ,
2584 , 4181 , 6765 , 10946
*/
```

Zaman karmaşıklığı üstel olarak O (n)  = O( n - 1 ) + O ( n - 2 ) dir. Bu örnekte çok sayıda tekrarlanan iş yapıldığını söyleyebiliriz.

```
                   							      fib (5)    
                    							     /       \ 
               								fib (4)      fib (3)    
             								/ 	\        /     \ 
        							  fib (3) 	fib (2)  fib (2)  fib (1) 
       								  /  \         /   \       	/ \ 
  								fib(2) fib(1) fib(1) fib(0) fib(1) fib (0) 
  								 / \ 
							   fib (1)  fib (0)
```

 Yani n nci bir sayı da kötü bir uygulama olduğunu söyleyebiliriz.

Özyineleme, ile yani ekok adlı özyinele fonksiyon ile iki sayının en küçük ortak katını bulalım.

```java
class Recursion{
    static int temp=1;
    int ekok(int sayiBir, int sayiIki) {
        if (temp % sayiIki == 0 && temp % sayiBir == 0){
            return temp;
        }
        temp++;
        ekok(sayiBir,sayiIki);
        return temp;
    }
    public static void main(String[] args){
        Scanner scanner=new Scanner(System.in);
        System.out.print("Deger 1 : ");
        int deger1=scanner.nextInt();
        System.out.print("Deger 2 : ");
        int deger2=scanner.nextInt();
        int sonuc;
        if (deger1 > deger2) {
            sonuc = ekok(deger1, deger2);
        } else {
            sonuc = ekok(deger2, deger1);
        }
        System.out.println(sonuc);
    }
}
/*
Deger 1 : 25
Deger 2 : 45
225
*/
```

Özyineleme, problemi en üstten başlayarak adım adım daha küçük parçalara ayırır. Parçalanamayan en basit parçasına taban parçası denilir. En üstten başlayarak tabana kadar iner. Yani bir sonlandırma noktası olmalıdır aksi halde beklenmedik bir durum oluşabilir. 

Özyineleme algoritması şunlara sahip olmalıdır :

- Temel Durum (Base Case) :Temel durum olası en basit çözümdür.
- Temel Duruma kadar çalış (Work toward Base Case - Convergence) :Temel duruma kadar çalışma sorunu daha basit hale getirerek kullandığımız yerdir. Temel duruma yaklaşma
- Yineleme çağrısı (Recursive call - General Case) : Özyinele çağrısı, problemin daha basit versiyonunu çözmek için algoritmayı kullandığımız yerdir. 

Özyinelemeyi tekrar ettikten sonra bir kaç örnek daha inceleyelim.

Bu örneğimizde girilen sayının basamaklar toplamını özyinele fonksiyon ile çözelim.

```java
class Recursion{
    static int basamaklarToplami(int sayi){
        if (sayi == 0){
            return 0;
        }else
           return sayi % 10 + basamaklarToplami(sayi / 10);
    }
    public static void main(String[] args){
  		  System.out.println("Basamak toplami: "+basamaklarToplami(45612));
    }
}
//45612 sayısının basamaklar toplamı : 18 
```

Temel durum sayi == 0 olduğu durumdur.

Temel duruma doğru çalışan kısım sayi / 10 kısmıdır.

Yinelemeli çağrıda basamaklarToplami( sayi / 10 ) kısmıdır.

Bu örneğimizde klavyeden girilen sayının asal olup olmadığını özyinelemeli fonksiyon kullanarak bulalım.

```java
class Recursion{
    static int sayiAsalMi(int sayi, int i) {
        if (i < sayi) {
            if (sayi % i != 0)
                return (sayiAsalMi(sayi, ++i));
            else {
                return 0;
            }
        }
        return 1;
    }
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        System.out.print("Sayi giriniz:");
        int sayi = scanner.nextInt();
        int sonuc = sayiAsalMi(sayi, 2);
        if (sonuc == 1) {
            System.out.println(sayi + " asal sayıdır.");
        } else {
            System.out.println(sayi + " asal sayı degildir.");
        }
    }
}
```

Yaptığımız örnekler sonucunda özyinelemeli fonksiyonlar hakkında şunları söyleyebiliriz :

- Özyineleme işleminde bir blok deyimi sürekli tekrar edilir.
- Tekrarı sona erdiren kod olmalı.
- Özyinelemede ardışık çağrılar, taban (base case) denilen en küçük parçaya erişilince sonlanır.
- Çağrılar taban (base case) parçaya inemiyorsa özyineleme sonsuz kez tekrarlanır ve _StackOverflowException_ hatası alınır.
- Özyinelemede, üstten başlayarak tabana (base case) ininceye kadar çağrılan fonksiyon değerleri bellekte tutulur. Çağrı sayısı arttıkça bellek kullanımı da artar. 

Neden Özyinele Fonksiyon Kullanılır ? 

- Karmaşık problem çözümlerinde basitlik ve kısa çözüm sağlar. Karmaşık problemi en temel duruma kadar indirger oradan itibaren de adım adım asıl problemi çözer. Yani minimum miktarda kod kullanarak verimli kodlar yazmaya imkan tanınır.
- Bazı diller döngü olmadığı için özyinele fonksiyonlar kullanılır.



## KAYNAKÇA

- [Recursive Function - techterms](https://techterms.com/definition/recursive_function#:~:text=A%20recursive%20function%20is%20a,the%20end%20of%20each%20iteration.)
- [Recursive Function - GeeksForGeeks](https://www.geeksforgeeks.org/recursive-functions/)
- [Recursion Function](https://www.cs.utah.edu/~germain/PPS/Topics/recursion.html)
- [Recursion Function - Yazılım Hanem](http://yazilimhanem.com/recursive-ozyinelemeli-fonksiyon/)
- [Recursion Function - forum Java](https://forum.java.com.tr/ozyineleme-recursion/)
- [Recursion Function - javaTpoint](https://www.javatpoint.com/recursion-in-java)

