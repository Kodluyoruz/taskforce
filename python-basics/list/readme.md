# List

- Elimizdeki verileri gruplamak bir yapı altında tutmak isteyebiliriz.

- Mesela bir sınıftaki öğrencilerin notlarını tutmak istiyorum. 5 farklı öğrenci var, şimdiye kadar öğrendiklerimizle şöyle yapabilirdim:

```python
ogrenci_1 = 78
ogrenci_2 = 80
ogrenci_3 = 43
ogrenci_4 = 65
ogrenci_5 = 90
```

- Bunların hepsi bir sınıftaki notları ifade ediyor. Bunları bir veri tipi olarak bir arada tutsak daha mantıklı olmaz mı?

- `list` veri tipi de tam burada devreye giriyor. **Birden çok veriyi gruplayıp bir arada tutmak** istediğimizde kullanabileceğimiz bir yapıdır.

- `list`ler belirtirken köşeli parantezle belirtiyoruz: `[element1, element2,...]`.

- `list`ler içsel yapı içerdikleri için `non-scalar` veri tipidir.

- Elemanları arasına virgül koyarak farklı eleman belirtmeye başladığımı ifade ediyorum.

```python
notlar = [78, 80, 43, 65, 90]
```


```python
# bunun aynısını şu şekilde de tutabilirdik:

notlar = [ogrenci_1, ogrenci_2, ogrenci_3, ogrenci_4, ogrenci_5]
```

- Bu oluşturduğumuz yapının ilk elemanı ilk öğrencinin notu, ikinci elemanı ikinci öğrencinin notunu belirtiyor (bu mantık böyle devam ediyor). Böylece öğrencilerin notlarını farklı 5 değişkende tutmak yerine bir veri tipi altında düzenli tutabilmiş olduk.

- Nasıl ki stringlerde elemanlarına indexleme yaparak [0] gibi değerlerle ulaşabiliyorsak, listlerde de aynı durum söz konusu.

- `notlar` listesinin ilk elemanına ulaşmak için:

```python
# ogrenci_1 in notu
notlar[0]
```

- `list`'lerin içine istediğimiz veri tipini koyabiliriz. listeleri sadece verilerimi içine koyduğumuz bir kutu olarak düşünün, listlerin tek yaptığı şey bunları bir arada tutmak. Elemanları istediğim veri objesi olabilir. int, float, string, hatta listler bile!

```python
["a","b"]
```

```python
[True, False]
```

```python
[[1,2], [3,4,5]]
```

## Listler Farklı Veri Tiplerini İçerebilir

- Aynı list'in içine farklı tipte veri tipleri koyabiliriz.


```python
l = [1, 2, "a", "b", True, 4.5, [1,2,3]]
```


```python
l
```

## Indexing ve Slicing

- String konusunda yaptığımız indexleme mantığı ve slicing mantığı tamamen listler için de geçerli.

```python
notlar
```

```python
notlar[0]
```

```python
notlar[-1]
```

```python
notlar[10]
```

```python
notlar[-1]
```

```python
notlar[1:]
```

```python
notlar[1:3]
```

```python
notlar[:200]
```

```python
notlar[:3000]
```

## Listlerin Elemanları Değiştirilebilir

- Listler `mutable` veri tipleridir. Elemanlarını güncelleyebiliriz.


```python
notlar
```

- Diyelim ki ikinci öğrencinin notunu eksik okuduk. 5 puan yükseltmek istiyoruz:


```python
notlar[1] += 5 # notlar[1] = notlar[1] + 5
```


```python
notlar
```

- Birden çok elemanı da değiştirebiliriz.


```python
l = [1, 2, 3, 4]
```


```python
l[0:3]
```


```python
l[0:3] = 30, 40, 60
```


```python
l
```

- Eşit sayıda vermemiz de gerekmez, l[0:3] olacak yere sadece solda yazdığımız yazılır.

```python
l[0:3] = 30, 40
```


```python
l
```

```python
l = [1, 2, 3, 4]
```

```python
l[0:3] = 30
```

- Slicing'in sonucuna tek bir değer yazacaksak bile direkt tek olarak veremeyiz, `iterable` olması gerekir. Bunun ayrıntısını ileride göreceğiz şimdilik sol tarafı list olarak verebileceğimizi bilmeniz yeterli.


```python
l[0:3] = [30]
```


```python
l
```

## len()

* Bize list'te kaç eleman olduğunu verir.


```python
l
```


```python
len(l)
```

## Listin Sonuna Eleman Eklemek

