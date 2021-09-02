### PDO Bağlantı

```
try {

    $host = 'localhost';
    $dbname = 'your';
    $username = 'root';
    $password = 'root';

    $db = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", "$username", "$password");
} catch ( PDOException $e ){
    print $e->getMessage();
}
```