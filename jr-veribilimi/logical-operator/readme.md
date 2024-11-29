## Mantıksal Operatörler (Logical Operators)

* Verilerimizle nasıl karşılaştırma yapabileceğimizi gördük. Bunların cevaplarını birleştirmek isteyebiliriz. İki ifadenin sonucu da doğru olunca bir şey yapmak veya en az biri doğruyken bir şey yapmak isteyebilirim. 

* Bunu sağlayabilmek için `boolean` veri tipleri üzerine uygulanabilecek mantıksal operatörlere bakacağız

* Göreceğimiz mantıksal operatörlerinin uygulandığı veri tipleri `boolean` olmalı

## `not`


```python
not True
```

> False




```python
not False
```

> True




```python
not 5 < 6
```

> False




```python
not 5 == 5
```

> False




```python
a = 4
b = 10
```


```python
not a < b
```

> False




```python
not (a > b)
```

> True



## `and`

* Sadece iki ifade de `True` ise `True` sonucu verir, yoksa `False` olur


```python
True and True
```

> True




```python
True and False
```

> False




```python
False and False
```

> False




```python
a = 4
b = 1
c = 10
```


```python
(a > b) and (b < c)
```

> True




```python
(a > b) and (b > c)
```

> False



## `or` 

* Sadece iki ifade de `False` ise `False` sonucu verir, yoksa `True` olur


```python
True or True
```

> True




```python
True or False
```

> True




```python
False or False
```

> False




```python
a = 4
b = 1
c = 10
```


```python
(a > b) or (b < c)
```

> True




```python
(a > b) or (b > c)
```

> True




```python
(a < b) or (b > c)
```

> False



