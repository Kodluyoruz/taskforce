# XML ve Yapısal Format Kullanımı

## Neden Yapı Önemli?

Kısa bir prompt yazdığında model neyin ne olduğunu kolayca anlayabilir. "Bu metni özetle" gibi tek satırlık bir istek için yapısal işaretleyicilere gerek yok. Ama prompt karmaşıklaştıkça — rol, talimat, bağlam, örnek, girdi, format beklentisi bir arada olduğunda — model bunların sınırlarını güvenilir biçimde ayırt etmekte zorlanabilir.

5.000 token'lık bir prompt'ta talimatın nerede bitip bağlamın nerede başladığı belirsizleşebilir. Özellikle talimat ve içerik arasında doğal dil geçişleri varsa, model bazen talimatı içerik olarak, içeriği talimat olarak yorumlayabilir.

XML-stili etiketler bu sorunu çözer. Her blok nerede başladığını ve nerede bittiğini açıkça bildirdiği için model farklı bölümleri birbirine karıştırmaz. Prompt ne kadar uzun olursa olsun yapı bozulmaz.

---

## Temel Tag'lar

XML'de standart bir şema yok — kendi tag isimlerini sen belirliyorsun. Tek kural: tutarlı ve okunabilir olsun. Bir prompt içinde aynı işlev için birden fazla farklı tag kullanmak modeli karıştırır.

Yaygın kullanılan etiket örnekleri:

- `<talimat>` / `<instructions>` — modelin ne yapması gerektiği
- `<bağlam>` / `<context>` — arka plan bilgisi
- `<örnek>` / `<example>` — referans örnekler
- `<giriş>` / `<input>` — işlenecek gerçek içerik
- `<çıktı_formatı>` / `<output_format>` — beklenen çıktı yapısı
- `<kısıtlamalar>` / `<constraints>` — yapılmaması gerekenler

Türkçe mi İngilizce mi kullanmalısın? Her ikisi de çalışır. Önemli olan tutarlılık. Etiket adları İngilizce, içerik Türkçe olabilir — ya da her ikisi de Türkçe. Karıştırmaktan kaçın.

---

## Yapısız vs XML Yapılı Karşılaştırma

Aynı bilgiyi içeren iki prompt varyantını yan yana görelim:

```text
Yapısız:
Sen bir hukuk asistanısın. Türk Ticaret Kanunu'na göre limited şirket kuruluşu için gereken belgeler neler? Aşağıdaki müşteri profilini göz önünde bulundur. Müşteri: 3 ortaklı, İstanbul merkezli, teknoloji şirketi kurmak istiyor. Cevabı madde listesi olarak ver.
```

Bu prompt bir paragraf hâlinde akmakta. Rol, soru, müşteri profili ve format talebi birbiri içine geçiyor. Model muhtemelen doğru anlayacak — ama "muhtemelen" ile çalışmak, geniş ölçekte veya uzun prompt'larda yeterli değil.

```text
XML yapılı:
<talimat>
Sen bir hukuk asistanısın. Türk Ticaret Kanunu'na göre limited şirket kuruluşu için gereken belgeleri listele.
</talimat>

<müşteri_profili>
Ortak sayısı: 3
Şehir: İstanbul
Sektör: Teknoloji
</müşteri_profili>

<çıktı_formatı>
Madde listesi, her madde için tahmini süre belirt.
</çıktı_formatı>
```

İkinci versiyonda aynı bilgi var. Ama model talimatın nerede bittiğini, müşteri profilinin ne olduğunu ve çıktıdan ne beklendiğini kesin biçimde biliyor. "Müşteri: 3 ortaklı" ifadesinin talimatın parçası mı yoksa bağlamın parçası mı olduğu konusunda belirsizlik yok.

---

## Multi-Document Yapısı

RAG pipeline'larında veya birden fazla belge içeren analizlerde XML özellikle işe yarar. Her belge kendi etiketiyle sarıldığında model hangi bilginin nereden geldiğini ayırt edebilir.

