### Kurucu Yıkıcı Methodlar
```
public function __construct(){
        echo 'SINIF BAŞLADI';
    }
public function __destruct(){
    echo 'SINIF SONLANDI';
}
```

Bir sınıf başlatıldığında çalışacak ilk method ``__construct()`` son method ``__destruct()`` methodlarıdır.
![img_4.png](img_4.png)

#### __construct()'a parametre gönderilebilir. Gönderilen parametreleri __construct' sınıfı başlatırken iletebiliriz.

![img_5.png](img_5.png)
