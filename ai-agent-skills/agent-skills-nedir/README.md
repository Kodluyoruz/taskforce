# Agent Skills Nedir?

Bir agent kurdun. Tool'lar bağlı, döngü çalışıyor, model bir hedefe ulaşmak için iyi kötü adım atabiliyor. Sonra gerçek bir görev geliyor: "Bu PDF'leri özetle ve tabloları CSV'ye çevir." Model genel olarak PDF'in ne olduğunu biliyor, ama senin ekibinin tercih ettiği kütüphaneyi, hangi sayfaları atlaması gerektiğini, raporu hangi şablona göre hazırlayacağını bilmiyor. Bunu prompt'a yapıştırmaya başlarsan kısa sürede her sohbette aynı şeyi tekrar yazıyor olursun. **Agent skill** tam bu boşluğu kapatmak için var: agent'ın gerektiğinde okuyup uygulayacağı, filesystem'de duran, modüler bir uzmanlık paketi.

## Skill'i nasıl düşünmeli?

Anthropic'in mühendislik blog'unda kullanılan metafor şu: bir skill, yeni katılan bir takım arkadaşına yazacağın **onboarding rehberinin** aynısı. Şirketinizde PDF'leri nasıl işliyorsunuz? Hangi script'i çalıştırıyorsunuz, hangi durumda elle müdahale ediyorsunuz, hangi şablonu kullanıyorsunuz? Yeni gelen birine anlatırken yazdığın o doküman, agent için de tıpatıp aynı işi görüyor. Tek fark, okuyan kişi insan değil model.

