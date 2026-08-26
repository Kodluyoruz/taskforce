### Abstract(Soyutlama) Kullanımı


 Soyutlanmış sınıflar içerisinde soyut methodlar barındırır.
 
Soyutlanmış sınıftan türetilen sınıflar soyut sınıf içerisinde ki soyut methodları bulundurmak zorundadır.

#####Özellikleri

- Soyut methodlar ve sabitler içerebilir.
- Normal methodlar, özellikler ve sabitler içerebilir.
- public, protected ve private olarak tanım yapılabilir.
- Aynı sınıf sadece bir abstract sınıftan türetilebilir. 

```
<?php


abstract class Urun
{
    public $fiyat;
    public $vergi;
    public $urunAdi;

    abstract public function urunAdi($urunAdi);

    abstract public function urunVergi($vergi);

    abstract public function urunFiyat($fiyat);

    public function urunEkle()
    {
        echo $this->urunAdi . ' isimlü ürün KDV(' . $this->vergi . '%) dahil ' . ($this->fiyat + (($this->fiyat / 100) * $this->vergi)) . ' eklendi.';
    }

}

class Icecek extends Urun
{

    public function urunAdi($urunAdi)
    {
        $this->urunAdi = $urunAdi;
    }

    public function urunVergi($vergi)
    {
        $this->vergi = $vergi;
    }

    public function urunFiyat($fiyat)
    {
        $this->fiyat = $fiyat;
    }

}

$Icecek = new Icecek();
$Icecek->urunAdi('Kola');
$Icecek->urunVergi(18);
$Icecek->urunFiyat(10);
$Icecek->urunEkle();
```
