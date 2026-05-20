# Artırma ve Azaltma Operatörleri
Artırma ve azaltma operatörleri temel anlamda sayı değerlerini artırma ve azaltmak amacı ile kullanılır.

### Operatörler
- Artırma Operatörü (++)
- Azaltma Operatörü (--)

**Örnek**

```
$a = 1;
$a++;
echo $a; // Ekrana 2 sonucunu yazar.
```

### Önceden Artırım

Artırma operatörü değişkenin başında kullanıldığında önce değişkenin değeri artırılır.

```
$a = 5;
echo ++$a; // Ekrana 6 sonucunu yazar.
echo $a; // Ekrana 6 sonucunu yazar.
```

### Sonradan Artırım

Artırma operatörü değişkenin sonunda kullanıldığında değişkenin değeri sonradan artar.

```
$a = 5;
echo $a++; // Ekrana 5 sonucunu yazar.
echo $a; // Ekrana 6 sonucunu yazar.
```

### Önceden Azaltma

Azaltma operatörü değişkenin başında kullanıldığında önce değişkenin değeri azaltılır.

```
$a = 5;
echo --$a; // Ekrana 4 sonucunu yazar.
echo $a; // Ekrana 4 sonucunu yazar.
```

### Sonradan Azaltma

Azaltma operatörü değişkenin sonunda kullanıldığında değişkenin değeri sonradan azalır.

```
$a = 5;
echo $a--; // Ekrana 5 sonucunu yazar.
echo $a; // Ekrana 4 sonucunu yazar.
```
