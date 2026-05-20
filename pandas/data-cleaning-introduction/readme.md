# Veri Temizleme: Giriş ve NaN (Null, Boş) Değerler

Video Link: https://youtu.be/ovYNhnltVxY

Notebook Link: https://github.com/ine-rmotr-curriculum/data-cleaning-rmotr-freecodecamp/blob/master/2%20-%20Handling%20Missing%20Data%20with%20Pandas.ipynb

## NaN (Null, Boş) Değerler

Pandas ve NumPy'da bazen değerlerin "NaN" olduğunu görürüz. Peki bu değerler nedir? NaN değerler verinin boş olduğunda (orada veri olmadığında), geçersiz olduğunda görülen değerlerdir. Bu durum verinin gerçekten boş olmasından ya da teknik aksaklıklardan (verinin elde edilmesinde olan hatalardan, verinin elde edilirken bozulmasından) da kaynaklanabilir. Örneğin; bitcoin verisi bir zaman aralığı için elde edilememiş olabilir, bu durum da o zaman aralığındaki değerin NaN olmasına yol açabilir. Ya da bir ankette birisi yaş değerini negatif girmiş olabilir ve yaş değerini kontrol eden algoritma bu değeri NaN olarak kaydetmiş olabilir. <br>

Pandas'ta NaN değerlerle yapılabilen işlemlere bakalım. NumPy ve Pandas'ı import edelim: <br>

```python
import numpy as np
import pandas as pd
```

Python'da NaN değerini "np.nan" ya da "None" kullanarak gösterebiliriz. Pandas bize NaN değerleri kontrol etmek ve belirlemek için bazı fonksiyonlar sunar. Aşağıda örnekler verilmiştir: <br>

```python
# değer null mu diye kontrol ediyoruz
value = np.nan
pd.isnull(value)
# aynı şekilde "pd.isna" metodunu da kullanabiliriz
```

```python
True
```

Bu işlemlerin tersi ise şu fonksiyonlarla yapılabilir: <br>

```python
# değer null değil mi diye kontrol ediyoruz
value = None
pd.notnull(value)
# aynı şekilde "pd.notna" metodunu da kullanabiliriz
```

```python
False
```

Bu fonksiyonlar Seri ve Dataframe'lerde de çalışır: <br>

```python
# serilerde kontrol edersek fonksiyon da seri döndürür
pd.isnull(pd.Series([None, 2, np.nan, ""]))
```

```python
0     True
1    False
2     True
3    False
dtype: bool
```

Dataframe kullanırsak: <br>

```python
pd.isnull(pd.DataFrame({
    'Sütun A': [1, np.nan, 7],
    'Sütun B': [np.nan, 2, np.nan]
}))
```

```python
	Sütun A	Sütun B
0	False	True
1	True	False
2	False	True
```

### Pandas ile NaN değerlerde işlem yapma

Eğer bir matematiksel işlem yapıyorsak Pandas NaN değerleri görmezden gelir ve işlemde hata vermez. <br>

```python
pd.Series([1, 2, np.nan]).sum()
```

```python
3
```

### Boş (Null) verileri filtreleme

Pandas ile önce boş değerleri bularak sonra da boolean filtreleme yaparak boş değerleri filtreleyebiliriz: <br>

```python
s = pd.Series([1, 2, np.nan, 4, np.nan])
# null olmayan değerleri alalım ve bu değerleri filtreleyelim
s[pd.notnull(s)]
```

```python
0    1.0
1    2.0
3    4.0
dtype: float64
```

### Boş verileri silme

Pandas bize "dropna" adlı metodu ile kolayca boş verilerden kurtulmayı sağlar: <br>

```python
# boş değerleri atılmış seriyi yazdıralım
# (fonksiyonun inplacee parametresine True değerini vermezsek s serisinin değişmeyeceğini unutmayalım.)
s.dropna()
```

```python
0    1.0
1    2.0
3    4.0
dtype: float64
```
