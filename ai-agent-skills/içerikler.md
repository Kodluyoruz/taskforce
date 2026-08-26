# Giriş ve Temeller

### [AI Agent Nedir?](ai-agent-nedir/)

#### Sorular

1. Bir e-ticaret şirketinde, kullanıcının "Geçen ayki en çok satan ürünleri bul ve onlar için bir indirim e-postası hazırla" isteğini karşılayacak bir sistem kuruyorsun. Sistem; veritabanını sorgulayacak, sonuçları analiz edecek, e-posta taslağı üretecek ve gerekirse sorgusunu yeniden düzenleyecek. Bu sistem aşağıdakilerden hangisine en uygun örnektir?
   - Sadece bir LLM (büyük dil modeli) çağrısı
   - Araçları döngü içinde kullanan bir AI agent (Doğru)
   - Statik bir RAG (Retrieval-Augmented Generation) sohbet botu
   - Önceden yazılmış kurallarla çalışan bir reflex sistemi
2. Aşağıdaki sistemlerden hangisi otonomi spektrumunda **en proaktif** uçta yer alır?
   - Kullanıcı her mesaj yazdığında cevap üreten klasik bir chatbot
   - Kullanıcı bir komut verdiğinde tek bir API çağrısı yapan asistan
   - Kullanıcının takvimini sürekli izleyip kendiliğinden toplantı önerileri hazırlayan asistan (Doğru)
   - Soru sorulmadan hiçbir aksiyon almayan, yalnızca metin tamamlayan bir model
3. Modern LLM agent'larının çalışma döngüsünde "fonksiyon çağrısı (function calling)" adımının doğru tanımı aşağıdakilerden hangisidir?
   - Modelin hangi aracı, hangi argümanlarla çağırmak istediğini yapılandırılmış bir formatta ifade etmesi; fonksiyonu çağıran ise agent çerçevesidir (Doğru)
   - Modelin fonksiyonu doğrudan kendi içinde çalıştırması ve sonucu üretmesi
   - Kullanıcının modele manuel olarak fonksiyon kodu yazdırması
   - Modelin internet üzerinden başka bir LLM'i çağırması

### [Agent Skills Nedir?](agent-skills-nedir/)

#### Sorular

1. Bir hukuk teknolojisi şirketinde çalışıyorsun ve ekip her sözleşme incelemesinde Claude'a aynı 10 maddelik checklist'i, kendi şirket terminolojinizi ve raporlama şablonunuzu prompt'a yapıştırıyor. Bu tekrarı çözmek için en doğru yaklaşım hangisidir?
   - Her geliştiriciye uzun bir prompt template'i e-postayla göndermek ve elle yapıştırmasını beklemek
   - `contract-review` adında bir agent skill yazıp checklist, terminoloji ve şablonu `SKILL.md` ile destekleyici dosyalara koymak; agent ilgili istek geldiğinde otomatik yüklesin (Doğru)
   - Tüm checklist'i Claude'un eğitim verisine eklemesi için Anthropic'e göndermek
   - Her sözleşme için ayrı bir LLM ince ayarı (fine-tune) yapmak
2. Bir geliştirici şu `SKILL.md` dosyasını yazıyor: frontmatter'da sadece `name: pdf-tools` var, `description` alanı boş bırakılmış. Skill klasörünü doğru konuma yüklüyor ama agent kullanıcı PDF'lerle ilgili görev verdiğinde skill'i bir türlü tetiklemiyor. En olası sebep nedir?
   - Description alanı boş olduğu için agent, başlangıçta yüklediği metadata'da skill'in **ne zaman** kullanılacağını bilmiyor; bu yüzden uygun isteklerde bile aktive etmiyor (Doğru)
   - Skill dosyaları YAML değil JSON formatında olmalıydı
   - Agent skill'leri her zaman manuel olarak çağırmak gerekir; otomatik tetikleme yoktur
   - PDF dosyaları skill formatı tarafından desteklenmez
3. Aşağıdaki ifadelerden hangisi bir agent skill'in **prompt'tan** temel farkını en doğru biçimde özetler?
   - Prompt sadece İngilizce yazılabilirken skill her dili destekler
   - Skill her zaman daha kısadır ve token tüketmez
   - Prompt sohbete özel ve geçicidir; skill ise filesystem'de duran, versiyonlanabilir, paylaşılabilir ve agent tarafından gerektiğinde otomatik yüklenen kalıcı bir pakettir (Doğru)
   - Skill yalnızca Claude'da çalışır; prompt ise tüm modellerde geçerlidir

### [Skills'in Tarihçesi ve Evrimi](skills-tarihce-ve-evrim/)

#### Sorular

1. Bir geliştirici, Kasım 2023'te DevDay'de tanıtılan Custom GPTs ile 2025'te duyurulan Agent Skills arasındaki **temel yapısal farkı** araştırıyor. Aşağıdakilerden hangisi bu farkı en doğru biçimde özetler?
   - GPTs yalnızca İngilizce, Skills ise tüm dillerde çalışır
   - GPTs ChatGPT arayüzüne kilitli, sunucu tarafında kapalı bir pakettir; Skills ise filesystem'de bir klasör olarak duran, git ile versiyonlanabilen ve birden fazla platformda (Claude Code, Claude API, Claude.ai, OpenAI Responses API) çalışabilen açık bir formattır (Doğru)
   - GPTs tool çağrısı yapamaz, Skills ise yapabilir
   - GPTs bedava, Skills ise ücretlidir
