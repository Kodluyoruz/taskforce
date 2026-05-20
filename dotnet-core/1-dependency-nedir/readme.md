# Dependency Nedir ?

Nesne yönelimli programlama dilleri ile uygulama geliştirirken, kullandığımız nesneler arasında bir iletişim kurarız. Bu iletişimin bir sonucu olarak da nesneler arasında bir bağımlılık (dependency) oluşmuş olur.

Aşağıda bir örneğini gördüğümüz gibi, Foo sınıfı içerisinde Bar isimli sınıfa ait bir methodu kullanmakta. Bu durumda Foo sınıfı, Bar sınıfına direkt olarak bağımlıdır.

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
    private readonly Bar _bar = new Bar(); //dependency

    public void DoSomething()
    {
        //do something for Foo
        _bar.WriteSomething();
    }
}

....
Foo foo1 = new Foo(); //Bar nesnesi de Foo içerisinde yaratıldı.
foo.DoSomething();
```

Bu örnekte olduğu gibi, bağımlı olunan nesneler sınıf içerisinde `new` ile oluşturulup bir üyesi çağrıldığında, bu sınıfa bağımlı hale gelmiş olurlar.

Bağımlı olunan nesneler yalnızca kendi yazdığımız sınıflar arasında değil, kullandığımız tüm framework yada kütüphaneler tarafından sağlanan sınıflar/tipler için de geçerlidir. Bu durumlarda da ilgili framework yada kütüphaneye bağımlı bir kod geliştirmiş oluruz.

Bağımlı olunan nesneleri yalnızca new ile üretilen nesneler olarak düşünmememiz gerekir. Kullandığımız static methodlar da aslında dolaylı olarak bir bağımlılık yaratmaktadır. Bağımlılıkları incelerken kullanılan nesnelere ek olarak varsa statik methodları da incelememiz ve değerlendirmemiz gerekir. Örnek olarak `DateTime.Now` kullanarak bir kontrol yaptığımızda aslında ilgili kod DateTime.Now değerine bağımlı hale gelmiş olur. Bu bağımlılıktan kurtulmak için kontrol yapacağımız DateTime değerini sınıfın yada methodun dışında parametre aracılığı ile almamız gerekir.

Bu şekilde bağımlı sınıflara sahip olmamız, uygulamamız büyüdükçe bağımlılıkları yönetmemizi zorlaştırır ve daha fazla hataya açık bir hale gelmesine yol açar.

Bu bağımlılıkları Dependency Injection (bağımlılıkların dışarıdan verilmesi) tekniği uygulayarak yönetebilir, yazdığımız sınıfları daha az bağımlı hale getirebiliriz. Yazdığımız sınıfların birbirinden daha az bağımlı olması uygulamamızın daha esnek ve genişletilebilir olmasını sağlamakla beraber aynı zamanda otomatize testler yazmamızı da kolaylaştırır.
