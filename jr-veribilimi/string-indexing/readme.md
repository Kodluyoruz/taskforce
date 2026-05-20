## Indexing (Elemanlara Erişme)

* Stringlerin non-scalar veri tiplerine örnek olduğunu konuşmuştuk. Stringler elemanları karakter olan, alt birim olarak karakterler içeren bir veri tipi.

* Stringler karakterler dizisi olduğu için, bu dizideki spesifik konumdaki elemanlara erişmek isteyebiliriz. Mesela string'in ilk karakteri nedir gibi.

* Bir yapının alt elemanına erişmek için yapacağımız işleme `indexing` deniyor. Bunu köşeli parantez `[]` ile sağlayacağız

* `isim` diye bir değişken oluşturup, string'e eşitleyip, ilk elemanına(karakterine) erişelim.


```python
isim = "Deniz"
```


```python
isim[1]
```

> 'e'

```python
"Deniz"[1]
```

> 'e'

* Wow ne oldu ?

* Python'da indexler `0`dan başlıyor. Yani biz ilk elemana ulaşmak istiyorsak `[0]` ile sorgulamamız lazım

```python
isim[0]
```

> 'D'

* İkinci eleman için de `[1]`

```python
isim[1]
```

> 'e'

* Aynı şeyleri string'i bir değişkene atamadan da yapabilirdik

```python
"Deniz"[0]
```

> 'D'

```python
"Deniz"[1]
```

> 'e'

* Son elemanı elde etmek için `[-1]` yazabiliriz

```python
isim[-1]
```

> 'z'

* Sondan ikinci için `[-2]`

```python
isim[-2]
```

> 'i'

* `Deniz` 5 karakterden oluşuyor. Indexleri 0,1,2,3,4. Eğer ben 4 ten büyük bir index verirsem o indexte bir elemanı olmadığı için hata alırım

```python
len(isim)
```

> 5

```python
isim[4]
```

> 'z'

```python
isim[5]
```

    ---------------------------------------------------------------------------
    
    IndexError                                Traceback (most recent call last)
    
    <ipython-input-13-f0339b205fca> in <module>
    ----> 1 isim[5] 
    IndexError: string index out of range


```python
isim[10]
```

    ---------------------------------------------------------------------------
    
    IndexError                                Traceback (most recent call last)
    
    <ipython-input-15-f25549abd903> in <module>
    ----> 1 isim[10]
    IndexError: string index out of range

- Stringlerin elemanlarının değiştirilemez olduğundan bahsetmiştik (immutable). O yüzden şöyle şeyler yapamayız: (elemanlarını değiştirebildiğimiz non-scalar veri tiplerini de göreceğiz)

```python
isim
```

> 'Deniz'

```python
isim[0] = "b"
```

    ---------------------------------------------------------------------------
    
    TypeError                                 Traceback (most recent call last)
    
    <ipython-input-17-59044b134158> in <module>
    ----> 1 isim[0] = "b"


    TypeError: 'str' object does not support item assignment

## Slicing (Dilimleme)

- Indexing ile sonuç olarak sadece bir eleman elde ettik. Ama birkaç tanesini arka arkaya, bir öbek olarak istiyorsam ne yapardım?

- Diyelim ki ilk elemandan başlayarak 3. elemana kadar olan karakterleri elde etmek istiyorum (0. indexten 3. indexe kadar olanları)


```python
isim
```

> 'Deniz'

```python
# Burada önemli olan nokta ilk belirtilen indexing dahil edilip son olarak yazılanın dahil edilmemesi
# 0,1,2 indexlerindekileri döndürdü sonuç olarak

isim[0:3]
```

> 'Den'

* `başlangıç:bitiş` olarak veriyoruz ve bitiş olarak verdiğimiz index **dahil olmuyor**. Başlangıcı belirtmezsek Python default olarak başlangıç değerini 0 alıyor.


```python
isim[:3]
```

> 'Den'

* Bitişi belirtmezseniz Python String'in sonuna kadar alıyor, bu sefer son elemanını da dahil ediyor.

```python
isim[1:]
```

> 'eniz'

```python
isim[0:]
```

> 'Deniz'

```python
isim[:]
```

> 'Deniz'

* Slicing yaparken bitiş olarak verdiğimiz değer en büyük indeximizden büyükse hata almayız, sadece sonuna kadar almış olur (sadece indexing yaparken en büyük indexten büyük değer verince hata alıyorduk.)

```python
len(isim)
```

> 5

```python
isim[1:20]
```

> 'eniz'

```python
isim[1:200]
```

> 'eniz'

```python
isim[1:]
```

> 'eniz'

* `başlangıç:bitiş` olarak slicing yapabileceğimiz gibi, `başlangıç:bitiş:adım` formunda da slicing yapabiliriz. Burada `adım` parametresi kaçar kaçar gideceğimizi belirler.

```python
isim
```

> 'Deniz'

```python
isim[0:10:2]
```

> 'Dnz'

```python
isim[0:10:3]
```

> 'Di'

- Adım eksi bir değer de olabilir. Böylece ters yönce gitmiş oluruz. Ama başlangıç değerinin bitiş değerinden büyük olması lazım bunu yapabilmem için.

```python
# 0. indexten 10. indexe 2 azalarak gidemez, o yüzden boş string döndürür
isim[0:10:-1]
```

> ''

```python
isim[10:0:-1]
```

> 'zine'

```python
isim[::-1]
```

> 'zineD'

```python
isim[::-2]
```

> 'znD'