2. Bir ekip, agent'larının bir tarafta dış sistemlere (Slack, GitHub, Postgres) bağlanmasını, diğer tarafta da kendi şirketlerine özgü iş akışlarını ve raporlama şablonlarını uygulamasını istiyor. Bu iki ihtiyacı **doğru biçimde eşleştirirsek** aşağıdakilerden hangisi söylenir?
   - Her ikisi de MCP ile çözülmelidir; Skills sadece dosya okuma içindir
   - Her ikisi de Skills ile çözülmelidir; MCP eski bir teknolojidir
   - Dış sistem bağlantısı için MCP (Kasım 2024'te duyuruldu), kuruma özgü iş akışı ve talimatlar için Skills (Ekim 2025'te duyuruldu) uygundur; ikisi birbirinin yerini almaz, birbirini tamamlar (Doğru)
   - MCP ve Skills aynı şeydir; ikisi de yalnızca isim farkıyla function calling'in yeni adlarıdır
3. 13 Haziran 2023'te OpenAI'ın GPT-4 ve GPT-3.5-turbo için yayınladığı `functions` parametresi ile **standardize edilen davranış** aşağıdakilerden hangisidir?
   - Modelin internete erişip web sayfası okuması
   - Modelin bir fonksiyonu doğrudan kendi runtime'ında çalıştırması ve sonucu üretmesi
   - Modelin önceden tanımlanmış fonksiyon listesinden hangisini, hangi argümanlarla çağırmak istediğini yapılandırılmış JSON olarak ifade etmesi; fonksiyonu asıl çalıştıran ise agent çerçevesidir (Doğru)
   - Modelin kullanıcı yerine prompt yazıp kendi kendine cevap vermesi

### [Skills, Prompts, Tools ve MCP Farkı](skills-prompts-tools-ve-mcp-farki/)

#### Sorular

1. Bir ekipte tekrar eden bir prosedür var: müşteri ticket'ları haftalık özetleniyor, Salesforce'tan veri çekiliyor, belirli bir markdown şablonuna oturtuluyor. Bu workflow farklı projelerde de kullanılacak. Hangi katman en doğru?
   - Prompt — her sohbette aynı talimatı yapıştırmak
   - Tool / function calling — tek bir `summarize_tickets` fonksiyonu yazmak
   - Skill — SKILL.md ile prosedürü paketleyip filesystem'e koymak (Doğru)
   - RAG — vector DB'ye prosedürü embedleyip aramak
2. Bir geliştirici aynı GitHub entegrasyonunu Claude Code, Cursor ve ChatGPT'de kullanmak istiyor; üç ortama ayrı entegrasyon kodu yazmamak için en uygun yaklaşım hangisi?
   - Her ortama özel function calling tanımı yazmak
   - Bir MCP server yazıp tüm uyumlu client'lara aynı server'ı bağlamak (Doğru)
   - Her ortam için ayrı bir skill paketi hazırlamak
   - GitHub talimatlarını system prompt'a yapıştırmak
3. 50.000 sayfalık bir ürün dokümantasyon arşivi var; kullanıcı sorduğunda agent bu arşivden alakalı bölümleri çekip cevap üretsin isteniyor. Asıl uygun katman hangisi?
   - System prompt'a dokümanın tamamını yapıştırmak
   - Bir skill yazıp tüm dokümanları `SKILL.md`'ye gömmek
   - RAG: embedding + vector DB ile similarity search yapıp en alakalı parçaları prompt'a iliştirmek (Doğru)
   - Her döküman için ayrı bir MCP server kurmak

### [Agent Skills Açık Standardı](agentskills-acik-standardi/)

#### Sorular

1. Bir geliştirici "claude-helper" adıyla bir skill yaratıp Claude'a yüklemek istiyor ama validation hatası alıyor. Sebep nedir?
   - `name` field'ı 64 karakteri aşıyor
   - `name` field'ı reserved kelime "claude" içeriyor (Doğru)
   - `name` field'ında tire kullanılamaz
   - `name` field'ı parent klasör adıyla eşleşmiyor
2. Bir skill bundle'ında hem `SKILL.md` hem de `skill.md` dosyası var. Spec'e göre ne olur?
   - Runtime ikisini de okur ve birleştirir
   - Sadece büyük harfli olan kullanılır
   - Bundle invalid sayılır çünkü manifest matching case-insensitive ve bundle başına tek dosya zorunlu (Doğru)
   - Linux'ta iki dosya, macOS'te tek dosya görünür
3. agentskills.io spec'inin "açık standart" olmasının pratik bir sonucu nedir?
   - Bir kez yazılan `SKILL.md`'yi farklı runtime'larda yeniden paketlemeden kullanabilirsin (Doğru)
   - Skill'ler artık `description` field'ına ihtiyaç duymaz
   - Her runtime kendi özel YAML formatını dayatır
   - Sadece Anthropic'in onayladığı isimler kullanılabilir

### [Skills Ekosistemi Haritası](skills-ekosistemi-haritasi/)

#### Sorular

