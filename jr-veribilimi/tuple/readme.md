# Tuple

* `tuple` veri tipi listeler gibi birden çok veri tipini bir arada tutmamızı sağlar.

* listelerden farklı olarak `tuple`'lar `immutable`'dır

* Mesela bir deniz fenerinin konumunu belirtmek istiyoruz. Bunun `x` ve `y` koordinat değerleri var (x,y). Deniz fenerini söküp götüremiyoruz, ben bu iki değerin sabit, değiştirilemez olmasını istiyorum. Burada bu iki değeri tutmak için `tuple` kullanmam mantıklı olabilir. Değişmeyeceğini bildiğim değerleri bir arada tutmak için.

* `tuple`'lar `(element1,element2...)` şeklinde tanımlanır.

* `tuple`'lar listeler gibi farklı veri yapılarında elemanlardan oluşabilir. Elemanları `tuple` bile olabilir.

```python
x = 10
y = 34
```

```python
konum = (10, 34)
```

* Aynı listelerdeki gibi indexleme yapabiliyoruz.

```python
konum[0]
```

    10

```python
konum[:]
```

    (10, 34)

* Ama değerlerini değiştiremiyoruz.

```python
konum[0] = 100
```

    ---------------------------------------------------------------------------
    
    TypeError                                 Traceback (most recent call last)
    
    <ipython-input-7-62043221042e> in <module>
    ----> 1 konum[0] = 100


    TypeError: 'tuple' object does not support item assignment

- Farklı veri tipleri barındırabiliyor.

```python
t = (1,2,3,"a")
```

```python
t
```

    (1, 2, 3, 'a')

```python
t = ((1,2),3)
```

```python
t
```

```python
t[0]
```

    (1, 2)

```python
t[1]
```

    3

```python
t = ([1,2,3],2,(1,2))
```

```python
t
```

    ([1, 2, 3], 2, (1, 2))

```python
t[0][0] = 23
```

```python
t
```

    ([23, 2, 3], 2, (1, 2))

```python
l = [[1,2,3], [10,20]]
```

```python
l
```

    [[1, 2, 3], [10, 20]]

## Elemanların Değerlerini Değiştirmek

- Diyelim ki x ve y'nin değerlerini değiştirmek istiyorum.


```python
x = 2
y = 3
```

- bunu şöyle yapabiliriz.

```python
temp = x
x = y
y = temp
```

```python
x
```

    3

```python
y
```

    2

* Ama bunu tuple'lar ile 1 satırda yapabiliriz.

```python
x = 2
y = 3
```

```python
(x, y) = (y, x)
```

```python
x
```

> 3

```python
y
```

> 2

- parantez koymamıza da gerek yok. 1,2,3,"a"... gibi parantezsiz belirtsek de Python onu `tuple` olarak görüyor.

```python
1,2,3,4
```

> (1, 2, 3, 4)

```python
a = 1,2,3,4
```

```python
a
```

> (1, 2, 3, 4)

```python
type(a)
```

> tuple

```python
x = 2
y = 3
```

```python
x, y = y, x
```

```python
x
```

> 3

```python
y
```

> 2

```python
x = 2
y = 3
```

```python
[x, y] = [y, x]
```

```python
x
```

> 3

```python
y
```

> 2
