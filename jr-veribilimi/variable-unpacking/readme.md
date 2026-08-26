# Variable Unpacking

* Şimdiye kadar hep tek değişkene tek değer verdik.

* Peki bir seferde birden çok değişkene değer vermek için ne yaparız?

* Aşağıdaki kodun sonucu, 

`x=4`

`y=7`

ile aynı


```python
x, y = (4, 7)
```


```python
x
```




    4




```python
y
```




    7



* 2'den çok değere de bunu yapabiliriz.


```python
x, y, z = (4, 7, 11)
```


```python
print(x, y ,z)
```

    4 7 11


## Bazı Değerlere İhtiyacım Yoksa:

* Diyelim ki soldaki yapının sadece birinci elemanına bir değer eşitleyip kullanmak istiyorum. Daha önce döngülerde yaptığımız gibi kulllanmayacağımız değişkene `_` diyebiliriz.


```python
x, _ = (4, 7)
```

## Sol ve Sağdaki Yapı Farklı Sayıdaysa:


```python
x, y, z = (4, 7, 11, 4, 21)
```


    ---------------------------------------------------------------------------
    
    ValueError                                Traceback (most recent call last)
    
    <ipython-input-67-483af8373571> in <module>
    ----> 1 x, y, z = (4, 7, 11, 4, 21)


    ValueError: too many values to unpack (expected 3)


* Bunu gidermek için `*` yapısını kullanacağız. Aşağıdaki kod şu demek oluyor: `İlk iki elemanı x ve y'ye eşitle, sonuna kadar kalan diğer tüm elemanları z'ye eşitle`. Bunun sonunda z 11,2,21'den oluşacak, tipi list olacak.


```python
x, y, *z = (4, 7, 11, 4, 21)
```


```python
x
```




    4




```python
y
```




    7




```python
z
```




    [11, 4, 21]




```python
type(z)
```




    list



* Diyelim ki ilk 2 'sini eşitleyip kalan hepsini görmezden gelmek istiyorum.


```python
x, y, *_ = (4, 7, 11, 12, 13)
```


```python
x
```




    4




```python
y
```




    7



* İlk 2 ve son değeri belirli bir değişkene, arada kalanların hepsini başka bir değişkene eşitlemek istiyorsam:


```python
x, y, *z, t = (4, 7, 11, 4, 21)
```


```python
x
```




    4




```python
y
```




    7




```python
z
```




    [11, 4]




```python
t
```




    21



* Aynı şekilde son 2'yi de belirtebiliriz.


```python
x, y, *z, t, u = (4, 7, 11, 4, 21, 32, 2)
```


```python
z
```




    [11, 4, 21]




```python
t
```




    32




```python
u
```




    2



* Ama aşağıdaki kod error verir, çünkü y ve t için kaç tane alacağını bilmiyor. 


```python
# It will give an error
x, *y, *t = (4, 7, 11, 4)
```


      File "<ipython-input-96-d7caec8953ac>", line 5
    SyntaxError: two starred expressions in assignment