1. Aşağıdaki ifadelerden hangisi doğrudur?
   - claude.ai'a yüklediğin custom skill otomatik olarak Claude API'da da görünür
   - Claude API'da `/v1/skills` üzerinden yüklediğin skill, Anthropic'in tüm ürünlerinde anında erişilebilir
   - Custom skill'ler ürünler arası otomatik senkronize edilmez; her surface'e ayrı yüklenir (Doğru)
   - Claude Code'daki filesystem skill'leri Responses API'de de tanınır
2. OpenAI Responses API'sinin `shell` tool'unda hosted ve local shell modlarının skill ekleme şekli arasındaki temel fark nedir?
   - İkisi de aynı şekilde `skill_reference` kabul eder, fark yoktur
   - Hosted shell `skill_reference` kabul eder; local shell ise `name`, `description` ve `path` ile dosyaları lokal yollardan tanıtır (Doğru)
   - Local shell sadece curated skill'leri çalıştırabilir
   - Hosted shell skill'leri sadece inline base64 zip olarak alır
3. Claude API üzerinden Skills kullanmak için zorunlu beta header'lardan hangisi yer almaz?
   - `code-execution-2025-08-25`
   - `skills-2025-10-02`
   - `files-api-2025-04-14`
   - `agent-skills-runtime-2025-12-01` (Doğru)

### [Neden Skills Kullanmalıyız ve Kullanım Senaryoları](neden-skills-kullanmaliyiz-kullanim-senaryolari/)

#### Sorular

1. Skills'in "düşük context maliyeti" avantajı nereden gelir?
   - Her skill'in tam içeriği başta yüklenir ama sıkıştırılarak küçültülür
   - Sürekli context'te yalnızca her skill'in metadata'sı (~100 token) durur; gövde sadece tetiklendiğinde okunur (Doğru)
   - Model skill'leri arka planda RAG ile çağırır, hiçbir token tüketmez
   - Skills sadece system prompt'a sıkıştırılır, dolayısıyla user message'a yer açar
2. "Composability" Skills bağlamında ne anlama gelir?
   - Tek bir devasa skill içine tüm iş akışlarının yazılabilmesi
   - Skill'lerin başka bir programlama diline derlenebilmesi
   - Birden fazla skill aynı anda yüklü olur; agent kullanıcının isteğine göre uyumlu olanları sırayla tetikler (Doğru)
   - Bir skill'in başka bir skill'i prompt içinden manuel olarak çağırması
3. Aşağıdakilerden hangisi Skills'in çözmek için tasarlandığı tipik bir problem değildir?
   - Şirket marka tonunun her sohbete prompt olarak tekrar yapıştırılması
   - Code review checklist'inin ekipte farklı kişilerce farklı uygulanması
   - Bir GPU üzerinde model inference hızının düşük olması (Doğru)
   - Veritabanı şemasının modele her seferinde yeniden anlatılması

# Anatomi ve Yapı

### [SKILL.md ve YAML Frontmatter](skill-md-ve-yaml-frontmatter/)

#### Sorular

1. Bir geliştirici `SKILL.md` yazıyor; frontmatter `name: code-review` ve `description: Run code review checklist` satırlarıyla başlıyor, ardından düzgün markdown gövdesi geliyor. Skill yüklenmiyor ve runtime "invalid frontmatter" hatası veriyor. En olası sebep nedir?
   - Frontmatter'ın kapanış `---` satırı eksik olduğu için parser dosyanın geri kalanını YAML sanıp patlıyor (Doğru)
   - `name` alanında tire kullanılmış, oysa tire yasak
   - `description` çift tırnak içine alınmadığı için geçersiz
   - Body bir H1 ile başlamadığı için runtime skill'i tanımıyor
2. Bir skill bundle'ında geliştirici şu üç dosyayı yan yana koymuş: `SKILL.md`, `skill.md` ve `Skill.md`. Hepsinin frontmatter'ı tek başına geçerli. Spec'e göre ne olur?
   - Runtime üçünü de okuyup tek bir mantıksal manifest olarak birleştirir
   - Sadece büyük harfli `SKILL.md` kullanılır, diğerleri sessizce yok sayılır
   - Bundle invalid sayılır: dosya adı eşleşmesi case-insensitive olduğundan üçü de aynı manifest'e karşılık gelir ve bundle başına tek dosya zorunludur (Doğru)
   - Runtime alfabetik olarak ilk geleni seçer
3. Bir geliştirici description'ı uzun ve okunaklı tutmak için YAML frontmatter'da `description: >-` operatörünü kullanıyor. Bu operatörün parser üzerindeki etkisi nedir?
   - Parser tüm satırları olduğu gibi (kırılmaları koruyarak) tek bir string olarak okur
   - Parser her satırı ayrı bir liste elemanı olarak yorumlar
   - Parser satır kırılmalarını boşluğa çevirir ve description'ı tek satırlık bir string olarak birleştirir (folded scalar) (Doğru)
   - Parser bu bloğu yorum kabul eder ve description'ı boş bırakır
4. Bir geliştirici `description: Yedek alma görevi: günlük, haftalık, aylık plan oluştur.` yazıyor. Bundle'ı yüklediğinde description'ın "Yedek alma görevi" olarak parse edildiğini ve devamının başka bir key sanılarak hata fırlattığını görüyor. Sebep ve çözüm nedir?
   - `description` zorunlu değildir; alan kaldırılmalı
   - Frontmatter'da Türkçe karakter olamaz; ASCII'ye çevrilmeli
   - Değer `:` içerdiği için YAML parser ilk `:`'ten sonrasını yeni bir mapping sanıyor; değer çift tırnak içine alınmalı (Doğru)
   - YAML virgül kabul etmez; virgüller noktalı virgülle değiştirilmeli

