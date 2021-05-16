# ORM (Object Relational Mapping) ve Entity Framework Core
İlişkisel veri tabanı ile uygulama içerisinde kullandığımız modelleri/nesneleri birbirine bağlama tekniğidir. Db objelerinin kod tarafında bir replikası bir yansıması var gibi düşünebilirsiniz. ORM bu mapleme tekniğinin adıdır. ORM'i uygulamak için kullandığımız yazılımlara da ORM Araçları diyoruz. ORM araçları ilişkisel veritabanları ve uygulama arasındaki köprüdür.

En çok kullanılan ORM araçları şu şekildedir. 

* Entity Framework
* Entity Framework Core
* Dapper
* nHibernate

ORM Araçlarının **Avantajları:** 
* Database teknolojisine olan bağımlılığını ortadan kaldırır. Uygulama sadece ORM'i bilir. Database hakkında fikri yoktur. Bu da her yazılımcının sevdiği bir özelliktir. :) 
* SQL/TSQL/PLSQL bilmeden çok kısa bir zamanda db işlemlerini çok daha az kod yazarak yapabilirsiniz.
* Nesne yönelimli kod yazmayı destekler. 
* ORM Araçlarının çoğu açık kaynak kodludur.

ORM Araçlarının **Dezavantajları:**

* Performans sorunları yaratbilir. DB'ye bağlanıp sql çalıştırmak her zaman için daha performanslıdır. 
* Orm araçlarının oluşturduğu sql lere müdahale edemezsiniz. Kontrolü developer'dan alır.
* Orm aracını öğrenmek için de zamana ihtiyacınız vardır.

Biz proje içerisinde Entity Framework Core kullananacağız arkadaşlar.

**İnceleme Önerisi:**  EntityFramework Core kütüphanesini incelemek için [tıklayınız.](https://github.com/dotnet/efcore)


