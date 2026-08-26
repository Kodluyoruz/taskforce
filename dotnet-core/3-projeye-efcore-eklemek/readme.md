# Bir Projeye Entity Framework Core Nasıl Eklenir? 

Bir .Net Core WebApi projesinde Ef Core kullanabilmek için öncelikler gerekli paketleri projeye dahil etmeliyiz. 
Dotnet'in paket yöneticisi [Nuget Package Manager](https://www.nuget.org/)'dır.
Localde çalışma yaparken gerçek bir veri tabanı ile çalışmak maliyetli olabilir. Bunun yerine hem implementasyonu kolay olan hem de hızlı çalışan InMemory database kullanılması önerilir. Ef Core'un tüm özelliklerini in memory database implemente ederek kullanabiliriz. 
BookStore uygulamamıza da In Memory database implemente ederek EF Core u kullanıcaz. 

Projeyi In Memoery EF Core ile çalışır hale getirmek için izlememiz gereken adımlar şu şekildedir arkadaşlar. 

 1. Projeye [Microsoft.EntityFrameworkCore](https://www.nuget.org/packages/Microsoft.EntityFrameworkCore/)'nin eklenmesi
    -  WebApi proje dizininde aşağıdaki komutu çalıştırınız. 
    
        `dotnet add package Microsoft.EntityFrameworkCore --version 5.0.6`
2. Projeye [Microsoft.EntityFrameworkCore.InMemory](https://www.nuget.org/packages/Microsoft.EntityFrameworkCore.InMemory)'nin eklenmesi.
      -  WebApi proje dizininde aşağıdaki komutu çalıştırınız. 
    
        `dotnet add package Microsoft.EntityFrameworkCore.InMemory --version 5.0.6  

3. Db operasyonları için kullanılacak olan DB Context'i yaratılması
         
    ```
    public class BookStoreDbContext : DbContext
    {
        public BookStoreDbContext(DbContextOptions<BookStoreDbContext> options) : base(options)
        {}
        public DbSet<Book> Books { get; set; }
      
    }
    ```
4. Initial Data için bir Data Generator'ın yazılması
    
    ```
    public class DataGenerator
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new BookStoreDbContext(
            serviceProvider.GetRequiredService<DbContextOptions<BookStoreDbContext>>()))
            {
                // Look for any book.
                if (context.Books.Any())
                {
                    return;   // Data was already seeded
                }

                context.Books.AddRange(
                   new Book()
                   {
                       Title = "Lean Startup",
                       GenreId = (int)GenreEnum.PersonalGrowth, // Personal Growth
                       PageCount = 200,
                       PublishDate = new DateTime(2001, 06, 12)
                   });

                context.SaveChanges();
            }
        }
    }
    ```

5. Uygulama ayağa kalktığından initial datanın in memory DB'ye yazılması için Program.cs içerisinde configurasyon yapılması

    ```
    public static void Main(string[] args)
            {
                //1. Get the IWebHost which will host this application.
                var host = CreateHostBuilder(args).Build();

                //2. Find the service layer within our scope.
                using (var scope = host.Services.CreateScope())
                {
                    //3. Get the instance of BoardGamesDBContext in our services layer
                    var services = scope.ServiceProvider;
                    //4. Call the DataGenerator to create sample data
                    DataGenerator.Initialize(services);
                }

                //Continue to run the application
                host.Run();
            }
    ```

6. Startup.cs içerisinde **ConfigureServices()** içerisinde DbContext'in servis olarak eklenmesi
    
    ```
    services.AddDbContext<BookStoreDbContext>(options => options.UseInMemoryDatabase(databaseName: "BookStoreDB"));
    ```

7. Kullanmak istediğiniz yerde _context'i kurucu metot aracılığıyla ekleyerek kullabilirsiniz :) 
  
    ```
    readonly BookStoreDbContext _context;
    public BookController(BookStoreDbContext context)
    {
        _context = context;
    }
    ```