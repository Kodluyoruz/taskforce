# Skill Versiyonlama ve Yaşam Döngüsü

Bir skill, yazıp bıraktığında bitmiş bir paket değildir. Description'ı rötuşlanır, içine yeni script'ler girer, eski talimatlar düşer. Aynı zamanda farklı ortamlarda — geliştirici makinesi, staging workspace'i, production agent'ı — farklı sürümleri eşzamanlı yaşar. Yani skill'in bir **yaşam döngüsü** vardır: oluşturulur, yüklenir, kullanılır, iterasyona girer, yeni version olarak yayınlanır, eskimiş version'lar silinir. Hosted skill API'leri (Anthropic ve OpenAI) bu döngüyü yönetmek için sade ama dikkatli kullanılması gereken bir versiyon modeli sunar. Bu lesson o modeli, production riskleri ve git tabanlı varyantıyla birlikte anlatır.

## Yaşam döngüsünün adımları

Hosted ya da local fark etmeksizin her skill aşağı yukarı aynı yolu izler:

1. **Create.** `SKILL.md` ve destekleyici dosyalar (script, resource, alt klasör) yazılır. Lokal'de — Claude Code ya da bir test agent'ında — gerçek senaryolarla denenir.
2. **Upload.** Bundle ilgili platforma yüklenir: Anthropic Skills API (`/v1/skills`), OpenAI Responses API hosted shell, ya da Claude.ai settings. Local skill'ler için bu adım yoktur; filesystem doğrudan kaynaktır.
3. **Use.** Agent çalışırken skill referansını görür, description ile eşleşen istek gelince yükler, talimatlarını izler.
4. **Iterate.** Description trigger'ı zayıf çıkar; bir bölüm anlaşılmamıştır; yeni bir helper script gerekir. Skill düzeltilir.
5. **New version.** Yeni bundle aynı `name` ile upload edilir. Sistem otomatik olarak version sayacını artırır.
6. **Set default.** Hangi version'ın "varsayılan" sayılacağına manuel karar verilir. Yeni upload, default'u kendiliğinden değiştirmez.
7. **Delete.** Eskiyen version'lar — ya da artık kullanılmayan skill'in tamamı — silinir.

Bu döngünün her halkasında ufak ama belirleyici kurallar var. Asıl risk de orada.

## latest_version vs default_version (production için kritik)

API'lerin versiyon modelinde aynı isme bağlı üç kavram vardır ve karıştırılmamaları lazım:

- **`latest_version`:** Bir skill için son yüklenen version. Otomatik takip edilir; yeni upload geldiğinde değişir.
- **`default_version`:** Bir agent skill'i version belirtmeden çağırdığında hangi version'ın seçileceğini söyler. **Sadece manuel değişir.**
- **`skill_reference.version`:** Agent'ın isteğinde versiyonu sabitlemek için verilir. Bir integer (örn. `2`) ya da `"latest"` olabilir.

Pratikte ilişki şu sebepten önemlidir: yeni version yüklediğinde `latest_version` otomatik atlar, ama `default_version` sen değiştirene kadar eski version'da kalır. Bu kasıtlı bir tasarım. Production agent'ları `default_version`'a bağlıdır; test edilmemiş bir bundle "latest" oldu diye herkesi anında etkilememesi gerekir. Tipik akış: yeni version'ı yükle (latest olur), non-prod workspace'lerde `skill_reference: { version: <yeni numara> }` ile test et, sonuçlar iyiyse default'u o numaraya al.

Agent kodunda `version: "latest"` yazmak baştan çıkarıcı görünür ama production'da tehlikelidir; biri yeni bir bundle yüklediği an, kontrolsüz şekilde herkesin akışına girer. Production referansları sabit bir integer'a — en azından `default_version`'a — bağlı olmalı.

## Yeni version yayınlama

Yeni version oluşturmak için ayrı bir endpoint çağırmaya gerek yoktur; mevcut `name` ile bir bundle daha upload edilir.

```python
# Anthropic API: yeni version upload + default değiştirme
import anthropic
client = anthropic.Anthropic()

# Yeni version yükle (mevcut name ile bundle gönder)
new_version = client.skills.upload(
    name="weekly-report",
    bundle_path="./bundles/weekly-report.zip"
)
print(new_version.version_number)  # örn. 3

# Default'u v3'e al
client.skills.update(
    name="weekly-report",
    default_version=3
)
```

Eski version'lar silmediğin sürece API'de erişilebilir kalır. Bu, "geri al" mekanizması olarak işe yarar: yeni version'da regresyon görürsen `default_version`'ı tek satırla önceki integer'a çekersin.

OpenAI tarafında aynı modeli `skill_reference` üzerinden tüketirsin:

```javascript
// OpenAI: skill_reference ile version sabitleme
const response = await client.responses.create({
  model: "gpt-5.5",
  tools: [{
    type: "shell",
    environment: {
      type: "container_auto",
      skills: [
        { type: "skill_reference", skill_id: "weekly-report", version: 2 },
        // veya version: "latest"
      ]
    }
  }],
  input: "..."
});
```

## Default değiştirme

Default'u taşımanın iki tipik yolu vardır.

**Manuel rollout.** Yeni version'ı test edip API'den `default_version`'ı update edersin. En sade model; tek dezavantajı anlık geçiş — bütün trafik bir anda yeni version'a düşer.

