MongoDB Giriş
======

Uygulamamızın sayfalarına ulaşabiliyoruz. Ancak hala uygulama verilerimizi tamamı statik bir şekilde template dosyalarının içerisinde bulunuyor. 
Bir uygulama oluşturmanın temel mantığı nedir? Uygulamamızdaki verileri gerektiğinde silmek, güncellemek, yeni veri yüklemek ve bu değişimleri
görmek isteriz. 


Bunun için verilemizin uygulamamızın dışında başka bir yazılımlarda bulundurmak en kolay yöntemdir. Bu yazılımlara veritabanı denir.

## Veritabanı
En basit tanımıyla verilerimizi depolayacağımız ve verilerimiz üzerinde işlemler yapabileceğimiz yazılımlara veritabanı nedir. Biz verilerimizi
uygulamanın dışında tutarak, verilerle ilgili karmaşık işlemleri veritabanı yazılımlarına bırakırız. Veri türlerine veya veri saklama şekillerine göre
veritabanları genel olarak SQL ve NoSQL veritabanları olarak ayrılırlar.

### SQL vs NoSQL
Veritabanları başlı başına ayrı bir çalışmanın konusu. O nedenle biz burada genel olarak konunun üzerinden geçeceğiz. Genel olarak SQL ve NoSQL 
veritabları arasındaki farkları sıralamak istersek:

|         | SQL Veritabanları          | NoSQL Veritabanları  |
| ------------- |:-------------|:-----|
| **Veri Depolama Modeli**      | Sabit satır ve sütunlardan oluşan tablolar | JSON dökümanlar |
| **Schema Yapısı**      | katı      |   değişebilir |
| **Ölçeklenebilirlik** | dikey      |    yatay |
| **Joins** | gerekli      |   gerekli değil |
| **Örnekleri** | MySQL, MSQL, PostgreSQL ...      |   MongoDB, CouchDB, Redis ... |

SQL ve NoSQL kavramlarını karşılaştırısak:
![alt text](https://github.com/Kodluyoruz/taskforce/blob/node.js/node-js/MongoDBIntro/figures/MongoDB.PNG)

## MongoDB

Biz bu uygulamamızda bir **NoSQL** bir veritabanı olan **MongoDB** veritabanını kullanacağız. Genle bir tanım vermek istersek: MongoDB, döküman tabanlı,
genel amaçlı kullanıma uygun, dağıtık bir veritabanı yazılımıdır. Özellikle modern bulut uygulamalarında sıklıkla kullanılır.


`https://www.mongodb.com/try/download/community` adresinden işletim sistemine uygun versiyonu indirebilirsiniz.
