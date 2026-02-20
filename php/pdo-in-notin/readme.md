# PDO IN - NOT IN

```
$sql = "SELECT * FROM test WHERE id IN (1,2,3)";
$query = $db->query($sql);

if ( $query->rowCount() ){
    print_r($query->fetchAll(PDO::FETCH_ASSOC));
}
```
```
$sql = "SELECT * FROM test WHERE id NOT IN (1,2,3)";
$query = $db->query($sql);

if ( $query->rowCount() ){
    print_r($query->fetchAll(PDO::FETCH_ASSOC));
}
```
