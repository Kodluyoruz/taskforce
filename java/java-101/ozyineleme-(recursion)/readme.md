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



