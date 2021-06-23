# Middleware Kavramı
Middleware yani ara katman client tarafından bir request gönderildiğinde request'e karşılık response dönene kadar geçen sürede yapılması gereken işlemler için process'in arasına girmeyi sağlayan yapılardır. Request ve response arasına girip işlem yapmamıza olanak sağlamasının yanında, bu aralığa çoklu işlemler de dahil edebiliriz. Bu işlemlerin hangi sırayla yapılacağını da belirleyebiliriz.

## .Net5'de Middleware Yapısı
.Net5 içerisindeki middleware'ler Startup sınıfı içerisinden Configure metodu içinde saklanır. Middleware'lerin çalışacağı pipeline ı bu metot içerisinde belirleriz. 



**Örnek:** 

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
            app.UseSwagger();
            app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "MiddlewareKavramı v1"));
        }

        app.UseHttpsRedirection();

        app.UseRouting();

        app.UseAuthorization();

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
        });
    }

Yukarıdaki örnekte app.Use ile başlayan ifadeler .Net'in kendi özel middleware leridir. Örneğin `app.UseHttpsRedirection();`bu middleware bir https yönlendirmesi yapar. 

### Run Metodu

Bazı metotlar pipeline içerisinde kısa devreye neden olur. Yani kendisinden sonraki işlemler gerçekleşmez. Bu tip meotları kullanırken dikkatli olmak gerekir. Run bunlardan biridir. 

    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
        app.Run(async context => Console.WriteLine("Middleware 1."));
        app.Run(async context => Console.WriteLine("Middleware 2."));
    }

Örneğin yukarıdaki pipeline'ı bir inceleyelim. Arka arkaya 2 middleware tetikledik. Normal şartlar altında bunu Run ile kullanmamış olsaydık, arkad arkaya aşağıdaki ifadeleri client'a response olarak yazacaktı.

    Middleware 1. 
    Middleware 2.

Ama bu pipelien çalıştığında sadece `Middleware 1.`Çünkü  Run() metodu pipeline'ın kısa devre yapmasına neden oldu. 2. middleware çalışamadı.

### Use Metodu
Devreye girdikten sonra kendinden sonraki middleware'i tetikleyebilir ve işi bittikten sonra kaldığı yerden devam edilebilir bir yapı sunar. 

    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
        app.Use(async (context, next) =>
        {
            Consoel.WriteLine("Middleware 1 başladı.");

            await next.Invoke();

            Console.WriteLine("Middleware 1 sonlandırılıyor.");
        });

        app.Run(async context =>
        {
            Console.WriteLine("Middleware 2 kısa devre yaptırıyor.");
        });
    }

Yukarıdaki kod bloğu çalıştığında çıktısı şu şekilde olur: 

    Middleware 1 başladı.
    Middleware 2 kısa devre yaptırıyor.
    Middleware 1 sonlandırılıyor.

Görüldüğü üzere Middleware 1 çalıştı. İlk komutu yazdırdıktan sonra sonraki middleware'i çağırdı. Use metodu içerisindeki  `await next.Invoke();` bir sonraki middleware çğıran komuttur. 2. Middleware'de komutunu yazdırdı. Ama `Run()` metodu ile çağırıldığı için bir kısa devreye neden oldu. Kendisinden sonra bir middleware çağrımı olsaydı çalışmayacaktı. Pipeline sona erdiği için Middleware 1 kaldığı yerden devam etti ve komutunu ekrana yazdırıp sona erdi.

### Map Metodu
Middleware lerin path bazından çalışmasını istediğimiz durumlarda kullanırız. `Use()` yada `Run()` metodunu `if()` statement ile yöneterekte bunu yapabiliriz. Ama Map metodu bize bunu kolayca yönetme olanağı sağlıyor.

**Örnek:**
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
        app.Use(async (context, next) =>
        {
            Console.WriteLine("Middleware 1 tetiklendi.");
            await next.Invoke();
        });

        app.Map("/test", internalApp =>
            internalApp.Run(async context =>
                {
                    Console.WriteLine("/test middleware tetiklendi.");
                }));
    }

Yukarıdaki kod bloğu çalıştığında eğer `/test` path'ine bir istek gelirse console çıktısı aşağıdaki gibi olur.

    Middleware 1 tetiklendi.
    /test middleware tetiklendi.

Path `/test` değil ise çıktı aşağıdaki gibi olacaktır. 

    Middleware 1 tetiklendi.

### MapWhen Metodu

Map metodu ile sadece path'e bazında middleware yönetebilirken MapWhen ile request'e bağlı olarak her türlü yönlendirmeyi yapabiliriz.

**Örnek:**

    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
        app.Use(async (context, next) =>
        {
            Console.WriteLine("Middleware 1 tetiklendi.");
            await next.Invoke();
        });
            
        app.MapWhen(x => x.Request.Method == "GET", internalApp =>
        {
            internalApp.Run(async context => await Console.WriteLine("MapWhen ile Middleware Tetiklendi."));
        });
    }

Yukarıdaki örneği inceleyecek olursak, tipi HttpGet olan requestlere özel çalışacak bir middleware yaratılmış olduğunu görürüz.

## Custom Extension Middleware Yaratmak

Middleware lerimizi Use, Run, Map ve MapWhen gibi metotlarla tanımlayabileceğimiz için bize özel extension şeklinde de yazabiliriz.

**Örnek:**

```
public class HelloWorldMiddleware
{
    readonly RequestDelegate _next;
    public HelloWorldMiddleware(RequestDelegate next)
    {
        _next = next;
    }
    public async Task Invoke(HttpContext context)
    {
        Console.WriteLine("Hello World!");
        await _next.Invoke(context);
        Console.WriteLine("Bye World!");
    }
}
```
```
    static public class HelloMiddlewareExtension
    {
        public static IApplicationBuilder UseHelloWorld(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<HelloMiddleware>();
        }
    }
````
```
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
        app.UseHello();

        app.Run(async context => await context.Response.WriteAsync("Run middleware"));
    }
```
Yukarıdaki örneği inceleyecek olursak  öncelike bir HelloMiddleware sınıfının oluşturulduğunu ve ona ait bir `Invoke()` metodunun yazıldığını görüyoruz.`await _next.Invoke(context);` komut satırı ile de bir sonraki middleware çağırılıyor.
Son olarakta ekrana `Bye World!`yazması bekleniyor. 

Son olarak HelloMiddlewareExtension static sınıfı içerisindeki UseHelloWorld extension metodu içerisindeki UseMiddleware<HelloMiddleware>() metot çağrımı middleware ı ekler.

Kesin bir kural olmamakla birlikte middleware ler standart olarak Use prefix'i ile başlar. 

**Okuma Önerisi:** Middleware ile igili data detaylı bilgi sahibi olabilmek için [buraya](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/middleware/?view=aspnetcore-5.0) ve [buraya](https://www.gencayyildiz.com/blog/asp-net-core-2de-middleware-yapisi-ve-kullanimi/) tıklayınız.




