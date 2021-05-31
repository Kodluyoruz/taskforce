# Örnek Test Yazılması

1- Tüm test projelerini aynı dizinde tutmak için "Tests" isminde dizin oluşturulur.
`mkdir Tests` 

2- Tests dizini içinde Unit Test projesi yaratılır. Biz örnekte xunit test proje şablonu kullanacağız. (Nunit yada MSTest kullanan şablonlar da mevcut.)
Test projesi isimlendirme : (TestEdilecekProje).(TestTipi)Tests
````
cd Tests
dotnet new xunit -n WebApi.UnitTests
````

3- Test projesi solutiona eklenir.
````
cd ..
dotnet sln add Tests/WebApi.UnitTests
````

4- Test projesine, test için ihtiyaç duyulan diğer projeler referansı eklenir.
````
cd Tests/WebApi.UnitTests
dotnet add reference ../../WebApi 
````
5- Test projesine, test için ihtiyaç duyulan test kütüphaneleri eklenir. Mocking için Moq, assertions için FluentAssertions kullanacağız.
```
dotnet add package Moq --version 4.16.1
dotnet add package FluentAssertions --version 5.10.3
```
6- Hazırlıklar tamam, solution re-build alalım.
```
cd ..
cd ..
dotnet clean
dotnet build (WebApi.UnitTests de geldi)
```

7- Henüz test yazmadan bir test edelim. Projeyi oluşturunca default gelen 1 tane test var içi boş, bu yüzden passed olduğu için 1 passed test geliyor.
```
dotnet test
```

8- `dotnet test` komutu dışında VSCode'da ".NET Core Test Explorer" extensionı ile de gösterilebilir.

9- Yeni bir test ekleme (Fact'in önemi, kullanılan frameworke göre değişir.)
````
[Fact]
public void FirstTest_WithoutFluent()
{
    string hello = "hello world";
    Assert.Equal("hello world", hello);
    Assert.StartsWith("hel", hello);
    Assert.EndsWith("orld", hello);
}

[Fact]
public void FirstTest_WithFluent()
{
    string hello = "hello world";
    hello.Should().Be("hello world");
    hello.Should().StartWith("hel");
    hello.Should().EndWith("orld");
    //....
    //yada 
    hello.Should().Be("hello world").And.StartWith("hel").And.EndWith("orld");
    hello.Should().Be("hello world")
        .And.StartWith("hel")
        .And.EndWith("orld");
}
````

10- Bağımlılık olmayan bir class için test eklenir. İsimlendirme ve AAA şablonuna dikkat edilmeli. Tek bir koşul test edilmeli.

11- Bağımlılık olan bir class için test eklenir. Taklit nesne (mocking) gösterilir. Interface önemi.

12- Belki örnek Theory gösterilebilir.