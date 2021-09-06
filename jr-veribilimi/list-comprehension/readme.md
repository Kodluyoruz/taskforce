# List Comprehensions


* Yine o yeni bir şey öğrenmediğimiz ama yaptığımız şeyleri daha farklı ve kolay yapmayı öğrendiğimiz bir konudayız.

* Diyelim ki 1'den 10'a kadar olan sayıların karelerinden bir liste oluşturmak istiyorum. Bunu aşağıdaki gibi yapabilirim.


```python
squares = []

for i in range(1,11):
    squares.append(i*i)
```


```python
squares
```




    [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]



* Bunun aynısını `list comprehension` kullanarak da yapabiliriz.


```python
squares = [i * i for i in range(1,11)]
```


```python
squares
```




    [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]




```python
# list comprehension ve fonksiyon mantığını birleştirme

def cube(x):
    return x * x * x # x ** 3
```


```python
cubes = [cube(x) for x in range(1,11)]
```


```python
cubes
```




    [1, 8, 27, 64, 125, 216, 343, 512, 729, 1000]



### List Comprehension'larda Conditional Yapıların Kullanılması


```python
squares = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

print(squares)
```

    [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]



```python
odd_squares = []

for e in squares:
    
    if e % 2 == 1:
        odd_squares.append(e)
```


```python
odd_squares
```




    [1, 9, 25, 49, 81]




```python
# squares listindeki tek elemanlardan yeni bir liste yaratmak

odd_squares = [e for e in squares if e % 2 == 1]
```


```python
odd_squares
```




    [1, 9, 25, 49, 81]




```python
# bu test mantığını fonksiyonla da sağlayabilirdik

def is_odd(x): 
    
    if x % 2 == 0:
        return False
    
    if x % 2 == 1:
        return True
    
    
```


```python
odd_squares = [e for e in squares if is_odd(e)]
```


```python
odd_squares
```




    [1, 9, 25, 49, 81]




```python
def empty(x): 
    
    if x % 2 == 0:
        return False
    
    if x % 2 == 1:
        return False
    
    
```


```python
empty_squares = [e for e in squares if empty(e)]
```


```python
empty_squares
```




    []




```python
def is_even(x):
    
    if x % 2 == 0:
        return True
    
    if x % 2 == 1:
        return False
```


```python
even_squares = [e for e in squares if is_even(e)]
```


```python
even_squares
```




    [4, 16, 36, 64, 100]




```python
squares
```




    [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]




```python
weird_squares = [e if e % 2 == 0 else -1 for e in squares]
```


```python
weird_squares
```




    [-1, 4, -1, 16, -1, 36, -1, 64, -1, 100]




```python
ultra_weird_squares = [e if e % 2 == 0 else -1 for e in squares if is_even(e)]
```


```python
# Q. Soru: Bunun çıktısı ne olur ?
ultra_weird_squares
```




    [4, 16, 36, 64, 100]



### Set Comprehension


```python
numbers = [1,2,3,4,5,6,7,1,2]
```


```python
set_numbers = {s for s in numbers if s in [1,2,3,4,5,6,1,2]}
```


```python
set_numbers
```




    {1, 2, 3, 4, 5, 6}



### Dictionary Comprehension


```python
square_dict = {e:e * e for e in range(1,11)}
```


```python
square_dict
```




    {1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81, 10: 100}




```python
square_dict[9]
```




    81



### Nested List Comprehension


```python
m = [[j for j in range(7)] for i in range(5)]
```


```python
m = [[j for j in range(7)] for _ in range(5)]
```


```python
m
```




    [[0, 1, 2, 3, 4, 5, 6],
     [0, 1, 2, 3, 4, 5, 6],
     [0, 1, 2, 3, 4, 5, 6],
     [0, 1, 2, 3, 4, 5, 6],
     [0, 1, 2, 3, 4, 5, 6]]




```python
m = [[10, 11, 12], [13, 14], [15, 16, 17, 18]] 
```


```python
for l in m:
    print(l)
```

    [10, 11, 12]
    [13, 14]
    [15, 16, 17, 18]



```python
new_m = []
for l in m:
    print(l)
    for e in l:
        new_m.append(e)
        print(e)
```

    [10, 11, 12]
    10
    11
    12
    [13, 14]
    13
    14
    [15, 16, 17, 18]
    15
    16
    17
    18



```python
new_m
```




    [10, 11, 12, 13, 14, 15, 16, 17, 18]




```python
m
```




    [[10, 11, 12], [13, 14], [15, 16, 17, 18]]




```python
# matrixi list comprehension ile flat etmek

flatten_m = [e for l in m for e in l]
```


```python
flatten_m
```




    [10, 11, 12, 13, 14, 15, 16, 17, 18]




```python
# Sadece çift değerleri kabul edecek

flatten_m = [e for l in m for e in l if e % 2 == 0]
```


```python
flatten_m
```




    [10, 12, 14, 16, 18]


