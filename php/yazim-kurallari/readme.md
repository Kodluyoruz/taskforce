## Php Etiketleri

PHP bir dosyayı çözümlerken, hangi bölümü yorumlayıp hangi bölümü yorumlamadan geçeceğine karar vermek için <?php ve ?> açılış ve kapanış etiketlerine bakar. Bu şekilde çözümleme PHP'nin her çeşit farklı belgeye gömülmesini sağlar, çünkü bir çift açılış ve kapanış etiketinin dışındaki her şey PHP çözümleyicisi tarafından gözardı edilir.

#### Echo ve Print nedir?
"echo ve print" komutları kendinden sonra gelen ifadeyi ekrana yazdırmak için kullanılır.

PHP daha açıklayıcı olan <?php echo etiketine bir kısaltma olarak <?= kısa echo etiketini içerir.

```
<?php 
    echo "Merhaba patika";
    print "Merhaba patika";
?>
```
## Yazım Kuralları
Php etiketleri arasına yazılan tüm komutlar noktalı virgül(;) ile sonlandırılır.

```
<?php 
    echo "İlk echo komutu";
    echo "İkinci echo komutu";
    echo "Üçüncü echo komutu";
?>
```

Php kapama etiketi (?>) kendinden önceki son komutu otomatik olarak kapatır. Bu sebeple son komutu kapatmanıza gerek yoktur.
```
<?php 
    echo "İlk echo komutu";
    echo "İkinci echo komutu";
    echo "Üçüncü echo komutu"
?>
```
Kapama etiketi kullanmadığınız durumda son komutu noktalı virgül(;) ile bitirmeniz gerekir.
```
<?php 
    echo "İlk echo komutu";
    echo "İkinci echo komutu";
    echo "Üçüncü echo komutu";
?>
```

Kısa echo kullanımı.
```
<?= 'Şahin'; ?> ifadesi
<?php echo 'Şahin'; ?> ifadesine denk gelir.
```

Html içerisinde gömülü olarak kullanımı
```
<?php
 $title = 'Php Basics';
?>

<h1><?= $title ?></h1>

<?= echo '<h3>' . $title . '</h3>'; ?>

<?= echo "<h5>$title</h5>"; ?>

```
## Açıklama Satırları

PHP, 'C', 'C++' ve Unix kabuk tarzı (Perl tarzı) açıklamaların hepsini destekler.

```
<?php
    // Bu tek satırlık c++ tarzı açıklamadır
    
    /* Bu, C tarzı 
    çok satırlı
       bir açıklamadır */
    
    # Bu tek satırlık kabuk tarzı açıklamadır.
?>
```
