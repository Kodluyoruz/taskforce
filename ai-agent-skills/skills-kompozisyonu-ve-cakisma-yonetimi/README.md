# Skills Kompozisyonu ve Çakışma Yönetimi

Bir ortama tek bir skill koyduğunda her şey temizdir. Görev gelir, skill çağrılır, iş biter. Ama gerçek kurulumlar nadiren tek skill'le gezer; bir destek bot'unun yanında ticket sınıflandıran, bilgi tabanını arayan, SLA kontrol eden, fatura çeken yarım düzine skill aynı anda yüklü olur. Bu noktadan itibaren artık "skill yazıyorum" değil "skill koleksiyonu tasarlıyorum" işine girersin. Hangileri yan yana durabilir, hangileri aynı durumda tetiklenmek için yarışır, bir görev iki skill gerektirdiğinde sıra nasıl kurulur — bu lesson bu üç soruyu açıyor. Konunun adı **composition**: skill'lerin birbirleriyle ilişkisini tasarlama disiplini.

## Composability: birden fazla skill yan yana

Skills mimarisinin sessiz vaadi composability. Bir agent'a istediğin kadar skill yükleyebilirsin; her sohbet başında sadece `name` ve `description` satırları context'e girer, ana içerikleri tetiklendiklerinde okunur. Bu progressive disclosure katmanı, on, yirmi, elli skill'i aynı ortamda barındırmayı pratik kılan şeydir. Agent her görevde tüm description'ları tarar ve "şu an hangisi (veya hangileri) gerekli?" sorusunu kendi cevaplar. Sen tek bir skill'i nasıl tetikleyeceğini değil, **koleksiyonun seçim mantığını** tasarlarsın. Doğru çalışan bir koleksiyonda skill'ler birbirini ezmez, agent tek seferde doğru olanı bulur ve gerekirse birkaç skill'i sıralı kullanır.

## Çakışma türleri

Koleksiyon büyüdükçe sürtünme yüzeyi de büyür. Pratikte üç tip çakışma çıkar:

- **Trigger çakışması.** İki skill'in description'ı yakın durumda tetiklenebilir. `pdf-summary` ve `pdf-forms` ikisi de bir PDF konuşulduğunda kendine yer bulur; eğer description'lar yeterince ayrıştırılmadıysa agent yanlış olanı seçer ya da ikisini birden çağırmaya kalkar.
- **Çıktı çakışması.** İki skill aynı dosyayı veya aynı state'i değiştirmek isteyebilir. Aynı `report.xlsx`'i yazmaya çalışan iki rapor skill'i klasik örnek; sonuç sırayla yazıldığında üst üste binme, aynı anda yazıldığında bozuk dosya.
- **Kaynak çakışması.** Skill'ler `requirements.txt` veya executable script'lerle gelir. İki skill aynı pre-installed paketin farklı versiyonunu beklediğinde container'da biri çalışır, diğeri patlar. Sandbox'a sahip platformlarda bu sessiz bir hata kaynağıdır.

Üçü de mimari sorunudur; çözüm tek bir skill'i düzeltmekle değil koleksiyon kurallarıyla gelir.

## Çakışma çözüm yöntemleri

Yüksek getirili dört çözüm var:

- **Description'da farklılaştırma.** Her skill kendi trigger sözcüklerine sahip olsun. `summarize` vs `fill form` vs `merge` gibi niyet odaklı kelimeler agent için en güvenilir sinyal. Anthropic'in pre-built skill'leri tam olarak bu kalıpta yazılır.
- **Explicit selection.** Kullanıcı (veya orchestrator prompt) doğrudan "use the X skill" diyebilir. Hassas akışlarda agent'ın tahminini beklemek yerine seçimi sabitlemek mantıklıdır.
- **Sıralı kompozisyon.** Skill A'nın çıktısı skill B'ye girdi olur. Şu an çoğu runtime'da bu zincir agent'ın kendi karar döngüsünde örtük kurulur; deterministik istiyorsan iki skill'i çağıran ince bir orchestrator skill yazmak yaygın bir kalıptır.
- **Hiyerarşi / priority.** Bazı platformlar default skill önceliği ayarlamana izin verir. Claude Code'da `.claude/skills/` proje-bazlı klasör, `~/.claude/skills/` kişisel klasörden önce taranır; bu da projeye özel skill'in genel olanın önüne geçmesini sağlar.

## Compositional pattern'lar

Üretimde sık tekrarlanan üç kalıp:

