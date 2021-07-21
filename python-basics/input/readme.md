
## Input

- Bazen kullanacağımız değeri kullanıcıdan almak isteyebiliriz. Bunu `input` metodu ile yapacağız
- `input`'un içinde yazacağımız bize kullanıcıya gösterilecek yazıyı verecek, kullanıcıdan girdi bekleyip enter'a basmasını bekleyecek, ve girdiyi var sayılan tür olan **string** olarak döndürecek.
- `input` olarak allacagimiz veri uzerinde `Type Conversion (tür değişikli)` yapabiliriz. Bu yapmak için `int()`, `float()`, `list()` gibi fonksiyonları kullanabiliriz.


```python
x = input("Bir sayı girin:")
```

> Bir sayı girin:10

```python
print(x + 10)
```
    ---------------------------------------------------------------------------
    
    TypeError                                 Traceback (most recent call last)
    
    <ipython-input-51-dacbb30d0a09> in <module>
    ---->  x + 10
    TypeError: can only concatenate str (not "int") to str

`integer` + `string` yapamaz, bu yüuzden `Type Conversion` yapmamız gerekiyor.

```python
print(type(x))
```

> str

```python
print(int(x) + 10)
```

> 20

```python
x = int(input("Bir sayı girin:"))
```

    Bir sayı girin:10

```python
print(x + 10)
```

> 15

```python
mesaj = input("Mesajı girin :")
```

> Mesajı girin :Merhaba

```python
isim = input("İsim girin :")
```

> İsim girin :Ulaş

```python
print(mesaj + " " + isim)
```

> 'Merhaba Ulaş'
