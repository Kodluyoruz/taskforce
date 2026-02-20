# Erişim Denetimi

Nesne yönelimli programlamanın 4 temel kavramından biri **kapsüllemedir (encapsulation).** Bu kavram basitçe, sınıfın içine yazdığımız alanları ve metotları gizleyebileceğimizi ifade eder. Bu gizleme farklı seviyelerde olabilir. Alanları ve metotları gizleyebilmek için **erişim belirteçleri**ni **(access modifiers)** kullanırız.

## Erişim Belirteçleri

Java’da 4 adet erişim belirteci vardır:

- **public**: Bu erişim belirteciyle belirtilen bir alana veya metoda her yerden erişilebilir. **public** deyimini kullanır. Gizlilik seviyesi en düşük olan erişim belirtecidir. 
- **default:** Yalnızca aynı paket içinden erişilebilir. Bu belirteç **default** olarak isimlendirilmesine rağmen, herhangi bir deyim yazılmaz. Metotlara, alanlara ve sınıflara uygulanır.
- **protected:** Yalnızca aynı paket içinden veya alt sınıflardan erişilebilir. **protected** deyimini kullanır. Metotlara, değişkenlere ve yapıcı sınıflara (constructors) uygulanır.
- **private:** Yalnızca aynı sınıf içinden erişilebilir. **private** deyimini kullanır. Gizlilik seviyesi en yüksek olan erişim belirtecidir. Metotlara, değişkenlere ve yapıcı sınıflara (constructors) uygulanır.

## Neden Erişim Belirteçleri Gereklidir ?

- Hassas verilerin saklanması sağlanır, erişim kısıtlanır. ([Principle Of Least Privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege) - PoLP yaklaşımı)
- Sınıfı kullanacak olan geliştiricilerin hangi üyelere erişebileceği belirlenir.
- Verilerin tutarlılığı sağlanır.

Aşağıdaki örnekleri inceleyelim:

```java
package package1;

class Box
{
	public int width;
	public int height;
	public int depth;
}
```

```java
package package2;

class Main
{
	public static void main(String[] args)
	{
		Box box = new Box();
		box.width = 100;
	}
}
```

Yukarıdaki örnekte _Box_ ve _Main_ sınıfları farklı paketler içindedir. Buna rağmen, _Box_ sınıfının alanları **public** olarak belirtildiği için, farklı pakette olmasına rağmen _Main_ sınıfından erişilebilir.

```java
package package1;

class Box
{
	int width;
	int height;
	int depth;
}
```

```java
package package2;

class Main
{
	public static void main(String[] args)
	{
        Box box = new Box();
	    box.width = 100; // Bu satır hataya sebep olur
	}
}
```

Yukarıdaki örnekte Box sınıfının alanlarına erişim **default** olarak belirlenmiştir, yalnızca **package1** paketinin içinden erişilebilir. Bu yüzden, _Main_ sınıfı **package2** paketi içinde olduğu için _Box_ sınıfının alanlarına erişmeye çalışıldığında hata fırlatılır.

```java
package package1;

class Box
{
	private int width;
	private int height;
	private int depth;
}
```

```java
package package1;

class Main
{
	public static void main(String[] args)
    {
		Box box = new Box();
		box.width = 100; // Bu satır hataya sebep olur
	}
}
```

Yukarıdaki örnekte _Box_ ve _Main_ sınıfları aynı paket içinde olmalarına rağmen, _Main_ sınıfından _Box_ sınıfının alanlarına erişilemez. _Box_ sınıfının alanları private olarak belirtildiği için yalnızca aynı sınıf içinden erişilebilir.

Yukarıdaki örnekler ile public, protected, private ve default (package-private) erişim belirleyicileri hakkında biraz bilgi sahibi olduktan sonra kafamızda takılan soru işareti varsa ya da sözel olarak karışık geldiyse aşağıdaki tablo kafanızdaki soru işaretlerini giderecektir. (Tablodaki kutucuklardaki X işareti olan kısımlar erişilebilir olduğunu göstermektedir. Boş olan kısımlar ise erişilemez olduğunu göstermektedir.)

