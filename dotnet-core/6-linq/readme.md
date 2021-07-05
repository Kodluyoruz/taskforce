# LINQ (Language Integrated Query)

LINQ .Net Framework 3.5 ve Visual Studio 2008 ile hayatımıza giren farklı data source yani veri kaynaklarını sorgulamamıza yarayan bir dildir. LINQ Visual Basic ve C# ile birlikte kullanılabilir.

Linq IQuerayable sınıflar ve IQuerayable'dan türeyen sınıflarla birlikte kullanılabilir. EF Core ile yarattığımız context'in elemanları yani tabloların koddaki karşıklıkları DBSet tipindedir. DBSet de IQuerayable sınıfından türeyen bir sınıftır. Dolayısıyla LINQ kullanılarak DBSet'ler üzerinde sorgulama yapılabilir.

Günlük hayatımızda Entity Framework Core ile birlikte LINQ'yu çok kullanıyoruz. Ve her gün nerdeyse kullandığımız bazı temel Linq metotları vardır.
Başlıca önemli LINQ metotları şu şekilde:

- First()
- Find()
- FirstOrDefault()
- Single()
- SingleOrDefault()
- ToList()
- Count()
- Min()
- Max()
- Last()
- LastOrDefault()
- Average()

Şimdi **LINQ** metotlarının bazılarının kullanımlarına tek tek örnekler ile birlikte bakalım.

- **Find()**

  DBSet sınıfı ile kullanılabilen bir metottur. İlgili DbSet üzerinden Primary Key olarak tanımlanan alana göre arama yapmak için kullanılır.

  ```
  using (var ctx = new BookStoreDbContext())
  {
      var book = ctx.Books.Find(id);
  }
  ```

- **First/FirstOrDefault()**

  First ve FirstOrDefault birden fazla verinin olabileceği sorgulamaların sonunda listedeki ilk elemanı seçmek için kullanılır.

  ```
  using (var ctx = new BookStoreDbContext())
  {
      var books = ctx.Books
                      .Where(s => s.Title == "Herland")
                      .FirstOrDefault<Book>();
  }
  ```

  **Önemli:** **First()** ve **FirstOrDefault()** arasındaki temel fark; eğer listede veri bulunamazsa First() hata fırlatırken, FirstOrDefault() geriye null döndürür. Bu nedenle FirstOrDefault() ile veriyi çekip daha sonradan verinin null olup olmadığını kontrol etmek daha doğru bir yaklaşım olur.

- **SingleOrDefault()**

  Sorgulama sonunda kalan tek veriyi geri döndürür. Eğer listede birden fazla eleman varsa hata döndürür. Listede hiç eleman yoksa geriye null döndürür.

  ```
  using (var ctx = new BookStoreDbContext())
  {
      var books = ctx.Books
                      .Where(s => s.Title == "Herland")
                      .SingleOrDefault<Book>();
  }
  ```

- **ToList()**

  Sorgulama sonucunu geriye koleksiyon olarak döndürmek için kullanılır.

  ```
  using (var ctx = new BookStoreDbContext())
  {
      var bookList = ctx.Books.Where(s => s.GenreId == 2).ToList();
  }
  ```

- **OrderBy/OrderByDescending()**

  OrderBy() bir listeyi sıralamak için kullanılır. OrderBy() varsayılan olarak **Ascending** sıralama sunar. Tersi sıralamak için OrderByDescending() kullnaılmalıdır.

  ```
  using (var ctx = new BookStoreDbContext())
  {
      var books = ctx.Books.OrderBy(s => s.Title).ToList();

      // or descending order
      var  descBooks = ctx.Books.OrderByDescending(s => s.Title).ToList();
  }
  ```

- **GroupBy()**

  Belirli bir alana göre verileri gruplamak için kullanılır.

  ```
  using (var ctx = new BookStoreDbContext())
  {
      var books = ctx.Books.GroupBy(s => s.GenreId);

      foreach (var groupItem in books)
      {
          Console.WriteLine(groupItem.Key);

          foreach (var book in groupItem)
          {
              Console.WriteLine(book.GenreId);
          }

      }
  }
  ```

- **Parameterized Query**

  LINQ içerisinde parametreleri kullanabiliriz.

  ```
  using (var ctx = new BookStoreDbContext())
  {
      string title = "Herland";
      var book = ctx.Books
                  .Where(s => s.Title == name)
                  .FirstOrDefault<Book>();
  }
  ```

- **Anonymous Object Result**

  LINQ her zaman geriye entity objesi dönmek zorunda değildir. Query sonucunu kendi yarattığınız bir obje formatında döndürebilirsiniz.

  ```
  using (var ctx = new BookStoreDbContext())
  {
      var anonymousObjResult = ctx.Books
                                  .Where(b => b.GenreId == 2)
                                  .Select(b => new {
                                              Id = b.Id,
                                              BookName = b.Title });

      foreach (var obj in anonymousObjResult)
      {
          Console.Write(obj.Name);
      }
  }
  ```

**Okuma Önerisi:** LINQ ile ilgili daha fazla bilgi edinmek için [tıklayınız](https://www.entityframeworktutorial.net/efcore/querying-in-ef-core.aspx)
