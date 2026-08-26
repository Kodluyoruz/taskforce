### PDO SUM MIN MAX COUNT GROUP HAVING

##### SUM

```
 $sql = 'SELECT SUM(id) FROM test';

    $query = $db->query($sql);
    if ( $query->rowCount() ){
        print_r($query->fetch(PDO::FETCH_ASSOC));
    }
```
##### MIN

```
 $sql = 'SELECT MIN(id) FROM test';

    $query = $db->query($sql);
    if ( $query->rowCount() ){
        print_r($query->fetch(PDO::FETCH_ASSOC));
    }```
##### MAX

```
$sql = 'SELECT MAX(id) FROM test';

    $query = $db->query($sql);
    if ( $query->rowCount() ){
        print_r($query->fetch(PDO::FETCH_ASSOC));
    }```
##### COUNT

```
  $sql = 'SELECT COUNT(id) FROM test';

    $query = $db->query($sql);
    if ( $query->rowCount() ){
        print_r($query->fetch(PDO::FETCH_ASSOC));
    }
```


##### HAVING

```
$sql = "SELECT COUNT(id) toplam, soyisim FROM test GROUP BY soyisim HAVING toplam > 2";

$query = $db->query($sql);
if ($query->rowCount()) {
    print_r($query->fetch(PDO::FETCH_ASSOC));
}
```




















