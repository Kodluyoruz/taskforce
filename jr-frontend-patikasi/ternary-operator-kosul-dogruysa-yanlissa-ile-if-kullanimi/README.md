# Ternary Operator

Ternary operator 3 adet parametre alan tek JavaScript operatorüdür. `If` kullanarak kontrol etmek istediğimiz koşullarda `ternary operator` kullanarak satır sayısı olarak avantaj sağlayabiliriz. 

**Ternary operatorün aldığı 3 parametre şu şekildedir:**
- İlk önce bir condition belirtiriz ve sonrasında hemen bir *`?`* koyarız
- Sonrasında, eğer yazdığımız condition doğru ise ne yapmak istediğimizi belirtir ve sonuna *`:`* koyarız
- Ve sıra geldi koşulumuz yanlış ise ne yapmak istediğimize.

**Bu aşamaları görsel bir örnekle açıklayalım:**

![Ternary Operator](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/ternary-operator-kosul-dogruysa-yanlissa-ile-if-kullanimi/figures/TernaryOperator.jpg)

Gördüğümüz üzere eğer yağmur yağıyorsa `umbrella` dönecek, fakat yağmur yağmıyorsa `nothing` dönecek.

Yazdığımız condition'nın bize direkt olarak `false` dönmesinin yanı sıra, aynı zamanda `false` dönecek diğer ifadeler şunlardır: `null`, `NaN`, `0`, `""`(boş string) ve `undefined`.

## Ternary Operatorleri Zincirleme
Ternary operatorleri aynı zamanda birbiri ardına **zincirleyerek** *(chaining)* kullanabiliriz. Bu sayede farklı olasılıkları da katarak daha detaylı senaryoları kontrol edebiliriz.

```javascript
var money = 40;
var canBuy = 
    (money < 17) ? "Satın alamazsın..":
    (money > 30) ? "Satın alabilirsin..":
    "Para miktarını girmen gerekmektedir..";

console.log(canBuy) // "Satın alabilirsin.."
```

Burada koşullar denenecek ve doğru olan koşul sonrasında bir string dönecek. Yukarıda gördüğümüz üzere `money` değişkeni 30'dan büyük olduğu için `‘Yes, you can buy..’` yazısının yazdırılması beklediğimiz bir sonuçtur.

Peki eğer `money` değişkenine hiçbir atama yapmasaydık ne olacaktı ? Bu durumda en sonda belirttiğimiz `default` değer dönecekti.

**Hadi aşağıdaki örnekleri codepen ile deneyimle!**

1. Çok basit bir koşul alıştırması! Kendince değiştirebilir ve nasıl çalıştığını öğrenebilirsin!

2. Aşağıda hızımıza göre bize ceza yazan basit bir uyarı sistemi geliştirdik. Hadi sen de düzenlemeler yap!

## Kaynaklar
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
- https://muratdogan.medium.com/javascript-hap-yaz%C4%B1s%C4%B1-ternary-operator-2788782189fb
- https://carlosdillon.com/what-does-the-question-mark-mean-in-javascript
