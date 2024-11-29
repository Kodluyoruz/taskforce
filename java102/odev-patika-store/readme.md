# PatikaStore

Patika ekibi elektronik eşyaların satıldığı bir sanal bir mağaza açmaya karar verdi ve bu mağazanın ürün yönetim sistemini siz patika gönüllülerinden yapmasını ekliyor.

- Sanal Mağazanın adı "PatikaStore" olacaktır.
- Mağazada Markalar oluşturulacak ve ürünler bu markalar ile eşleşecektir.
    - id : Markanın sistemde kayıtlı benzersiz numarası
    - name : Markanın adı
- Markalar listelenirken her zaman alfabe sırasıyla listelenmelidir.
- Markalar statik olarak kod blokları içerisinden aşağıdaki sıra ile eklenmelidir.
    - Markalar : Samsung, Lenovo, Apple, Huawei, Casper, Asus, HP, Xiaomi, Monster
- Mağazada şuan için 2 tür ürün grubu satılması planlanmaktadır : Cep Telefonları, Notebook
- Daha sonrasında farklı ürün gruplarını eklenebilir olmalıdır.
- Cep Telefonu ürünlerinin özellikleri :
    - Ürünün sistemde kayıtlı benzersiz numarası
    - Birim fiyatı
    - İndirim oranı
    - Stok miktarı
    - Ürün adı
    - Marka bilgisi (Sistemde ekli olan markalar kullanılacaktır)
    - Telefonun hafıza bilgisi (128 GB, 64 GB)
    - Ekran Boyutu (6.1 Inc)
    - Pil Gücü (4000)
    - RAM (6 MB)
    - Renk (Siyah,Kırmızı,Mavi)
- Notebook ürünlerinin özellikleri :
    - Ürünün sistemde kayıtlı benzersiz numarası
    - Birim fiyatı
    - İndirim oranı
    - Stok miktarı
    - Ürün adı
    - Marka bilgisi (Sistemde ekli olan markalar kullanılacaktır)
    - Ram (8 GB)
    - Depolama (512 SSD)
    - Ekran Boyutu (14 inç)
- Kullanıcı sistem üzerinden ilgili kategorideki (Notebook, Cep Telefonları vb.) ürünleri listeyebilimeli
    - Ürünler listelenirken tablo şeklinde konsol ekranında gösterilmeli (System.out.format() kullanılabilir).
- Kullanıcı ürün ekleyebilmeli ve ürünün grubunu (Cep Telefonu, Notebook vb.) seçebilmeli.
- Kullanıcı ürünleri benzersiz numaralarına göre silebilmeli.
- Kullanıcı ürünlerin benzersiz numaralarına ve markalarına göre filtreleyip listeleyebilmeli.

## Marka Listeleme Örneği

````
PatikaStore Ürün Yönetim Paneli !
1 - Notebook İşlemleri
2 - Cep Telefonu İşlemleri
3 - Marka Listele
0 - Çıkış Yap
Tercihiniz : 3
Markalarımız
--------------
- Apple
- Asus
- Casper
- HP
- Huawei
- Lenovo
- Monster
- Samsung
- Xiaomi

````

## Ürün Listeleme Örneği

````

Notebook Listesi

----------------------------------------------------------------------------------------------------
| ID | Ürün Adı                      | Fiyat     | Marka     | Depolama  | Ekran     | RAM         |
----------------------------------------------------------------------------------------------------
| 1  | HUAWEI Matebook 14            | 7000.0 TL | Huawei    | 512       | 14.0      | 16          |
| 2  | LENOVO V14 IGL                | 3699.0 TL | Lenovo    | 1024      | 14.0      | 8           |
| 3  | ASUS Tuf Gaming               | 8199.0 TL | Asus      | 2048      | 15.6      | 32          |
----------------------------------------------------------------------------------------------------

Cep Telefonu Listesi

--------------------------------------------------------------------------------------------------------------------------------------
| ID | Ürün Adı                      | Fiyat     | Marka     | Depolama  | Ekran     | Kamera    | Pil       | RAM       | Renk      | 
--------------------------------------------------------------------------------------------------------------------------------------
| 1  | SAMSUNG GALAXY A51            | 3199.0 TL | Samsung   | 128       | 6.5       | 32        | 4000.0    | 6         | Siyah     | 
| 2  | iPhone 11 64 GB               | 7379.0 TL | Apple     | 64        | 6.1       | 5         | 3046.0    | 6         | Mavi      | 
| 3  | Redmi Note 10 Pro 8GB         | 4012.0 TL | Xiaomi    | 128       | 6.5       | 35        | 4000.0    | 12        | Beyaz     | 
--------------------------------------------------------------------------------------------------------------------------------------


````
