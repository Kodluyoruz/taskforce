# Temel Veri Tipleri (Basic Data Types)

- Bilgisayarların belirli inputlar ile bir işlem yapabilmeleri için öncelikle bu inputları bilgisayarın anlayacağı şekilde ifade edip tutmalıyız. Bu amaçla ilk olarak Python dilindeki temel veri tiplerine bakacağız.

## Integers (tam sayılar)

- Integer'ler küsuratı olmayan, *1,2,3,4* gibi sayılardır.

`2`

```python
3
```
* Integer'ler negatif değerler de alabilir

```python
-3
```

* Nasıl tam sayılarda aritmetik işlemler yapıyorsak integerlarla da yapabiliriz

```python
2 + 2
```

> 4

```python
8 - 2
```

> 6

```python
2*2
```

> 4

## Floats (Kesirli Sayırlar)

* Float'lar küsuratı olan, virgülden sonra (kodlarda **.** olarak göreceğiz, o yüzden sayılarda nokta gördüğünüzde virgülden sonrası diye düşünebilirsiniz)değerler barındıran veri tipleridir. *1.3,2.4,3.3,4.6* gibi sayılardır. 3.0 gibi sayıların virgülden sonrası 0 olabilir, ama virgül mantığını ortaya koyduğumuz için bu sayılar yine de float sayılacaktır.

```python
2.3
```

```python
2.0
```

```python
-4.5
```

- Nasıl kesirli aritmetik işlemler yapıyorsak float'larla da yapabiliriz

```python
2.3 + 3.4
```

> 5.7

```python
8.4 - 2.2
```
> 6.2

```python
2.2 * 2
```
  
> 4.4
 
## Boolean

* Daha ileriki konularda if-else mantığını gördüğümüzde daha iyi oturacak bir veri tipi. Özetle bir şeyin doğru (True) veya yanlış (False) olduğunu belirten bir yapı


```python
True
```

```python
False
```

```python
2 > 3
```

> False

```python
2 < 3
```
  > True

## type()

* Objelerin tiplerine `type()` ile bakabiliriz

```python
type(2)
```

> int

```python
type(2.3)
```
> float

```python
type(True)
```

> bool

## Type Casting (Tip Dönüştürmesi)

- Data objelerinin tipini değiştirebiliyoruz, buna `casting` deniyor

```python
int(2.4)
```

> 2

* Burada olan işlem sayıyı yuvarlama işlemi değil, sadece tam kısmını alıyoruz

```python
int(2.9)
```
> 2

```python
float()
```

> bool
