# Birden Çok Input

* Fonksiyonların birden çok parametresi olabilir.


```python
def square(x):
    return x *x
```


```python
square(3)
```




    9




```python
def power(x, y):
    
    return x ** y
    
```


```python
power(2, 3)
```




    8



# Birden Çok Değer Döndüren Fonksiyonlar


```python
def f(x):
    
    return 2*x, 10*x
```


```python
f(10)
```




    (20, 100)



* Bana sonucu tuple olarak döndürdü.

* Variable Unpacking kısmında gördüğümüz gibi bu iki değeri farklı değişkenlere eşitleyebilirim.


```python
a, b = f(10)
```


```python
a
```




    20




```python
b
```




    100




```python
def f(x,y):
    
    return 2*x*y, (10*x)**y
```


```python
f(10,2)
```




    (40, 10000)


