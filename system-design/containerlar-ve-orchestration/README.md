# Container'lar ve Orchestration

"Bende çalışıyor" — yazılım geliştirme tarihinin en sık duyulan cümlelerinden biri. Geliştirici kendi bilgisayarında her şeyi mükemmel çalıştırıyor; ancak kod test sunucusuna gittiğinde hata fırlatıyor. Neden? Farklı Python versiyonu, farklı bir kütüphane sürümü, eksik bir ortam değişkeni. Ya da üretim sunucusunda iki farklı uygulamanın bağımlılıkları birbiriyle çakışıyor.

Bu problem onlarca yıl boyunca "her makineyi elle yapılandır" ya da "VM kullan" gibi çözümlerle aşılmaya çalışıldı. Container teknolojisi bu probleme çok daha temiz ve verimli bir çözüm sunar: uygulamayı, bağımlılıklarını ve yapılandırmasını tek bir izole birim olarak paketle.

## Container Nedir?

Container, uygulama kodunu, runtime'ı, sistem kütüphanelerini ve tüm bağımlılıkları bir araya getiren izole bir çalışma ortamıdır. Container'ı çalıştırdığın her yerde — geliştirici dizüstü bilgisayarında, test sunucusunda, üretim ortamında — tam olarak aynı şekilde davranır.

### VM'lerden Farkı

Sanal makine (VM) tam bir işletim sistemi çalıştırır: kendi kernel'i, kendi bellek yönetimi, kendi driver'ları. Bu esneklik sağlar ama ağır bir yük getirir — her VM gigabaytlarca disk alanı ve bellek tüketebilir, başlaması dakikalar alabilir.

Container ise host işletim sisteminin **kernel'ini paylaşır**. İzolasyon, Linux'un namespace ve cgroup mekanizmaları aracılığıyla sağlanır. Bu sayede container'lar çok daha hafiftir: megabaytlar, saniyeler içinde başlar ve aynı makineye onlarca container sığar.

### Docker: Image ve Container

**Docker**, container teknolojisini ana akıma taşıyan araçtır. İki temel kavramı var:

- **Image**: Uygulamayı oluşturmak için gereken talimatların dondurulmuş hali — bir blueprint. Değiştirilemez, katmanlı bir yapıya sahiptir.
- **Container**: Image'dan oluşturulan çalışan örnektir. Aynı image'dan onlarca container başlatabilirsin.

Image'lar **Dockerfile** ile tanımlanır:

```dockerfile
FROM python:3.13-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "app.py"]
```

Her satır bir katman oluşturur. Yalnızca değişen katmanlar yeniden oluşturulur; bu da build süreçlerini hızlandırır.

### Docker Registry

Image'ları depolamak ve paylaşmak için **registry** kullanılır. **Docker Hub** en yaygın public registry'dir. Kurumsal ortamlarda ise **AWS ECR** (Elastic Container Registry) veya **Google Artifact Registry** gibi private registry çözümleri tercih edilir. CI/CD pipeline'ında kod commit edildiğinde image otomatik olarak build edilir ve registry'e push edilir; oradan da deploy ortamına çekilir.

## Orchestration Nedir?

Tek bir container çalıştırmak kolaydır. Ama gerçek üretim ortamında onlarca, yüzlerce container var: uygulamanın birden fazla instance'ı, farklı servisler, database'ler, cache'ler. Bu container'ları kim yönetir? Biri çökerse otomatik yeniden başlatılacak mı? Trafik artınca yeni instance'lar nasıl eklenecek? Güncelleme geldiğinde kesintisiz nasıl yapılacak?

**Container orchestration** bu sorulara cevap verir. Onlarca ya da yüzlerce container'ı otomatik olarak yönetir: başlatır, durdurur, ölçeklendirir, günceller, sağlık kontrolü yapar.

### Kubernetes: Temel Kavramlar

**Kubernetes** (K8s), Google tarafından 2014'te açık kaynak olarak yayımlanan ve bugün container orchestration'ın fiili standardı haline gelen platformdur.

Temel nesneler şunlardır:

**Pod**: Kubernetes'in en küçük deploy birimidir. Bir veya birkaç container'ı bir arada çalıştırır, ağı ve storage'ı paylaşırlar. Genellikle tek bir container içerir.

**Deployment**: "Bu uygulamanın 3 instance'ı her zaman çalışsın" gibi desired state tanımlar. Kubernetes gerçek durumu sürekli bu tanımla karşılaştırır; biri çökerse otomatik yeniden başlatır.

**Service**: Pod'lar geçicidir — IP'leri değişir, yenileri oluşur. Service, pod'lara sabit bir DNS adı ve IP adresi verir. İç servisler için ClusterIP, dış erişim için NodePort veya LoadBalancer kullanılır.

