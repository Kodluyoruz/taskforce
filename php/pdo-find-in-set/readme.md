### PDO FIND IN SET
```
$sql = "SELECT * FROM test WHERE FIND_IN_SET('B', abonelikler)";
$query = $db->query($sql);

if ( $query->rowCount() ){
    print_r($query->fetchAll(PDO::FETCH_ASSOC));
}
```
