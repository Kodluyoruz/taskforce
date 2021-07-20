# Dictionaries

* Listeler bize bir arada tutulması anlamlı olacak verileri bir arada tutma gücü verir.

* Mesela bir sınıftaki 3 öğrencinin sınavdan aldıkları notlar:

```python
notlar = [80,72,95]
```

- Bu listedeki 1. eleman ilk öğrenciyi, 2. eleman 2. öğrenciyi, 3. eleman... 

- Ben aynı zamanda bu öğrencilerin isimlerini de tutmak istiyorsam, isimleri için ayrı bir liste oluşturmam lazım. Kuracağım mantık için bu iki listenin eleman sayısı aynı olmalı. notlar[0] bana ilk öğrencinin notunu, isim[0] bana ilk öğrencinin notunu verecek.

```python
isim = ["Deniz", "Ege", "Gizem"]
```

```python
print(isim[0])
```

    'Deniz'

```python
print(notlar[0])
```

    80

```python
print(isim[0], "adlı öğrencinin notu", notlar[0])
```

    Deniz adlı öğrencinin notu 80

- Öğrenci numaralarını tutmak istiyorsam bunu için de ayrı bir liste oluşturmam lazım.

```python
no = [703, 408, 690]
```

```python
isim[0]
```

```python
notlar[0]
```

```python
no[0]
```

- Her farklı bilgi için yeni bir liste oluşturmam gerekiyor.

