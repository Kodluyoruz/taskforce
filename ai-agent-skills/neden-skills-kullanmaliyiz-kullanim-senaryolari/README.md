# Neden Skills Kullanmalıyız ve Kullanım Senaryoları

Skills bir teknik fantazi değil. Basit bir gözlemden doğdu: ekipler aynı talimatı aynı modele günde on kere yapıştırıyordu. Pazarlamacı her metinde aynı marka tonu kurallarını, geliştirici her PR'da aynı checklist'i, destek ekibi her ticket'ta aynı eskalasyon kurallarını prompt'a kopyalıyordu. Bu derste Skills'in **somut faydalarını** ve gerçek ekiplerin onunla ne yaptığını anlatacağım. Klasör yapısı, YAML alanları gibi konuları bir sonraki section'a bıraktım; burada "neden zahmet edesin?" sorusuna net cevap vermek istiyorum. Karar verici çoğu zaman yöneticidir ve cevap beklediği soru "bana ne kazandırır?" sorusudur.

## Üç temel fayda

### Re-use

Aynı talimatı her sohbete tekrar yapıştırmak zorunda kalmamak Skills'in en sade kazancı. Bir kere yazarsın; agent ne zaman ihtiyaç duyarsa otomatik yükler. Sohbet kapanır, model değişir, ekip büyür — skill yerinde durur. Kıdemli bir geliştiricinin "bu repo'da database migration'a dokunmadan önce şunlara bak" bilgisi, ekipten her birinin agent'ında çalışan ortak bir kaynağa dönüşüyor.

### Composability

Skills tek tek yararlı, ama asıl güç birlikte çalışmalarında. Agent başlangıçta on, yirmi, hatta yüz skill ile yüklü olabilir. "Şu skill'i seç" demek zorunda değilsin; agent kullanıcının isteğine bakar, description'ı uyan skill'leri sırayla tetikler. Kullanıcı "bu PDF'i özetle, Slack'e at, Jira'ya ticket aç" dediğinde üç ayrı skill arka arkaya devreye girer. Tek devasa "her şeyi yapan" skill yerine dar kapsamlı skill'leri istiflemek hem yazımı kolaylaştırır hem hata yüzeyini küçültür. Unix felsefesinin agent dünyasındaki karşılığı.

### Düşük context maliyeti

Skills'in en önemli mühendislik kazancı progressive disclosure ile geliyor. Yüz skill yüklü olsa bile sürekli context'te duran şey sadece her birinin metadata'sı — yani `name` ve `description`. Tipik olarak skill başına 100 token civarı. Geri kalan içerik, yani `SKILL.md` gövdesi, script'ler ve referans dosyalar, ancak skill tetiklendiğinde okunur. Bu sayede onlarca skill kurulu olmasının context bütçesine maliyeti çok düşük. Klasik "tek seferlik kocaman system prompt" yaklaşımına göre çok daha ölçeklenebilir bir model.

## Domain expertise kapsülleme

Genel amaçlı model akıllıdır, ama senin alanını bilmez. Marka rehberi, code review checklist'i, bir API'nin kuralları, veritabanı şeması — model bunları training'inde görmedi. Her sohbette prompt'a yapıştırmak hem yorucu hem güvenilmez. Prompt bir noktadan sonra o kadar uzar ki ne sen takip edebilirsin ne de model her parçasına gerçekten dikkat eder.

Skill bu sorunun temiz çözümü. Alan bilgisini bir klasöre yazarsın: ana talimatlar `SKILL.md`'ye, detay tabloları ve şemalar referans dosyalara, deterministik adımlar script'lere gider. Üç şey kazanırsın: bilgi kaybolmaz, tek kaynak vardır (ekipte herkes aynı versiyona bakar), güncelleme tek noktadan yapılır.

## Takım içi bilgi paylaşımı

Bir mühendisin yazdığı skill, ertesi gün başka birinin agent'ında çalışan ortak bir kaynağa dönüşür. Klasik "internal documentation" zaten vardı — ama çoğu zaman kimse okumuyordu. Skill formatında yazıldığında dokümantasyon, modelin gerçekten okuyup uyguladığı bir kaynağa dönüşüyor. "Şirket içi expertise" raftaki PDF'lerden çıkıp agent'ın çalışma anında erişebildiği bir dosya sistemine taşınıyor. Onboarding süresi kısalıyor, "bu işi sadece şu kişi biliyor" tipi bottleneck'ler eriyor.

## Gerçek senaryolar

### A. Style guide / brand voice

Pazarlama ekibi için klasik bir kullanım. Skill içinde marka tonunun kuralları, örnek paragraflar, yasak kelimeler ve onaylı format şablonları yer alır. Sosyal medya post'u, e-posta kampanyası, landing page metni — her biri için tutarlı bir tonla yazım. Yeni katılan bir copywriter aynı agent'ı kullandığında, ekibin yıllar içinde oluşturduğu ses tonunu ilk günden tutturuyor. Onay süreçleri kısalıyor çünkü model çıktısı ilk denemede genelde brand guideline'a uygun geliyor.

