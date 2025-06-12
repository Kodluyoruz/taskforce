## JS ve PHP

- PHP'yi HTML içerisinde gömülü olarak kullandığımız gibi kolayca Javascript ile de kullanabiliriz.
- PHP ile JS ve JS Frameworkleri(Vue, React) içi ServerSide çalışabiliriz.(restapi)

```html
<!doctype html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Patika PHP Basics</title>

    <div id="content"></div>
</head>
<body>

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
    axios.get('https://stebilisim.com/test2.php', {
        params: {
            getPost: true
        }
    })
        .then(function (response) {
            console.log(response.data);

            let content = document.getElementById('content'), html;
            for (const responseElement of response.data) {
                console.log(responseElement.page_title, responseElement.page_description,responseElement.page_image);
                html += `<img src="https://stebilisim.com/catalog/uploads/${responseElement.page_image}">`;
                html += `<h1>${responseElement.page_title}</h1>`;
                html += `<div>${responseElement.page_description}</div>`;
            }

            content.innerHTML = html;
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed
        });
</script>
</body>
</html>
```

```php
<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

try {
    $db = new PDO('mysql:host=localhost;dbname=*;','*','*');
    $db->query("SET CHARACTER SET utf8mb4");
}catch (PDOException $e){
    echo $e->getMessage();
}


if (isset($_GET['getPost'])){
    $q = $db->query("SELECT ptc.page_title, ptc.page_description, page.page_image FROM page 
                                INNER JOIN page_to_content ptc ON page.page_id = ptc.page_id && ptc.language_id = 1
                                WHERE page_type = 'blog' ");
    $data = $q->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);

}

```

![img.png](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/php/js-ve-php/figures/img.png)
