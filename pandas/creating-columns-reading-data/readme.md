# Sütun Oluşturma ve Veri Okuma

Video Link: https://youtu.be/_sSo2XZoB3E

Notebook Link: https://github.com/ine-rmotr-curriculum/freecodecamp-intro-to-pandas/blob/master/3%20-%20Pandas%20-%20DataFrames.ipynb

Notebook Link 2: https://github.com/ine-rmotr-curriculum/freecodecamp-intro-to-pandas/blob/master/5%20-%20Pandas%20-%20Reading%20CSV%20and%20Basic%20Plotting.ipynb

## Dataframe'leri Değiştirme/Düzenleme

### Satır ekleme

Charmander'in gelişmiş hali olan Charizard'ı da ekleyelim: <br>

```python
pokemon.append(pd.Series({
    "atak": 104,
    "savunma": 78,
    "tür": "ateş",
    "hız": 100,
    "boy": 1.7
}, name="Charizard"))
```

```python
	        atak	savunma	 hız	tür	        boy
Bulbasaur	49	    49	     45	    ot	        0.7
Charmander	52	    43	     65	    ateş	    0.6
Squirtle	48	    65	     43	    su	        0.5
Pikachu	    55	    40	     90	    elektrik	0.4
Onix	    45	    160	     70	    kaya	    8.8
Charizard	104	    78	     100	ateş	    1.7
```

Not: dataframe'e satırı eklemek için kodu: <br>
pokemon = pokemon.append(...) şekinde yazmamız gerekir.


### Sütunları kullanarak yeni bir sütun oluşturma

Örneğin; atak, savunma ve hız değerlerini toplayıp "toplam güç" adında bir sütuna yazabiliriz: <br>

```python
# sütunu oluşturalım
pokemon["toplam güç"] = pokemon["atak"] + pokemon["savunma"] + pokemon["hız"]
# dataframe'i yazdıralım
pokemon
```

```python
            atak	savunma	 hız	tür	        boy	    toplam güç
Bulbasaur	49	    49	     45	    ot	        0.7	    143
Charmander	52	    43	     65	    ateş	    0.6	    160
Squirtle	48	    65	     43	    su	        0.5	    156
Pikachu	    55	    40	     90	    elektrik	0.4	    185
Onix	    45	    160	     70	    kaya	    8.8	    275
```


