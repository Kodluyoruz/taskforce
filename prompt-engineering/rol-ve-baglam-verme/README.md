# Rol ve Bağlam Verme

Aynı soruyu farklı uzmanlardan sorsaydın aynı cevabı mı alırdın? Bir avukata, bir muhasebeciye ve bir girişimciye "Bu iş modelinde risk ne?" diye sorsaydın, üçü de farklı şeylere odaklanırdı. Birinin çerçevesi hukuki sorumluluk, birinin nakit akışı, birinin pazar zamanlaması olurdu.

LLM'ler de benzer şekilde çalışır. Modele bir rol atadığında, ona belirli bir bakış açısı ve bilgi çerçevesi vermiş olursun. Aynı soruya farklı bir perspektiften yaklaşmasını sağlarsın. Bu, role prompting'in temel mantığıdır.

## Role Prompting Nedir?

Role prompting, modele belirli bir kimlik ya da uzmanlık alanı atamaktır. "Sen X'sin" cümlesini kullandığında, modeli o role özgü bilgi, ton ve yaklaşım biçimiyle çalışmaya yönlendirmiş olursun.

Bu neden işe yarıyor?

Model, eğitildiği veriler sayesinde farklı uzmanların, farklı yazarların ve farklı bakış açılarının nasıl konuştuğunu, nasıl düşündüğünü ve hangi konulara odaklandığını öğrenmiş. Bir rol atadığında, model o role en uygun bilgi ve üslubu aktive ediyor.

Rol vermek sihirli bir anahtar değil. Model sihirli bir şekilde gerçek bir doktora ya da gerçek bir avukata dönüşmüyor. Ama o alanın terminolojisini, yaklaşım biçimini ve önceliklendirme mantığını daha belirgin şekilde kullanıyor — bu da sana daha odaklı ve ilgili bir cevap veriyor.

## Rol Vermenin Çıktıyı Nasıl Değiştirdiği

Aynı soruyu rol vermeden ve rol vererek sormak arasındaki farkı görmek için yan yana bir karşılaştırma yapalım:

```text
Rol yok:
"Kullanıcı verilerini nasıl güvende tutarım?"

Rol ile:
"Sen 10 yıllık deneyime sahip bir siber güvenlik uzmanısın. Startup'ların sıklıkla gözden kaçırdığı kullanıcı verisi güvenliği açıklarını listele. Her madde için bir satır pratik öneri ver."
```

İlk prompt'ta model genel bir güvenlik rehberi üretir — şifreleme kullan, HTTPS'e geç, düzenli yedek al gibi. Bunlar doğru ama yüzeysel.

İkinci prompt'ta model startup odaklı düşünür: yeni şirketlerin atlama eğiliminde olduğu şeyler neler? Veri minimizasyonu, üçüncü parti entegrasyonların erişim izinleri, kullanıcı oturumu süresi yönetimi, staging ortamında canlı verilerin kullanılması gibi çok daha spesifik ve değerli gözlemlere ulaşırsın.

Rolün tek fark yarattığı şey bilgi derinliği değil. Ton da değişiyor — uzman bir sesle yazılmış metin hem daha doğrudan hem de daha az genel kalıplarla dolu oluyor.

## System Mesajı: Kalıcı Kimlik

Sohbet arayüzlerinde her mesaj bir öncekinin üzerine eklenir. Ama API veya gelişmiş prompt yapıları kullandığında, rolü her seferinde user mesajına eklemek zorunda değilsin. Bunun için **system mesajı** var.

System mesajı, bir konuşmanın tüm boyunca geçerli olan kalıcı talimatlar katmanıdır. Rolü, davranış kurallarını ve genel yönergeleri buraya yazarsın — bir kez.

Basit bir sistem + kullanıcı mesajı örneği:

```text
System mesajı:
"Sen bir B2B SaaS şirketinin müşteri başarısı ekibinde çalışan deneyimli bir temsilcisin. Müşteri sorularını profesyonel, çözüm odaklı ve empatik bir tonla yanıtla. Müşteriye her zaman bir sonraki adım öner."

User mesajı:
"Faturamda neden beklenmedik bir ücret gördüm?"
```

