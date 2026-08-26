# Skills, RAG ve MCP ile Birlikte Mimari

Önceki derste skills kompozisyonunu ve çakışma yönetimini açtım: birden fazla skill yan yana çalıştığında ne olur, çakıştığında ne yapılır. Şimdi bir kademe yukarı çıkıyoruz. Gerçek sistemler sadece skill'lerden ibaret değil; RAG ve MCP de aynı agent'ın etrafında dolanıyor. Üçü doğru rolle yerleştiğinde ortaya tek bir prompt'a ya da tek bir tool listesine sığmayan bir mimari çıkıyor. Bu derste her birinin yerini netleştirip üç somut hibrit senaryo üzerinden birlikte nasıl çalıştıklarını gösteriyorum — sonunda elinde "ne nereye gider" sorusuna cevap veren bir karar matrisi olacak.

## Üç katmanın rolü

Üçünü tek cümleyle ayırmak istersen şöyle:

- **Skill:** *Prosedürel bilgi.* "Bu işi şöyle yaparız" — adımlar, format, kurallar. Agent klasörü tarar, ilgili SKILL.md'yi context'e alır, gerekirse `scripts/` çalıştırır. Nasıl yapılacağını söyler.
- **RAG (Retrieval-Augmented Generation):** *Dinamik bilgi.* Büyük bir corpus (dokümantasyon, geçmiş ticket, makaleler) vector DB'de embedding olarak durur. Soruya en yakın parçalar semantic retrieval ile getirilir. Ne biliyoruz sorusuna cevap verir.
- **MCP (Model Context Protocol):** *Dış sisteme yapılandırılmış erişim.* Veritabanı, GitHub, Slack, Zendesk — canlı sistemlere standart bir protokolle bağlanır. Nereye bağlanabiliyoruz sorusunun cevabı.

Üçü farklı problem çözer ve birbirinin yerine geçmez. Skill bir adım listesini context'e indirir; RAG o adıma yardımcı olacak metni getirir; MCP o adımı dış dünyada gerçekten uygular.

## Senaryo 1: Müşteri destek bot'u

Bir SaaS şirketi düşün. Ürün dokümantasyonu 100.000 sayfa, ticket'lar Zendesk'te, internal bilgi tabanı Confluence'da. Tek bir agent bunların hepsiyle konuşmalı.

- **Skill:** `customer-support-workflow` — ticket sınıflandırma adımları, escalation rules, kibar cevap formatı, hangi durumda hangi etiketin atanacağı.
- **RAG:** Ürün dokümantasyonu vector DB'de indekslenmiş. Kullanıcı "X özelliği nasıl çalışıyor?" diye sorduğunda en alakalı 5-10 chunk retrieval ile gelir.
- **MCP:** Zendesk MCP server (ticket CRUD), Confluence MCP server (internal knowledge base okuma).

**Akış:** Kullanıcı yazar -> `customer-support-workflow` skill'i devreye girer -> skill, "önce dokümantasyonda ara" der -> RAG ilgili parçaları döner -> skill, "cevabı şu formatta yaz ve ticket'ı güncelle" der -> Zendesk MCP server ticket'a yorum ekler. Üç katman birbirini tetikler; hiçbiri tek başına yetmez.

## Senaryo 2: Code review otomasyonu

Bir geliştirici PR açtığında otomatik review yazan agent.

- **Skill:** `code-review-checklist` — şirket coding standards, güvenlik kuralları, hangi pattern'lar uyarı gerektirir, review yorumlarının tonu.
- **RAG:** Son iki yıldaki PR yorumları + best practices makaleleri vector DB'de. "Bu fonksiyon daha önce review'lerde nasıl eleştirilmişti?" sorusuna cevap.
- **MCP:** GitHub MCP server — diff oku, dosya içeriği çek, review yorumu post et.

**Akış:** PR webhook tetikler -> agent başlar -> `code-review-checklist` skill'i context'e gelir -> GitHub MCP ile diff alınır -> her değişiklik için RAG'a "bu kod parçasına benzer geçmiş yorumlar" sorgusu gider -> skill'in checklist'iyle birlikte agent review yazar -> GitHub MCP yorumu PR'a düşer.

## Senaryo 3: Veri analizi raporu

Veri ekibinin haftalık raporu.

- **Skill:** `weekly-analytics-report` — rapor formatı, hangi sütunlar, hangi grafikler, executive summary uzunluğu, brand tone.
- **RAG:** Geçmiş raporlar vector DB'de. "Geçen ay Q4 büyüme nasıl anlatılmıştı?" — format ve dil tutarlılığı için referans.
- **MCP:** Snowflake (ya da Postgres) MCP server — canlı veri sorgusu, gerçek zamanlı metrikler.

**Akış:** Kullanıcı "Q4 büyüme raporunu hazırla" der -> skill akışı başlar -> Snowflake MCP ile veri çekilir -> RAG geçmiş raporlardan benzer bölümleri getirir -> skill format kalıbını dayatır -> rapor render edilir. Skill formatı garanti eder, RAG tutarlı dili sağlar, MCP veriyi taze tutar.

