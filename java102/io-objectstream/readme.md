# Serialization

Java bilindiği üzerine nesneye yönelik bir dil. Ancak nesneleri bazen JVM dışında kullanmak gerekebiliyor. Fakat dışarıda kullandığımız bir nesnemizi tekrar içeride kullanmak istediğimizde nesne içinde kullanılan değerlerin hangi tipte olduğunu öğrenemiyoruz. Yani herhangi bir sınıftan bir nesne üretip, bunu bir dosyaya yazdırıp onu tekrar dosyadan okuduğumuzda değerlerin tip bilgisini bilememe problemimiz var. İşte tam bu durumda Java Serialization API yardımımıza koşuyor.

Java Serialization API sayesinde bir nesnenin birebir kopyasını, Java platformu dışında da depolayabiliriz. Bu mekanizma ile daha sonra, nesneyi depolanan yerden çekip, aynı durum (state) ve özellikleri ile kullanmaya devam edebiliriz. Tüm bu sisteme, Object Serialization (Nesne Serileştirme) adı verilir.

Nesneleri serileştirmek için yapılması gereken tek şey, serileştirilecek nesnemizin serileştirilebilir (serializable) olduğunu tagging interface sayesinde sınıf deklarasyonunun başında belirtmek.

Nesneleri serileştirmek için Java platformu 2 temel sınıf sunar. ObjectInputStream ve ObjectOutputStream adı verilen bu iki sınıf ile, Serializable interfaceini uygulayan herhangi bir sınıfı serileştirebiliriz. Bu iki sınıfdan ilki olan ObjectInputStream, ObjectInput interfaceini uygular ve serileştrilen nesneyi tekrar akışdan okumak için kullanılır. ObjectInputStream adındaki diğer sınıf, ObjectOutput interfaceini uygular ve herhangi bir nesneyi akışa yazdırmak için kullanılır.

````java

import java.io.Serializable;

public class Car implements Serializable {
    
    private String brand;
    private String model;

    Car(String brand, String model) {
        this.brand = brand;
        this.model = model;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }
}

````

# ObjectOutputStream

Java.io paketinin ObjectOutputStream sınıfı, ObjectInputStream tarafından okunabilen nesneleri yazmak için kullanılabilir. OutputStream soyut sınıfını genişletir.

Temel olarak ObjectOutputStream, sınıf adını ve nesne değerlerini kullanarak Java nesnelerini kodlar ve karşılık gelen akışları oluşturur. Bu süreç erileştirme (serialization) olarak bilinir.

Dönüştürülen akışlar dosyalarda saklanabilir ve ağlar arasında aktarılabilir.

Not: ObjectOutputStream sınıfı yalnızca Serializable arabirimini uygulayan nesneleri yazar. Bunun nedeni, nesnelerin akışa yazılırken serileştirilmesi grekmesidir.

Bir nesne çıktı akışı oluşturmak için önce java.io.ObjectOutputStream paketini içe aktarmalıyız.

````java

// ObjectOutputStream'deki nesnelerin yazıldığı bir FileOutputStream oluşturur
FileOutputStream fileStream = new FileOutputStream(String file);

// ObjectOutputStream'i oluşturur
ObjectOutputStream objStream = new ObjectOutputStream(fileStream);

````

````java

import java.io.FileOutputStream;
import java.io.ObjectOutputStream;

public class SerialTest {
    public static void main(String[] args) {

        try {
            Car car = new Car("Hyundai", "Getz");
            FileOutputStream file = new FileOutputStream("output.txt");
            ObjectOutputStream write = new ObjectOutputStream(file);
            write.writeObject(car);
            write.close();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}

````

# ObjectInputStream

Java.io paketinin ObjectInputStream sınıfı, daha önce ObjectOutputStream tarafından yazılmış nesneleri okumak için kullanılabilir.

InputStream soyut sınıfını genişletir.

````java
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;

public class SerialTest {
    public static void main(String[] args) {

        try {
            Car car = new Car("Hyundai", "Getz");
            FileOutputStream file = new FileOutputStream("output.txt");
            ObjectOutputStream write = new ObjectOutputStream(file);
            write.writeObject(car);

            // Nesneyi Okumak
            FileInputStream fileIn = new FileInputStream("output.txt");
            ObjectInputStream read = new ObjectInputStream(fileIn);

            // Reads the objects
            Car newCar = (Car) read.readObject();

            System.out.println("Car Brand : " + newCar.getBrand());
            System.out.println("Car Model: " + newCar.getModel());

            read.close();
            write.close();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}

````
