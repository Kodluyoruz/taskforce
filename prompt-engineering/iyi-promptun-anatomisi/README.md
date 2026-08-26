# İyi Prompt'un Anatomisi

Bir prompt yazdığında aslında modele bir görev tanımı veriyorsun. Ama çoğu insan bu görev tanımını eksik ya da belirsiz bırakır. Bunun sonucu hayal kırıklığıdır: model farklı bir şey üretir, sen tekrar yazarsın, yine olmaz, sonunda "bu AI pek işe yaramıyor" dersin. Oysa sorun genellikle modelde değil, prompt'un yapısındadır.

İyi bir prompt dört temel bileşenden oluşur: **Kimlik**, **Talimat**, **Örnek** ve **Bağlam**. Bu dört bileşeni bir arada kullandığında, model ne yapması gerektiğini tam olarak bilir. Hepsini her prompt'a eklemek zorunda değilsin — basit bir soruda sadece talimat yeterli olabilir. Ama karmaşık ve özel bir çıktı istediğinde bu dört bileşenin hepsi devreye girer.

## 4 Bileşen

Önce kısa bir tanım:

- **Kimlik**: Modele hangi rolü oynayacağını söylediğin kısım.
- **Talimat**: Modelden tam olarak ne istediğin — görevin kendisi.
- **Örnek**: İstediğin çıktının nasıl görünmesi gerektiğini gösteren input/output çiftleri.
- **Bağlam**: Kim olduğun, neden sorduğun, hangi kısıtlamaların geçerli olduğu.

Şimdi her birini ayrı ayrı inceleyelim.

## Kimlik

Modele bir rol verdiğinde, o role özgü bilgi derinliğini ve konuşma üslubunu aktive etmiş olursun. "Sen deneyimli bir X'sin." cümlesi, modelin hem ne söyleyeceğini hem de nasıl söyleyeceğini şekillendirir.

Bazı kaynaklarda bu bileşen doğrudan "Rol" olarak da adlandırılır — ikisi aynı şeyi ifade eder. Bu kursta ilerleyen bölümlerde "Rol ve Bağlam Verme" başlığı altında daha ayrıntılı ele alınıyor.

Kimlik bileşeni özellikle şu durumlarda işe yarar:

- Uzmanlık gerektiren görevler (hukuk, mühendislik, tıp, finans)
- Belirli bir ton isteyen yazı işleri (akademik, samimi, teknik)
- Hedef kitlenin net olduğu durumlar (çocuklara anlatma, yöneticiye sunum)

Ama her prompt'a kimlik eklemek zorunda değilsin. "İstanbul'un nüfusu nedir?" gibi basit bir soruda kimlik gereksizdir — hatta dikkat dağıtır.

Bir before/after örneği:

```text
Kimlik olmadan:
"Bir CV hazırla."

Kimlik ile:
"Sen 10 yıllık İK deneyimine sahip bir kariyer danışmanısın. Aşağıdaki bilgileri kullanarak güçlü bir CV hazırla."
```

İkinci prompt çok daha spesifik bir referans çerçevesi çiziyor. Model hangi standartlara göre "iyi" CV tanımladığını biliyor.

## Talimat

Talimat, prompt'un çekirdeğidir. Modelden tam olarak ne istediğini buraya yazarsın. Talimat ne kadar spesifik ve ölçülebilir olursa, sonuç o kadar tahmin edilebilir olur.

Yaygın hata: Ne istediğini ve ne istemediğini aynı cümleye karıştırmak. Ya da çok geniş bir eylem kelimesi kullanmak: "anlat", "yaz", "açıkla" — bunlar tek başına yeterince spesifik değil.

```text
Belirsiz talimat:
"Bunu açıkla."

Net talimat:
"Bu kavramı, daha önce yazılım geliştirmemiş bir ürün müdürüne 3 paragrafta açıkla. Her paragraf tek bir ana fikir içersin."
```

Net bir talimat yazmanın üç sorusu: (1) Model ne üretmeli? (2) Nasıl bir formatta? (3) Ne kadar uzun/kısa?

Bu üç soruya cevap verdiğinde talimatta belirsizlik kalmaz.

## Örnek (Few-Shot)

Bazen en iyi talimat bile istediğin çıktıyı tam olarak tarif edemez. O zaman örnek göstermek en kısa yoldur. Bu tekniğe **few-shot prompting** denir — az sayıda örnek vererek modele pattern'i öğretirsin.

