# React Native Mobile App Patikası için Projeler

Evet proje zamanı! Aşağıda bulunan projeler sayesinde React Native ile Mobile App Patikasını tamamladıktan sonra kendini daha fazla geliştirebilir ve portföyüne ekleyebilirsin.

#### Weather ####


- Kullanıcıların anlık hava durumunu görebileceği bir mobil uygulama yapılacaktır.
- Uygulama kapsamında kullanıcının mevcut konumu otomatik olarak belirlenip o konumun hava durumu görüntülenmeli. 
- Kullanıcı aşağı kaydırarak yenileme (pull-to-refresh) işlemi gerçekleştirebilmeli ve yenileme sonucunda rastgele bir konumun hava durumu bilgisi ekrana getirilmelidir.
- Ekranda ilgili hava durumununa ait sıcaklık, nem, basınç vb. bilgiler ve yine ilgili hava durumunun sistemden dönen özel icon’u görüntülenmelidir.
- Ekranda bunlara ek olarak kullanıcının bulunduğu konumun il ve ilçe bilgisi de görüntülenmelidir. Bunun için kullanıcının saptanan koordinat bilgileri (lat, long) paylaşılan reverse geocoding API’si kullanılarak konum bilgisine çevrilebilir.

**Weather API:** https://openweathermap.org
(icon bilgisi için /weather-conditions)

**Reverse Geocoding API:** https://locationiq.com
(Türkiye için belirli durumlarda dönen cevaptaki “city” parametresi şehir yerine mahalle bilgisi içerebilmektedir. Bu bir sorun olmayacaktır, kullanabilirsiniz.)
 
#### Trivia ####
- Kullanıcıların soru-cevap tarzında bilgi yarışması oyun oynayabileceği bir platform yapılacaktır.
- Uygulamanın açılış sayfasında en yüksek skor ve oyunu başlat seçeceği olmalı ve varsayılan olarak 10 soruluk, doğru-yanlış şeklinde bir oyun oluşturulmalıdır.
- Kullanıcı dilerse oyuna başlamadan oyun ayarlarını (zorluk seviyesi, doğru-yanlış/çoktan seçmeli, soru konusu) gibi kendisi belirleyebileceği bir ayar seçeceği eklenmelidir. Bu ayar ekranı açılış ekranına ya da oyunu başlat seçeneğinden sonra gösterilebilir.
- Kullanıcı oyuna başladığında sorular sırayla gösterilmeli ve soru başına 12 saniyelik bir süre verilmelidir.
- Süre dolduğunda o soru yanlış olarak belirlenip diğer soru ekrana gelmelidir.
- Oyun sonunda oyuncaya skor bilgisi, doğru yanlış bilgileri gösterilmeli ve kullanıcı uygulamaya geri döndüğünde en yüksek skor bilgisi sistemde kayıtlı tutulmalıdır.

**Trivia API:** https://opentdb.com/api_config.php
 
#### Kitaplık ####
- Kullanıcıların okudukları kitaplar hakkında paylaşım yapabilecekleri bir sosyal medya uygulaması yapılacaktır.
- Uygulama kapsamında hesap oluşturma ve giriş yapabilme, okudukları kitaplar hakkında paylaşım yapabilme, kendi profillerine favori kitaplarını ekleme gibi özelliklerin de olması beklenmektedir. 
- Kullanıcılar paylaştıkları gönderiye fotoğraf da ekleyebileceklerdir. Başka kullanıcıların gönderilerini beğenme, başka kullanıcıların profillerini görüntüleyebilme, o profildeki favorilenmiş kitapları favorilere ekleyebilme gibi özellikler de mevcut olmalıdır. Ek olarak favori kitaplar eklenirken kitap ve yazar adı, türü de sisteme girilmelidir.
- Uygulamada arama seçeceği olmalı ve kullanıcıların profillerine eklenmiş tüm kitaplar içinde arama yapıp eşleşen kitaplar gösterilmelidir. Ek olarak tür bazlı arama seçeceği de dahil edilebilir.
- Alt yapı olarak Firebase alt yapısı tercih edilebilir. 

#### Worldwide Restaurants ####

- Kullanıcıların dünya genelindeki restoranları inceleyebileceği ve restoran arayabileceği bir uygulama yapılacaktır.
- Kullanıcılar uygulama içerisinde arama kriterlerine göre restoranları görüntülemeli ve detaylarını inceleyebilmelidir. Detaylarında restoranın yorumları ve işletme saatleri, günleri de belirtilmelidir. Aynı şekilde restoranların geliyorsa rezerve bilgileri, görselleri vb. bilgileri kullanıcıya sunulmalıdır.
- Ek olarak aramada gelen restoranların harita üzerinde gösterilmesi beklenilmektedir.
- Kullanıcı harita üzerinde ilgili restorana tıkladığı anda detay bilgisini ufak bir pencerede sayfadan ayrılmadan görüntüleyebilmelidir. 
- Harita görünümünde  restoranın fotoğrafları da kullanıcıya sunulmalıdır.

**Worldwide Restaurant API:** https://rapidapi.com/ptwebsolution/api/worldwide-restaurants

#### Marvel ####

- Marvel karakterlerinin ve çizgi romanlarının incelendiği bir uygulamaya yapılacaktır.
- Kullanıcılar uygulamaya kayıt olup, giriş yapabilecek ve favori karakterlerini kaydedebilecek.
- Uygulamada karakterleri ve o karakterin bulunduğu çizgi roman gibi bilgileri görüntülenebilmeli. Aynı şekilde bir çizgi roman ve o çizgi romanda yer alan karakterleri de görüntülenebilmeli.
- Uygulama içerisinde çizgi roman detayı ya da karakter detayı ekranı da beklenmektedir.
- Çizgi roman detay ekranında içinde yer alan karakterleri, hikayeleri gibi bilgileri, karakter detayında yer aldığı çizgi romanları, öyküleri gibi bilgiler yer almalıdır.
- Kısaca API’dan dönen bilgilerin mümkün olduğunca kullanılması beklenmektedir.

Marvel API: https://developer.marvel.com
 
#### Diyetim ####

- Kullanıcılara yemek alışkanlığı konusunda yardımcı olabilecek bir uygulama yapılacaktır.
- Kullanıcı uygulama içerisinde istediği şekilde bir diyet programı oluşturabilmeli ve yemek menüsü oluşturabilmelidir.
- Uygulama içerisinde bir yemek hatırlatıcısı oluşturulmalı ve vakit geldiğinde kullanıcıya bildirim gönderilmelidir.
- Kullanıcılar dilerse alarmı kaldırabilmeli ve güncelleyebilmelidir. Kullanıcılar diyet raporu alabilmeli ve yemek geçmişini görüntüleyip ağırlıklı olarak neleri tercih ettiği kullanıcıya özet olarak sunulmalıdır.
- Kullanıcılar yemek seçimi yaparken besin değeri bilgileri de dahil edilmeli ve rapor alınırken toplam ve ortalama tüketilen besin değerleri de kullanıcıya sunulmalıdır.

Aşağıda verilen linkteki başlıktan herhangi bir API seçilebilir.  

Food API’s: https://rapidapi.com/search/food
