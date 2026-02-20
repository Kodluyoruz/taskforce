### Cookie Kullanımı

``setcookie($params...)`` fonksiyonu ile çerezler tanımlanır.

``setcookie($name, $value, $time, $path, $domain, $secure, $http_only)``

- $name : Cookie’nin ismidir. Cookie bu isim üzerine çağırılır.
- $value : Cookie değeridir.
- $time : Tarayıcı üzerinde aktif olacağı saniye cinsinden tutulan cookie süresidir. Bir değer verilmez ise tarayıcı kapandığında cookie silinir, tarayıcı açık kaldığı süre içerisinde aktif olur. Zaman değeri, şu anki zaman + aktif olacağı süre şeklinde verilebilir. (örnek: time() + 60 //60 saniye)
- $path : Sitede hangi dizin içerisinde çalışması gerektiğini belirtir. Bütün sitede aktif olunması istenir ise ” / ” değeri girilir.
- $domain : Cookie’nin çalıştığı site içerisinde hangi alt domain üzerinde çalışacağını belirtir. Yazılmaz ise çalıştığı sitedeki ana domain baz alınır, tüm site üzerinde etkili olur.
- $secure : True olarak aktif edilir ise sadece HTTPS bağlantılarda PHP çerez kullanımı gerçekleşir. Cookie güvenliği arttırma işlemi için kullanılır. Çerez bilgisi sadece https bağlantısı ile alınacağı belirtilir.
- $http_only : True olarak kullanımı aktif edilir ise cookie sadece sunucu üzerinden erişilebilir olacaktır. Javascript ile tarayıcı üzerinde cookie düzenlenemeyecektir.

```
setcookie("bgcolor", '#303030', time() + 60);

$color = isset($_COOKIE['bgcolor']) ? htmlspecialchars_decode($_COOKIE['bgcolor']) : '#fab702';
echo $color;
echo "<div style='width: 100px; height: 100px; background-color:".$color."'></div>";
```

### Dizi Depolama

```
setcookie("user[a]", 'a', time() + 60);
setcookie("user[b]", 'b', time() + 60);
setcookie("user[c]", 'c', time() + 60);

print_r($_COOKIE);
```