| Erişi Düzenleyicisi              | public | protected | private | default |
| :------------------------------- | :----: | :-------: | :-----: | :-----: |
| Aynı sınıf                       |   X    |     X     |    X    |    X    |
| Aynı paketteki alt sınıflardan   |   X    |     X     |         |    X    |
| Aynı paket - Alt Sınıf Yok       |   X    |     X     |         |    X    |
| Farklı paketteki alt sınıflardan |   X    |     X     |         |         |
| Farklı paket - Alt Sınıf Yok     |   X    |           |         |         |

## Erişim Kontrolü ve Kalıtım

 Miras alınan yöntemler için ise bazı kurallar uygulanır.

1.Bir üst sınıf da public olarak oluşturulan metotlar tüm alt sınıflardan erişilebilir olmalıdır.

2.Ata sınıfta protected olarak oluşturulan metotlar, alt sınıfta protected veya public olmalıdır. Private olamazlar.

3.Private olarak belirtilen metotlardan miras alınamaz.

Yukarıdaki bilgilerden sonra tüm erişim belirleyicileri kullanarak öğrendiklerimiz tekrar edip pekiştirelim. Elimizde iki farklı paket var ve paketlerin isimleri **package1** ve **package2**. **Package1** paketinde _A_, _B_ ve _Main_ sınıfları bulunuyor.**Package2** paketinde ise _C_ ve _D_ sınıfları yer alıyor. Bu sınıflarda farklı erişim belirleyicilerine sahip metotlar ve değişkenler var. Şimdi bu sınıfları biraz daha ayrıntılı bakıp aralarındaki ilişkiyi anlamaya çalışalım.

```java
package package1;

//A sınıfı projenin her yerinde erişlmesi için public erişim belirleyicisi kullanıldı.
public class A {
    private String name;
    protected int number;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    private void aRead(String read) {
        System.out.println("A sınıfındaki private erisim belirleyicisine sahip aRead metodu çalıştırıldı.:" +
                " \nOkunan değer: " + read);
    }

    void aWrite(String write) {
        System.out.println("A sınıfındaki default erisim belirleyicisine sahip aWrite metodu çalıştırıldı.:" +
                " \nYazılan deger: " + write);
    }

    protected void aRun(String name) {
        this.name = name;
        System.out.println("A sınıfındaki protected erisim belirleyicisine sahip aRun metodu calistirildi.:" +
                " \n " + name + " calisiyor.");
    }

    public void aSleep() {
        System.out.println("A sınıfındaki public erisim belirleyicisine sahip aSleep metodu calistirildi.");
    }
}


```

Yukarıdaki örnekte A sınıfının içinde farklı erişim belirleyicilerine sahip alanlar ve metotlar görülmektedir. 

- _A_ sınıfındaki name alanı private erişim belirleyicisi kullanılarak tanımlanmıştır ve bu alana sadece _A_ sınıfı içerisinden ulaşılabilecektir. Fakat  name alanının olduğumuz paket içinden ve farklı paketteki sınıflardan erişilebilmesi için getter setter metotlarını kullandık yani  tekrardan yazılıp okunabilmesini sağladık.(Getter-Setter metotlarının erişim kısmı public olmalı. Eğer Setter kısmını private olarak ayarlarsanız name alanınızı sadece okunabilir yapmış olursunuz.(Diğer sınıflar için read only yapmış olursunuz.)). 

- Name alanından sonra protected erişim belirleyicisi ile number alanı tanımladık bu alanı sadece aynı paket içindeki sınıflar kullanabilecek ya da farklı paket altında _A_ sınıfını miras alan yani extends eden sınıflar bu alana erişim sağlayabilecektir.

