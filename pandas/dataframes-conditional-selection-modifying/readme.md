# DataFrames: Koşullu Seçim ve Değiştirme

Video Link: https://youtu.be/BFlH0fN5xRQ

Notebook Link: https://github.com/ine-rmotr-curriculum/freecodecamp-intro-to-pandas/blob/master/3%20-%20Pandas%20-%20DataFrames.ipynb

## Koşullu Seçim

Öncelikle pokemon dataframe'imizi yazdıralım: <br>

```python
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

Koşullu seçimi dataframe'de de serideki gibi yapabiliriz. Boolean seçim yapalım. Örneğin, hızı 60'dan büyük olan pokemonlara bakalım: <br>

```python
pokemon["hız"] > 60
```

```python
Bulbasaur     False
Charmander     True
Squirtle      False
Pikachu        True
Onix           True
Name: hız, dtype: bool
```

Şimdi bu pokemonları dataframe üzerinde seçelim ve yazdıralım: <br>


```python
pokemon.loc[pokemon["hız"] > 60]
```

```python
            atak	savunma	 hız	tür
Charmander	52	    43	     65	    ateş
Pikachu	    55	    40	     90	    elektrik
Onix	    45	    160	     70	    kaya
```

Bir dataframe aldık. Boolean seçim yapılmış dataframeden de istediğimiz sütunu seçebiliriz: <br>

```python
pokemon.loc[pokemon["hız"] > 60, "hız"]
```

```python
Charmander    65
Pikachu       90
Onix          70
Name: hız, dtype: int64
```

## Veri Silme

Not: Silme operasyonunda "inplace" parametresini True yapmazsak tablo modifiye edilmez. <br>

İstediğimiz satırı indeksini vererek silebiliriz: <br>

```python
pokemon.drop("Bulbasaur")
```

```python
            atak    savunma	 hız	tür
Charmander	52	    43	     65	    ateş
Squirtle	48	    65	     43	    su
Pikachu	    55	    40	     90	    elektrik
Onix	    45	    160	     70	    kaya
```

Birden çok satırı da silebiliriz: <br>

```python
pokemon.drop(["Pikachu", "Onix"])
```

```python
            atak    savunma	 hız	tür
Bulbasaur	49	    49	     45	    ot
Charmander	52	    43	     65	    ateş
Squirtle	48	    65	     43	    su
```

İstediğimiz sütunları da silebiliriz. "drop" metodunda "axis" parametresi varsayılan olarak 0'dır ve bu da satırlar demektir. Bu parametreyi 1 yaparak sütun silebiliriz. <br>

```python
pokemon.drop(["hız", "tür"], axis=1)
```

```python
            atak	savunma
Bulbasaur	49	    49
Charmander	52	    43
Squirtle	48	    65
Pikachu	    55	    40
Onix	    45	    160
```

## Operasyonlar

Dataframe'de birden fazla sütuna aynı anda işlemler yapabiliriz. Örneğin, atak ve savunmayı 10'a bölelim: <br>

```python
pokemon[["atak", "savunma"]] / 10
```

```python
            atak	savunma
Bulbasaur	4.9	    4.9
Charmander	5.2	    4.3
Squirtle	4.8	    6.5
Pikachu	    5.5	    4.0
Onix	    4.5	    16.0
```

Tüm atak puanlarına 10, savunma puanlarına 5 sayılarını aynı anda ekleyelim: <br>

```python
# liste, numpy array ya da seri kullanabiliriz
pokemon[["atak", "savunma"]] + [10, 5]
```

```python
            atak	savunma
Bulbasaur	59	    54
Charmander	62	    48
Squirtle	58	    70
Pikachu	    65	    45
Onix	    55	    165
```

## Dataframe'leri Değiştirme/Düzenleme

### Yeni sütun ekleme

Yeni sütun ekleyebiliriz. Örneğin, pokemonların metre cinsinden "boy" bilgilerini bir seri olarak oluşturalım ve dataframe'e ekleyelim. <br>

```python
# series oluşturalım, index bilgisini de girelim
boylar = pd.Series(
    [0.7, 0.6, 0.5, 0.4, 8.8],
    index=pokemon.index) 

# yazdıralım
boylar 
```

```python
Bulbasaur     0.7
Charmander    0.6
Squirtle      0.5
Pikachu       0.4
Onix          8.8
dtype: float64
```

Pokemon dataframe'inde "boy" adında bir sütun oluşturalım ve boylar serisini bu sütuna atayalım. <br>

```python
# sütun oluşturalım
pokemon["boy"] = boylar
# dataframe'i yazdıralım
pokemon
```

```python
            atak	savunma	 hız	tür	        boy
Bulbasaur	49	    49	     45	    ot	        0.7
Charmander	52	    43	     65	    ateş	    0.6
Squirtle	48	    65	     43	    su	        0.5
Pikachu	    55	    40	     90	    elektrik	0.4
Onix	    45	    160	     70	    kaya	    8.8
```

(boy sütunu en sona eklenmiş.) <br>

### Bir sütundaki tüm değerleri değiştirme

Tüm boy değerlerini 1 yapalım: <br>

```python
pokemon["boy"] = 1
pokemon
```

```python
            atak	savunma	 hız	tür	        boy
Bulbasaur	49	    49	     45	    ot	        1
Charmander	52	    43	     65	    ateş	    1
Squirtle	48	    65	     43	    su	        1
Pikachu	    55	    40	     90	    elektrik	1
Onix	    45	    160	     70	    kaya	    1
```

Bir şeye dikkat çekelim. Boy sütunu kesirli sayılardan oluşuyodu ancak tam sayı olan 1 değerine eşitledikten sonra tam sayılardan oluşuyor. Boy sütununun veri tipine bakarak da bunu gösterelim: <br>

```python
pokemon["boy"].dtype
```

```python
dtype('int64')
```

Boy değerlerini tekrar yerine koyalım: <br>

```python
pokemon["boy"] = boylar
```

### Yeniden adlandırma

Sütun adlarını ingilizce karşılıkları ile yer değiştirelim: <br>

```python
pokemon.rename(
    columns={
        "atak": "attack",
        "savunma": "defense",
        "tür": "type",
        "hız": "speed",
        "boy": "height"
    }
)
```

```python
            attack	defense	 speed	type	    height
Bulbasaur	49	    49	     45	    ot	        0.7
Charmander	52	    43	     65	    ateş	    0.6
Squirtle	48	    65	     43	    su	        0.5
Pikachu	    55	    40	     90	    elektrik	0.4
Onix	    45	    160	     70	    kaya	    8.8
```

Not: "inplace" parametresi False olduğu için dataframe değiştirilmedi. <br>


