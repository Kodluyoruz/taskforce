# Replikasyon ve Sharding: Veritabanını Ölçeklendirme

Uygulaman büyüdükçe tek bir veritabanı sunucusu kaçınılmaz olarak iki kritik sorunla karşı karşıya kalır. Birincisi: o sunucu çökerse tüm sistem durur — tek hata noktası (single point of failure). İkincisi: yeterince fazla istek geldiğinde tek bir makine artık yük altında ezilir. Hem yüksek erişilebilirlik hem de ölçeklenebilirlik için iki temel strateji geliştirilmiştir: **replikasyon** ve **sharding**. Bu iki teknik birbirini tamamlar ve her birinin farklı sorunlara çözüm ürettiğini anlamak, sistem tasarımında doğru kararı vermenin temelidir.

## Replikasyon

Replikasyon, aynı verinin birden fazla sunucuda kopyasını tutmaktır. En yaygın model **master-slave** (ya da modern terminolojide **primary-replica**) mimarisidir.

### Primary-Replica (Master-Slave)

Bu modelde tek bir **primary** (master) sunucu yazma işlemlerini üstlenir. Tüm INSERT, UPDATE, DELETE sorguları buraya gider. Bir veya daha fazla **replica** (slave) sunucu ise primary'daki değişiklikleri takip eder ve kendi kopyasını günceller. Replica'lar yalnızca okuma (SELECT) sorgularına hizmet eder.

