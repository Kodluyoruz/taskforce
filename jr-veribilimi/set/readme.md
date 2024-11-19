# Set

- Setleri kümeler olarak düşünebiliriz.

- Sadece özgün değerleri tutan, içerisinde bir eleman var mı yok mu, başka bir setle hangi elemanları farklı gibi işlemleri performanslı bir şekilde yapabileceğimiz bir veri yapısıdır.

- Dictionary'ler gibi eleman sorgusu yapmak hızlıdır. Dictionarylerde key-value çift olarak bulunduğu için aynı uzunluktaki bir `set`ten daha fazla yer kaplar.

- Setler indexlenemez.

- Setler `mutable`'dır.

## Set yaratma


```python
s = {1,2,3,4,5}
```


```python
s
```

    {1, 2, 3, 4, 5}

```python
s2 = {1,2,2,2,1,4,5,6}
```

```python
s2
```

    {1, 2, 4, 5, 6}

- Boş set yaratma:

```python
a = {}
```

```python
type(a)
```

    dict

```python
s = set()
```

```python
s
```

    set()

```python
l = [1,2,3,4]
```

```python
s = set(l)
```

```python
s
```

    {1, 2, 3, 4}

```python
l = [1,2,3,4,1,2]
```

```python
set(l)
```

    {1, 2, 3, 4}

```python
# Boş bir seti {} ile yaratamayız,çünkü bu boş bir dictionary yaratmak için ayrılmış
s = {}

type(s)
```

## Setler Sadece Özgün Değerlerden Oluşur

- Setin içinde bir elemanı birden çok göremezsiniz.


```python
l = [1,2,3,4,1,2]
```


```python
# Sadece farklı değerlerden `s` yi oluşturacak.
s = set(l)
```


```python
s
```


```python
t = (1,2,3,4,1)
```


```python
s = set(t)
```


```python
s
```

    {1, 2, 3, 4}

```python
message = "Merhaba, orda mısın?"
```

```python
# Strinleri kullanarak da set oluşturabiliriz.
s = set(message)
```

```python
# " " (boşluk) karakterini de sayıyor.
# setler sıralı değildir.
s
```

    {' ', ',', '?', 'M', 'a', 'b', 'd', 'e', 'h', 'm', 'n', 'o', 'r', 's', 'ı'}

## len()

```python
s = set([1,2,3,4,5])
```

```python
s
```

    {1, 2, 3, 4, 5}

```python
len(s)
```

    5

```python
t = (1,2,3,3,2)
```

```python
set(t)
```

    {1, 2, 3}

```python
len(set(t))
```

    3

## Setler Indexlenemez

```python
s
```

    {1, 2, 3, 4, 5}

```python
s[0]
```

    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    <ipython-input-61-c9c96910e542> in <module>
    ----> 1 s[0]
    

    TypeError: 'set' object is not subscriptable

## Set'e Eleman Ekleme

```python
s = {1, 2, 3, 4, 5}
```

```python
s.add(6)
```

```python
s
```

    {1, 2, 3, 4, 5, 6}

```python
# Bu kod bir error vermeyecek, ama 5 zaten sette olduğu için eklemeyecek de
s.add(5)
```

```python
s
```

    {1, 2, 3, 4, 5, 6}

## Set'ten Eleman Silmek

```python
s
```

    {1, 2, 3, 4, 5, 6}

```python
s.remove(2)
```

```python
s
```

    {1, 3, 4, 5, 6}

```python
# add()'in aksine, remove() hata veriyor.
s.remove(9)
```

    ---------------------------------------------------------------------------

    KeyError                                  Traceback (most recent call last)

    <ipython-input-70-6bd3b47dfec1> in <module>
          1 # add()'in aksine, remove() hata veriyor.
    ----> 2 s.remove(9)
    

    KeyError: 9

```python
s
```

    {1, 3, 4, 5, 6}

```python
# Eğer hata silmek istediğimiz eleman yoksa hata almak istemiyorsak, discard()'ı kullanabiliriz.
s.discard(10)
```