- **Pipeline.** Skill A → skill B → skill C. Örnek: `fetch-data` → `analyze` → `render-report`. Her skill kendi adımını yapar, çıktıyı diskte ya da agent state'inde bırakır, sıradakini agent çağırır. Avantajı: her halka tek başına test edilebilir.
- **Specialist team.** Aynı kategoride uzmanlaşmış çoklu skill. `legal-skill`, `finance-skill`, `devops-skill` aynı agent'a yüklenir; gelen soruya göre agent doğru uzmanı seçer. Bir destek bot'unun klasik kurulumu budur.
- **Layered.** Genel skill + spesifik skill. `report-generator` her tür raporu yapar, `weekly-report` haftalık formatın özel kurallarını taşır; haftalık talep geldiğinde spesifik olan tetiklenir, diğeri kapalı kalır. Override mantığıyla çalışır.

Hangi pattern'i seçeceğin domain'in yapısına bağlıdır — iş akışları doğal olarak sıralıysa pipeline, talepler bağımsız alanlara dağılıyorsa specialist team.

## Tasarım tavsiyeleri

Çakışmayı tasarımın başında kesmek, sonradan debug etmekten ucuzdur. Pratik kurallar:

- Her skill **bir görev, bir trigger.** Single responsibility skill'lerde de geçerli; "şunu da yapsın" demeden önce ayrı skill düşün.
- Description'ları benzersiz tut. İki skill'in description'ını yan yana koyup okuduğunda farkı bir cümlede ifade edebiliyor olmalısın.
- Aynı kategoride çoklu skill varsa **adlandırma konvansiyonu** belirle. `pdf-summary`, `pdf-forms`, `pdf-merge` ortak prefix ile dosyalanırsa hem agent için hem ekip için kategori netleşir.
- Skill'ler **stateless** olsun. Kendi içlerinde global durum tutmasınlar; girdi → çıktı şeklinde davranan bir skill, başka bir skill'le sıralandığında sürprizler üretmez.

## Composition'ın limit'i

Composition sınırsız değil. Üç gerçek limit:

- **Metadata token maliyeti.** Yüzlerce skill yüklenirse description toplamı her sohbette context'e girer. Anthropic'in description'ları 1024 karakterle sınırlaması tesadüf değil; bütçeyi makul tutmak için.
- **Gri alan description'lar.** İki skill'in tarif ettiği durum kesişiyorsa agent yanlış seçim yapar. Skill sayısı arttıkça ayrıştırma diski büyür.
- **Paylaşılan state.** Skill'ler aynı dosya, aynı container, aynı dış servis üzerinde çalışıyorsa yan etkiler birikir. Stateless tasarım bunun ilk savunması.

Kurallar basit ama disiplin gerektirir: koleksiyona her yeni skill eklerken "bu hangi mevcut skill'le çakışabilir?" sorusu sorulmadığında, çakışma kendiliğinden çıkar.

## Production örnek

Bir destek bot'unun gerçek dağılımı tipik olarak şöyledir: `ticket-classify` (gelen mesajı kategoriye koyar), `knowledge-search` (bilgi tabanını tarar), `ticket-escalate` (kıdemli kuyruğa devreder), `reply-template-generate` (yanıt taslağı üretir), `sla-check` (süre durumunu kontrol eder), `customer-history` (müşterinin geçmiş ticket'larını çeker), `billing-info` (fatura bilgisi getirir), `tech-troubleshoot` (teknik sorun adımları), `language-detect` (dili tespit eder), `sentiment-analyze` (ton ölçer). On skill aynı agent'ta yüklü; her birinin description'ı farklı bir niyet sözcüğüyle başlar. Klasik bir akış: language-detect → ticket-classify → customer-history → knowledge-search → reply-template-generate. Pipeline ve specialist team aynı koleksiyonda iç içe çalışır.

## Akış diyagramı

```
Kullanıcı isteği
       │
       ▼
┌──────────────────────────────────────────────┐
│ Agent: tüm yüklü skill description'larını    │
│ context'te bulundurur                        │
└──────────────────────────────────────────────┘
       │
       ▼
┌──────────────────────────────────────────────┐
│ "Description'lara bakıyorum..."              │
│   - pdf-summary: 'summarize PDF' → MATCH     │
│   - pdf-forms:   'fill PDF forms' → no       │
│   - csv-summary: 'summarize CSV' → no        │
└──────────────────────────────────────────────┘
       │
       ▼
   Skill seçilir → SKILL.md okunur → çalıştırılır
       │
       ▼
   (Gerekirse) sonraki skill için döngü tekrar
```

## Sırada ne var?

Composition tek başına Skills'in ölçeklenme hikayesinin yarısı. Diğer yarısı Skills'in dış dünyayla ilişkisinde. Bir agent gerçek bir kurumsal ortamda çalıştığında sadece skill'lerle değil, vektör veritabanlarındaki dokümanlarla (RAG) ve canlı sistemlerle konuşan protokollerle (MCP) birlikte yaşar. Sonraki ders bu üçlüyü birleştiriyor: aynı agent koleksiyonunda Skills + RAG + MCP'yi nasıl katmanlarsın, hangi karar hangisine düşer, sınırlar nerede çizilir. Composition'ı tek bir runtime içinden çıkarıp hibrit mimariye taşıyoruz.
