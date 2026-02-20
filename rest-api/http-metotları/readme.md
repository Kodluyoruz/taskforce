# HTTP Metotları 

GET 
- Verileri almak - listelemek için kullanılan istek metodudur.
- http://api.example.com/users
- http://api.example.com/users/1

POST 
- Belirli bir kaynağa veri göndermek için kullanılır. 
- http://api.example.com/users

PUT 
- Belirli bir kaynaktaki verinin tamamının değiştirilmesi için kullanılan metodtur.
- http://api.example.com/users/1
- `{ “name": "Gurcan", "age": 40} `

PATCH 
- Belirli bir kaynaktaki verilerin bir kısmının değiştirilmesi için kullanılan metodtur.
- http://api.example.com/users/1
- `{ "name": "Gurcan"}`

DELETE 
- Belirli bir kaynaktaki verilerin silinmesi için kullanılan metodtur.
- http://api.example.com/users/1

CONNECT - TRACE - OPTIONS - HEAD

#### SAFE Metotlar 
GET – HEAD – OPTIONS : Sunucu “state” tarafında değişiklik oluşturmazlar. “Read-only” yapısındadırlar.
#### IDEMPOTENT Metotlar
GET – HEAD - OPTIONS – DELETE – PUT – TRACE : Tekrar durumunda sunucu state yapısında herhangi bir yan etki bırakmazlar. Safe metodlar, idempotenttir.

## Endpoint (Sorgu Adresi)
REST API kullanımında gönderilen istek ile verilen cevap için belirlenen buluşma noktasıdır.
Root(Base) /Path yapısından oluşur, isimler kullanılır, fiil ilgili HTTP metodu ile belirtilir. Dökümantasyon tarafından belirtilir.
- https://jsonplaceholder.typicode.com /posts
Değişen değer için genelde (:) kullanılır.
- https://jsonplaceholder.typicode.com/posts/1 => /posts/:id veya /posts/{{id}}
- https://jsonplaceholder.typicode.com/posts/1/comments
Sorgu parametreleri için (?) kullanılır.
- Aslında sorgu parametreleri REST yapısının bir parçası değildir ancak sorgu adreslerinde sıkça rastlarız.
- http://example.com/articles?sort=author&date=published

 ## Daha Fazlası İçin
- [HTTP Methods - MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)