## Karar matrisi

Yeni bir özellik tasarlarken kendine sor:

- *Sabit, tekrar eden prosedür mü?* -> **Skill**
- *Büyük, statik bir bilgi tabanından soruya göre arama mı gerek?* -> **RAG**
- *Canlı sistemde write ya da gerçek zamanlı read mi lazım?* -> **MCP**
- *Tek sohbete özel, tek talimat mı?* -> sadece **prompt**, skill bile gerekmeyebilir

İkili karar gri kaldığında "veri statik mi dinamik mi" ve "iş tek atışlık mı tekrar eden mi" eksenlerine bak. Statik + tekrar eden -> skill. Statik ama büyük + sorguya göre -> RAG. Dinamik + dış sistem -> MCP.

## Hibrit mimarinin avantajları

Üç katmanı ayırmanın somut faydaları var. Birincisi, her katman güçlü olduğu işi yapar: skill prosedürü, RAG bilgiyi, MCP eylemi. Hepsini tek prompt'a sıkıştırmaya çalıştığında ne tam talimat ne yeterli context ne de gerçek dünya erişimi olur. İkincisi, tek prompt'a sığmayan büyük sistemler kurulabilir. 100.000 sayfa dokümantasyonu prompt'a yapıştıramazsın; RAG bunu çözer. Üçüncüsü, her katman bağımsız evrilebilir: RAG corpus genişler, skill format değişir, MCP server güncellenir — diğer ikisi etkilenmez.

## Yaygın mimari hataları

- **Sabit prosedürü RAG'a sıkıştırmak.** "Rapor şu formatta yazılmalı" gibi deterministik kuralı vector DB'ye gömersen, retrieval doğru chunk'ı her seferinde getirmeyebilir; çıktı tutarsızlaşır. Bu skill işidir, RAG değil.
- **Tüm veriyi SKILL.md'ye yapıştırmak.** Skill, ürünün tüm dokümantasyonunu içermez; nasıl arayacağını söyler. Yüz binlerce token'ı progressive disclosure'a aykırı bir şekilde içeri çağırırsın, context bütçesi patlar.
- **MCP server yazmak yerine skill'in script'ine API client'ları gömmek.** İlk başta hızlı görünür: bir Python dosyasında `requests.post(...)` yazıp bitirirsin. Üç ay sonra aynı entegrasyonu başka agent için bir kez daha yazarsın. MCP server bir kez yazılır, her uyumlu agent kullanır.
- **Tek katmana her şeyi yükleyip diğerlerini ihmal etmek.** "Skill yeterli" diyenler RAG'sız tutarsız bilgi üretir. "RAG her şeyi çözer" diyenler prosedürel iş akışını kaybeder. "Sadece MCP" diyenler nasıl yapılacağını modele yine prompt'la anlatmak zorunda kalır.

## Karmaşıklık yönetimi

Olgunlaşmış bir agent kolayca 5+ MCP server, 10+ skill ve bir RAG corpus ile sistem haline gelir. Bu noktada üç şey kritik olur. Birincisi, **observability**: hangi adımda hangi katman tetiklendi, retrieval neyi getirdi, MCP hangi argümanlarla çağrıldı — log'lar olmadan debug imkânsız. İkincisi, **net description'lar**: skill description'ı, MCP tool description'ı, RAG retriever metadata'sı — model hangi katmanın hangi durumda kullanılacağını description'lardan okur. Üçüncüsü, **rol netliği**: aynı bilgi iki katmanda duplicate olursa hangisinin söz sahibi olduğu belirsizleşir, model rastgele birini seçer.

## ASCII hibrit mimari

```
                ┌──────────────────────────┐
                │         Agent            │
                │  (Claude / GPT / vb.)    │
                └──┬───────────┬───────────┘
                   │           │           │
       ┌───────────┘           │           └────────────┐
       │                       │                        │
       ▼                       ▼                        ▼
┌─────────────┐         ┌─────────────┐         ┌─────────────────┐
│   SKILL     │         │     RAG     │         │   MCP SERVER    │
│             │         │             │         │                 │
│ Prosedürel  │         │ Vector DB   │         │ Canlı bağlantı  │
│ talimat     │         │ embedding   │         │  - DB sorgusu   │
│ + script    │         │ semantic    │         │  - API call     │
│             │         │ search      │         │  - Slack/Email  │
│ "Nasıl yap" │         │ "Ne biliyoz"│         │ "Nere bağlanır" │
└─────────────┘         └─────────────┘         └─────────────────┘
```

## Sırada ne var?

Buraya kadar üç katmanı kendi başına yazıp birbirine bağlamayı konuştuk. Ama sıfırdan her şeyi yazmana gerek olmayabilir; Anthropic ve OpenAI bazı yaygın görevler için **pre-built skills** sunuyor — PDF oluşturma, Excel manipülasyonu, document conversion gibi. Bir sonraki derste bu hazır skills katalogunu açıyoruz: hangileri var, nasıl etkinleştirilir, ne zaman kendin yazmak yerine hazırı kullanmak mantıklı.