### append()

* İçine yazılan elemanı listenin sonuna ekler.


```python
l = [1,2,3]
```


```python
l.append(200)
```


```python
l
```

### extend()

* İçine yazılan birden çok elemanı listenin sonuna ekler.


```python
l = [1,2,3]
```


```python
l.extend([100,200,300])
```


```python
l
```

## Spesifik Bir Indexe Eleman Eklemek

* Belki list'in sonuna değil, spesifik bir indexine eleman eklemek istiyoruz. Bunu inser() ile yapabiliriz.


```python
l = [1, 2, 3, 4, 5]
```


```python
l[0] = 100
```


```python
l
```


```python
l = [1, 2, 3, 4, 5]
```


```python
l.insert(0, 100) # is not l[0] = 100
```

* eğer l[0] = 100 yazmış olsaydık, liste 100,2,3,4,5 e dönerdi, ama ben 1->100 dönüşümü yapmak istemiyorum, ilk indexe 100'ü eklemek istiyorum. l.insert(0,100) tam da istediğimi yapıyor. 0. indexe 100 değerini yazıyor ve `1` değerini sağa kaydırıyor, listeden silmemiş oluyor.


```python
l
```


```python
l.insert(3,44)
```


```python
l
```

## remove()

- Belirli bir elemanı listeden silmemize yarar. Eğer yazılan eleman listede yoksa error verir.


```python
l = [1,2,3,4]
```


```python
l.remove(40)
```

Bunu try-except ile çözebiliriz ama daha o konuyu görmedik. Yine de aşağıya kodu ekliyorum.

```python
try:
    l.remove(40)
except ValueError:
    pass
    
``` 

- remove() sadece ilk gördüğü değeri siler. l.remove(40) dersem ve listede 1'den çok 40 varsa ilk gördüğünü siler.


```python
l = [1,2,3,40,30,40]
```


```python
l.remove(40)
```


```python
l
```

## pop()

- listenin belirli indexindeki elemanı silmeye ve o değeri döndürmeye yarar.

- remove() sadece siliyordu, pop() aynı zamanda o değeri döndürüyor.


```python
l = [1,2,3,4,5,6]
```


```python
# It deletes and return the value, remove() just removes it
l.pop(1)
```


```python
l
```


```python
l = [1,2,3,4,5,6]
```


```python
l.pop(1) + 4
```


```python
l
```


```python
# out of range error
l.pop(100)
```

## count()

- `count()`'un içine yazdığımız değerin listede kaç defa göründüğünü döndürür.


```python
l = [1, 2, 44, 4, 5, 1]
```


```python
l.count(1)
```


```python
l.count(44)
```


```python
l.count(1000)
```

## Aliasing

- Evet. Geldik olayların ilginç bir hal aldığı yere.

- Listeler bilgisayarın hafızasında integer, float gibi veri tiplerinin tutulduğundan biraz daha farklı tutuluyor. 

- a = 2 dediğimiz zaman hafızada `a` adında bir kutucuk oluşturuluyor demiştik.


```python
a = 2
```


- `a` direkt o kutunun adı oluyor.

- Ama listelerde durum böyle değil. l = [1,2,3] gibi bir liste yarattığımızda, `l` kutunun adı değil, kutuyu işaret eden etiketin adı oluyor.


```python
l = [1,2,3]
```


- Bu farkın getirdiği bazı yan etkiler var.

- Mesela kutunun adı direkt değişken adı olduğunda ve aşağıdaki işlemi yaptığımızda:


```python
a = 2

b = a
```


```python
b
```


```python
a = a + 1
```


```python
a
```


```python
b
```

* `a` yı güncellesek de `b` güncellenmiyor. `b` sadece `a` kutusunun değerine eşit olmuş oldu, kutunun kendisine değil.

* Aynısını listlerde yaptığımızda:


```python
l = [1,2,3]
```


```python
l2 = l
```


```python
l
```


```python
l2
```


```python
l[0] = 200
```


```python
l
```

```python
l2
```

* **l2 de güncellendi!**

* Çünkü `l2 = l` dediğimizde l2, l etiketinin değerine eşit oldu, iki etikette aynı kutuyu, veri objesini gösteriyor, o yüzden listeyi güncellemem ikisine de yansıyor.


* Git aynı değerle başka bir kutucuk yarat ve oraya etiket ol diyerek güncellenmemesini sağlayabilirim.

* Bunu `copy()` ile yapacağız.



```python
l2 = l.copy()
```


