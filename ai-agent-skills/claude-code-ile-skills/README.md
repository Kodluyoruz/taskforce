# Claude Code ile Skills

Section 4'ün ilk durağı en pratik olanı: bir skill'i diske koyup terminalde anında kullanmak. Claude Code, Skills'i bir API çağrısı ya da web upload'u olarak değil, **filesystem-based** bir kaynak olarak ele alır. Bir klasör açarsın, içine `SKILL.md` yazarsın, Claude Code başladığında onu otomatik bulur. Yükleme yok, sürüm endpoint'i yok, "publish" butonu yok. Aynı bundle'ı git'e commit ettiğin an ekip arkadaşların da otomatik kazanır. Bu lesson tam olarak bu akışın nasıl çalıştığını açıyor: skill'lerin nereye konduğu, Claude Code'un onları nasıl discover ettiği, plugin marketplace üzerinden nasıl paylaşıldığı ve hangi runtime kısıtlarına dikkat etmen gerektiği.

## Filesystem-based mimari: API'siz çalışma

Claude Code'da skill yüklemek için herhangi bir HTTP isteği atmazsın. Skill'in tek "deployment" adımı doğru klasöre bir SKILL.md koymaktır. Claude Code başlarken iki sabit konumu tarar, her bundle'ın YAML frontmatter'ını okur ve metadata'yı kendi system prompt'una ekler. Bu yaklaşımın doğal sonucu: skill'in versiyon yönetimi git'e devredilir. Branch, tag ve commit'ler skill'in zaman çizelgesini tutar; rollback için `git revert` yeterlidir. Diğer surface'lerden farklı olarak Claude Code skill'leri **Skills API'sinin `version_number` alanını kullanmaz** — `latest_version` kavramı burada yoktur. Filesystem ne diyorsa o.

Bu mimari iki güçlü sonuç doğurur. Birincisi, geliştirme döngüsü çok kısalır: dosyayı kaydet, Claude Code'u yeniden başlat, test et. İkincisi, skill'ler diğer kod artefaktları gibi davranır — code review'a girer, PR'da konuşulur, CI'da linter'a sokulur. Hosted bir registry'ye değil, repo'nun normal life cycle'ına bağlanırlar.

## Personal skill ve project skill ayrımı

Claude Code iki ayrı discovery dizini tarar. İkisi de aynı format, aynı SKILL.md spec; fark sadece kapsam.

- **Personal skill** — `~/.claude/skills/<skill-name>/`. Kullanıcıya özeldir. Makinedeki tüm projelerde aktiftir ama başkalarına gitmez. Kişisel verimlilik skill'leri için doğru yer: gist özetleme, kişisel kodlama tercihleri, sürekli kullandığın bir yardımcı script.
- **Project skill** — `<repo-root>/.claude/skills/<skill-name>/`. Repo ile birlikte git'te taşınır. `git clone` yapan herkes aynı skill setini otomatik kazanır. Onboarding, kuruma özgü iş akışları, code review checklist'i, deployment runbook gibi takım için ortaklaşa kullanılan bilgiler buraya yazılır.

Production önerisi nettir: ekipte değer üreten skill'i her zaman project skill yap, git'e commit et. Tek bir geliştiricinin lokalinde duran personal skill paylaşılmadığı için bilgi adacıkları oluşturur. Aynı skill ekipçe yazılırsa onboarding süresi düşer, davranış tutarlılığı artar.

## Otomatik discovery ve tetikleme

Claude Code her başlangıçta her iki klasörü de tarar. Bulduğu her bundle için sadece YAML frontmatter'ı okur — yani Level 1 metadata. Body (Level 2) ve yan dosyalar (Level 3) bu aşamada belleğe girmez. Bu progressive disclosure davranışı sayesinde elli skill yüklü bir setup'ta bile system prompt'un sabit yükü makul kalır. Tarama sıralaması açısından personal ve project klasörleri eşit ağırlıktadır; agent skill'leri kapsam farkıyla değil, description eşleşmesiyle ayırt eder. İki klasörde de aynı isimli bir skill bulunursa project skill'i kazanır — çünkü repo'da paylaşılan bağlam, lokal kişisel tercihten daha bağlayıcıdır.

Tetikleme kararı tamamen description'a dayanır. Kullanıcı bir istek yazdığında agent, yüklü skill'lerin description'ına bakar ve ilgili olanların gövdesini bash ile okur. Description ne kadar net trigger keyword'ü taşıyorsa tetikleme o kadar doğru çalışır. "Helps with PDFs" çok genel kalır; "Use when the user provides a PDF path or asks for PDF text extraction" agent'a somut sinyal verir. Kullanıcı her oturumda manuel "skill kullan" demek zorunda değildir; agent kendisi karar verir. Yine de bazı durumlarda kullanıcı "code-review skill'iyle bu diff'i incele" gibi açık çağrılar yapabilir; description bu adı içeriyorsa Claude Code aynı bundle'ı önceliklendirir.

