# Queue Nedir?

Yazılım dünyasında queue (kuyruk), gerçek hayattaki kuyruk mantığının bire bir yansımasıdır. Markette kasaya dizilirsin, ilk gelen ilk çıkar. Yazılımda da tam olarak bu: bir işin sıraya girmesi, işlenmesi ve çıkması.

Bu eğitimin tüm konuları queue kavramı üzerine oturur. Redis, queue'ları production'da hayata geçirmek için kullandığımız araç. Önce kavramı sindirmek işleri çok kolaylaştırır.

## FIFO — İlk Giren İlk Çıkar

Queue'nun temel ilkesi **FIFO**'dur: First In, First Out. Sıraya giren ilk eleman, önce çıkar. Sıraya giren son eleman en sonda çıkar.

```
Giriş (enqueue)  →  [ C | B | A ]  →  Çıkış (dequeue)
```

Burada A en önce eklendi, dolayısıyla en önce çıkar. C en son eklendi, en son çıkar.

Bunu Stack (yığın) ile karıştırmamak önemli. Stack'te son giren ilk çıkar — buna **LIFO** (Last In, First Out) denir. Bir kitap yığını düşün: en üste koyduğun kitabı ilk alırsın. Queue'da ise market kasasında beklediğin sırayı düşün.

| Veri Yapısı | Prensip | Örnek |
|---|---|---|
| Queue | FIFO (İlk giren, ilk çıkar) | Market kuyruğu, yazıcı kuyruğu |
| Stack | LIFO (Son giren, ilk çıkar) | Tarayıcı geri tuşu, Undo/Redo |

## Neden Queue Kullanırız?

Doğrudan işlem yapmak yerine neden bir kuyruğa atalım ki?

### 1. Asenkron İşleme

Kullanıcı bir işlem başlattı — mesela "şifre sıfırlama e-postası gönder" butonuna bastı. Bu e-postanın gönderilmesini bekliyorsun ama e-posta servisi bazen 2-3 saniye alabilir. Kullanıcıyı 3 saniye bekletmek yerine işi bir kuyruğa atarsın, kullanıcıya anında "tamam gönderildi" dersin, arka planda işleme devam eder.

```
Kullanıcı isteği → [ Queue ] → Arka plan worker'ı işler
      ↑                               ↑
   Anında yanıt              Kullanıcı artık beklemez
```

### 2. Yük Dağıtımı (Load Leveling)

Saniyede 1000 istek gelen bir sistemin olduğunu düşün ama veritabanın saniyede en fazla 100 işlem yapabiliyor. Direkt işlesen sistem çöker. Queue ile bu 1000 isteği tutarsın, işleme kapasiten olan 100 işlem/saniye hızında tüketirsin. Tepe yükleri yumuşarsın.

```
1000 istek/s  →  [ Queue ]  →  100 istek/s işleme
               (tampon bölge)
```

### 3. Hata Toleransı

Worker çöktüğünde kuyrukta bekleyen mesajlar kaybolmaz, sistem toparlandığında kaldığı yerden devam eder. Direkt işlemde worker çökmesi demek, o anda işlenen her şeyin kaybolması demektir.

### 4. Decouple (Ayrıştırma)

E-posta gönderen servis, SMS gönderen servis, push notification gönderen servis... Bunların hepsi birbirinden bağımsız çalışabilir. Bir servis yavaşladığında diğerleri etkilenmez. Queue, üretici (producer) ile tüketici (consumer) arasına girerek bu bağımsızlığı sağlar.

## Queue Operasyonları

Bir queue üzerinde yapılabilecek temel operasyonlar şunlardır:

| Operasyon | Açıklama |
|---|---|
| **Enqueue** | Kuyruğun sonuna eleman ekle |
| **Dequeue** | Kuyruğun başından eleman al ve kaldır |
| **Peek / Front** | Kuyruğun başındaki elemana bak, kaldırma |
| **IsEmpty** | Kuyruk boş mu? |
| **Size** | Kuyruktaki eleman sayısı |

