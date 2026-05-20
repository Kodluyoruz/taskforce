### Veri Değişim Formatları

#####JSON

- JSON veri depolama ve veri alışverişi için kullanılan bir formattır.
- JSON .json uzantılı dosyalarda tutulabilir.
- JSON formatı,benzer fonksiyonlara sahip olan XML‘e (ing) daha basit ve hafif bir alternatiftir.
- Veriler Anahtar-Değer şeklinde tutulur.
- Bir JSON nesnesi {} küme parantezleriyle başlar ve biter.
- İçinde iki veya daha fazla anahtar/değer çiftlerine sahip olabilir ve bu ikisini bir virgül ile ayırır.
- Anahtar ve değerler : ile ayrılır ```{'isim': 'Şahin'}``` .

``kisiler.json``
```
{
  "total": 2,
  "type": "Üye",
  "data": [
    {
      "name": "Şahin",
      "surname": "ERSEVER",
      "status": true
    },
    {
      "name": "Fatma",
      "surname": "ERSEVER",
      "status": true
    }
  ]
}
```
![img.png](img.png)

##### XML

- XML Extensible Markup Language, Genişletilebilir Biçimlendirme Dili

PHP ile Content Type Belirtmek
```
header('Content-type: application/xml; charset="utf8"');
```
``urun.xml örneği``

![img_1.png](img_1.png)

##### PHP ile XML Dosyasının Okunması

![img_2.png](img_2.png)

##### SimpleXMLElement Sınıfı Kullanımı

![img_3.png](img_3.png)
