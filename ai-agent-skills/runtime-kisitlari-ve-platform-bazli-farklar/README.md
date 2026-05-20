# Runtime Kısıtları ve Platform Bazlı Farklar

Bir skill her yerde "aynı" görünebilir — aynı `SKILL.md`, aynı scripts, aynı resources — ama altındaki runtime aynı değil. Claude API'nın hosted container'ı internete kapalıdır; Claude Code kullanıcının makinesinde çalışır ve dünyaya tamamen açıktır; Claude.ai arası bir rolde, admin ayarlarına göre kısıtlı network alır; OpenAI Responses API ise hosted ve local olmak üzere iki ayrı runtime sunar. Aynı kodun bir platformda sorunsuz çalışıp diğerinde sessizce kırılmasının arkasında bu fark yatar. Bu derste dört platformun runtime karakterini tek bir tabloda hizalıyor, her birinin somut kısıtlarını açıyor, yaygın "burada çalıştı orada çalışmadı" hatalarını ve geliştirici olarak hangi platforma neye göre yöneleceğini netleştiriyorum.

## Karşılaştırma tablosu (Şubat 2026)

| Özellik                 | Claude API         | Claude.ai            | Claude Code          | OpenAI Responses    |
| ----------------------- | ------------------ | -------------------- | -------------------- | ------------------- |
| Çalışma yeri            | Container          | Container (varying)  | Kullanıcı makinesi   | Container / local   |
| Network erişimi         | YOK (default)      | Varying (settings)   | Full (kullanıcı)     | Container: kısıtlı  |
| Package install         | Yok (runtime'da)   | Yok                  | Var (yerel pip)      | Yok (runtime'da)    |
| Pre-installed paket     | Anthropic listesi  | Anthropic listesi    | Kullanıcının ortamı  | OpenAI listesi      |
| Filesystem erişimi      | Sandbox            | Sandbox              | Full disk            | Container sandbox   |
| Yürütme süresi limit    | Var                | Var                  | Yok                  | Var                 |
| Container lifecycle     | Anthropic          | Anthropic            | Kullanıcı            | OpenAI              |
| Veri ikamet (location)  | Anthropic infra    | Anthropic infra      | Kullanıcı disk       | OpenAI infra        |

Tablonun okuma anahtarı şu: tek satırda fark görmek yerine, dikey olarak bir kolonu seç ve skill'in o kısıtların hepsiyle yaşayabilir olup olmadığını sor. Container sınırında olduğu için Claude API skill'leri "ne pre-installed varsa onunla idare et"; tam local olduğu için Claude Code skill'leri "kullanıcının makinesini kirletme" disiplinine yaslanır.

## Claude API runtime detayları

Claude API skill'leri code execution tool ile birlikte çalışır; her oturumun arkasında Anthropic'in yönettiği bir Python container vardır. İçinde standart kütüphane ve sık kullanılan veri/dosya paketleri pre-installed gelir: `pandas`, `numpy`, `pdfplumber`, `openpyxl` ve benzerleri. Tam liste code execution tool dokümantasyonunda yer alır ve Anthropic tarafından zaman zaman güncellenir. Önemli üç sert kısıt vardır: (1) **Default no network** — skill internete çıkamaz; harici API çağrısı, fetch, DNS lookup kapalıdır. (2) **Runtime'da `pip install` yoktur** — listede olmayan bir paketi getirmenin yolu, skill bundle'ına saf-Python modülü dosya olarak taşımaktan geçer. (3) **Container ephemeral'dır** — oturum bitince ya da expire olunca state silinir, yeni oturum baştan başlar. Egress kapalı olduğu için skill'in tasarımı "verinin tamamı zaten input'tan ya da bundle'dan gelmeli" prensibiyle yazılır.

## Claude.ai runtime detayları

Claude.ai aynı code execution altyapısını kullanır; pre-installed paket listesi pratikte Claude API ile aynıdır. Ayrılan tek önemli eksen network erişimidir. Anthropic'in "Create and Edit Files" dokümantasyonunda anlatıldığı gibi, kullanıcı veya organizasyon admin ayarlarına bağlı olarak skill **full, partial veya no network access** alır. Yani aynı skill bir tenant'ta dış API'ya çıkabilirken başka bir tenant'ta sessizce engellenir. Container yaşam döngüsü Anthropic tarafındadır ve kullanıcı oturumu boyunca belli bir süre canlı kalır; uzun süreli iş için tasarlanmamıştır. Code execution feature ayrıca abonelik kademesine bağlıdır — Pro, Max, Team ve Enterprise planlarında açıktır. Skill'i Claude.ai için yazıyorsan en güvenli varsayım "network yok" senaryosunu da kapsamaktır; varsa partial/full network bonus özellik olarak ele alınır.

