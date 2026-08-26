# Mülakatta Sistem Tasarımına Yaklaşım

Sistem tasarımı mülakatları diğer teknik sorulardan köklü biçimde farklıdır. Bir algoritma sorusunda doğru cevap vardır, yanlış cevap vardır. Sistem tasarımında ise doğru veya yanlış cevap yoktur — değerlendirilen şey senin düşünce sürecidir. Mülakatçı "Twitter'ı tasarla" dediğinde aklındaki tek bir beklenti yoktur. Senin nasıl soru sorduğunu, nasıl öncelik belirlediğini, trade-off'ları görüp görmediğini ve fikirlerini ne kadar açık ifade ettiğini izler.

Bu başlıkta sistem tasarımı mülakatlarına yaklaşmak için tekrarlanabilir bir çerçeve öğreneceksin. Ezberlenecek bir formül değil, bir düşünce alışkanlığı bu. Eğitim boyunca gördüğün tüm teknik kavramlar — ölçeklendirme, cache, sharding, CAP teoremi, message queue — ancak doğru bir çerçeveyle mülakata taşındığında değer kazanır.

## 5 Adımlı Çerçeve

### Adım 1: Clarify (5-10 dakika)

Hiçbir zaman soruyu duyar duymaz tasarıma atlama. "Twitter'ı tasarla" cümlesi aslında onlarca farklı sistemi tanımlayabilir. Önce gereksinimleri netleştir.

Sormaya değer sorular:

- **Kullanıcı ölçeği:** Kaç aktif kullanıcı var? Günlük mü, aylık mı bakıyoruz?
- **Okuma/yazma oranı:** Sistem ağırlıklı olarak okuyor mu, yazıyor mu?
- **Gecikme toleransı:** Milisaniye hassasiyeti gerekiyor mu, yoksa birkaç saniye kabul edilebilir mi?
- **Consistency mi, availability mi?** Banka işlemi mi yapıyoruz, sosyal medya feed mi?
- **Coğrafi dağılım:** Tek bölge mi, global mi?
- **Hangi özellikler kapsam içinde?** Tüm sistemi değil, mülakatta neyi tasarlayacağını netleştir.

Bu soruları sormadan tasarıma geçmek, haritasız yolculuğa çıkmak gibidir. Mülakatçı bu soruları görmek ister — "Clarify etmeden devam etti" notu olumlu değil olumsuz bir gözlemdir.

### Adım 2: Estimate (5 dakika)

Gereksinimleri netleştirdin, şimdi sistemin boyutunu anlamak için back-of-envelope hesaplar yap. Hassas sayılar beklenmez, ama büyüklük sınıfı (order of magnitude) doğru olmalı.

**Temel formüller:**

```
QPS = Günlük aktif kullanıcı × istek/kullanıcı ÷ 86.400 saniye

Depolama = veri boyutu × günlük istek sayısı × zaman (gün)

Bant genişliği = QPS × ortalama istek boyutu
```

**Twitter benzeri sistem için örnek:**

- Günlük aktif kullanıcı: 300 milyon
- Kullanıcı başına günde 5 tweet okuma isteği: 300M × 5 = 1.5 milyar istek/gün
- QPS: 1.5B ÷ 86.400 ≈ **17.000 QPS**
- Her tweet ortalama 300 byte: 17.000 × 300 byte ≈ **5 MB/s** bant genişliği
- Günde 500.000 yeni tweet × 300 byte = **150 MB/gün** depolama (sadece text)

Bu hesaplar sana "kaç sunucu, ne kadar cache, hangi ölçekte veritabanı" sorularında yön verir. Estimation yaparken sesli düşün — mülakatçı mantığını görmek ister.

### Adım 3: High-Level Design (10-15 dakika)

Büyük resmi çiz. Bu aşamada ayrıntılara girme, bileşenleri ve aralarındaki bağlantıları ortaya koy.

Tipik bir web sisteminin temel iskeleti:

