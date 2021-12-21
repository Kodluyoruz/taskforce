# Veri Temizleme: Tekrarlanan Değerler ve Metin İşleme

Video Link: https://youtu.be/kj7QqjXhH6A

Notebook Link: https://github.com/ine-rmotr-curriculum/data-cleaning-rmotr-freecodecamp/blob/master/3%20-%20Cleaning%20Not%20Null%20Values.ipynb

## Tekrarlanan Değerler (Duplicates)

Aşağıda elçilerin adlarının ve hangi ülkeyi temsil ettiklerinin bilgisinin olduğu bir seri var. Bu seride tekrarlanan değerler ile ilgili işlemler yapacağız: <br>

```python
elciler = pd.Series([
    'France',
    'United Kingdom',
    'United Kingdom',
    'Italy',
    'Germany',
    'Germany',
    'Germany',
], index=[
    'Gérard Araud',
    'Kim Darroch',
    'Peter Westmacott',
    'Armando Varricchio',
    'Peter Wittig',
    'Peter Ammon',
    'Klaus Scharioth '
])

# seriyi yazdıralım
elciler
```

```python
Gérard Araud                  France
Kim Darroch           United Kingdom
Peter Westmacott      United Kingdom
Armando Varricchio             Italy
Peter Wittig                 Germany
Peter Ammon                  Germany
Klaus Scharioth              Germany
dtype: object
```

"duplicated" metodu bize tekrarlanan değerleri verir. Varsayılan olarak ilk karşılaşılan değerlerden sonra tekrarlanan değerleri bize verir. "keep" parametresine "last" değerini vererek en son değerden önce tekrarlanan değerleri göstermesini de isteyebiliriz: <br>

```python
elciler.duplicated()
```

```python
Gérard Araud          False
Kim Darroch           False
Peter Westmacott       True
Armando Varricchio    False
Peter Wittig          False
Peter Ammon            True
Klaus Scharioth        True
dtype: bool
```

```python
elciler.duplicated(keep="last")
```

```python
Gérard Araud          False
Kim Darroch            True
Peter Westmacott      False
Armando Varricchio    False
Peter Wittig           True
Peter Ammon            True
Klaus Scharioth       False
dtype: bool
```

"keep" parametresine False değerini verirsek bize tekrarlanan tüm değerleri verir (Örneğin; "first" değeri gibi sadece ilk değer dışındaki değerleri vermez): <br>

```python
elciler.duplicated(keep=False)
```

```python
Gérard Araud          False
Kim Darroch            True
Peter Westmacott       True
Armando Varricchio    False
Peter Wittig           True
Peter Ammon            True
Klaus Scharioth        True
dtype: bool
```

"drop_duplicates" metodu ile bu tekrarlanan değerleri silebiliriz. Aynı şekilde "keep" parametresine değerler atayabiliriz: <br>

```python
# keep=False diyerek tekrarlanmayan, tek olan verileri seçelim
elciler.drop_duplicates(keep=False)
```

```python
Gérard Araud          France
Armando Varricchio     Italy
dtype: object
```


