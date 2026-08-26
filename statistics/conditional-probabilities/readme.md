# Koşullu Olasılıklar

Link: https://youtu.be/_IgyaD7vOOA

## Olasılık

Olasılık, bir olayın sonucunda ortaya çıkabilecek sonuçların ihtimallerini gösteren bir ölçüdür. "p" sembolü ile gösterilir. Olasılık, 0 ile 1 arasında olur. Bir sonucun olasılığı 0 ise görülmesi imkansız, 1 ise görülmesi kesindir. Örneğin, bir madeni para havaya atıldığında 2 sonuç ortaya çıkabilir, yazı ya da tura. Eğer para normal bir para ise yazı çıkma olasılığı 0.5 yani %50, tura çıkma olasılığı da 0.5 yani %50'dir. Hem yazı hem de tura gelme olasılığı 0 yani %0'dır çünkü sonuç ya yazı ya da tura olabilir. Olasılık, **p(sonuç)** olarak gösterilir. Örneğin, para atıldığında yazı gelme olasılığı "p(yazı)" şeklinde gösterilebilir.<br>

## Koşullu Olasılık

Koşullu olasılık, bir koşulun gerçekleştiği bilindikten sonra başka bir koşulun gerçekleşme olasılığıdır. Örneğin, 6 yüzlü bir zar atıldığında her bir sayının gelme olasılığı 1/6'dır. Çünkü gelebilecek sayılar 6 tanedir (1, 2, 3, 4, 5, 6) ve her bir sayının gelme olasılığı eşittir. Örneğin, p(1) = 1/6 ya da p(2) = 1/6. Peki ben gelen sayının çift olduğunu biliyorsam ne olur? Bu sefer gelebilecek sayılar 3 tanedir, yani 2, 4 ve 6. Yani gelen sayının çift olduğu biliniyorsa 2 gelme olasılığı nedir? Gelebilecek 3 sayı var, her sayının gelme olasılığı eşit ve 2 de bu sayılardan biri. O zaman bu olasılık 1/3 olur. Koşullu olasılık **p(sonuç|koşul)** olarak gösterilir. Örneğin, gelen sayının çift olduğu bilindiğinde 2 gelme olasılığı yani p(2|çift) = 1/3'tür. Koşullu olasılık formülü aşağıda gösterilmiştir. Yani B koşulu varken A'nın olma olasılığı, A ve B'nin birlikte olma olasılığının B'nin olma olasılığına bölümüdür. <br>

<img src="https://render.githubusercontent.com/render/math?math={\displaystyle%20p(A|B)={\frac%20{p(A%20\cap%20B)}{p(B)}}}" width="170"/>

Aşağıda bir venn şeması var. Bu şemadan hareketle bazı olasılıkları hesaplayalım: <br>

![Venn Şeması](https://raw.githubusercontent.com/yigitatesh/taskforce/main/statistics/conditional-probabilities/figures/venn_diagram.png)

Şemada soldaki dairede şeker (candy) sevenler, sağdaki dairede soda sevenler gösterilmiş. Öncelikle toplam kişi sayısına bakalım: Toplamda 14 kişi var. p(soda) yani bir kişinin soda sevme olasılığı kaçtır? Soda dairesinin içinde toplamda 7 kişi var. O zaman, soda seven sayısı / toplam sayı = 7/14 yani 1/2. Bir kişinin soda sevme olasılığı %50'ymiş. Bir kişinin hem soda hem şeker sevme olasılığı kaçtır? Soda ve şeker dairesinin kesişiminde 2 kişi var. O zaman, p(soda ve şeker) = 2/14 = 1/7 eder. <br>

Koşullu olasılıklara da bakalım. Örneğin, soda seven birinin şeker de sevme olasılığı kaçtır? Burada koşulumuz "soda" ve sonucumuz da "soda ve şeker". Yani p(soda ve şeker|soda) kısaca p(şeker|soda), p(soda ve şeker) / p(soda) hesabıyla bulunur. Hesaplarsak p(şeker|soda) = 2/7 olarak bulunur. 
