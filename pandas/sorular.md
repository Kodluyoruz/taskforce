# Pandas'a Giriş

Aşağıdaki kodun çıktısı nedir?
```python
import pandas as pd

certificates_earned = pd.Series(
    [8, 2, 5, 6],
    index=['Tom', 'Kris', 'Ahmad', 'Beau']
)

print(certificates_earned)
```
1. (doğru)
<pre>
Tom      8
Kris     2
Ahmad    5
Beau     6
dtype: int64
</pre>

2. 
<pre>
Kris     2
Ahmad    5
Beau     6
Tom      8
dtype: int64
</pre>

3. 
<pre>
Tom      8
Kris     2
Ahmad    5
Beau     6
Name: certificates_earned dtype: int64
</pre>

# İndeksleme ve Koşullu Seçim

Aşağıdaki kodun çıktısı nedir?
```python
import pandas as pd

certificates_earned = pd.Series(
    [8, 2, 5, 6],
    index=['Tom', 'Kris', 'Ahmad', 'Beau']
)

print(certificates_earned[certificates_earned > 5])
```

1. 
<pre>
Tom      True
Kris     False
Ahmad    False
Beau     True
dtype: int64
</pre>

2. 
<pre>
Tom      8
Ahmad    5
Beau     6
dtype: int64
</pre>

3. (doğru)
<pre>
Tom      8
Beau     6
dtype: int64
</pre>

# Pandas DataFrames

Aşağıdaki kodun çıktısı nedir?
```python
import pandas as pd

certificates_earned = pd.DataFrame({
    'Certificates': [8, 2, 5, 6],
    'Time (in months)': [16, 5, 9, 12]
})

certificates_earned.index = ['Tom', 'Kris', 'Ahmad', 'Beau']

print(certificates_earned.iloc[2])
```
1. 
<pre>
Tom      16
Kris      5
Ahmad     9
Beau     12
Name: Time (in months), dtype: int64
</pre>

2. 
<pre>
Certificates         6
Time (in months)    12
Name: Beau, dtype: int64
</pre>

3. (doğru)
<pre>
Certificates        5
Time (in months)    9
Name: Ahmad, dtype: int64
</pre>

# DataFrames: Koşullu Seçim ve Değiştirme

Aşağıdaki kodun çıktısı nedir?
```python
import pandas as pd

certificates_earned = pd.DataFrame({
    'Certificates': [8, 2, 5, 6],
    'Time (in months)': [16, 5, 9, 12]
})
names = ['Tom', 'Kris', 'Ahmad', 'Beau']

certificates_earned.index = names
longest_streak = pd.Series([13, 11, 9, 7], index=names)
certificates_earned['Longest streak'] = longest_streak

print(certificates_earned)
```

1. 
<pre>
Tom      13
Kris     11
Ahmad     9
Beau      7
Name: Longest streak, dtype: int64
</pre>

2. (doğru)
<pre>
      Certificates  Time (in months)  Longest streak
Tom               8                16              13
Kris              2                 5              11
Ahmad             5                 9               9
Beau              6                12               7
</pre>

3. 
<pre>
      Certificates   Longest streak
Tom               8               13
Kris              2               11
Ahmad             5                9
Beau              6                7
</pre>

# Sütun Oluşturma ve Veri Okuma

Hangi kod, certificates_earned DataFrame'ine "Certificates per month" yani "aylık sertifikalar" sütununu aşağıda gözüktüğü gibi ekler?
<pre>
      Certificates  Time (in months)  Certificates per month
Tom               8                16                    0.50
Kris              2                 5                    0.40
Ahmad             5                 9                    0.56
Beau              6                12                    0.50
</pre>

1. 
```python
certificates_earned['Certificates'] /
certificates_earned['Time (in months)']
```

2. 
```python
certificates_earned['Certificates per month'] = round(
    certificates_earned['Certificates'] /
    certificates_earned['Time (in months)']
)
```

3. (doğru)
```python
certificates_earned['Certificates per month'] = round(
    certificates_earned['Certificates'] /
    certificates_earned['Time (in months)'], 2
)
```

# Veri Temizleme: Giriş ve NaN (Sayı Olmayan) Değerler

Aşağıdaki kodun çıktısı nedir?

```python
import pandas as pd
import numpy as np

s = pd.Series(['a', 3, np.nan, 1, np.nan])

print(s.notnull().sum())
```

1. 3 (doğru)

2. 
<pre>
0     True
1     True
2    False
3     True
4    False
dtype: bool
</pre>

3. 
<pre>
0    False
1    False
2     True
3    False
4     True
dtype: bool
</pre>

# Veri Temizleme: DataFrameler ve Boş Değerleri Doldurma

Aşağıdaki kodun çıktısı nedir?

```python
import pandas as pd
import numpy as np

s = pd.Series([np.nan, 1, 2, np.nan, 3])
s = s.fillna(method='ffill')

print(s)
```

1. 
<pre>
0    1.0
1    1.0
2    2.0
3    3.0
4    3.0
dtype: float64
</pre>

2. (doğru)
<pre>
0    NaN
1    1.0
2    2.0
3    2.0
4    3.0
dtype: float64
</pre>

3. 
<pre>
0    NaN
1    1.0
2    2.0
3    NaN
4    3.0
dtype: float64
</pre>

# Veri Temizleme: Tekrarlanan Değerler ve Metin İşleme

".duplicated()" Python metodu, DataFrame'de kullanıldığında boolean (True/False) bir Pandas Series verir. Bu metod hangi satırlar için True verir:

1. 
Yinelenen değerin ilk kez görüldüğü satırda.

2. (doğru)
Yinelenen değerin en az 2. kez görüldüğü satırda.

3. 
Yinelenen değerin ilk ya da 2. kez görüldüğü satırlarda.