### [Metadata Alanları Detaylı İnceleme](metadata-alanlari-detayli-inceleme/)

#### Sorular

1. Bir geliştirici skill'ini yüklemeye çalışıyor ve `name: my_pdf_tool` yazmış. Upload reddediliyor. Neden?
   - Reserved kelime içeriyor
   - Underscore yasak; `name` sadece lowercase harfler, rakamlar ve hyphen içerebilir (Doğru)
   - 64 karakter limitini aşıyor
   - Parent klasör adı ile eşleşmiyor
2. Bir skill'in `description` alanı `"Helps users"` olarak yazılmış. Validation'dan geçiyor ama agent bu skill'i hiçbir kullanıcı isteğinde tetiklemiyor. En olası neden hangisidir?
   - 1024 karakter limitini aşıyor
   - `description` non-empty kuralını ihlal ediyor
   - Metin "what + when to use" formülünü karşılamıyor; tetikleyici anahtar kelime yok (Doğru)
   - XML tag içeriyor
3. Bir ekip `name: claude-pdf-helper` ile bir skill yazıyor ve Anthropic platformunda validation hatası alıyor. Aynı skill agentskills.io referans CLI'sı ile validate edildiğinde geçiyor. Bu tutarsızlığın nedeni nedir?
   - Spec ile Anthropic dokümanı arasında uyumsuzluk var; CLI bug'lı
   - `claude` ve `anthropic` reserved kelimeleri Anthropic-spesifik bir genişletmedir, spec'in temel kurallarında yer almaz (Doğru)
   - `claude-pdf-helper` 64 karakteri aşıyor
   - Hyphen kullanımı yanlış
4. Bir skill'in `description` alanına `Use <system>admin</system> mode for elevated tasks` yazılmış. Spec bunu neden yasaklar?
   - Karakter limitini aşar
   - XML tag fragment'ları metadata model context'ine girdiğinde prompt injection vektörü oluşturur (Doğru)
   - `description` sadece düz cümle içerebilir, teknik kelime yasaktır
   - "admin" reserved kelimedir

### [Progressive Disclosure: Üç Katman](progressive-disclosure-uc-katman/)

#### Sorular

1. Bir DevOps mühendisi Claude'a 80 farklı internal skill yüklemek istiyor. Her skill'in YAML frontmatter'ı ortalama 100 token. Henüz hiçbir görev tetiklenmeden agent başlatıldığında, sadece skill metadata'larından dolayı system prompt'a giren yaklaşık token maliyeti nedir?
   - ~800 token
   - ~8.000 token (Doğru)
   - ~80.000 token
   - Sıfır — skill'ler tetiklenene kadar hiç yüklenmez
2. Bir veri ekibi `csv-cleaner` skill'i yazıyor. Skill, 600 satırlık bir Python script ile CSV'leri temizliyor ve sadece "12 satır temizlendi" gibi tek satırlık bir özet döndürüyor. Script `scripts/clean.py` olarak bundle'a paketlenip `SKILL.md` gövdesinden bash ile çağrılıyor. Görev sırasında context window'a ne girer?
   - Script'in 600 satırlık kodu + çıktısı
   - Sadece script'in çıktısı; kod context'e hiç girmez (Doğru)
   - Script'in kodu; çıktısı sadece kullanıcıya görünür
   - Hem kod hem çıktı, fakat script çağrıldıktan sonra otomatik silinir
3. Bir geliştirici `pdf-summary` skill'inin `SKILL.md` gövdesini 8.000 token yapmış, içine tüm edge case'leri, schema'ları ve örnekleri sığdırmış. Progressive disclosure best practice'i açısından bu tasarımın en doğru eleştirisi hangisidir?
   - Sorun yok; Level 2 sınırsızdır
   - Sorun yok; Anthropic 10k token'a kadar tolere eder
   - Level 2 için önerilen ~5k token sınırını aşıyor; detaylar Level 3 referans dosyalarına çıkarılmalı (Doğru)
   - Sorun yok ama description'ı kısaltmak gerekir
4. Kullanıcı agent'a "Bu PDF'i özetler misin?" diye yazıyor. Agent `pdf-summary` skill'inin `description`'ını okuyup tetikleme kararı veriyor. Aynı görev sırasında skill bundle'ındaki `REFERENCE.md` dosyasının içeriği context window'a ne zaman girer?
   - Skill tetiklendiği anda otomatik olarak — Level 2 ile birlikte
   - Agent başlangıçta — `description` ile birlikte
   - Sadece `SKILL.md` gövdesi `REFERENCE.md`'yi referans ettiğinde ve agent onu bash ile okuduğunda (Doğru)
   - Hiçbir zaman; Level 3 dosyaları context window'a girmez, sadece script çıktısı girer

### [Context Window ve Skills'te Token Yönetimi](context-window-ve-skills-token-yonetimi/)

#### Sorular

1. 100 skill yüklü bir sistemde, hiçbir skill tetiklenmemiş bile olsa her isteğin başında yaklaşık ne kadar sabit token overhead'i oluşur?
   - 1.000 token
   - 10.000 token (Doğru)
   - 100.000 token
   - 0 token, çünkü tetiklenmemiş skill'ler context'e girmez
