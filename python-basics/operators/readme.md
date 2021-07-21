## Operatörler(Operators)

* operatorler `values(degerler)` ve `variables(degiskenler)` uzerinden işlem yapmak icin kullanilir.
* zaman zaman operatörleri unutabilirsiniz. bolca tekrar ettikten sonra hatırlamanız kolaylaşacaktır.
* pythonda 7 çeşit operatör türü vardır:

  * 1-aritmetik operatörleri (Arithmetic operators)
  * 2-atama operatörleri (Assignment operators)
  * 3-karsilastirma operatörleri (Comparison operators)
  * 4-mantiksal operatörler (Logical operators)
  * 5-Kimlik operatorleri (Identity operators)
  * 6-Üyelik operatorleri (Membership operators)
  * 7-Bitsel Operatörler (Bitwise operators)


<h3>Aritmetik Operatörler</h3>

* genel matematiksel işlemlerin yapılmasında kullanılırlar.

  <table style="width:100%">
    <tr>
      <th  width="100px">operatör</th>
      <th>isim</th>
      <th>açıklama</th>
      <th>kullanım</th>
    </tr>
    <tr>
      <td>+</td>
      <td>toplama</td>
      <td>iki değeri toplamak için kullanılır</td>
      <td>x + y</td>
    </tr>
    <tr>
      <td>-</td>
      <td>çıkarma</td>
      <td>iki değeri çıkarmak için kullanılır</td>
      <td>x - y</td>
    </tr>
    <tr>
      <td>*</td>
      <td>çarpma</td>
      <td>iki değeri çarpmak için kullanılır</td>
      <td>x * y</td>
    </tr>
    <tr>
      <td>/</td>
      <td>bölme</td>
      <td>iki değeri bölmek için kullanılır</td>
      <td>x / y</td>
    </tr>
      <tr>
      <td>%</td>
      <td>mod alma</td>
      <td>iki değer arasında mod alma işlemi yapmak için kullanılır</td>
      <td>x % y</td>
    </tr>
      <tr>
      <td>**</td>
      <td>üst alma</td>
      <td>iki değer arasında biri taban diğeri üst olmak üzere üst alma işleminde kullanılır</td>
      <td>x ** y</td>
    </tr>
      <tr>
      <td>//</td>
      <td>tam değer fonksiyonu</td>
      <td>iki değer arasında kalansız bölme işlemi yapmak için kullanılır</td>
      <td>x // y</td>
    </tr>
  </table>

<b>örnekler ile Aritmetik Operatörler: </b>

```python
x = 5
y = 3
```
```python
print(x + y)
```
   8 
```python
print(x - y)
```
   2
```python
print(x * y)
```
   15
```python
print(x / y)
```
   0.6

```python
print(x % y)
```
   1
```python
print(x ** y)
```
   125
```python   
print(x // y)
```
   1

<h3>Atama operatörleri</h3>

* değişkenlere değer atamak için kullanılırlar.


  <table style="width:100%">
    <tr>
      <th  width="100px">operatör</th>
      <th  width="100px">kullanım</th>
      <th>eş değer kullanım</th>
    </tr>
    <tr>
      <td>=</td>
      <td>x = 7</td>
      <td>x =  7</td>
    
    </tr>
    <tr>
      <td>+=</td>
      <td>x += 5</td>
      <td>x = x + 5</td>
      
    </tr>
    <tr>
      <td>-=</td>
      <td>x -= 5</td>
      <td>x = x - 5</td>
      
    </tr>
    <tr>
      <td>*=</td>
      <td>x *= 5</td>
      <td>x = x * 5</td>
    
    </tr>
      <tr>
      <td>/=</td>
      <td>x /= 5</td>
      <td>x = x / 5</td>
  
    </tr>
      <tr>
      <td>%=</td>
      <td>x %= 5</td>
      <td>x = x % 5</td>
    
    </tr>
      <tr>
      <td>//=</td>
      <td>x //= 5</td>
      <td>x = x // 5</td>
    </tr>
    <tr>
      <td>**=</td>
      <td>x **= 5</td>
      <td>x = x ** 5</td>
    </tr>
  </table>

<b> örnekler ile atama operatörleri: </b>

```python
x = 12
```
```python
x += 5
print(x)
```
   17
```python
x = 16
```
```python
x -= 5
print(x)
```
   11
```python
x = 13
```
```python
x *= 5
print(x)
```
   75
```python
x = 15
```
```python
x /= 5
print(x)
```
   3
```python
x = 18
```
```python
x %= 5
print(x)
```
   3
```python
x = 21
```
```python
x //= 5
print(x)
```
   4
```python 
x = 2
```
```python
x **= 5
print(x)
```
   32

<h3>Kıyaslama operatörleri</h3>

* iki  değeri  birbirleri ile kıyaslamak için kullanılır.

* değer olarak `bool` bir değer döner (`True` veya `False`).

