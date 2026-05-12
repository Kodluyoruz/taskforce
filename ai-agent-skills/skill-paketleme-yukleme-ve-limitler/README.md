# Skill Paketleme, Yükleme ve Limitler

Bir skill'i yerelde yazmak işin yarısı. Diğer yarısı, o bundle'ı bir API'ye taşıyıp workspace'inin kullanabileceği hale getirmek. Skill API'leri (Claude API, OpenAI Responses) burada şaşırtıcı derecede benzer bir kalıp izliyor: ya tek bir zip yüklersin, ya da `files[]` part'larını multipart form-data ile gönderirsin. Şubat 2026 rakamları — zip 50 MB, uncompressed 25 MB, bundle başına 500 dosya — küçük gibi durabilir, ama yanlış dosyaları bundle'a sızdırınca hızla dolar. Bu derste paketleme adımlarını, validation kurallarını, doğru zip yapısını ve CI/CD pipeline'ında nasıl otomatize edileceğini gözden geçiriyoruz.

## İki upload modu: zip ve multipart

Skill API'lerinin desteklediği iki yol var; ikisi de aynı bundle'ı kabul eder, sadece transport farklı.

**Zip upload.** Bundle root klasörünü zip'ler, tek dosya gönderirsin. Lokal testte hızlı (`unzip -l` ile içeriği görürsün) ve CI runner'da artifact olarak saklayabilirsin.

**Multipart upload.** Birden fazla `files[]` part'ı gönderirsin; her part bundle içindeki göreceli path'i (örnek `weekly-report/SKILL.md`, `weekly-report/scripts/x.py`) taşır. Çok dosyalı bundle'ları zip'lemeden doğrudan akıtmak istediğinde işe yarar; ama günlük kullanımda zip akışı daha az hata yapar.

İkisi de aynı validation'dan geçer, aynı `skill_id` ve `version_number` döner.

## Limitler (Şubat 2026)

OpenAI dökümanı bu rakamları tek satırda veriyor; Claude tarafında da pratikte aynı sınırlar geçerli:

- **Zip max 50 MB.** Sıkıştırılmış halde tek upload'ın üst sınırı.
- **Bundle başına max 500 dosya.** Klasör derinliği önemli değil, toplam dosya sayısı.
- **Uncompressed max 25 MB.** Bundle'ın açılmış toplam boyutu. Skill runtime'ı diski bu sınırla sınırlar.
- **SKILL.md sayısı: tam 1.** Eşleşme case-insensitive — `SKILL.md`, `skill.md`, `Skill.MD`; hepsi aynı dosya sayılır. İki tane varsa upload reddedilir.

Bu rakamlar mütevazı ama amaca uygun. Skill bir framework değil, bir uzmanın elindeki not defteri. 25 MB uncompressed sınırı, "skill içine veritabanı koyma" mesajını dolaylı veriyor.

## Pre-flight validation

Upload öncesi runner'ın lokal olarak çalıştırması gereken birkaç kontrol var. Hatayı API cevabında değil, kendi pipeline'ında yakalamak hem hız hem maliyet açısından daha iyi.

- `SKILL.md` bundle root'ta var mı?
- YAML frontmatter parse edilebiliyor mu? Bozuk indent veya kapatılmamış string burada görünür.
- `name` ve `description` agentskills.io spec'ine uyuyor mu? (Lesson 9 — name regex, açıklama uzunluğu.)
- Dosya sayısı 500'ü geçti mi?
- Uncompressed boyut 25 MB'ı, zip boyutu 50 MB'ı geçti mi?
- İki SKILL.md kazara mı bulunuyor? (Eski şablon kopyaları, `examples/` altında demo skill'ler, vs.)

Bu kontroller bash ile birkaç satırda yapılır; `unzip -l zip-adi.zip` size hem dosya sayısını, hem uncompressed boyutu verir.

## Zip yapısı: tek root klasör kuralı

En sık kaçırılan detay bu. Zip'in **kök seviyesinde tek bir klasör** olmalı; SKILL.md ve diğer dosyalar o klasörün içinde durmalı.

```
weekly-report.zip
└── weekly-report/        ← tek root klasör
    ├── SKILL.md
    ├── scripts/
    │   └── x.py
    └── REFERENCE.md
```

Yanlış olan şu: SKILL.md ve `scripts/` zip'in doğrudan kökünde duruyor, root klasör yok. Bu durumda upload reddedilir, çünkü API "bundle adı" olarak hangi klasörü alacağını bilemez.

İpucu: `cd weekly-report && zip -r ../weekly-report.zip .` komutu yanlış sonuç verir — `.` zip kökünde içeriği patlatır. Doğrusu üst dizinden `zip -r weekly-report.zip weekly-report` çalıştırmak.

## Zip oluşturma komutları

Tipik bir paketleme komutu, gereksiz dosyaları dışarıda bırakarak çalışır:

```bash
zip -r weekly-report.zip weekly-report \
  -x "weekly-report/.git/*" \
  -x "weekly-report/.DS_Store" \
  -x "weekly-report/*.pyc" \
  -x "weekly-report/__pycache__/*"
```

`.git/` history'sini bundle'a dahil etmek hem 25 MB sınırını hem dosya sayısı sınırını anında patlatır. `.DS_Store`, `.pyc`, `__pycache__/` gibi build artefact'ları da bundle'da yeri olmayan dosyalardır.

## CI/CD entegrasyonu

Skill bir kez yazıldığında repo'da git altında yaşar. Yayınlama tarafı şöyle kurulur:

1. Push veya PR merge sonrası CI runner tetiklenir.
2. Runner bundle klasörünü `zip` ile paketler, lokal validation çalıştırır.
3. API endpoint'e upload eder (Claude için `POST /v1/skills`, OpenAI için Skills upload endpoint'i).
4. API yeni bir `version_number` döner; default version'ı değiştirmek genelde manuel ya da canary akışına bağlanır.

