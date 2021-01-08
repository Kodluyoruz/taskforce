# while Döngüsü

JavaScript’de tekrar eden işlemleri kodlarımızın karışıklaşmasını önlemek ve okunabilirliği artırabilmek için döngüler kullanırız bunlardan bir tanesi **While** döngüsüdür.  **While** döngüsü oluşturabilmek için ilk olarak parametre olarak bir koşul vermemiz gerekmektedir verdiğimiz koşul sağlandığı sürece döngü devam eder. Bu koşul sınırsız olursa döngü de sonsuz kere devam eder ve biz bunu istemeyiz genel olarak sonlanacağı bir durumla döngü sonlandırılmalıdır bunu ilk olarak psuedo kod olarak gösterebiliriz. 

 

while(koşul) {

    Yapılacak işlem;

}



Burada **while** döngüsünün yazılış şeklini gördük şimdi bunu daha gerçekçi bir durumda basitçe inceleyebiliriz. Diyelim ki bir durumda konsola 1’ den 10’a kadar sayıları sırayla yazdırmamız gerekiyor biz bu durumda **while** döngüsünü kullanarak satırlarca kod yazmaktan kurtuluruz ve okunması gayet basit bir kod yazmış oluruz.

var degisken = 1;
// burada sınırlandırma verebilmek icin bir degisken atiyoruz.
  
while (degisken <= 10){
  //olusturdugumuz degiskeni kosul olarak ekliyoruz
 
 console.log ("degiskenin degeri: " + degisken ) 
  
 degisken++;
  //dongu sonsuz olmamasi icin degiskeni arttiriyoruz
}


[codepen'de deneyebilirsiniz](https://codepen.io/Zodyrike/pen/ZqBdvL?editors=1111)
### Yukarıda görmüş olduğunuz kod örneğinde 3 bölüm bulunuyor;
- Dışarıda bir değişken tanımlama.
- while döngüsüneu değişkeni koşul parametresi olarak vermek.
- While döngüsününe yapmamız gereken işleri yaptırma(bunu biraz açmamız gerekiyor çünkü içeride değişkeni arttırdığımızı göreceksiniz bunun sebebi değişkenimiz 1'den 10 a kadar giden bir değer ve while döngümüzün çalışma şartı değişkenimiz 10 dan küçük olduğu sürece eğer biz değişkeni döngüde arttırmazsak döngü sonsuza defa çalışır ve sistemimizin hata vermesine sebep olur.