* çoğunlukla `if elif else statement` da kıyaslamak için kullanılır.
  <table style="width:100%">
    <tr>
      <th width="100px">operatör</th>
      <th width="100px">işlem</th>
      <th >açıklama</th>
      <th>kullanım</th>
    </tr>
    <tr>
      <td>==</td>
      <td>eşit mi ?</td>
      <td>iki değerin  birbirine eşit olup olmadıklarını sorgular</td>
      <td>x == y</td>
    </tr>
    <tr>
      <td>!=</td>
      <td>eşit değil mi ?</td>
      <td>iki değer arasında eşit değil mi sorgusu yapar</td>
      <td>x != y</td>
    </tr>
    <tr>
      <td>></td>
      <td>büyük mü ?</td>
      <td>iki değer arasında büyük mü sorgusunu yapar</td>
      <td>x > y</td>
    </tr>
    <tr>
      <td><</td>
      <td>küçük mü ?</td>
      <td>iki değer arasında küçük mü sorgusunu yapar</td>
      <td>x < y</td>
    </tr>
      <tr>
      <td>>=</td>
      <td>büyük eşit mi ?</td>
      <td>iki değer arasında büyük eşit mi sorgusunu yapar</td>
      <td>x >= y</td>
    </tr>
      <tr>
      <td><=</td>
      <td>üçük eşit mi ?</td>
      <td>iki değer arasında küçük eşit mi sorgusunu yapar</td>
      <td>x <= y</td>
    </tr>
  </table>

<b>ornekler ile kiyaslama operatörleri:</b>

```python 
x = 12
y = 5
```
```python
print(x == y)
```
    False
```python
print(x != y)
```
    True
```python
print(x > y)
```
    True
```python
print(x < y)
```
    False
```python
print(x >= y)
```
    True
```python
print(x <= y)
```
    False
* stringler için de kullanabilir  Unicode değerlerine göre kıyaslar.https://docs.python.org/3/howto/unicode.html buradan unicode konusuna bakabilirsiniz.

```python
x = "abc"
y = "abd"
```
```python
print(x == "abc") 
```
    True
```python
print(x > y)
```
    False

<h3>Mantıksal kıyaslama operatorleri</h3>

* iki koşulun istenilen şekilde sağlanıp sağlanmadığını sorgulamak için kullanılır.

* `bool` türünden değer döndürür (`True` veya `False`).

  <table style="width:100%">
    <tr>
      <th  width="100px">operatör</th>
      <th>isim</th>
      <th>açıklama</th>
      <th>kullanım</th>
    </tr>
    <tr>
      <td>and</td>
      <td>ve</td>
      <td>iki koşul aynı anda  sağlanıyorsa True değeri döner</td>
      <td>	x > 6 and  x < 10</td>
    </tr>
    <tr>
      <td>or</td>
      <td>ya  da</td>
      <td>bir koşulun sağlanması yeterlidir True değerinin dönülmesi için</td>
      <td>x < 8 or x < 2</td>
    </tr>
    <tr>
      <td>not</td>
      <td>değil</td>
      <td>değer True ise False ,False ise True değerini döner</td>
      <td>not(x > 6)</td>
    </tr>
  </table>

<b>örnekler ile mantıksal kıyaslama operatörleri:</b>

```python
x = 5
y = 6
z = 7
```
```python
print(y > x and x < z)
```
    True
```python
print(y > x or x > z)
```
    True
```python
print(not(x < z))
```
    False

<h3>Kimlik operatorleri</h3>

* iki değerin aynı obje ve bellekte tutuluş şekillerinin ayın olmasına göre kıyaslar.

* `is` ve `is not` ile kimlik kontrolü yapılabilir.

* `is` ile `==` ya da `is not` `!=` ile  aynı şeyler değildir birisi birebir aynı obje olup olmamasına göre çalışır diğeri değerlerinin aynı olması yeterlidir.

  <table style="width:100%">
    <tr>
      <th  width="100px">operatör</th>
      <th>isim</th>
      <th>kullanım</th>
     
    </tr>
    <tr>
      <td>is</td>
      <td>iki değerin aynı obje olup olmadığını sorgular</td>
      <td>x is y</td>
    </tr>
    <tr>
      <td>is not</td>
      <td>iki objenin birbirinden farklı olmasını sorgular</td>
      <td>x is not y</td>
    </tr>
  </table>

<b>örnekler ile kimlik kontrol operatörleri:</b>

```python
x = [1,2,3]
y = [1,2,3]
z = x
```
```python
print(x is y)
```
    False
```python
print(x is not y)
```
    True
```python
print(x is z)
``` 
    True
```python
print(x == y)
```
    True
gördüğünüz gibi x ve y aynı değerleri olmasına rağmen `iş`de `False` dönduruyor fakat `==` operatörü `True` dönüyor.

<h3>Üyelik Operatörleri</h3>

* bir objede başka  bir objenin içinde  olup olmadığını sorgular

  <table style="width:100%">
    <tr>
      <th  width="100px">operatör</th>
      <th>işlem</th> 
      <th>açıklama</th>
      <th>kullanım</th> 
    </tr>
    <tr>
      <td>in</td>
      <td>içinde mi ?</td>
      <td>objenin bir objeye sahip olup olmadığını sorgular</td>
      <td>x in y</td>
    </tr>
    <tr>
      <td>not in</td>
      <td>içinde değil mi?</td>
      <td>objenin bir objeye sahip olup olmadığını sorgular</td>
      <td>x not in y</td>
    </tr>
  </table>

<b>örnekler ile üyelik operatörleri:</b>

```python
x = [1,2,3,"ali"]
y = [1,2,3]
z = [1,2,3,"ali"]
o = 1
```
```python
print(x in y)
```
    False
```python
print(x not in y)
```
    True
```python
print(x in z)
```
    False 
```python
print(o in z)
```
    True

<h1></h1>

<h3>Bitsel Operatörler</h3>

* bitsel operatörler `binary` sayıları kıyaslamak için kullanılır.


