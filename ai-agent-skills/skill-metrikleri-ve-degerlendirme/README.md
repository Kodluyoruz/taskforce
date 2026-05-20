# Skill Metrikleri ve Değerlendirme

Bir skill'i yazıp deploy etmek işin ortasıdır; gerçek soru sonra başlar. Bu skill bir hafta sonra hâlâ çalışıyor mu? Model gerçek prompt'larda onu çağırıyor mu, yoksa fısıltılı kelimeleri kaçırıp boşa mı yazdın? Description'a tek bir kelime eklediğinde tetiklenme oranı nereye gidiyor? "Hissi iyi" cümlesiyle yönetilen skill'ler bir süre sonra çürür çünkü yazar değişir, kullanıcı dili kayar, model versiyonu güncellenir. Ölçüm olmadan bu kaymayı görmek imkânsız. Bu derste skill performansını rakamla takip etmenin altı metriğini, veriyi nereden topladığını, eval ve A/B disiplinini, production observability'yi ve sık yapılan hataları geçiyoruz.

## Ana metrikler

Bir skill için tek bir "iyilik" sayısı yok; en az altı eksende bakmak gerekir.

**1. Trigger hit rate.** Skill'in çağrılması gereken prompt'ların kaçında gerçekten tetiklendiği. Formül basit: tetiklenen / hedef prompt sayısı. Düşük hit rate, description'ın çok dar ya da belirsiz olduğunu (undertriggering) söyler. Yüksek hit rate'i pozitif sayma; yanlış pozitifleri saymıyorsan tek başına aldatıcıdır.

**2. Precision ve recall.** ML eval'lerinden ödünç alınan iki rakam, description optimizasyonunun en kullanışlı çiftidir.
- **Precision:** Skill çağrıldı, gerçekten çağrılması gereken bir prompt'tu mu? Düşük precision overtriggering — description çok geniş, alanın dışına taşıyor.
- **Recall:** Skill'in çağrılması gereken prompt'lardan kaçında çağrıldı? Düşük recall undertriggering — anahtar kelime eksik, "Use when…" listesi yetersiz.

İki rakam arasında doğal bir gerilim var: description'ı genişlettikçe recall yükselir ama precision düşer. Hangi yöne kayacağını skill'in maliyetine göre karar verirsin: yanlış pozitifin pahalı olduğu yerde precision'a, kaçırmanın pahalı olduğu yerde recall'a ağırlık ver.

**3. Execution success rate.** Skill tetiklendi diyelim, başarılı output üretti mi? Failed run / total run oranı bu soruya cevap verir. Düşük success rate genellikle üç nedene dayanır: script bug, edge case açığı, bağımlılık eksikliği.

**4. Latency.** Skill'in çağrıldığı andan output'a kadar geçen toplam süre. Üç bileşeni var: SKILL.md body okuma, executable script execution, LLM round trip. P50, p95 ve p99 ayrı ayrı izlenir; medyan iyi olup p99 patlıyorsa edge case'lerde takılan bir akış var demektir.

**5. Token consumption.** Her skill çağrısının bütçeye etkisi. Metadata + body + Level 3 referansları + script çıktısı + final response — hepsi token. Anthropic API yanıtında `usage.input_tokens`, `usage.output_tokens` ve `usage.cache_read_input_tokens` üç ayrı eksen olarak gelir. Cache hit oranı düşükse aynı body sürekli yeniden gönderiliyordur; prompt caching'i kontrol et.

**6. User satisfaction.** Subjektif ama atılmamalı. Thumbs up/down, oturum sonu anket, ya da kullanıcının çıktıyı ne kadar düzelttiğini ölçen edit distance. Diğer beş metrik iyi görünüp kullanıcı tatmin olmuyorsa burada sinyal vardır.

## Veriyi nereden toplarsın

Metrik tasarımı ne kadar iyi olursa olsun ham veri yoksa hesaplayamazsın. Toplama noktaları platformuna göre değişir.

- **Anthropic Messages API.** Her response'ta `usage` field'ı vardır: input/output token'ları ve cache okuma rakamı oradan gelir. Tool call'ları response içinde structured durur, hangi skill'in tetiklendiğini iteration'la çıkarırsın.
- **OpenAI Responses API.** `response.usage` token'ları, `response.output` tool call trace'ini verir.
- **Claude Code.** Lokal geliştirmede `--verbose` adım adım trace döker. Production için log toplayıcına yönlendirmen gerekir.
- **Üçüncü parti platformlar.** LangSmith, LangFuse, Helicone gibi agent observability ürünleri her LLM çağrısını dashboard'a sokar; skill ID'yi metadata olarak geçtiğinde "per skill" view'lar gelir.

