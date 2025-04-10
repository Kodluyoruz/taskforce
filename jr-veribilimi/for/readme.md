## `for`

* `for` döngüsü `in`'den sonra yazdığımız yapının bütün değerleri üzerinde dolanıp, eleman sayısı kadar içindeki kodu çalıştıracak. `x` `in` `<obje>` yapısı ile tanımlandığında, `x` döngünün her adımında `in` den sonra tanımlanan yapının elemanlarının değerlerini alacak.

`for` `<değişken>` in `<obje>`

* `for` döngüsünün en başında `<değişken>`, `<obje>`'nin ilk elemanının değerini alıyor. İçindeki kod 1 kere çalışıp bittikten sonra ikinci kere çalıştırıyor ve `<değişken>`, `<obje>`'nin ikinci elemanının değerini alıyor. Bu `<obje>`'nin tüm elemanları bitene kadar devam ediyor.

```python
for c in "hey":
    print(c)
```

    h
    e
    y

```python
toplam = 0

for x in range(101):
    toplam += x
print(toplam)
```

    5050

```python
for x in range(5):
    print(x)
```

    0
    1
    2
    3
    4


```python
toplam = 1
for i in range(5):
    toplam *=5
    
print(toplam)
```

    3125

```python
toplam = 1
for _ in range(5):
    toplam *=5
    
print(toplam)
```

## `for` vs `while`

* `while` yapısında kaç kere iterasyon yapacağımızı bilmiyoruz, `for`'da eleman sayısı kadar iterasyon var. (`break` veya `continue` ile bölünmezse)

* Aslında `for` döngüsünü `while` döngüsünü kullanarak yazabiliriz, ama `while` döngüsünü `for` kullanarak yazamayız, çünkü `for`'da test mekanizması yok.


```python
s = "hey"
```

```python
for c in s:
    print(c)
```

    h
    e
    y

```python
n = len(s)
index = 0

while index < n:
        print(s[index])
        index += 1
```

    h
    e
    y
