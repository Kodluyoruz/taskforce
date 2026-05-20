# While Döngüsü

JavaScript’de tekrar eden işlemlerde kodlarımızın karışmasını önlemek ve okunabilirliği artırabilmek için döngüler kullanırız. Bunlardan bir tanesi **While** döngüsüdür.  **While** döngüsü oluşturabilmek için ilk olarak parametre olarak bir koşul vermemiz gerekmektedir verdiğimiz koşul sağlandığı sürece döngü devam eder. Bu koşul sınırsız olursa döngü de sonsuz kere devam eder ve biz bunu istemeyiz genel olarak sonlanacağı bir durumla döngü sonlandırılmalıdır. 

- Bunu ilk olarak sözde kod (pseudocode) olarak gösterebiliriz. 

![orneKod](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/while-dongusu/figures/psuedo.png)


Burada **while** döngüsünün yazılış şeklini gördük şimdi bunu daha gerçekçi bir durumda basitçe inceleyebiliriz. Diyelim ki bir durumda konsola 1’ den 10’a kadar sayıları sırayla yazdırmamız gerekiyor biz bu durumda **while** döngüsünü kullanarak satırlarca kod yazmaktan kurtuluruz ve okunması gayet basit bir kod yazmış oluruz.

![codExample](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/while-dongusu/figures/codexample.png)
**Aşağıda codepen ile deneyimleyebilirsiniz.**

**Yukarıda görmüş olduğunuz kod örneğinde 3 bölüm bulunuyor;**

- Dışarıda bir değişken tanımlama.
- while döngüsüne değişkeni koşul parametresi olarak vermek.
- While döngüsüne yapmamız gereken işleri yaptırma(bunu biraz açmamız gerekiyor çünkü içeride değişkeni arttırdığımızı göreceksiniz bunun sebebi değişkenimiz 1'den 10 a kadar giden bir değer ve while döngümüzün çalışma şartı değişkenimiz 10 dan küçük olduğu sürece eğer biz değişkeni döngüde arttırmazsak döngü sonsuza defa çalışır ve sistemimizin hata vermesine sebep olur.

**Burada öğrendiklerimizle ufak bir çalışma yapabiliriz. **

- Çalışmamızda yapmamızı istediğim şey belirli araba markalarını bir dizi oluşturarak konsola yazdırmak bunun için yapmamız gerekenler çok basit öncelikle bir **Array** oluşturmalı ve arabalarımızı bu diziye eklemeliyiz.
- Ardından bir **while** döngüsü oluşturuyoruz ve bu döngüye araba elemanlarımızı ekliyoruz. (döngüyü sınırlandırmayı ve parametre vermeyi unutmuyoruz.) 
-Bu işlemi önce kendi öğrendiklerimizle deneyebilir ve kodu başarılı bir şekilde yazdıktan sonra isterseniz geliştirebilir ve **array** metodlarıyla yeni arabalar ekleyebilir veya çıkartabilirsiniz Koda aşağıdaki örnekten ulaşabilirsiniz 

![Egitimornek](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/while-dongusu/figures/question.png)