## A/B test pattern

Description değişiklikleri için en disiplinli yol kontrollü deney. Aynı skill'in iki description varyantını paralel deploy et, gelen kullanıcı isteklerini rastgele böl (yarısına v1, yarısına v2 ile cevap ver), her iki kolun hit rate ve success rate'ini karşılaştır. Yeterli örnek toplandığında kazanan default'a alınır.

```python
import random

DESCRIPTIONS = {
    "v1": "Generate weekly report from JIRA tickets and GitHub PRs.",
    "v2": "Generate weekly status report. Use when user asks for sprint review or team status update."
}

def serve_request(prompt):
    variant = random.choice(["v1", "v2"])
    triggered = check_skill_trigger(prompt, DESCRIPTIONS[variant])
    log(prompt=prompt, variant=variant, triggered=triggered)
```

İki uyarı: örneklem küçükken farklara güvenme (en az birkaç yüz çağrı gerekir), ve her seferinde tek değişken değiştir.

## Eval framework: golden prompt seti

Production'a çıkmadan önce skill'i sabit bir test seti üzerinde koşturmak, sürpriz regresyonları yakalar. Golden set şöyle kurulur: 30-50 pozitif prompt (skill tetiklenmeli), 30-50 negatif prompt (tetiklenmemeli), ek olarak edge case'leri kapsayan birkaç düzine input. Her release'den önce eval suite çalışır ve trigger doğruluğu, success rate, latency ve token consumption için baseline'a göre delta raporu üretir. CI pipeline'a bağlandığında description'ı yanlışlıkla bozan bir PR merge edilmeden önce yakalanır.

## Production observability

Lokal eval ile production aynı şey değil. Gerçek kullanım dağılımı her zaman test setinden geniştir. Üretimde minimum dashboard şu paneleri içerir:

- Trigger hit rate, per skill, günlük rolling.
- Latency p50/p95/p99, per skill.
- Error rate, threshold üzerinde alarm.
- Token consumption trendi, anomalileri yakalamak için.
- Yeni release sonrası önceki sürümle karşılaştırma view'ı.

Token izleme için minimal kurulum:

```python
import anthropic

client = anthropic.Anthropic(
    default_headers={"anthropic-beta": "skills-2025-10-02"}
)

response = client.messages.create(
    model="claude-opus-4-7",
    container={"skill_ids": ["pdf"]},
    messages=[{"role": "user", "content": "..."}]
)

usage = response.usage
print(f"Input: {usage.input_tokens}")
print(f"Output: {usage.output_tokens}")
print(f"Cache hit: {usage.cache_read_input_tokens}")
```

Bu üç sayıyı zaman serisi olarak biriktirip skill ID'siyle gruplamak production observability'nin temelidir.

## Yaygın değerlendirme hataları

Pratikte tekrar tekrar görülen yanlışlar:

- **Sadece "çalışıyor mu" diye bakmak.** Manuel olarak iki prompt'la test edip "tamam" demek. Hit rate ve precision/recall yoksa skill'in tetiklenme davranışı kontrol dışıdır.
- **Eval suite olmadan deploy.** Her release'de aynı 50 prompt'u koşturmuyorsan, bir gün description değişiminin başka skill'leri tetiklediğini kullanıcıdan duyarsın.
- **Token maliyetini görmezden gelmek.** Ucuz görünen bir skill, gün sonunda büyük bir bütçe ısırığı çıkarabilir; trend olmadan fark edilmez.
- **A/B testsiz description değişikliği.** "İyileştirdim" diye sahaya sürülen yeni description'lar bazen sessizce hit rate'i bozar; karşılaştırma yoksa fark edilmez.
- **Yalnız subjektif feedback'e yaslanmak.** Kullanıcı yorumları değerli ama küçük bir grubun sesi gerçek dağılımı temsil etmez. Sayılarla birlikte oku.

## Sırada: güvenlik ve üretim

Metrik altyapını kurduktan sonra elinde "skill iyi çalışıyor mu?" sorusunun cevabı var. Ama bir sonraki katmanı kaçırırsan kötü sürpriz seni bekler: skill yanlış kişilerin eline geçerse, prompt injection ile manipüle edilirse, hassas veri sızdırırsa, en güzel metrikler bile seni kurtarmaz. Sıradaki section güvenlik ve üretim konularını açıyor — tehdit modeli, prompt injection, data exfiltration, audit ve uyumluluk. Section 6'nın ilk dersi skill güvenlik tehdit modeliyle başlıyor.
