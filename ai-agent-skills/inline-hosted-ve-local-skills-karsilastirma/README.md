# Inline, Hosted ve Local Skills Karşılaştırma

Bir önceki derste OpenAI Responses API'nin aynı skill paketini üç farklı yoldan modele bağladığını gördük: önceden upload edilmiş bir `skill_id`'yi referans vererek (hosted), kendi makinendeki bir dizini path ile göstererek (local) ya da skill bundle'ını zip'leyip base64 olarak isteğin içine iliştirerek (inline). Bu üç mod, sadece bir API ayrıntısı değil; aslında bir skill'in **nerede yaşadığı**, **nasıl paylaşıldığı** ve **verinin hangi sınırdan geçtiği** sorularına verilen üç farklı cevap. Bu derste her birini karşılaştırılabilir bir çerçeveye oturtacağız: ne zaman hangisini seçmek mantıklı, hangi trade-off'ları getiriyor, kararı veren üç soru ne.

## Hosted (`skill_reference` + `skill_id`)

Hosted modda skill bundle'ı, provider'ın (OpenAI, Anthropic) sunucularında oturuyor. Önce dosyaları multipart ya da zip ile yüklüyorsun, sistem bir `skill_id` ve sürüm numarası dönüyor. Sonraki isteklerde sadece bu `skill_id`'yi referans veriyorsun; container açılırken provider doğru sürümü mount ediyor. OpenAI Responses API'da `skill_reference.version` integer (`3`) ya da `"latest"` kabul ediyor.

Hosted'ın en görünür avantajı versiyon kontrolü ve workspace içinde paylaşım. Bir ekip arkadaşının lokalindeki sürüm ile production'da koşan sürüm aynı `skill_id` üzerinden eşitlenebilir. `default_version` ile prod sabitlenir, `latest_version` ile geliştirme akar. Üretim için ideal mod budur; aynı skill onlarca request'te tekrar tekrar yeniden gönderilmez, sadece referans geçer.

Trade-off tarafında iki kalem var. Birincisi: skill içeriği provider'da duruyor, dolayısıyla audit ve veri rezidansı süreçleri provider'ın politikalarına bağlı. İkincisi: hosted skill'ler container yaşam döngüsüne bağlı çalışıyor — container expire ettiğinde mount düşüyor, bunu kendi taraf operasyonel pencerene uydurman gerekiyor.

## Local (path-based)

Local modda skill kullanıcının kendi makinesinde — filesystem'de bir klasör olarak — duruyor. OpenAI Responses API'da bunu `environment.type: "local"` ile yapıyorsun ve her skill'i `name`, `description`, `path` üçlüsüyle tanıtıyorsun. Claude Code zaten doğası gereği filesystem-based çalışır; `~/.claude/skills/` veya proje altındaki `.claude/skills/` dizinindeki her skill, varsayılan olarak local'dir.

Local modun kritik özelliği veri kontrolü. Skill içeriği hiçbir zaman provider'a upload edilmiyor; sadece `name` ve `description` metadata olarak model prompt'una geçiyor, talimatın asıl gövdesi ihtiyaç anında model tarafından `cat`'leniyor — ama bu cat işlemi de senin runtime'ında çalışıyor. Hassas iş yükleri, regülasyonlu sektörler ve geliştirme sırasında hızlı iterate etmek isteyen geliştiriciler için doğru mod.

Trade-off: paylaşım için provider'ın katalog altyapısı yok. Bir skill'i ekip içinde dağıtmak istiyorsan git deposu, dahili paket sunucusu ya da manuel kopya gerekiyor. Cross-machine senkronizasyon kendi başına bir problem; sürüm bağlama da `skill_reference.version` gibi hazır değil, git tag/branch ile manuel halleniyor.

## Inline (base64 zip)

Inline mod, "upload akışına hiç girmeden tek bir isteğe skill iliştir" senaryosunun cevabı. Skill klasörünü zip'liyorsun, zip'in içeriğini base64'leyip `environment.skills` dizisi içinde gönderiyorsun. API zip'i açıp container'a mount ediyor. Hosted gibi `skill_id` yok, local gibi path yok; veri tek atışlık olarak isteğin gövdesinde geziyor.

Inline'ın doğal yeri ad hoc test ve geçici skill'ler. Bir kez kullanılacak bir prototip, bir bug repro senaryosu, eğitim demosu, deneme — yaratıp çalıştırıp atmak istediğin her şey. Versiyon kontrolü, audit ya da paylaşım gerektirmeyen küçük skill'ler için pratik bir kestirme.