- Değişken tanımlamalarından sonra _A_ sınıfında 4 farklı erişim belirleyicisine sahip metotlar tanımladık.

  - Private erişim belirleyicisine sahip aRead metoduna sadece _A_ sınıfı içinden ulaşılabilecek. 

  - Default erişim belirleyicisine sahip olan aWrite metoduna _A_ sınıfı içinden ve _A_ sınıfı ile aynı pakette bulunan _B_ ve _Main_ sınıfları erişim sağlayabilecektir.
  - Protected erişim belirleyicisine sahip aRun metoduna ise _A_ sınıfı içinden ve _A_ sınıfı ile aynı pakette bulunan _B_ ve _Main_ sınıfı erişim sağlayabilir, default erişim belirleyicisinden farklı olarak da farklı pakette _A_ sınıfını extends eden sınıflar bu metoda erişim sağlayabilmektedir. 
  - Public erişim belirleyicisine sahip aSleep metodu ise farklı paketlerden alt sınıflardan olsun her yerden erişim sağlayabilir. 

_A_ sınıfını inceledikten sonra _A_ sınıfındaki metotların aynı paket altında bulunan _B_ sınıfı ile kullanımını inceleyelim.

```java
package package1;

public class B {
    A a = new A();

    void bWrite(String message) {
        a.setName("B sınıfı");
        a.aWrite(message);
    }

    void bRun(String name) {
        a.aRun(name);
    }

    void bRead() {
        a.aRead("B sınıfı okuyor."); //'aRead(java.lang.String)' has private access in 'package1.A'
        //Derleyici hatası (Compile Time hatası alınır.)
    }
}


```

_B_ sınıfı 3 adet default erişim belirleyicisine sahip bWrite bRun ve bRead metotlarından oluşmaktadır. Sınıf seviyesinde bir referans tip yani nesne oluşturduktan sonra bu nesne ile _A_ sınıfındaki alanlara ve metotlara erişim sağlamaya çalışacağız.

- bWrite metodun da a nesnesi ile ilk olarak _A_ sınıfında public olan getter setter metotlarından setter metodu yani setName("B Sınıfı"); metoduna isim vermiş olduk.
- aWrite metodu _A_ sınıfında default erişim belirleyicisine sahip ve _B_ sınıfı ile aynı paket altında oldukları için erişim sağlanmış oldu.
- bRun metodu a referansı ile _A_ sınıfında protected erişim belirleyicisine sahip olan aRun metoduna erişim sağlamış oldu.
- bRead() metodu a nesnesi ile _A_ sınıfındaki aRead metoduna erişim sağlamaya çalışıyor fakat compile time da bir hata alacaktır. Çünkü aRead metodu _A_ sınıfında private erişim belirleyicisine sahiptir. Bu hatadan ancak _A_ sınıfındaki aRead metodunu private erişim belirleyicisinden farklı olan bir erişim belirleyicisi kullanılarak düzeltilebilir ya da bu metodu _B_ sınıfı içinden çağırmayacaktır.

Bu örnekten sonra birde farklı paket altında olan _C_ ve _D_  sınıflarını kullanarak _A_ sınıfındaki alanlara ve metotlara erişim sağlamaya çalışalım.

```java
package package2;

import package1.A;

public class C {
    A a = new A();

    public void cRead() {
        a.setName("C sınıfı");
        System.out.println(a.getName());
    }

    public void cSleep() {
        System.out.println("C sınıfına ait public erisim belirleyicisine sahip cSleep metodu calistirildi.");
        a.aSleep();

    }

    void otherFunctionsRun() {
        a.aWrite("C sınıfından yazılıyor.");//Compile Time hatası alınır.
        //'aWrite(java.lang.String)' is not public in 'package1.A'. Cannot be accessed from outside package
       
        a.aRun(a.getName()); //Compile Time hatası alınır.
        //'aRun(java.lang.String)' has protected access in 'package1.A'
        
        a.aRead("C sınıfı okuyor."); //Compile Time hatası alınır.
        //'aRead(java.lang.String)' has private access in 'package1.A'
    }
}


```

