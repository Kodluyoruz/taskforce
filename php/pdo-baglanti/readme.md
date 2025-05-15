### PDO Bağlantı

```
try {

    $host = 'localhost';
    $dbname = 'your';
    $username = 'root';
    $password = 'root';

    $db = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", "$username", "$password");
    
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //$db->query('USE your');
    $db->query("SET CHARACTER SET utf8mb4");
    $db->query("SET CHARACTER_SET_CONNECTION=utf8mb4");
    $db->query("SET @@lc_time_names = 'tr_TR'");

} catch ( PDOException $e ){
    print $e->getMessage();
}
```
