# Değişken Atama (Variable Assignment)

- Bazı değerleri bilgisayarın hafızasında tutmak `(RAM)` ve daha sonra bunlara verdiğimiz adlarla erişmek isteyebiliriz. Bunu variable'ler ile gerçekleştireceğiz.

- İlk olarak yapacağımız şey variable'ye vereceğimiz ismi yazmak. Bu isim `penguen`, `uzunluk`, `maaş` gibi istediğiniz bir isim olabilir (burada dikkat edilmesi gereken yer, verilecek ismin daha önceden Python'un default olarak kullanmadığı isimler olması. Mesela `if`, `continue`, `for` gibi keyword'ler daha önceden ayrıldığı için bunları variable ismi olarak kullanamayız)

- Python'un daha önceden kendisine ayırdığı isimler (**Reserved Keywords**):

        and       del       from      not       while    
        as        elif      global    or        with     
        assert    else      if        pass      yield    
        break     except    import    print     True         
        class     exec      in        raise     False         
        continue  finally   is        return             
        def       for       lambda    try


- Variable ismini seçtikten sonra bu ismin değerinin ne olacağını söylemeliyiz. Bu aşamadan sonra Python verdiğimiz ismi gördüğünde aslında verdiğimiz değeri çağırıyor olacak.

- Bu değer atama işlemini `=` sembolü ile yapacağız. Normalde bildiğimiz anlamından farklı bu `=` işareti. Eşitliğin sağındaki değeri solda yazdığımızın değeri olarak ata demiş oluyoruz bununla. Bu işleme `variable assignment` deniyor.
- değerleri atarken türünü belirtmemize gerek yok python kendisi otomatik olarak hangi tür olduğunu otomatik algılar.
- pythonda bir kez `variable assignment` için kullandığınız değeri tekrar tekrar kullanabilirsiniz.`variable` değerleri dinamik olarak güncellenebilir. en son tanımladığınız değer o `variable` olarak sayılacaktır.
```python
a = 2
```

```python
print(a)
```

> 2

```python
print(a + 5)
```

>  7

```python
b = 2 + 4
```

```python
print(b)
```

> 6


```python
print(b + 4)
```

> 10

```python
b = "bir"
```
```python
print(b)
```

> bir

>artik b değişkeni "bir" olarak tanımlanmış.

- Artık kodun başka bir yerinde `a` ile işlem yapmaya çalışsam python `a`'ya `2` olarak davranacak

- Variable Assingment'i kafamızda canlandırmak için şöyle düşünebiliriz:
    - Variable'a bir isim verip bir atama yaptığımızda Python bilgisayarın hafızasında `(RAM)` o isimli bir konteyner oluşturuyor ve ismini verdiğimiz isim yapıyor. Daha sonra bu isim çağrıldığında o konteynera gidiyor ve o değeri alıyor.

![](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/python-basics/degisken-atama/figures/variable_assignment.png)