Versiyonlama lesson 24'te daha detaylı; burada ana mesaj şu: skill yayını da kod deploy'u gibi otomatize edilir, manuel zip drag-drop ile değil.

## Upload sonrası ne olur?

Başarılı upload'tan sonra API üç şey döndürür: yeni `skill_id` (ilk upload ise), `version_number` ve validation raporu. Bundle artık:

- Claude API'de **workspace üyelerine açık.** Aynı workspace'teki tüm developer'lar `skill_id` ile referans verebilir.
- Claude.ai'da **kişisel.** Her kullanıcı kendi skill'lerini ayrı yükler; org-wide paylaşım yok.
- Claude Code'da bu akış geçerli değil; orada skill'ler filesystem-based çalışır, API'ye yüklenmez.

OpenAI tarafında uploaded skill'ler `skill_reference` ile hosted shell tool'una mount edilir, lokal shell modunda ise upload yerine path verilir.

## CI/CD scripti

```bash
#!/bin/bash
# .github/workflows/upload-skill.sh
set -euo pipefail

SKILL_NAME="weekly-report"
SKILL_DIR="./skills/${SKILL_NAME}"

# 1. Bundle'ı hazırla (üst dizinden zip'le ki tek root klasör olsun)
zip -r "${SKILL_NAME}.zip" "${SKILL_DIR}" \
  -x "${SKILL_DIR}/.git/*" \
  -x "${SKILL_DIR}/.DS_Store" \
  -x "${SKILL_DIR}/*.pyc" \
  -x "${SKILL_DIR}/__pycache__/*"

# 2. Lokal validation
ZIP_SIZE=$(stat -f%z "${SKILL_NAME}.zip")
FILE_COUNT=$(unzip -l "${SKILL_NAME}.zip" | tail -1 | awk '{print $2}')
echo "Zip: ${ZIP_SIZE} bytes, ${FILE_COUNT} files"
unzip -p "${SKILL_NAME}.zip" "${SKILL_NAME}/SKILL.md" | head -10

# 3. Upload (Claude API)
curl -X POST https://api.anthropic.com/v1/skills \
  -H "x-api-key: ${ANTHROPIC_API_KEY}" \
  -H "anthropic-beta: skills-2025-10-02" \
  -F "name=${SKILL_NAME}" \
  -F "bundle=@${SKILL_NAME}.zip"
```

Bu script pipeline'ında bir job olarak koşar; upload başarılı olursa `skill_id` ve `version_number` cevap olarak loglara düşer.

## Yaygın hatalar

- **25 MB uncompressed sınırı aşımı.** Büyük örnek dataset'leri Level 3 dosyası olarak gömmek yerine, skill içinde sadece referans bırak; veriyi runtime'da bir API'den çek.
- **500 dosya sınırı aşımı.** Onlarca küçük referans dosyasını tek bir `REFERENCE.md` altında birleştirmek hem context kullanımına hem dosya sayısına yardımcı olur.
- **`.git/` veya `.DS_Store` zip'e sızması.** Tek bir `.git/` klasörü 500 dosyayı tek başına geçebilir. Zip komutunda exclude listesi şart.
- **Symbolic link.** Bazı runtime'larda symlink desteklenmez veya target'ı resolve edilmez; gerçek dosyayı kopyala.
- **Root klasör yok.** Zip kökünde doğrudan SKILL.md duruyorsa upload reddedilir; doğrusu tek root klasör içinde tutmak.
- **İki SKILL.md.** `examples/SKILL.md` veya kopya bırakılmış eski sürüm validation'ı kırar; bundle'ın tüm derinliğinde tam bir tane olmalı.

## Sırada: Section 5 — İleri Konular

Paketleme, validation, upload — skill'in "production'a gitme" tarafı artık net. Section 4 burada kapanıyor. Bir sonraki bölüm ileri konularla başlıyor ve ilk durağı doğal: skill'ler ne zaman doğru araç, ne zaman MCP daha iyi cevap? Lesson 30'da bu iki yaklaşımı yan yana koyacak, mimari karar matrisi çıkaracağız.
