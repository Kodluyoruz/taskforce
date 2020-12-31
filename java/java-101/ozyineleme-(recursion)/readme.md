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



Factorial probleminde bellekte neler olduğuna bir bakalım. 5 sayısının factoriali ni bulurken özyineli fonksiyon şu adımları yapar.

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

 Dizinin ilk sayı değeri 0, ikincisi 1 ve her ardışık elemanı da önceki iki elemanın değerinin toplamı alınarak bulunur.Fibonacci sayıları 0 ,1 ,1 , 2 , 3  , 5 , 8 , 13 , 21 , 34 , 55 , 89 , 144 , 233 , . . . . şeklinde devam eden sayılar dizisidir. Matematiksel olarak  
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
                    							 /      \ 
               								fib (4)     fib (3)    
             								/ 	\         /      \ 
        							  fib (3) 	fib (2)  fib (2)  fib (1) 
       								  /  \         /   \       	/ \ 
  								fib(2) fib(1) fib(1)  fib(0) fib(1) fib (0) 
  								 / \ 
							fib (1) fib (0)
```

 Yani n nci bir sayı da kötü bir uygulama olduğunu söyleyebiliriz.



