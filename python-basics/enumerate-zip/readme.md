# Enumerate:

* `for` ile non-scalar yapılar içerisinde dolaşırken ya elemanları ya da indexleri üzerinde dolanmıştık, ama neden ikisi de aynı anda olmasın?

* Variable Unpacking konusunda bir tuple, liste gibi yapıların değerlerini birden çok değişkene bir seferde eşitlemeyi görmüştük.

* Bunun aynısını iterasyonda da yapabiliriz.


```python
l = [(1,2), (10,20)]
```


```python
for e in l:
    print(e)
```

    (1, 2)
    (10, 20)
    


```python
for e in l:
    a, b = e
    print(a)
    print(b)
    print("*********")
```

    1
    2
    *********
    10
    20
    *********
    


```python
for a, b in l:
    print("tuple'ın ilk elemanı", a)
    print("tuple'ın ikinci elemanı", b)
    print("-----------------------------")
```

    tuple'ın ilk elemanı 1
    tuple'ın ikinci elemanı 2
    -----------------------------
    tuple'ın ilk elemanı 10
    tuple'ın ikinci elemanı 20
    -----------------------------
    

* enumerate() bize (index, element) olarak verecek


```python
adlar = ['Tyler', 'Blake', 'Cory', 'Cameron']
```


```python
for e in adlar:
    print(e)
```

    Tyler
    Blake
    Cory
    Cameron
    


```python
for i, e in enumerate(adlar):
    print(i, "indexindeki eleman:", e)
```

    0 indexindeki eleman: Tyler
    1 indexindeki eleman: Blake
    2 indexindeki eleman: Cory
    3 indexindeki eleman: Cameron
    

* enumerate() 0'dan başlamak zorunda değil, özellikle kaçtan başlayacağını belirtebiliriz.


```python
for i, e in enumerate(adlar, start = 100):
    print(i, "lokasyonunda bulunan eleman:", e)
```

    100 lokasyonunda bulunan eleman: Tyler
    101 lokasyonunda bulunan eleman: Blake
    102 lokasyonunda bulunan eleman: Cory
    103 lokasyonunda bulunan eleman: Cameron
    

## zip()

* Farklı yapıların içinde paralel iterasyon yapmamızı sağlar. `zip()`


```python
ogrenciler = ["ogrenci_1", "ogrenci_2", "ogrenci_3"]
```


```python
notlar = [90,80,72]
```


```python
for s, g in zip(ogrenciler, notlar):
    print(s, g)
```


```python
for e in zip(ogrenciler, notlar):
    print(e)
```


```python
for i in range(len(ogrenciler)):
    print(ogrenciler[i], notlar[i])
```

### zip() Örnek:


```python
# Her ayki karı hesaplamak
satis = [3500.00, 76300.00, 67200.00]
maliyet = [56700.00, 21900.00, 12100.00]
for i in range(len(maliyet)):
    s = satis[i]
    c = maliyet[i]
    
    kar = s - c
    print(f'Total profit: {kar}')
```

    Total profit: -53200.0
    Total profit: 54400.0
    Total profit: 55100.0
    


```python
satis = [3500.00, 76300.00, 67200.00]
maliyet = [56700.00, 21900.00, 12100.00]
for s, c in zip(satis, maliyet):
    kar = s - c
    print(f'Total profit: {kar}')
```

    Total profit: -53200.0
    Total profit: 54400.0
    Total profit: 55100.0
    

### zip() ile Dictionary Yaratmak:


```python
keys = ['isim', 'soyad', 'ulke', 'is']
values = ['Denis', 'Walker', 'Turkey', 'data scientist']
```


```python
d = {}
for k, v in zip(keys, values):
    d[k] = v
```


```python
d
```




    {'isim': 'Denis', 'soyad': 'Walker', 'ulke': 'Turkey', 'is': 'data scientist'}




```python
d["isim"]
```
