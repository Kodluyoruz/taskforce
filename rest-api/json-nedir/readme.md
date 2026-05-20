# JSON Nedir? 
======
**J**ava**S**cript **O**bject **N**otation ifadesinin kısaltmasıdır. Veri depolamak veya veri iletmek için kullanılan metin tabanlı bir söz dizimi yapısıdır. 
Genellikle bir sunucu ve istemci arasında veri alışverişi için veya yazılımların genel ayarları için kullanılan bir formattır.
- Drupal/config.json
- Node.js/package.json
- https://jsonplaceholder.typicode.com/users

### JSON Veri Tipleri
- String:
  "Sample String", "test1234", "A"
- Number:
  7, 3.2, -97.238
- Boolean:
  true, false
- Null:
  null
- Array: [2,3,5,7] , ["İstanbul", "Ankara", "İzmir"] Array içerisinde kullanılan değerler sıralı olarak listelenebilir.
- Object { "name": "Gürcan", "age":40 } JSON nesneleri verileri key-value çiftleri olarak tanımlar.

Yukarıda görmüş olduğunuz veri tiplerinin tamamı tekil olarak uygun bir JSON formatı işlevini görür. Ancak tek bir `3`, `string` veya `true` gibi ifadeler için ayrı bir .json 
uzantılı dosya oluşturmak mantıklı değildir. Bu nedenle JSON doayaları bir array, nesne ve/veya bunların içiçe geçmiş formlarından oluşur.

#### Örnek movie.json 
``` 
{
    "id":1,
    "title": "Matrix",
    "actors": ["Keanu Reeves", "Carrie Anne Moss"],
    "published_year": 1999,
    "genre": {
      "id": 6,
      "name": "Action"
    },
    "rating": 7.9
}   
      
```

JSON dosyasının uygun formatta olup olmadığını kontrol etmek için **JSONLINT** ( https://jsonlint.com/ ) gibi çevrimiçi araçlar kullanabiliriz.

 ## Daha Fazlası İçin
- [JSON.ORG](https://www.json.org/json-en.html)

