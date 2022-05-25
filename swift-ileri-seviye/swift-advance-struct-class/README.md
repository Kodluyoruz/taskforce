# Struct ve Class

Struct ve Class yapısı, temelde programcının kendi veri tiplerini oluşturmasını sağlar. Bu oluşturulan yeni veri tipi birden çok temel veri tipini bünyesinde barındırabileceği gibi, bir takım metodlar ile kendine has davranış özellikleri kazanabilir. 

Bu notada peki neden iki farklı anahtar kelime kullanıyoruz diye düşünebilirsiniz. Struct ve Class çok benzer gözükse de hafızada tutulma şekilleri açısından birbirinden çok farklı yapılardır. 

Struct, <b>veri tipidir</b> ve bir kopyası üretildiğinde iki kopya birbirinden bağımsız hafıza adreslerini temsil eder. Bu da bir nesnede yapılan değişikliğin kopyası üzerinde hiç bir etkisi olmayacağı anlamına gelir. 

Class ise bir <b>referans tipidir</b>. Bir nesneden oluşturduğunuz kopyalar hafızada aynı adresleri gösterir. Bu da bir nesnenin kopyası üstünde yapacağınız değişikliğin, nesnenin orjinali üstünde de aynı etkiye sebep olacağı anlamına gelir. Nesneye yönelimli dillerdeki pointer yapısına hakimseniz bu kısmı anlamanız daha kolay olacaktır. 

Bu yapıyı basit bir anoloji üstünden anlatmak istiyorum. Bu sayede kafanızda daha net şekilleneceğine inanıyorum. Struct daha çok sizin cihazınızın yerel hafızasında yer alan bir dosyaya benzer. Bu dosyanın bir kopyasını başka birine gönderseniz ve o kişi de dosya üstünde değişiklik yapsa sizin yerel hafızanızdaki dosya bu değişiklikten etkilenmeyecektir. Çünkü bu iki dosya birbirinden tamamen bağımsız iki farklı varlıktır. Halbuki bu dosya bulutta olsa ve sizde bu buluttaki dosyaya erişim için birisine yetki verseniz, o kişinin dosya üstünde yaptığı değişiklikler dosyanın orjinalini etkileyecektir. Bu durumda ikinizin de gördüğü dosya aynıdır fakat o dosyaya iki farklı kullanıcı erişebilmektedir. İlk örnek Struct yapısına karşılık gelirken ikinci örnek Class yapısına karşılık gelir. Bu şekilde bir kullanıma başvurulmasının sebebi Nesneye Yönelimli/Nesne Tabanlı geliştirme paradigmasının temelinde yatmaktadır. Nesne, içinde bulunduğumuz fiziksel dünyadaki bir nesnenin teknolojik ortamdaki yansımasıdır. Bu nesne bir hafızaya sahiptir, kendi davranışları vardır ve bir hayat döngüsü mevcuttur. Nesne hayat döngüsü sona erene kadar hafızada verileri tutmaya ve kendine has davranışları sergilemeye devam eder. O bir veri tipinden çok bir varlıktır ve tıpkı dünyamızda olduğu gibi benzerleri olsa da eşi yoktur. Hafızada bulunduğu adres onun benzersiz kimliğidir. Tıpkı canlıların DNA'sının diğer canlılardan farklı olması gibidir.

### Struct ve Class Yapısının Karşılaştırılması

Struct ve Class yapısının pek çok ortak yönü vardır. Bunlar;

* Verileri <b>Özellik(Property)</b> olarak isimlendirdiğimiz değişkenler içinde saklayabilirler.
* Davranışları <b>Metod(Method)</b> olarak isimlendirdiğimiz fonksiyon tanımları ile sağlayabilirler.
* <b>Başlatıcı Metod(Initializer)'ları</b> olabilir. Bu metod Struct veya Class oluştuğunda özelliklerin alacağı ilk değeri ifade eder.
* <b>Extension</b> yapısı ile yeni özellikler eklenebilir.
* <b>Protokol</b> tanımlarını sağlayabilirler. 


Class yapısının sahip olduğu ama Struct yapısında olmayan bazı özellikler ise şu şekildedir;

* Class bir başka Class yapısından <b>Miras(Inheritance)</b> alabilir.
* Class tipini programın <b>Çalışma Anında(Runtime)</b> kontrol edebiliriz.
* Class yapısı ile işimiz bittiğinde onu hafızadan silmemizi sağlayan <b>Sonlandırıcı(Deinitializer)</b> metodlarını çağırmamız gerekir.
* Bir Class nesnesi birden çok <b>Referans(Referance)'a</b> sahip olabilir.