2. Anthropic'in best practice rehberine göre bir SKILL.md body'sinin token bütçesi yaklaşık ne olmalıdır?
   - 100 token altı
   - 5.000 token altı (Doğru)
   - 50.000 token altı
   - Sınırsız, çünkü body sadece tetiklenince yüklenir
3. 200 satırlık bir Python script'ini SKILL.md gövdesine inline yapıştırmak yerine `scripts/validate.py` olarak ayırmanın token açısından temel avantajı nedir?
   - Script daha hızlı çalışır
   - Inline kod ile aynı maliyet, sadece okuma daha kolay olur
   - Executable dosyada kodun kendisi context'e girmez; yalnızca script'in stdout çıktısı token harcar (Doğru)
   - Anthropic executable script'leri ücretsiz çalıştırır
4. Bir Claude API çağrısının `usage` field'ında `cache_read_input_tokens` değerinin sürekli 0 gelmesi büyük olasılıkla neyi gösterir?
   - Modelin context window'u dolmuş
   - Prompt caching gerektiği gibi devreye girmiyor; cache'lenebilecek sabit prefix kullanılmamış (Doğru)
   - Skill tetiklenmemiş
   - Output token üretilmemiş

### [Skill Klasör Yapısı ve Dosyalar](skill-klasor-yapisi-ve-dosyalar/)

#### Sorular

1. Minimal geçerli bir skill bundle'ı için zorunlu olan tek dosya hangisidir?
   - `REFERENCE.md`
   - `SKILL.md` (Doğru)
   - `scripts/main.py`
   - `manifest.yaml`
2. Bir skill bundle'ında `scripts/` klasörünün asıl amacı nedir?
   - Modelin executable kodları bash ile çalıştırması; kodun kendisi context'e girmez, sadece çıktısı sayılır (Doğru)
   - Skill metadata'sını saklamak
   - Bundle'ın ismini ve sürümünü taşımak
   - `SKILL.md`'nin yedek kopyasını tutmak
3. `SKILL.md` içinden başka bir dosyaya referans verirken aşağıdakilerden hangisi doğru yaklaşımdır?
   - Mutlak path kullanmak
   - Sadece dosya adını yazıp açıklama vermemek
   - Bundle root'una göre relative path kullanmak ve "şu durumda şu dosyaya bak" şeklinde direktif vermek (Doğru)
   - Dosyanın URL'ini GitHub'dan kopyalamak
4. Aşağıdakilerden hangisi bundle yapısı için yaygın bir hatadır?
   - `scripts/`, `templates/`, `resources/` gibi yerleşik isimleri kullanmak
   - 200 satırlık bir Python kodunu `SKILL.md` gövdesine inline yapıştırmak (Doğru)
   - Büyük harfli sub-doc'ları (`REFERENCE.md`, `FORMS.md`) `SKILL.md`'den isimle referans vermek
   - Bundle'ı 2-3 seviyeden derin iç içe klasörlere bölmemek

### [İyi Description Yazma Sanatı](iyi-description-yazma-sanati/)

#### Sorular

1. Ekibin "weekly-status-report" adlı bir skill yazdı ve description olarak yalnızca "Helps with reports." yazdı. Kullanıcı "Cuma raporumu hazırla" dediğinde skill tetiklenmedi. Bu durumun en olası nedeni nedir?
   - Skill'in name alanı çok uzun
   - Description hem "what" hem de "when to use" bilgisini ve tetikleyici keyword'leri taşımıyor; agent ne yaptığını ya da ne zaman çağrılacağını çıkaramıyor (Doğru)
   - Description'ın 1024 karakter sınırını aştığı için sistem skill'i devre dışı bıraktı
   - SKILL.md gövdesinde "weekly summary" kelimesi geçmediği için agent skill'i göremedi
2. Aynı projede `pdf-summary`, `pdf-forms` ve `pdf-merge` adında üç skill var. Hepsinin description'ı "Use when the user works with PDF files" şeklinde başlıyor. Kullanıcı "Şu PDF'in özetini çıkar" dediğinde agent bazen yanlış skill'i çağırıyor. Bu çakışmayı çözmenin en doğru yolu hangisidir?
   - Üç skill'in adlarını aynı yapmak ve farkı yalnızca SKILL.md gövdesinde anlatmak
   - Description'ı tamamen silip yalnızca name alanına güvenmek
   - Her skill'in description'ını niyete özel benzersiz keyword'lerle ayrıştırmak ("summarize", "fill form", "merge multiple PDFs" gibi) (Doğru)
   - Hepsini tek bir skill altında birleştirip "her PDF işini yapar" demek
3. Bir geliştirici description'ı şöyle yazıyor: "Extract data, analyze it, send emails, schedule meetings, generate reports, manage calendars, write documents, fix bugs, and more." Bu description'da hangi sorun vardır?
   - Çok dar yazıldığı için skill hiç tetiklenmez
   - Aşırı geniş yazıldığı için neredeyse her sohbette overtriggering yapar ve gerçek görevle ilişki kuramaz (Doğru)
   - "what" kısmı eksik, sadece "when" yazılmış
   - Tetikleyici keyword içermediği için undertriggering yapar