Redis dünyasında bu operasyonların karşılıkları komutlarla ifade edilir:
- Enqueue → `RPUSH`
- Dequeue → `LPOP`
- Peek → `LINDEX 0`
- Size → `LLEN`

Bunların her birini ilerleyen derslerde detaylıca göreceğiz.

## Gerçek Dünyada Queue Kullanım Alanları

Queue, yazılımın her yerindedir. Fark etmeden her gün onlarca queue ile etkileşime giriyorsun.

**E-posta / SMS / Bildirimler**
Bir e-ticaret sitesinde sipariş verdiğinde "siparişin alındı" e-postası hemen gelir. Bu e-posta bir kuyruktan işlenir. Aynı anda 10.000 kullanıcı sipariş verse bile her birine e-posta gider — hız ayarlı, sıralı.

**Video İşleme**
YouTube'a video yüklediğinde önce ham video bir kuyruğa girer. Oradan farklı çözünürlükler için ayrı ayrı işlemlere dağıtılır. Sen upload bittiğinde "işleniyor" yazısı görürsün — arka planda queue var.

**Ödeme İşlemleri**
Banka transfer işlemleri, anlık olmak zorunda değil. Gece toplu yapılan işlemler bir kuyrukta birikir, belirli saatte işlenir.

**Yazıcı Kuyruğu**
Ofiste 10 kişi aynı anda yazdır derse, yazıcı bir queue tutar. İşler sırayla basılır, kimsenin işi kaybolmaz.

**Mikro Servis İletişimi**
Bir mikro servis, diğerine doğrudan HTTP çağrısı yapmak yerine bir kuyruğa mesaj bırakır. Alıcı hazır olduğunda mesajı alır ve işler. Servisler birbirini bloklamaz.

## Queue Türleri

Standart FIFO queue dışında farklı ihtiyaçlara göre farklı queue türleri vardır:

**Priority Queue (Öncelikli Kuyruk)**
Her mesajın bir öncelik skoru var. Yüksek öncelikli mesajlar önce işlenir. Redis'te Sorted Set ile bunu kolayca yapabilirsin — 14. derste göreceğiz.

**Delay Queue (Gecikmeli Kuyruk)**
Mesajı şimdi ekle, 5 dakika sonra işle. "Siparişi 30 dakika sonra hâlâ onaylanmadıysa iptal et" gibi senaryolar için kullanılır.

**Dead Letter Queue (Ölü Mektup Kuyruğu)**
İşlenemeyen, tekrar tekrar hata veren mesajların gittiği ayrı bir kuyruk. Silmek yerine buraya atarsın, analiz edebilirsin.

**Circular Queue**
Sabit boyutlu, son eleman başa döner. Belirli boyutlarda log tutmak için kullanılır.

## Queue vs Message Broker

Bazen "queue" ve "message broker" terimleri karıştırılır.

**Queue**, bir veri yapısıdır. Mesajları sırayla tutar.

**Message Broker** (RabbitMQ, Kafka, Redis), queue'ları barındıran, routing, filtering, persistence gibi ek özellikler sunan tam sistemlerdir.

Redis, bir message broker olmak üzere tasarlanmamış olsa da List, Pub/Sub ve Streams veri yapıları sayesinde çok güçlü bir queue/broker görevi görür. Hafif, hızlı ve operasyonel maliyeti düşük olduğu için birçok ekip Redis'i queue altyapısı olarak tercih eder.

## Özet

Queue veri yapısı, modern yazılım sistemlerinin olmazsa olmaz parçasıdır. FIFO prensibine göre çalışır, üretici ile tüketici arasında tampon bölge işlevi görür, sistemleri birbirinden ayrıştırır ve hata toleransı sağlar.

Bu eğitimde queue kavramını Redis üzerinden somutlaştıracağız. Her derste bir queue problemi alıp Redis ile nasıl çözeceğini göreceğiz. Başlamadan önce bir sonraki derste Redis'in ne olduğunu ve neden bu iş için ideal bir araç olduğunu inceleyelim.
