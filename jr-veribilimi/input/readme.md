
## Input

- Bazen kullanacağımız değeri kullanıcıdan almak isteyebiliriz. Bunu `input` metodu ile yapacağız
- `input`'un içinde yazacağımız bize kullanıcıya gösterilecek yazıyı verecek, kullanıcıdan girdi bekleyip enter'a basmasını bekleyecek, ve girdiyi **string** olarak döndürecek

```python
x = input("Bir sayı girin:")
```

> Bir sayı girin:10

```python
x + 10
```
    ---------------------------------------------------------------------------
    
    TypeError                                 Traceback (most recent call last)
    
    <ipython-input-51-dacbb30d0a09> in <module>
    ----> 1 x + 10
    TypeError: can only concatenate str (not "int") to str

```python
type(x)
```

> str

```python
int(x) + 10
```

> 20

```python
x = int(input("Bir sayı girin:"))
```

    Bir sayı girin:10

```python
x + 10
```

> 15

```python
mesaj = input("Mesajı girin:")
```

> Mesajı girin:Merhaba

```python
isim = input("İsim girin:")
```

> İsim girin:Ulaş

```python
mesaj + " " + isim
```

> 'Merhaba Ulaş'
