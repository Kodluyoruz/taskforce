# Fake API Kullanımı (JSON-SERVER) 
======
Bu pratiğimizde bir **Fake** (göstermelik) REST API oluşturacağız. Fake REST API oluşturmanın avantajları:
- Frontend (Ön yüz) tarafı hazır olan bir uygulamayı test etmek isteyebiliriz.
- Yapmayı düşündüğümüz bir Backend (Arka yüz) çalışması için bir prototip oluşturmak isteyebiliriz.
- Postman gibi bir API platformunda farklı HTTP metotlarına ait istekler gerçekleştirmek isteyebiliriz.

FAKE REST API oluşturmak için **json-server** npm paketinden faydalanacağız, bunun için bilgisayarımızda JavaScript çalışma Node.js ( https://nodejs.org/en/) uygulamasının
yüklü olması gerekmektedir. Başlangıç olarak
```
npm init
```
komutu ile package.json dosyası oluşturacağız.
```
npm i json-server
```
komutu ile json-server paketini indiriyoruz.

API için kullanacağımız örnek employees.json dosyası : https://github.com/Kodluyoruz/taskforce/blob/main/rest/FakeAPI/files/employees.json . Bu dosyayı oluşturacağımız api 
klasörünün içerisinde yerleştiriyoruz.

Projemizde bulunan package.json dosyası içerisindeki script bölümünü aşağıdaki şekilde güncelliyoruz.
```
  "scripts": {
    "start:server": "json-server --watch api/employees.json"
  },
```

Bu sayede aşağıdaki komut ile FAKE API çalışmaya başlayacak.
```
npm run start:server
```

### Örnek İstekler
```
GET ALL EMPLOYEES - GET : http://localhost:3000/employees
```
```
GET AN EMPLOYEE DETAILS - GET : http://localhost:3000/employees/:employee_id
```
```
EMPLOYEES - ROLES RELATION - GET : http://localhost:3000/employees?_expand=role
```
```
ADD AN EMPLOYEE - POST : http://localhost:3000/employees
```
```
UPDATE AN EMPLOYEE - PATCH(PUT) : http://localhost:3000/employees/:employee_id
```
```
DELETE AN EMPLOYEE - DELETE : http://localhost:3000/employees/:employee_id
```

## Daha Fazlası İçin
- [JSON-SERVER GITHUB](https://github.com/typicode/json-server)
- [Node.js Dokümantasyon](https://nodejs.org/en/docs/)

