Evet proje zamanı !

Burda sizin ile paylaştığımız veri setleri ile çeşitli toplumsal,ekolojik ve çevre sorunlarının inclendiği projeler yapmaya başlayacaksınız. Bu sayede yapılan projeler ile şahane çözümler geliştirebilirsiniz!

#### 1.Binaların Enerji Verimliliği ####

**Problem tanımı ve amaç:** Veri seti, simüle edilmiş 768 bina şeklinin yüzey/duvar/çatı alanı, cam alanı, cam alanı dağılımı ve yönü gibi özelliklerini içermektedir. Bu veriye dayanarak binanın ısıtma ve soğutma yükünü tahmin etmek amaçlanmaktadır. Çevre duyarlılığının çok önemli olduğu şu çağda halen yenilenebilir enerji kaynaklarına geçmediğimiz için karbon ayak izini azaltmak için süper bir danışmanlık girişimi olabilir.

**Veri Seti Link:** https://www.kaggle.com/elikplim/eergy-efficiency-dataset 


Projelerden, ilginizi çeken veri setleri üzerinde bu derste öğrendiklerinizi uygulayıp github reposunun linkini paylaşın (derste öğrendiklerimizin dışında yeni şeyler denerseniz daha da iyi !)

Genel olarak yapacağınız adımlar şunlar olacak:

* Kullanacağınız veriyi indirip, okumak
* Verinizin içindeki eksik ve kategorik değişkenler ile ilgilenip modele besleyeceğimiz hale getirmek (derste gördüklerimizin üzerine de bir şeyler yapmanız hoşumuza gider demiştik, outlier'ları olan bir veride outlier'lar ile ilgili yaptıklarınızı görmek gibi şeyler olabilir mesela)
* İlgilendiğiniz probleme göre error metriğine karar vermek (derste gördüğümüz RMSE-RMSLE gibi)
* Verinizi train-validation-test diye bölmek (burada validation ve test'in gerçek hayatı yansıtması çok önemli)
* Olabildiğince fazla model denemek ve metriğimizde en iyi yapanı seçmek 