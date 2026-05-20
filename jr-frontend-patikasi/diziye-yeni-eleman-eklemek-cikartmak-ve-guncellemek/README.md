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
**Aşağıda codepen ile deneyimleyebilirsiniz.**

### unshift() metot
unshift() metot, var olan bir dizinin başına eleman eklemeye yarar. 

**Örneğin**

```javascript
  var sports = ['basketball', 'football', 'tennis' ];
  console.log(sports); // basketball, football, tennis
  sports.unshift('baseball');
  console.log(sports); // baseball, basketball, football, tennis
```
**Aşağıda codepen ile deneyimleyebilirsiniz.**

### splice() metot
splice() metot diziye hem eleman eklemek için hem de eleman silmek için kullanılır. Metodun ilk parametresi işlemin yapılacağı index numarasını, ikinci parametre ise kaç elemanın silineceğini belirtir.

**Örneğin**

```javascript
  var sports = ['basketball', 'football', 'tennis' ];
  console.log(sports); // basketball, football, tennis
  sports.splice(1,0,'baseball');
  console.log(sports); // basketball, baseball, football, tennis
```
**Aşağıda codepen ile deneyimleyebilirsiniz.**

## Diziden Eleman Silmek
Dizilerden pop(), shift() ve splice() metotlarıyla eleman silebiliriz.

### pop() metot
pop() metot, var olan bir dizinin en sonundaki eleman silmeye yarar.

**Örneğin**

```javascript
  var sports = ['basketball', 'football', 'tennis' ];
  console.log(sports); // basketball, football, tennis
  sports.pop();
  console.log(sports); // basketball, football
```
**Aşağıda codepen ile deneyimleyebilirsiniz.**

### shift() metot
shift() metot, var olan bir dizinin başından eleman silmeye yarar.

**Örneğin**

```javascript
  var sports = ['basketball', 'football', 'tennis' ];
  console.log(sports);  // basketball, football, tennis
  sports.shift();
  console.log(sports);  // football, tennis
```
**Aşağıda codepen ile deneyimleyebilirsiniz.**

### splice() metot
splice() metot diziye hem eleman eklemek için hem de eleman silmek için kullanılabileceğini yukarda belirtmiştik. Metodun ilk parametresi işlemin yapılacağı index numarasını, ikinci parametre ise kaç elemanın silineceğini belirtir.

**Örneğin**

```javascript
  var sports = ['basketball', 'football', 'tennis' ];
  console.log(sports); // basketball, football, tennis
  sports.splice(1,1);
  console.log(sports); // basketball, tennis
```
**Aşağıda codepen ile deneyimleyebilirsiniz.**

## Dizide Eleman Güncellemek
Dizi içerisindeki her bir eleman 0' dan başlayan bir indeks numarasına sahiptir. Bu sayede indeks numaralarını kullanarak güncelleme yapabiliriz.

**Örneğin**

```javascript
  var sports = ['basketball', 'football', 'tennis' ];
  console.log(sports[2]); // tennis
  sports[2] = 'judo';
  console.log(sports[2]); // judo
```
**Aşağıda codepen ile deneyimleyebilirsiniz.**

