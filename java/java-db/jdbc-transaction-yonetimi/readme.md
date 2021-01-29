# JDBC ile Transaction Yönetimi

Bilindiği gibi MySQL ilişkisel bir veri tabanı yönetim sistemidir. Dolayısıyla, ACID prensiplerini bütünüyle destekler. Eğer, bir veri tabanı Transaction’ı başarılı ise “commit” edilir, değilse “rollback” edilir. “commit” edildiğinde değişiklikle kalıcı olarak veri tabanına gönderilir. “rollback” yapılırsa ise o ana kadar yapılmış olan tüm değişiklikler geri alınır.

```java
try {
  
  Class.forName(jdbcDriver);
  dbConnection = DriverManager.getConnection(dbHost, userName, password);
  dbConnection.setAutoCommit(false);
  
  PreparedStatement preparedStatement = 
      dbConnection.prepareStatement("INSERT INTO employees_auto_inc (emp_no, first_name, last_name, gender, birth_date, hire_date) VALUES(?,?,?,?,?,?)");
  
  preparedStatement.setLong(1, 0);
  preparedStatement.setString(2, "Ayşe");
  preparedStatement.setString(3, "Kalem");
  preparedStatement.setString(4, "F");
  preparedStatement.setDate(5, new java.sql.Date(new Date().getTime()));
  preparedStatement.setDate(6, new java.sql.Date(new Date().getTime()));
  
  int insertedRowCount = preparedStatement.executeUpdate();
  
  System.out.println(insertedRowCount + " record inserted!");
  
  /* Sembolik olarak hata oluşturuyoruz. Hata oluşunca kayıt veritabanına yansımıyor.
   * Çünkü, Transaction'da hata oluşursa rollback ediyoruz.
  if(insertedRowCount == 1) {
    throw new RuntimeException("Waowww SQL Exception!");
  }
  */
  
  dbConnection.commit();
  
}
catch (Exception e) {
  
  e.printStackTrace();
  
  try {
    // Hata olursa rollback edip tüm değişiklikleri geri alıyoruz.
    dbConnection.rollback();
    
  } catch (SQLException e1) {
    e1.printStackTrace();
  }
}

```

“JDBC” veri tabanı bağlantılarında Transaction’lar otomatik olarak commit edilir. “setAutoCommit” fonksiyonu ile otomatik commit işlemi kapatılabilir. Böylece, Transaction yönetimini yazılımcının üstlenmesi gerekmektedir.

 

Yukarıdaki örnekte false yaparak Transaction yönetimini üzerimize aldık. “commit()” fonksiyonunu çağırarak değişiklikleri kalıcı olarak gönderebiliriz.

 

Sembolik olarak bir if bloğu içine hata fırlatan bir kod ekledik. O hata fırlatan kısmı açtığımızda veri tabanına bir kayıt eklemek komutu işletmiş olsa bile hata alındığından “rollback” fonksiyonu çağırıyoruz. Böylece, o ana kadar yapılmış olan değişikliklerin geri alınmasını sağlıyoruz.

 