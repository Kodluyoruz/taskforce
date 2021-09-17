# Hash Collision


- Hash fonction farklı iki değerden aynı sayı üretilirse bu duruma collison(çarpışma) denir. Bu olay istediğimiz bir durum değildir.

- Hash functionlar bazen farklı durumlar için farklı sonuçlar üretemeyebilir. Örnek olarak araçları bir hash function dan geçirelim. Bu fonksiyonumuz son harflerine göre bir değer atıyor. Örneğin, motor ve tır için aynı değerleri ataması collision a neden oluyor.


- Collision sorunuyla az karşılaşabilmek için kaliteli bir hash function olmalı. Bu sayede verimli bir hash table elde etmiş oluruz.

- Çarpışma sayısı arttıkça aradığımız şeyi bulma hızı azalır.

# Sorular

- Aşağıdakilerden hangisi hash functionlar için doğru değildir?
    - Farklı iki değerden aynı sayı üretilemez.
    - Çarpışma sayısı arttıkça aradığımız şeyi bulma hızımız azalır.
    - Hash fonksiyonları farklı durumlar için farklı sonuç üretemeyebilir.
    - Collision sorununu linked-list kullanarak çözebiliriz.
<br />

- Hash functionlar aynı değeri iki farklı değere atamaz.
    - Evet
    - Hayır

# Kaynaklar

-  [Wiki](https://en.wikipedia.org/wiki/Hash_collision)

-  [Detail-collision](https://freemanlaw.com/hash-collisions-explained/)