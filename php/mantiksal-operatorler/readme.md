# Mantıksal Operatörler

**Operatörlerimiz**

![Operatörler](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/php/mantiksal-operatorler/figures/php-mantıksal-operatör.png)

Bu operatörlerde matematiksel olarak yaptıklarını programlama alanında da yaparlar.

Konuyu kavramanız için teorik bir örnek vermek istiyorum;

Bir restorana gidiyorsunuz ve garsona - Pilav veya Bulgur yemek istiyorum - diyorsunuz.
Garson cevaben size şu seçenekleri sıralayabilir.

    - Pilavımız var ama bulgur yok  (Olumlu)
    - Pilav yok ama bulgur var      (Olumlu)
    - Pilav da var bulgur da var    (Olumlu)
    - Pilav da yok bulgur da yok    (Olumsuz)

Bu sonuçlardan sadece 4. sonuç olan yani her ikisininde "yok" olduğu durum olumsuz olur.

Bu kez garsona - Pilav ve köfte yemek istiyorum - diyorsunuz.
Garson cevaben size şu seçenekleri sıralayabilir.

    - Pilavımız var ama köfte yok   (Olumsuz)
    - Pilav yok ama köfte var       (Olumsuz)
    - Pilav da var köfte da var     (Olumlu)
    - Pilav da yok köfte da yok     (Olumsuz)

Bu sonuçlardan ise sadece 3. sonuç olan yani her ikisininde "var" olduğu durum sizin için olumlu olur.

Bu örneği php kodlarımıza dökecek olur.

```
<?php
$a = 3;
$b = 2;

echo ($a > $b) && ($a != $b); // Hem $a > $b hem de $a != $b durumları true sonucu verdiğinden; sonuç true olacaktır.
echo ($a > $b) || ($a == $b); // Hem $a > $b true $a == $b false sonucu verdiğinden; Veya(||) koşulunda sonuç true olacaktır.
?>
```


