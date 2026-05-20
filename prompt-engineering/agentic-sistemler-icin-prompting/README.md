# Agentic Sistemler için Prompting

## Agentic Sistem Nedir?

Bu kursta gördüğün prompt örneklerinin hepsi tek bir iş yapıyordu: bir soru gel, bir yanıt git. Bu yaklaşım birçok problem için yeterli. Ama bazı görevler doğası gereği tek bir adımda tamamlanamıyor.

Agentic sistem, tek bir soruya yanıt vermek yerine bir hedefi gerçekleştirmek için bir dizi adım atan modeldir. Bu adımlar boyunca model araçlar kullanabilir — internette arama yapabilir, kod çalıştırabilir, API'lara istek gönderebilir, dosya okuyup yazabilir. Ve her adımın sonunda "şimdi ne yapmalıyım?" kararını kendisi veriyor.

"Agentic" kelimesi "ajan gibi" anlamına geliyor. Bir insan ajanı düşün: sana tek seferlik bir iş yapıp gitmez, hedef verildiğinde kendi inisiyatifiyle çalışır, engel çıkınca alternatif yol arar, sonunda sana bir rapor sunar. Agentic LLM sistemi de böyle çalışıyor.

Bu yaklaşım güçlü — ama aynı zamanda dikkat gerektiriyor. Model ne kadar özerk çalışırsa prompt tasarımın o kadar belirleyici hale geliyor. Tek bir prompt'ta bir hata sana kötü bir yanıt verir. Agentic bir sistemde aynı hata zincirleme etki yaratabilir.

---

## Tek Prompt vs Agentic Fark

Farkı somutlaştırmak için iki örnek yanyana:

**Tek prompt:**
"Aşağıdaki metni özetle."

Bir input, bir output, bitti. Model bir şey döndürüyor, iş tamamlandı.

**Agentic:**
"Rakip ürünleri araştır, fiyatları karşılaştır ve özet rapor hazırla."

Bu görev şöyle gidiyor:
1. Hangi rakipler araştırılacak? → Model bir karar veriyor ya da sana soruyor
2. Arama aracıyla rakip sitelerden veri çekiyor
3. Fiyat bilgilerini topluyor ve karşılaştırıyor
4. Raporu yazıyor

Dört adım, birden fazla araç, birden fazla karar noktası. Model her adımda "ne yapacağım?" sorusunu yanıtlıyor. Sen sadece hedefi tanımladın — yol modeldin.

Bu fark prompt tasarımını da köklü biçimde değiştiriyor. Tek prompt'ta ne istediğini net söylersen çoğunlukla iyi sonuç alırsın. Agentic sistemlerde ek olarak şunları düşünmen gerekiyor: hangi araçlar var, ne zaman kullanılmalı, hata olunca ne yapılacak, geri dönüşsüz bir eylem öncesi kim onaylıyor.

---

## Agentic Prompting Prensipleri

### Hedefi tanımla, adımları bırak

Agentic sistemlerde en yaygın hata adım adım talimat vermek. Sanki modelin her hareketi kontrol etmek istiyorsun gibi bir prompt yazar, ardından model bir adımda beklenmedik bir durumla karşılaşınca ne yapacağını bilemiyor — çünkü senin adım listenin dışına çıkamıyor.

Doğru yaklaşım: ne elde etmek istediğini söyle, nasıl elde edileceğini modele bırak. Model duruma göre adapte olabilir. Sen her senaryoyu öngöremezsin, model ise duruma göre hareket edebilir.

Kötü örnek:
```text
"Önce Google'da ara. Sonra ilk 5 sonucu oku. Sonra fiyatları karşılaştır. Sonra tabloyu oluştur."
```

İyi örnek:
```text
"Belirtilen 3 rakip ürünün güncel fiyatlarını araştır ve karşılaştırmalı bir tablo hazırla."
```

