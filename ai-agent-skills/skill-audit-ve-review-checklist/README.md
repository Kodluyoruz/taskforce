# Skill Audit ve Review Checklist

Önceki ders prompt injection ve data exfiltration kalıplarını gösterdi. Tehditleri tanımak yetmez; skill'i çalıştırmadan önce hangi alana hangi sırayla bakacağını bilen bir prosedüre ihtiyacın var. Bu lesson o prosedürü iki yoğunlukta veriyor: topluluk skill'inin temizliğini hızlı doğrulamak için `quick review`, production skill'inin derinlemesine soruşturulması için `full audit`. Arasına `red flag` listesi, `static analysis` tooling, review adımları ve aşamalı rollout planı yerleşiyor. Hedef: skill'in audit'ini kafadan değil, checkbox işaretleyerek bitiresin.

## Audit'in iki seviyesi

- **Quick review (~5 dakika).** İndirilen ya da topluluktan paylaşılan skill'in kabaca temiz olup olmadığını anlamak için. Düşük riskli kullanım (kişisel makine, sandbox ortam, hassas veriye temas yok) için genelde yeterli.
- **Full audit (~30-60 dakika).** Production'da hassas iş yapacak, müşteri verisine veya kurum sistemine erişecek skill için. Static analysis tooling, manuel kod review, bağımlılık taraması, dokümantasyon kontrolü hepsi devrede.

İki seviye alternatif değil; üst üste binen filtreler. Quick review'dan geçmeyen skill full audit'e gitmez.

## Quick review checklist

Her skill için minimum:

- [ ] **SKILL.md frontmatter.** `name` reserved kelime ya da yol karakteri içermiyor, `description` görev kapsamını anlatıyor, alan değerlerinde XML tag yok.
- [ ] **SKILL.md body.** Açıkça kötü niyetli talimat yok: `ignore previous`, `leak`, `forward to`, base64 gömülü blok, zero-width karakter.
- [ ] **scripts/ klasörü.** Beklenen dilde mi? Suspicious kütüphane import'u, üretici diline uymayan executable var mı?
- [ ] **External URL'ler.** Bilinmedik endpoint, hardcoded IP, shortener (`bit.ly`), typosquat domain?
- [ ] **Dosya sayısı ve boyut.** 50MB altı, ~500 dosya altı. Beklenmedik binary, ZIP içinde ZIP, gizli `.git` kırmızı bayrak.
- [ ] **Kaynak güvenilirliği.** `anthropics/skills` ya da kurumsal repo > tanıdık geliştirici > random GitHub gist > paylaşılan ZIP.

Quick review'ın işi sınıflandırma: `temiz`, `şüpheli ama düzeltilebilir`, `red`. Şüpheli skill full audit'e gider.

## Full audit checklist

- [ ] **Static analysis (Python).**
  - `bandit` taraması; severity high bloklayıcı.
  - `eval()`, `exec()`, `compile()`, `__import__()` kullanımı kırmızı bayrak.
  - `subprocess.run()` / `os.system()` user input'u shell'e direkt enjekte ediyor mu? `shell=True` veya string concat varsa flag.
  - `os.environ` okuma noktaları; toplu okuma (`dict(os.environ)`) ayrı not.
  - Network call (`requests`, `urllib`, `httpx`, `socket`, `aiohttp`) tek tek listelenir.
- [ ] **Bağımlılıklar.** `requirements.txt` veya `package.json` var mı, version pinned mi? `safety check` / `npm audit` ile CVE taraması. Typosquat ismi (`reqeusts`, `python-dateutils`) var mı?
- [ ] **External fetch.** URL'ler hardcoded mı, runtime'da skill input'undan mı? Egress whitelist gerekli mi, hangi domain'ler?
- [ ] **Logging.** Token, e-posta, kullanıcı içeriği log'a yazılıyor mu? Exception handler stack trace'i nereye basıyor?
- [ ] **Test coverage.** Birim/entegrasyon testi var mı, çalışıyor mu? Edge case (boş input, malformed input, çok büyük input) ele alınmış mı?
- [ ] **Documentation.** SKILL.md kullanım amacını ve trigger koşullarını net açıklıyor mu? Erişilen data ve yan etkiler yazılı mı?

Full audit'in çıktısı bool değil; risk seviyesi (low/medium/high) ve operasyonel koşul. Örnek: "medium risk, sandbox dev ortamda denenebilir, network kapalı."

## Kırmızı bayraklar

Bu kalıplardan birini gördüğünde audit'in geri kalanına geçmeden skill'i red'le ya da kaynağından açıklama iste:

