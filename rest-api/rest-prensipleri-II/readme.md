# REST Prensipleri (Kısıtlamaları) II


### Önbelleklenebilir ( Cacheable ) Prensibi
Sunucu gelen isteklere verilen cevapların önbelleklenebilir olup olmadığını belirtmelidir. Örneğin “Cache-Control”, “Expires” gibi HTTP başlıkları önbellek ile ilgili bilgiler taşır.

![Cacheable](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/rest-api/rest-prensipleri-II/figures/Cacheable.jpg)

### Katmanlı Sistem ( Layered System ) Prensibi
İstemci – sunucu arasındaki ilişki katmanlara ayrılabilir, ve bileşenler sadece ilişkili oldukları katmanlara karşı sorumlu olurlar.

![Layered System](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/rest-api/rest-prensipleri-II/figures/Layered.jpeg)

### İsteğe Bağlı Kod ( Code On Demand - Optional ) Prensibi
Sunucu, istemci tarafına istemcinin işlevini genişletecek ek kodlar gönderebilir. Bu özellik istemci tarafında yapılması gereken işlemleri hafifletir.

Örneğin sunucu, istemci tarafına döneceği HTML dökümanın içerisine JavaScript kodları ekleyebilir.


## Daha Fazlası İçin
- [REST - Wiki](https://en.wikipedia.org/wiki/Representational_state_transfer)
- [IBM Technology - What Is REST](https://www.youtube.com/watch?v=lsMQRaeKNDk&t=396s)