Bu yapıda sistem mesajı her konuşma turunda geçerlidir. Kullanıcı ne sorarsa sorsun, model o kimlikle cevap verir. Bu, tutarlı bir deneyim için vazgeçilmez.

## Bağlam Verme

Bağlam, modele senin durumunu anlatan bilgilerdir: kim olduğun, ne amaçla sorduğun, hangi kısıtlamalar altında çalıştığın, kimin için üretim yapıyorsun.

Model seni tanımıyor. Bir CEO da aynı soruyu sorabilir, yeni başlayan bir stajyer da. Sektör deneyimi olan biri de sorabilir, konuya yabancı biri de. Bağlam vermediğinde model "ortalama" bir kullanıcıya cevap vermek zorunda kalır — ve bu ortalama, senin durumuna pek uymayabilir.

Zengin bağlam içeren bir prompt:

```text
"Sen deneyimli bir kariyer danışmanısın. Ben 3 yıllık backend geliştirici deneyimine sahibim ve ilk kez iş değiştiriyorum. CV'mi gözden geçir ve zayıf noktaları söyle. Hedefim fintech şirketleri."
```

Bu prompt'ta model şunları biliyor: kariyer danışmanı rolü üstleniyor, kullanıcı mid-level bir geliştirici, sektör değişikliği değil şirket değişikliği söz konusu ve hedef sektör fintech. Bunların hepsi modelin cevabını şekillendiriyor — fintech'in spesifik beceri beklentileri, 3 yıllık deneyim için tipik zayıf noktalara odaklanma, ilk iş değişikliğine özgü tavsiyeler.

## Hangi Görev için Hangi Rol?

Her görev için rol gerekmiyor. Ama şu durumlarda rol vermek belirgin biçimde fark yaratıyor:

- **Kod review** → "Deneyimli bir senior developer olarak..." — daha spesifik, önceliklendirilmiş geri bildirim alırsın.
- **Hukuki bilgi** → "Hukuk danışmanı olarak..." — not: AI gerçek bir avukat değil, genel yön için bilgi al, resmi konularda mutlaka uzman danış.
- **Yaratıcı yazı** → "Deneyimli bir kurgu yazarı olarak..." — daha stilistik, hikaye yapısına duyarlı öneriler gelir.
- **Teknik dokümantasyon** → "Teknik yazar olarak..." — netlik ve tutarlılık odaklı düzeltmeler alırsın.
- **Basit bilgi sorma** → Rol genellikle gereksiz. "Ankara'nın nüfusu nedir?" sorusunda kimlik eklemek sonucu değiştirmez, sadece gereksiz karmaşıklık yaratır.

Rol seçerken şunu sor: Bu görevi en iyi kim yapardı? O kişinin bakış açısını modele ver.

## Aşırı Rol Verme Tuzağı

Rol vermenin bir limiti var. Çok fazla, çok karmaşık veya birbiriyle çelişen roller vermek, yardımcı olmak yerine zararlı olabilir.

Şunu düşün:

```text
"Sen hem pazarlama uzmanısın, hem finans direktörüsün, hem de bir yazılım mühendisisin. Ayrıca 20 yıllık startup deneyimin var ve aynı zamanda bir akademisyensin."
```

Bu prompt'ta modele o kadar çok kimlik yüklenmiş ki, hangisinin öncelikli olduğu belli değil. Model bu çelişkiyi çözmek için her kimliği biraz karıştırır ve sona yüzeysel, hiçbirini tam temsil etmeyen bir cevap üretir.

Rol, ne kadar spesifik ve tek odaklı olursa o kadar etkili olur. Tek bir görev için tek bir iyi tanımlanmış rol — bu, "hepsini ver" yaklaşımından her zaman daha iyi sonuç üretir.

Bağlam da aynı şekilde. Her şeyi tek bir prompt'a doldurmaya çalışmak yerine, o görev için gerçekten önemli olan bağlam bilgilerini seç ve ekle. Modelin dikkatini dağıtacak gereksiz bilgiler cevabın odağını da dağıtır.
