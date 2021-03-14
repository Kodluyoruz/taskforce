## String'lerde Değer Atama(Variable Assignment)

- Sayısal veri tiplerinde nasıl ki değer atayabiliyor, verilerin değerlerine isim verebiliyorsak, aynısını stringler için de yapabiliyoruz.

```python
merhaba = "Merhaba nasılsın bugün?"
```

```python
print(merhaba)
```

> Merhaba nasılsın bugün?

## String Concatenation

- Operatörlerin uygulandıkları objelere göre değişik şeyler ifade edebileceğini konuşmuştuk.

- `+` operatörü sayısal veri tipleri üzerine etki edince toplama işlemi yapıyor. Ama uygulandığı objeler `string` ise yapacağı işlem `concatenation` (birleştirme) olacak. İki string'i art arta birleştirecek.

- En çok karıştırılan durumlardan biri `string` olarak ifade edilen sayıları `+` operatörüne sokmak.

```python
"5" + "4"
```

> '54'

- Python tırnak işareti içinde verdiklerimize karater olarak davrandığı için artık 5 ve 4 ü sayı olarak algılamıyor. `+` işlemi burada artık bu iki değeri yan yana koy demek, topla demek değil!

```python
"hey"+"nasılsın?"
```

> 'heynasılsın?'

- `+` operatörünün tek yaptığı birleştirmek, stringlerde boşluk(space) olmadığı için ifadenin sonucu boşluksuz çıktı.


```python
"hey" + " nasılsın?"
```

> 'hey nasılsın?'

```python
"hey" + " " + "nasılsın?"
```

> 'hey nasılsın?'

* Aynısını değer ataması yaparak da yapabilirdik

* Diyelim ki karşılama mesajı yazmak istiyoruz. İsim ve karşılama kısmını ayrı tutacağız. Çünkü belki karşılayacağımız kişinin ismi değişecek ve ben kodumda sadece o değeri değiştirerek karşılama mantığını korumaya devam edeyim istiyorum.

```python
mesaj = "Merhaba"
```

```python
isim = "Berkay"
```

```python
mesaj + " " + isim
```

    'Merhaba Berkay'

* Bu ifadenin değerini de başka bir değişkende tutabilirdik

```python
karsilama = mesaj + " " + isim
```

```python
print(karsilama)
```

> Merhaba Berkay



## Successive Concatenation(Ardışık Birleştirme)

* `*` operatörü sayı objeleri için çarpım olarak tanımlanmışken, stringler için ard arda birleştirme işlemi yapıyor.

```python
4 * "hey"
```

> 'heyheyheyhey'

```python
"1" + "0" * 10
```

> '10000000000'

## len()

* Bu metod ile (metodları ileride ayrıntılı olara göreceğiz), elimizdeki string'in kaç karakterden oluştuğunu öğrenebiliriz (boşluklar da karakter olduğu için onlar da sayılıyor)


```python
len("4")
```

> 1

```python
len("42")
```

> 2

```python
len("hey")
```

> 3

```python
len("hey!")
```

> 4

```python
len("hey nasılsın?")
```

> 13

```python
len(" ")
```

> 1

```python
len("")
```

> 0