Eğer Class yapısına ait; miras, özellik, metod, başlatıcı, sonlandırıcı vb. terimler yabancı geliyorsa aşağıda bu özelliklerin kısaca verilmiş tanımlarına göz atabilirsiniz. Eğitim boyunca yeri geldikçe bu yapılardan bahsedilecektir fakat bu kurs bir programlama dili eğitimi üstüne olmadığı için yapılar üstünden hızlıca bir özet geçilecek ama derinlemesine anlatılmayacaktır. Eğer bu konuda eksik olduğunuzu düşünüyorsanız Nesneye Yönelimli Programlama üstüne okumalar yapabilir veya eğitimler alabilirsiniz. 

### Class ve Struct Yapısına Ait Ortak Terimler

* <b>Özellik(Property):</b> Class veya Struct içinde tanımladığımız değişkenlere verilen isimdir. Hafızada veri tutmaya yararlar. İsimlendirme dışında değişkenlerden farklı değillerdir.
* <b>Metod(Method):</b> Class veya Struct içinde tanımladığımız fonksiyonlara verilen isimdir. Bir davranış kazandırmak için kullanılır. İsimlendirme dışında fonksiyondan farkları yoktur.
* <b>Başlatıcı(Initializer):</b> Metodlara çok benzer şekilde tanımlanırlar. En büyük özelliği Class veya Struct oluşturulurken çalışır. Bu nedenle gerekli değişken atamaları bu kısımda yapılır.
* <b>Eklenti(Extension):</b> Extension anahtar kelimesi ile ekleme yapmak istediğimiz Class veya Struct adını yazar ve süslü parantez bloğu içinde mevcut yapıya eklemek istediğimiz özellik veya metod tanımlarını yaparız. 
* <b>Protokol(Protocol):</b> Protokol içeriğinde birtakım değişken ve fonksiyon imzası barındırır. Bu protokol bir Struct veya Class tarafından karşılanacaksa, protokol içinde yer alan imzaların mevcut yapı içinde tanımlı olması beklenir.

### Class Yapısına Ait Terimler

* <b>Sonlandırıcı(Deinitializer):</b> Sonlandırıcı tıpkı başlatıcı gibi tanımlanır. Class hafızadan silinmeden önce yapılması istenen işlemler bu kısımda belirtilir.
* <b>Referans(Referance):</b> Referans mevcut nesneyi gösteren yapıları temsil eder. Bulut dosya analojisinde, buluttaki dosyaya erişim sağlayan kişiler o dosyanın referanslarını temsil eder. Eğer dosyaya kimsenin erişimi yoksa dosya hafızadan silinmelidir. Bu işlemi Swift otomatik olarak yapar. Eğer bu işlem yapılmazsa gereksiz hafıza kullanımı oluşur. Bu duruma Hafıza Kaçağı(Memory Leak) denir. Uygulamanın uzun süre kullanımı sonucu hafıza kaçağı işletim sisteminin uygulama için ayırıdığı kaynakları aşarsa uygulama çöker.
* <b>Miras(Inheritance):</b> Miras adından da anlaşılabileceği gibi, bir Class'ın bir başka Class'da yer alan özellik ve metodları bire bir devralmasıdır. Bu sayede kod tekrarı önlenir ve kodun daha kolay yönetimi sağlanır.

### Class ve Struct Tanımlama

Aşağıda Struct ve Class yapısına ait tanım sözdizimini görebilirsiniz.

```
struct StructureDefinition {
    // Struct'a ait özellik ve metod tanımları bu kod bloğu içinde yapılır. 
}

class ClassDefinition {
    // Class'a ait özellik ve metod tanımları bu kod bloğu içinde yapılır.
}
```

Struct ve Class isimlendirmesinde, değişken ve fonksiyon isimlendirmesinden farklı olarak dikkat etmeniz gereken kısım, büyük harfle başlıyor olmalarıdır. Struct tanımı için isimden önce struct anahtar kelimesi, Class tanımı için ise Class adından önce class anahtar kelimesi kullanmanız gerekmektedir.

Şimdi birtakım özellikleri hafızada saklayan Struct ve Class tanımı yapalım.

```
struct Diploma {
    var title: String = "Licance"
    var grade: String = "BSc"
}

class Student {
    var no: Int = 001
    var name: String = "John Doe"
}
```

Yukarıda diploma adında bir Struct tanımı yaptık. Bu Struct yapısı title ve grade olmak üzere iki özelliği hafızada tutuyor. Aynı şekilde Student adında bir Class tanımı yaptık. Bu Class yapısı da no ve name olmak üzere iki özelliği hafızada tutuyor. Şimdi bu Struct ve Class modellerinden birer örnek oluşturalım. 

```
let licanceDiploma = Diploma()
let johnDoe = Student()
```

### Özelliğe Erişmek

Bir özelliğe ulaşmak için <b>Nokta Notasyonu(Dot Notation)</b> kullanacağız.

```
print("Okulumuzun öğrencisi \(johnDoe.name), \(licanceDiploma.grade) diploması almaya hak kazanmıştır.")
// Çıktı: Okulumuz öğrencisi John Doe, BSc diploması almaya hak kazanmıştır.
```
