# DNS Nasıl Çalışır?

Tarayıcına `google.com` yazıyorsun. Birkaç milisaniye içinde Google'ın sunucusuna bağlanıyorsun. Peki bu nasıl oluyor? Çünkü internet, insanların hatırlaması kolay domain adları yerine, makinelerin anladığı IP adresleriyle çalışır. `google.com` aslında `142.250.185.46` gibi bir adrese karşılık gelir. DNS (Domain Name System), bu iki dünya arasındaki köprüdür — internetin telefon rehberi.

Telefon rehberinde bir isim arayıp numarayı bulmak gibi düşün: sen domain adını veriyorsun, DNS sana IP adresini döndürüyor. Bu basit görünen süreç, aslında birden fazla sunucunun devreye girdiği, iyi tasarlanmış bir hiyerarşi üzerine kurulu.

## Nasıl Çalışır

### DNS Çözümleme Süreci

`blog.ornek.com` adresine gitmeye çalıştığını varsay. Tarayıcın bu domain'e karşılık gelen IP adresini bulmak için şu adımları izler:

**1. Browser Cache:** İlk önce tarayıcı kendi önbelleğine bakar. Daha önce bu siteye gittiysen, IP adresi bir süreliğine saklanmış olabilir. Varsa, diğer adımları atlayıp doğrudan bağlantı kurar.

**2. OS Cache:** Tarayıcı bulamazsa işletim sistemine sorar. Windows'ta `hosts` dosyası ve sistem DNS cache'i burada devreye girer.

**3. Recursive Resolver:** OS'ta da yoksa, internet servis sağlayıcının (ISP) DNS sunucusuna ya da Cloudflare'in `1.1.1.1` veya Google'ın `8.8.8.8` sunucusuna bir sorgu gönderilir. Bu sunucuya **recursive resolver** denir. Asıl detective işi burada başlar — recursive resolver, cevabı bulmak için diğer DNS sunucularına sorar.

**4. Root Nameserver:** Recursive resolver, cevabı önbelleğinde bulamazsa root nameserver'a gider. Dünya genelinde 13 root nameserver kümesi vardır. Bu sunucular domain adının son ekine (`.com`, `.org`, `.net`) göre seni doğru yere yönlendirir.

**5. TLD Nameserver:** Root nameserver, `.com` alan adları için hangi TLD (Top-Level Domain) nameserver'ına gideceğini söyler. TLD nameserver, `ornek.com` için hangi authoritative nameserver'ın yetkili olduğunu bilir.

**6. Authoritative Nameserver:** Bu, domain'in gerçek DNS kayıtlarının tutulduğu sunucudur. Domain'i hangi hosting sağlayıcısında tuttuysan ya da Cloudflare'de yönetiyorsan, kayıtlar orada tanımlıdır. Bu sunucu `blog.ornek.com`'a karşılık gelen IP adresini döndürür.

**7. IP Adresi Döner:** Recursive resolver bu IP adresini alır, önbelleğe yazar ve tarayıcına iletir. Tarayıcın artık sunucuya bağlanabilir.

Tüm bu süreç genellikle birkaç milisaniye sürer ve büyük ölçüde önbellekleme sayesinde bu kadar hızlıdır.

### TTL (Time To Live)

Her DNS kaydının bir TTL değeri vardır — saniye cinsinden ifade edilir. Bu değer, recursive resolver'ın bu kaydı ne kadar süre önbellekte tutacağını söyler. TTL süresi dolduğunda, resolver bir sonraki istekte kaydı yeniden sorgular.

TTL ayarı önemli bir denge gerektirir:
- **Çok düşük TTL (örn. 60 saniye):** Her dakika yeni DNS sorguları gönderilir. DNS sunucularına gereksiz yük biner, gecikme artar.
- **Çok yüksek TTL (örn. 86400 saniye = 1 gün):** IP adresini değiştirdiğinde, eski önbellekler saatler hatta günler boyunca eski adrese gitmeye devam eder.

Genel pratik: normal zamanlarda TTL'i 3600 (1 saat) ya da daha yüksek tutabilirsin. Bir migration veya değişiklik planladığında, birkaç gün önceden TTL'i düşür, değişikliği yap, sonra tekrar yükselt.

