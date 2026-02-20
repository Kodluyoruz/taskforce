# Birleştirme ve Atama Operatörleri

### Birleştirme Operatörü

Birleştirme operatörü nokta(.) ile gösterilir. İki ifadenin arasında yer alarak sağındaki ifade ile solundaki ifadeleri
birbirine birleştirir.
```
$isim = 'Şahin';
$soyisim = 'Ersever';
$yas = 27;
echo 'Merhaba, benim ismim '. $isim.' soyismim '.$soyisim.'. Şuan '.$yaş.' yaşımdayım.';
// Ekrana "Merhaba, benim ismim Şahin soyismim Ersever. Şuan 27 yaşımdayım." sonucunu yazar.
```
```
$html  = '<div>';
$html .=    '<h1>Patika.Dev</h1>';
$html .= '</div>';
echo $html; // Ekrana "Patika.dev" olarak basar.
```
Kaynak kodunu incelediğimizde ise;
```
<div>
    <h1>Patika.Dev</h1>
</div>
```
ifadesini görürüz.

### Atama Operatörü
Atama operatörümüz matematikten de tanıdığımız eşittir (=) sembolüdür.
Bu operatör sağındaki değeri solundaki değişkene atar.
```
$age = 27; // $age değişkenine 27 sayısı atandı.
$isim = 'Şahin'; $isim değişkenine Şahin ifadesi atandı.
```
