# AI Agent Nedir?

Bir LLM'e (büyük dil modeli) "Paris'in nüfusu nedir?" diye sorduğunda sana bir cevap döner. Tek seferlik bir tahmin: girdi gider, çıktı gelir, iş biter. AI agent ise aynı modeli farklı bir kalıpta kullanır. Modele bir hedef verirsin; o, bu hedefe ulaşmak için sırayla tool'lar çağırır, her çağrının sonucunu görür, sonraki adımına ona göre karar verir. Yani agent, "tek atış" çalışan bir model değil; **bir döngü içinde tool kullanan** bir modeldir. Bu derste agent ile düz LLM çağrısı arasındaki farkı, otonomi spektrumunu, tool use mantığını ve agent'ların karar döngüsünü tek tek açacağım.

## LLM ile AI agent arasındaki fark

Bir LLM kendi başına dış dünyaya dokunamaz. Sana metin üretir, ama Wikipedia'yı açamaz, veritabanını sorgulayamaz, dosya yazamaz. Bilgisi eğitildiği veriyle sınırlıdır ve hareketi tek bir çıktıyla biter.

AI agent ise bir LLM'in etrafına üç şey ekler:

1. **Tool'lar:** Modelin çağırabileceği fonksiyonlar. Web arama, dosya okuma, API çağrısı, kod çalıştırma, e-posta gönderme — pratik olarak ne yazarsan o.
2. **Bir döngü:** Modelin ürettiği çıktıyı çalıştıran, sonucu modele geri veren ve bir sonraki adımı modele tekrar sorduran yapı.
3. **Bir hedef ve durma koşulu:** Görev tamamlandığında ya da bir limit aşıldığında döngünün kapanması.

Anthropic'in "Building Effective Agents" yazısında ve Simon Willison'ın 2025'te yaygınlaştırdığı tanımda agent şöyle anlatılır: **"Bir hedefe ulaşmak için döngü içinde tool çalıştıran bir LLM."** Kısa ve net. Hatırlaman gereken kalıp bu. Sohbet botu bir cevap üretir; agent bir iş bitirir.

## Otonomi spektrumu

"Agent" tek bir nokta değil. Sistemler ne kadar bağımsız karar verebiliyorsa o kadar agentic sayılır. Spektrumun uçlarını şöyle düşünebilirsin:

- **Klasik chatbot.** Kullanıcı yazar, model cevaplar. Dışarıya dokunmaz, plan yapmaz. 2022'nin ilk ChatGPT'si bu kategoride.
- **Tool kullanan asistan.** Model gerektiğinde hesap makinesi, arama ya da kod çalıştırıcı çağırır. Ama büyük resmi hâlâ kullanıcı yönlendirir; her adımda "şimdi şunu yap" demek gerekir. Bir RAG (Retrieval-Augmented Generation) sohbet uygulaması genelde buraya düşer.
- **Reactive agent.** Bir tetikleyici (kullanıcı isteği, webhook, zamanlanmış olay) geldiğinde birkaç adım otonom çalışır, sonra durur. Örnek: bir PR açıldığında otomatik kod analizi yapan GitHub bot'u.
- **Proactive autonomous agent.** Sadece tepki vermez; izlediği duruma bakar, kendi inisiyatifiyle harekete geçer. Örnek: kullanıcının takvimini izleyip kendiliğinden toplantı önerileri hazırlayan bir asistan.

Bu iki eksen — reactive (çevreye anında tepki) ve proactive (kendiliğinden eyleme geçme) — yapay zeka literatüründe yeni bir fikir değil; klasik AI ders kitaplarından beri var. Modern LLM agent'larının yaptığı şey, ikisini birden tek bir döngüde toplamak.

## Bir agent nasıl çalışır?

Çekirdek mantık çok sade: **algıla → planla → uygula → gözlemle.** Sonra başa dön.

