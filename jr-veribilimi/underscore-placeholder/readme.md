## Underscore Placeholders


```python
num_1 = 90000000000
```

* Kaç tane 0 var burada ? 1,2,3,4... bir tanesini atladım mı? Nerede kalmıştım, başa dönüp bir daha sayayım... Pff yok mu bunun daha okunabilir bir yolu?

* Cevap tabii ki de evet. Sayıları arka planda algılanmasını değiştirmeden, ama bize daha kolay okunabilir yapan bir yöntem var.


```python
num_2 = 90_000_000_000
```

* Sayıların arasına alttan çizgi koymak! 

* Bu bilgisayarın sayıları algılamasını değiştirmiyor, o onları görmezden geliyor, ama bizim için daha okunabilir oluyor.


```python
num_1
```




    90000000000




```python
num_2
```




    90000000000



* Bilgisayar için 90_000_000_000 ile 90000000000 sayısının hiç bir farkı yok!


```python
type(90_000_000_000)
```




    int




```python
type(90000000000)
```




    int




```python
num_1 = 90000000000
```


```python
num_2 = 90_000_000_000
```


```python
num_1 - num_2
```




    0



* Bu mantığı `float` veri tipleri için de kullanabiliriz.


```python
num_3 = 0.12_11_12
```


```python
num_3
```




    0.121112


