# Veri Temizleme: DataFrameler ve Boş Değerleri Doldurma

Video Link: https://youtu.be/sTMN_pdI6S0

Notebook Link: https://github.com/ine-rmotr-curriculum/data-cleaning-rmotr-freecodecamp/blob/master/2%20-%20Handling%20Missing%20Data%20with%20Pandas.ipynb

Notebook Link 2: https://github.com/ine-rmotr-curriculum/data-cleaning-rmotr-freecodecamp/blob/master/3%20-%20Cleaning%20Not%20Null%20Values.ipynb

## Dataframe'lerde Boş Verileri Silme

Pandas serilerinde veri silmek için sadece "dropna" metodunu yazmak yeterli. Ancak Dataframe'lerde belirlememiz gereken bazı parametreler var. Örneğin, satırları mı sileceğim sütunları mı? Aşağıdaki Dataframe üzerinde işlemler yapacağız: <br>

```python
df = pd.DataFrame({
    'Sütun A': [1, np.nan, 30, np.nan],
    'Sütun B': [2, 8, 31, np.nan],
    'Sütun C': [np.nan, 9, 32, 100],
    'Sütun D': [5, 8, 34, 110],
})

df
```

```python
    Sütun A	Sütun B	Sütun C	Sütun D
0	1.0	    2.0	    NaN	    5
1	NaN	    8.0	    9.0	    8
2	30.0	31.0	32.0	34
3	NaN	    NaN	    100.0	110
```

Varsayılan olarak "dropna" bir Dataframe'de boş değer içeren tüm satırları silecektir: <br>

```python
df.dropna()
```

```python
	Sütun A	Sütun B	Sütun C	Sütun D
2	30.0	31.0	32.0	34
```

"axis" parametresi default olarak 0 ve bu da satırlar demek oluyor. Bu parametreyi 1 yaparak boş değer içeren sütunları silebiliriz: <br>

```python
df.dropna(axis=1)
```

```python
    Sütun D
0	5
1	8
2	34
3	110
```

"how" parametresi de bir tek boş değer olunca mı silinecek tüm değerler boş olunca mı onu belirler. Varsayılan olarak "any" değeri verilmiştir. Bu değeri "all" yaparak "eğer tüm değerleri boş ise o satırı ya da sütunu sil" komutunu verebiliriz: <br>

```python
# yeni bir dataframe oluşturalım
df2 = pd.DataFrame({
    'Sütun A': [1, np.nan, 30],
    'Sütun B': [2, np.nan, 31],
    'Sütun C': [np.nan, np.nan, 100]
})

df2
```

```python
	Sütun A	Sütun B	Sütun C
0	1.0	    2.0	    NaN
1	NaN	    NaN	    NaN
2	30.0	31.0	100.0
```

Tüm değerleri NaN olan satırları silelim: <br>

```python
df2.dropna(how="all")
```

```python
    Sütun A	Sütun B	Sütun C
0	1.0	    2.0	    NaN
2	30.0	31.0	100.0
```

## Null (Boş) Değerleri Doldurma

Bazen null değerleri doldurmak, onları başka değerlerle değiştirmemiz gerekebilir. Örneğin, böyle tablo şeklinde bir veride bir Makine Öğrenmesi algoritması çalıştırmak istiyorsak genelde tabloda null veri olmaması gerekir. Böyle durumlarda null verileri 0, verinin ortalaması gibi değerlerle doldurmamız gerekir. <br>

```python
# seriyi yazdıralım
s
```

```python
0    1.0
1    2.0
2    NaN
3    4.0
4    NaN
dtype: float64
```

"fillna" metodu ile boş değerleri belirlediğimiz bir değerle doldurabiliriz: <br>

```python
# null değerleri 0 sayısı ile dolduralım
s.fillna(0)
```

```python
0    1.0
1    2.0
2    0.0
3    4.0
4    0.0
dtype: float64
```


```python
# şimdi de null değerleri serinin ortalamasıyla dolduralım
s.fillna(s.mean())
```


```python
0    1.000000
1    2.000000
2    2.333333
3    4.000000
4    2.333333
dtype: float64
```

"fillna" fonksiyonunda "method" parametresine "ffill" değeri girerek boş değerleri bir önceki değerlerle doldurmasını, "bfill" değeri girerek boş değerleri bir sonraki değerlerle doldurmasını söyleyebiliriz: <br>

```python
s.fillna(method="ffill")
```

```python
0    1.0
1    2.0
2    2.0
3    4.0
4    4.0
dtype: float64
```

```python
s.fillna(method="bfill")
```

```python
0    1.0
1    2.0
2    4.0
3    4.0
4    NaN
dtype: float64
```

"bfill" kullandığımızda son değerden sonra bir değer olmadığı için o değerin NaN olarak kaldığına dikkat edelim.

