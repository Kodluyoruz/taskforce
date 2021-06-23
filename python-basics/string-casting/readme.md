## Stringlerde Casting


```python
a = "5"
```


```python
b = "5.3"
```


```python
int(a)
```

> 5




```python
float(b)
```

> 5.3




```python
int(b)
```


    ---------------------------------------------------------------------------
    
    ValueError                                Traceback (most recent call last)
    
    <ipython-input-5-07ae29993d50> in <module>
    ----> 1 int(b)ValueError: invalid literal for int() with base 10: '5.3'



```python
int(float(b))
```

> 5