## Verbose mod ile akışı izlemek

Skill'in tetiklenip tetiklenmediğini gözlemlemek için Claude Code'u verbose modda çalıştır:

```bash
claude --verbose
```

Bu modda her tool çağrısı, her dosya okuma ve hangi skill'in hangi adımda devreye girdiği terminale yazılır. Description tetikleme oranını ölçmek, yanlışlıkla overtrigger eden bir skill'i tespit etmek ya da hiç çağrılmayan bir skill'in neden kaçırıldığını anlamak için en hızlı debug aracıdır. Pratik bir kural: yeni yazdığın bir skill'in description'ını değiştirdikten sonra verbose modda en az üç farklı formülasyonla aynı isteği dene. Eğer üç sefer üst üste yanlış skill tetikleniyorsa sorun description'da; agent'ın "az çağırma" eğilimine değil, ayırt edici keyword eksikliğine işaret eder.

## Plugin marketplace ile paylaşım

Skills'i tek tek dosya kopyalamak yerine **plugin** olarak paketleyip Claude Code Plugins marketplace'i üzerinden paylaşabilirsin. Plugin bir veya daha fazla skill'i, ek konfigürasyon ile tek bir kurulabilir birim haline getirir. Bir başkası tek komutla senin plugin'ini install eder ve içindeki tüm skill'leri otomatik kazanır. Açık kaynak topluluğun yazdığı domain-spesifik paketleri (örneğin frontend tasarım, security review, ASO yazımı için olanlar) bu yolla dağıtılıyor. Şirket içi dağıtım için kendi internal marketplace'ini açabilir ya da private bir repo üzerinden kuruluma izin verebilirsin.

## Setup adım adım

İlk personal skill'i kurmanın minimal akışı:

```bash
# 1) Klasör oluştur
mkdir -p ~/.claude/skills/csv-summary/scripts

# 2) SKILL.md yaz
cat > ~/.claude/skills/csv-summary/SKILL.md <<'EOF'
---
name: csv-summary
description: Summarize CSV files. Use when user provides CSV path or asks for CSV stats.
---

# CSV Summary

Run: `python scripts/summarize.py <path>`
EOF

# 3) Deterministik script'i scripts/ altına ekle
# (örnek: scripts/summarize.py pandas ile temel istatistik üretir)

# 4) Claude Code'u başlat ve test et
claude
> Bu CSV'yi özetler misin: /tmp/data.csv
```

Project skill için akış benzer ama klasör değişir ve git'e commit edilir:

```bash
# Repo kökünde
mkdir -p .claude/skills/code-review
# SKILL.md ve gerekli yan dosyaları ekle

git add .claude/skills
git commit -m "feat: add code-review skill"
```

Commit'i push ettiğin an, repo'yu clone eden tüm ekip arkadaşları skill'i otomatik kazanır. Ayrı bir kurulum adımı yok.

## Network ve package install kuralları

Claude Code'da skill script'leri kullanıcının makinesinin tam erişimine sahiptir. Internete çıkabilir, dosya yazabilir, herhangi bir API'ye istek atabilir. Anthropic API'daki "no network access" kısıtı burada **yok**. Bu güç gerçek bir sorumluluk getirir: skill'lerin yalnızca güvendiğin kaynaklardan gelmesi gerekir. Bilinmeyen bir plugin'i install etmek, bilmediğin bir CLI binary'sini çalıştırmaktan farksızdır.

Bir diğer önemli kural: **global package install yapma**. `pip install`, `npm install -g`, `brew install` gibi komutlar kullanıcının makinesini kalıcı olarak değiştirir; başka projelerle çakışır. Skill'lerin paket bağımlılıklarını mümkün olduğunca local venv (`python -m venv .venv`), `uv run`, ya da `npx` üzerinden çözmesi tercih edilir. SKILL.md gövdesinde de bu kuralı açıkça yaz; agent senin niyetin doğrultusunda ilerlesin.

## Sırada: Claude API ile Skills

Claude Code'da bir skill çalıştığı an artık aynı bundle'ı başka bir surface'e taşımayı düşünebilirsin. Bir sonraki ders, aynı SKILL.md'nin Claude API üzerinde nasıl yüklendiğini, code execution container'ında hangi runtime sınırlamalarıyla karşılaştığını ve filesystem-based mimariden upload-based mimariye geçerken nelerin değiştiğini anlatıyor. Aynı klasör, başka bir runtime; aynı bundle, başka bir akış. **Claude API ile Skills** lesson'unda görüşürüz.
