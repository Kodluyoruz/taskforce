# DI Container Kavramı

Uygulamamız büyüdükçe/değiştikçe ekleyeceğimiz bir çok yeni sınıf beraberinde yeni bağımlılıkları da getirecektir. Bu da bağımlılıkların yönetiminin zorlaşmasına ve hatta içinden çıkılmaz bir hal almasına sebep olabilir.

Bağımlılık yönetimini kolaylaştırmak için Dependency Injection Container adı verilen kütüphaneler kullanılır.
Bu kütüphanelerin yardımı ile ihtiyacımız olan sınıfa ait bir nesneye; bağımlılıkları dışarıdan verilmiş kullanıma hazır bir şekilde rahatlıkla ulaşarak kullanabiliriz. Böylece ihtiyacımız olan bir nesneyi oluştururken bağımlı olduğu nesnelerin de yaratılması işlemlerinden kurtulmuş oluruz.

Container'a uygulamamız içerisindeki hangi sınıfları container aracılığı ile kullanacağımız ile ilgili bilgi veririz. Burada hem kullanacağımız sınıfları hem de bunların bağımlı olduğu diğer sınıfları containera kaydetmiş olmamız gerekir. Container tüm bu sınıfları bildiği için kayıtlı olan bir sınıfa ait bir nesne üretmesi gerektiğinde bağımlılıkları da otomatik olarak çözerek bize ihtiyacımız olan nesneyi oluşturur.

Aşağıdaki örnekte görebileceğimiz gibi hem Foo hem Bar sınıfımız önce container'a kayıt ediliyor. Daha sonra bir Foo nesnesini container'dan istediğimizde container; Foo sınıfının Bar sınıfına olan bağımlılığını görüyor ve önce Bar nesnesini üretip daha sonra Foo nesnesinin yapıcı methoduna bu nesneyi vererek (injection) bize bir Foo nesnesi üretmiş oluyor.

```
DIContainer container = new DIContainer();
container.Register<Foo>();
container.Register<Bar>();

Foo foo1 = container.GetObject<Foo>();
foo1.DoSomething();
```

Not: Yukarıdaki örnekte kullanılan DIContainer sınıfı ve metotları anlaşılabilir kılınmak adına isimlendirilmiştir. Kullanılan kütüphaneye göre gerçek method ve sınıf isimleri değişecektir.

Containerların önemini anlamak için örneğimizi biraz daha genişletelim. Bar sınıfının da yeni eklenen Baz sınıfına bağımlı hale geldiğini düşünelim. Son durumda sınıflar aşağıdaki şekilde olacaktır.

```
public class Baz
{
    public void ReadSomething()
    {
        //baz
    }
}

public class Bar
{
    private readonly Baz _baz; //dependency

    public Bar(Baz baz) //dependency injection
    {
        _baz = baz;
    }

    public void WriteSomething()
    {
        _baz.ReadSomething();
        //do something for Bar
    }
}

public class Foo
{
    private readonly Bar _bar; //dependency

    public Foo(Bar bar) //dependency injection
    {
        _bar = bar;
    }

    public void DoSomething()
    {
        //do something for Foo
        _bar.WriteSomething();
    }
}
```

Eğer ki bağımlılıkları container kullanmadan kendimiz yönetiyor olsaydık tüm uygulamamız içerisinde aşağıdaki şekilde Bar sınıfının bağımlılığını karşılamak için Baz nesnesi yaratmamız gerecekti. Uygulamamız ne kadar büyük ve Bar kullanıyorsa değişiklik yapacağımız yerler de o kadar çok olacak ve efor harcayacaktık.

```
Baz baz1 = new Baz();
Bar bar1 = new Bar(baz1); //dependency injected.
Foo foo1 = new Foo(bar); //dependency injected.
foo1.DoSomething();
```

Fakat container kullandığımız durumda bu değişikliklerin hiçbirini yapmadan, sadece yeni eklediğimiz Baz sınıfını containera kaydetmemiz yeterli olacak. Çünkü container Bar'ın Baz bağımlılığını biliyor ve Baz sınıfı için de bilgisi var. Bu nedenle uygulamamızın hiç bir yerinde başka bir değişiklik yapmamıza gerek yok. Container bizim için bunları yerine getiriyor.

```
DIContainer container = new DIContainer();
container.Register<Foo>();
container.Register<Bar>();
container.Register<Baz>(); //yeni class için yalnızca bir kayıt ekledik

//diğer kodlarda hiç bir değişikliğe ihtiyacımız yok
Foo foo1 = container.GetObject<Foo>();
foo1.DoSomething();
```

Dependency Injection Container'lardan kısaca DI Container olarak bahsedilir. Aynı zamanda DI Framework, IoC Container yada IoC Framework olarak da kullanımlarına rastlanabilinir.

.Net Core uygulamalarında kullanılabilecek bir çok farklı DI Container kütüphanesi mevcuttur. Çoğu temelde aynı işlevi sunar, fakat performans ve bazı ek yetenekler nedeniyle ihtiyaca göre bir seçim yapılabilir.

**Okuma Önerisi:** Dependency Injection ve Container kavramları hakkında daha detaylı bilgi almak için [tıklayınız.](https://www.martinfowler.com/articles/injection.html)

**Inceleme Önerisi:** .Net Core uygulamalarında en sık kullanılan DI Container'lar listesi için [tıklayınız.](https://github.com/quozd/awesome-dotnet/blob/master/README.md#ioc)