1. **Algıla.** Kullanıcının isteği ve şu ana kadarki bağlam modele verilir.
2. **Planla.** Model bir sonraki adımda ne yapacağına karar verir. Çoğu durumda multi-step reasoning yapar: büyük görevi alt görevlere böler.
3. **Uygula.** Model, bir tool'u çağırmak için **function calling** üretir — yapılandırılmış bir formatta "şu fonksiyonu, şu argümanlarla çağır" der. Burası kritik: model fonksiyonu kendisi çalıştırmaz, sadece çağrılmasını talep eder. Asıl çağrıyı yapan, modeli saran agent çerçevesidir.
4. **Gözlemle.** Tool'un çıktısı modele geri verilir. Model bu yeni bilgiyle bir sonraki adıma karar verir.

Bu döngü, görev bittiğine model karar verene kadar ya da bir adım/zaman limiti aşılana kadar tekrarlanır. Reasoning + Acting'i (ReAct) iç içe çalıştırmak — yani modelin "şu anda ne düşündüğünü" ve "şu anda ne yaptığını" aynı akışta üretmesi — bugün hemen her agent framework'ünün temel desenidir.

## Basit bir agent iskeleti

Aşağıdaki örnek pseudo-Python. Gerçek bir LLM çağrısı yapmıyor; sadece döngünün şeklini görmen için.

```python
# Basit bir agent döngüsü.
# Gerçek hayatta llm_cagir bir API'ye HTTP isteği atar (Anthropic, OpenAI, vs.).

def web_ara(sorgu: str) -> str:
    # Gerçekte bir arama API'sine bağlanır.
    return f"'{sorgu}' için sonuçlar..."

def hesapla(ifade: str) -> str:
    return str(eval(ifade))

TOOLS = {"web_ara": web_ara, "hesapla": hesapla}

def agent_calistir(hedef: str, max_adim: int = 10) -> str:
    gecmis = [{"rol": "kullanici", "icerik": hedef}]

    for _ in range(max_adim):
        # 1) Algıla + planla: model geçmişe bakar, bir sonraki adıma karar verir.
        cevap = llm_cagir(gecmis, tools=TOOLS.keys())

        # 2) Model "bittim" diyorsa final cevabı döndür.
        if cevap.get("final"):
            return cevap["icerik"]

        # 3) Uygula: modelin istediği tool'u, istediği argümanlarla çağır.
        tool_adi = cevap["tool"]
        sonuc = TOOLS[tool_adi](**cevap["argumanlar"])

        # 4) Gözlemle: sonucu modele geri ver, döngü baştan başlasın.
        gecmis.append({"rol": "tool", "icerik": sonuc})

    return "Adım limiti aşıldı."
```

Dünyadaki neredeyse her agent framework'ünün — Claude Agent SDK, OpenAI Agents SDK, LangChain — kalbi budur. Bir döngü, bir tool seti, bir durma koşulu. Framework'ler bunun üstüne hata yönetimi, paralel tool çağrıları, agent'lar arası handoff, tracing ve guardrail gibi katmanlar ekler. Ama özünde aynı şey: tools in a loop.

## Sırada ne var?

Bu iskeleti bir kez kurduğunda elinde "her şeyi yapmaya çalışan" bir genel amaçlı agent olur. İyi haber: model akıllı. Kötü haber: gerçek işler genelde akıl değil, **alana özgü bilgi** ister. Şirketinin marka rehberi, ekibinin PR şablonu, bir API'nin kendine özgü kuralları, bir veritabanının şeması — model bunları bilmiyor, sen de her seferinde prompt'a yapıştırmak istemiyorsun.

İşte tam burada **Agent Skills** devreye giriyor: agent'a "şu klasörü oku, böyle bir görev gelirse bu adımları izle, gerekirse bu script'i çalıştır" diyen modüler uzmanlık paketleri. Genel amaçlı bir agent, doğru skill'lerle birlikte senin alanında uzmanlaşmış bir uzmana dönüşüyor. Bir sonraki derste tam olarak bunu açıyoruz: Agent Skills nedir, nasıl yapılandırılır, neden agent dünyasının son birkaç yıldaki en pratik fikirlerinden biri haline geldi.
