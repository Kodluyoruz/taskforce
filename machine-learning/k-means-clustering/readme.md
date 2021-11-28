# K-Means Clustering

Link: https://youtu.be/4b5d3muPQmA

## Kümeleme

Dağlarda yürüyüş yapmanın keyfini çıkarırken daha önce hiç görmediğiniz bir bitkiye rastlarsınız. Etrafınıza bakıyorsunuz ve birkaç tane daha fark ediyorsunuz. Tam olarak aynı değiller,
yine de, büyük olasılıkla aynı türe ait olduklarını bilmeniz için yeterince benzerler. Bunun hangi tür olduğunu size söylemesi için bir botanikçiye ihtiyacınız olabilir, ancak benzer görünümlü nesne gruplarını belirlemek için kesinlikle bir uzmana ihtiyacınız yok. Buna **kümeleme** denir: benzer örnekleri tanımlama ve bunları kümelere, yani benzer örneklerden oluşan gruplara atama görevidir.

## K-Means Algoritması

K-Means algoritması, veri kümelerini genellikle birkaç yinelemede çok hızlı ve verimli bir şekilde kümeleme yeteneğine sahip basit bir algoritmadır.

Peki algoritma nasıl çalışıyor? Aslında oldukça basit. Size merkez noktaları verildiğini varsayalım: veri kümesindeki tüm örnekleri, her birini, ağırlık merkezi en yakın olan kümeye atayarak kolayca etiketleyebilirsiniz. Tersine, size tüm örnek etiketleri verildiyse, her küme için örneklerin ortalamasını hesaplayarak tüm merkezleri kolayca bulabilirsiniz. Ama size ne etiketler ne de merkezler verildi, o halde nasıl ilerleyebilirsiniz? Peki, sadece ağırlık merkezlerini rastgele yerleştirerek başlayın (örneğin, rastgele k örnek seçerek ve konumlarını merkez olarak kullanarak). Ardından örnekleri etiketleyin, merkezleri güncelleyin, örnekleri etiketleyin, merkezleri güncelleyin. Bu işlemleri merkezlerin hareketi durana kadar yapın. Algoritmanın sınırlı sayıda adımda (genellikle oldukça küçük) hareketinin durması ve kümelemeyi bitirmesi garanti edilir, sonsuza kadar hareket etmez. <br>

![Şekil 9-4](https://raw.githubusercontent.com/yigitatesh/taskforce/main/machine-learning/k-means-clustering/figures/figure_9_4.png)

Algoritmayı yukarıdaki şekilde görebilirsiniz: centroid adı verilen oluşturulacak grupların merkezleri rastgele belirlenir (sol üst), ardından örnekler etiketlenir (sağ üst), ardından merkezler güncellenir (orta sol), örnekler yeniden etiketlenir (orta sağ), ve bu işlemler merkezlerin hareketi durana kadar devam eder. Gördüğünüz gibi, sadece 3 adımda algoritma, ideale yakın görünen bir kümelemeye ulaştı.
