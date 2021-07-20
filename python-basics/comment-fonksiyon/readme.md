# kodlara  yorum satırı eklemek

* yorum satırları python tarafından değerlendirmeye alınmaz ve kodun işleyişi etkilemez.
* iki farklı yorum  satırı çeşidi vardır,birincisi tek satırlar için,ikincisi,çoklu satırlar için.
```python
#tek satırda yorum satırı eklemek için # kullanılır

"""
birden fazla satır için kod satırı eklemek için 3 tırnak açıp tekrar 3 tırnak kullanarak kapatılır
"""
```

```python
def square(x):
    #tek satırlı yorum
    res = x * x
    
    return res #buraya da yazılabilir
```




```python
def square(x):
    """
    x'in 
    karesini 
    hesaplar
    """
    return x * x
```
