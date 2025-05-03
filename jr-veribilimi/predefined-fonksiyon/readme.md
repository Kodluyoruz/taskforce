# Predefined Parameters


```python
def hello(end, start = "Hello"):
    
    print(start + " " +  end)
```


```python
hello("Denis")
```

    Hello Denis



```python
hello("Denis", start = "Hey")
```

    Hey Denis



```python
hello("Denis","Hey")
```

    Hey Denis



```python
hello("Denis")
```

    Hello Denis



```python
def power(x, y=1):
    
    return x ** y
```


```python
power(3)
```




    3




```python
power(4, 2)
```




    16




```python
# Aksini belirtmezsek predefined değerleri kullanacak fonksiyon
# predefined olarak vereceğimiz değerleri en sona yazmalıyız yoksa hata alırız
def hello(start = "Hello", end):
    
    print(start + end)
```


      File "<ipython-input-11-3e7ef8b7d5fb>", line 3
        def hello(start = "Hello", end):
                 ^
    SyntaxError: non-default argument follows default argument




```python
def f(x, y=1, z=2):
    
    return x + y + z
```


```python
f(2)
```




    5




```python
f(2,5)
```




    9




```python
f(2,5,6)
```




    13