```
İstemci
   |
   v
CDN / API Gateway
   |
   v
Load Balancer
   |
   v
Uygulama Sunucuları
   |
   +---> Cache (Redis)
   |
   +---> Veritabanı (Primary)
              |
              +---> Read Replica(s)
```

Bu aşamada:
- Her bileşeni bir dikdörtgen olarak düşün, oklar veri akışını göstersin.
- Tek bir yaklaşımla başla. Karmaşıklaştırma, sadeleştir.
- Mülakatçıya "Şu an high-level tasarımı göstereceğim, sonra istediğin bileşeni derinleştirebiliriz" de.

### Adım 4: Deep Dive (15-20 dakika)

High-level tasarımı sunduktan sonra mülakatçı genellikle bir veya iki bileşeni derinleştirmeni ister. Bazen sen önerirsin.

Derinleştirilebilecek tipik konular:

- **Veritabanı şeması:** Tablolar nasıl tasarlanır, indexler nerede?
- **Caching stratejisi:** Write-through mu, write-behind mı? Cache invalidation nasıl çalışır?
- **Sharding kararı:** Hangi key'e göre shard? Hotspot riski var mı?
- **API tasarımı:** Endpoint'ler, request/response şemaları, versioning.
- **Mesaj kuyruğu:** Asenkron işlemler için neden queue gerekiyor, hangisi seçilmeli?

Kendi güçlü yönlerini yönlendir: "Özellikle cache katmanını ve invalidation stratejisini konuşmak isterim, bu sistemdeki en kritik karar noktası orada" demekten çekinme. Mülakatçıların çoğu bu yönlendirmeye açıktır.

### Adım 5: Trade-offs (5 dakika)

Her kararın artısı ve eksisi var. Mülakatçı bunu biliyor, senden de bilmeni bekliyor.

Örnek trade-off ifadeleri:

- "SQL seçtim çünkü consistency kritik ve veri ilişkileri karmaşık. Ama yatay ölçekleme gerekirse bu kararı gözden geçirmem gerekir."
- "Cache TTL'ini 1 saat tuttum; bu stale data riskini artırıyor ama cache hit oranını makul seviyede tutuyor."
- "Message queue eklemek sistemi daha resilient yapıyor, ama operasyonel karmaşıklığı artırıyor."

Kesinlik değil, bilinçli seçim göster. "Bu mükemmel çözüm" yerine "bu durumda en iyi trade-off bu nedenle" de.

## Sık Yapılan Hatalar

**1. Clarify etmeden doğrudan tasarıma dalmak**
En yaygın hata. "Nasıl tasarlarsın?" sorusunu duyunca hemen çizmeye başlamak, gereksinimleri anlamadan ilerliyorsun demektir.

**2. Tek çözüme takılıp kalmak**
"Ben hep Postgres kullanırım" ya da "microservices her zaman daha iyi" gibi önyargılar seni kör eder. Her sistem farklı kısıtlarla gelir.

**3. Trade-off'ları görmezden gelmek**
"Bu yaklaşım mükemmel" dersen mülakatçı alarm verir. Her kararın eksileri vardır; onları da say.

**4. Süreyi yanlış dağıtmak**
Estimation'a 20 dakika harcayıp high-level tasarıma 5 dakika kalmaz. Adım başına önerilen süreleri yaklaşık takip et.

**5. Sessiz kalmak**
Düşündüğünü sesli söyle. Mülakatçı zihnini okuyamaz. "Şu an iki seçenek görüyorum, birincisi... ikincisi..." demen, doğru cevap vermekten daha değerli olabilir.

**6. Buzz word kullanmak ama açıklamamak**
"NoSQL kullanalım" deyip geçme. "Bu sistemde okuma ağırlıklı, erişim paterni basit key-value, ilişkisel yapıya gerek yok, bu yüzden NoSQL tercih ediyorum" de.

## Örnek: "YouTube Tasarla"

**Clarify:**
- Video maksimum boyutu nedir? 10 GB?
- Canlı yayın kapsam içinde mi?
- Global erişim mi, yoksa tek bölge mi?
- Öneri algoritması kapsam içinde mi?

