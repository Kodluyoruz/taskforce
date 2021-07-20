
## break


* Belki bir şart sağlandığı zaman döngüden aniden çıkmak istiyorum, bunu `break` ile sağlıyoruz
* `break` komutunu gördüğümüz yerde döngüden çıkıyoruz.





```python
for i in range(10):
    if i == 3:
        break
    print(i)
```
burada `i` değişkeni 3'e eşitse döngüden çıkıyoruz.
> ```text
> 0
> 1
> 2
> python break ifadesi gördüğü için döngüyü sonlandırıyor.
> ```

```python

x = 0

while x < 10:
    print(x)
    x += 1
    if x == 3:
        break
```
burda `x` değişkeni 3'e eşitse döngüden çıkıyoruz.
> ```text
> 0
> 1
> 2
> python break ifadesi gördüğü için döngüyü sonlandırıyor.
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
> python continue ifadesi gördüğü için 3'e ulaştığında döngünün sonraki iterasyonuna geçiliyor.
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
> python continue ifadesi gördüğü için 3'e ulaştığında döngünün sonraki iterasyonuna geçiliyor.
> ```

