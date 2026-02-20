Evet proje zamanı !

Burda sizin ile paylaştığımız veri setleri ile çeşitli toplumsal,ekolojik ve çevre sorunlarının inclendiği projeler yapmaya başlayacaksınız. Bu sayede yapılan projeler ile şahane çözümler geliştirebilirsiniz!

#### 1.Binaların Enerji Verimliliği ####

**Problem tanımı ve amaç:** Veri seti, simüle edilmiş 768 bina şeklinin yüzey/duvar/çatı alanı, cam alanı, cam alanı dağılımı ve yönü gibi özelliklerini içermektedir. Bu veriye dayanarak binanın ısıtma ve soğutma yükünü tahmin etmek amaçlanmaktadır. Çevre duyarlılığının çok önemli olduğu şu çağda halen yenilenebilir enerji kaynaklarına geçmediğimiz için karbon ayak izini azaltmak için süper bir danışmanlık girişimi olabilir.

**Veri Seti Link:** https://www.kaggle.com/elikplim/eergy-efficiency-dataset 


#### 2.Depresyon Durumu Tahmini #####

**Problem tanımı ve amaç:** Veri seti, kontrol grubu hastalarının ve ‘condition’ grubu hastalarının verileri olmak üzere iki klasör içermektedir. Klasörler, her hasta için zaman içinde toplanan aktigraf verileri içeren ayrı bir csv dosyası içermektedir. Hastaların bu bilgilerine dayanarak depresyon durumunu otomatik olarak tahmin etmeyi amaçlamaktadır.  Yapılacak bir app'te kişilerin karşısına çıkan sorulara verdiklere cevaplara bağlı olarak depresyon teşhisi koyulabilir. 


**Veri Seti Link:** https://www.kaggle.com/arashnic/the-depression-dataset  


#### 3.Elma Ağaçlarındaki Yaprak Hastalıklarının Belirlenmesi #####


**Problem tanımı ve amaç:** Tarımsal ürünleri etkileyen birçok hastalığın yanlış teşhisi, kimyasalların yanlış kullanımına yol açarak dirençli patojen türlerin ortaya çıkmasına neden olur. Bu durum da maalesef önemli ekonomik kayıplara ve çevresel negatif etkilere sahip daha fazla salgına yol açabilir. 

İnsanların  dayalı mevcut hastalık teşhisi zaman alıcı ve pahalıdır ve bilgisayarla görmeye dayalı modeller verimliliği artırma vaadinde bulunsa da, enfekte olmuş dokuların yaşı, genetik varyasyonlar ve ağaçlardaki ışık koşulları nedeniyle semptomlardaki büyük farklılıklar, algılama doğruluğu.


**Veri Seti Linki:** https://www.kaggle.com/c/plant-pathology-2020-fgvc7/data



#### 4.Saatlik Enerji Talebi Üretimi ve Hava Durumu #####

**Problem tanımı ve amaç:** Veri seti, İspanya için 4 yıllık elektrik tüketimi, üretimi, fiyatlandırması ve hava durumu verilerini içermektedir. Bu bilgilere dayanarak elektriğin gün içi fiyatını veya saat başı elektrik talebini tahmin etmek amaçlanmaktadır. Belediyeler için bu konuda bir tahmin modeli üretilebilir ve havaların çok soğuk olacağı, elektriğin çok kullanılacağı düşünüldüğü gün ve haftalarda son kullanıcı için elektrik fiyatı düzenlenebilir.


**Veri Seti Linki:** https://www.kaggle.com/nicholasjhana/energy-consumption-generation-prices-and-weather  



Projelerden, ilginizi çeken veri setleri üzerinde bu derste öğrendiklerinizi uygulayıp github reposunun linkini paylaşın (derste öğrendiklerimizin dışında yeni şeyler denerseniz daha da iyi !)

Genel olarak yapacağınız adımlar şunlar olacak:

* Kullanacağınız veriyi indirip, okumak
* Verinizin içindeki eksik ve kategorik değişkenler ile ilgilenip modele besleyeceğimiz hale getirmek (derste gördüklerimizin üzerine de bir şeyler yapmanız hoşumuza gider demiştik, outlier'ları olan bir veride outlier'lar ile ilgili yaptıklarınızı görmek gibi şeyler olabilir mesela)
* İlgilendiğiniz probleme göre error metriğine karar vermek (derste gördüğümüz RMSE-RMSLE gibi)
* Verinizi train-validation-test diye bölmek (burada validation ve test'in gerçek hayatı yansıtması çok önemli)
* Olabildiğince fazla model denemek ve metriğimizde en iyi yapanı seçmek 
