# Kontroller #

Diğer programlama dillerindekine benzer olarak if-else anahtar kelimeleri ile kontorlleri gerçekleştireceğiz. if anahtar kelimesinden sonra koşulumuzu yazıyoruz. Bu koşulu parantez içine almamız gerekmez ama dilerseniz parantez içinde de koşulu belirtebilirsiniz. Koşul sonrasında süslü parantez blokları içine koşulun doğru olması durumunda çalışacak kodları yazabiliriz.

```
let yas = 13
if yas > 18 {
    print("Yaşınız 18'den büyüktür.")
}
```

Koşulumuz dışında kalan durumlarda çalışacak kodu else bloğunun içine ekleriz.

```
let yas = 13
if yas > 18 {
    print("Yaşınız 18'den büyüktür.")
} else {
    print("Yaşınız 18'den küçüktür.")
}
``` 

Eğer bir koşulu daha kontrol edeceksek else if ile yeni bir koşul kontrolünü if ve else arasına ekleriz.

```
let yas = 13
if yas < 0 {
    print("Yaşınız 0'dan küçük olamaz.")
} else if yas > 18 {
    print("Yaşınız 18'den büyüktür.")
} else {
    print("Yaşınız 18'den küçüktür.")
}
```

Eğer birden çok koşulu aynı if ile kontrol etmek istiyorsak koşulları mantıksal karşılaştırma operatörleri ile veya , işareti ile ayırarak kontrol edebiliriz.

```
let yas = 13
if yas < 0, yas > 150 {
    print("Yaşınız 0'dan küçük ve 150'den büyük olamaz.")
} else {
    print("Yaş bilginiz doğrulandı.")
}
``` 
