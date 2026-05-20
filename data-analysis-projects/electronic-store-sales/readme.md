# Elektronik Dükkan Satışları Analizi

## Elektronik Dükkan Satışları Veri Seti

Bu projemizde elektronik aletler satan bir dükkanın satış verilerini inceleyeceğiz! Bu veri seti elektronik aletlerin satış fiyatları, satış zamanları, nerede satıldığı gibi bilgilerden oluşuyor. Veri setine [buradan](https://raw.githubusercontent.com/yigitatesh/ml/main/datasets/electronic_store_sales.csv) ulaşabilirsiniz. <br>

Veri setinin ilk 5 satırı şöyle: <br>

![Elektronik Dükkanı Veri Seti](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/data-analysis-projects/electronic-store-sales/figures/electronic_store_dataset.png)

(Veri setinde NaN değerler ilk 5 satırdan bile gözüküyor! O satırları işlemeyi unutmayın.)

Veri setimizdeki sütunların anlamlarını bir inceleyelim: <br>

<b>Order ID</b>: Yapılan satışın ID numarası <br>
<b>Product</b>: Ürünün adı <br>
<b>Quantity Ordered</b>: Yapılan satışta üründen kaç adet istendiği <br>
<b>Price Each</b>: Her bir adet ürünün fiyatı <br>
<b>Order Date</b>: Satışın yapıldığı tarih <br>
<b>Purchase Address</b>: Satışın yapıldığı adres <br>

## Veri Setini Okuma

[Buradaki](https://raw.githubusercontent.com/yigitatesh/ml/main/datasets/electronic_store_sales.csv) dosyayı sağ tıklayıp "Farklı Kaydet" diyerek indirip okuyabilirsiniz. Ya da direkt olarak 'pd.read_csv("https://raw.githubusercontent.com/yigitatesh/ml/main/datasets/electronic_store_sales.csv")' kodu ile okuyabilirsiniz. <br>

## Veri Analizi Soruları

Aşağıdaki soruları kod yazarak ve veri analizi yaparak cevaplamanızı istiyoruz. Başarılar! <br>

1) Satışların en yüksek olduğu ay hangisi? Bu ayda ne kadar para kazanılmış?

2) Hangi şehir en çok miktarda parayı kazanmış?

3) Müşterilerin ürün satın alma ihtimalini artırmak için günün hangi saatinde reklamlar gösterilmeli?

4) Hangi ürünler birlikte en çok satılmış?

5) Hangi ürün en çok satıldı? Neden?

6) Hangi ürün en çok para kazandırmış?

Bu soruların cevaplarını ve veri analizini merak ediyorsanız [buradaki](https://github.com/Kodluyoruz/taskforce/blob/main/data-analysis-projects/electronic-store-sales/electronic_store_sales_analysis.ipynb) notebook'ta bulabilirsiniz. <br>
