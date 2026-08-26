### Post Kullanımı($_POST)

$_POST bir Süper global değişkendir.

Süper global değişkenler, her zaman tüm kapsamlarda bulunan yerleşik değişkenlerdir.

PHP $_POST, method="post" ile bir HTTP POST isteği gönderdikten sonra verileri toplamak için kullanılır.

```
<form method="post" action="a.php">
  Name: <input type="text" name="isim">
  <input type="submit">
</form>

```
####a.php
```
$name = $_POST['isim'];
echo $name;
```
