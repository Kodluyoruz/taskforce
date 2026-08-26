# GitHub Actions Nedir? CI/CD'ye Giriş

Bir projeye yeni bir özellik ekledin, kodu push'ladın — ve şimdi ya testlerin geçip geçmediğini manuel olarak kontrol edeceksin, ya da production'a gitmeden önce bir ekip arkadaşının onayını bekliyorsun. Bu süreç ne kadar sürüyor? Ne kadar hata payı var? İşte CI/CD tam olarak bu sorulara yanıt vermek için var. GitHub Actions ise bu otomasyonu doğrudan GitHub içine taşıyan araç.

## CI/CD Nedir?

CI/CD, yazılım geliştirme sürecindeki tekrarlayan ve hata-prone adımları otomatikleştiren bir yaklaşımlar bütünü. İki temel kavramdan oluşuyor.

### Continuous Integration (Sürekli Entegrasyon)

Continuous Integration, her kod değişikliğinde otomatik olarak build alma ve testleri çalıştırma pratiği. Bir developer kod push'ladığında veya pull request açtığında, sistem hemen devreye girer: kodu derler, testleri koşar, sonuçları raporlar.

Bu yaklaşımın temel faydası şu: bir bug'ı commit'ten 10 dakika sonra bulmak ile 2 hafta sonra bulmak arasında muazzam bir fark var. Erken yakaladığın hata, az kod demek; az kod, az debug demek.

Aynı anda birden fazla developer'ın aynı codebase üzerinde çalıştığı projelerde CI olmazsa şu tablo ortaya çıkabilir: herkes kendi branch'inde ilerler, merge zamanı gelince çakışmalar ve hatalar birikimiş halde önüne gelir. CI, bu sorunları birikimine izin vermeden yüzeye çıkarır.

### Continuous Delivery ve Continuous Deployment Farkı

Bu iki kavram sık karıştırılır, ama aralarında önemli bir ayrım var.

**Continuous Delivery** — Her başarılı build, deploy edilebilir durumda bir artifact üretir. Ancak production'a gönderme kararı hâlâ bir insan onayına bağlıdır. "Hazır, istersen deploy edebilirsin" anlamına gelir.

**Continuous Deployment** — Testlerden geçen her değişiklik, insan müdahalesi olmaksızın otomatik olarak production'a gider. Tamamen otomatik bir pipeline. Güçlü bir test altyapısı ve güven gerektiren bir yaklaşım.

Çoğu ekip Continuous Delivery ile başlar: her şey otomatik hazırlanır, ama son onay insanda kalır. Zamanla test güvenilirliği arttıkça Continuous Deployment'a geçiş yapabilirler.

### Manuel Süreçlerin Getirdiği Problemler

"Biz zaten testlerimizi çalıştırıyoruz" diyebilirsin — ama manuel mı? O zaman şu soruları düşün:

- Her developer her commit'ten önce tüm test suite'i çalıştırıyor mu?
- Deploy süreci belgelenmiş mi, yoksa kafada mı?
- "Bu makinede çalışıyor" diye duydun mu?

Manuel süreçler yorucu, atlayıcı ve tekraralanabilir değil. CI/CD ise bu adımları makineye devreder: makine yorulmaz, unutmaz, atlamaz.

## GitHub Actions Nedir?

GitHub Actions, GitHub'ın içine gömülü otomasyon platformu. Ayrı bir servis açman, başka bir platforma kayıt olman, webhook'ları elle bağlaman gerekmiyor. GitHub hesabın varsa, GitHub Actions kullanmaya hazırsın.

### Workflow Dosyaları

GitHub Actions, `.github/workflows/` klasöründeki YAML dosyalarını okuyarak çalışır. Her YAML dosyası bir workflow tanımlar. Bu dosyalar codebase'in parçası — versiyonlanır, review edilir, branch'lere göre farklılaştırılabilir.

```
proje-klasörü/
├── .github/
│   └── workflows/
│       ├── ci.yml          # Test ve build için
│       └── deploy.yml      # Deploy için
├── src/
└── package.json
```

### Temel Kavramlar

GitHub Actions'ı anlamak için birkaç terimi bilmen gerekiyor:

- **Workflow** — Otomatik bir sürecin tamamı. Bir veya birden fazla job'dan oluşur.
- **Event** — Workflow'u tetikleyen olay. Push, pull request, schedule, release gibi.
- **Job** — Bir runner üzerinde çalışan step'ler dizisi. Job'lar paralel ya da sıralı çalışabilir.
- **Step** — Job içindeki tek bir görev. Bir komut çalıştırabilir ya da hazır bir action kullanabilir.
- **Action** — Tekrar kullanılabilir iş birimi. GitHub Marketplace'ten indirebilir ya da kendin yazabilirsin.
- **Runner** — Workflow'ların çalıştığı sunucu. GitHub tarafından yönetilenler Ubuntu, Windows ve macOS seçenekleri sunar.

### Temel Kullanım Alanları

GitHub Actions'ı ne için kullanabilirsin?

- **Test otomasyonu** — Pull request açıldığında unit test, integration test çalıştırma
- **Build** — Uygulama derleme, Docker image oluşturma
- **Deploy** — Staging veya production ortamına otomatik gönderim
- **Kod kalite kontrolü** — Linter çalıştırma, code coverage raporlama, security tarama
- **Release yönetimi** — Versiyon tag'leme, changelog oluşturma, package yayınlama

## GitHub Actions'ın Avantajları

### GitHub ile Tam Entegrasyon

GitHub Actions, GitHub event'lerini birinci sınıf tetikleyici olarak destekler. Pull request açıldığında, bir issue'ya label eklendiğinde, release oluşturulduğunda, belirli bir branch'e push yapıldığında — bunların hepsi workflow'u başlatabilir. Ayrı bir servis kullandığında bu entegrasyonu kendin kurman gerekir; GitHub Actions'ta hazır geliyor.

