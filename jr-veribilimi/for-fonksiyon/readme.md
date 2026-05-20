## Fonksiyonları Obje Olarak Kullanmak

* Python'da fonksiyonların `first class function` olduklarını konuşmuştuk.

* Şimdi bu mantığı kullanarak belirli fonksiyonları listenin elemanlarına uygulayacağız.


```python
l = [1,2,3,4]
```


```python
def apply(l, f):
    """
    l bir liste, 
    f listenin tüm elemanlarına uygulanacak fonksiyon
    sonunda listenin orijinali elemanlarına fonksiyonun uygulanmış haliyle güncellenir
    """
    
    n = len(l)
    
    for i in range(n):
        l[i] = f(l[i])
```


```python
def kare(x):
    return x**2
```


```python
apply(l, kare)
```


```python
l
```




    [1, 4, 9, 16]



* Tüm elemanlara fonksiyon uygulandı ve güncelledik.


```python
l = [1,2,3,4]
```


```python
def kup(x):
    return x**3
    
```


```python
apply(l, kup)
```


```python
l
```




    [1, 8, 27, 64]



### Fonksiyonlar Listesini Belirli Bir Değere Uygulamak


```python
def apply_funcs(f_list, x):
    l = []
    for f in f_list:
        l.append(f(x))
        
    return l
```


```python
apply_funcs([kare, kup], 5)
```




    [25, 125]


