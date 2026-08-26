# Metotların Ezilmesi (Overriding Metods)

Java'da alt sınıflar ATA sınıftan aldıkları metotları ezebilirler. Bu yönteme "Overriding" denilmektedir. Alt sınıfta üst sınıfın metodunu ezmek için `@Override` anahtar kelimesi kullanılır.

Önemli: Metodu ezebilmek için alt sınıftaki metot imzasıyla, üst sınıftaki metot imzası aynı olması gerekmektedir. Metot imzasından kasıt, metot isimlerinin aynı olması, aynı girdileri alması ve aynı tipte değer döndürmeli veya döndürmemelidir. Ayrıca, Java'da üst sınıftaki "private" metotları ezemezseniz, yani "override" edemezsiniz.

```java
@Override
protected void showInfo() {
	System.out.println("ElectricCar: " + toString());
}
```

Yukarıdaki "showInfo" metodu, "ElectricCar" sınıfı içinde `@Override` tanımlamasıyla üst sınıftaki metodu ezmektedir. "ElectricCar" tipinden oluşturulan nesneler üzerinden "showInfo" metodunu çağıracak olursak "ElectricCar" sınıfı içindeki metodu çağıracaktır.

```java
ElectricCar electricCar3 = new ElectricCar();
electricCar3.setLicensePlate("45 FB 1907");
electricCar3.setBrand("BMW");
/* ElectricCar tipinde bir nesne yaratıp, bu nesne üzerinden "showInfo" metodunu çağırdığımızda,
 * "ElectricCar" sınıfı içindeki metodu çağıracaktır. 
 * Metot ezmesi yaptığımız için kalıtım aldığı üst sınıftaki "Car" sınıfındaki "showInfo" metodunu çağırmayacaktır.
 */
electricCar3.showInfo();
```

Ekran Çıktısı:

```terminal
ElectricCar: [BMW 45 FB 1907 1000.0]
```

"Car" sınıfı tipinden üretilmiş olan nesne üzerinden "showInfo" metodu çağırıldığında alt sınıftakileri değil de "Car" sınıfında tanımlı olan metodu çağıracaktır.

```java
Car carObject1 = new Car();
carObject1.setBrand("Mercedes");
carObject1.setLicensePlate("34 AKH 1970");
/* Car tipinde bir nesne yaratıp, bu nesne üzerinden "showInfo" metodunu çağırdığımızda,
 * "Car" sınıfı içindeki metodu çağıracaktır. Alt sınıftaki sınıflara ait metotları çağırmayacaktır.
 */
carObject1.showInfo();
```

Ekran Çıktısı:

```terminal
Car:[Mercedes 34 AKH 1970]
```

### Overriding - Inheritance ve super ilişkisi

- ****override** olması için inheritance olması gerekir.**
- **miras alınan sınıftaki metodu dönüş tipi yani imzası ve parametreleri aynı olacak şekilde yeniden düzenleyebiliriz.**
- is-a ilişkisi varsa inheritance vardır.
- Örneğin: çalışan ve yönetici olarak iki farklı başlık olsa da sonuç olarak ikisi de çalışan.
- Bir class(sınıf) ne kadar genel yapıya sahipse o derece ana class olma özelliği vardır.
- Yani tüm neseneler için ortak özellikleri barındıran class olarak düşünülebilir.

#### Örnek:
```java
public class Worker { //SuperClass or BaseClass

    private String name;
    private int salary;
    private String department;

    public Worker(String name, int salary, String department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getSalary() {
        return salary;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    @Override
    public String toString() {
        return "Worker{" +
                "name='" + name + '\'' +
                ", salary=" + salary +
                ", department=" + department +
                '}';
    }

    public void work(){
        System.out.println("Worker is working...");
    }

    public void changeDep(String newDepartment){
        System.out.println("Department is being changed..");
        this.department = newDepartment;
        System.out.println("new Department:"+ this.department);
    }

    public String info(){
        return this.name + " "+this.department+" "+this.salary;
    }
}
```

- Worker içindeki özellikler private olduğu için sadece o sınıf içinde kullanılabilir.
- Bu nedenle Manager sınıfında bu verilere erişebilmek için constructor oluşturuyoruz.
- Sadece constructor yetmez tabi ek olarak bu verilerin superclass'dan geldiğini ifade etmek için
- "super" anahtar kelimesini kullanıyoruz.
- Ek olarak Manager sınıfına sadece o sınıfa ait özellikler ve metodlar eklenir.
- super anahtar kelimesi ile üst sınıfın metedonu çağırırken super kelimesini kullanmadan çağırırsak daha güvenli olur.
- Subclass içinde override edilmiş metod varsa o aktif olur eğer yoksa direk üst sınıfın metodunu çağırır.

```java
public class Manager extends Worker{ //SubClass
    private int responsible_person;

    public Manager(String name, int salary, String department, int responsible_person) {
        super(name, salary, department);
        this.responsible_person = responsible_person;
    }

    public void increaseWage(int amount){
        System.out.println("İncrease amount:"+amount);
    }

    @Override
    public String toString() {
        return "Manager{" +
                "name='" + getName() + '\'' +
                ", salary=" + getSalary() +
                ", department=" + getDepartment() +
                ", responsible_person=" + responsible_person +
                '}';
    }

    @Override
    public String info() {
        return super.info() +" "+this.responsible_person;
    }
}
```

```java
public class Main {

    public static void main(String[] args){

        Manager mng = new Manager("john",2500,"IT",10);
        System.out.println(mng.toString());
        System.out.println(mng.info());

        mng.increaseWage(200);
    }

}
```

### Kaynaklar

- [Oracle - JavaSE Overriding](https://docs.oracle.com/javase/tutorial/java/IandI/override.html)
