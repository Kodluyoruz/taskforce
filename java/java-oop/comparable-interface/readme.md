# Comparable Interface (Arayüzü)

Yazılımları kodlarken bir veri kümesinin sıralanması, veri kümesinde aranan bir elemana ulaşılması gibi gereklilikler mutlaka ortaya çıkacaktır. Özellikle, veri kümesinin artan veya azalan şekilde sıralanması gibi istekleri karşılamak gerekecektir. Verileri sıralamak için <, >, == gibi operatörleri kullanabiliriz. İlkel veri tipleri zaten varsayılan olarak bu operatörlerle çalışabilir. Zaten, 5 sayısının 10’dan küçük olup olmadığını kontrol etmek basit ve mantıklıdır. Fakat, “Order” tipinde bir sınıf oluşturduğunuzu düşünün bu sınıf içinde “value” isimli değişken siparişe ait toplam ücret değerini tutuyor olsun. Sizden kullanıcının tüm geçmiş siparişlerini en yüksek değerden en küçüğe doğru sıralamanızı istediklerinde Java’da bu sıralamayı yapmak için iki araç kullanabilirsiniz. Yazılımcının tasarladığı sınıflar olsun veya Java’da kendiliğindne tanımlı sınıflar olsun. Bunlardan oluşturduğumuz nesneleri direkt olarak >, <, == ile ifadeler ile kıyaslamak anlamsız kalır. İki nesnenin neye göre büyük veya küçük olduğunu tanımlamak gerekecektir. Bu nedenle bahsettiğimiz bu iki interface bizlere sıralama yapabilmek için yardımcı olacaktır.

\- Comparable Interface

\- Comparator Interface

Biz önce "Comparable" interface’i inceleyeceğiz.

"Comparable" interface’i sınıflara kalıtım verir. Böylece, bu interface’den kalıtım alan sınıflar yani veri tipleri sıralanabilir özelliğine sahip olurlar. Sıralanabilirlik her veri tipi için olması gereken bir özelliktir. Fakat, sıralama için kurulacak algoritma ve hangi değişkenlere göre sıralama yapılabileceği alt sınıflarda doldurulması gerekir. Yani özetle sıralama için gerekli olan algoritma alt sınıflarda değişiklik gösterebilir ve her alt sınıf bu sıralama mantığını kendine göre doldurmalıdır. Bu da bize soyutlama yapmamız gerektiğini anlatıyor. Bu nedenle "Comparable" veri tipi bir interface olarak tanımlanmıştır.

"Comparable" interface içinde sadece "compareTo" metodu bulunur. Bu interface’den kalıtım alan sınıflar bu  fonksiyonu ezmek (override etmek)  zorundadırlar.

"compareTo" metodu kıyaslama yapabilmek için aynı veri tipinden bir tane nesne kabul eder. Fonksiyona gönderilen bu nesne ile kıyaslama yapılan nesnenin bazı özellikleri büyüklük küçüklük durumuna göre kıyaslanır. Bu metodun çalışma mantığı aşağıdaki gibidir.

"Order" sınıfından oluşturulmuş "a" ve "b" isminde iki tane nesnemiz olsun bunları kıyaslamaya kalktığımız şöyle bir kural ortaya çıkacaktır.

"a.compareTo(b)" dediğimizde:

Eğer, a < b ise -1,

Eğer, a == b ise 0,

Eğer, a > b ise 1,

şeklinde özetleyebiliriz. Şimdi bunu basit bir örnekle açıklayalım.

```java
public class Order implements Comparable<Order> {

        private double value;

        public Order(double value) {
               this.value = value;
        }

        public double getValue() {
               return this.value;
        }

        public void setValue(double value) {
               this.value = value;
        }

        @Override
        public int compareTo(Order order) {

               // Eğer b > a gibi
               if(order.getValue() > this.getValue()) {
                       return -1;
               }
               // Eğer a == b gibi
               else if(order.getValue() == this.getValue()) {
                       return 0;
               }
               // Eğer b < a gibi
               else if(order.getValue() < this.getValue()) {
                       return 1;
               }
               
               return this == order ? 1 : -1;
        }

        @Override
        public String toString() {

               return String.valueOf(this.getValue());
        }
}
```

"Order" sınıfı "implements Comparable" ifadesiyle kalıtım alıyor. Kalıtım aldıktan sonra "comperaTo" metodunu override ederek kendi ihtiyacına göre dolduruyor. Eğer fonksiyona gönderilen "order" isimli "Order" tipindeki nesnenin ücreti mevcut nesnenin ücretinden büyükse -1 dönüyoruz. Eğer, her iki nesnenin ücreti aynı ise 0 dönüyoruz. Eğer ki mevcut nesnenin ücret değeri fonksiyona gelen "order" isimli nesneden büyükse 1 dönüyoruz.