4. Anthropic mühendislik blogu Claude'un skill'lere karşı doğal eğiliminin "az çağırma" yönünde olduğunu söylüyor. Bu eğilime karşı description'da uygulanabilecek meşru bir teknik hangisidir?
   - Description'ı 1024 karakter sınırına kadar tekrar eden ifadelerle doldurmak
   - Description'da hafifçe ısrarcı bir cümle eklemek (örn. "Make sure to use this skill whenever the user mentions X, even if they don't explicitly ask") (Doğru)
   - Description'ı tamamen boş bırakıp agent'ın SKILL.md gövdesinden karar vermesini beklemek
   - name alanına "always-use" ön eki eklemek

### [Skill Versiyonlama ve Yaşam Döngüsü](skill-versiyonlama-ve-yasam-dongusu/)

#### Sorular

1. Bir skill'in yeni version'ı upload edildiğinde aşağıdakilerden hangisi otomatik olarak değişir?
   - `default_version`
   - `latest_version` (Doğru)
   - Skill'in `name` alanı
   - Tüm `skill_reference` çağrılarının hedefi
2. Aşağıdakilerden hangisi hosted skill silme kurallarına uyar?
   - `default_version` doğrudan silinebilir, sistem otomatik yeni bir default seçer
   - Skill silindiğinde tek tek version'lar arşivde kalmaya devam eder
   - `default_version` doğrudan silinemez; önce başka bir version'ı default yapmak gerekir (Doğru)
   - Son kalan version silindiğinde skill bir sonraki upload'a kadar "boş" durumda bekler
3. Production agent'larında `skill_reference.version: "latest"` kullanmanın temel riski nedir?
   - "latest" değeri API tarafından desteklenmez, çağrı reddedilir
   - Skill'in description alanını okunamaz hale getirir
   - Test edilmemiş yeni bir upload'un anında production akışına girmesine neden olur (Doğru)
   - `default_version` kavramını kalıcı olarak devre dışı bırakır
4. Local (Claude Code, filesystem tabanlı) skill'lerde versiyonlama nasıl yönetilir?
   - Skills API'nin `version_number` alanı filesystem skill'lere de uygulanır
   - Versiyon tarihçesi git üzerinden — branch, tag ve commit'lerle — yönetilir (Doğru)
   - Local skill'lerin tek bir aktif kopyası olur, eski sürümler korunamaz
   - Filesystem skill'leri için runtime, `latest_version` alanını otomatik olarak `.claude/skills/` içine yazar

# Skill Yazma Pratiği

### [İlk Skill'inizi Yazma — Quickstart](ilk-skillinizi-yazma-quickstart/)

#### Sorular

1. Bir geliştirici `csv-summary` skill'ini yazdı; klasörü `~/.claude/skills/csv-summary/` altına koydu, `SKILL.md`'yi ve `scripts/summarize.py`'ı ekledi. Ama frontmatter'daki `description` alanına sadece "Reads CSV" yazdı. Kullanıcı "Bu CSV'yi özetler misin?" dediğinde Claude Code skill'i tetiklemiyor. En olası sebep nedir?
   - `description` çok kısa ve ne zaman kullanılacağını belirtmiyor; agent startup'taki metadata'da skill'in hangi isteklerde devreye gireceğini anlayamıyor (Doğru)
   - Personal skill'ler tetiklenmez; yalnızca project skill'leri (`.claude/skills/`) çalışır
   - `description` mutlaka Türkçe yazılmalıdır
   - SKILL.md frontmatter'ı YAML değil JSON olmalıydı
2. `csv-summary` skill'ini yazarken takım arkadaşın "CSV'deki ortalama, min, max hesaplamayı doğrudan SKILL.md içine talimat olarak yazsak, model kendisi yapsa olmaz mı?" diyor. En doğru cevap hangisidir?
   - Olmaz; matematik işlemleri deterministik olduğu için `scripts/summarize.py` gibi bir script'e taşımak hem token harcamaz (script kodu context'e girmez, sadece çıktı girer) hem de model aritmetik hatası yapmaz (Doğru)
   - Olur; modeller artık tüm aritmetiği hatasız yapıyor, script gereksiz katmandır
   - Olmaz çünkü Claude Code Python script'leri çalıştıramaz
   - Olur ama sadece OpenAI Responses API'da; Claude API script kullanamaz
3. OpenAI Responses API'ya `csv-summary` bundle'ını upload ettin ve `skill_id` aldın. Hosted shell ile bu skill'i çağıracak doğru `tools` konfigürasyonu hangisidir?
   - `tools=[{"type": "shell", "environment": {"type": "container_auto", "skills": [{"type": "skill_reference", "skill_id": "csv-summary"}]}}]` (Doğru)
   - `tools=[{"type": "skill", "skill_id": "csv-summary"}]`
   - `tools=[{"type": "shell", "environment": {"type": "local", "skills": [{"type": "skill_reference", "skill_id": "csv-summary"}]}}]`
   - `tools=[{"type": "code_interpreter", "skill_id": "csv-summary"}]`
