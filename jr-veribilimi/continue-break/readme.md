
## break


* Belki bir şart sağlandığı zaman döngüden aniden çıkmak istiyorum, bunu `break` ile sağlıyoruz
* `break` komutunu gördüğümüz yerde döngüden çıkıyoruz.





```python
for i in range(10):
    if i == 3:
        break
    print(i)
```

> ```text
> 0
> 1
> 2
> ```

```python

x = 0

while x < 10:

    
    print(x)
    x += 1
    

    if x == 3:
        break
```

> ```text
> 0
> 1
> 2
> ```

## continue

- Bazen döngülerde bir şart sağlandığında bir sonraki iterasyondan devam etmek isteyebilirim. Bunu `continue` ile sağlayacağız.
- `continue` komutu ile karşılaşıldığı zaman, döngünün bir sonraki iterasyonuna geçilir.

```python
for i in range(10):
    
    if i == 3:
        continue
    print(i)


```

> ```text
> 0
> 1
> 2
> 4
> 5
> 6
> 7
> 8
> 9
> ```

```python

x = 0

while x < 10:
    
    x += 1
    
    if x == 3:
        continue
    
    print(x)
```

> ```text
> 1
> 2
> 4
> 5
> 6
> 7
> 8
> 9
> 10
> ```

