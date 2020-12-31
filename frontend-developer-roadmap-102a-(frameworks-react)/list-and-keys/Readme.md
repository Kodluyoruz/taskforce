# Listeler ve Key Kullanımı

React uygulamaları yazarken çoğu zaman listeleme yapmamız gerekebilir. Özellikle elimizde olan verileri ekrana yazdırmak için React'ta `map` ile listeleme yöntemini kullanmamız gerekir.

React uygulamalarında listeleme işlemini anlamamız için öncelikle `map` fonksiyonunun ne işe yaradığı üzerinde durmamız gerekir. `map` bir array metodudur ve sonuç olarak yeni bir array çıktısı verir.

```javascript
const array = [2, 4, 6, 8];

const newArray = array.map((item) => item * 2);

console.log(newArray);

// --> [ 4, 8, 12, 16 ]
```

Yukarıdaki örnekte görüldüğü gibi `map` her bir elemanı üzerinde belirtilen işlemi yapar. React uygulamalarında `map` ile listeleme yapmak için bu metodu içselleştirmek ve birçok örnek yapmak gerekir.

### React uygulamalarında verileri listeleme

```javascript
function PersonList() {
  const ages = [
    {
      age: 22,
      name: "Tolga",
    },
    {
      age: 33,
      name: "Ozan",
    },
    {
      age: 46,
      name: "Selin",
    },
  ];

  const listItems = ages.map((person, index) => {
    // her bir liste elemanı için özgün bir key belirledik
    <li key={index}>
      // her bir liste elemanının ismini ve yaşını aldık
      {person.name} : {person.age}
    </li>;
  });
  return <ul>{listItems}</ul>;
}
```

Yukarıdaki örnekte olduğu gibi, bir veri içerisindeki isimleri ve yaşları eşleştirerek ekrana yazdırdık.

Yazılan bu kodun çıktısı aşağıdaki gibi olacaktır:

```
- Tolga : 22
- Ozan : 33
- Selin : 46
```

Eğer dikkat ettiyseniz, veriyi listelerken `li` etiketi içerisinde her bir liste elemanını temsilen bir `key` kullandık. Keyler hangi liste elemanı üzerinde değişiklik yapıldığını belirlemede React'a yardımcı olur. Bu açıdan değerlendirecek olursak listeleme yaparken **_özgün_** bir `key` kullanmayı unutmamamız gerekir. Bu genelde bir verinin id'si olur fakat yukarıdaki örnekteki gibi id belirtilmemişse index kullanılabilir.
