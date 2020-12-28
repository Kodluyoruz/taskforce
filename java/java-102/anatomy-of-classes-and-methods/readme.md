# Anatomy and Classes And Methods

## Nesneye Dayalı Programlama Nedir?

Nesneye Dayalı Programlama kavramı aslında bir yazılım geliştirme tekniğidir. Bu tekniği
destekleyen dillere de Nesneye Dayalı programlama dilleri denilir. Nesne kavramı gerçek
hayatta karşılığı olan varlıklardır. Gerçek hayattaki bu nesneleri yazılım dünyasında
modelleyebilmek için Nesneye Dayalı Programlama kavramı ortaya çıkmıştır. Bu yöntemde
her şey Sınıf’lardan (Class) ve Nesne’lerden (Object) oluşur. Bu oluşturduğumuz nesnelerin
birbiriyle haberleşmesi etkileşimde bulunması ile birlikte büyük ve karışık sistemler
modellenebilir.

## Java&#39;da Sınıf Kavramı (Class)

Sınıflar aslında nesnelere ait özelliklerin ve fonksiyonlarının bir araya getirilip bir veri tipi olarak tanımlandığı şablonlardır. Sınıf tanımlar aşağıdaki yapıya uygun olarak tanımlarız.

````java
class class_name{
değişkenler;
metotlar;
}
````

Java&#39;da sınıf tanımlamak için &quot; **class**&quot; anahtar kelimesi kullanılır. Bu anahtar kelimeden sonra yazılım sınıfa bir isim belirler. Bu isim tamamen geliştiricinin tercihine bağlıdır. Fakat, sınıf isimlerinin ilk harfinin büyük olmasına lütfen özen gösterelim.

Sınıf ismini de verdikten sonra &quot;{&quot; işareti ile sınıfa ait kapsamı yani kod bloğunu oluştururuz. &quot;}&quot; parantezi ile de sınıfa ait kapsamı kapatırız. Böylece, sınıfımız için yazacağımız kodlar &quot;{}&quot; arasında kalan alanda yazılacaktır. Bu da sınıfın kapsamını ifade eder.

Sınıf kod bloğunu açtıktan sonra bu kod bloğu için değişkenleri ve fonksiyonları yazarız. Unutmayınız ki fonksiyonların da kendilerine ait kod blokları, yani kapsamları vardır. Onları da &quot;{}&quot; ile belirtiriz.

Not: Java&#39;da Sınıf&#39;lar ve Metotlar (Fonksiyonlar) kodun yeniden kullanılabilirliği için kullanılır. Derste yaptığımız örneklerle de aynı kod bloğunu birden fazla kere kopyalayıp farklı yerlerde kullanmaya çalışıyorsak bunu fonksiyona çekmek gerekiyor. Böylece, yeniden kullanılabilirliği arttırmış oluyoruz.

Not: Aynı şekilde bir nesneye ait fonksiyonları ve değişkenleri bir araya toplayıp bir veri tipi oluşturarak yeniden kullanılabilir bir kod bloğu oluşturmuş oluyoruz.

Örnek bir sınıfı aşağıda inceleyelim.

````java
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
````

Yukarıda sınıf ve fonksiyon tanımlamalarına detaylıca yer verilmiştir.

# Java&#39;da Nesne Kavramı (Object)

Sınıflar nesneleri tarif eden şablonlardı. Nesneler ise bu şablonlardan üretilen fiziksel yapılardır. Her üretilen nesne Heap Hafıza Bölgesi&#39;nde tutulur. Böylece sınıftan fiziksel karşılığı olan bir yapı elde etmiş oluruz. Sınıftan onlarca, yüzlerce nesne yaratabiliriz. Hepsi de hafıza başka adresleri gösterirler. Java&#39;da nesne üretmek için &quot;new&quot; anahtar kelimesini kullanırız.

````java
// DatabaseConnection sınıfından new anahtar kelimesi ile yeni bir nesne ürettik.
// Ürettiğimiz nesne hafıza bir adrese yerleşti. Artık kullanılabilir durumdadır.
DatabaseConnection dbConnection = new DatabaseConnection();


// Oluşturduğumuz nesne üzerinden "open" isimli fonksiyonu çağırıyoruz.
// Fonksiyon çağırmak için ismini yazıp () içine gerekli parametreleri göndermek gerekiyor.
// "open" fonksiyonu parametresiz olduğu için open() şeklinde bir çağrım yeterli olacaktır.
// Bu fonksiyonu çağırabilmemizin sebebi "public" olarak dışarıya açmamızdır.
dbConnection.open();


// Yine oluşturduğumuz nesne üzerinden "showDatabaseInfo" fonksiyonunu çağırıyoruz.
// Bu fonksiyon içine boolean tipinde bir parametre alıyor. Bu nedenle true veya false bir değer göndermemiz gerekiyor.
dbConnection.showDatabaseInfo(true);
````