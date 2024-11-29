### Operatörler ve İfadeler (Operators-Expressions)

- Objeler(**object**) ve operatörlerin(**operator**) birleşimi **expression**'ları oluşturur.

- Expression'ların değerleri (**value**)'ları vardır ve tabii ki de bunların tipleri vardır.

- İfadeler şöyler oluşturulur: **(object) (operator) (object)**

- Expression'ların tiplerini operator'un uygulandığı objelerin tipleri belirler. 

#### + operator

```python
# İki tane integer'ın toplamı integer verir.
2 + 2
```

> 4

```python
type(2+2)
```

> int

```python
# İki tane float'un toplamı float verir.
2.4 + 2.5
```

> 4.9

```python
type(2.4 + 2.5)
```

> float

- Eğer objelerden biri bile float ise toplama işleminde expression'un tipi float olur.

```python
2.4 + 3
```

> 5.4

```python
type(2.4 + 3) 
```

> float

#### - operator

```python
# İki tane integer'ın farkı integer verir.
3 - 2
```

> 1

```python
type(3-2)
```

> int

```python
# İki tane float'un farkı float verir.
2.6 - 2.1
```

> 0.5

```python
type(2 - 2.1)
```

> float

- Eğer objelerden biri bile float ise çıkarma işleminde expression'un tipi float olur.

```python
2.5 - 3
```

> -0.5

```python
type(2.5 - 3)
```

> float

#### * operator

```python
# İki tane integer'ın çarpımı integer verir.
3 * 2
```

> 6

```python
type(3*2)
```

> int

```python
# İki tane float'un çarpımı float verir.
2.6 * 2.4
```

> 6.24

```python
type(2.6 * 2.4)
```

> float

- Eğer objelerden biri bile float ise çarpma işleminde expression'un tipi float olur.

```python
2.5 * 3
```

> 7.5

```python
type(2.5 * 3) 
```

> float

#### / operator

- İşleme giren objelerin tipi ne olursa olsun cevap float olur.


```python
3 / 2
```

> 1.5

```python
3 / 1.5
```

> 2.0

```python
2.4 / 0.6
```

> 4.0

#### // operator (int division)

- Eğer işleme girenlerden biri bile float ise cevap float olur.


```python
5 // 2
```

> 2

```python
5 // 2.5
```

> 2.0

```python
4.2 // 5
```

> 0.0

```python
8.2 // 5
```

> 1.0

#### % operator (Remainder/kalan)

- Eğer kalan float ise cevap float olur yoksa integer olur.

```python
5 % 2
```

> 1

```python
10 % 3
```

> 1

```python
2.5 % 2
```

> 0.5

#### ** operator

- Üst alma işlemi yapar.

```python
2 ** 3
```

> 8

```python
3 ** 2
```

> 9

```python
2.4 ** 2
```

> 5.76

```python
5 ** -1
```

> 0.2

### print()

- Bazen sadece bazı değerleri bastırmak isteriz, bunun için `print()` metodunu kullanabiliriz

```python
print(5)
```

> 5
