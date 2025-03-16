## split()

* Belirli bir bölme kriterine göre string'in alt parçalarını listenin elemanları olarak dönüştürebiliriz.


```python
s = "merhaba nasılsın ?"
```

* split()'in içine neye göre böleceğimizi yazarız.


```python
s.split(" ")
```




    ['merhaba', 'nasılsın', '?']



* hiç bir şey yazmazsak default olarak boşluğa göre böler.


```python
s.split()
```




    ['merhaba', 'nasılsın', '?']




```python
s2 = "limon,portakal,elma"
```


```python
s2.split()
```




    ['limon,portakal,elma']




```python
s2.split(",")
```




    ['limon', 'portakal', 'elma']



## join()

* listenin elemanları arasına belirtilen yapıyı koyup string'e dönüştürür.

`"patern".join(elemanları kullanılacak liste)`


```python
l = ['limon', 'portakal', 'elma']
```


```python
",".join(l)
```




    'limon,portakal,elma'




```python
s = ",".join(l)
```


```python
s
```




    'limon,portakal,elma'




```python
"-".join(l)
```




    'limon-portakal-elma'




```python
"/".join(l)
```




    'limon/portakal/elma'




```python
" ".join(l)
```




    'limon portakal elma'