```java
public static void main(String[] args) {

        List<Order> orders = new ArrayList<Order>();
        orders.add(new Order(1001.5));
        orders.add(new Order(90.5));
        orders.add(new Order(1001.1));
        orders.add(new Order(20));
        orders.add(new Order(78.3));
        orders.add(new Order(9.4));

        System.out.println("Before Sorting");
        for(Order order : orders) {
               System.out.println(order);
        }

        Collections.sort(orders);

        System.out.println("After Sorting");
        for(Order order : orders) {
               System.out.println(order);
        }
}
```

Yukarıdaki örnekte "ArrayList" tipinde düz bir liste tutan veri yapısı oluşturuyoruz. Bu veri yapısına Order sınıfından oluşturduğumuz nesneleri ekliyoruz. Ardından, "Collections" isimli sınıfın "sort" isimli statik fonksiyonu ile listemizi sıralıyoruz. Bu sıralamayı yapabilmemizin sebebi "Order" sınıfının "Comparable" interface'den kalıtım alması ve "compareTo" fonksiyonunu doldurmamız. Bu fonksiyonda sıralamanın yönünü belirledik. Sıralamamız ücretlerin küçükten büyüğe doğru sıralanmış halidir.

"Comparable" interface kendi ürettiğimiz sınıflara ait nesnelerin birbiriyle sıralanmasını sağlar.

Peki listeyi büyükten küçüğe göre sıralamak isteseydik ne yapmamız gerekirdi. Bu durumda 1 ve -1 ifadelerinin yerini değiştirmek gerekecekti. Yani, "compareTo" fonksiyonunun içini aşağıdaki şekilde değiştirecektik.

```java
@Override
public int compareTo(Order order) {

        // Eğer b > a gibi
        if(order.getValue() > this.getValue()) {
               return 1;
        }
        // Eğer a == b gibi
        else if(order.getValue() == this.getValue()) {
               return 0;
        }
        // Eğer b < a gibi
        else if(order.getValue() < this.getValue()) {
               return -1;
        }

        return this == order ? 1 : -1;
}
```

İlkel veri tiplerini sıralamak istersek ise çeşitli statik fonksiyonlar bize yardımcı olmaktadır. Her ilkel veri tipinin sınıf tabanlı bir karşılığı vardı. Önceki konularda bundan bahsetmiştik.

Bu sınıflar içinde kıyaslama yapabilmek için “compare” isimli statik fonksiyon bulunur.

```java
double price1 = 100.2;
double price2 = 90.3;

// Eğer price1 > price2 ise 1 döndürür.
System.out.println(Double.compare(price1, price2));  

int age1 = 21;
int age2 = 34;
// Eğer age1 < age2 ise -1 döndürür.
System.out.println(Integer.compare(age1, age2));

long pageCount1 = 1000;
long pageCount2 = 1000;
// Eğer pageCount1 == pageCount2 ise 0 döndürür.
System.out.println(Long.compare(pageCount1, pageCount2));
```

"compareTo" metodunu aynı zamanda Comparable interface olmadan da String tipindeki verileri alfabetik olarak kıyaslamak için kullanabiliriz.

```java
public class Main {

   public static void main(String args[]) {
      String str1 = "kodluyoruz";
      String str2 = new String("java");
      String str3 = new String("kodluyoruz");
      
      //str1 sözcüğü alfabetik ortamda str2'den sonra gelir ve dolayısıyla daha büyük kabul edilir; bu nedenle result'ın sayısal değeri 1 atanır.
      int result = str1.compareTo( str2 );
      System.out.println(result); 
       
      //str1 sözcüğü alfabetik ortamda str2'den önce gelir ve dolayısıyla daha küçük kabul edilir; bu nedenle result'ın sayısal değeri -1 atanır.
      result = str2.compareTo( str3 );
      System.out.println(result);
       
      //str1 sözcüğü str2 ile aynıdır; bu nedenle result'ın sayısal değeri 0 olarak atanmıştır.
      result = str1.compareTo( str3 );
      System.out.println(result);
       
   }
}
```

Bu durumda **Comparable** interface’ini **kullanmadan da compareTo metodu** yazılabilir. Ancak interface’leri farklı class'lar arasında bir bağ kurmak için kullanırız. Neden Comparable interface kullanmamız gerektiğini daha iyi anlamak için Mehmet Fatih Ercik'in  [medium yazısına](https://medium.com/codable/interfacelerin-mantigi-nedir-2-ornek-kullanimlar-60577917caeb)  bakabilirsiniz.
