## Adım 1: Bir Düşman ve Bir Fizik Materyali Ekleme
Kamera rotasyonumuz ve oyuncu hareketimiz çok cezbedici çalışıyor. Sonra bir düşman oluşturacağız ve oyuncuyu uzaklaştırmak için onlara bazı özel yeni fizikler vereceğiz!
 
- Yeni bir **Küre (Sphere)** oluştur, “Enemy” olarak adlandır, yeniden konumlandır, ve üzerine bir **yapı (texture)** sürükle.
- Yeni bir **RigidBody** ekle, bileşeni ve XYZ ölçeğini ayarla, ardından test et.
- Yeni bir “Fizik Materyalleri (Physics Materials)” dosyasında, Oluştur (Create) > Fizik Materyali (Physics Material), ve ona “Bouncy” ismini ver.
- **Zıplamayı (Bounciness)**  “1”e ayarla, **Bounce Combine’ı** “Çoklu (Multiply)” olarak ayarla,  oyuncuya ve düşmana uygula ve ardından test et.
