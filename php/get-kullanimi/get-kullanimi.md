### Get Kullanımı($_GET)

$_GET bir Süper global değişkendir.

Süper global değişkenler, her zaman tüm kapsamlarda bulunan yerleşik değişkenlerdir.

PHP $_GET, bir HTTP GET isteği gönderdikten sonra verileri toplamak için kullanılır.

```
<form method="get" action="a.php">
  Name: <input type="text" name="isim">
  <input type="submit">
</form>

```
####a.php
```
$name = $_GET['isim'];
echo $name;
```
