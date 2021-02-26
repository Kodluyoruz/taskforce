#### &quot;super&quot; Anahtar Kelimesi ile ATA Sınıfa Erişim Sağlamak

Alt sınıflar kalıtım yoluyla ATA sınıfa ait metotları ve değişkenleri de kendi bünyelerine alabilirler. ATA sınıftaki bir değişkene veya metoda erişmek istediğimizde &quot;super&quot; anahtar kelimesini kullanırız.

&quot;super&quot; Anahtar Kelimesi ile ATA Sınıfın Kurucularını Çağırmak

````java
public ElectricCar() {
	
	// Car sınıfına ait parametresiz kurucu metodu çağırıyoruz.
	super();
}

public ElectricCar(String brand, String licensePlate, double power) {
	
	// Car sınıfına ait parametreli kurucu metodu çağırıyoruz.
	// Bu kurucu metot "public Car(String brand, String licensePlate)" kendisidir.
	super(brand, licensePlate);
	
	this.power = power;
}

````

&quot;**super();**&quot; komutuyla birlikte &quot; **Car**&quot; sınıfına ait parametresiz kurucu metodu çağırıyoruz. Böylece, kalıtım aldığımız ATA sınıfın kurucusuna erişmiş olduk.

&quot;**super(brand, licensePlate);**&quot; komutuyla &quot; **Car**&quot; sınıfına ait parametreli kurucu metodu çağırıyoruz. Bu kurucu metot &quot;**public Car(String brand, String licensePlate)**&quot; kendisidir.

&quot;super&quot; Anahtar Kelimesi ile ATA Sınıfın Metotlarını Çağırmak

&quot;super&quot; anahtar kelimesi ile ATA sınıfa ait kurucu metotları, değişkenleri ve fonksiyonları çağırabiliriz.

`````java
@Override
public void showInfo() {
	
	// üst sınıfın, yani "Car" sınıfının "showInfo" metodunu çağıracaktır.
	super.showInfo();
	
	System.out.println("ElectricCar: " + toString());
}
`````

&quot;super.showInfo();&quot; komutuyla birlikte ATA sınıfa ait, yani &quot;Car&quot; sınıfına ait &quot;showInfo&quot; metodunu çağırmış oluyoruz.

Konumuza bir başka örnekle devam edelim.Daha önce kalıtım dersimizde sınıfların başka sınıflara kalıtım verdiğini görmüştük.Kalıtımı veren sınıfa ait özellikler kalıtım verdiği alt sınıflarına da aktarılır ve alt sınıflar tarafında da kullanılabilir.Bu yapıyı kurarken dikkat etmemiz gereken en önemli noktalardan biri kalıtımı veren super sınıfımıza ait özelliklerin hepsi kalıtımı alan alt sınıfımız tarafından da kullanılabilir olmasıdır.Sadece alt sınıfımıza ait olan özellikler ek olarak alt sınıfımızda tanımlanabilir.Bu anlatımı bir örnekle açıklayalım.

Bir bankacılık uygulaması yaptığınızı düşünelim ve kullanıcılar iki farklı tipte kart kullanabilmektedirler.Bunlardan birincisi hesaplarına bağlı olan ve sadece hesaplarındaki parayı kullanabildikleri banka kartı ve diğeri ise belirli limite sahip kredi kartı.Bu iki kartın da alabilecekleri ortak değişkenler olmakla beraber sadece kendi tiplerine özgü bazı değerlerde vardır.Bu nedenle öncelikle bir kart sınıfı oluşturalım ve ardında kredi ve baka kartını kart sınıfımızdan kalıtım alacak şekilde oluşturalım.

`Card.java`

```java
public class Card {

     String cardNumber;
     Date expiredDate;
     double securityNumber;

    public Card(String cardNumber, Date expiredDate, double securityNumber) {
        this.cardNumber = cardNumber;
        this.expiredDate = expiredDate;
        this.securityNumber = securityNumber;
    }
}
```

​			

Görüldüğü üzere öncelikle kart sınıfımızı oluşturduk ve her tipte kartın sahip olabileceği değerler olan kart numarası,kart geçerlilik süresi ve kart güvenlik numarası değişkenlerini sınıfımıza atadık.

`CreditCard.java`

```java
public class CreditCard extends Card {

    double cardLimit;

    public CreditCard(String cardNumber, Date expiredDate, double securityNumber,double cardLimit) {
        super(cardNumber, expiredDate, securityNumber);
        this.cardLimit=cardLimit;

    }
}
```

Ardından bu sınıftan kalıtım alan kredi kartı sınıfımızı oluşturuk.Kredi kartı sınıfımız,yapılandırıcısında super anahtar kelimesi ile kalıtım aldığı üst sınıf olan kart sınıfına ait değişkenleri tanımladı.Bundan sonra kredi kartı sınıfımız oluşturulduğu zaman kalıtım aldığı üst sınıftaki değişkenlerda tanımlanacaktır.Bu değişkenlere ek olarak her kredi kartına ait olan kredi kartı limiti değişkenimizde tanımlanmış oldu.

`DebitCard.java`

```java
public class DebitCard extends Card{

    String accountNumber;

    public DebitCard(String cardNumber, Date expiredDate, double securityNumber,String accountNumber) {
        super(cardNumber, expiredDate, securityNumber);
        this.accountNumber=accountNumber;
    }
}
```

Kart sınıfımızdan kalıtım alan ikinci sınıfımız ise debit kart(banka kartı) sınıfımız.Kredi kartı sınıfımızda olduğu gibi bu sınıfımızda da yapılandırıcımızda super anahtar kelimesi ile ata sınıfımıza ait olan değişkenlere erişiyoruz ve tanımlıyoruz.Ardından her debit kartta olan,kartımızın hangi hesap numaralı hesabımnıza ait olduğunu belirten hesap numarası değişkenimizi tanımladık.Gelin bu sınıflarımızı main sınıfımızda kullanalım.

