## Adım 7: Ekran dışındaki hayvanları yok edin

Sınır dışına çıkan mermileri yok edersek, muhtemelen aynısını hayvanlar için de yapmalıyız. Unity Editor'ün sonsuz uçurumunda yaratıkların kaybolmasını istemiyoruz...

- Nesnelerin  lowerBound altında olup olmadığını kontrol etmek için else-if ifadesi oluşturun: else if (transform.position.z < lowBound)
- Komut dosyasını (script) tüm hayvanlara uygulayın, ardından hazır yapıları geçersiz kılın

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/destroy-animals-offscreen/figures/CWC_A.4.3_image5.png)

**Alt text:** Flavour








