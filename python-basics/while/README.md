## `while`

* `while` döngüsünün içine yazdığım yapı belirttiğim ifade doğru olduğu sürece çalışacak.
* `while`'da da `if`'te olduğu gibi bir test mantığı var aslında. **Testimiz doğru çıktığı sürece `while` bloğunun içindeki kodları tekrarlıyorum**
* `while` ın içindeki kodu python anlasın diye, `if` te yaptığımız gibi iç kısmına boşluk bırakarak yazacağız.
* Örnek olarak kullanıcıdan pozitif bir sayı bekleyen, negatif sayı girildikçe bir daha soran bir yapıyı düşünelim. Burada bir döngü mantığına ihtiyacımız var çünkü kullanıcının kaç defa negatif sayı gireceğini önceden bilmiyoruz.


```python
x = int(input("Bir sayı girin: "))

while x < 0:
    print("Sayı negatif, lütfen pozitif bir sayı girin.")
    x = int(input("Bir sayı girin: "))
    
print("sayınız pozitif ve", x)
```

    Bir sayı girin: -5
    Sayı negatif, lütfen pozitif bir sayı girin.
    Bir sayı girin: -12
    Sayı negatif, lütfen pozitif bir sayı girin.
    Bir sayı girin: -3
    Sayı negatif, lütfen pozitif bir sayı girin.
    Bir sayı girin: 6
    sayınız pozitif ve 6



```python
x = 0

while x < 3:
    print(x)
    x = x + 1

    
```

    0
    1
    2

* Diyelim ki 0'dan 100'e kadar olan sayıların toplamını bulmak istiyorum ve o kadar sayısı elle yazmak istemiyorum


```python
toplam = 0
x = 0

while x <=100:
    toplam += x
    x +=   1
print(toplam)
```

    5050

* Döngümün içinde kontrol ettiğim yapıyı güncelleyecek bir ifadenin olması lazım yoksa sonsuz döngüye girerim

```python
toplam = 0
x = 0

while x <=100:
    toplam += x
    print(x)

print(toplam)
    
```

    0
    0
    0
    0
    0
    .
    .


