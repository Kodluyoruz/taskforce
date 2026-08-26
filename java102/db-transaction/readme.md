# JDBC ile Transaction Yönetimi

Yazdığımız uygulamalar bazen bir işlem çağrısıyla bir ya da birden fazla tabloda işlem yapabilir, bir ya da birden fazla sorguyu ardışık olarak çalıştırmayı gerektirebilmektedir. Bu durumlarda ardışık işlemler gerçekleşirken sürecin bir noktasında bir sorgu hata verebilir. Bu durumlarda süreçteki diğer işlemleri de
geri almak isteyebiliriz. Bu durumlarda tablolara gitmek ve yaptığımız işlemlerin tersini yapmak bir hayli zor ve karmaşık olacaktır.

Bunu bir diagram ile açıklamak istersek

![Figure 1](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/java102/db-transaction/figures/1.png)

şeklinde bir işlemimiz olsun. Yani kullanıcı bir butona basacak ve bu işlemler ardışık olarak gerçekleşecek.

![Figure 2](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/java102/db-transaction/figures/2.png)

Diagramda görüldüğü gibi **Sorgu 3**'te bir nedenden dolayı bir hata gerçekleşti. Bu durumda verilerin bütünlüğünü ve doğruluğunu sağlamamız için işlemi geri almamız gerekir. Bunu yapmak için de JDBC bize bazı fonksiyonlar sağlamaktadır.

Veri tabanlarında eğer, bir veri tabanı Transaction’ı başarılı ise “commit” edilir, değilse “rollback” edilir. “commit” edildiğinde değişiklikle kalıcı olarak veri tabanına gönderilir. “rollback” yapılırsa ise o ana kadar yapılmış olan tüm değişiklikler geri alınır.

```java
import java.sql.*;

public class DBConnect {
    public static final String DB_URL = "jdbc:mysql://localhost/school";
    public static final String DB_USERNAME = "root";
    public static final String DB_PASSWORD = "";

    public static void main(String[] args) {
        Connection conn = null;
        try {
            conn = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD);
            conn.setAutoCommit(false);

            // PreparedStatement ile Insert İşlemi
            PreparedStatement pr = conn.prepareStatement("INSERT INTO student (student_fname,student_lname,student_class) VALUES (?,?,?)");
            pr.setString(1, "Harry");
            pr.setString(2, "Potter");
            pr.setString(3, "2");
            pr.executeUpdate();

            if (1 == 1) {
                throw new SQLException();
            }

            // PreparedStatement ile Insert İşlemi
            pr.setString(1, "Ron");
            pr.setString(2, "Weasley");
            pr.setString(3, "1");
            pr.executeUpdate();

            conn.commit();
            conn.close();
        } catch (SQLException ex) {
            try {
                if (conn != null) {
                    conn.rollback();
                }
            } catch (SQLException e) {
                System.out.println(e.getMessage());
            }
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLState: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
        }
    }

}


```

“JDBC” veri tabanı bağlantılarında Transaction’lar otomatik olarak commit edilir. “setAutoCommit” fonksiyonu ile otomatik commit işlemi kapatılabilir. Böylece,
Transaction yönetimini yazılımcının üstlenmesi gerekmektedir.

Yukarıdaki örnekte false yaparak Transaction yönetimini üzerimize aldık. “commit()” fonksiyonunu çağırarak değişiklikleri kalıcı olarak gönderebiliriz.

Sembolik olarak bir if bloğu içine hata fırlatan bir kod ekledik. O hata fırlatan kısmı açtığımızda veri tabanına bir kayıt eklemek komutu işletmiş olsa bile hata alındığından “rollback” fonksiyonu çağırıyoruz. Böylece, o ana kadar yapılmış olan değişikliklerin geri alınmasını sağlıyoruz.

## Kaynak:

* [Konu derlemesi](https://medium.com/s%C4%B1f%C4%B1rdan-i%CC%87leri-d%C3%BCzeye-java-e%C4%9Fitim-serisi/jdbc-ile-veritaban%C4%B1-i%CC%87%C5%9Flemleri-e7348de4c88c)
