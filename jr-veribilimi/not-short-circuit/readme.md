## &

- `&`'da `and`'in yaptığını yapar ama short-circuit davranışı göstermez. 

```python
(2 == 2) & (3 == 3)
```

> True

```python
(5 < 3) & print("hey")
```

> hey

    ---------------------------------------------------------------------------
    
    TypeError                                 Traceback (most recent call last)
    
    <ipython-input-2-26ebba7ba675> in <module>
    ----> 1 (5 < 3) & print("hey")
    TypeError: unsupported operand type(s) for &: 'bool' and 'NoneType'

- `5 < 3 and print("hey")` karşılaştırması yaptığımızda hata almıyorken `5 < 3 & print("hey")`'de hata alıyoruz. `and` boolean ile NoneType karşılaştırırken hata vermezken, `&` hata veriyor.

## |

- `|`'da `or`'un yaptığını yapar ama short-circuit davranışı göstermez. 

```python
(2 == 2) | (3 < 3)
```

> True

```python
(5 > 3) or print("hey")
```

> True

```python
(5 > 3) | print("hey")
```

> hey
    ---------------------------------------------------------------------------
    
    TypeError                                 Traceback (most recent call last)
    
    <ipython-input-7-b932c1e836d4> in <module>
    ----> 1 (5 > 3) | print("hey")
    TypeError: unsupported operand type(s) for |: 'bool' and 'NoneType'

- `5 > 3 or print("hey")` karşılaştırması yaptığımızda hata almıyorken `5 > 3 | print("hey")`'de hata alıyoruz. `or` boolean ile NoneType karşılaştırırken hata vermezken, `|` hata veriyor.