_C_ sınıfı **package2** altında bulunmaktadır. _C_ sınıfı _A_ sınıfına erişim sağlamak istiyor ise _A_ sınıfını içe aktarması (import) etmesi gerekir. _C_ sınıfı public erişim belirleyicisine sahip cRead ve cSleep metotlarından oluşmaktadır. Sınıf seviyesinde bir referans tip yani nesne oluşturduktan sonra bu nesne ile _A_ sınıfındaki alanlara ve metotlara erişim sağlamaya çalışacağız.

- cRead metodunda _A_ sınıfında name alanının getter-setter metotları public olduğundan dolayı erişim sağlayarak kendi içeriğimizi yazabiliriz.
- cSleep metodunda ise _A_ sınıfında public olarak tanımlanan aSleep metoduna erişim sağlayıp kullanabiliyor. Çünkü public erişim belirleyicisine sahip olan alan ya da metotlara her yerden erişim sağlayabiliyordu.
- _C_ sınıfında default erişim belirleyicisine sahip otherFunctionsRun metodu ile _A_ sınıfında public erişim belirleyicisinden  farklı olan metotlara erişim sağladığımızda compile time hatası alacağız. Örnek olarak aWrite metodu _A_ sınıfında default erişim belirleyicisine sahip ve default erişim belirleyicilerine aynı sınıf ve paket içinden erişim sağlayabiliyorduk fakat biz farklı paket içindeki _C_ sınıfından erişim sağlamaya çalışıyoruz. Bu yüzden compile time hatası alıyoruz. Bu hatayı almamak için ya aWrite metodu kullanılmayacak ya da aWrite metodunun erişim belirleyicisi public olarak değiştirilmelidir. aRun ve aRead metotlarında aynı  durum geçerli tek farkı bu metotların farklı erişim belirleyicisine sahip olması. Bu iki metot da ki sorunlarda aWrite metodu ile aynı işlem yapılarak çözülebilir.

_C_ sınıfı ile aynı paket altında bulunan _D_ sınıfını inceleceğiz. _D_ sınıfının _C_ sınıfından tek farkı _A_ sınıfından miras alıyor olması  yani extends ediliyor olmasıdır. _D_ sınıfı da _A_ sınıfını kullanabilmek için _A_ sınıfını import etmesi gerekir.

```java
package package2;

import package1.A;

public class D extends A {
    
    @Override
    protected void aRun(String name) {
        System.out.println("D sınıfı A sınıfından miras aldı." +
                "\nProtected erisim  belirleyicisine sahip aRun metodunu da override ederek kendi implementasyonunu yaptı.");
    }

    public int dNumber() {
        return number=45;
    }
}

```

Yukarıdaki _D_ sınıfı içindeki metotlar yer almaktadır. 

- _D_ sınıfı _A_ sınıfından extends edildiği için _A_ sınıfındaki protected erişim belirleyicisine sahip olan  aRun metodunu @Override ederek kullanabilir ya da @Override etmeden de kullanabilir.
- _D_ sınıfında public erişim belirleyicisine sahip dNumber metodu tanımlanmıştır bu metoda farklı paketlerden ulaşabilmek amacı ile tanımlanmıştır. dNumber metodu int dönüş tipine sahip bir metot dur yani bu metot çağrıldığı zaman int tipinde bir değer dönecektir. Int değeri olarak number değerini gönderdik ve bu değere 45 değerini atadık. Number değişkeni _A_ sınıfı içerisinde protected erişim belirleyicisine sahip olduğundan dolayı biz erişim sağlayıp kullanabildik (A sınıfını miras aldık). Eğer bu metot default erişim belirleyicisine sahip olsaydı farklı bir paketteki sınıftan bu metoda erişmeye çalıştığımızda erişim sağlayamayacaktık.