- `eval()` / `exec()` / `pickle.loads()` untrusted data üzerinde.
- `base64.b64decode(...)` ardından `exec` ya da `subprocess` — klasik obfuscated payload.
- `curl ... | bash` ya da `wget ... | sh` script içinde.
- Bilinmeyen endpoint'e POST request, gövdesinde credential, env ya da skill input'u taşıyorsa.
- `dict(os.environ)` ya da `os.environ.copy()` ile env toplu okuma.
- Dosya adının amaçla uyuşmadığı Python dosyası (`scripts/_utils_xyz_.py`).
- Bundle'da binary: `.so`, `.dll`, `.exe`, kaynaksız `.pyc`.
- `git clone`, `pip install` ya da remote download skript runtime'ında.
- Hardcoded IP ya da non-standard porta açılan socket.
- SKILL.md içinde `<!-- system: ... -->` yorum bloğu ya da görünmez karakter.

## Otomatik tooling

Manuel review hız sınırına ulaşır. Tooling:

- **Python:** `bandit`, `safety`, `pylint --enable=security`, `ruff` bazı rule setleri.
- **JS:** `npm audit`, `eslint-plugin-security`, `snyk test`.
- **Genel:** `semgrep --config=auto` pattern-based tarama; community rule pack'leri prompt injection ve exfil kalıplarını yakalar.
- **SBOM:** `cyclonedx` ya da `syft` ile skill içindeki paketleri çıkar; vulnerable bileşen takibi tek noktadan.
- **CI entegrasyonu.** Skill PR'ında otomatik audit job'ı; quick review checkbox'larının büyük kısmını CI doğrular, geçmezse merge engelli.

## Review süreç adımları

1. **İlk bakış.** SKILL.md ve `scripts/` ağacını görsel tara — isimlendirme, yapı, beklenen dosya seti.
2. **Frontmatter ve description.** YAML alanları, açıklama metni, allowed-tools listesi beklentiye uyuyor mu?
3. **Static analysis.** `bandit`, `safety`, `semgrep` çalıştır; bulguları tek tek değerlendir.
4. **Manuel kod review.** İlk import'tan son satıra oku; "ne yapıyor, neyle konuşuyor, ne yazıyor" üç sorusuna her fonksiyon için cevap bul.
5. **External URL doğrulama.** Skill'in eriştiği her domain için sahiplik kontrolü (WHOIS, kurumsal sayfa).
6. **Sandbox testi.** Production'a benzer izole ortamda çalıştır; network'ü monitör et, dosya sistemi değişikliklerini kayda al.
7. **Karar.** Onay, red ya da koşullu onay. Koşullu onayda düzeltme istenir; yazardan açıklama bekleniyorsa süreç askıda.

## Production rollout aşamaları

Audit geçmiş skill direkt production'a çıkmaz. Aşamalı dağıtım hatayı yakalamak için zaman bırakır:

- Audit geçti → `dev` environment'a deploy, sadece geliştirici kullanımı.
- Dev'de bir hafta gözlem → `staging`, dahili test, telemetri açık.
- Staging'de bir hafta gözlem → production `canary`, kullanıcıların küçük yüzdesi.
- Canary'de metrik OK (hata, latency, beklenmedik tool çağrısı yok) → full production.

Her aşamada `rollback` hazır; skill versiyonu pin'li tutulur, problem yakalanırsa önceki sürüme dönülür.

## Sırada: organizasyon içi dağıtım

Audit ve rollout iskeleti tek bir skill'in production yolculuğunu çiziyor. Bir sonraki ders bunun çoğul halini açıyor: skill'ler bir ekibe, bir şirkete, bir topluluğa nasıl dağıtılır? Kim publish eder, kim onaylar, internal marketplace mi yoksa Git repo mu — `organizasyon içinde dağıtım ve paylaşım modelleri` lesson'ı bu sorulara operasyonel cevap kuruyor.

## Kod örneği

Bir skill bundle'ına ilk audit pass'i atmak için tipik komut zinciri. Tooling tek başına karar vermez; çıktı manuel review'la değerlendirilir.

```bash
# Şüpheli görünümlü bir skill'i audit etmek için.

cd suspicious-skill/

# 1) Python kod taraması.
bandit -r scripts/

# 2) Bağımlılık güvenlik taraması.
safety check -r requirements.txt

# 3) Generic pattern taraması.
semgrep --config=auto scripts/

# 4) Manuel inceleme — bilinen şüpheli kalıplar.
grep -nE "eval|exec|subprocess|os\.environ|base64\.b64decode|requests\.post" scripts/*.py

# 5) SKILL.md içinde gizli karakter ya da yorum bloğu.
grep -nE "<!--|\\u200" SKILL.md
```
