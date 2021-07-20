## F-Strings

* Değişkenlerimizin değerlerini direkt olarak `string`'lerin içine koymak isteyebiliriz.

* `f-string` de yaptığımız tek şey aslında değişkenlerin değerlerini veya hesaplamaların sonucunu `string`in içine gömmek.

* f"..." diye göreceğimiz yapının adını **String Interpolation** diye görebilirsiniz.


```python
x = 2
```

* Diyelim ki ekrana x'in değerini bastırmak istiyorum. Bu durumda istediğim şey "x in değeri 2" diye bastırmak. Bunu şöyle yapabilirim:


```python
print("x in değeri" + " " + str(x))
```

* Ama ayrı ayrı yazmaya ihtiyaç olmadan direkt x'in değerini `string`'in içine **gömebilseydim** daha iyi olmaz mıydı ?


```python
print(f"x in değeri {x}")
```




    'x in değeri 2'



* İçine değer gömeceğimiz string'i tanımlarken başına `f` yazarak başlıyoruz `f"...."`. Gömmek istediğimiz değeri/değişkeni süslü parantez içine yazıyoruz `f".....{}...."`. Birden çok değer de gömmek isteyebiliriz, o zaman kaç tane yapacaksak o kadar süslü parantez koymamız gerekirdi `f".....{}....{}.."`

* Python'ın yaptığı şey süslü parantezin içini hesaplayıp stringin içine gömmek


```python
print(f"x in değerinin iki fazlası {x+2}")
```




    'x in değerinin iki fazlası 4'



* `{x+2}` kısmında python `x+2`'yi hesapladı ve string'in içine cevabın değerini gömdü


```python
isim = input("İsim:")
```

    İsim:engin
    


```python
print(f"verilen isim {isim}")
```




    'verilen isim engin'




```python
l = [1,2,3,4]
```


```python
print(f"verilen liste {l}")
```




    'verilen liste [1, 2, 3, 4]'



* {} içerisine değeri hesaplanacak herhangi bir şey yazılabilir


```python
print(f"verilen isim {isim.capitalize()}")
```
`capitalize()` metodu ile isimin baş harfini büyük harfe çevirir.

* Süslü parantezin içine fonksiyon da yazabiliriz


```python
def kare(x):
    return x**2
```


```python
x = 10
print(f"{x} sayısının karesi {kare(x)}")
```
    
## R-Strings

* `r-string` `string`leri `raw (ham)` formatta yazmak için kullanılır.
 * mesela elinizde bir `path (dosya yolu)` olsun `"C:\top\naz\Desktop\Python-Basics"` eger bunu bu sekilde printlemeye calisirsaniz ciktiniz `"C:\top\naz\Desktop\Python-Basics"` bu sekilde olmayacaktir cunku pytonda `\n`, `\t`, `\r` gibi escape karakterleri python icinden ozel karakterler olarak kullanilir. ve ciktimizin hatali olmasina sebep olur. bunu duzeltmek icin `r"C:\top\naz\Desktop\Python-Basics"` seklinde kullanmamiz gerekir.

```python
path = "C:\top\naz\Desktop\Python-Basics"
print(path)
```
    C:	op
    az\Desktop\Python-Basics
istenmeyen cikti.
```python
path = r"C:\top\naz\Desktop\Python-Basics"
print(path)
```
    C:\top\naz\Desktop\Python-Basics
python icinden escape karakterleri kullanmadan cikti.