`Main.java`

```java
public static void main(String[] args) throws ParseException {

    String cardNumber ="54561234565215";
    Date expiredDate=new Date(System.currentTimeMillis());
    int securityNumber =123;
    String accountNumber ="6565125652565689";

    Card debitCard=new DebitCard(cardNumber,expiredDate,securityNumber,accountNumber);

     }
```

Gördüğünüz gibi kart upcasting işlemi ile yeni bir debit kart oluşturduk ve ilgili değişkenleri atadık.Programımızın çıktısı şu şekilde olacaktır.

```java
DebitCard{cardNumber='54561234565215', 
expiredDate=Thu Feb 11 17:11:17 EET 2021, 
securityNumber=123.0, 
accountNumber='6565125652565689'}
 }
```

Aynı şekilde main sınıfımızda bir adet de kredi kartı oluşturalım.

```java
public static void main(String[] args) throws ParseException {   		

    	String cardNumber ="1234565625632523";
        Date expiredDate=new Date(System.currentTimeMillis());
        int securityNumber =565;
        double creditLimit=2000;

        Card creditCard = new CreditCard(cardNumber,expiredDate,securityNumber,creditLimit);
	}
```

Gördüğünüz gibi kart upcasting işlemi ile bu seferde bir kredi kartı oluşturduk ve ilgili değişkenleri atadık.Üst sınıfımızın değerlerine ek olarak ise kredi kartı limitini tanımlamış olduk.Programımızın çıktısı şu şekilde olacaktır.		

```java
CreditCard{cardNumber='1234565625632523',
expiredDate=Thu Feb 11 17:13:53 EET 2021, 
securityNumber=565.0, 
cardLimit=2000.0}
```

Yukarıdaki örneğimizde ata sınıfın değişkenlerinin kalıtım alan alt sınıflar tarafından super anahtar kelimesi ile nasıl kullanıldığını gördük.Peki ya ata sınıfın metodlarını kullanmak istersek de aynı durum geçerli mi?Bu durumu bir örnekle açıklayalım.Bir hastahane sistemi yazdığımızı düşünelim.Sistemimizde doktor ve hasta olmak üzere 2 adet sınıf olsun ve insan sınıfından kalıtım alsınlar.Hem hasta hem de doktor her insana ait olan konuşma fonksiyonunu yerine getirebilir.Fakat hastlığın tedavisi hakkında sadece doktor konuşabilirken,hastalığın şikayet konuşmasını de sadece hasta kişi yapabilir.Bu durumda konuş fonksiyonu ata sınıftan kalıtımla alınabilirken hastalık hakkında konuş işlevini sadece doktor,şikayetini anlat fonksiyonunu ise sadece hasta yerine getirebilir.Bu durumu örneğimizde inceleyelim.

`Person.java`

```java
public class Person {

    public void talk() {
        
       System.out.println("Person talking..");
 }
}
```

`Patient.java`

```java
public class Patient extends Person{

  public void patientTalk(){

      super.talk();
      System.out.println("The patient is talking about her illness ");
  }
}
```

`Doctor.java`

```java
public class Doctor extends Person {

    public void doctorTalk(){

        super.talk();
        System.out.println("The doctor talks to the patient about the patient's illness. ");
    }
}
```

Uygulamımızda görüldüğü üzere konuşma fonksiyonu insan sınıfına ait olurken super anahtar kelimesi ile kişi sınıfını kalıtım alan alt sınıflarda bu metodu kullanabilmektedir.Uygulamamızı main sınıfımızda çalıştıralım.

`Main.java`

```java
public static void main(String[] args) throws ParseException {

    Patient patient=new Patient();
    Doctor doctor = new Doctor();

    patient.patientTalk();
    doctor.doctorTalk();

 }
```

Uygulamamızın çıktısı aşağıdaki gibi olacaktır.

    Person talking..
    The patient is talking about her illness 
    Person talking..
    The doctor talks to the patient about the patient's illness. 

 Super anahtar kelimesi ile ata sınıfın yapılandırıcısına erişebiliriz.Ata sınıftan kalıtım alan her alt sınıf super anahtar kelimesi ile ata sınıfa ait yapılandırıcıyı kullanabilir.Bu konuyu örnek ile gösterelim.

`Process.java`

```java
public class Process {

    public Process(){
        System.out.println("Process is starting");
    }

}
```

`Task.java`

```java
public class Task extends Process{

    public Task(){

        super();
        System.out.println("Task is running");
        System.out.println("Task is finished");

    }

}
```

Örneğimizde ilk olarak Process(iş) sınıfı oluşturduk.Bu sınıfımızın yapılandırıcısı çalıştığı zaman işin başladığını bildiren bir mesaj döndürüyor.Bu sınıfı kalıtım alan task(görev) adında bir sınıf oluşturduğumuzda yapılandırıcısında super anahtar kelimesini kullanıyoruz.Bu sayede kalıtım aldığı ata sınıfının yapılandırıcısına erişiyor ve çalıştırmış oluyoruz.Ardından taskımızın çalıştığını ve bittiğini bildiren bir mesajı ekrana yazdırıyoruz.Programımızı main sınıfımızda çalıştıralım ve çıktımıza bakalım.

`Main.java`

```java
public static void main(String[] args) throws ParseException {

    Task task = new Task();
 }
```

Programımızın çıktısı aşağıdaki gibi olacaktır.

```java
Process is starting
Task is running
Task is finished
```

