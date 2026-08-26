# PDO Between

```
<?php
try {

    $host = 'localhost';
    $dbname = 'your';
    $username = 'root';
    $password = 'root';

    $db = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", "$username", "$password");
} catch ( PDOException $e ){
    print $e->getMessage();
}

    $sql = "SELECT * FROM test WHERE id BETWEEN 2 AND 4";
    $query = $db->query($sql);

    if ( $query->rowCount() ){
        print_r($query->fetchAll(PDO::FETCH_ASSOC));
    }

?>
```
