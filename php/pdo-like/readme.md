# PDO LIKE

```
$sql = 'SELECT * FROM test WHERE isim LIKE "%h%"';


    $query = $db->query($sql);

    if ( $query->rowCount() ){
        print_r($query->fetchAll(PDO::FETCH_ASSOC));
    }
```
