

# Java Temel Operatörler (Basic Operators)

Java dilinde operatörler birçok işlemi yapabilmenize olanak tanır. Örneğin: matematiksel operatörlerle birlikte aritmetik işlemler yapabilmenizi, ilişkisel operatörlerle verileri kıyaslayabilmeyi, atama operatörleri ile değişkenlerin değerlerini değiştirmeye fırsat verir.

Java'da operatörler aşağıdaki gibi listelenebilir:

- Aritmetiksel Operatörler
- İlişkisel ve Eşitlik Operatörler
- Bitsel (Bit Düzeyinde) Operatörler
- Mantıksal Operatörler
- Atama Operatörleri





# Java Aritmetik Operatörler

![](https://www.examtray.com/sites/default/files/2019-06/java-arithmetic-operators-precedence.jpg)

Aritmetik Operatörler matematiksel işlemler yapmak için kullandığımız  karakterlerdir.Örnek verecek olursak toplama, çıkarma,çarpma ve bölme işlemlerine ait semboller aslında kullandığımız aritmetik operatörlerdir. Bu yazıda tüm operatörleri ele alıp inceleyeceğiz.Onun öncesinde operand kavramına bakalım.

Operand, aritmetik operatörlerde işleme katılan değerlerdir.Örnek verelim;

3 + 5 işlemine baktığımızda burada iki  operand bir  aritmetiksel operatör bulunmaktadır.3 ve 5 değerleri bizim operandlarımız  iken   +  karakteri ise bizim aritmetik operatörümüzdür.Aritmetiksel operatörlerin farklı sayılarda operandları olabilir.Operand kavramını bu şekilde açıklayabiliriz.

 Şimdi aritmetiksel operatörleri başlıklar altında inceleyelim.



### =  (Atama Operatörü)

Atama operatörü, kod yazmaya yeni başlamış veya başlayacak olan kişilerde matematikte gördüğümüz eşitlik  operatörü gibi algılanabiliyor.Ancak programcılıkta kullanılan atama operatörü ( = ) bir değişkene değer atamak için kullanılmaktadır.Aşağıdaki örneğe  bakarak daha iyi anlayabiliriz.

```java
//Matematikte gördüğümüz eşitlik operatörü
x = x + 3 => //Matematikte eşitlik operatörü sağ ve soldaki değerlerin eşitliğine bakar ve eşitlik yoksa sonuç vermez. 		  	 

//Programlamada gördüğümüz atama operatörü
(Örnek)
int x = 3; => //Integer tipinde bir x değişkenimiz var ve biz buna Integer tipinde istediğimiz değeri atayabiliriz.
    
x = x + 3 => //işlemini 2 aşamada gerçekleştirelim ve x'e 2 değerini verelim.
    
1. aşama
    öncelikle atama operatörünün sağındaki işlemi gerçekleştirelim =>   x + 3 = 5  sonucumuz 5 çıktı.
								       (2) 	

2. aşama
    x = 5  => Atama operatörünün sağındaki işlemin sonucunu operatörün solunda bulunan x değişkenine atayarak x = 5 atamasını gerçekleştirelim ve değişkenimize ait yeni değerimiz 5 olmuş oldu
    
//Kısaca özetlersek atama operatörünün sağındaki işlemi gerçekleştir ve soldaki değişkene ata.	
    



```

### +  (Toplama Operatörü)

İki değerin toplanıp tek bir değere dönüştürülmesini sağlar.

```java
int x = 5 + 8 
double y = 123.04 + 432.51;
float z = 54f + 55.2f;

```

### - (Çıkarma Operatörü)

İki değerin birbirinden çıkarılmasını sağlar.

```java
int x = 645 - 232 
double y = 123433.04 - 431132.51;
float z = 5434.3f - 6455.2f;

System.out.println(x);
System.out.println(y);
System.out.println(z);
```

### * (Çarpma Operatörü)

İki değerin çarpma işlemini gerçekleştirir.

```java
int x = 45 * 32 
double y = 123.04 * 32.51;
float z = 134.3f * 323.2f;

System.out.println(x);
System.out.println(y);
System.out.println(z);
```

### / (Bölme Operatörü)

İki değeri birbirine bölme işlemini gerçekleştirir.

```java
int x = 5 / 33 
double y = 3.04 / 2.51;
float z = 4.3f / 9.2f;

System.out.println(x);
System.out.println(y);
System.out.println(z);
```

### % (Mod Alma Operatörü)

Mod alma işlemini gerçekleştirir.

```java
int x = 2 % 3 
double y = 36 % 7;
float z = 39 % 38;

System.out.println(x);
System.out.println(y);
System.out.println(z);
```

### ++ (Increment Operatörü)

Değişken değerinin 1 artırmayı sağlar.Prefix ve Postfix olarak iki farklı kullanımı vardır.Kod üzerinde görelim.

```java
//Prefix Increment kullanımında değer önce 1 arttırılır daha sonra kullanılır. 
int x = 12;
double y =13.12;
 
System.out.println(++x);
Output:13
System.out.println(++y);
Output:14.12
    

//Postfix Increment kullanımında değer kullanılır daha sonra bir arttırılır.
    
int a = 35;
double b =78.12;    

System.out.println(a++);
Output:35
System.out.println(b++);
Output:78.12
    
    
System.out.println(a);
Output:36
System.out.println(b);
Output:79.12



```

### -- (Decrement Operatörü)

Değişken değerinin 1 azaltmayı sağlar.Prefix ve Postfix olarak iki farklı kullanımı vardır.Kod üzerinde görelim.

```java
//Prefix Increment kullanımında değer önce 1 azaltılır daha sonra kullanılır. 
int x = 12;
double y =13.12;
 
System.out.println(--x);
Output:11
System.out.println(--y);
Output:12.12
    

//Postfix Increment kullanımında değer kullanılır daha sonra bir azaltılır.
    
int a = 35;
double b =78.12;    

System.out.println(a--);
Output:35
System.out.println(b--);
Output:78.12
    
    
System.out.println(a);
Output:34
System.out.println(b);
Output:79.12
```

```java
--Sorular--
NOT:Soruları cevaplandırdıktan sonra kodları kendi IDE nizde çalıştırarak cevapları kontrol ediniz.    
    

Soru 1)
    
int x = 6;

x++;
x--;
++x;
x--;
 
System.out.println(x++);  Output = ?
    
    
Soru 2)
    
 int a += 3;    
    
 a = 5;

System.out.println(++a); Output = ? 
    
    
Soru 3) 
    
   double t = 5;
    
    t = (t++) + 3
    
    
System.out.println(t++); Output = ? 






```
## KAYNAKLAR 

- https://www.examtray.com/sites/default/files/2019-06/java-arithmetic-operators-precedence.jpg

- https://acikders.ankara.edu.tr/pluginfile.php/58696/mod_resource/content/0/DersNotu_Operatorler.pdf
