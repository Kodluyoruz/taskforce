# Multi-file Skill Mimari Tasarımı

Bir önceki derste deterministik işleri `scripts/` altına paketleyerek `SKILL.md` gövdesinden uzak tuttuk. Aynı disiplini bu kez metin tarafına uygulayacağız. Bir skill büyüdükçe `SKILL.md` tek dosya halinde tutulamaz; akış adımları, parametre tabloları, form kuralları, örnek senaryolar üst üste binince gövde 5k token sınırının çok ötesine kayar ve agent her tetiklemede tüm bunları context'e yüklemek zorunda kalır. Bu derste skill'i nasıl birden fazla dosyaya böleceğini, hangi pattern'in hangi durum için uygun olduğunu, cross-link'lerin nasıl yazılması gerektiğini ve `anthropics/skills` reposundaki `pdf` skill'inin bu mimariyi nasıl uyguladığını adım adım gözden geçireceğiz. Hedef: agent'a yüksek detay sunarken context'i hafif tutmak.

## Ne zaman parçalamak gerekli

Parçalama her skill için zorunlu değil. Tek bir akışı olan, 1-2k token civarında duran skill'ler tek `SKILL.md`'de mutlu kalır; ek dosya çıkarmak gereksiz indirection üretir. Üç sinyal varsa böl:

- **Gövde 5k token sınırına yaklaşıyor.** Anthropic best practices doğrudan `SKILL.md` gövdesi için 500 satır / 5k token üst sınırı belirler. Bu eşiği aşan içerik her tetiklemede context'e gireceği için pahalıdır.
- **İçerik konsept olarak ayrılabiliyor.** "PDF text çıkarma" ile "PDF form doldurma" aynı skill'in iki kolu olabilir; ama agent çoğu görevde ikisinden sadece birini kullanır. İki kolu aynı gövdeye sıkıştırmak, hep gereksiz olan tarafı da context'e taşır.
- **İçerik sık değil ama gerekli.** Edge-case parametreleri, troubleshooting tabloları, format spesifikasyonları — yoklukta agent başarısız oluyor, ama görevlerin yüzde onunda lazım. Bu içerik gövdede değil, ek dosyada yaşamalı.

İçerik bu üç testten birine uymuyorsa zorla bölme; tek dosya kalsın.

## SKILL.md + ek dosya pattern'ı

Anthropic'in olgun skill örneklerinde tekrar eden pattern şu:

- **`SKILL.md`** — ana akış. Skill ne yapar, hangi adımlar, hangi script çalışır, hangi durumda hangi yan dosyaya bakılır.
- **`REFERENCE.md`** — parametre detayı, sözdizimi tablosu, API yüzeyi, ileri kullanım. SKILL.md'de adı geçen her parametrenin tam tanımı buraya çıkar.
- **`FORMS.md`** veya benzeri konu-bazlı dosya — belli bir alt görev için tam talimat. PDF skill'inde form doldurma akışı tamamen ayrı dosyada yaşar.
- **`EXAMPLES.md`** — kanonik girdi/çıktı çiftleri, örnek senaryolar. Agent stilini örnekten öğrendiği için bu dosya genelde ağır basar.
- **`scripts/`** — deterministik işler (önceki ders). Kod context'e girmez, sadece stdout girer.

İsim seçimi konvansiyonel. Major sub-doc'lar büyük harfle yazılır (`REFERENCE.md`, `FORMS.md`, `EXAMPLES.md`) çünkü `SKILL.md` ile aynı seviyede major artifact'lerdir. Tek bir konunun küçük notu için lowercase kullanmak da yaygındır (`scripts/extract.py`, `templates/output.yaml`).

## SKILL.md'nin rolü değişiyor

Parçalanmış mimaride `SKILL.md` artık "tüm bilgi burada" dosyası değil — bir **navigasyon haritası**. İçinde üç şey olmalı:

