# Constructor (Kurucu) Metotlar

Kurucu metotlar sınıf tasarlanırken yazılırlar. Sınıfınızı yazarken kurucu metotlarınızı da tanımlayabilirsiniz. Eğer sınıf içinde hiç kurucu metot tanımlamazsınız parametresiz boş bir kurucu metot Java tarafından otomatik olarak tanımlanır.

Kurucu metotlar ilgili sınıftan bir nesne üretmeye çalıştığınızda daha nesne üretme aşamasında çalıştırılan özel metotlardır (fonksiyonlardır). **Kurucu metotların isimleri Sınıf ismiyle aynı olmak zorundadır.** Dönüş tipi olarak veya void olarak herhangi bir tanımlama yapılmasına gerek yoktur.

"**new**" anahtar kelimesi ile nesne üretirken kurucu metot çağrımı yapılır. İki tip kurucu metot vardır:

- Parametresiz Varsayılan Kurucu Metot
- Parametreli Kurucu Metot

Car sınıfımız :

```java
public class Car {
    // nitelikler
    String type;
    String model;
    String color;
    int speed;

    // Constructor (Kurucu) Metot
    Car(String type, String model, String color) {
        this.type = type;
        this.model = model;
        this.color = color;
        this.speed = 0;
    }

    // davranışlar
    int increaseSpeed(int increment) {
        speed += increment;
        return speed;
    }

    int decreaseSpeed(int decrease) {
        if (speed > 0) {
            speed -= decrease;
        }
        return speed;
    }

    void printSpeed() {
        System.out.println("Speed : " + speed);
    }

    void printInfo() {
        System.out.println("================");
        System.out.println("Model  : " + this.model);
        System.out.println("Color  : " + this.color);
        System.out.println("Type  : " + this.type);
        System.out.println("Speed  : " + this.speed);
    }
    // ...
}
```

Nesnelerimiz : 

```java
public class Main {
    public static void main(String[] args) {
        Car audi = new Car("Sports", "Audi", "red");
        audi.increaseSpeed(20);
        audi.printInfo();

        Car bmw = new Car("Sports" , "BMW" , "blue");
        bmw.increaseSpeed(10);
        bmw.increaseSpeed(25);
        bmw.increaseSpeed(5);
        bmw.decreaseSpeed(25);
        bmw.printInfo();

        Car mercedes = new Car("Corporate" , "Mercedes" , "black");
        mercedes.speed = 20;
        mercedes.printInfo();

    }
}
```

Programın çıktısı :

```
================
Model  : Audi
Color  : red
Type  : Sports
Speed  : 20
================
Model  : BMW
Color  : blue
Type  : Sports
Speed  : 15
================
Model  : Mercedes
Color  : black
Type  : Corporate
Speed  : 20
```

