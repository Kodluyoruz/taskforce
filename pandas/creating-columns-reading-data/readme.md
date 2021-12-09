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

Ya da "atak/savunma" oranını yani bir pokemonun ne kadar atak yapmaya yönelik olduğunu (saldırganlık) bulabiliriz: <br>

```python
# sütunu ekleyelim
pokemon["saldırganlık"] = pokemon["atak"] / pokemon["savunma"]

# dataframe'i yazdıralım
pokemon
```

```python
            atak	savunma	hız	tür	        boy	    toplam güç	saldırganlık
Bulbasaur	49	    49	    45	ot	        0.7	    143	        1.000000
Charmander	52	    43	    65	ateş	    0.6	    160	        1.209302
Squirtle	48	    65	    43	su	        0.5	    156	        0.738462
Pikachu	    55	    40	    90	elektrik	0.4	    185	        1.375000
Onix	    45	    160	    70	kaya	    8.8	    275	        0.281250
```

Şu anda yaptığımız işlem, veri analizi için önemli bir işlemdi. Pokemonların atak/savunma oranları bize önemli bir bilgi veriyor. Saldırganlık değerlerine baktığımızda en az saldırgan olan pokemonun Onix olduğunu görüyoruz ki bu pokemon kaya türü olan ve tam bir savunma pokemonu. Squirtle da kaplumbağaya benzeyen bir pokemon ve savunmaya meyilli. Atak pokemonları olarak ise Charmander'ı ve özellikle Pikachu'yu görüyoruz. Evet, Pikachu'nun atağı güçlü ancak savunması zayıf. <br>

### İstatistiksel bilgi edinmek

NumPy array'lerde yapabileceğimiz istatistiksel hesaplamaları aynı şekilde dataframe ya da serilerde de yapabiliriz. Önceden gördüğümüz gibi ".describe()" metodu ile sayısal sütunların istatistiksel bilgisini edinebiliriz.

## Dışarıdan Veri Okuma

Pandas kullanarak CSV, Excel, JSON gibi dosyaları okuyabilir ve dataframe'lere yükleyebiliriz. Pandas ile en çok CSV dosyaları kullanılır. "Comma Separated Values" yani "virgül ile ayrılmış değerler" anlamına gelir. Verideki her değer birer virgül ile, her satır ise birer satır sonu ile ayrılmıştır. Örneğin; aşağıda bir CSV verisi örneği var.<br>

```csv
zaman,değer
0,b,c
1,e,c
```


