# Fetch API ile Çalışmak
Bir veri sunucudan geldikten sonra işlem yapmaya olanak sağlayan asenkron bir yapıdır.

Konuyu anlamak için ilk olarak bir JSON dosyasından veri çekeceğiz, daha sonra bir API üzerinden veri çekeceğiz.

### JSON Dosyasından Veri Çekmek

data isminde bir dosya üzerinde çalıştığımızı varsayalım. İçerisinde **database.json** isminde bir dosyamız var ve aşağıdaki bilgileri içeriyor.

```json
{
    "username": "kodluyoruz",
    "password": 123456,
    "domainName": "kodluyoruz.org",
    "IDs": [1, 2, 3, 4, 5]
}
```

Bu dosyadaki bilgileri almak için aşağıdaki şekilde bir kullanım yaparız.

```javascript
fetch("data/database.json").then(response => {
    return response.json()
})
```

Yukarıdaki kullanımda ilk olarak *fetch* ile **database.json** dosyasına istek attık, daha sonra *then* ile isteğimize yanıt geldikten sonra aldığımız cevabı,  *response* ile json dosyası olarak olarak dönmek (return etmek) istedik.

```javascript
fetch("data/database.json").then(response => {
    return response.json()
}).then(responseJson => {
    console.log(responseJson.username); //kodluyoruz
})
```

Daha sonra ise *responseJson* ile return ettiğimiz bilgileri kullandık.

### API Üzerinden Veri Çekmek

```javascript
fetch("https://jsonplaceholder.typicode.com/users").then(response => {
    return response.json()
}).then(responseJson => {
    responseJson.forEach(element => {
        if(element.id === 1) {
            console.log(element.name) //Leanne Graham
        }
    });
})
```

Yukarıda yaptığımız işlemleri sırasıyla anlamaya çalışalım. 

Öncelikli olarak sahte online bir API'a istek attık ve rastgele bir kullanıcı listesi aldık. 

Daha sonra oradan gelen cevabı *response.json* olarak döndük (return etmek). 

Daha sonra return ettiğimiz bilgiler birden fazla olduğundan dolayı kullanmak için forEach döngüsü kullandık.

Daha sonra şöyle dedik, "eğer döndüğümüz bilginin id'si 1 ise, o kullanıcının adını konsola yazdır."