4. `csv-summary` skill'inin SKILL.md gövdesi 250 satıra yaklaşıyor — örnek girdiler, edge case'ler, parametre tabloları eklendi. Bu büyümenin pratik sonucu nedir ve doğru çözüm hangisidir?
   - Skill her tetiklendiğinde 250 satırlık gövde context'e giriyor ve token harcıyor; nadir kullanılan detayları ayrı bir `REFERENCE.md` dosyasına taşıyıp SKILL.md'den "detay için REFERENCE.md'ye bak" diye işaret etmek doğrudur (Doğru)
   - Sorun yok; gövde 1MB'a kadar serbestçe büyüyebilir, performans etkilenmez
   - SKILL.md ne kadar uzunsa o kadar iyi tetiklenir; kısaltmak skill'i bozar
   - SKILL.md gövdesi hiç context'e girmez; sadece description harcar token
5. `csv-summary` skill'ini hem Claude Code'da hem de OpenAI Responses API'da çalıştırmak istiyorsun. Aynı `SKILL.md` ve `scripts/summarize.py`'ın iki platformda da değişiklik olmadan çalışabilmesinin sebebi nedir?
   - Skill'ler agentskills.io açık standardına uyduğu için aynı `SKILL.md` + frontmatter + script bundle'ı, farklı runtime'larda yeniden paketlemeden çalışır; sadece bağlama (filesystem path veya `skill_id`) farklıdır (Doğru)
   - Anthropic ve OpenAI gizli bir API üzerinden skill'leri otomatik senkronlar
   - Python script'leri her platformda otomatik dönüştürülür; markdown formatı önemli değildir
   - Skill'ler aslında platforma özeldir; aynı bundle'ı iki yerde çalıştırmak imkânsızdır

### [SKILL.md Derinlemesine Yazma Rehberi](skill-md-derinlemesine-yazma-rehberi/)

#### Sorular

1. Anthropic'in dokümante ettiği SKILL.md gövdesi için önerilen token üst sınırı nedir?
   - 1.000 token
   - 5.000 token (Doğru)
   - 20.000 token
   - Üst sınır yoktur
2. SKILL.md'nin ilk H2 bölümü için Anthropic örneklerinde tekrarlanan başlık aşağıdakilerden hangisidir?
   - `## Introduction`
   - `## Overview`
   - `## Quick start` (Doğru)
   - `## Background`
3. Kod blokları için aşağıdakilerden hangisi doğru pratiktir?
   - Dil etiketini atlayıp sadece üç backtick koymak
   - Mümkün olduğunca uzun, 50+ satırlık örnekler vermek
   - Üç backtick'ten sonra dil etiketi yazmak ve örnekleri kısa tutmak (Doğru)
   - HTML `<pre>` etiketi kullanmak
4. Progressive markdown disclosure'a göre nadir kullanılan ileri senaryolar nereye yazılmalıdır?
   - SKILL.md'nin sonuna eklenmeli
   - YAML frontmatter'a sıkıştırılmalı
   - SKILL.md'den referans verilen ayrı bir markdown dosyasına (örn. `FORMS.md`) taşınmalı (Doğru)
   - Yorum satırı olarak gizlenmeli
5. Aşağıdakilerden hangisi yaygın bir SKILL.md anti-pattern'idir?
   - Her bölümde en fazla iki-üç bold kullanmak
   - Üç katmanlı başlık hiyerarşisi kullanmak
   - Ek dosyalara inline referans atmak
   - Var olmayan bir dosyaya "bkz." referansı vermek (Doğru)

### [Instructions Yazma Best Practices](instructions-yazma-best-practices/)

#### Sorular

1. SKILL.md'nin instructions gövdesini yazarken en doğru yaklaşım hangisidir?
   - "Make sure to handle errors carefully" gibi genel cümleler kullanmak
   - Modelin yaratıcı çözüm bulmasına alan bırakmak için bilinçli olarak muğlak yazmak
   - Prescriptive, atomik, numaralı adımlar yazmak (Doğru)
   - Tüm mantığı tek bir paragraf halinde anlatmak
2. Aşağıdaki cümlelerden hangisi "Claude'a kod yazdırma" anti-pattern'ına örnektir?
   - "Run `python scripts/summarize.py <path>` with the user's CSV path"
   - "Write a Python function that reads the CSV and summarizes it" (Doğru)
   - "Open the file with `pd.read_csv(path)`"
   - "If the file does not exist, tell the user and stop"
3. Skill instructions'ta bash mı yoksa paketlenmiş Python script mi kullanılmalı sorusunda doğru kriter hangisidir?
   - Her durumda bash, çünkü daha hızlıdır
   - Her durumda Python, çünkü daha güçlüdür
   - Kısa lineer komut/dosya işlemi için bash; veri yapısı, döngü, hata yönetimi gereken işler için paketlenmiş Python script'i (Doğru)
   - Modelin runtime'da o anda karar vermesine bırak
4. Prescriptive ve descriptive yazım tarzı arasındaki temel fark nedir?
   - Prescriptive İngilizce yazılır, descriptive Türkçe yazılır
   - Prescriptive adımları söyler ve karar yükünü kaldırır; descriptive bilgi anlatır ve kararı modele bırakır (Doğru)
   - Prescriptive sadece kod örnekleri içerir, descriptive sadece metin içerir
   - Prescriptive uzundur, descriptive kısadır
5. Skill instructions'ta hata yönetimi için doğru pattern hangisidir?
   - Hataları modelin doğal sezgisine bırakmak
   - Sadece happy path'i yazıp hata durumlarını ihmal etmek
   - Try/except blokları yerine model üretsin diye boş bırakmak
   - Her kritik adımdan sonra "eğer X olursa Y yap" şeklinde eskalasyon yolu yazmak ve sessiz başarısızlığa izin vermemek (Doğru)

