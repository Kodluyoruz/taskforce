# Pandas'a Giriş

Video Link: https://youtu.be/0xACW-8cZU0

Notebook Link: https://github.com/ine-rmotr-curriculum/freecodecamp-intro-to-pandas/blob/master/1%20-%20Pandas%20-%20Series.ipynb

## Pandas'a Giriş

Pandas; veriyi yüklemek, analiz etmek, temizlemek, işlemek ve görselleştirmek için kullanılan bir Python kütüphanesidir. Aşağıdaki kodla import ederek kullanmaya başlayabiliriz (Pandas'ı yüklemediyseniz cmd'den "pip install pandas" komutunu girerek yükleyebilirsiniz). <br>

```python
import pandas as pd
import numpy as np
```

### Pandas Series (Pandas Serileri)

Pandas Series, her değerin bir indekse sahip olduğu tek boyutlu bir array'dir. Örneğin; bir tablodaki bir sütunu bir Pandas Series olarak gösterebiliriz. Aşağıda bir sayı arrayi Pandas Series'e dönüştürülmüş:

```python
series = pd.Series([49, 43, 65, 40, 160])
```

Bir Series oluşturduk. Bu Seri'yi yazdıralım:

```python
series
```

```python
0     49
1     43
2     65
3     40
4    160
dtype: int64
```

Sağ sütunda serideki değerler, sol sütunda bu değerlerin serideki indeksleri, altta ise "dtype" yani veri tipi olarak "64 bit integer" yani serideki değerlerin "tam sayı" olduğu yazıyor. Dikkat ederseniz bu değerler aslında bir NumPy array olarak saklandığı için veri tipi tüm değerler için ortak. <br>

Bu değerler aslında birkaç pokemonun savunma güçlerinin değerleri! Serimize o zaman bir isim verelim. <br>

```python
series.name = "Pokemon Savunma Güçleri"
```

Seriyi yazdıralım, artık serinin ismi de yazdırılacak: 

```python
series
```

```python
0     49
1     43
2     65
3     40
4    160
Name: Pokemon Savunma Güçleri, dtype: int64
```

Seri, NumPy array'e benzer. Birçok ortak özellikleri vardır. <br>

Serinin veri tipini yazdıralım: 

```python
series.dtype
```

```python
dtype('int64')
```

Serinin değerlerini bir NumPy array olarak alabiliriz. <br>

```python
series.values
```

```python
array([ 49,  43,  65,  40, 160], dtype=int64)
```

Dediğimiz gibi her değerin bir indeksi var. İndeksleri seriyi yazdırdığımızda görebiliriz. Bir indeksteki değeri NumPy array'deki gibi alabiliriz. <br>

```python
series[1]
```

```python
43
```

İndeks değerlerini şöyle görebiliriz:

```python
series.index
```

```python
RangeIndex(start=0, stop=5, step=1)
```

Buradaki değerlerin 5 pokemonun savunma değerleri olduğunu söylemiştik. İndekslere de pokemon adlarını verelim!

```python
series.index = ["Bulbasaur", "Charmander", "Squirtle", "Pikachu", "Onix"]
```

Bu pokemonları bilmiyorsanız bir bakın derim. Seriyi tekrar yazdıralım. <br>

```python
series
```

```python
Bulbasaur      49
Charmander     43
Squirtle       65
Pikachu        40
Onix          160
Name: Pokemon Savunma Güçleri, dtype: int64
```

Evet! İndeks değerleri artık pokemon isimleri ve istediğimiz pokemona rahatlıkla erişebiliriz artık. <br>

İndeks-değer eşlerinden oluşan bir dictionary (sözlük) kullanarak da seri oluşturabiliriz. <br>

```python
pd.Series({
    'Bulbasaur': 49, 
    'Charmander': 43, 
    'Squirtle': 65, 
    'Pikachu': 40, 
    'Onix': 160
    }, name="Pokemon Savunma Güçleri")
```

```python
Bulbasaur      49
Charmander     43
Squirtle       65
Pikachu        40
Onix          160
Name: Pokemon Savunma Güçleri, dtype: int64
```

