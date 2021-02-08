# Diziye Yeni Eleman Eklemek, Çıkartmak ve Güncellemek

## Diziye Yeni Eleman Eklemek
Dizilere push(), unshift() ve splice() metotlarıyla yeni eleman ekleyebiliriz.

### push() metot
push() metot, var olan bir dizinin sonuna eleman eklemeye yarar.

**Örneğin**

```javascript
  var sports = ['basketball', 'football', 'tennis' ];
  console.log(sports); // basketball, football, tennis
  sports.push('baseball');
  console.log(sports); // basketball, football, tennis, baseball
```
[CodePen'de deneyin](https://codepen.io/kcocalak/pen/wvzjEbm?editors=0012)

### unshift() metot
unshift() metot, var olan bir dizinin başına eleman eklemeye yarar. 

**örneğin**

```javascript
  var sports = ['basketball', 'football', 'tennis' ];
  console.log(sports); // basketball, football, tennis
  sports.unshift('baseball');
  console.log(sports); // baseball, basketball, football, tennis
```
[CodePen'de deneyin](https://codepen.io/kcocalak/pen/mdrLGNM)

### splice() metot
splice() metot diziye hem eleman eklemek için hem de eleman silmek için kullanılır. Metodun ilk parametresi işlemin yapılacağı index numarasını, ikinci parametre ise kaç elemanın silineceğini belirtir.


**örneğin**

```javascript
  var sports = ['basketball', 'football', 'tennis' ];
  console.log(sports); // basketball, football, tennis
  sports.splice(1,0,'baseball');
  console.log(sports); // basketball, baseball, football, tennis
```
[CodePen'de deneyin](https://codepen.io/kcocalak/pen/eYdrPOw?editors=1111)

## Diziden Eleman Silmek
Dizilerden pop(), shift() ve splice() metotlarıyla eleman silebiliriz.

### pop() metot
pop() metot, var olan bir dizinin en sonundaki eleman silmeye yarar.

**örneğin**

```javascript
  var sports = ['basketball', 'football', 'tennis' ];
  console.log(sports); // basketball, football, tennis
  sports.pop();
  console.log(sports); // basketball, football
```
[CodePen'de deneyin](https://codepen.io/kcocalak/pen/NWRMOWB)

### shift() metot
shift() metot, var olan bir dizinin başından eleman silmeye yarar.

**örneğin**

```javascript
  var sports = ['basketball', 'football', 'tennis' ];
  console.log(sports);  // basketball, football, tennis
  sports.shift('baseball');
  console.log(sports);  // football, tennis
```
[CodePen'de deneyin](https://codepen.io/kcocalak/pen/ZEpoqEd?editors=1111)

### splice() metot
splice() metot diziye hem eleman eklemek için hem de eleman silmek için kullanılabileceğini yukarda belirtmiştik. Metodun ilk parametresi işlemin yapılacağı index numarasını, ikinci parametre ise kaç elemanın silineceğini belirtir.

**örneğin**

```javascript
  var sports = ['basketball', 'football', 'tennis' ];
  console.log(sports); // basketball, football, tennis
  sports.splice(1,1);
  console.log(sports); // basketball, tennis
```
[CodePen'de deneyin](https://codepen.io/kcocalak/pen/QWKrZwJ?editors=1111)

## Dizide Eleman Güncellemek
Dizi içerisindeki her bir eleman 0' dan başlayan bir indeks numarasına sahiptir. Bu sayede indeks numaralarını kullanarak güncelleme yapabiliriz.

**Örneğin**

```javascript
  var sports = ['basketball', 'football', 'tennis' ];
  console.log(sports[2]); // tennis
  sports[2] = 'judo';
  console.log(sports[2]); // judo
```
[CodePen'de deneyin](https://codepen.io/kcocalak/pen/YzGLJXV?editors=1111)