## Claude Code runtime detayları

Claude Code bir API hizmeti değil, kullanıcının kendi makinesinde koşan bir CLI'dır. Skill'in runtime'ı doğrudan o makinenin ortamıdır: Python sürümü ne ise o, paketler ne kuruluysa onlar, network neye açıksa o. Dolayısıyla **full network access** ve **tam disk erişimi** doğal olarak vardır. Pre-installed paket listesi yoktur çünkü ortam kullanıcının ortamıdır; istediği zaman `pip install` çalıştırabilir. Bu özgürlük iki yan etki üretir. Birincisi: skill global pip install yapmamalı. Anthropic'in resmi rehberinde de açıkça "global package installation discouraged" denir — kullanıcı ortamını kirletmemek için virtualenv, project-scoped install veya bundle'a gömülü pure-Python modüller tercih edilir. İkincisi: güvenlik bilinci en kritik olduğu nokta burasıdır. Disk, network ve yerel araçların hepsi açık olduğu için kötü tasarlanmış ya da prompt-injected bir skill gerçek hasar verebilir. Container limitinin koruması yok; süreç limiti yok, sandbox yok.

## OpenAI Responses API runtime detayları

OpenAI Responses API skill'leri iki form factor'da çalıştırır. Birincisi **hosted shell**: `container_auto` modu, OpenAI'ın yönettiği container içinde koşar. Pre-installed paket listesi OpenAI'a aittir ve Anthropic'inkiyle birebir aynı değildir; aynı görev için seçilen kütüphane farklı olabilir. Container lifecycle de OpenAI tarafındadır: mount edilen skill'ler ve container dosyaları container aktif olduğu sürece kalır, expire olunca veya silinince düşer. İkinci form factor **local shell**: kullanıcının makinesinde çalışır ve davranış olarak Claude Code'a benzer — full network, full disk, pre-installed liste yok. Önemli ayrım: hosted shell `skill_reference` attachment'ı kabul ederken local shell etmez; local shell'de skill dosyaları runtime'a local path'lerden verilir. Veri ikametinin tamamen kendi altyapında olması istenirse local shell tek yoldur.

## Yaygın runtime farkı problemleri

1. **"Localhost'ta çalıştı, API'da çalışmadı"** — En sık görüleni. Claude Code'da network açık olduğu için skill bir HTTP fetch yapıyordur; Claude API'da default no-network policy nedeniyle aynı çağrı sessizce başarısız döner. Çözüm: harici veri ihtiyacını skill tasarımında izole et; ya input olarak bekle, ya da pre-fetched olarak bundle'a göm.
2. **"Pre-installed paket yok"** — Skill'in kullandığı kütüphane container listesinde değildir. Çözüm: standart kütüphaneye dön, alternatif bir pre-installed paket bul, ya da pure-Python modülü skill bundle'ı içinde taşı.
3. **"Container timeout"** — Büyük PDF işleme, geniş veri dönüştürme gibi uzun işler container yürütme süresi limitini aşar. Çözüm: işi küçük chunk'lara böl, async pattern uygula, ya da offline batch processing'e taşı.
4. **"Network call başarısız"** — Container modunda egress default kapalıdır. Çözüm: egress whitelist desteği varsa bilinen endpoint'i ekle; yoksa skill'i network'süz çalışacak şekilde yeniden tasarla.

## Platform seçim kılavuzu

Skill geliştirici perspektifinden hızlı bir karar matrisi: **Claude Code** — maksimum kontrol, full local ortam, hızlı iterasyon; iç geliştirici araçları ve takım scripts için doğru yer. **Claude API** — production deploy, deterministik container, ölçeklenebilir backend entegrasyon; ürünün arka planında çalışacak otomasyonlar için. **Claude.ai** — end-user'a doğrudan açılacak skill'ler; UI üzerinden tüketilen ofis dosyası iş akışları için. **OpenAI Responses API** — OpenAI ekosistemindeki ürünler ve mevcut Responses entegrasyonları; veri ikameti üzerinde tam kontrol gerekiyorsa local shell modu.

## Sırada: veri saklama ve ZDR

Runtime'ın nerede koştuğunu, neyi tutup neyi tutmadığını bir kez netleştirdiğinde sıradaki soru kaçınılmaz olarak gelir: bu container'larda işlenen veri ne kadar saklanıyor, kim erişiyor, Zero Data Retention gibi politikalar skill'leri nasıl etkiliyor? Bir sonraki ders tam olarak bunu açıyor — veri saklama, ZDR ve uyumluluk gereksinimlerinin skill mimarisine yansıması.
