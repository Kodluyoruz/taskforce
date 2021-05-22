# Modellerin Doğrulanması ve FluentValidation Kütüphanesi
Uygulama geliştirirken en zor noktalardan birisi sistemi kararlı yapıda tutmaktır. Bunu yapmanın yolu da validasyonlardan geçiyor. Peki yazılım geliştirirken validasyon yapmak ne demek? Şöyle düşünün bir post endpoint iniz var. Inout olarak aldığı obje içerisinde integer bir özellikl var. Ve bu field mantıksal olarak 0 olmaması gerekiyor. Yada boş geçilmemesi gerekiyor. Eğer servisiniz bu özelliği kontrol etmeden db'ye yazarsa, database'in hata fırlatmasına ve uygulamanızın çalışma anında kırılmasına neden olur. Daha da kötüsü kırılmadan devam eder ve data bütünlüğünün bozulmasına neden olur. 

Bir validasyon yapısı kurmak hem kuralların okunabilirliği hemde esnetilebilir olması açısından çok faydalıdır. Bu amaçla yaratılmış bir çok açık kaynaklı kütüphane bulunur. 
.Net uygulamaları için en çok kullanılan validation kütüphanesi ise FluentValidation dır.

FluentValidation'ı kullanabilmiz için öncelikler kütüphaneyi paket olarak uygulamamıza eklememiz gerekir. 
```dotnet add package FluentValidation```

Şimdi gelin bir örnek üzerinden nasıl kullanıldığını keşfedelim. 

Aşağıdaki gibi bir Customer modelimizin olduğunu varsayalım. 

    public class Customer {
        public int Id { get; set; }
        public string Surname { get; set; }
        public string Forename { get; set; }
        public decimal Discount { get; set; }
        public string Address { get; set; }
    }

Customer modelinin özelliklerini doğrulamak istersek aşağıdaki gibi bir Validation sınıfı oluşturmamız gerekir: 

    using FluentValidation;
    public class CustomerValidator: AbstractValidator<Customer> {
    }

Şimdi Customer'ın özelliklerini bir takım kurallar ile kapsayalım :

    using FluentValidation;

    public class CustomerValidator : AbstractValidator<Customer> {
        public CustomerValidator() {
            RuleFor(customer => customer.Surname).NotNull();
            RuleFor(customer => customer.Discount).GreaterThan(0);
        }
    }

Yukarıdaki 2 kuralı incelersek;
* Surname null olamaz. 
* Discount 0'dan büyük olmak zorundadır.

Peki bu validasyonu nasıl çalıştırıcaz ?si 

    Customer customer = new Customer();
    CustomerValidator validator = new CustomerValidator();

    ValidationResult results = validator.Validate(customer);

    if(!results.IsValid) {
        foreach(var failure in results.Errors) {
            Console.WriteLine("Property " + failure.PropertyName + " failed validation. Error was: " + failure.ErrorMessage);
        }
    }

Validasyon sınıfının bir nesnesi oluşturup `Validate()` metodunu çağırırsak geriye validasyon sonuçları döner. result objesi içerisinde `IsValid` özelliği validasyon sonucunda hata olup olmadığını geri döner. 
Ayrıca result objesi `Errors`adında bir de hata mesajlarını barındıran bir dizi bulundurur. `foreach` döngüsü yardımıyla bu hata mesajlarını istediğimiz gibi kullanabiliriz. Yukarıdaki örnek içerisinden console'a yazdırdık. Burda bir log altyapısı varsa loglama yapılabilir yada son kullanıcıya geri döndürülebilir. 

Peki eğer ben model validasyondan geçmezse hata fırlatmasını istersem ne yapmalıyım? Bunun içinde FluentValidation kütüphanesi ValidateAndThrow adında bir metot barındırır. Bu metot önce kontrolleri yapar, eğer hata varsa hata mesajlarını fırlatır. 

    Customer customer = new Customer();
    CustomerValidator validator = new CustomerValidator();

    validator.ValidateAndThrow(customer);

Throw edilen bu ahata mesajlarını try catch blokları ile yakalayıp istediğimiz gibi yönetebiliriz. Istersek loga yazarız istersek son kullanıcıya hata mesajı olarak dönebiliriz.

Fluent kütüphanesi ile yapılabilecek hazır validasyonların tamamını [burdan](https://docs.fluentvalidation.net/en/latest/built-in-validators.html) inceleyebilirsiniz.

**Inceleme Önerisi:** Fluent Validation kütüphanesi ile yapabileceklerinizi incelemek için [tıklayınız.](https://docs.fluentvalidation.net/en/latest/installation.html)