```python
l
```


```python
l2
```


```python
l[0] = 300
```


```python
l
```

```python
l2
```

## Listlerde Concatenation

- `+` operatörü listlerde concatenation yapar.

```python
l = [1,2,3]
```


```python
l2 = [4,5,6]
```


```python
l
```


```python
l2
```


```python
l + l2
```


```python
l
```


```python
l2
```


```python
l3 = l + l2
```


```python
l3
```

## Belirli Bir Elemanın Indexini Bulmak


```python
l = [1, 2, 3, 4, 3, 5, 6]
```


```python
l
```


```python
# İlk hangi indexte görünüyorsa onun değerini döndürür.
l.index(3)
```


```python
l.index(4)
```


```python
# listede olmayan değerler için error verir.
l.index(100)
```

## List'i Tersine Çevirmek


```python
l = [1,2,3,4]
```


```python
l.reverse() # inplace: yani l'yi günceller.
```


```python
l
```


```python
l = [1,2,3,4]
```

- Aynısını slicing mantığı ile de yapabilirdik.


```python
l[::-1]
```


```python
l
```


```python
l3 = l[::-1]
```


```python
l3
```


```python
l
```

* Orijinalini güncellemiyor, güncellemesi için variable assignment yapmamız lazım.

```python
l = l[::-1]
```


```python
l
```

## List'in Elemanlarını Sıralamak (sorting)

* sorted() orijinal listeyi güncellemez.

* sorted() ve .sort() a bakacağız. İkisi de default olarak küçükten büyüğe sıralar. Sayısal verilerde sayısal değerine göre, stringlerde alfabetik sıraya göre sıralar.


```python
l = ["b","a","c"]
```


```python
sorted(l)
```

    ['a', 'b', 'c']

```python
l
```

    ['b', 'a', 'c']

```python
l3 = sorted(l)
```

```python
l3
```

    ['a', 'b', 'c']

- `.sort()` günceller

```python
l = ["b","a","c"]
```

```python
l.sort() # inplace
```

```python
l
```

    ['a', 'b', 'c']

```python
l = [1,2,10,3,-1]
```

```python
sorted(l)
```

    [-1, 1, 2, 3, 10]

```python
l
```

    [1, 2, 10, 3, -1]

```python
# küçükten büyüğe sıralar
l.sort()
```

```python
l
```

    [-1, 1, 2, 3, 10]

```python
l = ["b","a","c","1","3","4"]
```

```python
l.sort()
```

```python
l
```

    ['1', '3', '4', 'a', 'b', 'c']

```python
l = [1,3.1,2,0.6]
```

```python
l.sort()
```

```python
l
```

    [0.6, 1, 2, 3.1]

```python
l = ["b","a","c",1,2]
```

```python
l.sort()
```

    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    <ipython-input-152-fb07ac7c73ab> in <module>
    ----> 1 l.sort()
    

    TypeError: '<' not supported between instances of 'int' and 'str'

```python
l = ["b","a","c","1","3.5","4","5.6", "0.6"]
```

```python
l.sort()
```

```python
l
```

    ['0.6', '1', '3.5', '4', '5.6', 'a', 'b', 'c']

```python
l = [[1,-20,3], [2,-200,-3]]
```

```python
l.sort()
```

```python
l
```

    [[1, -20, 3], [2, -200, -3]]

```python
l = [[10,-20,-3], [2,-2,3]]
```

```python
l.sort()
```

```python
l
```

    [[2, -2, 3], [10, -20, -3]]

```python
l = [[10,-20,-3], [10,-25,3]]
```

```python
l.sort()
```

```python
l
```

    [[10, -25, 3], [10, -20, -3]]

```python
l = [["a", "b", "c"], [2,-200,-3]]
```

```python
l.sort()
```

    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    <ipython-input-169-fb07ac7c73ab> in <module>
    ----> 1 l.sort()
    

    TypeError: '<' not supported between instances of 'int' and 'str'

```python
l
```

    [['a', 'b', 'c'], [2, -200, -3]]

```python
l = [[200, "b", "c"], [2,-200,-3,10]]
```

```python
l.sort()
```

```python
l
```

    [[2, -200, -3, 10], [200, 'b', 'c']]

```python
l = [[200, "b", "c"], [200,-200,-3,10]]
```

```python
l.sort()
```

    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    <ipython-input-175-fb07ac7c73ab> in <module>
    ----> 1 l.sort()
    
    TypeError: '<' not supported between instances of 'int' and 'str'
