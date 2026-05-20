# Veritabanı Bağlantısı

Uygulamanızda hangi veritabanını kullanacaksanız o veritabanına ait JDBC Driver’ı indirmeniz gerekmektedir.

Oracle veritabanı için [buradan](https://www.oracle.com/database/technologies/appdev/jdbc-downloads.html) indirebilirsiniz.

MySql veritabanı için [buradan](https://www.mysql.com/products/connector/) indirebilirsiniz.

JDBC uygulaması oluşturulurken aşağıdaki adımlar izlenir:

- import java.sql.* paketinin içe aktarılması.
- Sürücüleri kaydetme.
- Bağlantı açma. Veritabanı ile fiziksel bağlantı sağlayan ve Connection nesnesini oluşturan DriverManager.getConnection() metodu gerekmekte.
- Sorgu çalıştırma. Veritabanına SQL ifadesi göndermek için, Statement türünde bir nesne gerekmekte.
- SQL cümlesine göre veri işlemi.
- Kullanılan kaynağı kapatmak.

````java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConnect {
    public static final String DB_URL = "jdbc:mysql://localhost/dbName";
    public static final String DB_USERNAME = "username";
    public static final String DB_PASSWORD = "password";

    public static void main(String[] args) {
        Connection conn = null;

        try {
            conn = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD);
        } catch (SQLException ex) {

            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLState: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
        }
    }

}

````