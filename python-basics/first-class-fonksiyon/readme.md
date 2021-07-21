## First Class Function

* Python'da fonksiyonlar `first class function`. Bunun anlamı fonksiyonların diğer veri tipleri gibi manipüle edilebilir ve başka fonksiyonlara argüman olarak verilebilir.

* Bir fonksiyonu bir değişkene atayabiliriz.


```python
def kare(x):
    return x**2
```


```python
a = kare
```


```python
print(kare(5))
```




    25




```python
print(a(5))
```




    25



<b> Bir fonksiyonu başka bir fonksiyona argüman olarak verebiliriz. </b>


```python
def kare(x):
    return x**2

def f2(x, f):
    return f(x) + 4
```


```python
print(f2(3,kare))
```
    f2(3,kare)

    return kare(3) + 4

    13 #sonuç




```python
def f3(x):
    return x**5
```


```python
print(f2(2, f3))
```
    f2(2, f3)

    return f3(2) + 4

    36 #sonuç


