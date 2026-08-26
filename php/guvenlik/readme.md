## Güvenlik

### Dosya ve Dizin Güvenliği

- Dosya uzantısı .php olmayan dosyalara dışardan erişimi kapatmazsak içerikleri okunabilir.

![img_1.png](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/php/guvenlik/figures/img_1.png)

Problem işte tam olarak burada!

![img_2.png](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/php/guvenlik/figures/img_2.png)

![img_3.png](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/php/guvenlik/figures/img_3.png)


Peki dizine erişmek istediğimizde karşımıza nasıl bir sorun çıkıyor?

*Artık burada varsa bir açık geçmiş ola :)*

![img_4.png](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/php/guvenlik/figures/img_4.png)

Şimdi bu hatanın da önüne geçelim. Bu noktada imdadımıza ``.htaccess`` koşuyor.

```Options -Indexes``` 

VEEE İŞTE SONUÇ!

![img_5.png](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/php/guvenlik/figures/img_5.png)

Ama hala inc uzantılı dosyamıza erişilebilir.

![img_2.png](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/php/guvenlik/figures/img_2.png)

```.htaccess``` dosyama ``deny from all`` komutunu vererek artık bu dosyaların çalıştırılmamasını sağlayabiliriz.

![img_6.png](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/php/guvenlik/figures/img_6.png)

![img_7.png](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/php/guvenlik/figures/img_7.png)

Dosyalarımız artık sadece dahil edildikleri yerde çalışacaklar.

![img_8.png](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/php/guvenlik/figures/img_8.png)

### XSS Cross Site Scripting

XSS (Cross Site Scripting) script kodları üzerinden (genelde javascript) bir web sayfasına saldırı yapılmasıdır.

XSS çoğunlukla tarayıcıda saklanan bilgiler olan cookielere saldırı amacı ile kullanılmaktadır.

![img_11.png](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/php/guvenlik/figures/img_11.png)

![img_10.png](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/php/guvenlik/figures/img_10.png)

![img_12.png](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/php/guvenlik/figures/img_12.png)

*Çözüm* htmlspecialchars

![img_13.png](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/php/guvenlik/figures/img_13.png)

![img_14.png](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/php/guvenlik/figures/img_14.png)

Aynı zamanda cookie güvenliği için ``Http Only`` cookieler oluşturabilirsiniz.

```
setcookie('test_cookie', 'selamlar', time() + 86400, '/', 'localhost', null, true);
```
![img_15.png](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/php/guvenlik/figures/img_15.png)

![img_16.png](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/php/guvenlik/figures/img_16.png)

### SQL Injection

```
<form action="" method="post">
    <input style="width: 70%" type="text" name="username" value="<?= @$_POST['username'] ?>"><br><br>
    <input style="width: 70%" type="text" name="password" value="<?= @$_POST['password'] ?>"><br><br>
    <input type="submit" name="login" value="Gönder">
</form>
<?php
if (isset($_POST['login'])){

    $db = new PDO("mysql:host=localhost;dbname=testdb;", 'root','root');

    $sql = "INSERT INTO user SET username = '{$_POST['username']}', password = '{$_POST['password']}'";

    echo $sql;
    $add = $db->query($sql);


}
?>
```

```
'; CREATE USER 'sahin_sql2'@'localhost' IDENTIFIED BY '12345'; 

    GRANT ALL PRIVILEGES ON * . * TO 'sahin_sql2'@'localhost';
```

![img_17.png](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/php/guvenlik/figures/img_17.png)

