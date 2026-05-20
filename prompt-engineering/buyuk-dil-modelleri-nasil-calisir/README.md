# Büyük Dil Modelleri Nasıl Çalışır?

Bir LLM'e prompt yazdığında aslında ne oluyor? Model senin cümleni nasıl "anlıyor"? Neden aynı soruya bazen farklı cevaplar veriyor? Bu soruların cevaplarını bilmek, seni sıradan bir kullanıcıdan gerçek anlamda etkili bir prompt mühendisine dönüştürür. Bu yazı büyük dil modellerinin temel çalışma mantığını, teknik derinliğe girmeden ama yeterli netlikte açıklıyor.

## Token Nedir?

LLM'ler metni kelime kelime okumaz. Bunun yerine metni *token* adı verilen parçalara böler. Token, bazen bir kelimeye eşit olabilir, bazen bir kelimenin bir hecesi, bazen de sadece bir noktalama işareti.

İngilizce bir örnek: "Unhappiness" kelimesi model tarafından şu token'lara bölünebilir:

```text
["Un", "happi", "ness"]
```

Türkçe'de ise morfolojik yapı daha karmaşık olduğu için işler daha da ilginç bir hal alır. "Programlama" kelimesi büyük ihtimalle birden fazla token olarak işlenir. "Uygulamamıza" gibi ekli bir form ise daha da fazla token tüketebilir.

Bu neden önemli? Çünkü modelin sana verebildiği cevabın uzunluğu, context window'un kapasitesi ve API maliyeti — bunların hepsi kelime sayısına değil, token sayısına göre hesaplanır. 100 Türkçe kelime yazdığında, bu 130-160 token'a tekabül edebilir. Uzun ve karmaşık Türkçe metinler yazarken bunu aklında tutmak, özellikle API üzerinden çalışıyorsan önemli hale gelir.

Ayrıca modelin bir prompt'u nasıl yorumladığını anlamak için de token mantığını bilmek işe yarar. Model her token için bir sonraki olası token'ı tahmin eder — ve bu, tüm sistemin temel çalışma mekanizmasıdır.

## Tahmin Makinesi

LLM'lerin özünde son derece güçlü ama son derece basit bir fikir yatıyor: **bir sonraki token'ı tahmin et**.

Telefondaki akıllı klavyenin otomatik tamamlama özelliğini düşün. Sen "Bugün hava" yazdığında klavye "çok" veya "güzel" gibi öneriler sunuyor. Bu tahmin, yakın zamanlarda hangi kelimeleri kullandığına bakılarak yapılıyor. LLM'ler de temelde aynı şeyi yapıyor — ama milyarlarca parametreyle ve tüm internet verisi üzerinde eğitilmiş bir şekilde.

Model senin prompt'unu okur ve şu soruyu sorar (tabii ki bilinçli olarak değil): "Bu metnin devamında en olası token nedir?" Sonra o token'ı yazar, tekrar sorar, tekrar yazar. Cevabının sonuna ulaşana kadar bu döngü devam eder.

Bu mekanizma şu çok önemli gerçeği doğurur: **Modele yazdıkların, modelin cevabının başlangıç noktasıdır.** Yani senin prompt'un, modelin "doğal olarak devam edeceği" bir metin parçasıdır. Bu yüzden prompt'unu nasıl kurduğun, hangi tonu kullandığın, hangi bilgileri öne koyduğun — bunların hepsi modelin cevabını doğrudan şekillendirir.

Kötü sonuç aldığında "model anlamadı" demek yerine şunu sormak daha doğru: "Benim yazdığım metnin devamı olarak model neden bu cevabı tahmin etti?"

## Context Window (Bağlam Penceresi)

Model, her şeyi aynı anda göremez. Sadece belirli bir metin miktarını aynı anda işleyebilir — bu limite **context window** deniyor.

Bunu şöyle hayal et: Elinde kalın bir roman var ve üzerine konulmuş, sadece birkaç sayfayı gösteren bir büyüteç. Büyütecin kapsamı dışında kalan sayfalar senin için yok hükmünde — oraya bakma imkânın yok. Context window da tam olarak böyle çalışıyor: büyütecin kapsadığı alan ne kadarsa, model o kadarını görebiliyor.

Eski GPT modelleri için bu pencere 4.000-8.000 token civarındaydı. Bugünün modellerinde 128.000 token'a, hatta daha fazlasına çıkabiliyor. Ama sınır ne kadar büyük olursa olsun, yine de bir sınır var.

