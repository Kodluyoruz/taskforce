# .NET Core DI Container (Services)

.NET Core kendi içerisinde kullanıma hazır bir DI Container'ı barındırır. Bu sayede herhangi bir farklı kütüphane kullanmamıza gerek kalmadan uygulamamız içerisinde .net core di containerını rahatlıkla kullanabiliriz.

.Net Core içerisinde hazır bulunan containerı Startup'daki ConfigureServices metodu içerisinde kullanırız. Bu methodun IServiceCollection tipinde services adıyla aldığı parametre aslında container nesnesidir diye düşünebiliriz.

```
public void ConfigureServices("""""IServiceCollection""""" services)
{
    services.Add... //Register services
}
```

.Net Core DI Container'a bir sınıf kayıt ederken bu sınıfa ait nesnenin yaşam süresini de belirtmemiz gerekir. Bu yaşam süresine göre container kayıt sırasında kullanacağımız method ismi değişmektedir. Containerda nesnelerin yaşam süresi 3 çeşittir.

**1 - Singleton Service** : Bu yaşam süresine sahip nesne, uygulamanın çalışmaya başladığı andan duruncaya kadar geçen tüm süre boyunca yalnızca bir kez oluşturulur ve her zaman aynı nesne kullanılır. Singleton bir servis eklememiz için AddSingleton methodunu kullanırız. Örnek : `services.AddSingleton<Foo>();`

**2 - Scoped Service** : Bu yaşam süresine sahip nesne, bir http requesti boyunca bir kez oluşturulur ve response oluşana kadar her zaman aynı nesne kullanılır. Scoped bir servis eklememiz için AddScoped methodunu kullanırız. Örnek : `services.AddScoped<Bar>();`

**3 - Transient Service** : Bu yaşam süresine sahip nesne, container tarafından her seferinde yeniden oluşturulur. Transient bir servis eklememiz için AddTransient methodunu kullanırız. Örnek : `services.AddTransient<Baz>();`

Eğer kayıt edilecek servis bir interface implemente ediyor ve bu interface aracılığı ile kullanılıyor ise; kayıt sırasında hem interface tipini hem de bu interface'i implemente eden sınıfı belirtmemiz gerekir. Bu şekilde yaptığımız kayıtlarda da nesnenin yaşam süresini belirtmemiz gereklidir.
Örnekler :
`services.AddSingleton<IFoo, Foo>();`
`services.AddTransient<IBaz, Baz>();`
`services.AddScoped<IBar, Bar>();`

Bu şekilde bağımlı olunan nesnenin sınıfını bilmemize gerek kalmadan bir interface yardımı ile ihtiyaç duyduğumuz iletişimi sağlamış oluruz. Bağımlılıkların interface ile yönetilmesi uygulamamızdaki parçaların **loosely coupled (gevşek bağımlı)** kalmalarına yardımcı olan en büyük etmenlerden biridir. Loosely coupled uygulamalar daha esnek, kolay genişletilebilir/değiştirilebilir ve test edilebilir olurlar.

Aşağıdaki örnekte görebilebileceğimiz gibi, bağımlılıklar artık direkt olarak sınıf yerine bir interface üzerinden alınıyor. Böylece ihtiyaç duyulan interface'i implemente eden herhangi bir sınıfa ait nesne, bağımlı olan sınıf tarafından kullanılabilir. İlgili interface için hangi sınıfın kullanılacağı bilgisini ise container'a kaydetmiş olmamız gereklidir.

```

public interface IBaz {...}
public class Baz : IBaz {...}

public interface IBar {...}
public class Bar : IBar
{
    private readonly IBaz _baz; //dependency

    public Bar(IBaz baz) //dependency injection
    {
        _baz = baz;
    }
    ...
}

public interface IFoo {...}
public class Foo : IFoo
{
    private readonly IBar _bar; //dependency

    public Foo(IBar bar) //dependency injection
    {
        _bar = bar;
    }
    ...
}
```

.Net Core DI Container, bağımlılıkları yapıcı method (Constructor) yada Method Injection yöntemi ile sağlar. Method Injection yöntemini kullanmak için
, Controller sınıfı içerisindeki action method parametrelerine `[FromServices]` attribute ile ihtiyaç duyulan bağımlılık belirtilir.
Yapıcı method yöntemi için ise Controller sınıfının yapıcı methoduna bağımlı olunan nesne belirtilmesi yeterlidir.

```
public class HomeController : Controller
{
    private readonly IDateTime _dateTime;

    public HomeController(IDateTime dateTime)
    {
        //constructor injection
        _dateTime = dateTime;
    }

    //Method injection
    public IActionResult Dependency([FromServices] IDateTime dateTime)
    {
        ...
    }
}
```

Veritabanı işlemlerimiz için EntityFramework Core kullanıyorsak, kullanılan DbContext'leri de Containera kaydedebilir ve DbContext'ler için de dependency injection uygulayabiliriz. DbContext'leri containera kaydetmek için AddDbContext methodunu kullanırız. Örnek : `services.AddDbContext<MyDbContext>();`

Containera kayıtlı servislerin kullanımı için IServiceCollection'ın yada herhangi bir methodun kullanımına ihtiyaç yoktur. ConfigureServices içerisinde containera kayıt edilen tüm servisler, yukarıdaki örnekte olduğu gibi Controller sınıfların yapıcı methodlarında belirtilerek kullanılabilirler. Controller sınıfları özel sınıflar olduğundan nesnelerinin yaratılması sırasında bağımlılıkları container üzerinden otomatik olarak çözülerek yaratılırlar.

**Okuma Önerisi:** Loosely-Coupled(Gevşek Bağımlılık) ve Tighly-Coupled(Sıkı Bağımlılık) kavramları hakkında daha detaylı bilgi için [tıklayınız.](https://stackoverflow.com/questions/2832017/what-is-the-difference-between-loose-coupling-and-tight-coupling-in-the-object-o)

**Inceleme Önerisi:** .Net içerisinde Dependency Injection'ın nasıl uygulandığı ile ilgili daha detaylı bilgi için [tıklayınız.](https://docs.microsoft.com/en-us/dotnet/core/extensions/dependency-injection)
