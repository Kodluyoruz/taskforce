# Müşteri Veri Analizi

## Müşteri Veri Seti

Bu projede bir marketin müşterilerini analiz edeceğiz! Bu veri setinde marketin müşterileri hakkında bilgiler var. Veri seti dosyasına [buradan](https://raw.githubusercontent.com/yigitatesh/ml/main/datasets/customer_data.csv) ulaşabilirsiniz. <br>

Veri setimiz genel olarak şöyle: <br>

![Müşteri Veri Seti](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/data-analysis-projects/customer/figures/customer_veriseti.png)

Veri setimizdeki sütunların anlamlarını bir inceleyelim: <br>

<b>ID</b>: Müşteri ID numarası <br>
<b>Year_Birth</b>: Doğum yılı <br>
<b>Education</b>: Eğitim seviyesi <br>
<b>Marital_Status</b>: Evlilik durumu <br>
<b>Income</b>: Gelir miktarı <br>
<b>Kidhome</b>: Çocuk sayısı <br>
<b>Teenhome</b>: Genç sayısı <br>
<b>Dt_Customer</b>: Müşteri olduğu tarih <br>
<b>Recency</b>: En son alışveriş yaptığı tarih <br>
<b>MntFruits</b>: Meyve için harcadığı para miktarı <br>
<b>MntMeatProducts</b>: Et için harcadığı para miktarı <br>
<b>MntFishProducts</b>: Balık için harcadığı para miktarı <br>
<b>MntSweetProducts</b>: Şeker için harcadığı para miktarı <br>
<b>MntGoldProds</b>: Altın ürünler için harcadığı para miktarı <br>
<b>NumDealsPurchases</b>: Fırsatları kullanarak yaptığı alışveriş sayısı <br>
<b>NumWebPurchases</b>: İnternetten yaptığı alışveriş sayısı <br>
<b>NumCatalogPurchases</b>: Katalogdan yaptığı alışveriş sayısı <br>
<b>NumStorePurchases</b>: Mağazadan yaptığı alışveriş sayısı <br>
<b>NumWebVisitsMonth</b>: İnternet sitesine aylık yaptığı ziyaret sayısı <br>

## Veri Setini Okuma

[Buradaki](https://raw.githubusercontent.com/yigitatesh/ml/main/datasets/customer_data.csv) dosyayı sağ tıklayıp "Farklı Kaydet" diyerek indirip okuyabilirsiniz. Ya da direkt olarak 'pd.read_csv("https://raw.githubusercontent.com/yigitatesh/ml/main/datasets/customer_data.csv", sep="\t")' kodu ile okuyabilirsiniz. (Buradaki sep parametresi verideki değerler "," ile değil de "\t" karakteri ile ayrıldığı için değiştirildi.)<br>

## Veri Analizi Soruları

Aşağıdaki soruları kod yazarak ve veri analizi yaparak cevaplamanızı istiyoruz. Başarılar! <br>

1. Müşterilerin toplam harcamaları ile kaç gündür müşteri oldukları arasında nasıl bir ilişki var? 

2. Evdeki çocuk ve genç sayısı ile harcanan para miktarı arasındaki ilişki nedir?

3. Eğitim seviyeleri ile gelir miktarları arasındaki ilişki nedir?

Bu soruların cevaplarını ve veri analizini merak ediyorsanız [buradaki](https://github.com/Kodluyoruz/taskforce/blob/main/data-analysis-projects/customer/customer_analysis.ipynb) notebook'ta bulabilirsiniz. <br>
