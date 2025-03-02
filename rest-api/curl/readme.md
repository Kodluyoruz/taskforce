# cURL Nedir?

URL üzerinden veri transferi yapmamızı sağlayan bir komut satırı aracıdır. REST API çerçeverinde sorgu adreslerine yapılan isteklerde sıklıkla kullanılır. HTTP, HTTPS, FTP, FTPS, GOPHER, GOPHERS, IMAP, IMAPS vs.. bir çok protokolü desteklemektedir.

### cURL indir
- https://curl.se/download.html
- https://git-scm.com/downloads (Git Bash kullanımı için)

### cURL komut sseçenekleri
- **-i** (--include): Çıktı içerisinde HTTP başlıklarını da gösterir.
- **-I** (--head): Yalnızca HTTP başlıklarını görmek için kullanılır.
- **-o** (--output) <file> : Çıktıyı bir dosyaya yazdırmak için kullanılır.
- **-v** (--verbose): Daha fazla detay.
  
### Çalışmada bulunan cURL komutları
  
```
  GET A FILM DTEAIL (SWAPI)
  curl https://swapi.dev/api/films/1/
```
```
GET POPULAR MOVIES (TMDBAPI)
curl https://api.themoviedb.org/3/movie/popular?api_key=your_api_key
```
```
GET POPULAR MOVIES (TMDBAPI) -d seçeneği ile
curl -X GET -G -d api_key=your_api_key https://api.themoviedb.org/3/movie/popular
```
```
GET A MOVIE DETAIL (TMDBAPI) -d seçeneği ile
curl -X GET -G -d api_key=your_api_key https://api.themoviedb.org/3/movie/:movie_id
```
```
GET ALL EMPLOYEES (Fake API)
curl http://localhost:3000/employees
```
```
GET AN EMPLOYEE DETAIL (Fake API)
curl http://localhost:3000/employees/:employee_id
```
```
POST AN EMPLOYEE (Fake API)
curl -X POST -H "Content-Type: application/json" -d '{ "first_name": "Ricardo", "last_name": "Quaresma", "email": "ricardo@test.tr", "gender": "Male", "roleId": 3 }' http://localhost:3000/employees
```
```
DELETE AN EMPLOYEE (Fake API)
curl -X DELETE http://localhost:3000/employees/:employee_id
```
```
UPDATE AN EMPLOYEE (Fake API) - PATCH
curl -X PATCH -H "Content-Type: application/json" -d '{ "first_name": "Ricardo", "last_name": "Quaresma"}' http://localhost:3000/employees/:employee_id
```
```
UPDATE AN EMPLOYEE (Fake API) - PUT
curl -X PUT -H "Content-Type: application/json" -d '{ "first_name": "Ricardo", "last_name": "Quaresma"}' http://localhost:3000/employees/:employee_id
```
  
## Daha Fazlası İçin
- [cURL - Dökümantasyon](https://curl.se/docs/)
