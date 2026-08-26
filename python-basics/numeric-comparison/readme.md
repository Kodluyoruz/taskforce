## Nümerik Veri Tiplerinde Karşılaştırma:

- Bir programın farklı durumlar olduğunda başka davranışlar göstermesini isteyebiliriz. Bunun için belirli testler yapmam lazım ve bu testler sonucuca göre farklı davranışlar tasarlamam lazım.

- Bu testler için verilerimizi birbirleri ile karşılaştırabilir olmamız lazım. Bunları Comparison Operator'lar (karşılaştırma operatörleri) ile yapacağız. Cevabın True veya False olmasına göre, farklı durumlarda farklı davranacak program tasarlayabiliriz. Bu karşılaştırmalar o programların temelini oluşturacak.

- Nümerik veri tiplerinde karşılaştırma deyince aklımıza bir kaç şey gelebilir:

- `i==j` eşitlik testi (equality test). i ve j birbirlerine **eşitse** bu ifadenin değeri `boolean` veri objesi `True`, **eşit değilse** `False` olacak. `=` değişken atama operatörü olarak tanımlandığı için eşitlik test ederken onu kullanırsak `=`'in sağındaki değere solundaki adı vermiş oluruz.

- `i!=j` eşitsizlik testi (inequality test). i ve j birbirlerine **eşit değilse** bu ifadenin değeri `boolean` veri objesi `True`, **eşitse** `False` olacak.

- `i>j` i, j'den **büyükse** bu ifadenin değeri `boolean` veri objesi `True`, **eşit** veya **az ise** `False` olacak.

- `i>=j` i, j'den **büyükse** `veya` **eşitse** bu ifadenin değeri `boolean` veri objesi `True`, **az ise** `False` olacak.

- `i<j` i, j'den **küçükse** bu ifadenin değeri `boolean` veri objesi `True`, **eşit** veya **büyük ise** `False` olacak.

- `i<=j` i, j'den **küçükse** `veya` **eşitse** bu ifadenin değeri `boolean` veri objesi `True`, **büyük ise** `False` olacak.

## `==` Operator

```python
5 == 4
```

> False

```python
5 == 5
```

> True

```python
i = 10
j = 20
```

```python
i == j
```

> False

```python
j = 10
```

```python
i == j
```

> True

- Float veri tipleri için eşitlik karşılaştırması yaparken `==` kullanılması çok mantıklı değil, bunun nedenini ileriki derslerde göreceğiz.

```python
5.3 == 5.4
```

> False

```python
5.4 == 5.4
```

> True

```python
x = (0.3 * 3) + 0.1
```

```python
y = 1.0
```

```python
x == y
```

> False

```python
x
```

> 0.9999999999999999

```python
y
```

> 1.0

## `!=` Operator

```python
5 != 4
```

> True

```python
5 != 5
```

> False

```python
i = 10
j = 20
```

```python
i != j
```

> True

```python
j = 10
```

```python
i != j
```

> False

## `>` Operator

```python
5 > 4
```

> True

```python
5 > 5
```

> False

```python
i = 10
j = 20
```

```python
i > j
```

> False

```python
j = 5
```

```python
i > j
```

> True

```python
5.3 > 5.4 
```

> False

```python
5.4 > 5.3
```

> True

## `>=` Operator


```python
5 >= 4
```

> True

```python
5 >= 5
```

> True

```python
5 >= 7
```

> False

## `<` Operator

```python
5 < 4
```

> False

```python
5 < 5
```

> False

## `<=` Operator

```python
5 <= 4
```

> False

```python
5 <= 5
```

> True

```python
i = 10
j = 20
```

```python
i <= j
```

> True

```python
j = 10
```

```python
i <= j
```

> True

```python
5.3 <= 5.4
```

> True

```python
5.4 <= 5.3
```

> False