### [Resources ve Referans Dosyaları](resources-ve-referans-dosyalari/)

#### Sorular

1. Level 3 dosyalarının SKILL.md gövdesinden temel farkı nedir?
   - Level 3 dosyaları her zaman context window'a yüklenir
   - Level 3 dosyaları sadece referans edildiklerinde context'e girer (Doğru)
   - Level 3 dosyaları sadece JSON formatında olabilir
   - Level 3 dosyaları YAML frontmatter zorunlu taşır
2. Hangi içerik tipik olarak Level 3'e taşınmaya en uygun adaydır?
   - Her skill tetiklemesinde gerekli olan iki cümlelik bir uyarı
   - Skill'in `name` alanı
   - Sadece dar bir alt senaryoda lazım olan, 300 satırlık form alanı listesi (Doğru)
   - YAML frontmatter'daki `description` cümlesi
3. SKILL.md'den Level 3 dosyasına referans verirken aşağıdakilerden hangisi en iyi paterndir?
   - "See the other files."
   - "Bütün bundle'ı taradıktan sonra karar ver."
   - "Detayları öğrenmek için dosyalara bak."
   - "For PDF form filling, see FORMS.md." (Doğru)
4. JSON Schema dosyası bir skill içinde hangi amaca hizmet eder?
   - Skill'in YAML frontmatter'ını oluşturmak
   - Agent'ın ürettiği yapılandırılmış veriyi validation kurallarına bağlamak (Doğru)
   - Çıktının görsel tasarımını belirlemek
   - Bash script'lerinin parametrelerini executable yapmak
5. Sabit bir ülke kodu - ülke adı eşleşmesi için en uygun Level 3 dosya türü hangisidir?
   - Executable Python script
   - JSON Schema validation dosyası
   - Dataset / lookup tablosu (örn. `codes.csv`) (Doğru)
   - HTML template

### [Executable Scripts ile Deterministik İşler](executable-scripts-ile-deterministik-isler/)

#### Sorular

1. Yok

### [Multi-file Skill Mimari Tasarımı](multi-file-skill-mimari-tasarimi/)

#### Sorular

1. Yok

### [Skill Test Etme ve Debug](skill-test-etme-ve-debug/)

#### Sorular

1. Yok

### [Yaygın Hatalar ve Anti-patterns](yaygin-hatalar-ve-anti-patterns/)

#### Sorular

1. Yok

# Platform Entegrasyonları

### [Claude Code ile Skills](claude-code-ile-skills/)

#### Sorular

1. Yok

### [Claude API ile Skills](claude-api-ile-skills/)

#### Sorular

1. Yok

### [Claude.ai ile Skills](claudeai-ile-skills/)

#### Sorular

1. Yok

### [OpenAI Responses API ile Skills](openai-responses-api-ile-skills/)

#### Sorular

1. Yok

### [Inline, Hosted ve Local Skills Karşılaştırma](inline-hosted-ve-local-skills-karsilastirma/)

#### Sorular

1. Yok

### [Üçüncü Parti Framework'lerle Skills](ucuncu-parti-frameworklerle-skills/)

#### Sorular

1. Yok

### [Skill Paketleme, Yükleme ve Limitler](skill-paketleme-yukleme-ve-limitler/)

#### Sorular

1. Yok

# İleri Konular

### [Skills vs MCP: Detaylı Karşılaştırma](skills-vs-mcp-detayli-karsilastirma/)

#### Sorular

1. Yok

### [Skills Kompozisyonu ve Çakışma Yönetimi](skills-kompozisyonu-ve-cakisma-yonetimi/)

#### Sorular

1. Yok

### [Skills, RAG ve MCP ile Birlikte Mimari](skills-rag-ve-mcp-ile-birlikte-mimari/)

#### Sorular

1. Yok

### [Ön-tanımlı (Built-in) Skills](on-tanimli-skills/)

#### Sorular

1. Yok

### [Domain-spesifik Skill Tasarım Örnekleri](domain-spesifik-skill-tasarim-ornekleri/)

#### Sorular

1. Yok

### [Skill Metrikleri ve Değerlendirme](skill-metrikleri-ve-degerlendirme/)

#### Sorular

1. Yok

# Güvenlik ve Üretim

### [Skill Güvenlik Tehdit Modeli](skill-guvenlik-tehdit-modeli/)

#### Sorular

1. Yok

### [Skill'lerde Prompt Injection ve Data Exfiltration](prompt-injection-ve-data-exfiltration-skillerde/)

#### Sorular

1. Yok

### [Skill Audit ve Review Checklist](skill-audit-ve-review-checklist/)

#### Sorular

1. Yok

### [Organizasyon İçinde Dağıtım ve Paylaşım Modelleri](organizasyon-icinde-dagitim-ve-paylasim-modelleri/)

#### Sorular

1. Yok

### [Runtime Kısıtları ve Platform Bazlı Farklar](runtime-kisitlari-ve-platform-bazli-farklar/)

#### Sorular

1. Yok

### [Veri Saklama, ZDR ve Uyumluluk](veri-saklama-zdr-ve-uyumluluk/)

#### Sorular

1. Yok
