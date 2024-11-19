# PDO WHERE - LIMIT - ORDER

#### WHERE ####

- = Eşit Değilse
- != Eşit Değilse
- \> Büyük
- \< Küçük
- \>= Büyük Eşit
- \<= Küçük Eşit
- && Ve
- || Veya

```
$sql = "SELECT * FROM test WHERE id < 5";

$query = $db->query($sql);
if ($query->rowCount()) {
    print_r($query->fetch(PDO::FETCH_ASSOC));
}
```

#### ORDER BY ####

```
$sql = "SELECT * FROM test ORDER BY isim ASC";

$query = $db->query($sql);
if ($query->rowCount()) {
    print_r($query->fetch(PDO::FETCH_ASSOC));
}
```

#### LIMIT ####

```
$sql = "FROM test LIMIT 3,2";

$query = $db->query($sql);
if ($query->rowCount()) {
    print_r($query->fetch(PDO::FETCH_ASSOC));
}
```


















