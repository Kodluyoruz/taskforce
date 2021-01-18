

# Statement interface

Statement interface ile veri tabanı tabloları üzerinde SQL komutlarını çalıştırırız. SQL komutuna göre hangi fonksiyonu kullanacağımız değişebilir. Aşağıda bunlar listelenmiştir.

 

1) **public ResultSet executeQuery(String sql):** “SELECT” SQL komutuyla tablo üzerinde veri sorgulaması yapılacaksa bu fonksiyon kullanılmalıdır. Sorgu sonucunda “ResultSet” tipinde bir nesne dönecektir. Bu nesne içinde sorgulanan tablodan dönen kayıtlar olacaktır.

 

2) **public int executeUpdate(String sql):** DML ve DDL tipinde SQL komutları çalıştırılabilir. INSERT, UPDATE, DELETE gibi tablo verisinde değişikliği sağlayan komutlar işletilebilir. Tabloda veya veri tabanında yapısal değişikliğe yol açan CREATE, DROP gibi komutlar da çalıştırılabilir. 

3) **public boolean execute(String sql):** Eğer çalıştıracağımız SQL komutu birden fazla sonuç dönecekse bu fonksiyonu kullanabiliriz.

 

## Veri tabanından Kayıt Sorgulamak

SELECT SQL komutu ile veri tabanından yetkimizin olduğu tablo üzerinde sorgu çalıştırabiliyorduk. Java JDBC API ile bunu nasıl yapacağımıza dair küçük bir örnek aşağıdadır. “employees_auto_inc” tablosundan tüm kayıtları çeken bir Java kodu yazacağız.

```
Class.forName(jdbcDriver);
dbConnection = DriverManager.getConnection(dbHost, userName, password);
Statement statement = dbConnection.createStatement(ResultSet.TYPE_FORWARD_ONLY, ResultSet.CONCUR_READ_ONLY);
ResultSet resultSet = statement.executeQuery("SELECT * FROM employees_auto_inc");

while(resultSet.next()) {
  
  printEmployeeFormattedText(resultSet);
  
}

resultSet.first();
System.out.println("First record");
printEmployeeFormattedText(resultSet);


resultSet.last();
System.out.println("Last record");
printEmployeeFormattedText(resultSet);


resultSet.absolute(3);
System.out.println("3. record");
printEmployeeFormattedText(resultSet); 

```



 ResultSet interface’de sorgu sonucunda gelen kayıtlara erişim için belli başlı fonksiyonlar bulunur.

 

“next” fonksiyonu: bu fonksiyon çağrıldığında bir sonraki satıra ilerler. Böylece o satır üzerinde okuma yapabilmeyi sağlar. Okunacak kayıt kalmadığında “false” döner.

 

“first” fonksiyonu: bu fonksiyon çağrıldığında sorgu sonucu kümesindeki ilk elemana erişim sağlar.

 

“last” fonksiyonu: bu fonksiyon çağrıldığında sorgu sonucu kümesindeki son elemana erişim sağlar.

 

“absolute” fonksiyonu: bu fonksiyon ile sorgu sonuç kümesindeki direkt olarak istenilen eleman işaret edilir.



## Veri tabanı tablosuna kayıt eklemek

```
Class.forName(jdbcDriver);
dbConnection = DriverManager.getConnection(dbHost, userName, password);

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

```



Tabloya yeni kayıt eklemek için “PreparedStatement” kullanılabilir. “PreparedStatement” ile oluşturulan sorgularda dışarıdan alınacak parametrelere ait değerler “?” karakteriyle işaretlenir. Böylece, “?” olan yerlere dinamik olarak veri atanabilir. “?” yerine koyulacak veri sırayla göre verilir. “executeUpdate” metodu ile bir kayıt ekleme işlemi yapılır.



## Veri tabanı tablosunda kayıt güncellemek

```
Class.forName(jdbcDriver);
dbConnection = DriverManager.getConnection(dbHost, userName, password);

PreparedStatement preparedStatement = 
    dbConnection.prepareStatement("UPDATE employees_auto_inc SET first_name = ?, last_name = ? WHERE emp_no = ? ");

preparedStatement.setString(1, name);
preparedStatement.setString(2, lastName);
preparedStatement.setLong(3, empNo);

int updatedRowCount = preparedStatement.executeUpdate();
System.out.println(updatedRowCount + " rows updated!");

```

Kayıt güncelleme işleminde kullanılan Java kodları kayıt ekleme ile aynıdır.



## Veri tabanı tablosunda kayıt silmek

```
Class.forName(jdbcDriver);
dbConnection = DriverManager.getConnection(dbHost, userName, password);

PreparedStatement preparedStatement = 
    dbConnection.prepareStatement("DELETE FROM employees_auto_inc WHERE emp_no = ?");

preparedStatement.setLong(1, empNo);

int deletedRowCount = preparedStatement.executeUpdate();
System.out.println(deletedRowCount + " rows deleted!");
```



 Kayıt silme işlemindeki Java kodları kayıt ekleme ve güncelleme ile aynıdır.

