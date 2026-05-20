Postman Uygulaması
======

SmartEdu projemizde yeni bir kurs oluşturmak istiyoruz ancak bir sorunumuz var! Uygulama oluşturmak için frontent tarafındaki sayfamız hazır değil. Bir şekilde
sanki frontend tarafında yeni bir kurs oluşturmak istiyoruz şeklinde bir istek göndermeyi taklit etmemiz gerekir. İşte bunun için Postman yazılımını 
kullanacağız.

Aşağıdaki linki kullanarak Postman'i indirebiliriz.

### [Postman İndir](https://www.postman.com/downloads/)

### Yeni Kurs Oluşturmak

Postman aracılığıyla `http://localhost:3000/courses` adresine **POST** isteği göndereceğiz. Bu durumda göndermek istediğimiz kurs verisinin oluşturduğumuz
`Course` modeliyle eşleşmesi gerekir.
```
{
    "name": "Python For Beginners",
    "description": "Python description"
}
```

Bu isteğimiz sonucunda ilgili `controller` fonksiyonumuzda aşağıda yazdığımız kod bölümü sayesinde success mesajı ve oluşturduğumuz kursun olduğu **JSON** formatında
bir geri dönüş alacağız.

```javascript
    res.status(201).json({
      status: 'success',
      course,
    });
```

Alacağımız örnek geri dönüş mesajı ise aşağıdadır. 
```
{
    "status": "success",
    "course": {
        "_id": "609417c6548cd52f289375cf",
        "name": "Python For Beginners",
        "description": "Python description",
        "createdAt": "2021-05-06T16:22:30.796Z",
        "__v": 0
    }
}
```

Özet olarak ne yapmış olduk? Kurs oluşturma sayfamız olmamasına rağmen yeni bir kurs oluşturabildik.

## Daha Fazlası İçin
- [Learning Postman](https://learning.postman.com/docs/getting-started/sending-the-first-request/)
