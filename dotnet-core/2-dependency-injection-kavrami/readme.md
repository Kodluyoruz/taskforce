# Dependency Injection (DI) Kavramı (Bağımlılıkların Dışarıdan Verilmesi)

Dependency Injection tekniği uygulayarak bağımlılıkları sınıf içerisinde yönetmek yerine dışarıdan verilmesini sağlarız. Bu sayede bağımlı olunan nesnenin oluşturulması ve yönetimi sınıf dışında yapılmış olur ve bağımlılığın bir kısmı azaltılmış olur.

Aşağıdaki örneği inceleyecek olursak, Foo sınıfı Bar sınıfına bağımlı durumda. Fakat Bar sınıfına ait bir nesneyi yapıcı methodunda parametre olarak dışarıdan verilmesini bekliyor. Bu durumda artık Foo sınıfından bir nesne üretmek istediğimizde aynı zamanda bir de Bar sınıfından nesne üretmeli ve Foo sınıfının yapıcı methoduna vermeliyiz. Bu şekilde Foo sınıfından bir nesne ürettiğimizde aslında Foo sınıfının bağımlı olduğu Bar nesnesini dışarıdan vermiş yani Dependency Injection tekniğini uygulamış olduk.

```
public class Bar
{
    public void WriteSomething()
    {
        //bar
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

....
Bar bar1 = new Bar();
Foo foo1 = new Foo(bar); //dependency injected.
foo1.DoSomething();
```

Dependency Injection tekniğini 3 farklı yöntem ile uygulayabiliriz.

1 - Constructor (Yapıcı Method) ile : Bu yöntemde bağımlı olunan nesneler yapıcı methodda belirtilir ve dışarıdan beklenir. Yukarıdaki örnek bu yönteme bir örnektir. Foo sınıfı Bar nesnesini yapıcı methodda bekler. Bu yöntem en sık kullanılan yöntemdir.

2 - Setter Method/Property ile : Bu yöntemde bağımlı olunan nesneler bir method/property aracılığı ile dışardan beklenir.
Örnek olarak Foo sınıfımız aşağıdaki şekilde bir Setter method ile bağımlı olduğu Bar nesnesini dışarıdan almış olur.

```
public class Foo
{
    private Bar _bar; //dependency

    public void SetBar(Bar bar) //dependency injection via Setter
    {
        _bar = bar;
    }

    public void DoSomething()
    {
        //do something for Foo
        _bar.WriteSomething();
    }
}

....
Bar bar1 = new Bar();
Foo foo1 = new Foo();
foo1.SetBar(bar1); //dependency injected.
foo1.DoSomething();
```

3 - Metot ile : Bu yöntemde bağımlı olunan nesneler yalnızca kullanıldığı methodlarda dışarıdan beklenir. Örnek olarak Foo sınıfı DoSomething metodu içerisinde bağımlı olduğu Bar sınıfına ait bir nesneyi metot parametresi aracılığı ile dışardan almış olur.

```
public class Foo
{
    public void DoSomething(Bar bar) //dependency injection
    {
        //do something for Foo
        _bar.WriteSomething(); //dependency
    }
}

....
Bar bar1 = new Bar();
Foo foo1 = new Foo();
foo1.DoSomething(bar1);  //dependency injected via Method
```