**Estimate:**
- 2 milyar kullanıcı, dakikada 500 saat video yükleniyor
- Dakikada 500 saatlik video yükleniyor:
  - Günlük upload: 500 saat/dakika × 1440 dakika = 720.000 saat/gün
  - Ortalama video bitrate (sıkıştırılmış, çoklu kalite): ~1 GB/saat
  - Ham depolama ihtiyacı: 720.000 GB/gün ≈ 720 TB/gün
  - Birden fazla kalite (360p/720p/1080p/4K): gerçek depolama ~3-4× daha fazla
  → Bu ölçekte depolama ve CDN maliyeti tasarımın kritik kısıtıdır.
- 1 milyar video izleme/gün → 1 milyar QPS (read — CDN devreye girmeden)

**High-Level:**
```
Upload -> Encoding Service -> Object Storage (S3/GCS)
                                      |
                                     CDN
                                      |
                              Playback (istemci)
```

**Deep Dive:**
- Video encoding pipeline: raw video → farklı çözünürlükler (360p, 720p, 1080p, 4K)
- Adaptive bitrate streaming: HLS veya DASH protokolü; istemci ağ hızına göre kalite seçer
- Object storage + CDN: videolar coğrafi olarak dağıtılmış edge node'lardan sunulur

**Trade-offs:**
- Encoding maliyeti vs kullanıcı deneyimi: tüm çözünürlükleri hemen encode etmek pahalı; sadece yaygın çözünürlüklerden başlayıp taleple artırmak maliyet dengeler
- Consistency vs availability: video metadata için eventual consistency kabul edilebilir

## Örnek: "WhatsApp Tasarla"

**Clarify:**
- Grup mesajı kapsam içinde mi? Maksimum grup büyüklüğü?
- Dosya ve medya paylaşımı?
- End-to-end encryption gerekiyor mu?
- Read receipt (mavi tik)?

**Estimate:**
- 2 milyar kullanıcı, 100 milyar mesaj/gün
- 100B ÷ 86.400 ≈ 1.15 milyon mesaj/saniye
- Mesaj başına ortalama 100 byte → 115 MB/s sadece mesaj trafiği

**High-Level:**
```
İstemci A --[WebSocket]--> Mesajlaşma Sunucusu --> Mesaj Deposu
                                     |
                                     v
                            Bildirim Servisi --> İstemci B
```

**Deep Dive:**
- WebSocket: kalıcı bağlantı gerekli; HTTP polling yetersiz kalır bu ölçekte
- Mesaj teslim garantisi: at-least-once delivery; idempotency key ile duplikasyon önlenir
- Online/offline durum: presence service, geçici durum için Redis, kalıcı için veritabanı
- Offline mesajlar: kullanıcı çevrimiçi olmadığında push notification + mesaj kuyruğu

**Trade-offs:**
- Consistency vs latency: mesajın karşı tarafa kesinlikle ulaştığını garantilemek (strong consistency) gecikmeyi artırır; WhatsApp gibi sistemler eventual consistency + acknowledgment mekanizması tercih eder
- End-to-end encryption: sunucu mesajları okuyamaz, bu güvenlik sağlar ama spam filtrelemeyi imkansız kılar

## Hazırlık Stratejisi

Mülakat çerçevesini öğrenmek yeterli değil. Aktif pratik gerekiyor.

- Her gün bir sistem tasarımı sorusu seç: "Instagram'ı tasarla", "Uber'i tasarla", "Google Drive'ı tasarla"
- Kağıt veya whiteboard kullan, yalnız başına tasarla ve sesli anlat
- Ardından çözümünü referans kaynaklarla karşılaştır; eksikleri not et
- Arkadaşınla veya bir yabancıyla mock mülakat yap; baskı altında performansın değişir

Bu eğitimde öğrendiğin her kavram — CAP teoremi, sharding, cache eviction, CDN, message queue — mülakatta sana gerçek bir avantaj sağlar. Artık bu kavramları bildiğin için "neden" sorusuna cevap verebilirsin, sadece "ne" değil.
