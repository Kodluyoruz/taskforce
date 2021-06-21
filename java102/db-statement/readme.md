# Veritabanı İşlemleri ve Statement Interface

Statement interface ile veri tabanı tabloları üzerinde SQL komutlarını çalıştırırız. SQL komutuna göre hangi fonksiyonu kullanacağımız değişebilir. Aşağıda
bunlar listelenmiştir.

1) **public ResultSet executeQuery(String sql):** “SELECT” SQL komutuyla tablo üzerinde veri sorgulaması yapılacaksa bu fonksiyon kullanılmalıdır. Sorgu
   sonucunda “ResultSet” tipinde bir nesne dönecektir. Bu nesne içinde sorgulanan tablodan dönen kayıtlar olacaktır.


2) **public int executeUpdate(String sql):** DML ve DDL tipinde SQL komutları çalıştırılabilir. INSERT, UPDATE, DELETE gibi tablo verisinde değişikliği sağlayan
   komutlar işletilebilir. Tabloda veya veri tabanında yapısal değişikliğe yol açan CREATE, DROP gibi komutlar da çalıştırılabilir.

3) **public boolean execute(String sql):** Eğer çalıştıracağımız SQL komutu birden fazla sonuç dönecekse bu fonksiyonu kullanabiliriz.

## Veri tabanından Kayıt Sorgulamak

SELECT SQL komutu ile veri tabanından yetkimizin olduğu tablo üzerinde sorgu çalıştırabiliyorduk. Java JDBC API ile bunu nasıl yapacağımıza dair küçük bir örnek
aşağıdadır. “employees_auto_inc” tablosundan tüm kayıtları çeken bir Java kodu yazacağız.

```
import java.sql.*;

public class DBConnect {
    public static final String DB_URL = "jdbc:mysql://localhost/school";
    public static final String DB_USERNAME = "root";
    public static final String DB_PASSWORD = "";

    public static void main(String[] args) {
        Connection conn = null;
        Statement st = null;
        try {
            conn = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD);
            st = conn.createStatement();
            ResultSet resultSet = st.executeQuery("SELECT * FROM student");
            while (resultSet.next()) {
                System.out.println("ID : " + resultSet.getInt("student_id"));
                System.out.println("Adı : " + resultSet.getString("student_fname"));
                System.out.println("Soyadı : " + resultSet.getString("student_lname"));
                System.out.println("Sınıfı : " + resultSet.getInt("student_class"));
                System.out.println("#################");
            }
        } catch (SQLException ex) {
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLState: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
        }
    }

}

```

ResultSet interface’de sorgu sonucunda gelen kayıtlara erişim için belli başlı fonksiyonlar bulunur.

“next” fonksiyonu: bu fonksiyon çağrıldığında bir sonraki satıra ilerler. Böylece o satır üzerinde okuma yapabilmeyi sağlar. Okunacak kayıt kalmadığında “false”
döner.

“first” fonksiyonu: bu fonksiyon çağrıldığında sorgu sonucu kümesindeki ilk elemana erişim sağlar.

“last” fonksiyonu: bu fonksiyon çağrıldığında sorgu sonucu kümesindeki son elemana erişim sağlar.

“absolute” fonksiyonu: bu fonksiyon ile sorgu sonuç kümesindeki direkt olarak istenilen eleman işaret edilir.

## Veri tabanı tablosuna kayıt eklemek

```
import java.sql.*;

public class DBConnect {
    public static final String DB_URL = "jdbc:mysql://localhost/school";
    public static final String DB_USERNAME = "root";
    public static final String DB_PASSWORD = "";

    public static void main(String[] args) {
        Connection conn = null;
        Statement st = null;
        try {
            conn = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD);
            st = conn.createStatement();

            // Statement ile Insert İşlemi
            String updateQuery = "INSERT INTO student (student_fname,student_lname,student_class) VALUES ('Barış' , 'Manço' , '1')";
            st.executeUpdate(updateQuery);

            // PreparedStatement ile Insert İşlemi
            PreparedStatement pr = conn.prepareStatement("INSERT INTO student (student_fname,student_lname,student_class) VALUES (?,?,?)");
            pr.setString(1, "Harry");
            pr.setString(2, "Potter");
            pr.setString(3, "2");
            pr.executeUpdate();

            st.close();
        } catch (SQLException ex) {
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLState: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
        }
    }

}


```

Tabloya yeni kayıt eklemek için “PreparedStatement” kullanılabilir. “PreparedStatement” ile oluşturulan sorgularda dışarıdan alınacak parametrelere ait değerler
“?” karakteriyle işaretlenir. Böylece, “?” olan yerlere dinamik olarak veri atanabilir. “?” yerine koyulacak veri sırayla göre verilir. “executeUpdate” metodu
ile bir kayıt ekleme işlemi yapılır.

## Veri tabanı tablosunda kayıt güncellemek

```
import java.sql.*;

public class DBConnect {
    public static final String DB_URL = "jdbc:mysql://localhost/school";
    public static final String DB_USERNAME = "root";
    public static final String DB_PASSWORD = "";

    public static void main(String[] args) {
        Connection conn = null;
        Statement st = null;
        try {
            conn = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD);
            st = conn.createStatement();

            // Statement ile Update İşlemi
            String updateQuery = "UPDATE student SET student_class = '1'  WHERE student_id = 3";
            st.executeUpdate(updateQuery);

            // PreparedStatement ile Update İşlemi
            PreparedStatement pr = conn.prepareStatement("UPDATE student SET student_class = ?  WHERE student_id = ?");
            pr.setString(1, "6");
            pr.setInt(2, 2);
            pr.executeUpdate();

            st.close();
        } catch (SQLException ex) {
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLState: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
        }
    }

}

```

Kayıt güncelleme işleminde kullanılan Java kodları kayıt ekleme ile aynıdır.

## Veri tabanı tablosunda kayıt silmek

```
import java.sql.*;

public class DBConnect {
    public static final String DB_URL = "jdbc:mysql://localhost/school";
    public static final String DB_USERNAME = "root";
    public static final String DB_PASSWORD = "";

    public static void main(String[] args) {
        Connection conn = null;
        Statement st = null;
        try {
            conn = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD);
            st = conn.createStatement();

            // Statement ile Delete İşlemi
            String updateQuery = "DELETE FROM student WHERE student_id = 1";
            st.executeUpdate(updateQuery);

            // PreparedStatement ile Delete İşlemi
            PreparedStatement pr = conn.prepareStatement("DELETE FROM student WHERE student_id = ?");
            pr.setInt(1, 2);
            pr.executeUpdate();

            st.close();
        } catch (SQLException ex) {
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLState: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
        }
    }

}

```

Kayıt silme işlemindeki Java kodları kayıt ekleme ve güncelleme ile aynıdır.

