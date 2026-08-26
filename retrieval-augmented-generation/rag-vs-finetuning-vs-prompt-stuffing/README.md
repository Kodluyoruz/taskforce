# RAG vs Fine-tuning vs Prompt Stuffing

RAG'ın ne olduğunu biliyoruz. Ama pratikte soru şu oluyor: "Bu sorunu RAG ile mi, fine-tuning ile mi, yoksa sadece her şeyi prompt'a mı koyarak çözeyim?" Her üçü de dile getirildiğinde gerçekten farklı şeyler kastediliyor ve doğru seçim senaryon ne gerektiriyor ona bağlı. Bu derste üçünü yan yana koyup nerede hangisinin mantıklı olduğunu açıklıyorum.

## Prompt Stuffing (Bağlam Doldurma)

En basit yaklaşım: elindeki tüm belgeleri, tüm veriyi al, kullanıcı sorusunun önüne yapıştır, modele gönder.

```
Sistem: Aşağıda şirket politika belgelerimiz yer almaktadır.
[250 sayfalık PDF içeriği...]

Kullanıcı: İzin politikamız ne?
```

Bu yaklaşım küçük ve sabit veri kümeleri için gerçekten işe yarar. Ürün kataloğun 3 sayfa, fiyat listelerin değişmiyor, her sorguda tümünü eklemek maliyetsiz — o zaman prompt stuffing en sade çözüm. Karmaşıklık yok, pipeline yok, vektör DB yok.

Ama ölçeklendikçe sorunlar çıkıyor:

**Token limiti.** GPT-4o'nun 128K, Claude Sonnet'in 200K token context window'u var. Muazzam görünüyor, ama 1000 sayfalık şirket wikisi, 10 yıllık müşteri kayıtları, tüm destek bilet geçmişi — bunlar bu limitleri kolayca aşar.

**Maliyet.** Context window'una ne kadar token doldurursan o kadar ödersin. Her sorguda 100K token göndermek, her sorguda birkaç sent anlamına gelir. Milyonlarca sorgu için bu hızla sürdürülemez bir maliyet yapısına dönüşür.

**Dikkat kalitesi.** Araştırmalar gösteriyor ki context window'u çok doldurmak modelin dikkatini dağıtıyor. "Lost in the middle" (ortada kaybolma) problemi: modeller uzun bağlamlarda ortada kalan bilgiye daha az dikkat ediyor.

## Fine-tuning

Fine-tuning, önceden eğitilmiş bir modeli kendi verilerinle yeniden eğitmek demek. Model temel yeteneklerini korurken senin verilerinle ağırlıklarını güncelliyor.

Fine-tuning gerçekten mantıklı olduğu yer: **üslup ve davranış değişikliği**. Modelin her zaman belirli bir formatta cevap vermesini istiyorsun. Hukuki dil kullanmasını, teknik jargon yerine sade Türkçe konuşmasını, belirli bir kişilikte yanıt üretmesini istiyorsun. Bunlar için fine-tuning doğru araç.

Ama **bilgi güncellemek için fine-tuning kötü bir seçim**. Neden?

Birincisi, pahalı. GPT-4 düzeyinde bir modeli fine-tune etmek yüzlerce-binlerce dolar GPU maliyeti ve saatler süren eğitim anlamına gelir. Her veri güncellemesinde bunu tekrarlamak sürdürülebilir değil.

İkincisi, yavaş. Verin değiştiğinde modeli yeniden eğitmek gerekiyor. Haber sitelerinin verisini fine-tuning ile güncel tutmaya çalışıyorsun diyelim — her gün yeniden eğitim mi yapacaksın?

Üçüncüsü, "öğrenme" sanıldığı gibi çalışmıyor. Fine-tuning ile modele veri ezberlettirmeye çalışmak, "catastrophic forgetting" (yıkıcı unutma) riskini getiriyor: yeni veriler için ağırlıklar güncellenirken eski bilgiler bozulabiliyor.

Fine-tuning'in yeri gerçek ama sınırlı: davranış, üslup, format değişikliği. Bilgi ekleme veya güncelleme değil.

## RAG

RAG modele dokunmuyor. Bunun yerine çalışma zamanında — her sorguda — ilgili bilgiyi dinamik olarak getirip bağlama ekliyor.

**Avantajlar:**

- **Veri güncellenebilir.** Belge deposunu güncellediğinde model anında bu bilgiye erişir. Yeniden eğitim yok, bekleme yok.
- **Kaynak gösterilebilir.** Hangi belgenin kullanıldığı bilinir. Kullanıcıya "Bu bilgi X kaynağından alındı" denilebilir.
- **Ölçeklenebilir.** Milyonlarca belge vektör DB'ye eklenebilir. Model sadece ilgili birkaç chunk'ı görür.
- **Maliyet kontrolü.** Sadece ilgili chunk'lar prompt'a ekleniyor; tüm belge değil.

**Dezavantajlar:**

- **Retrieval pipeline karmaşıklığı.** Artık sadece bir LLM çağrısı yapmıyorsun. Embedding modeli, vektör DB, chunk stratejisi, similarity threshold — bunların hepsini yönetmen gerekiyor.
- **Latency.** Her sorguda önce retrieval adımı çalışıyor. Bu ek gecikme anlamına geliyor. İyi optimize edilmiş sistemlerde fark küçük ama gerçek.
- **Retrieval kalitesi kritik.** Yanlış chunk getirilirse model yanlış bağlamdan yanıt üretir. "Garbage in, garbage out" burada da geçerli.

## Karar Tablosu

Her senaryonun doğru yaklaşımı var. Hangisini seçeceğini şu tablodan başlayarak düşünebilirsin:

| Senaryo | Yaklaşım |
|---------|----------|
| 1000 sayfalık şirket dokümantasyonu | RAG |
| Belirli bir yazım tonu kazandırma | Fine-tuning |
| 3 sayfalık sabit ürün kataloğu | Prompt stuffing |
| Gerçek zamanlı haber bilgisi | RAG |
| Model davranışını değiştirme | Fine-tuning |

Tablo kaba çizgiler çiziyor. Pratikte karışık senaryolar da var: hem belirli bir üslup hem de kurumsal bilgiye erişim gerekiyorsa fine-tuning + RAG birlikte kullanılabilir. Ama başlangıç noktası olarak bu tablo çoğu karar için yeterli.

Kararı verdik: RAG kullanacağız. Peki içten nasıl çalışıyor?