Bunun pratik etkisi şu: Çok uzun bir konuşma yapıyorsan, konuşmanın başındaki mesajlar context window'un dışına çıkabilir. Model o mesajları artık "göremez" ve sanki hiç söylememişin gibi davranır. Bu, modelin "unutması" diye bilinen durumun teknik açıklamasıdır — bellekle değil, context window sınırıyla ilgilidir.

Prompt mühendisliği açısından bu şu anlama geliyor: En kritik bilgileri, prompt'unun başına koy. Uzun bir belge üzerinde çalışıyorsan, context window'a nelerin girip girmediğini düşün.

## System Mesajı vs User Mesajı

Bir chatbot arayüzü açtığında veya API kullanırken, genellikle iki ayrı katman bulunur: **system mesajı** ve **user mesajı**.

**System mesajı**, modelin nasıl davranacağını, hangi rolü oynayacağını ve ne tür kısıtlamalara tabi olduğunu belirler. Konuşma boyunca sabit kalır. Kullanıcı bunu genellikle göremez.

**User mesajı**, senin gerçek isteğin — her turda yazdığın şey.

Somut bir örnek:

```text
System mesajı: "Sen deneyimli bir yazılım mimarısın. Soruları kısa ve teknik olarak yanıtla."
User mesajı:   "Microservice mimarisi ne zaman tercih edilmeli?"
```

Bu iki katmanın birbirinden ayrı olması, şu anlama geliyor: Bir uygulama geliştirdiğinde veya kendi iş akışın için özel bir AI pipeline'ı kurduğunda, sistem düzeyindeki talimatları (kalıcı kimlik, kısıtlamalar, format gereksinimleri) bir kez yazarsın ve her user mesajına otomatik olarak uygulanır.

Prompt mühendisliği öğrenirken system mesajı kavramını erken kavramak önemli. Çünkü doğru yere koyduğun bir talimat, modeli tutarlı şekilde istediğin yönde tutar.

## Temperature — Yaratıcılık ve Kesinlik Arasındaki Denge

Aynı prompt'u iki kez yazdığında neden bazen farklı cevaplar alıyorsun? Bunun cevabı **temperature** parametresinde yatıyor.

Temperature, modelin tahmin sürecine ne kadar rastlantısallık ekleyeceğini belirler. Değer 0'a yaklaştıkça model her seferinde aynı (en olası) cevabı verir — deterministik, güvenilir, öngörülebilir. Değer yükseldikçe (aralık modele göre değişir; OpenAI modellerinde 0-2, Claude gibi bazı modellerde 0-1 arasında tanımlanır), model daha az olası token'ları da seçmeye başlar — sonuç daha yaratıcı, daha çeşitli, ama bazen daha tutarsız olur.

Bu ne zaman önemli?

- Bir fact-checking görevi, matematiksel hesaplama veya sabit bir formata uyum istiyorsan: **düşük temperature**.
- Yaratıcı yazı, beyin fırtınası, alternatif fikirler istiyorsan: **yüksek temperature**.

ChatGPT gibi arayüzlerde temperature'ı doğrudan ayarlayamazsın — platform senin için bir değer seçer. Ama API üzerinden çalışırken bu parametre tam olarak senin kontrolünde.

## Bunlar Neden Önemli?

Bu mekanizmaları anlamak soyut bir bilgi gibi görünebilir. Ama prompt mühendisliğinde gerçek fark yaratan şey tam olarak bu anlayış.

Token sistemini bildiğinde, neden çok uzun prompt'ların bazen beklediğin kadar verimli olmadığını anlarsın. Tahmin mekanizmasını kavradığında, neden belirli bir üslupla yazdığın prompt'un daha iyi sonuç verdiğini fark edersin. Context window sınırını bildiğinde, uzun çalışmalarda bilgiyi nasıl yerleştirmen gerektiğini planlayabilirsin. System mesajı ile user mesajını ayırt ettiğinde, kalıcı ve geçici talimatları doğru yere koyarsın. Temperature'ı anladığında, tutarsız sonuçların neden kaynaklandığını teşhis edebilirsin.

Kötü bir sonuç aldığında artık "model çalışmıyor" demezsin. Bunun yerine şunu sorarsın: "Hangi mekanizma bu sonucu üretti ve ben bunu nasıl değiştirebilirim?" İşte bu, prompt mühendisliğinin gerçek zihniyeti.
