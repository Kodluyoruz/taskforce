## Ternary Conditionals

* `Ternary Conditionals` aslında daha önce yapamadığımız bir şeyi yapabilmemize olanak sağlamayacak. `if-else` mantığını tek satırda kullanıp döndürülecek sonucu ona göre belirlememizi sağlayacak.

* Diyelim ki belirli bir durumu test edip,`x` değişkeninin değerini bu testin sonucuna göre belirlemek istiyorum. Soruya cevabım "y" olursa değeri 2'ye, yoksa 0'a eşitleyeceğim.

```python
# cevap olarak "y" (yes->evet) veya "n"(no->hayır) vereceğiz
cevap = input("x in değeri 2 olsun mu? y/n")

if cevap == "y": # cevap == "y" testimiz oluyor
    x = 2
else:
    x = 0

print(x)
```

    > x in değeri 2 olsun mu? y/nn
    > 0

- Bunun aynısını tek satırda şu şekilde yapabilirdik:

```python
cevap = input("x in değeri 2 olsun mu? y/n")
```

```python
x = 2 if cevap=="y" else 0
```

```python
print(x)
```
    2

- Hatta daha düzenli bir şekilde:

```python
cevap = input("x in değeri 2 olsun mu? y/n")
```

> x in değeri 2 olsun mu? y/ny

```python
condition = cevap == "y"
```

```python
x = 2 if condition else 0
```

```python
x
```

> 2
