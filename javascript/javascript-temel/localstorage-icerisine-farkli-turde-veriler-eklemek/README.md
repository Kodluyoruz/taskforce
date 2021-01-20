# localStorage içerisine Farklı Türde Veriler Eklemek ile İlgili Sorular
## Sorular

1.localStorage hangi veri türünde data tutar?

- [ ] Boolean
- [x] String
- [ ] Object
- [ ] Number

2. `var movies = ["Kasaba", "Kış uykusu","Bir Zamanlar Anadolu"]` Verilen movies dizisini localStorage alanına nasıl kaydetmeliyiz?


- [ ] ```localStorage.setItem("Nuri Bilge Ceylan", movies);```

- [ ] ```localStorage.getItem("Nuri Bilge Ceylan", movies); ```

- [x] ```localStorage.setItem("Nuri Bilge Ceylan", JSON.stringfy(movies)); ```

- [ ] ```localStorage.getItem("Nuri Bilge Ceylan" , JSON.stringfy(movies));```

3.localStorage alanına kaydedilen veriye nasıl erişiriz ?

- [x] ```var retrievedData = JSON.parse(localStorage.getItem("Nuri Bilge Ceylan"))```

- [ ] ```var retrievedData = JSON.parse(localStorage.setItem("Nuri Bilge Ceylan"))```

- [ ] ```var retrievedData = localStorage.setItem("Nuri Bilge Ceylan")```
- [ ] ```var retrievedData = localStorage.getItem("Nuri Bilge Ceylan")```

4.localStorage alanından kaydedilen bütün verileri nasıl sileriz?

- [ ] `localStorage.clearItem()`
- [ ] `localStorage.remove()`
- [ ] `localStorage.removeItem(key)`
- [x] `localStorage.clear()`
