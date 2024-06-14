# Postman Kullanımı
======
Postman bir API platformudur. API geliştirmek , test etmek ve/veya hazır bir API kullanımı için gerekli isteklerde bulunabileceğimiz bir uygulamadır. Insomnia REST Client, HTTPie
gibi alternatifleri de bulunmasına karşın en çok kullanılan API aracıdır.

Postman kurulumu ve kullanımı için resmi dökümantasyonda bulunan aşağıdaki linki kullanabiliriz:
- https://learning.postman.com/docs/getting-started/introduction/

### Postman Kullanım Senaryoları:
- Bir uygulama geliştirmek istiyoruz ve geliştirmeye başlamada kullanmak istediğimiz ücretli veya ücretsiz bir REST API tarafına ilgili istekleri göndererek gelen
sunumları inceleyebiliriz.
- Kendimizin bir REST API oluşturduğu bir senaryoyu düşünelim. Geliştirme aşamasında Postman yardımıyla gelen isteklere karşı uygulamamızın vereceği cevapları test edebiliriz.

### İlgili İstek (Request)

```
  GET: https://jsonplaceholder.typicode.com/users
```

### İlgili Cevap (Response)

```
[
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
    },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
  },
  
  -----
```

## Daha Fazlası İçin
- [Postman Dökümantasyon](https://learning.postman.com/docs/getting-started/introduction/)
- [Testfully - Postman Alternatifleri](https://testfully.io/blog/top-5-postman-alternatives/)

