# Binary Search

İkili arama algoritması, elimizde bulunan veri dizisini sıralı olduğunu varsayıyor, bu durumu değiştirerek sonuca varmak istiyor.

İkili arama algoritması, diziyi her seferinde ikiye bölerek ikili arama yapar. Sıralı bir listem var ise benim Big-o logn olarak karşımıza çıkıyor.

Aradığım sayı 15 ve benim değer kümem [10,15,20,16,22,36,23] diyelim. Binary Search bu diziyi manipüle ederek şu ifadeye dönüştürüyor. [10,15,16,20,22,23,36]. 36 sayısını en yüksek sayı, 10 sayısını en düşük sayı ilan ediyor. Benim aradığım sayı ile ortada kalan sayıyı kıyaslıyor eğer benim sayım büyükse kendinden küçük bütün sayıları siliyor. Ve kendine yeni bir ortanca belirliyor. Böylelikle gereksiz arama yapmaktan kurtarıyor.

![binary-search](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/veri-yapilari-algoritmalar/binary-search/figures/binary-search.png)

# Kaynaklar

[binary-search](https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search)
