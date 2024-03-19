# 4.Saatlik Enerji Talebi Üretimi ve Hava Durumu

**Problem tanımı ve amaç:** Veri seti, İspanya için 4 yıllık elektrik tüketimi, üretimi, fiyatlandırması ve hava durumu verilerini içermektedir. Bu bilgilere dayanarak elektriğin gün içi fiyatını veya saat başı elektrik talebini tahmin etmek amaçlanmaktadır. Belediyeler için bu konuda bir tahmin modeli üretilebilir ve havaların çok soğuk olacağı, elektriğin çok kullanılacağı düşünüldüğü gün ve haftalarda son kullanıcı için elektrik fiyatı düzenlenebilir.


**Veri Seti Linki:** https://www.kaggle.com/nicholasjhana/energy-consumption-generation-prices-and-weather  


Projelerden, ilginizi çeken veri setleri üzerinde bu derste öğrendiklerinizi uygulayıp github reposunun linkini paylaşın (derste öğrendiklerimizin dışında yeni şeyler denerseniz daha da iyi !)

Genel olarak yapacağınız adımlar şunlar olacak:

* Kullanacağınız veriyi indirip, okumak
* Verinizin içindeki eksik ve kategorik değişkenler ile ilgilenip modele besleyeceğimiz hale getirmek (derste gördüklerimizin üzerine de bir şeyler yapmanız hoşumuza gider demiştik, outlier'ları olan bir veride outlier'lar ile ilgili yaptıklarınızı görmek gibi şeyler olabilir mesela)
* İlgilendiğiniz probleme göre error metriğine karar vermek (derste gördüğümüz RMSE-RMSLE gibi)
* Verinizi train-validation-test diye bölmek (burada validation ve test'in gerçek hayatı yansıtması çok önemli)
* Olabildiğince fazla model denemek ve metriğimizde en iyi yapanı seçmek 
