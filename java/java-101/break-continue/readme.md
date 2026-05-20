# Break & Continue

## Break Deyimi

Buraya kadar gördüğümüz bütün döngüler belirlediğimiz bir koşula göre kontrol ediliyor ve bu koşul sağlandığı sürece çalışıyordu. Bazı durumlarda, döngü koşulu sağlansa bile başka bir nedenden ötürü döngüyü sonlandırmak isteyebiliriz. Bu tarz durumlarda **break** deyimini kullanırız. Bu deyim, içinde kullanıldığı döngüyü anında sonlandırır. Aşağıdaki örneği inceleyelim:

```java
boolean continueLoop = true;

for (int i = 2; i <= 100; i += 2)
{
	if (!continueLoop)
	{
		break;
	}
    
    System.out.println(i);
    
    if (i == 50)
	{
		continueLoop = false;
	}
}
```

Bu örnekte, 2’den 100’e kadar olan çift sayılar konsola yazdırılıyor. Fakat döngü ayrıca boolean bir değişkenle kontrol ediliyor. Döngü sayacı 50’ye ulaştığında bu değişken false olarak ayarlanıyor. Döngünün her adımında ise bu değişken kontrol ediliyor; eğer false ise döngü break deyimiyle sonlandırılıyor. Bu kod çalıştırıldığında, 2’den 50’ye kadar olan çift sayıların konsola yazdırıldığını görürüz. Çünkü 50’ye ulaştıktan sonra break deyimiyle döngü sonlandırılmıştır. Gördüğünüz gibi, aslında döngü koşulu sağlanmasına rağmen manuel olarak döngü sonlandırılmıştır.

## Continue Deyimi

Bazı durumlarda döngünün sadece o adımının sonlanmasını, diğer adımların ise çalışmaya devam etmesini isteriz. Bu gibi durumlarda **continue** deyimini kullanırız. Aşağıdaki örneği inceleyelim:

```java
for (int i = 0; i <= 10; i += 2)
{
	if (i == 4)
	{
		continue;
	}
	
    System.out.println(i);
}
```

Bu örnekte 0’dan 10’a kadar olan çift sayılar konsola yazdırılıyor. Fakat döngü sayacı 4 olduğunda continue deyimi çalıştırılıyor. continue deyimi kullanıldığında döngünün geri kalanı çalıştırılmaz; fakat diğer adımlar çalışmaya devam eder. Bu kod çalıştırıldığında çıktısı aşağıdaki gibi olur:

```java
0
2
6
8
10
```

Gördüğünüz gibi, continue deyimi çalıştırıldığı için 4 konsola yazılmamış; fakat diğer değerler yazılmıştır.