- Aynı elemanı ifade eden mantıklar listeler arası aynı indexte tutuluyor. (isim[0]'ın notu notlar[0])

- Bu yapılabilir ama optimal olmayan bir yaklaşım. Karışıklık çıkması çok muhtemel.

- İstediğim kısmı almanın daha kolay bir yolu olabilir mi? Sadece bir veri yapısı kullansam... Ayrı ayrı listeler kullanmasam...

- Evet bunu yapabiliriz! Bunun için `dictionary` veri yapısını göreceğiz.

- `Dictionary` yapısının elemanlarına erişmek için belirli `key`ler kullanacağız ve o da bize `value`'lar verecek.

- dictionary'leri süslü parantez `{}` ile belirteceğiz. 

- Formumuz `{key1:value1, key2:value2...}` şeklinde olacak.

- Elemanlarına ulaşmak için öbür non-scalar veri tiplerinde yaptığımız gibi `[]` kullanacağız. Ama - `dictionary`'lerin elemanlarına ulaşmak için belirlediğimiz `key`leri kullanacağız, integer indexing değil.

- `dictionary`'lerin keyleri `immutable` herhangi bir yapıda olabilir. `value`'lar `mutable` da `immutable` da olabilir. 
`immutable yapilar:` int, float, tuple, string, bool, frozenset.
`mutable yapilar:` list, set, dictionary.
```python
notlar = {"Deniz": 80, "Ege":72, "Gizem": 95}
```

```python
notlar["Ege"]
```

    72

```python
notlar["Gizem"]
```

    95

iç içe geçmiş sözlüklerde:
```python
ogrenciler = {"Deniz": {"not": 80, "ogrenci_no": 703}, "Ege": {"not": 72, "ogrenci_no": 408},"Gizem": {"not": 95, "ogrenci_no": 690}}
```

```python
ogrenciler["Ege"]
```

    {'not': 72, 'ogrenci_no': 408}

```python
ogrenciler["Ege"]["not"]
```

    72

```python
ogrenciler["Ege"]["ogrenci_no"]
```

    408




    

## Olmayan Bir Eleman Sorgulamak

- Olmayan bir key ile eleman sorgusu yaparsak hata alırız.

```python
notlar
```

    {'Deniz': 80, 'Ege': 72, 'Gizem': 95}

```python
notlar["Mert"]
```

    ---------------------------------------------------------------------------
    
    KeyError                                  Traceback (most recent call last)
    
    <ipython-input-28-34561f410cad> in <module>
    ----> 1 notlar["Mert"]

    KeyError: 'Mert'

## Integer Indexing ile Eleman Sorgusu Yapmak

- Dictionary'ler `key-value` mantığı ile çalışıyor. O yüzden biz `notlar[0]` gibi bir sorgu yaptığımızda, `0` diye bir key var mı diye bakıyor yoksa hata veriyor.

```python
notlar[0]
```

    ---------------------------------------------------------------------------
    
    KeyError                                  Traceback (most recent call last)
    
    <ipython-input-22-f9b97209b450> in <module>
    ----> 1 notlar[0]

    KeyError: 0

## Value Değerlerini Değiştirmek

- Diyelim ki Ege'nin notu yanlış okunmuş, notunu 5 puan arttıracağız.

```python
notlar = {'Deniz': 80, 'Ege': 72, 'Gizem': 95}
```


```python
notlar["Ege"] = notlar["Ege"] + 5
```

```python
print(notlar["Ege"])
```

    77

```python
print(notlar)
```
```python
{'Deniz': 80, 'Ege': 77, 'Gizem': 95}
```

## len()

- len() fonksiyonunu dictionary'lerde kullandığımız zaman bize kaç tane item varsa onun sayısını veriyor.

```python
notlar = {'Deniz': 80, 'Ege': 77, 'Gizem': 95}
```


```python
print(len(notlar))
```

    3

## Eleman Eklemek

- Dictionary'lere eleman eklemek gerçekten kolay. Tamam yazmayı bırakıp direkt göstereyim:
- dictionary_ismi[key] = value

```python
notlar = {'Deniz': 80, 'Ege': 77, 'Gizem': 95}
```

```python
notlar["Mert"] = 58
```

```python
print(notlar)
```
```python
{'Deniz': 80, 'Ege': 77, 'Gizem': 95, 'Mert': 58}
```

- Dictionary'ye sorgu yapıyor gibi yazıyoruz, ve `value`'si olmasını istediğimiz değeri de soluna yazıyoruz.

## Eleman Silmek

```python
notlar = {'Deniz': 80, 'Ege': 77, 'Gizem': 95, 'Mert': 58}
```
- Eleman silmeyi `del` keyword'u kullanarrak veya `pop()` methodu kullanarak yapabiliriz.

`del` keyword'u kullanarrak:
```python
del notlar["Mert"]
```

```python
print(notlar)
```
```python
{'Deniz': 80, 'Ege': 77, 'Gizem': 95}
```
`pop()` methodu kullanarak:
```python
notlar.pop("Mert")
```
```python
print(notlar)
```
```python
{'Deniz': 80, 'Ege': 77, 'Gizem': 95}
```
## Sadece Immutable Tipindeki Veriler `key` olabilir.

```python
d = {1:2, 3:"b"}
```

```python
print(d[1])
```

    2

```python
print(d[3])
```

    'b'

```python
d2 = {(1,2):"a", (4,5): [1,2,3]}
```

```python
print(d2[(1,2)])
```

    'a'

```python
print(d2[(4,5)])
```
```python
[1, 2, 3]
```

```python
d3 = {[1,2]:4}
```

    ---------------------------------------------------------------------------
    
    TypeError                                 Traceback (most recent call last)
    
    <ipython-input-48-304c7804ca22> in <module>
    ----> 1 d3 = {[1,2]:4}

    TypeError: unhashable type: 'list'
bu hatayı düzetmek için liste formatı yerine tuple formatı kullanmak gerekiyor.

## Boş Bir Dictionary Yaratmak

```python
d = {} veya d = dict()
```

```python
print(d)
```

    {}

```python
d[1] = "a"
```

```python
print(d)
```
```python
{1: 'a'}
```

## Bir Değer Keyler Arasında Var mı Sorgusu Yapmak

- Bir elemanın dictionary içinde olup olmadığını sorgulamak, list ve tuple'lerde sorgulamaktan daha hızlıdır.

```python
notlar = {'Deniz': 80, 'Ege': 77, 'Gizem': 95}
```
```python
"Mert" in notlar
```

    False

```python
"Deniz" in notlar
```

    True
```python
"Deniz" not in notlar
```
    False
## Dictionary Methodları
- Dictionary methodları Python'da önceden tanımlanmıştır.
- Dictionaryler üzerinde daha kolay işlem yapmak için methodları kullanabiliriz.
- Bunların hepsi `dict.method_isimi()` şeklinde çağırılabilir.
<h2></h2>

```python
meslekler = {"Deniz": "Mühendis", "Ege": "Mimar", "Gizem": "doktor"}
```
<h2></h2>

`dict.keys()` methodu, dictionary'i içindeki key'leri döndürür.
```python
print(meslekler.keys())
```

```python
dict_keys(['Deniz', 'Ege', 'Gizem'])
```
<h2></h2>

`dict.values()` methodu, dictionary'i içindeki değerleri döndürür.
```python
print(meslekler.values())
```
```python
dict_values(['Mühendis', 'Mimar', 'doktor'])
```
<h2></h2>

`dict.items()` methodu, dictionary'i içindeki elemanları döndürür.
```python
print(meslekler.items())
```
```python
dict_items([('Deniz', 'Mühendis'), ('Ege', 'Mimar'), ('Gizem', 'doktor')])
```
<h2></h2>

`dict.clear()` methodu, dictionaryin icindeki tüm elemanları siler.
```python
meslekler.clear()
```
```python
print(meslekler)
```
```python
{}
```
<h2></h2>

`dict.copy()` methodu, dictionary icindeki tüm elemanların kopyasını döndürür.
```python
print(meslekler.copy())
```
```python
{'Deniz': 'Mühendis', 'Ege': 'Mimar', 'Gizem': 'doktor'}
```
<h2></h2>

`dict.fromkeys()` methodu, `meslekler` dictionary'isini `key`'leri ile birlikte oluşturur.
```python
yeni_dict = dict.fromkeys(["Deniz", "Ege", "Gizem"])
```
```python
print(yeni_dict)
```
```python
{'Deniz': None, 'Ege': None, 'Gizem': None}
```
su an değerleri None sonradan yazılabilir.
<h2></h2>

`dict.get()` methodu, `meslekler` dictionary'isi içinde `key`'i bulup değerini döndürür.
```python
print(meslekler.get("Deniz"))
```
```python
Mühendis
```
<h2></h2>

`dict.popitem()` methodu, `meslekler` dictionary'isi içindeki son itemi siler.
```python
meslekler.popitem()
```

```python
print(meslekler)
```
```python
{'Deniz': 'Mühendis', 'Ege': 'Mimar'}
```
<h2></h2>

`dict.update()` methodu, deger eklemek istediğimiz dictionaryiye baska bir dictionary'i ekler.
```python
yeni_dict = {"ali": "polis","esra": "veteriner"}    
```
```python
meslekler.update(yeni_dict)
```
```python
print(meslekler)
```
```python
{'Deniz': 'Mühendis', 'Ege': 'Mimar', 'Gizem': 'doktor', 'ali': 'polis', 'esra': 'veteriner'}
```
<h2></h2>

`dict.setdefault()` methodu, `meslekler` dictionary'isi içinde `key`'i bulup değerini döndürür. Eğer `key`'i bulamadıysa, `default` değeri döndürür.
```python
print(meslekler.setdefault("Deniz", "Bilgisayar"))
```
```python
Mühendis
```
eger Deniz diye bir key olmasaydi `Bilgisayar` değerini döndürdü.
