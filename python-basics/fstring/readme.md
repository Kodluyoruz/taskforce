## F-Strings

* Değişkenlerimizin değerlerini direkt olarak `string`'lerin içine koymak isteyebiliriz.

* `f-string` de yaptığımız tek şey aslında değişkenlerin değerlerini veya hesaplamaların sonucunu `string`in içine gömmek.

* f"..." diye göreceğimiz yapının adını **String Interpolation** diye görebilirsiniz.


```python
x = 2
```

* Diyelim ki ekrana x'in değerini bastırmak istiyorum. Bu durumda istediğim şey "x in değeri 2" diye bastırmak. Bunu şöyle yapabilirim:


```python
"x in değeri" + " " + str(x)
```

* Ama ayrı ayrı yazmaya ihtiyaç olmadan direkt x'in değerini `string`'in içine **gömebilseydim** daha iyi olmaz mıydı ?


```python
f"x in değeri {x}"
```




    'x in değeri 2'



* İçine değer gömeceğimiz string'i tanımlarken başına `f` yazarak başlıyoruz `f"...."`. Gömmek istediğimiz değeri/değişkeni süslü parantez içine yazıyoruz `f".....{}...."`. Birden çok değer de gömmek isteyebiliriz, o zaman kaç tane yapacaksak o kadar süslü parantez koymamız gerekirdi `f".....{}....{}.."`

* Python'ın yaptığı şey süslü parantezin içini hesaplayıp stringin içine gömmek


```python
f"x in değerinin iki fazlası {x+2}"
```




    'x in değerinin iki fazlası 4'



* `{x+2}` kısmında python `x+2`'yi hesapladı ve string'in içine cevabın değerini gömdü


```python
isim = input("İsim:")
```

    İsim:engin
    


```python
f"verilen isim {isim}"
```




    'verilen isim engin'




```python
l = [1,2,3,4]
```


```python
f"verilen liste {l}"
```




    'verilen liste [1, 2, 3, 4]'



* {} içerisine değeri hesaplanacak herhangi bir şey yazılabilir


```python
f"verilen isim {isim.capitalize()}"
```

* Süslü parantezin içine fonksiyon da yazabiliriz


```python
def kare(x):
    return x**2
```


```python
x = 10
f"{x} sayısının karesi {kare(x)}"
```
