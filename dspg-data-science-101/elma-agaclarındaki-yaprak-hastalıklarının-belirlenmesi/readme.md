#### 3.Elma Ağaçlarındaki Yaprak Hastalıklarının Belirlenmesi #####


**Problem tanımı ve amaç:** Tarımsal ürünleri etkileyen birçok hastalığın yanlış teşhisi, kimyasalların yanlış kullanımına yol açarak dirençli patojen türlerin ortaya çıkmasına neden olur. Bu durum da maalesef önemli ekonomik kayıplara ve çevresel negatif etkilere sahip daha fazla salgına yol açabilir. 

İnsanların  dayalı mevcut hastalık teşhisi zaman alıcı ve pahalıdır ve bilgisayarla görmeye dayalı modeller verimliliği artırma vaadinde bulunsa da, enfekte olmuş dokuların yaşı, genetik varyasyonlar ve ağaçlardaki ışık koşulları nedeniyle semptomlardaki büyük farklılıklar, algılama doğruluğu.


**Veri Seti Linki:** https://www.kaggle.com/c/plant-pathology-2020-fgvc7/data


Projelerden, ilginizi çeken veri setleri üzerinde bu derste öğrendiklerinizi uygulayıp github reposunun linkini paylaşın (derste öğrendiklerimizin dışında yeni şeyler denerseniz daha da iyi !)

Genel olarak yapacağınız adımlar şunlar olacak:

* Kullanacağınız veriyi indirip, okumak
* Verinizin içindeki eksik ve kategorik değişkenler ile ilgilenip modele besleyeceğimiz hale getirmek (derste gördüklerimizin üzerine de bir şeyler yapmanız hoşumuza gider demiştik, outlier'ları olan bir veride outlier'lar ile ilgili yaptıklarınızı görmek gibi şeyler olabilir mesela)
* İlgilendiğiniz probleme göre error metriğine karar vermek (derste gördüğümüz RMSE-RMSLE gibi)
* Verinizi train-validation-test diye bölmek (burada validation ve test'in gerçek hayatı yansıtması çok önemli)
* Olabildiğince fazla model denemek ve metriğimizde en iyi yapanı seçmek 