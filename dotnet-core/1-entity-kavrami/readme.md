# Entity Kavramı

Entity Framework içindeki bir entity esasında veritabanı tablosuyla eşleşen bir sınıftır. Bu sınıf, DbContext sınıfına DbSet <TEntity> türü özelliği olarak dahil edilmelidir. 
EF her entity sınıfını bir tabloyla ve bir entity sınıfın her özelliğini veritabanındaki bir tablo kolonuna eşler.

Örneğin, aşağıdaki Öğrenci ve Sınıf, okul uygulamasındaki alan sınıflarıdır. 
Örnek olarak aşağıdaki `Student` ve `Grade` sınıflarını düşünelim. 
```
public class Student
{
    public int StudentID { get; set; }
    public string StudentName { get; set; }
    public DateTime? DateOfBirth { get; set; }
    public byte[]  Photo { get; set; }
    public decimal Height { get; set; }
    public float Weight { get; set; }
        
    public Grade Grade { get; set; }
}
```
```
public class Grade
{
    public int GradeId { get; set; }
    public string GradeName { get; set; }
    public string Section { get; set; }

    public ICollection<Student> Students { get; set; }
} 
```

`SchoolDBContext`adında da  bir context'imiz olduğunu düşünelim. `Student` ve `Grade` sınıflarımızı `DbSet<TEntity>` formatında context'e göstermemiz gerekiyor. Ki Entity Framework DB tarafındaki hangi tabloyu code tarafındaki hangi sınıf ile eşleştireceğini bilsin.

```
public class SchoolContext : DbContext
{
    public SchoolContext()
    {

    }

    public DbSet<Student> Students { get; set; }
    public DbSet<Grade> Grades { get; set; }
}
```

Bu DBContext'e göre EF database üzerindeki aşağıdaki 2 tabloyu oluşturur. 

![EF Generates these tables](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/dotnet-core/1-entity-kavrami/figures/dbtables-for-entities.png)

Bir entity sınıfında 2 tip property yani özellik bulunabilir. Bunlar:

- **Scalar Property:** Primitive type olan field'lar olarak düşünebilirsiniz. Db de data tutan kolonlara karşılık gelir. `Students` tablosundan yola çıkarsak her bir skalar property için aşağıdaki gibi tablo kolonları oluşur. 

    ![Primitive Typed Properties](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/dotnet-core/1-entity-kavrami/figures/dbcolumns-for-scalar-properties.png)

- **Navigation Property:** Navigation Property bir entity ile başka bir entity arasında olan ilişkiyi temsil eder.
    - **Refererence Navigation Property:** Entity nin başka bir entity'e yi property olarak barındırması anlamına gelir. Entity framework bu 2 tabloyu birbirine Foreign Key ile bağlar.

    ```
    public class Student
    {
        // scalar properties
        public int StudentID { get; set; }
        public string StudentName { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public byte[]  Photo { get; set; }
        public decimal Height { get; set; }
        public float Weight { get; set; }
            
        //reference navigation property
        public Grade Grade { get; set; }
    }
    ```
    Yukarıdaki örnek kodu incelersek Student entity si içerisinde Grade entity sinin var olduğunu görüyoruz. Bu demek oluyor ki Grade Student için bir referans tablo. EF Student tablosu içerisinde GradeId ismiyle bir FK tutarak bu iki tabloyu birbirine bağlar.

    ![Reference Navigation Property](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/dotnet-core/1-entity-kavrami/figures/ref-property-in-dbtable.png)

