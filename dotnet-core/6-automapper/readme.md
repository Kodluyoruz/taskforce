# AutoMapper

Automapper farklı tipteki complex objeleri birbirlerine otomatik olarak dönüştüren kütüphanedir. Kod kirliliğinde bizi kurtarak birden fazla satırda her bir obje elemanını tek tek dönüştürmek yerine tek satırda objenin kendisini dönüştürmemize olanak sağlar.

Bir .Net 5 yada .Net Core Projesine Auto Mapper implemente etmek için izlenmesi gereken adımlar aşağıdaki gibidir.

1.  Öncelikle Automapper kütüphanesinin projeye dahil edilmesi gerekir.

    - [AutoMapper paketi](https://www.nuget.org/packages/AutoMapper/) için aşağıdaki kod satırının .csproj dosyasının olduğu dizinde çalıştırılması gerekir.
      - `dotnet add package AutoMapper --version 10.1.1`
    - [AutoMapper Dependecy Injection Paketi](https://www.nuget.org/packages/AutoMapper.Extensions.Microsoft.DependencyInjection/) için aşağıdaki kod satırının .csproj dosyasının olduğu dizinde çalıştırılması gerekir.
      - `dotnet add package AutoMapper.Extensions.Microsoft.DependencyInjection --version 8.1.1`

2.  Proje içerisinde AutoMappper'ı servis olarak kullanabilmemiz için Startup.cs dosyası içerisindeki Configure Service metoduna aşağıdaki kod satırının eklenmesi gerekir.

    - ` services.AddAutoMapper(Assembly.GetExecutingAssembly());`

3.  Mapper Konfigürasyonu için Profile sınıfından kalıtım alan aşağıdaki gibi bir sınıf implemente etmemiz gerekir.

        using AutoMapper;
        using BookStoreWebApi.BookOperations.CreateBook;
        using BookStoreWebApi.BookOperations.GetBookDetail;
        using BookStoreWebApi.Entities;

            namespace BookStoreWebApi.Common
            {
                public class MappingProfile : Profile
                {
                    public MappingProfile()
                    {
                        CreateMap<CreateBookModel, Book>();
                        CreateMap<Book, BookDetailViewModel>().ForMember(dest => dest.Genre, opt => opt.MapFrom(src => ((GenreEnum)src.GenreId).ToString()));
                    }
                }

            }

4.  Eklemiş olduğumuz Dependency Injection paketi sayesinde Controller'ın kurucu fonksiyonunda mapper'ı kod içerisinde kullanılmak üzere dahil edebiliriz.

        private readonly IMapper _mapper;
        public BookController(BookStoreDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

5.  Artık kod içerisinde \_mapper'ı kullanabiliriz.

Profile sınıfından kalıtım alan sınıfa (Yukarıdaki örnekte MappingProfile) daha yakından bakmakta fayda var. Çünkü mapping konfigurasyonlarımız o sınıftan geliyor.

CreateMap<Source,Target> parametreleri ile çalışır. Bu şu demek; kod içerisinde source ile belirtilen obje tipi target ile belirtilen obje tipine dönüştürülebilir.

`CreateMap<CreateBookModel, Book>();`

Objeyi olduğu gibi çevirmek istiyorsak yani her tipteki obje field ları birbiri ile aynı olduğu durumda yukarıdaki tanımlama yeterlidir.

Mapper ile obje özelliklerinin birbirine nasıl map'laneceğini de söyleyebiliriz.

    CreateMap<Book, BookDetailViewModel>().ForMember(dest => dest.Genre, opt => opt.MapFrom(src => ((GenreEnum)src.GenreId).ToString()));

Yukarıdaki örneği incleyelim. Öncelikle Book tipindeki bir objenin BookDetailViewModel tipindeki bir objeye dönüştürülebildiğini görürüz. Ve ForMember() kullanımı da şunu söylüyor. BookDetailViewModel içerisindeki Genre özel bir şekilde oluşuyor. Source olan Book objesi içerisindeki GenreId'nin GenreEnum'daki string karşılığıdır. Eğer book objesi içerisine bakarsak Genre diye bir özellik göremeyiz. Ama BookDetailView modeline mapleme yaptığımızda Genre özelliğini görebiliriz.

Bu ForMember() kullanımı ile istediğimiz kadar özelleştirme yapabiliriz.

**Okuma Önerisi:** AutoMapper ile ilgili daha detaylı bilgi için [tıklayınız.](https://docs.automapper.org/en/stable/Getting-started.html)

**Okuma Önerisi:** AutoMapper örnek kullanımları için [tıklayınız.](https://www.gencayyildiz.com/blog/asp-net-coreda-automapper-kullanimi/)