```python
s
```

    {1, 3, 4, 5, 6}

```python
s.add(10)
```

```python
s
```

    {1, 3, 4, 5, 6, 10}

```python
s.discard(10)
```

```python
s
```

    {1, 3, 4, 5, 6}

## Difference (fark)

* Evet geldil şimdi kümelerdeki fark konusuna. s1 kümesi ile s2 kümesinin farkına bakacağız. (s1 – s2) veya (s1 \ s2)

```python
s1 = set([1,5,10])
```

```python
s2 = set([2,5,3])
```

```python
# s1 in hangi elemanları s2 den farklıdır.
s1.difference(s2)
```

    {1, 10}


```python
# '-' operatörü setlerde kullanıldığında bize farkı verir.
s1 - s2
```

    {1, 10}

```python
# s2 nin hangi elemanları s1 den farklıdır
s2.difference(s1)
```

    {2, 3}

```python
s2 - s1
```

    {2, 3}


## Symmetric Difference

* s1'in s2 den farkı ile s2'nin s1 den farkının birleşimi. (s1 \ s2) U (s2 \ s1)  - > s1 U s2 - (s1 n s2)

U -> Birleşim

n -> kesişim


```python
s1
```

    {1, 5, 10}

```python
s2
```

    {2, 3, 5}

```python
# (s1 \ s2) U (s2 \ s1)  - > A U B - (A n B)
s1.symmetric_difference(s2)
```

    {1, 2, 3, 10}

```python
# (s2 \ s1) U (s1 \ s2) same as (s1 \ s2) U (s2 \ s1)
s2.symmetric_difference(s1)
```

    {1, 2, 3, 10}

## Intersection (kesişim)


```python
s1
```

    {1, 5, 10}

```python
s2
```

    {2, 3, 5}

```python
s1.intersection(s2)
```

    {5}

```python
s2.intersection(s1)
```

    {5}

```python
# `&` operatörü setlere uygulanınca kesişim olur
s1 & s2
```

    {5}

```python
# Bu işlem kesişim ile aynı sonucu verecek
s1 - (s1-s2)
```

    {5}

```python
s1
```

    {1, 5, 10}

```python
# kesişim yapıp s1 in değerini buna günceller
s1.intersection_update(s2) # s1 = s1.intersection(s2)
```

```python
s1
```

    {5}

## Union (Birlerşim)



```python
s1 = set([1, 5, 10])
```

```python
s1
```

    {1, 5, 10}

```python
s2
```




    {2, 3, 5}




```python
s1.union(s2)
```




    {1, 2, 3, 5, 10}




```python
s1
```




    {1, 5, 10}




```python
s1.union(s1)
```




    {1, 5, 10}



## Disjoint Sets

* s1 ∩ s2 =  Ø olup olmadığını kontrol eder 


```python
s1
```




    {1, 5, 10}




```python
s2
```




    {2, 3, 5}




```python
s3 = set([12,11])
```


```python
s3
```




    {11, 12}




```python
# s1 ∩ s2 ≠  Ø(boş küme) değil, o yüzden False döner
s1.isdisjoint(s2) 
```




    False




```python
s2.isdisjoint(s1) 
```




    False




```python
s1.isdisjoint(s3) 
```




    True




```python
len(s1.intersection(s2)) == 0
```




    False



## Subset (Alt küme)

* s1.issubset(s2), s1'in s2'nin alt kümesi olup olmadığını kontrol eder


```python
s1
```




    {1, 5, 10}




```python
s2
```




    {2, 3, 5}




```python
s1.issubset(s2)
```




    False




```python
s3 = set([2,5])
```


```python
s3
```




    {2, 5}




```python
s3.issubset(s2)
```




    True



## Superset (üst küme)

* s2.issuperset(s3) s2'nin s3'ün üst kümesi olup olmadığını sorgular

```python
s1
```

    {1, 5, 10}

```python
s2
```

    {2, 3, 5}

```python
s3
```

    {2, 5}

```python
s2.issuperset(s3)
```

    True

```python
s2
```

    {2, 3, 5}
