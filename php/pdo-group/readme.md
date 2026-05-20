### PDO GROUP

```
$sql = "SELECT COUNT(id) toplam, soyisim FROM test GROUP BY soyisim";
$query = $db->query($sql);

if ( $query->rowCount() ){
    print_r($query->fetchAll(PDO::FETCH_ASSOC));
}
```