**Canary deployment.** Bir grup agent ya da workspace'i version'ı explicit set ederek ("staging hep `version: 3` görsün") test eder, metrikleri izler, sorun yoksa default'u o numaraya alırsın. Hosted skill API'leri yüzdeli trafik bölüştürmesi sunmaz; canary'yi çağrıdaki `skill_reference.version`'ı ortama göre değiştirerek inşa edersin.

## Silme kuralları (cascade)

Silme tarafında iki kural önemli:

- **`default_version` doğrudan silinemez.** Önce başka bir version'ı default yapman gerekir, sonra eskisini silebilirsin.
- **Son version'ı silmek skill'in kendisini siler.** Bu cascade davranışıdır: en son kalan version gittiğinde, skill kaydı tamamen kalkar. Tüm version'ları silmek ya da skill'i komple silmek de aynı sonucu doğurur — geri alma yoktur.

Bu yüzden upload ettiğin bundle'ların kaynağını her zaman git'te tut; skill kütüphanesi senin disaster recovery'n olur. Hosted API'yi tek doğru kaynak gibi kullanma.

## Local (Claude Code) vs Hosted (API) versiyonlama

Versiyon yönetimi nerede çalıştığına göre yer değiştirir:

- **Local skill'ler** — Claude Code'un `.claude/skills/` klasörü, OpenAI local shell'in path-attached bundle'ı — filesystem üzerinde durur. Burada "version" diye bir API kavramı yoktur; sürüm tarihçesi tamamen **git** tarafındadır. Branch'lerde dener, tag'lerle sabitler, PR'da review edersin.
- **Hosted skill'ler** API'nin version modelini kullanır. Filesystem'deki dosyalar yalnızca upload'ın kaynak materyali olur; runtime'da skill `default_version` veya explicit `version` numarasıyla çağrılır.

Ciddi ekipler ikisini birleştirir: kaynak kod git'te yaşar, CI/CD bundle'ı upload eder, hosted tarafta version yönetilir. İki sistem birbirini dışlamaz; biri kaynak, diğeri dağıtım katmanıdır.

## CI/CD entegrasyonu

Modern bir kurulum şöyle görünür:

```bash
# Claude Code (filesystem): git ile versiyonlama
git add .claude/skills/weekly-report/
git commit -m "weekly-report: better trigger description"
git tag weekly-report-v2
```

CI pipeline'ı bu tag'i ya da main branch'e atılan commit'i yakalar, bundle'ı zipler, API'ye upload eder. Yeni `latest_version` testlerden geçtikten sonra manuel onayla ya da bir "staging default" job'ıyla ilgili workspace'in default'u olur. Production'a geçiş ayrı, kasıtlı bir adımdır.

Getirisi büyük: skill değişikliklerini review edebilirsin, regresyon olduğunda hangi commit'in soruna yol açtığını ararsın, geri dönmek bir `default_version` update'inden ibarettir.

## Sırada: Section 3 — ilk skill'inizi yazma

Yaşam döngüsünü anladığına göre artık skill'i "okunan bir doküman" olarak değil, **versionlanan, deploy edilen, geri alınabilen bir yazılım artefaktı** olarak görüyorsun. Section 2 burada kapanıyor — temeller, dosya yapısı, description sanatı, versiyonlama. Bir sonraki section pratik: skill'i sıfırdan, kendi elinle yazacaksın. Lesson 15'te ilk skill'i adım adım kuracağız; bu kez teori değil, klavyenin başına geçtiğin bir quickstart.

## Quiz

**1. Bir skill'in yeni version'ı upload edildiğinde aşağıdakilerden hangisi otomatik olarak değişir?**
- a) `default_version`
- b) `latest_version` (Doğru)
- c) Skill'in `name` alanı
- d) Tüm `skill_reference` çağrılarının hedefi

**2. Aşağıdakilerden hangisi hosted skill silme kurallarına uyar?**
- a) `default_version` doğrudan silinebilir, sistem otomatik yeni bir default seçer
- b) Skill silindiğinde tek tek version'lar arşivde kalmaya devam eder
- c) `default_version` doğrudan silinemez; önce başka bir version'ı default yapmak gerekir (Doğru)
- d) Son kalan version silindiğinde skill bir sonraki upload'a kadar "boş" durumda bekler

**3. Production agent'larında `skill_reference.version: "latest"` kullanmanın temel riski nedir?**
- a) "latest" değeri API tarafından desteklenmez, çağrı reddedilir
- b) Skill'in description alanını okunamaz hale getirir
- c) Test edilmemiş yeni bir upload'un anında production akışına girmesine neden olur (Doğru)
- d) `default_version` kavramını kalıcı olarak devre dışı bırakır

**4. Local (Claude Code, filesystem tabanlı) skill'lerde versiyonlama nasıl yönetilir?**
- a) Skills API'nin `version_number` alanı filesystem skill'lere de uygulanır
- b) Versiyon tarihçesi git üzerinden — branch, tag ve commit'lerle — yönetilir (Doğru)
- c) Local skill'lerin tek bir aktif kopyası olur, eski sürümler korunamaz
- d) Filesystem skill'leri için runtime, `latest_version` alanını otomatik olarak `.claude/skills/` içine yazar