**Ingress**: Dışarıdan gelen HTTP/HTTPS trafiğini doğru servislere yönlendirir. "api.sirket.com/kullanici" isteğini kullanıcı servisine, "api.sirket.com/odeme" isteğini ödeme servisine gönderir. Bir çeşit uygulama katmanı router'ıdır.

## Gerçek Dünya Kullanımı

Büyük cloud sağlayıcıların tamamı **managed Kubernetes** hizmeti sunar: **Google Kubernetes Engine (GKE)**, **Amazon EKS**, **Azure AKS**. Managed Kubernetes'te control plane (Kubernetes'in yönetim katmanı) cloud sağlayıcısı tarafından yönetilir; sen yalnızca worker node'ları ve workload'larla ilgilenirsin.

**Spotify**, tüm backend altyapısını Kubernetes üzerinde çalıştırmaktadır. Her ekip kendi servisini bağımsız olarak Kubernetes'e deploy eder. Binlerce mikro-servisin aynı Kubernetes cluster'larında yönetilmesi, operasyonel tutarlılık sağlar.

Modern CI/CD pipeline'ı genellikle şöyle işler: geliştirici kodu commit eder → CI sistemi (GitHub Actions, GitLab CI) testleri çalıştırır → Docker image build edilir → image registry'e push edilir → Kubernetes'teki Deployment güncellenir → rolling update ile kesintisiz geçiş yapılır.

## Ne Zaman Kullanılır / Kullanılmaz

**Container kullanımı** artık neredeyse her üretim ortamı için standarttır. "Bende çalışıyor" problemini ortadan kaldırır, CI/CD pipeline'larını standartlaştırır ve cloud'a taşınmayı kolaylaştırır.

**Kubernetes'e geçme kriterleri:**

- Birden fazla servis var ve bunlar bağımsız olarak ölçeklendirilmesi gerekiyor
- Yüksek erişilebilirlik (high availability) kritik
- Otomatik scaling, self-healing ve rolling update gibi özellikler gerekiyor
- Ekip bu operasyonel karmaşıklığı yönetecek kapasiteye sahip

**Kubernetes'i atla ve daha basit çözümlere bak:**

- Tek bir servis çalıştırıyorsun ve trafik düşük → **Docker Compose** yeterlidir. Birden fazla container'ı tek bir `docker-compose.yml` dosyasıyla tanımlar, yerel geliştirme ve küçük üretim ortamları için idealdir.
- Operasyonel karmaşıklığı yönetecek ekip yoksa → Managed platform hizmetleri (AWS App Runner, Google Cloud Run) daha uygun olabilir.

**Stateful uygulamaların container'da dikkat noktaları:** Veritabanları gibi stateful uygulamalar container ortamında çalışabilir ama dikkat ister. Container'lar geçici yapıdadır; container silindiğinde içindeki veri de gider. Bu yüzden veritabanı container'ları persistent volume kullanmalıdır. Kubernetes'te **StatefulSet** nesnesi bu tür uygulamalar için özel olarak tasarlanmıştır ve her pod'a kalıcı kimlik ve storage atar. Bununla birlikte üretim ortamında kritik veritabanları için managed servisler (AWS RDS, Cloud SQL) genellikle daha güvenli bir seçimdir.

## Mülakatta Bu Konuya Nasıl Yaklaşılır

"Microservices'inizi nasıl deploy edersiniz?" sorusuna net bir pipeline ile cevap ver: her servis için ayrı Docker image build edilir, bu image bir container registry'e push edilir, Kubernetes'teki Deployment objesi güncellenir ve Kubernetes rolling update ile yeni pod'ları devreye alırken eski pod'ları aşamalı olarak kapatır. Bu akışı adım adım anlatabilmek, konuya gerçekten hakim olduğunu gösterir.

Kubernetes'in operasyonel karmaşıklık getirdiğini ve bunu minimize etmenin yollarından birinin managed servisler (EKS, GKE, AKS) kullanmak olduğunu belirt. "Kubernetes her şeyin çözümü değildir; tek bir servis için Docker Compose ya da bir managed platform hizmeti çok daha pragmatik olabilir" demek olgunluk işaretidir.

Stateful uygulamalar konusunda bilinçli olduğunu göster: veritabanlarını container'da çalıştırmak mümkün ama üretim ortamında StatefulSet ve persistent volume yönetimi karmaşıktır. Bu nedenle kritik veritabanları için managed servisleri tercih ettiğini, ancak stateless servislerin tamamını container'da tuttuğunu açıklayabilirsen mülakatta güçlü bir izlenim bırakırsın.
