# Veri Saklama, ZDR ve Uyumluluk

Skill yazarken kafayı çoğunlukla "ne yapsın" sorusu kaplar. Üretime geçtikten sonra ise başka bir soru gelir: **bu skill çağrıldığında veri nereye gidiyor, ne kadar süre orada kalıyor, kim erişebiliyor?** Sağlık, finans, hukuk veya kamu için iş yapan ekipler için bu soru sözleşme ve mevzuat sorusu. Bu derste skill ekosisteminin retention modelini açıyorum: ZDR (Zero Data Retention) Skills için neden geçerli değil, Anthropic ve OpenAI standart retention nasıl işliyor, data residency ne anlama geliyor, KVKK ve GDPR ile nasıl uyumlu kalınır, hangi senaryolar ekstra dikkat ister.

## ZDR ve Skills: eligible değil

Tek cümle: **Agent Skills feature, Zero Data Retention coverage'ı altında değil.** Anthropic'in skill dokümantasyonu bunu açık yazar: "Agent Skills is not covered by ZDR arrangements. Skill definitions and execution data are retained according to Anthropic's standard data retention policy." Diğer Anthropic API endpoint'leri için aktif olan ZDR anlaşması skill kullanan request'leri kapsamaz. Skill tanımı (SKILL.md, script'ler, resource'lar) ve skill execution sırasında oluşan input/output verisi standart retention süreleri içinde tutulur.

Bu detay regulated industries için kritik bir karar noktası. Bir sağlık şirketi ZDR şartıyla Anthropic API'yi onayladıysa, skill feature'ını açtığı anda o onay otomatik gelmez; ayrı bir uyumluluk değerlendirmesi gerekir. Aynısı finans, hukuk ve savunma müşterileri için de geçerli.

## Anthropic standard retention

Standart policy şöyle çalışır: API çağrılarındaki input/output verileri belirli bir süre log'larda tutulur; tam süreler ve istisnalar Anthropic'in "API and data retention" sayfasında (docs.claude.com/en/manage-claude/api-and-data-retention) listelenir. Skill bundle'ları workspace'inde aktif olduğu sürece saklanır. Skill silindiğinde temizlik süreçleri başlar — ancak instant değil, belirli bir gecikmeyle tamamlanır. "Sildim, gitti" varsayımı yanlış; silmenin gerçekten etkili olduğu süreyi mevzuat yükümlülüklerinle karşılaştırmak gerekir.

## OpenAI retention modeli

OpenAI tarafında hosted skill'ler container lifecycle'ına bağlıdır. Container aktif kaldıkça mount edilen skill ve container file'ları erişilebilir; container expire ettiğinde mount'lar düşer. Local shell modunda execution kullanıcının kendi infrastructure'ında kalır — provider retention modeli bu senaryoya uygulanmaz. Skill upload'ları OpenAI workspace'inde kullanıcı silinceye kadar tutulur. Detay için OpenAI "data controls" sayfası referans noktası.

## Data residency

Veri ikametgahı (data residency) "bu byte fiziksel olarak hangi ülke sınırları içinde duruyor" sorusudur. İki temel senaryo:

- **Hosted skill:** Veri provider'ın infrastructure'ına gider. Anthropic ağırlıklı olarak AWS US-East üzerinde çalışır; multi-region genişliyor. OpenAI AWS US-East ve Azure üzerinde dağıtık. AB şirketinin verisi hosted skill'i çağırdığında çoğu durumda Atlantik'i geçer.
- **Local skill:** Skill kullanıcının kendi makinesinde veya sunucusunda çalışır. Hosted execution yok; residency tamamen kullanıcı kontrolünde.

Region pinning bazı Enterprise plan'larda mevcut; production öncesi sales ekibiyle hangi region'ın gerçekten guarantee altında olduğu netleştirilmeli.

## KVKK ve GDPR ipuçları

Skill çıktıları kişisel veri içeriyorsa hukuk tarafının üç maddesi öne çıkar.

- **Purpose limitation ve veri minimizasyonu.** Skill'e gönderilen veri amaca uygun olmalı, gerekenden fazlası iletilmemeli. "Toplu CSV'yi modele yapıştır, o gerekeni alır" yaklaşımı GDPR Article 5'in data minimisation prensibine ters.
- **Saklama süresi belgelenmesi.** Skill çıktısının ne kadar süre tutulacağı, hangi kanalda log'landığı, ne zaman silineceği yazılı olmalı. Audit sırasında ilk sorulan soru bu.
- **Veri sahibinin hakları.** Erişim, düzeltme ve silme talepleri için skill kullanan sistem tarafında süreç tanımlanmalı.