Workflow çıktıları doğrudan pull request ekranında görünür: hangi test geçti, hangi step başarısız oldu, ne kadar sürdü — hepsini kod review sürecinin içinde görebilirsin.

### GitHub-Hosted Runner'lar

GitHub, workflow'larını kendi altyapısında çalıştıran sanal makineler sağlar. Ubuntu, Windows ve macOS seçenekleri mevcut. Sunucu kurma, güncelleme, bakım yapma gibi operasyonel yüklerle ilgilenmene gerek yok.

Daha özel ihtiyaçlar için self-hosted runner'larını da tanımlayabilirsin — kendi sunucularını kullanmak istersen bu seçenek var.

### Marketplace'te Binlerce Hazır Action

GitHub Marketplace'te topluluk tarafından paylaşılmış binlerce action bulunuyor. Node.js kurulumu, Docker build, AWS deploy, Slack bildirimi, cache yönetimi — çoğu yaygın ihtiyaç için hazır bir action zaten var. Her şeyi sıfırdan yazmana gerek yok.

### Public Repolar için Ücretsiz Kullanım

Public repolarda GitHub Actions tamamen ücretsiz çalışır. Private repolar için aylık belirli miktarda ücretsiz dakika tanınır; bu limit aşıldığında kullanım bazlı ücretlendirme başlar. Açık kaynak projelerde ya da öğrenme amacıyla kullanırken maliyet endişesi taşımana gerek yok.

## Basit Bir Örnek

Teoriden pratiğe geçelim. İşte en basit haliyle bir GitHub Actions workflow'u:

```yaml
# .github/workflows/merhaba.yml

name: Merhaba Dünya  # Workflow'un adı — GitHub arayüzünde bu ad görünür

on: push  # Tetikleyici: herhangi bir branch'e push yapılınca çalışır

jobs:
  merhaba:  # Job'un adı
    runs-on: ubuntu-latest  # Bu job, GitHub'ın Ubuntu runner'ında çalışacak

    steps:
      - name: Selamlama mesajı  # Step'in adı — log'larda görünür
        run: echo "Merhaba, GitHub Actions!"  # Çalıştırılacak shell komutu
```

Her satırın görevi şu:

- `name` — Workflow'a bir isim verir. GitHub arayüzünde Actions sekmesinde bu isim listelenir.
- `on: push` — Hangi event'te çalışacağını belirtir. Burada her push'ta tetikleniyor.
- `jobs` — Bir veya birden fazla job tanımlanır. Bu örnekte `merhaba` adında tek bir job var.
- `runs-on: ubuntu-latest` — Runner tipini belirtir. GitHub'ın en güncel Ubuntu sanal makinesini kullan demek.
- `steps` — Job içindeki adımlar listelenir. Her step'in bir adı ve bir görevi var.
- `run` — Shell komutu çalıştıran step tipi. Birden fazla satır için `|` kullanılır.

Bu workflow'u `.github/workflows/merhaba.yml` olarak kaydet ve push'la. GitHub Actions sekmesine girdiğinde workflow'un çalıştığını göreceksin.

Gerçek bir CI workflow'u bunun üzerine inşa edilir: `echo` yerine test komutu, tek step yerine birden fazla step — kurulum, build, test, raporlama adımları art arda gelir.

## Diğer CI/CD Araçlarıyla Kısa Karşılaştırma

GitHub Actions ilk CI/CD aracı değil. Piyasada başka seçenekler de var; bunları kısaca karşılaştıralım.

### Jenkins

Jenkins, CI/CD dünyasının en köklü araçlarından biri. Açık kaynaklı, son derece esnek, plugin ekosistemi geniş. Ancak bunların bedeli var: kendi sunucuna kurman, güncel tutman, plugin uyumluluklarını yönetmen gerekiyor. "Jenkinsfile" yazmak, pipeline'ları debug etmek ve altyapıyı ayakta tutmak ciddi bir operasyonel yük.

Büyük kurumsal ortamlarda ya da özel altyapı gereksinimleri olan ekiplerde Jenkins hâlâ yaygın tercih. Ama küçük-orta ölçekli projelerde bu yükü almak genellikle değmiyor.

### CircleCI ve Travis CI

Her ikisi de bulut tabanlı CI/CD servisleri. GitHub entegrasyonları var ama bağımsız platformlar. Yani ayrıca hesap açman, konfigürasyonu o platforma göre yazman ve fiyatlandırmasını takip etmen gerekiyor.

Travis CI bir dönem açık kaynak projelerin standart CI aracıydı; ancak sonraki yıllarda ücretsiz kullanım kısıtlamaları geldi ve topluluk büyük ölçüde uzaklaştı. CircleCI hâlâ güçlü bir seçenek ama ek konfigürasyon ve platform öğrenme eğrisi söz konusu.

### GitHub Actions

GitHub Actions'ın temel avantajı: sıfır kurulum, sıfır platform değiştirme. Zaten GitHub'dasın; workflow dosyasını eklemen yeterli. Event sistemi GitHub'la doğrudan entegre, Marketplace sayesinde çoğu ihtiyaç için hazır çözüm var ve public repolar için ücretsiz.

Dezavantajı? GitHub'a bağımlısın. Eğer kod GitHub dışında tutuluyorsa ya da platform bağımsızlığı önemli bir gereksinimse, diğer araçlara bakmak mantıklı olabilir.

---

GitHub Actions'ı anlamak için en iyi yol yazmak. Bir sonraki adımda gerçek bir workflow oluşturup push'layacağız — bir Node.js projesini test eden, cache kullanan, adım adım ilerleyen bir pipeline.
