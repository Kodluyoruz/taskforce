# Kovaryans

Link: https://youtu.be/qtaqvPAeEJY

## Kovaryans

Kovaryans, iki veri kümesinin birbiriyle olan ilişkisini anlamamıza yarayan bir ölçümdür. Önce iki veri kümesi derken ne demek istediğimize bakalım. Aşağıda bir grup insanın boy ve kiloları grafikte gösterilmiş: <br>

![Boylar ve Kilolar](https://raw.githubusercontent.com/yigitatesh/taskforce/main/statistics/covariance/figures/weights_heights.png)

Bu grafikte her nokta bir insana karşılık geliyor ve her insanın yani noktanın boy ve ağırlık değerleri var. Grafiğe baktığınızda boy ve ağırlıkların arasında bir ilişki görebiliyor musunuz? Evet, genelde boyu fazla olan insanların ağırlığı da fazla, boyu az olan insanların ağırlığı da az oluyor. Yani boy ve ağırlık arasında **pozitif**(biri arttıkça diğeri de artan) bir ilişki var. Biri artarken diğeri azalsaydı **negatif** bir ilişli olacaktı. Birinin artması ya da azalması diğerini etkilemiyor olsaydı da aralarında bir ilişki olmayacaktı. <br>

Kovaryansa geri dönelim. Kovaryans hesaplamadan önce iki veri kümesinin de ortalaması hesaplanır. Kovaryans, iki veri kümesindeki her bir verinin ortalamaları ile olan farklarının çarpımının toplanması ve bu sayının toplam veri sayısına bölünmesi ile hesaplanır. Aşağıda formül olarak gösterilmiştir: <br>

<img src="https://render.githubusercontent.com/render/math?math={\displaystyle%20cov(X,%20Y)={\frac%20{(x_{1}-\mu_{x}).(y_{1}-\mu_{y})%2B(x_{2}-\mu_{x}).(y_{2}-\mu_{y})%2B\cdots%20%2B(x_{n}-\mu_{x}).(y_{n}-\mu_{y})}{n}}}" width="600"/>

Aslında formüle de baktığımızda kovaryansın, iki veri kümesinin ortalamalarından olan sapmalarının çarpımını hesapladığını görürüz. Bu da bize aralarındaki ilişki ile ilgili bilgi verir. Aşağıda farklı veri kümelerinin kovaryansları verilmiştir. Kovaryans negatif ise ilişkinin de negatif (sol kısım), pozitif ise ilişkinin de pozitif (sağ kısım), sıfıra yakın ise bir ilişkinin olmadığını (orta ksıım) görebiliyoruz. <br>

![Kovaryans Örnekleri](https://raw.githubusercontent.com/yigitatesh/taskforce/main/statistics/covariance/figures/covariance.png)
