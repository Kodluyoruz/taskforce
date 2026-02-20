PSQL ve Uygulama II
======

## PSQL

PSQL, PostgreSQL ile birlikte gelen terminal tabanlı bir kullanıcı arayüzüdür. PSQL sayesinde komut satırında sorgular yazıp, sonuçlarını görebiliriz. Aşağıda temel
`PSQL` komutlarının ilk bölümünü bulabilirsiniz.

1. PSQL ile PostgreSQL'e host, port, kullanıcı adı ve veritabanı ismi ile bağlanmak için:
```
psql -h <host_name> -p <port_name> -U <kullanıcı_adı> <veritabanı_adı>
```
2. Yeni veritabanı oluşturmak için
```
CREATE DATABASE <veritabanı_adı>
```
3. Yeni tablo oluşturmak için
```
CREATE TABLE <tablo_adı> (
  <sütun_adı> VERİ TİPİ (KISITLAMA)
  ----
```
4. Tablo detaylarını görmek için
```
\d+ <tablo_adı>
```
5. Bir tablodaki sütun ismini değiştirmek için
```
ALTER TABLE <tablo_adı> RENAME COLUMN <sütun_adı> TO <yeni_sütun_adı>
```
6. Bir sütuna UNIQUE kısıtlaması eklemek için
```
ALTER TABLE <tablo_adı> ADD CONSTRAINT <kısıtlama_adı> UNIQUE <sütun_adı>
```

## Daha Fazlası İçin
- [PostgreSQL PSQL Dökümantasyon](https://www.postgresql.org/docs/13/app-psql.html)
- [Pratik PSQL Komutları](https://www.postgresqltutorial.com/psql-commands/)




