# return

* Bir fonksiyonu çalıştırdığımızda onun sonucuyla bir şeyler yapmak isteyebilirim. Sonucu bana versin diye özellikle söylemem lazım, bunu `return` keyword'ü ile sağlayacağız

* `return` yazmasaydık fonksiyon hiç bir şey döndürmezdi

* fonksiyon tanımladığımı python'a anlatmak için yapım:


`def fonksiyonun_adı(input):`

* öbür yapılarda da olduğu gibi, bir kod bloğunun belirttiğimiz yapıya ait olduğunu anlatmak için boşluk bırakarak içine yazmamız gerekiyor

* Verdiğimiz değerin karesini alan bir fonksiyon yazalım


```python
def square(x):
    x*x
```

* fonksiyonu tanımladıktan sonra tanımladığımız adla onu çağırabiliriz. yapımız şöyle olacak: `fonksiyonun_adı(inputlar)`, bir fonksiyonu çağırmak için inputlarını `()`'ın içine yazmalıyız. Bazı durumlarda hiç input olmayabilir, bazı durumlarda birden çok olabilir.


```python
square(3)
```


```python
a = square(3)
```


```python
a
```


```python
print(a)
```

    None



```python
type(a)
```




    NoneType




```python
type(square(3))
```




    NoneType



* bize x*x i değer olarak vermedi. Vermesi için bana o değeri döndür diye özellikle söylemem lazım. Bunu `return` ile sağlıyoruz


```python
def square(x):

    return x * x
```


```python
square(2)
```




    4




```python
a = square(2)
```


```python
a
```




    4




```python
b = 4
```


```python
b + 2
```




    6



* Bu döndürülen değerin int 4 ten bir farkı yok, nereden nasıl geldiği önemli değil, a = 4 dediğimdeki 4 ile aynı. Bu değerle istediğimi yapabilirim


```python
1 + square(2)
```




    5



* Bilgisayar için o da sadece bir değerdi. Aşağıdaki örenekte de square(3) bize 9 döndürüyor, bilgisayar için aşağıdaki kod, `square(9)` ile aynı


```python
square(square(3))
```




    81



* hiç bir inputu olmaya da bilirdi


```python
def weird():
    return 5
```


```python
weird()
```




    5



* Fonksiyonlar return'e geldikten sonrasına bakmıyor, return ün sağına yazılan değeri veriyor ve fonksiyondan çıkıyor



```python
def square(x):
    
    res = x * x
    
    return res
    
    print("Square of " + str(x) + ": " + str(res))
    
   

```

* Bu yüzden burada bastırma kısmını yapmadı, çünkü o kod `return` ün altında


```python
square(4)
```




    16




```python
square(4) + 2
```




    18




```python
def square(x):
    
    res = x * x
    
    print("Square of " + str(x) + ": " + str(res))
    
    return res
    
    
    
   

```


```python
square(4)
```

    Square of 4: 16





    16



* Fonksiyona durumsallık da katabiliriz


```python
def f(x):
    
    res = x * x
    
    if x % 2 == 0:
        
        return res
    else:
        return res + 10
    
    print("Square of " + str(x) + ": " + str(res))
    
   

```


```python
f(10)
```




    100




```python
f(13)
```




    179



* Fonksiyonların içinde döngü mantığı da olabilir


```python
x = 300
```


```python
def f(x):
    
    res = x * x
    
    for i in range(10):
        res += 20
        return res
        print("hey")
```


```python
f(10)
```




    120




```python
f(10) + 23
```




    143




```python
def f(x):
    
    res = x * x
    
    for i in range(10):
        res += 20
        
    return res
```


```python
f(10)
```




    300




```python
def f(x):
    
    l = []
    res = x * x
    for i in range(10):
        res += 20
        l.append(res)
    return l
```


```python
f(10)
```




    [120, 140, 160, 180, 200, 220, 240, 260, 280, 300]



# Void Fonksiyonlar (Değer Döndürmeyen Fonksiyonlar)


```python
def f(x):
    x = 2
```


```python
f(2)
```


```python
f(10) + 4
```


    ---------------------------------------------------------------------------
    
    TypeError                                 Traceback (most recent call last)
    
    <ipython-input-85-abd191062736> in <module>
    ----> 1 f(10) + 4


    TypeError: unsupported operand type(s) for +: 'NoneType' and 'int'



```python
print(f(3))
```

    None



```python
type(f(3))
```




    NoneType




```python
# Bu kod x in karesini değer olarak bize vermiyor, sadece ekrana bastıracak
def square(x):
    
    print(x,"in/ün/un karesi:", x*x)
```


```python
square(3)
```

    3 in/ün/un karesi: 9



```python
type(square(4))
```

    4 in/ün/un karesi: 16





    NoneType




```python
# hem bir değer bastırıp aynı anda o değeri döndüre de bilirdi


def square(x):
    
    res = x * x
    
    print(x,"in/ün/un karesi:", x*x)
    
    return res

```


```python
square(4)
```

    4 in/ün/un karesi: 16





    16




```python
square(4) + 2
```

    4 in/ün/un karesi: 16





    18