1. Skill ne yapar, ne zaman tetiklenir (yine 1. cümlede),
2. En sık akışın adım adım şeması (token'ı buraya har),
3. "Şu alt durumda şu dosyaya bak" sinyalleri.

İçeriğin yüzde sekseni en sık 1-2 senaryoya hizmet etmeli. Geri kalan yüzde yirmilik edge-case zenginliği ek dosyalara dağılır.

## Cross-link kuralları

Agent ek dosyaları otomatik açmaz; `SKILL.md`'de açık bir sinyal görmesi gerekir. Anthropic best practices iki kural koyar:

**Bir seviye derinlik.** Tüm ek dosyalar doğrudan `SKILL.md`'den link alır. `SKILL.md → advanced.md → details.md` zinciri yasak; agent ikinci sıçramada dosyayı `head -100` ile preview eder ve tam okumaz, eksik bilgiyle iş yapar.

**Açık ve okunabilir link metni.** Format: `For X, see Y.md`. PDF skill'indeki gerçek örnekler:

```markdown
For advanced features, JavaScript libraries, and detailed examples,
see REFERENCE.md.

If you need to fill out a PDF form, read FORMS.md and follow its
instructions.
```

Linki düz cümle içinde yedirme, başlık altına vurgulu yaz. Agent gövdeyi tararken `see X.md` kalıbını sinyal olarak yakalar ve gerektiğinde `bash` ile dosyayı okur.

## Okuyucu yolu tasarımı

İyi parçalama, agent'ın dosyaları **doğru sırayla** açmasını sağlar. Tasarım sorusu şudur: ortalama bir görev geldiğinde agent kaç dosya açacak?

- En sık akış sadece `SKILL.md` okuyup bitirebilmeli. Tek dosya, tek tetikleme.
- İkinci sıklıktaki akış `SKILL.md` + bir ek dosya. (`REFERENCE.md` ya da `EXAMPLES.md` gibi.)
- Üçüncü sıklıktaki akış `SKILL.md` + iki ek dosya. (Form doldurma görevi: `SKILL.md` + `FORMS.md` + `REFERENCE.md`.)

Eğer ortalama görev üçten fazla dosya gerektiriyorsa skill yanlış parçalanmış; ya çok küçük dosyalara bölünmüş ya da bilgi yanlış dağıtılmıştır.

## anthropics/skills/pdf örnek incelemesi

`anthropics/skills` reposundaki `pdf` skill'i bu mimarinin referans uygulamasıdır. Yapı:

```
skills/pdf/
├── SKILL.md      # Ana akış, hangi durumda hangi dosya
├── REFERENCE.md  # pypdfium2, pdf-lib detayları, troubleshooting
├── FORMS.md      # PDF form doldurma — kendi başına bir alt skill
└── scripts/      # Form analiz, alan doğrulama gibi deterministik işler
```

`SKILL.md` "Quick Reference" tablosunda her görev tipini ya bir kod parçacığıyla ya da "see FORMS.md" / "see REFERENCE.md" işaretiyle eşler. Text extraction gibi sık görev gövdede çözülür; form doldurma gibi karmaşık iş `FORMS.md`'ye delege edilir. Sonuç: agent rapor görevi için `SKILL.md`'yi okuyup tek bir `pdfplumber` snippet'iyle çıkar; form doldurma görevi için `FORMS.md`'yi de açar. İki senaryo birbirinin token'ını yemez.

## Aşırılığa kaçmama

Multi-file mimari bir noktadan sonra anti-pattern'e dönüşür. On dosyaya bölünmüş bir skill için agent her seferinde birden fazla `bash read` yapmak zorunda kalır, navigation yükü reasoning bütçesini yer, eksik dosya yakalanmazsa görev yarım kalır. Pratik üst sınır:

- `SKILL.md` + 2-3 major sub-doc (`REFERENCE.md`, `FORMS.md`, `EXAMPLES.md`) yeterlidir.
- Daha fazlasına ihtiyacın varsa muhtemelen skill çok geniş; iki ayrı skill'e ayırmak daha sağlıklı.

İki yapı yan yana:

```
# KÖTÜ — monolitik
weekly-report/
└── SKILL.md  (10k token, her şey içinde)
```

```
# İYİ — multi-file
weekly-report/
├── SKILL.md          (2k token, ana akış + nav)
├── REFERENCE.md      (5k token, JIRA filter parametreleri)
├── EXAMPLES.md       (1k token, örnek raporlar)
└── scripts/
    └── fetch_jira.py
```

`SKILL.md` içindeki cross-link bloğu şöyle görünür:

```markdown
## Detaylı parametreler

JIRA filter sözdizimi ve tüm parametreler için `REFERENCE.md`'ye bak.
Örnek rapor çıktıları için `EXAMPLES.md`.
```

İki ek dosya, üç token bütçesi: gövde her tetiklemede yüklenir, ek dosyalar sadece gerektiğinde açılır.

## Naming konvansiyonu

Tutarlı isim, agent'ın "hangi dosya nerede" sezgisini güçlendirir. Anthropic'in repo örneklerinden çıkan kurallar:

- Major sub-doc'lar büyük harfle: `REFERENCE.md`, `FORMS.md`, `EXAMPLES.md`. `SKILL.md` ile aynı seviyede first-class belge olduğunu sinyallemek için.
- Domain bazlı bölme yaparken alt klasör + lowercase: `reference/finance.md`, `reference/sales.md`. BigQuery gibi çok-domainli skill'lerde her domain ayrı dosya, agent sadece ilgili domaini okur.
- Script'ler her zaman `scripts/` altında, lowercase snake_case: `scripts/fill_form.py`. Markdown'dan farklı bir niyet sinyali — okunmaz, çalıştırılır.
- Forward slash kullan, Windows path'i yazma; cross-platform agent runtime'larında backslash kırar.

İsim, dosyanın işini açık etmeli. `doc1.md`, `notes.md`, `extra.md` gibi belirsiz isimler agent'ın sezgisini bozar; `validation_rules.md` net.

## Sırada: skill test etme ve debug

Multi-file bir skill yazdıktan sonra asıl iş onun beklediğin gibi davranıp davranmadığını doğrulamak. Agent gerçekten `FORMS.md`'yi açıyor mu, yoksa `SKILL.md`'deki ipucunu kaçırıp halüsinasyonla mı ilerliyor? Cross-link'ler işliyor mu? Beklenmedik exploration path'leri var mı? Sonraki derste `skill test etme ve debug` başlığı altında skill'in davranışını gözlemleme tekniklerini, test senaryolarının nasıl kurulacağını ve yaygın debug pattern'lerini ele alacağız.
