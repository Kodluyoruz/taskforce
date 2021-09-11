# Konu Metni

## Array

Array, birden çok verinin art arda olacak şekilde tutulduğu bir veri yapısıdır. 

Örneğin; bir öğrencinin sınav notları, notların sırayla tutulduğu bir array'dir. Birden fazla ve aynı tipteki veriler tutulur. Örneğin, bir bowling maçındaki skorlar da bir skor array'idir. 

Array'ler için bilgisayarda ilk başta bir büyüklük belirlenir. Örneğin, bir öğrenci 3 sınav olacaksa 3 veri alabilecek kapasitede bir array oluşturulur. Sonra da bu boşluklara notlar yerleştirilir. Peki öğrenci bir de mazeret sınavına girmek isterse ne olur?

Array, başta 3 kapasitesinde olduğundan dolayı 4 kapasitesine çıkarılması gerekir. Bu işlem bir kapasite artırmak olarak düşünülüp hızlı olması gerektiği söylenebilir. Ancak, 3 kapasiteli array'e eklenecek olan 4. boşluk da o array'in bitişiğinde olmalıdır. Bu kural, array'lerde hızlı bir şekilde istenilen elemana ulaşılması için gereklidir. 3 kapasiteli array'in yanında önemli bir bilgi olabileceğinden dolayı bir tane boşluk eklenmek yerine, array 4 kapasiteli ve boş olduğu bilinen bir noktaya kopyalanır ve orijinal array de silinir. Böylece, 4 kapasitesinde bir array elde edilir. 

Görüldüğü gibi bir array'e, tüm boşlukları dolu iken yeni bir veri eklemek masraflıdır. Bir avantaj olarak ise, array içindeki tüm veriler bitişik bir halde tutulduğundan dolayı istenilen sıradaki veriye çok hızlı bir şekilde ulaşılabilir. 



# Sorular

1. Kapasitesi dolmuş bir array'e yeni bir veri eklerken neden array başka bir alana kopyalanır?
2. Bir array'de sırası bilinen bir elemana ulaşmak neden çok hızlıdır?
3. Gerçek hayattan bir array örneği veriniz.



# Ücretsiz Kaynak

* [Hackerrank problemi](https://www.hackerrank.com/challenges/arrays-ds/problem) linkine giderek verilen array'i ters çevirmeniz gereken problemi çözebilirsiniz.

