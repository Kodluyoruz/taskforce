# Comments

- Diyelim ki birkaç kişilik bir projede çalışıyorsunuz, programın farklı kısımlarını farklı insanlar yazıyor. 

- Başkası sizin yazdığınız kodu kullanmak istediğinde kodun ne yaptığını bilmesi gerekiyor. İşte burada **comment** (yorum) devreye giriyor. Yazdığımız kodun ne yaptığını anlatan açıklamalar.

- Yorumlar sadece insanların okuması için, program çalışırken burası program tarafından algılanmayacak.

- Sadece başkasının okuması da şart değil, seneler sonra yazdığınız kodu yeniden kullanmak isteyebilirsiniz ve neyin ne olduğunu, kodun ne yaptığını unutmuş olabilirsiniz, bu yüzden bu açıklamalar kendi kodunuzu okurken de önemli. (seneler geçmesine de gerek yok, çok parçası olan bir problem üzerine çalışıyorsanız, şurada ne yapmıştım diye kendinizi bulmanız çok muhtemel - o yüzden yorum eklemeyi bir alışkanlık haline getirmek gayet yararlı bir durum.)

## Tek Satıra Yorum Eklemek

```python
# limon değişkeni satılan limonları ifade ediyor
limon = 2
```

```python
# sonuc değişkeni bir haftada kaç limon satıldığını belirtiyor
sonuc = limon * 7
print(sonuc)
```

>    14

- Bunları ifadelerin yanlarına da yazabilirdik.

```python
limon = 2 # limon değişkeni satılan limonları ifade ediyor.
```

```python
sonuc = limon * 7 # sonuc değişkeni bir haftada kaç limon satıldığını belirtiyor.
print(sonuc)
```
> 14


## Birden Çok Satırı Kapsayan Yorum Yazmak


```python
"""
limon değişkeni satılan limonları ifade ediyor.

sonuc değişkeni bir haftada kaç limon satıldığını belirtiyor.
"""

limon = 2

sonuc = limon * 7

print(sonuc)
```

> 14
