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
kare(5)
```




    25




```python
a(5)
```




    25



* Bir fonksiyonu başka bir fonksiyona argüman olarak verebiliriz.


```python
def f2(x, f):
    return f(x) + 4
```


```python
f2(3,kare)
```




    13




```python
def f3(x):
    return x**5
```


```python
f2(2, f3)
```




    36