**Package1** paketindeki Main sınıfını kullanarak yukarıda  tanımlanan sınıflardan nesneler oluşturup bu nesneler ile sınıf metotlarını çağırıp sonuçları gözlemleyeceğiz.

```java
package package1;

import package2.C;
import package2.D;

public class Main {
    public static void main(String[] args) {
        System.out.println("A sınıfı: ");
        A a=new A();
        a.setName("Ali");
        System.out.println("Ad: "+a.getName());
        a.aWrite("A sinifi");//default metot
        a.aRun(a.getName());//protected metot
        a.number=14;//protected degisken.
        a.aRead("Erisim Belirleyiciler");//'aRead(java.lang.String)' has private access in 'package1.A',Hata fırlatır.
        System.out.println("B sınıfı: ");
        B b=new B();
        b.bOku();//default metot
        b.bRun("B calısıyor.");//default metot
        b.bWrite("B yazıyor.");//default metot
        System.out.println("C sınıfı: ");
        C c=new C();
        c.cRead();//public metot
        c.cSleep();//public metot
        System.out.println("D sınıfı: ");
        D d=new D();
        System.out.println("D sınıfında dNumber donus degeri: "+d.dNumber());
        d.aRun("D sınıfı");//'aRun(java.lang.String)' has protected access in 'package2.D',Hata fırlatır.
    }
}

```

Yukarıdaki kod da Main sınıfındaki main metodunda projedeki tüm sınıflardan nesneler oluşturulup, oluşturulan nesnelerin alanlarına ve metotlarına erişim sağlanmaya çalışıldı. Main metodu önceden de belirttiğimiz gibi **package1** paketi altında yer aldığı için **package2** paketinde bulunan sınıfları içe aktarmamız yani import etmemiz gerekti.

- _A_ sınıfı _Main_ sınıfı ile aynı paket altında bulunduğu için  A sınıfından oluşturulan nesne ile private erişim belirleyicisine sahip olan  alan ve ya metotlar haricindeki diğer alanlara veya metotlara  erişim sağlayabiliyor. _A_ sınıfında private erişim belirleyicisine sahip olan aRead metoduna erişim sağlamaya çalışınca ise derleme hatası (compile time) alırız.
- _B_ sınıfı da _Main_ sınıfı ile aynı paket altında olduğu için default erişim belirleyicisine sahip 3 farklı metoduna nesne oluşturup erişim sağlamayı başardı.
- _C_ sınıfı _Main_ sınıfından farklı bir paket altında yer almaktadır. _C_ sınıfı metotları public erişim belirleyicisine sahip olduğu için _Main_ sınıfından rahat bir şekilde c referansı ile erişim sağlayabildi.
- _D_ sınıfı _C_ sınıfı ile aynı paket altında yer almaktadır. _D_ sınıfı _A_ sınıfından extends edilmekte ve _A_ sınıfında protected olan alanlara erişim sağlanabilmektedir.  _Main_ sınıfından _D_ sınıfına ait bir nesne oluşturup public olan dNumber metoduna erişim sağlanabiliyor ve bu metot protected olan number alana bir int değeri atanarak return ediliyor.
- !  Dikkat etmemiz gereken nokta ise şu : 
  - _D_ sınıfında _A_ sınıfından extends edilen aRun metodu _D_ sınıfında @Override ediliyor. _D_ sınıfı bu metodu kendi istediği gibi doldurabiliyor. _Main_ sınıfından d referansı ile bu alana erişim sağlamaya çalışınca derleme hatası alırız çünkü aRun metodu artık D sınıfında kullanılmakta ve protected erişim belirleyicisine sahip olduğu için farklı sınıflardan nesne oluşturulsa dahi erişim sağlanamayacaktır. Fakat @Override edilen aRun metodunu _C_ sınıfından bir _D_ objesi oluşturup kullanabiliriz.
  - Eğer _D_ sınıfında aRun metodunu @Override etmeseydik d referansı ile aRun metodunun çağrısını yapacaktık. Çünkü _Main_ sınıfı _A_ sınıfı ile aynı paket altında ve _D_ sınıfı da _A_ sınıfını extends ediyordu. Yani d referansı ile aRun metodunu çağırınca erişim sağlanıyor çünkü protected alan ya da metot aynı paket altında extends edilmeden de kullanılabiliyordu.  _D_ sınıfı da _A_ sınıfından extends edildiği için kendi üst sınıfın metodu üzerinden çağrıda bulunabildi. (Umarım bu kısım biraz açıklayıcı olmuştur çünkü karmaşık.)

