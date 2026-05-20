# LocalStorage İçine Farklı Türde Veriler Eklemek

```bash
let user = "kodluyoruz" 
localStorage.setItem('userInfo', user)
```

User objesini localStorage'de tutmak için setItem() fonksiyonu yukarıdaki gibi kullanılabilir. localStorage içindeki görüntüsü aşağıda verilmiştir. Ancak daha kompleks objeler için bu kod satırı yetersizdir. 

![user](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/localstorage-icerisine-farkli-turde-veriler-eklemek/images/user.png)  

 ```bash
let userStatus = {userName: 'kodluyoruz', isActive: true}
localStorage.setItem('user', userStatus)
 ```
Yukarıdaki komutun localStorage içerisindeki karşılığı aşağıdaki gibidir. 

![user-complex](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/localstorage-icerisine-farkli-turde-veriler-eklemek/images/user-complex.png)

Bunun sebebi localStorage içindeki bilgilerin key: value şeklinde, yalnızca string türünde değerler ile saklanmasıdır. İlk örnekteki user değişkeni userInfo bilgisine atanabilir ancak userStatus bir obje olduğundan yukarıdaki görseldeki sonuçla karşılaşırız. Bunu önlemek için userStatus objesini stringe çevirmek gereklidir.


 ```bash
let userStatus = {userName: 'kodluyoruz', isActive: true}
localStorage.setItem('user', JSON.stringify(userStatus))
 ```

![user-complex](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/localstorage-icerisine-farkli-turde-veriler-eklemek/images/user-complex-fixed.png)

### LocalStorage'den Veri Alma 
LocalStoragede değişkenler string olarak tutulduğundan, localStoragedan user objesini almak istediğimizde userName ve isActive değerlerine erişemeyiz. Stringify işlemini geri almak için parse() metodu kullanılabilir. 

![user-complex](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/localstorage-icerisine-farkli-turde-veriler-eklemek/images/localStorage-getItem-parse.png)

