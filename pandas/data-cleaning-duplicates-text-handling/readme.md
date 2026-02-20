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
# keep=False diyerek bu serideki tekrarlanan tüm verileri silelim
elciler.drop_duplicates(keep=False)
```

```python
Gérard Araud          France
Armando Varricchio     Italy
dtype: object
```

"keep" parametresine "first" değerini verirsek tekrarlanan verilerin ilkleri dışındakileri siler: <br>

```python
elciler.drop_duplicates(keep="first")
```

```python
Gérard Araud                  France
Kim Darroch           United Kingdom
Armando Varricchio             Italy
Peter Wittig                 Germany
dtype: object
```

## Metin İşleme

Metin verilerini yani "string" verilerini işlemek ve temizlemek zor olabilir. Çünkü metin verilerinde birçok yanlış ve tutarsızlık olabilir. Yanlış yazım, büyük harf küçük harf farkları, encoding tipleri, aynı değerin farklı şekillerde yazılabilmesi bu yanlış ve tutarsızlıklara örnektir. Örneğin; tarih yazarken "24/12/2018" de yazabiliriz "24-12-2018" de. Bu iki metnin belirttiği tarihler aynı ancak içerdiği bazı karakterler farklı. Bazı metin işleme örneklerini inceleyelim: <br>

### Sütunlara ayırma

Aşağıda anket sonuçlarının olduğu bir veri var. Bu veriyi Pandas Dataframe olarak yükleyelim: <br>

```python
df = pd.DataFrame({
    'Veri': [
        '1987_E_ABD _1',
        '1990?_E_ING_1',
        '1992_K_ABD_2',
        '1970?_E_   IT_1',
        '1985_K_I  T_2'
]})
```

Bu verideki sütunların sırasıyla yıl, cinsiyet, ülke ve çocuk sayısı verilerini içerdiğini biliyoruz. Örneğin; "E" erkek, "K" kız anlamına geliyor. Bu bilgileri ayırıp farklı sütunlar haline getireceğiz. Pandas "str" arayüzü ile string metotlarını kullanmamızı sağlar. "split" metodunu kullanalım: <br>

```python
df["Veri"].str.split("_")
```

```python
0      [1987, E, ABD , 1]
1      [1990?, E, ING, 1]
2       [1992, K, ABD, 2]
3    [1970?, E,    IT, 1]
4      [1985, K, I  T, 2]
Name: Veri, dtype: object
```

"expand" parametresini True yaparak parçalanan verileri sütunlara ayırabiliriz: <br>

```python
df["Veri"].str.split("_", expand=True)
```

```python
    0	    1	2	3
0	1987	E	ABD	1
1	1990?	E	ING	1
2	1992	K	ABD	2
3	1970?	E	IT	1
4	1985	K	I T	2
```

Bu işlemleri yapıp Dataframe'i değiştirelim ve sütun isimlerini de güncelleyelim: <br>


```python
# sütunlara ayıralım
df = df["Veri"].str.split("_", expand=True)

# sütun isimlerini değiştirelim
df.columns = ["Yıl", "Cinsiyet", "Ülke", "Çocuk Sayısı"]

# dataframe'i yazdıralım
df
```

```python
    Yıl	    Cinsiyet	Ülke	Çocuk Sayısı
0	1987	E	        ABD	    1
1	1990?	E	        ING	    1
2	1992	K	        ABD	    2
3	1970?	E	        IT	    1
4	1985	K	        I T	    2
```

Verilerde herhangi bir metin ya da karakter bulunuyor mu diye kontrol etmek için "contains" metodunu kullanabiliriz. Örneğin; soru işareti (?) içeren verilere bakalım: <br>

```python
df["Yıl"].str.contains("\?")
```

```python
0    False
1     True
2    False
3     True
4    False
Name: Yıl, dtype: bool
```

Burada soru işaretinden önce "\" karakterini koyduk çünkü bu metot regex metni alıyor ve "?" karakterinin özel bir anlamı var. Bu özel anlamı baskılamak için "\" karakteri koyduk. Burada iki tane yıl verisi "?" içeriyor, bu işaretleri silmemiz lazım. "replace" metodu ile bu işaretleri boş string ("") ile değiştirerek silebiliriz: <br>

```python
# "?" karakterlerini silelim
df["Yıl"] = df["Yıl"].str.replace("\?", "")

# Yıl verilerini yazdıralım
df["Yıl"]
```

```python
0    1987
1    1990
2    1992
3    1970
4    1985
Name: Yıl, dtype: object
```

Ülke isimlerindeki boşlukları (" ") da kaldıralım: <br>

```python
# " " karakterlerini silelim
df["Ülke"] = df["Ülke"].str.replace(" ", "")

# Ülke verilerini yazdıralım
df["Ülke"]
```

```python
0    ABD
1    ING
2    ABD
3     IT
4     IT
Name: Ülke, dtype: object
```

Son olarak temizlenmiş olan tüm verimizi yazdıralım: <br>

```python
df
```

```python
    Yıl	    Cinsiyet	Ülke	Çocuk Sayısı
0	1987	E	        ABD	    1
1	1990	E	        ING	    1
2	1992	K	        ABD	    2
3	1970	E	        IT	    1
4	1985	K	        IT	    2
```