Trade-off ağır: her istekte aynı zip yeniden serialize edilip network'ten geçiyor. 50 MB üst limiti ve istek başına maliyet (gerek bant genişliği gerek encode/decode CPU'su) düşünüldüğünde inline'ı production trafiğinde değil, deneysel akışlarda tutmak gerekiyor.

## Karşılaştırma tablosu

```
| Özellik              | Hosted             | Local              | Inline              |
| -------------------- | ------------------ | ------------------ | ------------------- |
| Lokasyon             | Provider sunucusu  | Kullanıcı makinesi | Request içinde      |
| Upload gerekli       | Evet (bir kez)     | Hayır              | Hayır               |
| Versiyonlama         | Var (int/"latest") | Git ile manuel     | Yok                 |
| Workspace paylaşım   | Var                | Yok (manuel)       | Yok                 |
| Data residency       | Provider           | Kullanıcı kontrolü | Provider'a iletilir |
| Maliyet (per call)   | Düşük              | Düşük              | Yüksek (yeniden zip)|
| Production uygunluğu | Yüksek             | Orta               | Düşük               |
| İdeal kullanım       | Stabil, paylaşılan | Hassas veri, dev   | Hızlı test          |
```

## Cross-platform notlar

Üç mod, OpenAI Responses API'de açıkça görünen üç ayrı bağlama yolu. Diğer platformlarda kalıplar biraz farklı: Claude API'de hosted (`skill_id` ile `container` parametresine eklenen pre-built veya custom skill) ana moddur; inline doğrudan desteklenmiyor. Claude Code, filesystem-based olduğu için tamamen local; ne hosted katalog ne inline zip var. Claude.ai arayüzünde skill zip'ini upload ediyorsun, sonra bir ID ile referans veriyorsun — yani hosted akışın UI versiyonu. OpenAI Responses API ise üçünü de tek API üzerinden açan tek platform.

## Karar kılavuzu (üç soru)

Bir skill için hangi modu seçeceğine karar verirken sırayla şu üç soruya cevap ver:

1. **Skill stabil ve birden fazla kişiyle paylaşılacak mı?** Cevap evetse hosted. Bir kez yükle, ekipteki herkes `skill_id` ile aynı sürümü çeksin. Versiyon promotion'ı `default_version` ile yönetilsin.
2. **Veri kullanıcının makinesinde kalmalı mı?** Hassas içerik, regülasyon, ya da hâlâ aktif geliştirme aşamasındaysan local. Skill içeriği hiç provider'a çıkmasın, iterasyon dosya düzeyinde olsun.
3. **Hızlı bir denemeden öteye geçmeyecek mi?** Tek seferlik bir test, geçici bir demo, kısa ömürlü bir deneyse inline. Upload akışına girme, sadece zip'i iste içine koy.

Karar verirken default'un genelde **local'den başlayıp** stabil hale geldikçe **hosted'a terfi etmek** olduğunu hatırlamak işe yarar. Inline ise sürekli kullanılan bir mod değil; günlük operasyonda istisnaî kalmalı.

## Kod örneği: aynı skill, üç mod

```python
# Hosted: önceden upload edilmiş bir skill'e id ve sürümle referans.
{"type": "skill_reference", "skill_id": "weekly-report", "version": 3}

# Local (OpenAI Responses API): filesystem path ile bağlama.
{
    "name": "weekly-report",
    "description": "Generate weekly report from JIRA",
    "path": "/Users/me/skills/weekly-report"
}

# Inline (base64 zip): bundle'ı isteğin gövdesinde gönder.
import base64
with open("weekly-report.zip", "rb") as f:
    zip_b64 = base64.b64encode(f.read()).decode()

{"type": "inline_skill", "name": "weekly-report", "data": zip_b64}
```

## Sırada ne var?

Buraya kadar tüm dersler tek bir provider'ın (Claude veya OpenAI) altyapısı üzerinden konuştu. Ama agentskills.io açık standardı yayınlandığından beri ekosistemde başka aktörler de var: LangChain, LlamaIndex, Vercel AI SDK ve diğer üçüncü parti framework'ler aynı skill formatını kendi runtime'larına bağlamaya başladı. Bir sonraki derste tam bunu açıyoruz — provider-agnostik bir skill'i farklı framework'lerle nasıl konuşturursun, uyumluluk yüzeyi nerede kırılır, hangi framework hangi modu (hosted/local/inline) doğal olarak hangi olgunlukta destekliyor.
