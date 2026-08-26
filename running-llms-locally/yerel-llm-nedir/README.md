# Yerel LLM Nedir ve Neden Önemli?

Bir LLM kullandığında genellikle iki seçeneğin birini tercih edersin: modeli bir API üzerinden çağırmak (cloud), ya da modeli kendi bilgisayarında çalıştırmak (local). Her iki yaklaşımın da kendine özgü avantajları ve kısıtlamaları var. Bu farkları anlamak, hangi araçla ne zaman çalışman gerektiğine dair daha bilinçli kararlar vermeni sağlar.

## Cloud LLM vs. Yerel LLM

Cloud LLM derken OpenAI'ın GPT-4o'su, Anthropic'in Claude'u veya Google'ın Gemini'si gibi servisleri kastediyoruz. Bu servislere API üzerinden bağlanırsın, model onların sunucularında çalışır ve sonucu sana döner. Yerel LLM'de ise model doğrudan kendi makinende çalışır; internet bağlantısı gerekmez, kimseye istek atmana gerek yoktur.

| Özellik | Cloud LLM | Yerel LLM |
|---|---|---|
| **Latency** | Ağ gecikmesi + sunucu işlem süresi | Sadece lokal hesaplama süresi |
| **Maliyet** | Token başına ücret (özellikle yoğun kullanımda yüksek) | Donanım maliyeti dışında sıfır |
| **Gizlilik** | Verin üçüncü taraf sunuculara gönderilir | Tüm veri makinende kalır |
| **İnternet bağımlılığı** | Zorunlu | Yok |
| **Model kalitesi** | En güçlü modellere erişim | Donanıma bağlı; genellikle daha küçük modeller |
| **Rate limit** | Var (plan ve endpoint'e göre değişir) | Yok |
| **Kurulum** | Yok; API anahtarı yeterli | Araç kurulumu ve model indirme gerekir |
| **Güncelleme** | Otomatik; modeli sağlayıcı günceller | Manuel; yeni modeli kendin indirirsin |

Tabloya bakınca net bir resim ortaya çıkıyor: cloud modeller daha güçlü ve bakımı daha az külfetli, yerel modeller ise daha özgür ve gizli.

## Geliştirici Olarak Yerel LLM'in Avantajları

Neden bir geliştirici kendi makinesinde model çalıştırmak ister? Birkaç somut neden:

- **Offline çalışma:** İnternet olmadan da çalışabilirsin. Uçakta kod yazmak, VPN kısıtlı kurumsal ağlarda test etmek, ya da sadece dış servislere bağımlı olmamak istediğinde yerel model iş görür.
- **API maliyeti yok:** Özellikle deneme-yanılma aşamasında, prototip geliştirirken veya CI/CD pipeline'larında çok sayıda istek atarken maliyet hızla birikir. Yerel modelde bunu düşünmene gerek kalmaz.
- **Rate limit yok:** Cloud API'lerde dakika başına token veya istek sınırı vardır. Yerel modelde donanımın izin verdiği kadar paralel istek atabilirsin.
- **Hassas veriler yerelde kalır:** Müşteri verileri, iç şirket belgeleri veya kişisel dosyalar içeren bir sistem kuruyorsan, bu verilerin üçüncü taraf sunuculara gönderilmesi hem hukuki hem etik bir sorun. Yerel model, RAG pipeline'larında veya belge analiz araçlarında bu sorunu tamamen ortadan kaldırır.
- **Model davranışını kontrol edebilirsin:** System prompt'ları, parametreleri (temperature, context length) ve hatta bazı durumlarda model ağırlıklarını kendine göre ayarlayabilirsin.

## Dezavantajlar

Dürüst olmak gerekirse, yerel LLM her derde deva değil:

- **Donanım gereksinimi:** 7B parametreli bir modeli rahat çalıştırmak için en az 8 GB RAM, daha büyük modeller için 16–32 GB veya güçlü bir GPU gerekiyor. Eski ya da düşük bellekli makinelerde performans oldukça kötü olabilir.
- **Model kalitesi:** GPT-4o veya Claude 3.5 Sonnet gibi büyük cloud modelleriyle karşılaştırıldığında, yerel çalışan modeller çoğu zaman daha kısıtlı kalmaktadır. Bu fark özellikle karmaşık çok adımlı akıl yürütme, uzun bağlam ve çok dilli görevlerde belirginleşir.
- **Hız:** Cloud modeller güçlü sunucu altyapısıyla çalışır; token üretim hızı genellikle yerel makinenin üzerindedir. Özellikle CPU üzerinde çalışan yerel model, büyük promptlarda yavaşlayabilir.

## Popüler Araçlar

Yerel model çalıştırmak için birkaç farklı araç mevcut; her biri biraz farklı bir hedef kitleye hitap ediyor:

- **Ollama:** Terminal üzerinden tek komutla model indirip çalıştırmana olanak tanıyan, macOS/Linux/Windows destekli hafif bir runtime. REST API da sunuyor.
- **LM Studio:** Grafik arayüzü olan, Hugging Face'den model aramanı ve indirmeni kolaylaştıran masaüstü uygulaması. Başlangıç için idealdir.
- **text-generation-webui (oobabooga):** Gelişmiş parametreler, farklı model backend'leri ve extension desteğiyle güç kullanıcılarına yönelik web arayüzü.
- **GPT4All:** Hem masaüstü uygulaması hem de Python SDK'sıyla gelen, özellikle tam offline kullanıma odaklanmış bir platform.

## Kullanım Senaryoları

Yerel LLM'in pratikte en çok anlam ifade ettiği senaryolar:

- **Kod asistanı:** IDE'ne entegre bir yerel model, hassas iş kodu için cloud'a veri göndermeden öneri üretebilir.
- **Belge analizi:** PDF raporlar, iç yazışmalar veya sözleşmeler gibi gizli belgeler üzerinde soru-cevap yapabilirsin.
- **RAG pipeline:** Kendi döküman tabanın üzerine kurulu bir retrieval-augmented generation sistemi, yerel embedding ve yerel LLM ile tamamen offline çalışabilir.
- **CI/CD agent:** Test sonuçlarını yorumlamak, hata mesajlarını özetlemek veya PR açıklaması oluşturmak gibi otomasyonlarda API maliyeti ve rate limit olmadan model kullanabilirsin.
- **Offline asistan:** İnternet bağlantısı olmayan ortamlarda (fabrika, güvenli ağ, saha çalışması) çalışan bir LLM entegrasyonu.

Yerel LLM, cloud modellerinin yerini almaz; ikisi farklı ihtiyaçlara cevap verir. Ama hangi durumda hangisini tercih etmen gerektiğini bilmek, hem maliyetini hem de sisteminin güvenilirliğini doğrudan etkiler.