### DNS Kayıt Tipleri

| Kayıt | Açıklama |
|-------|----------|
| **A** | Domain'i bir IPv4 adresine eşler. `ornek.com → 93.184.216.34` |
| **AAAA** | Domain'i bir IPv6 adresine eşler. |
| **CNAME** | Bir domain'i başka bir domain'e yönlendirir (alias). `www.ornek.com → ornek.com` |
| **MX** | Mail exchange — e-posta trafiği için hangi sunucunun kullanılacağını tanımlar. |
| **TXT** | Metin tabanlı veriler için; domain doğrulama, SPF kayıtları burada tutulur. |

CNAME kaydı sıkça karıştırılır: CNAME bir IP'ye değil, başka bir domain adına işaret eder. Bu yüzden bir domain'in root'u (`ornek.com`) için CNAME kullanamazsın — çünkü root, MX ve diğer kayıtlarla çakışır.

## Gerçek Dünya Kullanımı

### Cloudflare ve AWS Route 53

Cloudflare sadece bir DNS sağlayıcısı değil — DNS ile CDN ve DDoS korumasını entegre eden bir platform. Domain'in nameserver'larını Cloudflare'e yönlendirdiğinde, DNS sorgularının yanı sıra trafiğin Cloudflare'in edge ağından geçmesini de sağlıyorsun.

AWS Route 53, Amazon'un DNS hizmetidir. Route 53'te DNS kayıtlarını yönetmenin yanında **health check** tanımlayabilir ve **failover routing** kurabilirsin: birincil sunucu yanıt vermezse, Route 53 otomatik olarak ikincil sunucunun IP adresini döndürür. Bu, DNS seviyesinde bir yük devretme mekanizmasıdır.

### GeoDNS

GeoDNS, kullanıcının coğrafi konumuna göre farklı IP adresleri döndürür. İstanbul'dan gelen bir kullanıcıya Frankfurt'taki sunucunun IP'sini, São Paulo'dan gelen birine ise Brezilya'daki sunucunun IP'sini döndürebilirsin. Bu hem gecikmeyi düşürür hem de trafik yükünü dağıtır.

### DNS Load Balancing

Aynı domain için birden fazla A kaydı tanımlayabilirsin — her biri farklı bir sunucuyu işaret eder. DNS resolver'lar bu kayıtları döndürerek basit bir round-robin dağılımı sağlar. Bu, L7 load balancer'lar kadar akıllı değildir (sağlık kontrolü yoktur, bağlantı sayısına bakmaz), ama basit ve maliyetsiz bir başlangıç noktasıdır.

## Ne Zaman Önemlidir

### TTL Yönetimi

Yukarıda değinildi ama tekrar vurgulamak gerekir: bir sunucu göçü ya da IP değişikliği yapacaksan, TTL'i en az 24-48 saat önceden düşür. Böylece eski önbellekler hızla temizlenir ve değişiklik çok daha kısa sürede yansır.

### DNS Failover

DNS failover, bir felaket kurtarma (disaster recovery) stratejisinin parçası olabilir. Birincil veri merkezin devre dışı kaldığında, DNS'in yedek merkeze işaret etmesi için health check + failover routing kombinasyonu kurulur. TTL'in yeterince düşük olması bu sürecin hızını doğrudan etkiler.

### DNS Amplification Saldırıları

DNS, UDP tabanlı çalıştığı için amplification saldırılarına açık bir vektördür. Saldırgan, küçük bir DNS sorgusu göndererek çok daha büyük yanıtların hedef IP'ye yönlenmesini sağlar. Kendi DNS altyapısını yönetiyorsan, recursive resolver'ı herkese açık bırakmamak (open resolver) ve rate limiting uygulamak temel güvenlik adımlarındandır. Kullanıcı olarak bu saldırıların varlığından haberdar olmak, doğru sağlayıcı ve yapılandırma seçiminde yol gösterir.

DNS, sistemin görünmez ama vazgeçilmez bir parçasıdır. Bir şeyler ters gittiğinde — sitenin açılmaması, e-postaların gitmemesi, yeni deploy'un yansımaması — sorunun DNS kaynaklı olup olmadığını kontrol etmek, debug sürecinin ilk adımlarından biri olmalı.
