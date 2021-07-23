# String

* Şimdiye kadar sadece sayılar ile uğraştık. Bu notebook'ta yeni bir veri tipine, `String`'lere bakalım

* Stringler karakterlerden oluşan bir dizidir aslında. Stringlerin elemanları karakterlerdir.

* **Karakterler**: `(a,b,c,d...)` gibi harfler, `(*, ?, =, <, >, /...)`gibi özel karakterler, `(1,2,3...)` gibi yazı biçiminde sayılar, `boşluk(space)` karakter olarak adlandırılabilir. 

* **String**'ler `Karakter`lerden veya bunların kombinasyonlarından oluşabilirler.

* Bir şeyin `String` olduğunu belirtmek için yazacaklarımızı ikili tırnak `" "` veya tekli tırnak `'  '` içine yazarız

* birden fazla satırda string yazma için `""" """` veya `''' '''` kullanılır.

* Tırnak işaretlerinin yaptığı şey aslında: **Bu tırnak işaretlerinin içinde verdiğim diziye karakterler dizisi olarak davran, öyle algıla** demek.

* İkili tırnak içine de yazsak, tekli tırnak içine de yazsak aynı şekilde algılanır. Önemli olan hangisiyle başladıysak onunla bitirmek.

* Scalar ve Non-scalar objelerden bahsetmiştik. Non-scalar veri tiplerinin daha alt parçalara bölünebilen, elemanlar içeren yapılar olduğunu konuşmuştuk. `String` non-scalar bir veri tipi. İçsel yapı olarak karakterlerden oluşuyor.

* Stringler `immutable` veri tipidir

* **Immutable**: Elemanlarının değerleri değiştirilemez.


```python
print(5)
```

> 5
> 5 burada integer
```python
print("5")
```

> '5'
> burada ise string



```python
print("a")
```

> 'a'

```python
# Hangisiyle başladıysak onunla bitirmeliyiz
"a'
```


      File "<ipython-input-6-d24a784f7087>", line 2
        "a'
           ^
    SyntaxError: EOL while scanning string literal




```python
print("5")
```

> '5'




```python
# Burada +'ya operatör olarak davranılmıyor, yazı olarak davranılıyor.
print("5 + 10")
```

> '5 + 10'




```python
print(type('Hmm o zaman x=5 diyebilir miyiz?'))
```

> str




```python
print(type("5"))
```

> str




```python
print(type("5 + 10"))
```

> str



* Hangisiyle başladıysak onunla bitireceğimiz için kesme işareti ve alıntı yapmada hangisiyle başladığımız önemli olabilir (bu ayrımı nasıl yapacağım, buna göre mi tasarlayacağım diyenler için iyi haber - escape character kısmını işleyince daha iyi bir yolunu göreceğiz)


```python
"Bugün Kadıköy'e gidiyorum"
```



> "Bugün Kadıköy'e gidiyorum"




```python
'Bugün Kadıköy'e gidiyorum'
```


      File "<ipython-input-23-d2bbd68a7bc7>", line 1
        'Bugün Kadıköy'e gidiyorum'
                       ^
    SyntaxError: invalid syntax


```python
"Bana "Bugün Kadıköy'e gidiyorum" dedi"
```


      File "<ipython-input-25-c48935b23f4f>", line 1
        "Bana "Bugün Kadıköy'e gidiyorum" dedi"
                   ^
    SyntaxError: invalid syntax




```python
'Bana "Bugün Kadıköy'e gidiyorum" dedi'
```


      File "<ipython-input-26-fa5558f0396a>", line 1
        'Bana "Bugün Kadıköy'e gidiyorum" dedi'
                             ^
    SyntaxError: invalid syntax



## Escape Sequence

* escape sequence karakterleri python tarafından stringler içerisinde özel karakterlerdir ve değerlendirmeye alınırlar.

* örnek olarak \n, \t, \\", \' veya \\\ karakterleri kullanılabilir.


```python
"Bana \"Bugün ne yapıyorsun\" dedi"
```

> 'Bana "Bugün ne yapıyorsun" dedi'
```python
'Bugün Kadıköy\'e gidiyorum'
```

> "Bugün Kadıköy'e gidiyorum"
> burada " isareti sorun cikarmamasi için escape sequence kullanilmali.



```python
print("hey\nnasılsın")
```

> hey
>
> nasılsın
> `\n` ile yeni satira geciyoruz.

```python
print("hey\tnasılsın")
```

> hey nasılsın
> `\t` ile bir ASCII tab boşluk yapıyoruz.
```python
print("hmm \")
```


    > File "<ipython-input-32-98286fbc25b3>", line 1
        print("hmm \")
                      ^
    SyntaxError: EOL while scanning string literal
  escape sequence karakteri girmediğimiz için hata verdi.


```python
print("hmm \\")
```

> hmm \\
> `\` printlemek için 2 tane \ kullanıyoruz.
