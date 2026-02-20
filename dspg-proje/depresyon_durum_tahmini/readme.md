# 2.Depresyon Durumu Tahmini 

![image](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/dspg-proje/depresyon_durum_tahmini/Figures/650x350_depression_overview_slideshow.webp)

**Problem tanımı ve amaç:** Veri seti, kontrol grubu hastalarının ve ‘condition’ grubu hastalarının verileri olmak üzere iki klasör içermektedir. Klasörler, her hasta için zaman içinde toplanan aktigraf verileri içeren ayrı bir csv dosyası içermektedir. Hastaların bu bilgilerine dayanarak depresyon durumunu otomatik olarak tahmin etmeyi amaçlamaktadır.  Yapılacak bir app'te kişilerin karşısına çıkan sorulara verdiklere cevaplara bağlı olarak depresyon teşhisi koyulabilir. 


**Veri Seti Link:** https://www.kaggle.com/arashnic/the-depression-dataset  


Projelerden, ilginizi çeken veri setleri üzerinde bu derste öğrendiklerinizi uygulayıp github reposunun linkini paylaşın (derste öğrendiklerimizin dışında yeni şeyler denerseniz daha da iyi !)

Genel olarak yapacağınız adımlar şunlar olacak:

* Kullanacağınız veriyi indirip, okumak
* Verinizin içindeki eksik ve kategorik değişkenler ile ilgilenip modele besleyeceğimiz hale getirmek (derste gördüklerimizin üzerine de bir şeyler yapmanız hoşumuza gider demiştik, outlier'ları olan bir veride outlier'lar ile ilgili yaptıklarınızı görmek gibi şeyler olabilir mesela)
* İlgilendiğiniz probleme göre error metriğine karar vermek (derste gördüğümüz RMSE-RMSLE gibi)
* Verinizi train-validation-test diye bölmek (burada validation ve test'in gerçek hayatı yansıtması çok önemli)
* Olabildiğince fazla model denemek ve metriğimizde en iyi yapanı seçmek 