Teknik tanımı çok sade: bir skill, içinde bir `SKILL.md` dosyası olan bir klasördür. `SKILL.md` iki şey içerir — YAML frontmatter (`name` ve `description`) ve markdown gövdesi (agent'ın izleyeceği instructions). İsteğe bağlı olarak klasörün içine script'ler, referans dosyaları, şablonlar, schema'lar koyabilirsin. Agent bu klasörü bir uzmanlık paketi gibi tanır.

Önemli olan agent'ın bu paketi **otomatik tetiklemesi**. Sen "şu skill'i kullan" demek zorunda değilsin. Agent başlangıçta sadece skill'lerin `name` ve `description` alanlarını görür. Kullanıcı bir görev verdiğinde, eline gelen istek bir skill'in description'ı ile örtüşüyorsa o skill'in `SKILL.md` dosyasını bash ile okur ve içeriğini context'e alır. Bu örtüşme description'a bağlı, o yüzden description ayrı bir disiplin meselesi — sonraki derslerde detaylı geleceğiz.

## Bir skill neye benzer?

Diyelim ki bir `pdf-summary` skill'i yazıyorsun. Klasör yapısı şöyle olur:

```
pdf-summary/
├── SKILL.md
├── scripts/
│   └── extract.py
└── REFERENCE.md
```

`SKILL.md` minimumda şu kadar:

```markdown
---
name: pdf-summary
description: PDF dosyalarından metin çıkarır ve kısa özet üretir. Kullanıcı PDF özetlemekten, döküman analizinden veya rapor çıkarmaktan bahsederse kullan.
---

# PDF Summary

PDF'ten metin çıkarmak için `scripts/extract.py` çalıştır. Tabloları ayrıca dökmek istiyorsan `--tables` parametresini ekle.

Özet uzunluğu varsayılan 200 kelime. Kullanıcı daha kısa isterse 80 kelimeye in, daha detaylı isterse 500'e kadar çık.

Sayfa sayısı 50'yi geçen PDF'lerde önce başlık ve içindekiler bölümünü tara, sonra bölüm bölüm özetle. Detaylı API kullanımı için REFERENCE.md'ye bak.
```

Burada üç katman var. `description` her zaman yüklü, agent skill'in varlığından haberdar; tipik olarak skill başına 100 token civarı maliyet getirir. `SKILL.md`'nin gövdesi sadece skill tetiklendiğinde context'e giriyor, bu da genellikle birkaç bin token. `extract.py` ve `REFERENCE.md` ise gerektiğinde okunuyor — script çağrıldığında kodun kendisi context'e girmiyor, sadece çıktısı dönüyor. Anthropic'in deyimiyle bu **progressive disclosure**: agent her şeyi peşinen yüklemez, ihtiyaç duydukça açar. Token bütçesi sayesinde onlarca skill aynı anda kurulu olabilir; her biri sadece tetiklendiğinde gerçek maliyetini ödüyor.

Skill'in çekirdeği şu: insan eline değmemiş bir context senaryosunda bile agent doğru zamanda doğru talimatı bulabilsin. Bu yüzden description net olmalı, instructions tek bir görev etrafında odaklı kalmalı, referans materyal ayrı dosyalara çıkmalı.

## Neden yararlı?

Üç pratik fayda var.

**Specialize.** Genel amaçlı bir agent kendi başına ne CRM süreçlerini bilir, ne marka rehberini, ne ekibinin code review checklist'ini. Skill yazdıkça onu kendi alanında uzmanlaştırırsın. Hukuk ekibinin sözleşme inceleme adımları, finans ekibinin aylık rapor şablonu, data ekibinin tercih ettiği SQL dialect'i — hepsi ayrı birer skill olabilir.

**Reduce repetition.** Aynı talimatı her sohbete yapıştırmak yorucudur ve hata getirir. Skill bir kere yazılır, tekrar tekrar kullanılır. Aynı görev tekrarladığında agent aynı süreci izler; insan unutkanlığı denkleme girmez.

**Compose.** Skill'ler birlikte çalışır. Bir agent aynı anda `pdf-summary`, `slack-update` ve `jira-ticket` skill'lerine sahipse, kullanıcı "şu PDF'i özetle, ekibe Slack'ten ilet ve Jira'ya ticket aç" dediğinde üçünü sırayla tetikler. Her bir skill kendi alanında uzman, ama birleştiklerinde uçtan uca bir iş akışı çıkıyor. Tek bir devasa "her şeyi yapan" skill yazmaktansa, dar kapsamlı skill'leri istiflemek daha esnek bir mimari getiriyor — Unix felsefesinin agent dünyasındaki karşılığı gibi.

Bu üç fayda birleştiğinde elde ettiğin şey, prompt mühendisliğinin tek seferlik ve geçici doğasından çıkmış, kalıcı ve yeniden kullanılabilir bir uzmanlık katmanıdır.

## Skill prompt'tan ne kadar farklı?

Karıştırmak kolay, o yüzden net çekelim. **Prompt** bir sohbete özel, geçici bir talimat. Kapatınca biter, başka birine devredemezsin, başka bir agent kullanamaz. **Skill** ise dosya sistemine yazılmış kalıcı bir paket. Versiyonlanabilir, paylaşılabilir, agent ihtiyaç duydukça otomatik yükler. Aynı şirkette üç farklı geliştirici aynı agent'a aynı skill'i kullandırabilir. Sonraki derste bu karşılaştırmayı detaylı olarak prompt, tool ve MCP eksenlerinde de açıyoruz; şimdilik bu kadarı yeter.

## Skills nereden çıktı?

Agent Skills formatı Anthropic'in 2025'in sonunda çıkardığı, sonra açık bir standart olarak yayınlanan bir spesifikasyon. Bugün Claude (claude.ai, Claude Code, Claude API), OpenAI Responses API'sinin shell tool'u, GitHub Copilot, Cursor, Gemini CLI, OpenCode, Goose ve daha onlarca agent ürünü `agentskills.io` adresinde toplanan ortak standardı destekliyor. Yani bir kere yazdığın `SKILL.md`'yi bir agent'tan diğerine taşıyabiliyorsun.

Ama bu fikir bir günde gökten düşmedi. GPTs, ChatGPT plugin'leri, function calling, MCP — son üç yılda agent ekosisteminin denediği birçok yaklaşımın derslerini taşıyor. Sonraki derste bu tarihçeye bakacağız: Skills'ten önce ne vardı, hangi sorunlar çözüldü, hangileri hâlâ açık. Skills'in neden böyle hızlı yaygınlaştığını anlamak için biraz geriye gitmek faydalı.
