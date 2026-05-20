# Prompt Engineering Nedir?

Bir yapay zeka modeline bir şey söylüyorsun. O da sana bir şey söylüyor. Ama bazen aldığın yanıt tam istediğin gibi olmuyor — yüzeysel, belirsiz ya da konuyu tamamen kaçırmış. İşte bu farkın büyük bölümü modelin yetersizliğinden değil, yazdığın prompt'tan kaynaklanıyor.

## Prompt Nedir?

Prompt, bir AI modeline gönderdiğin metin girdisinin adı. Basit bir soru da olabilir, uzun bir talimat seti de. Bir bağlam açıklaması, bir rol tanımı, bir örnek liste — bunların hepsi prompt'un parçası olabilir.

Günlük kullanımda çoğu insan prompt'u sadece "soru sormak" olarak görüyor. Ama aslında bir prompt; soru, talimat, bağlam ve kısıtlamaların bir kombinasyonu. Modele ne istediğini söylerken aynı zamanda nasıl istediğini, ne kadar istediğini ve neyi istemediğini de aktarıyorsun.

Prompt engineering ise tam olarak bu: Modelden daha iyi, daha tutarlı, daha kullanılabilir sonuçlar almak için bu girdiyi bilinçli ve sistematik biçimde tasarlamak.

## "Zeki Ama Yeni Çalışan" Analojisi

Şöyle bir senaryo düşün: Çok yetenekli, geniş bilgi birikimine sahip bir uzmanı işe aldın. İlk günü. Her şeyi biliyor — hukuk, finans, yazılım, pazarlama — ama senin şirketini tanımıyor. Senin tercihlerini, kısıtlamalarını, hedef kitlenin kim olduğunu bilmiyor.

Ona "bir şeyler yap" dersen tahmin eder. Belki işe yarar, belki yaramaz. Ama ona şunu dersen: "Bu müşteri için bir sunum hazırla. Sektör: SaaS. Hedef: C-level yöneticiler. Süre: 10 dakika. Teknik detaylardan kaçın, ROI'ye odaklan." — o zaman tam olarak istediğin sonucu alma ihtimalin çok daha yüksek.

LLM'ler de böyle çalışıyor. Sonsuz bilgiye erişimleri var, ama senin bağlamını bilmiyorlar. Her prompt bir token dizisine dönüşüyor ve model bu diziyi işleyerek yanıt üretiyor — ama hangi yönde gittiği büyük ölçüde sana bağlı. Prompt engineering, bu uzmana nasıl briefing yapacağını öğrenmek demek.

## Neden Önemli? Somut Fark

Aynı model, farklı prompt'larla gece ile gündüz kadar farklı çıktılar üretebilir. Bu soyut bir iddia değil — kendi deneyleriyle görebileceğin bir şey.

Birkaç örneğe bakalım:

---

**Örnek 1: Genel Kullanım**

```text
Kötü prompt: "Bir şey yaz."
```

Bu prompt'tan modelin ne üreteceğini tahmin etmek imkânsız. Bir şiir mi? Bir e-posta mı? Hangi tonda, kime yönelik, hangi uzunlukta?

```text
İyi prompt: "Bir ürün yöneticisi için 5 maddelik haftalık durum raporu şablonu oluştur. Her madde: tamamlanma yüzdesi, karşılaşılan bloker ve bir sonraki adımı içermeli. Ton profesyonel ama kısa olsun."
```

İkinci versiyon; hedef kitleyi, formatı, içerik yapısını ve tonu belirtiyor. Model artık tahmin etmek zorunda değil — sadece talimatları uyguluyor.

---

**Örnek 2: Teknik Kullanım**

```text
Kötü prompt: "Kodu düzelt."
```

Hangi kodu? Neyi düzeltmesi gerekiyor? Hata nerede? Model sana genel bir analiz yapabilir ya da tamamen yanlış bir varsayımla çalışmaya başlayabilir.

```text
İyi prompt: "Aşağıdaki Python fonksiyonunda bir bug var: girdi negatif sayı olduğunda yanlış sonuç veriyor. Bug'ı tespit et, düzelt ve hangi satırı neden değiştirdiğini tek cümleyle açıkla."
```

Burada problem tanımlanmış, beklenti belirtilmiş, istenen çıktının formatı da netleştirilmiş. Model daha az enerji harcayarak, daha doğrudan bir yanıt üretiyor.

---

Bu örneklerdeki fark sadece "daha fazla kelime yazmak" değil. Doğru bilgiyi, doğru yerde vermek. Modele bağlam, kısıt ve format vermek — bu üç şey prompt kalitesinin temel belirleyicileri.

## Prompt Engineering Bir Beceri, Sihir Değil

Çoğu insan bir prompt yazıyor, sonucu beğenmiyor ve "bu yapay zeka işe yaramıyor" diyor. Oysa iyi bir prompt'a genellikle ilk denemede ulaşamıyorsun. Tıpkı iyi bir arama sorgusu yazmak, iyi bir e-posta taslağı çıkarmak ya da iyi bir briefing hazırlamak gibi — pratik ve iterasyon gerektiriyor.

Prompt engineering'in püf noktası şu: Sonucu değerlendirip geri dönebilmek. "Bu yanıtta ne eksik? Modeli hangi yönde yönlendirmedim? Hangi bağlamı verseydim daha iyi sonuç alırdım?" Bu sorular seni her denemede bir adım ileri taşıyor.

Bazı insanlar "doğru kelimeleri bilen kişiler" gibi görüyor bu işi. Ama gerçekte prompt engineering; deneme, gözlem ve ayarlama döngüsüdür. Bir modelin nasıl düşündüğünü anladıkça, ona nasıl konuşacağını da öğreniyorsun.

Bir diğer önemli nokta: Prompt engineering, sadece chatbot'larla konuşmak değil. Uygulamalara gömülü system message'lar yazmak, otomasyon pipeline'ları kurmak, birden fazla AI adımını birbirine bağlamak — bunların hepsi prompt tasarımına dayanıyor. Bugün küçük bir prompt farkıyla konuşma kalitesini iyileştiriyorsun; ilerleyen aşamalarda bu bilgiyi üretim sistemlerine taşıyabiliyorsun.

## Bu Kursta Ne Öğreneceksin?

Bu kursta şunları öğreneceksin:

- **Temel teknikler:** Bağlam verme, rol tanımlama, format belirleme, kısıt ekleme
- **Yapı ve format:** Prompt'u nasıl organize etmeli, hangi bilgiler nereye gitmeli
- **İleri yöntemler:** Chain-of-thought, few-shot prompting, sistem düzeyinde prompt tasarımı
- **Pratik sistemler:** Gerçek kullanım senaryolarında prompt'ları nasıl test eder, ölçersin ve geliştirirsin

Her bölüm örneklerle desteklenmiş, uygulanabilir içeriklerden oluşuyor. Sadece kavramları öğrenmekle kalmayacaksın — bunları kendi projelerine nasıl uyarlayacağını da göreceksin.
