# Regular Expressions

Hangi regex sadece bir boşluk karakteri ile eşleşir?
- \S
- \s (doğru)
- .
- _
- \\.

# Regular Expressions: Veri Eşleştirme ve Çıkarma

Aşağıdaki programın çıktısı nedir?
```python
import re
s = 'A message from csev@umich.edu to cwen@iupui.edu about meeting @2PM'
lst = re.findall('\\S+@\\S+', s)
print(lst)
```
- ['csev@umich.edu', 'cwen@iupui.edu'] (doğru)
- ['csev@umich.edu']
- ['umich.edu', 'iupui.edu']
- ['csev@', 'cwen@']

# Regular Expressions: Pratik Uygulamalar

Hangisi bir regular expression'da "$" işaretini arar?
- $
- \dollar\
- \\$ (doğru)
- !$

# Web Scraping

Hangi Python kütüphanesi HTML belgelerini ayrıştırmak ve HTML belgelerinden veri çıkarmak için kullanılır?
- socket
- http
- BeautifulSoup (doğru)
- PrettyBiscuit

# Web Servislerini Kullanmak

İnternet üzerinden veri göndermenin en yaygın iki yolu nedir?
- JSON ve TXT
- JSON ve XML (doğru)
- XML ve TXT
- XML ve PHP
- PHP ve TXT

# Web Servisleri: XML

Aşağıdaki XML'deki hata nedir?
```XML
<person>
  <name>Chuck</name>
  <phone type="intl">
    +1 734 303 4456
  <email hide="yes" />
</person>
```
- Email etiketinin kapanış etiketi yok
- Boşluklar XML'i geçersiz yapıyor
- Phone etiketinin kapanış etiketi yok (doğru)
- Metin UTF-8 kullanılarak kodlanmalı

# Web Servisleri: XML Şeması

XSD nedir?
- XML için W3C şema belirtimi (doğru)
- MOZ'un standart JSON şeması
- Genişletilebilir Durumsal Sürücü

# Web Servisleri: JSON

Aşağıdaki kodun çıktısı nedir?
```python
import json
data = '''
  [
    { "id" : "001",
      "x" : "2",
     "name" : "Quincy"
    } ,
    { "id" : "009",
      "x" : "7",
      "name" : "Mrugesh"
    }
  ]
'''
info = json.loads(data)
print(info[1]['name'])
```
- Quincy
- Mrugesh (doğru)
- 001
- 009
- [Error]

# Web Servisler: Hizmet Odaklı Yaklaşım

Web uygulamaları geliştirmeye hizmet odaklı bir yaklaşımda, veriler nerede bulunur?
- İnternet veya dahili ağ ile bağlı olan birçok bilgisayar sistemine yayılmış bir biçimde (doğru)
- Ana sunucudaki farklı servislerin içinde
- Ayrı bir veri tabanı sunucusunda

# Web Servisleri: API

API ne anlama gelir?
- Uygulama taşınabilir zekası
- Ortak uluslararası programlama
- Uygulama programı arayüzü (doğru)
- Eylem taşınabilir arayüz

# Web Servisleri: API Oranı Sınırlama ve Güvenlik

Twitter API'ından bir istekte bulunurken, istekle birlikte hangi bilgiler gönderilmelidir?
- Twitter kullanıcı adı
- Tarih aralığı
- Arama terimi
- Anahtar (doğru)
