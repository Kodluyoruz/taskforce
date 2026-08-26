# K-Nearest Neighbors

Link: https://youtu.be/HVXime0nQeI

## K En Yakın Komşu Algoritması

Bir çiçek bulduğumuzu düşünelim. Çiçeğin gül ya da lale olduğunu biliyoruz ama hangisi olduğundan emin değiliz. Ve elimizde 10 tane lale ve 10 tane gül örneği var. Nasıl bir yol izleyerek bu bilinmeyen çiçeğin türünü tahmin edebiliriz? Şöyle bir yol izleyebiliriz: Bilinmeyen çiçek ile elimizdeki çiçekleri karşılaştırırız ve bilinmeyen çiçeğe en çok benzeyen 5 çiçeği seçeriz. Sonra, 5 çiçekte en çok hangi türden çiçek olduğunu hesaplarız ve bilinmeyen çiçeğin o türden olduğunu tahmin ederiz. Örneğin, 5 çiçekten 3 tanesi gül ve 2 tanesi lale ise bilinmeyen çiçeğin gül olduğunu tahmin ederiz. <br>

İşte **K-Nearest Neighbors** (K En Yakın Komşu) algoritması tam olarak böyle çalışır. Yeni ve sınıfı bilinmeyen veriyi, sınıfı önceden bilinen verilerle karşılaştırır ve bilinmeyen veriye **en yakın** olan verilere göre tahmin yapar. Algoritmanın adında geçen **K** değeri ise tahminleme yapmadan önce seçilen en yakın verilerin sayısıdır. Yani çiçek örneğinde bu sayı 5 idi. 
