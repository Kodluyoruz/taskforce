# İndeksleme ve Koşullu Seçim

Video Link: https://youtu.be/-ZOrgV_aA9A

Notebook Link: https://github.com/ine-rmotr-curriculum/freecodecamp-intro-to-pandas/blob/master/1%20-%20Pandas%20-%20Series.ipynb

## İndeksleme

Seri bir sözlük gibidir ve değerlerini bir NumPy array'de tutar. Sözlükte nasıl bir değere ulaşabiliyorsak seride de ulaşabiliriz. Pokemon serisini bir hatırlayalım. <br>

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

Örneğin, Pikachu'nun değerini yazdıralım. <br>

```python
series["Pikachu"]
```

```python
40
```

Ayrıca serinin ".iloc" metodunu kullanarak değerlere sayısal indekslerini kullanarak da erişebiliriz. <br>

```python
# 2 indeksli değere ulaşalım, arrayin 3. değeri
series.iloc[2]
```

```python
65
```

```python
# arrayin son değerine ulaşalım
series.iloc[-1]
```

```python
160
```

Birden çok indeks kullanarak da değerleri seçebiliriz (Bu bize başka bir Series döndürür). <br>

```python
series[["Bulbasaur", "Onix"]]
```

```python
Bulbasaur     49
Onix         160
Name: Pokemon Savunma Güçleri, dtype: int64
```

Aynı şekilde birden çok sayısal indeks seçebiliriz. <br>

```python
series[[1, 4]]
```

```python
Charmander     43
Onix          160
Name: Pokemon Savunma Güçleri, dtype: int64
```

Dilimleme yaparak yani başlangıç ve bitiş indekslerini belirterek de seçim yapabiliriz (Pandas'ta bitiş değeri de sonuca eklenir! Örneğin aşağıda Squirtle da dahildir.) <br>

```python
series["Bulbasaur": "Squirtle"]
```

```python
Bulbasaur     49
Charmander    43
Squirtle      65
Name: Pokemon Savunma Güçleri, dtype: int64
```

## Koşullu Seçim

Serilerde, Numpy arraylerdeki gibi bir koşul ile boolean seçim yapabiliriz. <br>

```python
series > 45
```

```python
Bulbasaur      True
Charmander    False
Squirtle       True
Pikachu       False
Onix           True
Name: Pokemon Savunma Güçleri, dtype: bool
```

Boolean indeksleme de yapabiliriz. <br>

```python
series[series > 45]
```

```python
Bulbasaur     49
Squirtle      65
Onix         160
Name: Pokemon Savunma Güçleri, dtype: int64
```

Ortalamasını, standart sapmasını vb. Bulabiliriz. Numpy arraylerde yapabileceğimiz çoğu türlü işlemi yapabiliriz. <br>

```python
series.mean()
```

```python
71.4
```

Ortalamanın üstündeki değerleri seçelim. <br>

```python
series[series > series.mean()]
```

```python
Onix    160
Name: Pokemon Savunma Güçleri, dtype: int64
```

(Sadece Onix, diğer pokemonlara fark atmış!) <br>

İki koşulu parantezlere koyarak seçebiliriz. <br>

```python
series[(series > 45) & (series < 100)]
```

```python
Bulbasaur    49
Squirtle     65
Name: Pokemon Savunma Güçleri, dtype: int64
```

## Serinin Değerlerini Değiştirme

Serileri istediğimiz gibi düzenleyebiliriz. İndeksi ile seçerek: <br>

```python
series["Pikachu"] = 70 # Pikachu'yu güçlendirdik
series["Pikachu"] # yazdıralım
```

```python
70
```

50'den yüksek olan değerleri 50 yapalım. <br>

```python
series[series > 50] = 50
series # yazdıralım
```

```python
Bulbasaur     49
Charmander    43
Squirtle      50
Pikachu       50
Onix          50
Name: Pokemon Savunma Güçleri, dtype: int64
```

Orijinal seriyi tekrar oluşturalım. <br>

```python
series = pd.Series({
    'Bulbasaur': 49, 
    'Charmander': 43, 
    'Squirtle': 65, 
    'Pikachu': 40, 
    'Onix': 160
    }, name="Pokemon Savunma Güçleri")
```
