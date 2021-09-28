### MySQL'e Giriş

- MySQL bir ilişkisel veri tabanı yönetim sistemidir.
- Yani MySQL; SQL sorgu dilini kullanan veri tabanı yönetim sistemidir.
- MySQL ücretsiz erişilebilen bir üründür.

##### Mysql'e Bağlanma(Terminal)

```
mysql -u USERNAME -p PASSWORD
```

##### Açıklama Satırı

```
# Bu bir açıklama satırıdır.
```

##### DB Oluşturma

```
CREATE DATABASE db_name;
```

##### DB'leri Listeleme

```
SHOW DATABASES;
```

##### DB Silme

```
DROP DATABASE db_name;
```

##### DB Güncelleme

```
ALTER DATABASE db_name;
```

##### DB Seçmek

```
USE db_name;
```

##### DB Charset Belirleme

```
CREATE DATABASE db_name CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
```

##### DB Charset Güncelleme

```
ALTER DATABASE db_name CHARACTER SET utf8 COLLATE utf8_general_ci;
```
