# RAG Nedir?

Büyük dil modelleri (LLM) etkileyici metinler üretiyor, ama bildikleri sabit bir noktada donmuş durumda. RAG — Retrieval-Augmented Generation — bu kısıtı aşmak için tasarlanmış bir mimari desen. Bu derste önce sorunun ne olduğunu anlıyoruz, sonra RAG'ın bu sorunu nasıl çözdüğünü.

## LLM'in Bilgi Sınırı

Bir dil modelini eğitmek aylarca sürer ve muazzam miktarda işlem gücü gerektirir. Bu süreç bittikten sonra modelin ağırlıkları dondurulur. Model artık yeni bir şey "öğrenemez" — internetten, şirket wiki'sinden, dün yazılan belgeden. Buna antrenman kesme tarihi (knowledge cutoff) deniyor: modelin dünyaya açık penceresinin kapandığı an.

Bir fabrika kurulumu gibi düşün bunu. Bir kütüphane binası inşa edilir, raflar en iyi kitaplarla doldurulur, kapı kapanır. Artık o kütüphaneye yeni kitap girmiyor. Okuyucular içeride var olan her kitaba erişebilir ama geçen yıl yazılan roman, geçen ay yayımlanan araştırma makalesi, bugün değişen yasa — bunların hiçbiri rafta yok.

GPT-4'ün bilgisi 2023 ortasında kesildi. Claude'un bilgisi 2025 başında. Bu tarihlerden sonra olan her şey — yeni bir kütüphane çerçevesi, şirket içi bir politika değişikliği, dün yayımlanan teknik döküman — model için yoktur. Model bu konularda cevap üretmeye çalışırsa ya "bilmiyorum" der ya da — daha tehlikeli biçimde — mantıklı görünen ama yanlış bilgiler uydurur.

## RAG Ne Yapar?

RAG üç kelimeden geliyor: Retrieval (getirme), Augmented (zenginleştirilmiş), Generation (üretim). Her kelime bir adımı temsil ediyor.

Kütüphane analojisine dönelim. Klasik bir LLM, tüm bildiklerini bellekten üretir — kütüphanenin kapısını kapatıp içerideki bilgiyle yanıt verir. RAG ise başka bir yol izler: kullanıcı soru sorar, sistem önce rafları tarar, ilgili sayfaları bulur, bu sayfaları modele verir ve model sadece bu sayfalara bakarak cevap üretir.

Adım adım:

1. **Retrieve (Getir):** Kullanıcının sorusu bir arama sorgusuna dönüştürülür. Bir belge deposunda bu soruyla en alakalı parçalar (chunk) bulunur.
2. **Augment (Zenginleştir):** Bulunan parçalar modele verilecek prompt'a eklenir. Model artık sadece eğitim verisini değil, az önce getirilen güncel bağlamı da görüyor.
3. **Generate (Üret):** Model bu zenginleştirilmiş bağlamı kullanarak yanıt üretir. Cevap hem modelin dil yeteneğinden hem de gerçek belgelerden beslenir.

Sonuç: modelin bilgi kesme tarihinden bağımsız, güncel ve doğrulanabilir yanıtlar.

## Hangi Problemleri Çözer?

RAG birkaç somut sorunu adresliyor:

**Güncel bilgi ihtiyacı.** Piyasadaki son fiyatlar, bugün yayımlanan haber, bu çeyreğin raporu — bunlar antrenman verisinde yok. RAG canlı bir belge deposuna bağlanarak bu açığı kapatır.

**Özel ve kurumsal veri.** Şirketin iç wiki'si, müşteri sözleşmeleri, ürün dokümantasyonu halka açık değil; dolayısıyla modelin eğitim verisinde yer almıyor. RAG bu özel veriyi güvenli biçimde sürece dahil eder — modeli yeniden eğitmek zorunda kalmadan.

**Kaynağa dayalı cevap.** RAG ile hangi chunk'ların kullanıldığı bilinir. Bu, "Bu bilgi nereden geldi?" sorusuna somut bir yanıt vermeyi mümkün kılar. Kullanıcıya doküman referansı gösterilebilir; denetlenebilirlik artar.

**Hallucination (uydurma) azaltma.** Model bir şey bilmediğinde bazen mantıklı görünen ama yanlış bilgi üretir. RAG modele gerçek bir kaynak verdiği için bu riski anlamlı ölçüde düşürür. Model belgeye bakıp cevaplar; belgede olmayan bir şeyi uydurmak yerine "bu belgede bu bilgi yok" diyebilir.

## RAG Ne Değildir?

RAG popüler olduğu için bazen yanlış yerde de gündeme geliyor. Birkaç net ayrım:

**RAG ≠ fine-tuning.** Fine-tuning modelin ağırlıklarını değiştiriyor — modeli yeniden eğitiyor. RAG modele dokunmuyor; sadece çalışma zamanında bağlam ekliyor. İkisi farklı problemi çözüyor.

**RAG ≠ model eğitimi.** RAG veriyi modele "öğretmiyor". Model RAG sonrasında bile o veriyi kalıcı olarak "bilmiyor" — sadece her soruda bağlam olarak görüyor. Belge deposundan kaldırılan bir bilgi bir sonraki sorguda artık görünmez.

**RAG ≠ sonsuz bağlam.** Context window büyüdükçe "her şeyi modele ver" cazip görünüyor. Ama 1000 sayfalık dokümantasyon bile bugünün büyük context window'larını doldurur, maliyeti patlatır ve modelin dikkatini dağıtır. RAG sadece ilgili parçaları seçerek bu sorunu çözer.

RAG'ın neden var olduğunu anladık. Sıradaki sorumuz: fine-tuning veya prompt stuffing ile farkı ne?
