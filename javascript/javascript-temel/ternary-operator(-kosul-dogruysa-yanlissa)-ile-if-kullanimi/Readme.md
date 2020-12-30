# Ternary Operator

Ternary operator 3 adet parametre alan tek JavaScript operatorüdür. `If` kullanarak kontrol etmek istediğimiz koşullarda `ternary operator` kullanarak satır sayısı olarak avantaj sağlayabiliriz. Ternary operatorün aldığı 3 parametre şu şekildedir:

- İlk önce bir condition belirtiriz ve sonrasında hemen bir `?` koyarız
- Sonrasında, eğer yazdığımız condition doğru ise ne yapmak istediğimizi belirtir ve sonuna `:` koyarız
- Ve sıra geldi koşulumuz yanlış ise ne yapmak istediğimize.

Bu aşamaları görsel bir örnekle açıklayalım:

![Ternary Operator](figures/TernaryOperator.jpg)

Gördüğümüz üzere eğer yağmur yağıyorsa `umbrella` dönecek, fakat yağmur yağmıyorsa `nothing` dönecek.

Yazdığımız condition'nın bize direkt olarak `false` dönmesinin yanı sıra, aynı zamanda `false` dönecek diğer ifadeler şunlardır: `null`, `NaN`, `0`, `""`(boş string) ve `undefined`.

Şimdi birkaç örnek yapıp daha iyi anlayalım:

```javascript

let boolean;

const isBooleanTrue = boolean ? true : false;

console.log(isBooleanTrue)
>> false

// Boolean değeri hiçbir şeye atanmadığı için undefined dönecektir.

console.log(boolean)
>> undefined


```

```javascript

let age = 24;

let permission = (age >= 18) ? "Giriş yapabilirsiniz." : "Giriş yapamazsınız.";

console.log(permission);
>> "Giriş yapabilirsiniz."

```

[Codepen'de deneyin](https://codepen.io/ecsabanci/pen/bGwLEyJ)

```javascript

let firstCity = "Ankara";

let secondCity = "İstanbul";

const isEqual = (firstCity === secondCity) ? "İki şehir aynı" : "İki şehir aynı değil";

console.log(isEqual)
>> "İki şehir aynı değil"


```


---

Codepen'de yapılmış diğer örnekler:
- [Kolay Örnek](https://codepen.io/chris__sev/pen/orOEjd)
- [Zor Örnek](https://codepen.io/timswilson/pen/BpLWbd)

---

## Kaynaklar

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

- https://muratdogan.medium.com/javascript-hap-yaz%C4%B1s%C4%B1-ternary-operator-2788782189fb

- https://carlosdillon.com/what-does-the-question-mark-mean-in-javascript