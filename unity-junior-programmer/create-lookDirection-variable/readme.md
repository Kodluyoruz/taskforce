## Adım 3: Bir lookDirection Değişkeni Oluşturma
Düşman şimdi oyuncuya doğru yuvarlanıyor, ancak kodumuz biraz dağınık. Yeni vektör için bir değişken ekleyerek temizleyelim.

- Update()’de, yeni bir Vector3 lookDirection değişkeni belirle.
- Vector3 lookDirection = (player.transform.position - transform.position).normalized; olarak ayarla.
- AddForce çağrısında lookDirection değişkenini uygula.

![figures]()