Fark şu: kötü örnekte yöntem tarif ediliyor (Google'da ara, ilk 5 sonucu oku). İyi örnekte ise çıktı tanımlanıyor (fiyatlar + tablo). Aynı çıktıya ulaşmak için farklı yollar kullanılabilir — hangi yolu seçeceğini modele bırakmak, modelin beklenmedik engellerle başa çıkmasını sağlar.

İkinci versiyon modele hareket alanı bırakıyor. Bir kaynak erişilemez durumdaysa model alternatif kaynak deneyebilir. Adımları saydığında ise model listeyi bitirip durabilir, adaptasyon yapamaz.

### İlerlemeyi izlet

Agentic sistem çalışırken ne yapıldığını görmek hem debug için hem de güven için değerli. Modele her adımda kısa bir not bırakmasını söyle:

```text
"Her adımı tamamladıktan sonra kısa bir 'Adım X tamamlandı: [ne yaptım]' notu ekle."
```

Bu sayede modelin hangi aşamada olduğunu, doğru yolda gidip gitmediğini görebiliyorsun. İlerleme notları olmadan model sessizce çalışır ve sonunda bir şeyler sunar — ama aradaki süreç sana kapalıdır.

### Geri dönüşsüz eylem öncesi onay

Bu prensip güvenlik açısından belki de en önemlisi. Bazı eylemler geri alınamaz: bir dosyayı silmek, e-posta göndermek, bir satın alma yapmak, veritabanında kayıt güncellemek. Model bu eylemleri yapmadan önce mutlaka senin onayını almalı.

```text
"Bir dosyayı silmeden, e-posta göndermeden veya kalıcı bir değişiklik yapmadan önce bana sor ve onayımı bekle."
```

Bu talimat olmadan model verimli çalışmaya çalışırken geri dönülmez adımlar atabilir. Belki gerçekten o e-postayı göndermek istemiyordun — ama model "görevi tamamlamak" için gönderdi.

Kural basit: model özerkliği arttıkça, geri dönüşsüz eylemler için onay mekanizması zorunlu hale geliyor.

### Hata durumu için talimat

Model çalışırken bir şeyler ters gidebilir: bir API yanıt vermiyor, bir dosya bulunamıyor, model bir karar noktasında emin olamıyor. Bu durumda ne yapacağını söylemezsen model iki şeyden birini yapıyor: ya durur ve sana hiçbir şey söylemez, ya da tahmin yaparak devam eder.

İkisi de istemediğin senaryo. Açık bir yönerge bunu önlüyor:

```text
"Bir adımda hata alırsan veya nasıl devam edeceğinden emin değilsen dur ve durumu açıkla. Tahmin yaparak devam etme."
```

"Tahmin yaparak devam etme" ifadesi önemli. Modeller belirsizliği kapatmak için sık sık makul görünen bir tahmin yapıp ilerlemeye devam ediyor. Agentic bir sistemde bu tahminler zincirleniyor ve sonunda büyük bir sapmaya dönüşüyor.

---

## Tam Agentic Prompt Örneği

Prensiplerin hepsini bir araya getiren bir örnek:

```text
Görev: Aşağıdaki 10 müşteri yorumunu analiz et ve bir rapor hazırla.

Adımlar:
1. Her yorumu olumlu/olumsuz/nötr olarak sınıflandır
2. En sık tekrarlanan 3 şikâyeti belirle
3. Her şikâyet için bir iyileştirme önerisi yaz
4. Özet bir tablo hazırla

Önemli: Her adımı tamamladığında kısa bir "Adım X tamamlandı" notu ekle. Bir adımda emin olamazsan dur ve hangi konuda netliğe ihtiyaç duyduğunu söyle.

Yorumlar:
[müşteri yorumları buraya]
```

Bu prompt şunları yapıyor:
- Hedefi net söylüyor (müşteri yorumu analizi + rapor)
- Adımlar belirleniyor ama bu sefer makul — her adım bir çıktı tanımı, yöntem tarifi değil: "sınıflandır", "belirle", "yaz", "hazırla". Modelin nasıl yapacağını değil, ne üretmesi gerektiğini söylüyor
- İlerleme notu isteniyor
- Belirsizlik durumunda ne yapılacağı açık

Bu prompt "agentic" mü? Teknik olarak bakıldığında tek bir oturumda çalışıyor, ama birden fazla adım ve karar içeriyor. Araç kullanan daha karmaşık sistemlerde aynı prensipler geçerli.

---

## Tool Use (Araç Kullanımı)

Bazı agentic kurulumlar modele harici araçlar sunuyor: web araması, kod çalıştırma, veritabanı sorgusu, takvim kontrolü. Model bu araçları kullanıp kullanmama kararını veriyor.

Prompt mühendisliği açısından burada bir tasarım kararı var: modele ne zaman araç kullanacağını, ne zaman kullanmayacağını söyle.

```text
"Cevabı kendi bilginle verebiliyorsan verilen araçları kullanma. Güncel veya spesifik veri gerekiyorsa arama aracını kullan."
```

Bu neden gerekli? Çünkü modeller bazen gereksiz araç çağrısı yapıyor. "Paris'in başkenti nedir?" sorusu için web araması yapmak anlamsız — model bunu zaten biliyor. Ama araç çağrısı hem zaman hem de maliyet demek. Modeli araçları ne zaman kullanacağı konusunda yönlendirmek sistemin verimliliğini artırıyor.

Öte yandan bazı durumlarda tam tersi de gerekebilir: "Her zaman güncel hava durumu için arama yap, kendi tahminini verme." Model kendi tahminini sunmak yerine araçtan doğrulanmış veri çekiyor.

---

## Subagent Koordinasyonu

Karmaşık agentic sistemler tek bir modelden oluşmuyor. Bir "orkestratör" model var, bir de ona bağlı birden fazla "subagent". Her subagent belirli bir alt göreve odaklanıyor.

Örneğin bir pazar araştırması sisteminde:
- Orkestratör görevi planlıyor ve koordine ediyor
- Bir subagent web araması yapıyor
- Başka bir subagent verileri analiz ediyor
- Üçüncü bir subagent raporu yazıyor

Her subagent kendi prompt'unu alıyor — ve bu prompt dar, odaklı, tek bir işe yönelik. Orkestratör sonuçları bir araya getiriyor.

Bu mimari ölçeklenebilir ve paralel çalışmaya izin veriyor. Prompt mühendisliği açısından önemli olan şu: her subagent için ayrı, net bir prompt gerekiyor. "Her şeyi yapan" tek bir büyük prompt yerine, tek işe odaklanmış birden fazla küçük prompt daha iyi sonuç veriyor.

Bu, temel bir mimari kavram olarak bilmen yeterli. Detaylar implementasyona giriyor.

---

## Güvenli Agentic Prompting

Agentic sistemler güçlü oldukça güvenlik düşünceleri daha ağır basıyor. Model özerk çalışıyorsa neyi yapıp neyi yapamayacağını baştan net tanımlamak gerekiyor.

**Scope sınırları:** Modelin hangi kaynaklara erişebileceğini sınırla.
```text
"Yalnızca bana verilen klasördeki dosyalarla çalış. Başka dizinlere erişme."
```

**Hata sınırları:** Sonsuz döngüye ya da ısrarlı deneme yanılmaya izin verme.
```text
"3 başarısız denemeden sonra dur ve ne denediğini, neden başarısız olduğunu açıkla."
```

**İzin sınırları:** Dış bağlantıları, üçüncü taraf servisleri ya da belirli işlemleri açıkça yasakla.
```text
"Dış URL'lere istek gönderme. Yalnızca sana sağlanan veriyle çalış."
```

Genel kural şu: modele ne kadar fazla özerklik veriyorsan kısıtlamaları o kadar açık tanımlamak zorundasın. Kısıtlamalar modeli kötü yapmıyor — aksine hangi alanda güvenle hareket edebileceğini netleştiriyor.

Agentic sistemlerde "ne yapmasını istiyorum" sorusu kadar "ne yapmasını istemiyorum" sorusu da önem taşıyor. İkincisini cevaplamazsan model boşluğu kendi dolduruyor — ve bu her zaman istediğin gibi bitmiyor.
