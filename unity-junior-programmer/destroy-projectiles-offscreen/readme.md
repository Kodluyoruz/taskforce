## Adım 6: Mermileri ekran dışında yok edin

Ne zaman bir mermi üretsek, oyun alanını geçip sonsuzluğa doğru sürüklenir. Oyun performansını iyileştirmek için sınırların dışına çıktıklarında onları yok etmemiz gerekiyor.

- “DestroyOutOfBounds” komut dosyasını oluşturun ve mermiye uygulayın
- Yeni bir  private float topBound değişkeni ekleyin ve onu 30’dan başlatın
- Üst sınırların dışındaysa yok etme kodunu yazın if (transform.position.z > topBound) { Destroy(gameObject); }
- Denetçide Overrides açılır menüsünde, prefabrike uygulamak için Tümünü uygula'yı tıklayın.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/destroy-projectiles-offscreen/figures/CWC_A.4.3_image4.png)

**Alt text:** Flavour