Örnekler şu soruyu cevaplar: "İstediğin şey tam olarak böyle mi görünüyor?"

Tek bir input/output çifti bile model davranışını belirgin şekilde değiştirebilir. İki veya üç örnek verdiğinde tutarlılık daha da artar. Özellikle şu durumlarda örnek vermek faydalıdır:

- Alışılmadık bir format istiyorsan
- Belirli bir ton ya da üslup hedefliyorsan
- Model'in "doğal" cevabı istediğinden farklıysa

```text
Örneksiz talimat:
"Kullanıcı yorumlarını olumlu/olumsuz olarak etiketle."

Örnekli talimat:
"Kullanıcı yorumlarını olumlu veya olumsuz olarak etiketle.

Yorum: 'Ürün beklediğimden çok daha iyi çıktı, kesinlikle tavsiye ederim.'
Etiket: Olumlu

Yorum: 'Kargo 2 hafta geç geldi ve ürün hasarlıydı.'
Etiket: Olumsuz

Yorum: 'Fiyatı biraz yüksek ama kaliteli bir ürün.'
Etiket: ?"
```

## Bağlam

Bağlam, modelin kendi başına bilemeyeceği ama seni anlayabilmek için bilmesi gereken bilgilerdir: kim olduğun, neden sorduğun, hedef kitlen kim, hangi kısıtlamalar geçerli.

Bu bileşen çoğunlukla göz ardı edilir. Ama bağlamı iyi verdiğinde model sana çok daha uygun bir cevap üretir.

Düşün: Aynı soruyu soran iki farklı kişi — biri ilk kez girişim kurmaya çalışan biri, diğeri 5 yıldır sektörde olan biri. İkisine de aynı cevabı vermek mantıklı olmaz. Modele bağlamı verdiğinde, hangi "kişiye" cevap vereceğini bilir.

```text
Bağlamlı bir prompt:
"Ben 5 yıllık mobil geliştirme deneyimine sahip bir freelancer'ım. İlk SaaS ürünümü piyasaya sürmeyi planlıyorum. Fiyatlandırma stratejisi konusunda ne düşünmem gerektiğini anlat. Hedef kitlem küçük işletmeler."
```

Bu prompt, modele şu bilgileri veriyor: kullanıcının arka planı, ne yapmak istediği, ne tür bir bilgiye ihtiyaç duyduğu ve kimin için planlama yaptığı. Model bu bilgiler olmadan çok daha genel, herkese hitap eden bir cevap üretirdi.

## Hepsini Bir Araya Getir

Şimdi dört bileşeni de içeren tam bir prompt örneğine bakalım. Her bölüm etiketlenmiş halde:

```text
[KİMLİK]
Sen deneyimli bir UX yazarısın.

[TALİMAT]
Aşağıdaki teknik hata mesajını, teknik bilgisi olmayan son kullanıcılar için dostane ve açıklayıcı bir dille yeniden yaz. Mesaj 2 cümleyi geçmemeli.

[ÖRNEK]
Teknik mesaj: "Error 403: Forbidden — Access denied to resource /api/v2/users"
Kullanıcı dostu: "Bu sayfaya erişim izniniz yok. Hesabınıza giriş yaptıktan sonra tekrar deneyin."

[BAĞLAM]
Uygulamamız 50+ yaş kullanıcı kitlesine hitap eden bir e-ticaret sitesidir.

Teknik mesaj: "NullPointerException at line 247 in checkout service"
```

Bu prompt'u oluşturan dört bileşeni çıkarıp sıradan bir "bunu düzelt" talimatıyla karşılaştırıldığında, fark gece ile gündüz kadar büyük. Model kimden, ne için, hangi standartta, nasıl bir sonuç istediğini tam olarak biliyor.

Elbette her durumda dört bileşenin hepsini kullanman gerekmez. Bileşenleri ihtiyaca göre seç. Ama karmaşık veya tekrar eden görevlerde bu dört bileşeni birden kullandığında, sonuçların tutarlılığı ve kalitesi belirgin şekilde yükselir.

Bir sonraki adım: Kendi iş akışındaki tekrar eden görevleri listele. Bunların her biri için bu dört bileşeni içeren bir prompt taslağı oluştur. Zamanla bu taslaklar, güvenilir birer şablona dönüşecek.
