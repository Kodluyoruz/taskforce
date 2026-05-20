# ORM (Object Relational Mapping) Nedir? ORM Araçları Nelerdir? Entity Framework Core'a Giriş

## ORM (Object Relational Mapping)

İlişkisel veri tabanı ile uygulama içerisinde kullandığımız modelleri/nesneleri birbirine bağlama tekniğidir. Db objelerinin kod tarafında bir replikası bir yansıması var gibi düşünebilirsiniz. ORM bu mapleme tekniğinin adıdır. ORM'i uygulamak için kullandığımız yazılımlara da ORM Araçları diyoruz. ORM araçları ilişkisel veritabanları ve uygulama arasındaki köprüdür.

En çok kullanılan ORM araçları şu şekildedir.

- Entity Framework
- Entity Framework Core
- Dapper
- nHibernate

ORM Araçlarının **Avantajları:**

- Database teknolojisine olan bağımlılığını ortadan kaldırır. Uygulama sadece ORM'i bilir. Database hakkında fikri yoktur. Bu da her yazılımcının sevdiği bir özelliktir. :)
- SQL/TSQL/PLSQL bilmeden çok kısa bir zamanda db işlemlerini çok daha az kod yazarak yapabilirsiniz.
- Nesne yönelimli kod yazmayı destekler.
- ORM Araçlarının çoğu açık kaynak kodludur.

ORM Araçlarının **Dezavantajları:**

- Performans sorunları yaratabilir. DB'ye bağlanıp sql çalıştırmak her zaman için daha performanslıdır.
- Orm araçlarının oluşturduğu sql lere müdahale edemezsiniz. Kontrolü developer'dan alır.
- Orm aracını öğrenmek için de zamana ihtiyacınız vardır.

ORM modelleme yaklaşımları 3'e ayrılır:

- DB First Yaklaşım
- Code First Yaklaşım
- Model First Yaklaşım

Tüm yaklaşımları incelemek için [tıklayınız](http://cagataykiziltan.net/tr/entity-framework-database-first-model-first-code-first-yaklasimlari/)

**Okuma Önerisi - 1:** Code First Yaklaşı için [tıklayınız.](https://www.tutorialspoint.com/entity_framework/entity_code_first_approach.htm)

**Okuma Önerisi - 2:** DB First Yaklaşı için [tıklayınız.](https://www.tutorialspoint.com/entity_framework/entity_database_first_approach.htm)

**Okuma Önerisi - 3:** Model First Yaklaşı için [tıklayınız.](https://www.tutorialspoint.com/entity_framework/entity_model_first_approach.htm)

**Okuma Önerisi - 4:** Modelleme yaklaşımlarının avantaj ve dezavantajları için [tıklayınız.](https://www.soltrabilisim.com.tr/entity-framework-code-first-avantajlar/)

Biz proje içerisinde Entity Framework Core'u Code First Yaklaşım ile kullananacağız arkadaşlar.

## Entity Framework Core

Entity Framework Microsoft'un ORM aracı olarak sunduğu Data Access teknolojisidir. Entity Framework yıllar içerisinde olgunlaşarak EF 6.x versiyonuna ulaştıktan sonra yerini Entity Framework Core 'a bıraktı. Entity Framework Core ise cross platform ve open source bir teknoloji.

Entity Framework .Net Core uygulamalarda kullanılmak üzere tasarlandı. Ama .Net Framework 4.5+ versiyonuyla yazılmış uygulamalarda da kullanılabilir durumdadır.

**İnceleme Önerisi:** EntityFramework Core kütüphanesini incelemek için [tıklayınız.](https://github.com/dotnet/efcore)

Entity Framework Core'un kullanıldığı platform ve .Net versiyonları ile ilgili aşağıdaki tabloyu inceleyebilirsiniz.

![EF Core](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/dotnet-core/2-orm-ve-ef-core/figures/ef-core.png)

**Okuma Önerisi:** Entity Framework Core ile ilgili detaylı bilgi için [tıklayınız.](https://docs.microsoft.com/ef/core)

**Okuma Önerisi:**