GDPR Article 28 kapsamında Anthropic ve OpenAI processor pozisyonundadır; veri kontrolörü olan müşteri ile aralarında DPA (Data Processing Agreement) imzalanır. Bu sözleşmeler sub-processor listesi içerir — Anthropic AWS kullandığı için AWS de listede yer alır; AB için bu transfer mekanizması Standard Contractual Clauses ile yönetilir.

KVKK tarafında Türkiye'den çıkan kişisel veri Anthropic ya da OpenAI'nin US altyapısına gittiğinde "yurt dışına veri aktarımı" başlığına girer. Aydınlatma metninde bu açıkça belirtilmeli, gerekli durumlarda açık rıza alınmalı; KVKK'nın yeterlilik kararı listesini ve Kurul rehberlerini takip etmek gerekir.

## Compliance riskli skill örnekleri

Bazı domain'ler her zaman ekstra denetim ister.

- **Hukuk skill'i** — müvekkil verisini işliyor, avukatlık sırrı kapsamında. ZDR olmayan bir endpoint'e müvekkil dosyası yapıştırmak hem etik hem mevzuat açısından savunulamaz.
- **Sağlık skill'i** — hasta verisi GDPR Article 9 kapsamında "özel nitelikli" kategoride; ek koruma gerekir. Enterprise plan + DPA + ayrıntılı audit log şart.
- **Finans skill'i** — bordro, maaş, hesap özeti gibi veriler. Veri minimizasyonu kritik; tüm veriyi göndermek yerine sadece analizin gerektirdiği alanları iletmek.
- **HR skill'i** — çalışan değerlendirme, mülakat analizi. GDPR Article 22 "tamamen otomatik karar verme"yi sınırlandırır; skill'in çıktısı işten çıkarma gibi etkilere yol açıyorsa insan onayı zorunlu.

## Hassas iş için öneriler

Yukarıdaki kategorilerde çalışıyorsan birkaç pratik karar büyük fark yaratır.

- **Local skill tercih et.** Veri kullanıcının altyapısında kaldığında residency ve retention sorularının büyük kısmı düşer.
- **Pseudonymization uygula.** Kişiyi tanımlayan alanları skill'e göndermeden önce maskele; çıktı dönerken eşleştirme tablosu üzerinden gerçek değerlere bağla.
- **On-prem opsiyonunu değerlendir.** Enterprise plan'larda regulated müşteriler için isolated deployment seçenekleri konuşulabilir.
- **Audit log'u kendi tarafında tut.** Skill çağrıları, input özetleri ve çıktı meta-verileri şirket içi log sistemine düşsün; provider log'una bağımlı kalma.
- **Hukuk ekibi review'i.** Hassas domain'de skill production'a girmeden önce yasal birim mutlaka değerlendirmeli; "developer build etti, geldi yayında" akışı bu kategori için doğru değil.

## Yaygın yanlış varsayımlar

- **"API çağırıyorum, veri benim sunucumda kalıyor."** Hayır; hosted skill'de veri provider container'ına gider, orada işlenir, retention policy'sine tabi tutulur.
- **"Skill markdown, ne saklıyor olabilir?"** Skill execution sırasında üretilen input/output verisi retention'a tabi; skill'in kendisi statik içerik olsa bile çağrı verisi öyle değil.
- **"Pre-built skill kullanıyorum, custom değil, güvenli."** Skill kodu provider tarafında olsun olmasın, kullanıcının yolladığı veri aynı yolu izler.
- **"Anthropic ZDR sunuyor, demek Skills de ZDR."** Hayır; Skills feature'ı için ZDR coverage'ı yok, doküman bunu explicit yazıyor.

## Kurs sonu

Buraya kadar Skills ekosisteminin altı katmanını gezdik: agent ve skill kavramı, dosya yapısı ve metadata, instructions ve resource yazımı, platform farkları ve dağıtım modelleri, güvenlik tehdit modeli, retention ve uyumluluk. Üretim için kalan parça pratik. Kendi domain'inde küçük bir skill yaz, audit checklist'inden geçir, sınırlı bir grupla dağıt, metriklerle ölç, gerekirse versiyonu döndür. Skill ekosistemi 2025-2026 boyunca hızla evrim geçiriyor; agentskills.io spec güncellemelerini, Anthropic ve OpenAI release note'larını ve docs.claude.com/en/manage-claude/api-and-data-retention gibi resmi politika sayfalarını düzenli takip et. Skills bir hedef değil; doğru kullanıldığında genel amaçlı bir modeli senin işine yarayan bir takım arkadaşına dönüştüren araç.
