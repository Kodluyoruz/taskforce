File System Modülü
======

FS (File System) modülü Node.js'in dosya ve klasör işlemleri yaparken kullandığı bir çekirdek modülüdür. Buradaki çekirdek modülü kavramıyla Node.js yazılımıyla 
birlikte gelmesidir, tekrar oluşturulmasına gerek yoktur ve kullanıma hazırdır. FS modülünü kullanmak için:
```
const fs = require('fs');
```
Modülün barındırdığı fonksiyonları incelediğimizde aynı fonksiyonun senkron ve asenkron versiyonları bulunmaktadır. Senkron fonksiyonlar, 
fonksiyon adı içerisinde `Sync` kelimesi taşır. `fs.readFile` asenkron, `fs.readFileSync` senkron çalışan bir fonksiyondur.

### Dosya Okumak
Buradaki fonksiyonlarımızda kullanım yaygınlığı açısından asenkron versiyonlarını kullanacağız. Dosya okumak için `fs.readFile` fonksiyonu
kulancağız. Aşağıdaki kodumuzda aynı hiyeraşik dosya yapısı içerisinde bulunan `password.txt` dosyası içerisindeki verileri okuyacağız.
```javascript
fs.readFile('password.txt', 'utf8', (err, data) => { // callback fonksiyonu ile birlikte çalıştırıyoruz.
  if (err) console.log(err);                         // hata kontrolü
  console.log(data);                                 // okunan verinin çıktısının alınması
})
```

### Dosya Yazmak
Dosya oluşturmak ve sonrasında dosyaya verilerin yazılması için `fs.writeFile` fonksiyonu kullanılır. Oluşturulacak dosya formatı da belirtilir.
Aşağıda örnek olarak bir **JSON** dosyası oluşturacağız ve içerisine `{"name": "Arin", "age": 6}` verisini yazdıracağız.
```javascript
fs.writeFile('example.json', '{"name": "Arin", "age": 6}', 'utf8', (err) => {
    if (err) console.log(err);
});
```

### Dosyaya Veri Eklemek
Var olan herhangi bir dosyaya veri eklemek için `fs.appendFile` fonksiyonu kullanılır. Aşağıdaki örneğimizde example.txt dosyamızın
yeni satırına 'YENI TEXT' stringini ekleyelim.
```javascript
fs.appendFile('example.txt', '\n YENI TEXT', 'utf8', (err) => {
    if (err) console.log(err);
});
```

### Dosyaya Silmek 
Dosya silmek için `fs.unlink` fonksiyonu kullanılır. Aşağıdaki örneğimizde example.json dosyasını siliyoruz.
```javascript
fs.unlink('example.json', (err) => {
    if (err) console.log(err);
});
```

### Klasör Oluşturmak
Şimdi biraz da klasörler üzerine konuşalım. Klasör oluşturmak için `fs.mkdir` fonksiyonu kullanılır. Klasör oluşturmada tekil değilde
içiçe klasörler oluşturulmak istendiğinde fonksiyona `{ recursive: true }` parametresi eklenmelidir. Aşağıdaki örneğimizde 
uploads klasörü ve uploads klasörü içerisindeki img klasörü birlikte oluşturulur.
```javascript
fs.mkdir('uploads/img', { recursive: true }, (err) => {
    if (err) console.log(err);
}
```

### Klasör Silmek
Klasör silmek `fs.rmdir` fonksiyonu kullanılır. Klasör silme işleminde de tekil değilde
içiçe klasörlersilmek istendiğinde fonksiyona `{ recursive: true }` parametresi eklenmelidir. Aşağıdaki örneğimizde 
uploads klasörü ve uploads klasörü içerisindeki img klasörü birlikte silinecektir.
```javascript
fs.rmdir('uploads', { recursive: true }, (err) => {
    if (err) console.log(err);
})
```
## Daha Fazlası İçin
-[Node.js fs Modülü](https://nodejs.org/dist/latest-v14.x/docs/api/fs.html)