### B. PDF / Word doc processing

Hukuk, finans ve idari işler ekiplerinin sürekli karşılaştığı sorun: uzun belgeleri okumak, içinden anlamlı alanları çıkarmak, özet üretmek, form doldurmak. Skill içinde extract → analyze → summarize akışı tanımlanır; ağır iş için Python script'leri klasöre konur. Hukuk ekibinde bir sözleşme inceleme skill'i bir saatlik bir okumayı on dakikaya indirebiliyor; günde üç sözleşmeyle ilgilenen bir avukat için bu doğrudan yarım gün geri kazanılan zaman demek.

### C. Code review

Yazılım ekibi için. Skill içinde şirketin coding standards'ı, güvenlik checklist'i, lint kuralları ve mimari karar tutanakları yer alır. Her açılan PR'da agent otomatik olarak bu skill'i tetikler; diff'i okur, sırayla checklist'ten geçer, sorunları yorum olarak bırakır. Kıdemli developer'ın zamanı, modelin yakaladığı tipik hataları işaret etmekle değil, gerçekten mimari kararlar gerektiren yerlere odaklanmakla geçer.

### D. Customer support workflow

Destek ekibi için. Skill, ticket sınıflandırma → bilgi tabanı arama → cevap şablonu → escalation kuralları akışını içerir. Klarna gibi şirketlerin yayınladığı sonuçlar, bir AI destek ajanının yüz binlerce ticket'ı yıllık milyonlarca dolar tasarrufla yönettiğini gösteriyor. Ama mucize değil; arkasında doğru yazılmış skill'ler var — bilgi tabanını okumayı, müşteri tonunu korumayı, hangi durumda insana devretmesi gerektiğini açıkça söyleyen instructions.

### E. Data analysis

Analitik ekibi için. Skill içinde SQL şeması, sık kullanılan query'ler, raporlama template'i ve veri tanımları yer alır. Analist "geçen çeyrek ürün başına büyüme nedir?" diye sorduğunda agent, skill içindeki şema dosyasını okur, doğru tabloyu seçer, hazır pattern'lardan birini kullanarak query'yi yazar. Doğal dilden SQL'e geçişin doğru çalışması, modelin şirketinizin gerçek veri modelini bilmesine bağlı — skill bu bilgiyi taşıyor.

## Pratik kazanç (ROI)

Skills'in zaman tasarrufunun anahtarı şu: tek bir kişinin bilgisi, ekibin tamamı için aktif hale geliyor. Bir hukuk ekibinde PDF özet skill'i, günde üç sözleşme inceleyen bir avukata 30 dakika geri kazandırıyorsa, on kişilik bir ekipte bu haftada 25 saate ulaşıyor. Klarna'nın customer service ajanı 853 çalışanın yükünü taşıdığını raporluyor. JPMorgan'da yatırım bankacılığı sunumları analistlerin saatlerce hazırladığı işi 30 saniyeye indiriyor. Gartner 2026'da kurumsal uygulamaların yüzde 40'ında task-specific agent'ların yer alacağını söylüyor.

Bu rakamların ortak noktası şu: kazanç tek bir skill'den değil, ekipte gerçekten kullanılan bir skill kataloğundan geliyor. "Her ekipte bir kez yaz, herkes için aktif" prensibi. Tek bir skill'in maliyeti birkaç saatlik yazım emeği; getirisi ise o ekibin haftalık tekrarlayan tüm benzer işlerinde geçerli oluyor. Yatırımın amortisman süresi tipik olarak bir-iki hafta.

## Mini örnek

Code review senaryosu için minimal bir SKILL.md şuna benzer:

```yaml
---
name: code-review-checklist
description: Run our team's PR review checklist (security, performance, style) before approval. Use when reviewing a pull request or analyzing diff output.
---

# Code Review Checklist

Bir PR diff'i geldiğinde sırasıyla şu kontrolleri yap:

1. Güvenlik: kullanıcı input'u, SQL injection, sırlar.
2. Performans: N+1 query, gereksiz loop, cache.
3. Stil: ESLint/Prettier kuralları.
4. Test kapsamı: yeni kod test ediliyor mu?

Detay için bkz. `STANDARDS.md`.
```

`description` modeli ne zaman tetikleyeceğini, gövde ise neyi nasıl yapacağını söylüyor. Daha derin detay (örneğin şirketin tüm güvenlik standartları) `STANDARDS.md` dosyasına çıkıyor; agent gerektiğinde onu da okur. Yapı sade, ama bir ekibin haftada onlarca kez yaptığı işi standartlaştırmaya yetiyor.

## Sırada: anatomi ve yapı

Section 1'in finali bu lesson. Bir sonraki section'da Skills'in iç anatomisine giriyoruz: `SKILL.md` dosyasının yapısı, YAML frontmatter alanları, three-tier loading mimarisi (metadata → instructions → resources) ve skill klasörünün içine neler koyabileceğin. Teori bitti; sıra "kendi skill'ini yazmak için tam olarak ne biliyor olman gerekir?" sorusunda.
