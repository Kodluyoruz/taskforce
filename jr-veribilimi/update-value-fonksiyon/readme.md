# Argümanların Değerlerinin Güncellenip Güncellenmediği Durumlar

## Integer ve Floatların Değerlerin Değişmez


```python
a = 2
```


```python
def f(x):
    x = 4
    return x
```


```python
f(a)
```




    4




```python
a
```




    2




```python
b = 3.4
```


```python
f(b)
```




    4




```python
b
```




    3.4



## listler


```python
l = [1,2,3]
```


```python
l2 = l.copy()
```


```python
l2
```




    [1, 2, 3]




```python
l
```




    [1, 2, 3]




```python
l2[0] = 10
```


```python
l2
```




    [10, 2, 3]




```python
l
```




    [1, 2, 3]




```python
def f(l):
    l[0] = "a"
    return l
```


```python
f(l)
```




    ['a', 2, 3]




```python
l
```




    ['a', 2, 3]



def f(l):
    l = ["a", "b", "c"]
    #l[0] = ["a", "b", "c"]
    return l


```python
l = [1,2,3]
```


```python
def f(x):
    
    x[0] = 2
    
    return x
    
```


```python
def f(penguin):
    
    penguin[0] = 2
    
    return penguin
    
```


```python
f(l)
```




    [2, 2, 3]




```python
l
```




    [2, 2, 3]




```python
l = [1,2,3]
```


```python
def f(x):
    
    l2= x.copy()
    l2[0] = 2
    
    return l2
    
```


```python
f(l)
```


```python
l
```
