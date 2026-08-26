# Ölçeklendirme: Vertical ve Horizontal Scaling

Bir uygulama yayına alındığında her şey yolunda gider — on kullanıcı, yüz kullanıcı, hatta birkaç bin. Ama bir gün trafik aniden artar. Belki bir kampanya başladı, belki ürün bir yerde paylaşıldı, belki kullanıcı tabanın organik olarak büyüdü. Sistemin bu artışı kaldıramadığı an, yavaşlama ve zaman aşımı hataları başlar.

Ölçeklendirme (scaling), sistemin kapasitesini artırma sürecidir. Daha fazla trafik, daha büyük veri ya da daha düşük gecikme gerektiğinde, mevcut altyapını nasıl genişleteceğin sorusuna verilen yanıt ölçeklendirmedir.

Bunu yapmanın iki temel yolu vardır: mevcut makineyi güçlendirmek ya da makine sayısını artırmak. Birincisi **vertical scaling** (dikey ölçeklendirme), ikincisi **horizontal scaling** (yatay ölçeklendirme) olarak adlandırılır. Her ikisinin de güçlü ve zayıf yanları vardır; ve gerçek dünyada bu iki yaklaşım çoğunlukla birlikte kullanılır.

## Vertical Scaling (Scale Up)

Vertical scaling, tek bir makinenin kapasitesini artırmak demektir. Daha fazla CPU çekirdeği, daha fazla RAM, daha hızlı disk — mevcut sunucuya daha güçlü donanım ekliyorsun ya da daha güçlü bir sunucuya geçiyorsun.

**Nasıl Çalışır**

Diyelim ki veritabanı sunucunu 16 GB RAM'li bir makinede çalıştırıyorsun. Sorgular yavaşlamaya başladığında RAM'i 64 GB'a çıkarıyorsun. Uygulama kodunda hiçbir şey değişmiyor; veritabanı aynı makinede çalışmaya devam ediyor ama artık daha fazla veriyi bellekte tutabiliyor, bu da disk I/O'sunu azaltıyor ve sorguları hızlandırıyor.

```
Öncesi:            Sonrası:
┌─────────────┐    ┌─────────────┐
│  Sunucu A   │    │  Sunucu A   │
│  16 GB RAM  │ →  │  64 GB RAM  │
│  4 CPU      │    │  16 CPU     │
│  500 GB SSD │    │  2 TB NVMe  │
└─────────────┘    └─────────────┘
```

**Avantajları**

Uygulama kodunda değişiklik gerekmez. Mevcut sistem tek bir makinede çalışıyorsa, sadece donanımı güçlendirip devam edebilirsin. Bu, özellikle dağıtık çalışmayı desteklemek için yeniden yazılması zor olan sistemler için çekici bir seçenektir.

Operasyonel karmaşıklık düşüktür. Tek bir makineyi yönetmek, onlarca makineyi yönetmekten çok daha kolaydır. Ağ gecikmesi, servisler arası iletişim sorunları, distributed state yönetimi gibi konularla uğraşman gerekmez.

**Dezavantajları**

Fiziksel bir tavan vardır. En pahalı, en güçlü sunucunun bile bir CPU ve RAM limiti bulunuyor. Bu limiti aştığında vertical scaling ile ilerleme imkânı kalmıyor.

Pahalıdır. Donanım güçlendikçe maliyet doğrusal olmayan bir şekilde artar; her bir sonraki kapasite artışı giderek daha pahalıya gelir. Aynı işlem kapasitesi için tek güçlü bir sunucu, birden fazla orta seviye sunucudan çok daha pahalıya gelebilir.

En önemli riski ise single point of failure (tek hata noktası) oluşturmasıdır. Tüm sistemi bir makinede topluyorsan, o makine çöktüğünde her şey durur. Yüksek availability gerektiren sistemler için bu durum kabul edilemezdir.

**Pratik Örnek**

Bir startup'ın veritabanı sunucusu aylık 10 bin kullanıcıyla sorunsuz çalışıyor. Kullanıcı sayısı 100 bine ulaştığında RAM 16 GB'tan 64 GB'a çıkarılıyor ve bu değişiklik haftalarca yeterli geliyor. Uygulama koduna dokunulmaksızın yapılan bu değişiklik, vertical scaling'in hızlı ve pragmatik tarafını gösteriyor.

## Horizontal Scaling (Scale Out)

Horizontal scaling, var olan makineyi güçlendirmek yerine daha fazla makine eklemektir. Tek bir güçlü sunucu yerine, birbirine eşit yeteneklerde birden fazla sunucu çalıştırırsın ve gelen trafiği bunlar arasında dağıtırsın.

**Nasıl Çalışır**

Gelen istekleri makineler arasında dağıtmak için bir load balancer gerekir. Load balancer, her gelen isteği mevcut sunuculardan birine yönlendirir. Yük artarsa yeni bir sunucu daha eklenir; load balancer bunu da devreye alır.

