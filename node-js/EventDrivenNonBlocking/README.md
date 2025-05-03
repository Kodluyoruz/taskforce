Olay Odaklı ve Bloklamayan
======
Node.js'in şimdiye kadar 2 temel özelliğini paylaştık. Node.js bir Javascript çalışma ortamıdır ve asenkron olarak çalışır. Bu bölümde ise Node.js'in olay 
temelli çalışma yapısı üzerine konuşacağız ve bu olay temelli çalışma birbirleribi bloklamadan (engellemeden) çalışır.

## Event Driven

Event Driven **Olay Temelli** yaklaşımda programın akışını olaylar belirler, olay döngüsü içerisinde tamamlanan işlemler Callback vasıtasıyla işlemin
tamamlandığını bildirir. Burada şu dikkatinizi çekmiştir, bazı kavramları tekrar ediyoruz, bunun nedeni kavramların sizin de gördüğünüz gibi
birbirleriyle ilişkili olmasıdır.

![Event Driven](https://github.com/Kodluyoruz/taskforce/blob/node.js/node-js/EventDrivenNonBlocking/figures/event_driven.png)

## Non-Blocking

Non-Blocking **Bloklamayan** bir yazılımda kodun bir parçasının çalışması durumunda kodun diğer bölümünün çalışmaması durumudur. Biraz daha iyi anlamak 
için hemen bir örnek verelim. Aşağıdaki örneğimizide kodun devamının çalışması için file.md dosyasının okunmasının bitmesi zorunludur ve bu okuma işlemi 
sırasında kodun ileri aşamaları bloklanır.

```javascript
const fs = require('fs');                 // fs modülünü çağırıyoruz (İleride daha detalı konuşacağız.)
const data = fs.readFileSync('/file.md'); // Burada kod senkron çalışarak sonraki kodları blokluyor.
console.log(data);                        // data bilgisini yazdırıyoruz
moreWork();                               // devamında çalışacak kod
```

Aşağıdaki örneğimizide kodun devamının çalışması için file.md dosyasının okunmasının bitmesi zorunlu değildir. readFile asenkron olarak çalışır ve 
bu nedenle kodun bu bölümü tamamlanmadan diğer bölümler çalışabilir. Kodun ilerleyen bölümü daha önce çalışır.

```javascript
const fs = require('fs');                 // fs modülünü çağırıyoruz (İleride daha detalı konuşacağız.)
fs.readFile('/file.md', (err, data) => {  // Burada kod asenkron çalışır ve devamındaki kodu **bloklamaz**
  if (err) throw err;
  console.log(data);                      // data bilgisini yazdırıyoruz
});
moreWork();                               // kod bloklanmadığı için kodun bu kısmı data bilgisi yazdırmaktan önce çalışır.
```

Aşağıdaki grafikte senkron çalışmanın kodları bloklarken asenkron çalışmanın kodları bloklamadan çalıştığını göstermektedir. Senkron
çalışmada "user1" beklenip sonra ona ait print işlemi yapılmakta iken asenkron açlışma grafiğinde "user1" den gelen cevap 
beklenmeden "user2" bilgisi istenmektedir.

![Non Blocking](https://github.com/Kodluyoruz/taskforce/blob/node.js/node-js/EventDrivenNonBlocking/figures/non_blocking.png)

## Daha Fazlası İçin
- [Node.js: what it is, when and how to use it, and why you should](https://www.freecodecamp.org/news/node-js-what-when-where-why-how-ab8424886e2/)
- [Node.js Resmi Sitesi](https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/)
