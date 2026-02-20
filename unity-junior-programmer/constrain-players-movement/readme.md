## Adım 3: Oyuncunun hareketini sınırlayın
Oyuncunuzun ne tür bir hareketi olursa olsun, oyun için sınırlı olması gerekir.
 
- Oynatıcınız çarpmaması gereken nesnelerle çarpışıyorsa (zemin dahil), Colliders bileşenindeki "Trigger" kutusunu işaretleyin.
- Oynatıcınızın konumu veya dönüşü kısıtlanacaksa, Sert Gövde bileşenindeki kısıtlamaları genişletin ve belirli eksenleri sınırlayın
- Player'ınız ekrandan çıkabiliyorsa, konumu kontrol eden ve sıfırlayan bir if ifadesi yazın.
- Oyuncu ekrandan çift zıplayabiliyor veya uçabiliyorsa, kullanıcının bunu yapma yeteneğini sınırlayan bir boolean değişkeni oluşturun
- Oyuncunuzun oyun alanının dışında fiziksel engellerle sınırlandırılması gerekiyorsa, daha ilkel Uçaklar veya Küpler oluşturun ve bunları duvarlar oluşturacak şekilde ölçeklendirin.

Bu adımın sonunda, oyuncunun hareketi, oyununuzu oynanabilir hale getirecek şekilde sınırlandırılmalıdır.
