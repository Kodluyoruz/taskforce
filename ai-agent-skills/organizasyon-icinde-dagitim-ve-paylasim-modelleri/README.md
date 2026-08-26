# Organizasyon İçinde Dağıtım ve Paylaşım Modelleri

Bir skill'i tek başına yazıp kullanmak görece kolay. Asıl iş, o skill'i bir ekibin, bir departmanın ya da tüm şirketin günlük akışına oturtmaktır. "Markdown'a benzer bir dosyayı kim, ne zaman, hangi sürümünden, hangi platformda görecek?" sorusunun cevabı her sağlayıcıda farklıdır. Üstelik Claude.ai, Claude API, Claude Code ve OpenAI Responses API arasında otomatik bir köprü yok — her workspace ayrı dünya. Bu derste skill'lerin organizasyon içinde nasıl dağıtıldığını, hangi sharing model'larının olgun, hangilerinin eksik olduğunu, ekibin gerçek hayatta hangi rollout pattern'larıyla çalışabileceğini açıyorum. Hedef: "bir skill yazdım"dan "yüz kişi bu skill'i tutarlı sürümde kullanıyor"a giden köprüyü kurmak.

## Platform bazlı sharing modelleri

Sağlayıcılar aynı kelimeyi kullansa da kapsamları farklı. Skill'i kimin görebildiğini, kimin yönettiğini ve sürümün nasıl izlendiğini özet bir tabloyla görmek en hızlısı.

| Platform        | Sharing scope          | Admin yönetimi          | Versiyon kontrolü |
| --------------- | ---------------------- | ----------------------- | ----------------- |
| Claude API      | Workspace-wide         | Workspace admin         | API + git         |
| Claude Code     | Personal / Project     | Yok (filesystem)        | Git               |
| Claude.ai       | Bireysel kullanıcı     | YOK (mevcut eksiklik)   | Manuel re-upload  |
| OpenAI hosted   | Workspace-wide         | Workspace admin         | API + git         |
| OpenAI local    | Bireysel kullanıcı     | Yok                     | Git               |

Tablonun okuduğu şey şu: workspace-wide modeller (Claude API, OpenAI hosted) merkezi yönetime izin verir; filesystem ve bireysel upload modelleri ise her kullanıcının kendi başının çaresine bakmasını gerektirir.

## Cross-surface sync (yokluğu)

Custom skill'ler **platformlar arası otomatik senkronize edilmez**. Anthropic dokümanı açıkça söyler: bir surface'e yüklenen skill diğer surface'lerde otomatik görünmez. Claude.ai'a yüklediğin bir skill Claude API workspace'inde yoktur; API'daki bir skill Claude.ai'a düşmez; Claude Code ise zaten ayrı bir dünya — filesystem üzerinden çalışır.

Pratik sonuç: skill'i tek bir provider'a teslim etmek yerine **merkezi bir git repo** (örnek: `company/skills`) tutmak, CI pipeline ile her platforma upload'u otomatikleştirmek gerekir. Tek doğru kaynak repo olur; provider'lar onun bir hedefidir.

## Org-wide dağıtım pattern'ları

Şirket içinde skill dağıtmanın dört yaygın yolu var. Hangisini seçeceğin ekip büyüklüğüne ve compliance gereksinimine bağlı.

**1. Centralized git repo (önerilir).** Tüm skill'ler tek bir repo'da yaşar. Pull request review zorunlu, CI otomatik audit + test + deploy çalıştırır. Main branch koruma altındadır; release'ler git tag'leriyle versiyonlanır. Bu model özellikle 10+ kişilik ekipler için olgunluk ve denetlenebilirlik sunar.

**2. Plugin marketplace (Claude Code).** Claude Code Plugins, şirket içi bir marketplace kurmaya izin verir. Çalışanlar bir komutla plugin'i çekip kurar. Sürüm yönetimi, geri alma ve revoke marketplace üzerinden tek noktadan yapılır. Geliştirici ağırlıklı ekipler için en pürüzsüz yol.

**3. Workspace-shared (Claude API / OpenAI).** Workspace admin skill'leri yükler, tüm workspace üyeleri kullanır. Sürüm değişikliği API endpoint üzerinden tek hamlede tüm workspace'e yansır. Production iş yükleri için en uygun model.

**4. Bireysel upload (Claude.ai).** Her kullanıcı kendi skill'ini Settings > Features üzerinden yükler. Org-wide yönetim yok — bu, Anthropic'in açıkça kabul ettiği bir eksiklik. Geçici çözüm: company wiki'de "şu skill'lerin şu sürümünü yükleyin" talimatı, ve sürüm uyumunu izlemek için basit bir CSV / form.

