# Pandas DataFrames

Video Link: https://youtu.be/7SgFBYXaiH0

Notebook Link: https://github.com/ine-rmotr-curriculum/freecodecamp-intro-to-pandas/blob/master/3%20-%20Pandas%20-%20DataFrames.ipynb

## DataFrames (Veri Tabloları)

Pandas Dataframe, satır ve sütunlardan oluşan 2 boyutlu bir tablodur. Aşağıda bir dataframe oluşturalım: <br>

```python
# pokemon dataframe oluşturalım
pokemon = pd.DataFrame({
    'atak': [49, 52, 48, 55, 45],
    'savunma': [49, 43, 65, 40, 160],
     'hız': [45, 65, 43, 90, 70],
     'tür': ['ot', 'ateş', 'su', 'elektrik', 'kaya']
    }, index=["Bulbasaur", "Charmander", "Squirtle", "Pikachu", "Onix"])

# dataframe'i yazdıralım
pokemon
```

```python
            atak	savunma	 hız	tür
Bulbasaur	49	    49	     45	    ot
Charmander	52	    43	     65	    ateş
Squirtle	48	    65	     43	    su
Pikachu	    55	    40	     90	    elektrik
Onix	    45	    160	     70	    kaya
```

Dataframe'lerin bazı özelliklerine bakalım: <br>

Dataframe'in sütunlarına ".columns" değeri ile erişelim. <br>

```python
pokemon.columns
```

```python
Index(['atak', 'savunma', 'hız', 'tür'], dtype='object')
```

".info()" metodu ile dataframe hakkındaki bazı bilgileri edinebiliriz. <br>

```python
pokemon.info()
```

```python
<class 'pandas.core.frame.DataFrame'>
Index: 5 entries, Bulbasaur to Onix
Data columns (total 4 columns):
 #   Column   Non-Null Count  Dtype 
---  ------   --------------  ----- 
 0   atak     5 non-null      int64 
 1   savunma  5 non-null      int64 
 2   hız      5 non-null      int64 
 3   tür      5 non-null      object
dtypes: int64(3), object(1)
memory usage: 200.0+ bytes
```

Toplam değer sayısına bakalım: <br>

```python
pokemon.size
```

```python
20
```

Pokemon dataframe'inin biçimini (satır ve sütun sayısını) yazdıralım: <br>

```python
pokemon.shape
```

```python
(5, 4)
```

Dataframe'in sayısal değerlerinin ortalama, sayı, standart sapma gibi değerlerini yazdıralım: <br>

```python
pokemon.describe()
```

```python
	    atak	    savunma	    hız
count	5.000000	5.000000	5.000000
mean	49.800000	71.400000	62.600000
std	    3.834058	50.460876	19.398454
min	    45.000000	40.000000	43.000000
25%	    48.000000	43.000000	45.000000
50%	    49.000000	49.000000	65.000000
75%	    52.000000	65.000000	70.000000
max	    55.000000	160.000000	90.000000
```

## İndeksleme, Seçme ve Dilimleme

İstediğimiz sütunu adı ile indeksleyerek seçebiliriz. <br>

```python
pokemon["hız"]
```

```python
Bulbasaur     45
Charmander    65
Squirtle      43
Pikachu       90
Onix          70
Name: hız, dtype: int64
```

Dataframe'de de satırları sayısal indeksleriyle seçmek için ".iloc()" metodunu kullanabiliriz. <br>

```python
pokemon.iloc[1]
```

```python
atak         52
savunma      43
hız          65
tür        ateş
Name: Charmander, dtype: object
```

Satırları normal indeksleriyle seçmek için ise ".loc()" metodunu kullanabiliriz. <br>

```python
pokemon.loc["Pikachu"]
```

```python
atak             55
savunma          40
hız              90
tür        elektrik
Name: Pikachu, dtype: object
```

Dataframe'de de dilimleme gibi şeyler yapabiliriz. 2 boyutlu olduğu için şöyle yaparız: <br>

```python
pokemon.loc["Charmander": "Squirtle", "atak": "savunma"]
```

```python
	        atak	savunma
Charmander	52	    43
Squirtle	48	    65
```

Not: dataframe'de indeksleme yaparken kullanabiliyorsak ".iloc()" metodunu kullanalım.