Bu arada erişim belirleyicileri kullanırken her alana ya da metoda public erişim belirleyicisini vermemeye dikkat edin. Sadece projenizde ortak olarak kullanacağınız alanlara ya da metotlara bu erişim belirleyicisini veriniz.

>  KAYNAKÇA
> - [Java Documentation](https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html)
>
> - [Java Access Modifiers TutorialsPoint](https://www.tutorialspoint.com/java/java_access_modifiers.htm)
>
> - [Java Access Modifiers GeekforGeeks](https://www.geeksforgeeks.org/access-modifiers-java/)
>
> - [Java Access Modifiers w3schools](https://www.w3schools.com/java/java_modifiers.asp)
>
> - [Access Modifiers in Java educative.io](https://www.educative.io/edpresso/access-modifiers-in-java?aid=5082902844932096&utm_source=google&utm_medium=cpc&utm_campaign=edpresso-dynamic&gclid=CjwKCAiAxKv_BRBdEiwAyd40NyYZxZ1Ttqt1-kUnfRx831wtPLplssNpgcj_tGSG87u9R8t53qf_aBoCLAMQAvD_BwE)
>
> - [Java Access Modifiers mobilhanem](https://www.mobilhanem.com/temel-java-dersleri-erisim-belirleyiciler/?__cf_chl_captcha_tk__=58f6c90a1db4c3f0beebe5fb3d5fc9d6dc9a50cb-1609246019-0-ASN4nK9n_sJWYpZgLiMcC8Gdail3owjX0ihLkmRhY0MNisrXAQOLauVdH-8RVBZSMjzr9FeLoYZOZetLH3IfDNziO_8GP3-lAQwEvAa-dwOgnx_iwF4oGyeG1kVutell24Kt_u1CahzCuDoYI0bniyVQJ22GxvGiVqfUgcVmYhi5dwiPbbW5gDlNM0bfxiASxNY6ciwfym9AAvizUymlhd77lT7Yu7a9weFYPmrs5V-kbIEFQNlxFYPWc70mrQ9LLiOjf8axliMEwWKzGygLgpW3GcK_aUjJUlRfJt4pYxCagRg46hnfnvNtJLilwKQngl9xYxdrJnO_SabEDFK6kyi0MgDr9-l4-29gAb-98-AIZYL8olq1OMmWV4VgoLd5PDsNrbN8SDA8JFzb6xbTa4f7oKMoW7jjWI2XyuwNmi0CCy3SEx5wBACcpqCf9culRBb3uI00jLGAD5D3aEgU4hGtuZRQmnxHEpIeFiSHvDhjW7BR7LixheAcflG1Wm-42h4TIi3beGTGJ8sn7Ixvhe1FnwP4gsEcfrr_1YgeHcPzupJQZ6HMm8zMfweU0aQwqHnxqIC6J0rYDrcaTbB2mvG2fYdbmnrfZ8Aaugp0BJl4BdPFkrtzXSh5AQ21DfUPfQ)
>
> - [Principle of least Privelege](https://en.wikipedia.org/wiki/Principle_of_least_privilege)
>
>   
>