## Admin yönetimi eksiklikleri

Olgun bir kurumsal dağıtım için olması gereken ama bugün henüz eksik olan şeyler var:

- Claude.ai'da bir admin'in tüm org üyelerine merkezi olarak skill push etme imkânı **yok**. Her kullanıcı zip'i kendisi yükler.
- OpenAI tarafında workspace-vs-bireysel ayrımı görece yeni; rol bazlı erişim kontrolü olgunlaşma aşamasında.
- Provider'lar tarafında skill kullanım analytics'i sınırlı — hangi skill kaç kez tetiklendi, kim kullanıyor, hangi versiyon başarısız oluyor sorularına standart bir cevap yok. Bunu çoğu ekip kendi telemetry katmanıyla doldurur.

## Rollout stratejileri

Yeni bir skill'i bir günde herkese açmak her zaman doğru değil. Risk profiline göre dört kalıp:

- **Big bang.** Skill anında tüm üyelere açık. Küçük ekipler ve düşük riskli skill'ler için tamam.
- **Canary.** Önce küçük bir grup (örn. %5) yeni sürümü alır; metrikler yeşilse genişler. Orta-büyük org'lar için varsayılan olmalı.
- **Phased.** Departman bazlı rollout. Önce engineering, ardından ops, ardından legal. Domain-spesifik bir skill için doğal sıralama.
- **Opt-in.** Skill katalogda durur; kullanıcı isterse kurar. Power user'lar ve deneysel skill'ler için uygun.

## Sürüm değiştirme stratejisi

Çoğu hosted platformda iki pointer var: `default_version` production trafiğini kontrol eder, `latest_version` en son yüklenen sürümü gösterir. Sağlam bir release döngüsü şöyle akar:

1. Yeni sürüm yüklenir; `latest_version` ona kayar ama `default_version` hâlâ stable'da kalır.
2. Dev/staging workspace'te yeni sürüm bir referansla test edilir.
3. Production'da `default_version` canary olarak yeni sürüme alınır — sadece bir kullanıcı dilimi etkilenir.
4. Metrikler yeşilse `default_version` tam olarak yeni sürüme geçer.
5. Sorun çıkarsa `default_version` eski stable'a geri alınır; rollback tek API çağrısı.

Default sürümü silmek mümkün değildir; önce başka bir sürümü default yapmak gerekir. Bu kural rollback için doğal bir güvenlik ağı sağlar.

## Compliance ve governance

Hassas iş yapan skill'ler (finansal işlem, PII, üretim deploy) için ekstra kontroller şart:

- **Dual-control review:** Skill'in production'a çıkması için iki ayrı kişinin onayı zorunlu olsun.
- **Audit log:** Kim, ne zaman, hangi sürümü yükledi ve default'a aldı — git history bunu zaten verir, provider tarafındaki upload event'leriyle eşleştir.
- **Owner ve approver rolleri:** Her skill için repo'da bir CODEOWNERS girdisi; sahipsiz skill kalmasın.
- **Düzenli skill review döngüsü:** 6 ayda bir tüm aktif skill'leri tekrar gözden geçir; kullanılmayanları arşivle, eskimiş talimatları güncelle.

## Yaygın anti-pattern'lar

- Üyelerin kendi başına gelişigüzel skill yüklemesi → standart kayıp; aynı işi farklı kişiler farklı şekilde yapar.
- Skill'leri Slack üzerinden zip olarak paylaşmak → versiyonlama yok, audit yok, kim hangi sürümü çalıştırıyor belirsiz.
- Cross-surface manuel upload'a güvenmek → bir platform mutlaka unutulur, sürümler kayar.
- Skill kullanım metriklerini hiç izlememek → "ölü" skill'ler birikir, hangi skill'in işe yaradığı bilinmez.
- Default version'ı doğrudan değiştirmek (canary'siz) → kötü bir sürüm tüm production'ı bir anda kırar.

## Sırada: runtime kısıtları

Dağıtım modelini doğru kursan bile, skill'in nerede çalıştığı onun sınırlarını belirler. Claude API'da kod execution sandbox'ında network yoktur; Claude Code'da ise kullanıcının makinesinde tam erişim vardır; OpenAI hosted ile local shell arasında benzer farklar yaşar. Bir sonraki derste runtime kısıtlarını ve platform-spesifik farkları tek tek çıkarıyoruz: skill'in bir surface'te çalışıp diğerinde neden çalışmadığını anlayacaksın.