Bu yapının ana faydası **read replica** ile okuma yükünü dağıtmaktır. Sisteme 10 replica eklendiğinde okuma kapasitesi yaklaşık 10 katına çıkar. Yoğun okuma yapan uygulamalar (raporlama araçları, analitik sorgular, API'ler) replica'lara yönlendirilebilir; primary yalnızca yazma işlemlerine odaklanır.

**Asenkron replikasyon** en yaygın kullanılan yaklaşımdır. Primary, bir yazma işlemini commit ettikten sonra replica'ların onayını beklemeksizin devam eder. Bu yaklaşım düşük gecikme sağlar ama bir **replication lag** riski doğurur: primary'a az önce yazılan bir veri, replica'ya henüz ulaşmamış olabilir. Bu nedenle okuma tarafında güçlü tutarlılık (strong consistency) gerektiren sorgular replica yerine primary'a yönlendirilmelidir.

**Senkron replikasyon** ise yazma işlemini, en az bir replica'nın da veriyi aldığını onaylaması tamamlanana kadar askıya alır. Bu yaklaşım veri kaybı riskini ortadan kaldırır ama gecikmeyi artırır; yavaş bir ağda performans yarıya düşebilir.

**PostgreSQL streaming replication**, primary sunucudaki WAL (Write-Ahead Log) kayıtlarını gerçek zamanlı olarak replica'lara iletir ve hot standby modunda replica'ların okuma sorgularına yanıt vermesini mümkün kılar. **MySQL read replica** ise benzer bir mekanizmayla binbir çeşit büyük üretim sistemi tarafından kullanılmaktadır.

### Master-Master (Çoklu Yazma)

Master-master konfigürasyonda her iki sunucu da yazma kabul eder ve değişiklikleri birbirlerine aktarır. Bu yapı teorik olarak yazma kapasitesini artırır ve aktif-aktif yük dengeleme imkânı sunar. Ancak aynı veri iki farklı node'da aynı anda değiştirildiğinde ortaya çıkan **conflict resolution** problemi ciddi bir karmaşıklık kaynağıdır. Her iki node'da aynı satır aynı anda güncellendiğinde hangi değer kazanacak? Bu soruyu çözmek için son yazan kazanır (last-write-wins), zaman damgası karşılaştırma ya da uygulama katmanında özel mantık gibi stratejiler gerekir.

## Sharding (Horizontal Partitioning)

Replikasyon veriyi çoğaltır; sharding ise veriyi böler. **Sharding**, veri kümesini daha küçük parçalara ayırıp her parçayı farklı bir sunucuda (shard) saklamaktır. 100 milyon kullanıcı kaydını tek bir sunucuda tutmak yerine her biri 25 milyon kayıt içeren 4 ayrı shard kullanmak gibi.

### Sharding Stratejileri

**Range-based sharding:** Veri, bir anahtarın değer aralığına göre dağıtılır. Örneğin kullanıcı ID'si 1-10.000.000 arası Shard A'ya, 10.000.001-20.000.000 arası Shard B'ye gider. Hedeflenen sorgular belirli shard'a doğrudan yönlendirilebilir. Ancak veri dağılımı dengesiz olduğunda ya da monoton artan bir anahtar kullanıldığında tüm yazma yükü son shard'a yığılır: bu **sıcak shard (hot shard)** problemidir.

**Hash-based sharding:** Shard anahtarı üzerinde bir hash fonksiyonu çalıştırılır ve sonuca göre shard belirlenir. `user_id % shard_count` gibi basit bir formülle bile çok daha dengeli bir dağılım elde edilir. Monoton artan anahtarlarda range-based'in yarattığı hotspot sorununu ortadan kaldırır. Dezavantajı ise aralık sorguları (range queries) için tüm shard'lara gitmek gerekebilmesidir.

**Geo-based sharding:** Veri, coğrafi konuma göre dağıtılır. Avrupa kullanıcıları Avrupa data center'ındaki shard'a, Asya kullanıcıları Asya shard'ına gider. Hem gecikmeyi düşürür hem de veri yerelliği (data residency) düzenlemelerine uyumu kolaylaştırır.

### Sharding'in Zorlukları

**Cross-shard join:** Aynı sorgu iki farklı shard'daki tablolara join atmak istediğinde iş karmaşıklaşır. Bu işlemi veritabanı katmanında gerçekleştirmek güçtür; genellikle uygulama katmanında birleştirme yapılır ya da veri modeli denormalize edilir.

**Hotspot:** Trafik belirli bir shard üzerinde yoğunlaşırsa o shard bottleneck haline gelir. Şarkı ID'sine göre sharding yapılmış bir müzik platformunda viral olan bir şarkının verisi tek shard'ı yorabilir.

**Operasyonel karmaşıklık:** Shard sayısını artırmak (rebalancing), şema değişikliği yapmak ve yedekleme almak gibi rutin işlemler tek sunucuya göre çok daha karmaşık hale gelir.

## Gerçek Dünya Kullanımı

**Instagram** başlangıçta PostgreSQL kullanıyordu. Büyüdükçe sharding'e geçerek milyarlarca fotoğraf ve kullanıcı verisini binlerce shard arasında dağıttı. Shard anahtarı olarak kullanıcı ID'sini kullandı; bir kullanıcıya ait tüm veriler aynı shard'da kaldı ve cross-shard join ihtiyacını azalttı.

**Netflix**, kullanıcı izleme geçmişini ve öneri sisteminin zaman serisi verilerini Cassandra üzerinde yönetmektedir. Saniyede milyonlarca okuma/yazma işlemini Cassandra'nın AP mimarisi sayesinde karşılar.

**Twitter** kullanıcı timeline'larını önbellekte tutar ancak kullanıcı veri katmanını sharding ile ölçeklendirir. Kullanıcı ID'si temel shard anahtarı olarak kullanılır ve tweet verisi de yüksek yazma kapasitesi nedeniyle dağıtık yapıda saklanır.

## Ne Zaman Kullanılır / Kullanılmaz

**Replikasyon ne zaman tercih edilir:** Okuma yükü yazmadan çok daha fazlaysa (tipik web uygulamalarında bu oran 80/20 ya da daha fazladır), replica eklemek en doğal çözümdür. Aynı zamanda primary sunucu çöktüğünde replica'ların devreye girmesiyle yüksek erişilebilirlik (high availability) ve disaster recovery sağlanır.

**Sharding ne zaman tercih edilir:** Veri hacmi tek bir sunucunun fiziksel limitlerini aştığında ya da yazma yükü çok yüksek olduğunda sharding gündeme gelir. Ama sharding son çaredir. Önce replikasyon, önbellek ve sorgu optimizasyonu gibi daha basit çözümler denenmelidir; çünkü sharding beraberinde ciddi operasyonel yük getirir.

**Ne zaman kullanılmaz:** Verin tek bir sunucuya rahatlıkla sığıyorsa, okuma/yazma oranın dengeli ve düşükse ya da karmaşıklığı yönetecek ekip kapasiten yoksa sharding'den kaçınmak gerekir. Erken optimizasyon olarak sharding yapmak, sistemi gereksiz yere karmaşıklaştırır ve geliştirme hızını düşürür.

## Mülakatta Bu Konuya Nasıl Yaklaşılır

Sistem tasarımı mülakatlarında "veritabanın nasıl ölçeklenir?" sorusu sıkça gelir. Bu soruyu yanıtlarken düşünce sürecini aşamalı göstermen beklenir. Doğrudan "sharding yaparım" demek yerine önce replikasyon ile okuma yükünü dağıtacağını, ardından query optimizasyonu ve caching ile gereksiz veritabanı yükünü azaltacağını, nihayet veri hacmi gerçekten sınırları zorluyorsa sharding'e geçeceğini anlat. Bu yaklaşım hem pragmatizmi hem de trade-off bilincini gösterir.

Sharding konuşulduğunda shard key seçimi üzerine derinleşmeye hazır ol. Hangi alanın shard key olacağı, erişim paternine bağlıdır: "en sık hangi değere göre sorguluyorum?" sorusunun cevabı doğal shard key adayıdır. User ID gibi yüksek cardinality'e sahip, hotspot yaratmayacak ve monoton artmayan bir anahtar idealdir. Mülakatlarda sık yapılan bir hata, shard key seçimini önemsiz bir detay olarak geçiştirmektir; oysa yanlış bir shard key tüm sistemi felç edebilecek hotspot'lara yol açar.

Son olarak, "en basit çözümle başla" ilkesini her zaman vurgula. Büyük şirketlerin sharding mimarilerini baştan beri sahip oldukları sanılır ama Instagram sharding'e geçtiğinde zaten milyonlarca kullanıcısı vardı. Erken aşamada tek sunucu PostgreSQL yeterliydi. Mülakatlarda bu olgunluğu göstermek, teknik bilginin yanı sıra mühendislik yargısına sahip olduğunu ortaya koyar.
