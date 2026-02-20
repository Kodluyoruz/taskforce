# Static Kullanımı

Java'da **Static** deyimi, sınıf değişkenlerini ve ya sınıf metotlarını tanımlarken kullanılır. Eğer bir sınıfa ait **değişkenlerin** başına "**static**" yazılırsa, o değişkenler artık **sınıf değişkeni** olurlar. Sınıf değişkeni olarak tanımlanan değişkenler, her nesne oluşturduğumuzda **ayrı ayrı** oluşmazlar. Sınıfa ait ne kadar nesne olursa olsun, sınıf değişkenleri 1 tanedir. Sınıfa ait herhangi bir nesne üzerinden bu değişkene ulaşılabilir. Sınıf değişkenlerinin bir diğer özelliği ise, ilgili sınıfa ait hiç nesne oluşturulmasa bile bellekte yer kaplarlar.

```java
public class Player {
    static int onlinePlayers;

    Player() {
        onlinePlayers++;
    }

    public static void main(String[] args) {

        Player p1 = new Player();
        Player p2 = new Player();
        Player p3 = new Player();

        System.out.println("Online oyuncular : " + Player.onlinePlayers);
    }
}

```

Eğer sınıfa ait metotlardan bir yada birden fazlasının önüne **"static"** deyimi yazılırsa, o metotlar sınıf metodu olurlar. Sınıf metotlarının en önemli özelliği, ilgili sınıfa ait nesne oluşturmadan sınıf metodu çağırılabilir. Bir sınıf değişkeninin, henüz nesne oluşturulmasa da bellekte fiziksel olarak yer kapladığını söylemiştik. Bir sınıf metodunun ise nesne oluşturulmadan, sınıf adı üzerinden çağrılabildiğini belirttik. Bu durumda, nesne var olmadan çağrılabilecek olan sınıf metotları, nesne var olmadan bellekte var olamayan olgu değişkenlerine erişmesi olanaklı değildir. Benzer şekilde, nesne var olmadan bellekte var olan sınıf değişkenleri üzerinde işlem yapan yöntemlerin, nesne var olmadan çağrılabilmeleri gerekir.

```java
public class Course {
    String name;
    String code;
    String prefix;
    int note;

    public Course(String name, String code, String prefix) {
        this.name = name;
        this.code = code;
        this.prefix = prefix;
        this.note = 0;
    }

    public static void courseList() {
        String[] courseList = {"fizik", "kimya", "matematik"};
        for (String courseName : courseList) {
            System.out.println(courseName);
        }
    }

    public static void main(String[] args) {
        Course c1 = new Course("Mat-101" , "MAT" , "MAT");
        Course.courseList();
    }
}
```

