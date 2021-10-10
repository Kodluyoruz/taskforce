cURL Nedir?
======

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
  curl https://swapi.dev/api/films/1/
```
