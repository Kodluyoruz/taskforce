# Java'da Sınıf Kavramı (Class)

Sınıflar aslında nesnelere ait özelliklerin ve fonksiyonlarının bir araya getirilip bir veri tipi olarak tanımlandığı şablonlardır. Sınıf tanımlar aşağıdaki yapıya uygun olarak tanımlarız.

```java
class class_name{
değişkenler;
metotlar;
}
```

Java'da sınıf tanımlamak için "**class**" anahtar kelimesi kullanılır. Bu anahtar kelimeden sonra yazılım sınıfa bir isim belirler. Bu isim tamamen geliştiricinin tercihine bağlıdır. Fakat, sınıf isimlerinin ilk harfinin büyük olmasına lütfen özen gösterelim.

Sınıf ismini de verdikten sonra "{" işareti ile sınıfa ait kapsamı yani kod bloğunu oluştururuz. "}" parantezi ile de sınıfa ait kapsamı kapatırız. Böylece, sınıfımız için yazacağımız kodlar "{}" arasında kalan alanda yazılacaktır. Bu da sınıfın kapsamını ifade eder.

Sınıf kod bloğunu açtıktan sonra bu kod bloğu için değişkenleri ve fonksiyonları yazarız. Unutmayınız ki fonksiyonların da kendilerine ait kod blokları, yani kapsamları vardır. Onları da "{}" ile belirtiriz.

Not: Java'da Sınıf'lar ve Metotlar (Fonksiyonlar) kodun yeniden kullanılabilirliği için kullanılır. Derste yaptığımız örneklerle de aynı kod bloğunu birden fazla kere kopyalayıp farklı yerlerde kullanmaya çalışıyorsak bunu fonksiyona çekmek gerekiyor. Böylece, yeniden kullanılabilirliği arttırmış oluyoruz.

Not: Aynı şekilde bir nesneye ait fonksiyonları ve değişkenleri bir araya toplayıp bir veri tipi oluşturarak yeniden kullanılabilir bir kod bloğu oluşturmuş oluyoruz.

Örnek bir sınıfı aşağıda inceleyelim.

```java
// class anahtar kelimesi ile bir sınıf tanımladığımızı söylüyoruz.
// ardından sınıfımıza bir isim veriyoruz. Bu örnekte sınıf ismimiz "DatabaseConnection"
class DatabaseConnection 
{ // sınıfın kod bloğunun başladığı nokta  
    
    // Veritabanı bağlantısı için kullanılan değişkenler
    // url değişkeni ile veritabanı sunucusuna hangi adres üzerinden erişeceğimizi tutarız.
    // name değişkeni ile hangi veritabanına bağlanacağımızı tutuyoruz.
    // portNo değişkeni ile veritabanı sunucusuna hangi port üzerinden bağlanacağımızı tutarız.
    private String url;
    private String name;
    private int portNo;


    // Fonksiyonlar (Metotlar yani) aşağıdaki yapıda tanımlanırlar.
    // public/private/protected gibi 3 erişim belirtecinden biri seçilir. Bu örnekte public demişiz ki dışarıdan herkes çağırabilsin diye.
    // Değer döndüren bir fonksiyon ise dönüş tipi verilir. Değer döndürmüyorsa void olarak belirtilir. Bu örnekte boolean olarak belirtilmiş.
    // Ardından () parantez ile fonksiyonun hangi girdileri alabileceği belirtilir. Bu örnekte parametresiz fonksiyon olduğu için () şeklinde tanımlandı.
    // Ardından {} süslü parantezler ile fonksiyonun kod bloğu açılır ve fonksiyon ile ilgili kodlar bu aralığın içine yazılır.
 
    public boolean open() {

    	// Veri tabanı bağlantısı açar.
    	// Bu fonksiyon boolean tipinde bir değer döndürür.
    	// { } ile fonksiyonun kapsamını yani kod bloğunu tanımladık. Bu fonksiyon ile ilgili kodlar bu kapsam içine yazılacaktır.
    	
    	// Eğer bağlantı işlemi başarılı ise true değer döndürecektir.
    	return true;
    }

    // Aşağıdaki fonksiyon veritabanı ile ilgili özet bilgileri ekrana döker.
    // Değer döndürmediği için void tipindedir. 
    // () içinde "boolean detailedInfo"  isminde bir girdi verdiğimiz için parametre alan bir fonksiyondur.
    public void showDatabaseInfo(boolean detailedInfo) {

    }


} // sınıfın kod bloğunun bittiği nokta
```

Yukarıda sınıf ve fonksiyon tanımlamalarına detaylıca yer verilmiştir.

Sınıflar nesneler oluşturabilmek için yazılım dünyasında oluşturulmuş şablonladır. Bu şablon nesne ile ilgili modellenecek tüm özellikleri ve davranışları bir taslak halinde kodlanmasını sağlar. Böylece, tanımlanmış bir sınıftan binlerce nesne oluşturabiliriz.

Örneğin: Veritabanına bağlantıyı sağlayan bir sınıf tasarladığımızı hayal edelim. Bu durumda sınıfa bazı değişkenler tanımlamak gerekecektir. Örneğin: bağlanılacak veritabanı ismi, veritabanı sunucusunun URL'i, veritabanı bağlantısı için kullanıcı adı ve şifre gibi özellikler değişkenler olarak tanımlanmalıdır. Çünkü bunlar veritabanı bağlantısı için gerekli olan özellikleri ifade eder. Aynı zamanda veritabanı bağlantısı için çeşitli metotlarda gereklidir. Bağlantı açmak, bağlantı kapatmak gibi eylemler metotları ifade eder.