```text
<belge index="1">
Başlık: Q3 Satış Raporu
Tarih: Ekim 2024
İçerik: [rapor metni]
</belge>

<belge index="2">
Başlık: Q2 Satış Raporu
Tarih: Temmuz 2024
İçerik: [rapor metni]
</belge>

<soru>
İki rapor arasındaki en büyük gelir farkı hangi üründedir?
</soru>
```

Bu yapıda model hangi metnin Q3'e ait olduğunu, hangisinin Q2'ye ait olduğunu net biçimde biliyor. Ayrıca soru bloğu da etiketlendiği için talimat ile içerik arasında karışma olmuyor.

Index veya id nitelikleri (`index="1"`, `id="Q3-raporu"`) modelin cevabında referans vermesini de kolaylaştırır: "Q3 raporuna göre..." veya "Belge 2'de..."

---

## Kendi Tag İsimlerini Tasarla

Doğru bir tag seti yok — işe yarayan bir tag seti var. Bir projede düzenli olarak kullandığın prompt şablonları için kendi etiket sistemi tasarlamak mantıklı.

Bir içerik moderasyon sistemi için örnek:

```text
<kural_seti>
- Nefret söylemi içeren yorumları "Kaldır" olarak işaretle.
- Ticari reklam içeren yorumları "Gözden Geçir" olarak işaretle.
- Kişisel bilgi paylaşımı içeren yorumları "Uyar" olarak işaretle.
</kural_seti>

<yorum>
Bu ürün gerçekten harika, kesinlikle tavsiye ederim!
</yorum>

<karar_formatı>
Karar: [Kaldır / Gözden Geçir / Uyar / Onay]
Gerekçe: [Tek cümle]
</karar_formatı>
```

Bu sistem bir kez tasarlandığında `<yorum>` etiketinin içini değiştirerek aynı prompt şablonunu her yorum için kullanabilirsin. Kural seti değiştiğinde yalnızca `<kural_seti>` bloğunu güncelliyorsun.

---

## Uzun Prompt'larda Neden Önemli

Bir prompt 1.000 token altındayken yapısal işaretleyiciler zorunlu değil. Model tüm içeriği kolayca işleyebilir. Ama prompt büyüdükçe yapı giderek daha önemli hâle gelir.

5.000, 10.000 veya daha fazla token içeren bir prompt düşün. Talimat en başta, asıl soru en sonda, araya pek çok belge ve bağlam bilgisi girmiş durumda. XML etiketleri olmadan bu dev prompt'ta model hangi bölümün ne anlam taşıdığını her zaman güvenilir biçimde çıkaramaz.

Etiketler sayesinde model prompt'un herhangi bir noktasında "talimat bölümünde ne yazıyor?" diye bakabilir. Context window'un ortasında kaybolan bir talimat, etiketsiz ortamda gözden kaçabilirken etiketli yapıda her zaman bulunabilir hâlde kalır.

---

## XML ve Güvenlik

Bir yan not: kullanıcıdan alınan girdi doğrudan prompt'a ekleniyorsa, o girdinin talimat bölümünü etkilememesi gerekir. XML etiketleri bu açıdan da koruma sağlar. `<kullanıcı_girdisi>` bloğu içindeki içerik talimat bloğundan fiziksel olarak ayrı olduğu için, kullanıcı girdisine talimat yazmaya çalışan biri (prompt injection) modeli daha az kolay kandırabilir.

Bu mükemmel bir güvenlik çözümü değil ama yapısal ayrım hiç yoktan iyidir.

---

## Özet

XML-stili etiketler uzun ve karmaşık prompt'larda farklı bölümleri birbirinden net biçimde ayırmak için kullanılan pratik bir araçtır. Standart bir şema yok — kendi sistematik ve tutarlı etiket kümeni tasarlarsın. Yapısız ve yapılı versiyonları yan yana gördüğünde her ikisinin aynı bilgiyi içerdiğini ama yapılı versiyonun çok daha az belirsizlik barındırdığını görürsün. Prompt'un büyüklüğü ve karmaşıklığı arttıkça bu ayrımın değeri de artıyor.