```
               ┌─────────────┐
Kullanıcılar → │ Load Balancer│
               └──────┬──────┘
                       │
           ┌───────────┼───────────┐
           ↓           ↓           ↓
      ┌─────────┐ ┌─────────┐ ┌─────────┐
      │Sunucu 1 │ │Sunucu 2 │ │Sunucu 3 │
      └─────────┘ └─────────┘ └─────────┘
```

**Avantajları**

Teorik olarak sınır yoktur. Trafik artmaya devam ettikçe sunucu eklemeye devam edebilirsin. Bulut sağlayıcılar (AWS, Google Cloud, Azure) bu süreci otomatik hale getirir; trafik arttığında yeni instance'lar otomatik başlatılır (auto-scaling), azaldığında kapatılır.

Yedeklilik (redundancy) built-in gelir. Birden fazla makine çalıştığından, bir sunucu çökse bile diğerleri çalışmaya devam eder. Bu, yüksek availability için vazgeçilmezdir.

Maliyet verimliliği de horizontal scaling'in lehinedir. Orta sınıf makinelerin birden fazlası, genellikle tek ultra güçlü makineden daha uygun maliyetlidir.

**Dezavantajları**

Uygulamanın dağıtık çalışmayı desteklemesi gerekir. Eğer uygulaman sunucunun yerel diskinde ya da bellekte session bilgisi tutuyorsa, bir kullanıcı art arda gelen iki isteğini farklı sunuculara gönderdiğinde sorunlar çıkar. Stateless uygulama tasarımı, horizontal scaling'in temel ön koşuludur.

Load balancer eklenmesi zorunludur ve bu başlı başına yönetilmesi gereken bir bileşendir. Operasyonel karmaşıklık artar: onlarca sunucunun sağlık durumu izlenmeli, loglar merkezi bir yerde toplanmalı, deployment süreci tüm instance'ları kapsamalıdır.

## Gerçek Dünya Kullanımı

**Twitter'ın Fail Whale Dönemi**

Twitter'ın ilk yıllarında (2008-2010) sistem sık sık çöküyor ve kullanıcılar "Fail Whale" adı verilen hata sayfasıyla karşılaşıyordu. Temel sorun, hızla büyüyen kullanıcı tabanını kaldıracak şekilde tasarlanmamış bir altyapıydı. Zaman çizelgesi (timeline) hesaplamaları hem hesaplama hem de depolama açısından beklenenden çok daha yoğundu. Twitter sonradan bu sorunu farklı önbellekleme stratejileri, timeline'ları önceden hesaplayan servisler ve yatay ölçeklendirme ile çözdü. Bu süreç, büyüyen trafiğin yalnızca donanım ekleyerek değil, sistemin yeniden tasarlanmasıyla da ele alınması gerektiğini gösterir.

**Veritabanları: Vertical + Read Replica**

Veritabanları, horizontal scaling'in en zor uygulandığı bileşenlerdir. Veriyi tutarlı tutmak için dağıtık koordinasyon gerekir. Bu nedenle veritabanları genellikle önce vertical scaling ile güçlendirilir; ardından read replica'lar (okuma kopyaları) eklenir. Okuma yoğun workload'larda (örneğin bir haber sitesi), replica'lar okuma sorgularını karşılar; ana veritabanı yalnızca yazma işlemlerine odaklanır. Bu yaklaşım tam horizontal scaling değildir ama çoğu kullanım senaryosunu karşılamaya yeterlidir.

**Web ve Uygulama Katmanı: Horizontal**

Web server'lar ve uygulama server'ları ise horizontal scaling için oldukça uygundur. Bunlar genellikle stateless tasarlanır; her istek bağımsız olarak herhangi bir sunucu tarafından işlenebilir. Trafik arttığında yeni server instance'ları load balancer'ın arkasına eklenir, trafik azaldığında kaldırılır.

## Ne Zaman Hangisi

Küçük trafik ve basit altyapıda vertical scaling hızlı ve pratik bir çözümdür. Uygulama kodunu değiştirmeden kapasiteyi artırabilmek, özellikle erken aşamada değerlidir.

Yüksek trafik, yüksek availability gereksinimleri ve farklı bileşenlerin farklı hızlarda büyümesi söz konusuysa horizontal scaling tercih edilir. Bulut altyapısının sunduğu esnek fiyatlandırma ve auto-scaling, horizontal yaklaşımı büyük ölçekli sistemlerde ekonomik açıdan da cazip kılar.

Uygulamanın stateless olup olmadığı, horizontal scaling yapılabilirliğinin belirleyicisidir. Kullanıcı session bilgisi sunucu belleğinde tutuluyorsa, onu redis gibi merkezi bir cache'e taşımak gerekir. Yerel dosya sistemi kullanılıyorsa, bunu paylaşılan bir depolama çözümüne (S3, NFS) taşımak gerekir. Bu dönüşüm yapılmadan yalnızca makine eklenmesi sorunları çözmez, çoğaltır.
