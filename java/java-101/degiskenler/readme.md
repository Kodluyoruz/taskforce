

# Java Değişkenler

Değişkenler içinde veri barındıran ve bilgisayarın geçici hafızasında (RAM) fiziksel olan yer kaplayan yapılardır. Değişkenlere değer (veri) ataması yapılabilir. Java&#39;da değişkenleri veri tipleri vardır. Bu tipler Java&#39;da varsayılan olarak tanımlı gelen tipler de olabilir yahut yazılımcıların kendi tanımladığı tipler de olabilir.

```java
<veri tipi> <değişken ismi> = veri (değer)
```

Değişken tanımlaması yapıldığında aslında bilgisayar hafızasında bir yeri ayırmış oluyoruz. Bu alan o değişkenin veri tipinin boyutu kadar bir alanı ifade eder. Örneğin: 2 Byte&#39;lık bir veri tipine sahipsek ve bu tipte bir değişken tanımlıyorsak. Her değişken için hafızadan 2 Byte&#39;lık yer ayrılacaktır. Javadaki değişken tiplerini hemen alttaki şu fotoğrafta görebiliriz (ilkel (primitive) ve ilkel olmayan (non-primitive) veri tipleri ayrımına da ayrıca dikkat ediniz, ileride bahsedilecektir): 

![](figures/veri-tipleri-1.png)

Hafızada veri tutmak için değişkenleri kullanırız dedik. Değişkenlerle ilgili 5 önemli kavram vardır şimdi bunlara bakalım:

- **Tür**: Java tür kesinliği olan bir dildir. Bunun bir sonucu olarak, her değişkenin bir türü vardır. Bu tür değişken tanımlarken belirtilir ve bir daha değiştirilemez. Türünü belirtmeden değişken tanımlayamazsınız.
- **İsim**: Her değişkene bir isim verilir. Bu ismi değişkene değer atamak ve gerekirse bu değeri değiştirmek için kullanırız. Değişkene verilecek isim tek bir kelimeden oluşmalıdır (boşluk içermemelidir). Değişken isimleri harflerden, rakamlardan ve alt çizgi (_) karakterinden oluşabilir. Değişken isimleri rakam ile başlayamaz.
- **Değer**: Değişkenler hafızada değer tutmak için kullanılır. Değişkene tanımlandığı anda bir değer verebileceğiniz gibi, daha sonra da değer atayabilirsiniz. Değişkenin değeri istenilen bir anda değiştirilebilir. Bu değerler değişkenin türüne göre sınırlandırılmıştır. Değişkene vereceğimiz değer türüyle uyumlu olmalıdır. Aksi halde Java derleyicisi kodumuzun derlenmesine izin vermez. Örneğin, boolean bir değişkene tamsayı değer atayamazsınız.
- **Kapsam (Scope)**: Her değişkenin bir kapsamı vardır. Bu kapsam, değişkenin program içerisinde geçerli olduğu alanı belirler. Bir değişkene kapsamı dışında erişemezsiniz.
- **Yaşam Süresi (Lifetime)**: Sürekli değişken oluşturursak bir süre sonra bilgisayarın hafızası tükenebilir. Bunun için her programlama dilinde bir **çöp toplama (garbage collection)** mekanizması vardır. Java’da her değişkenin bir ömrü vardır ve gerektiği anda hafızadan silinirler. Yaşam süresi çoğu zaman değişkenin kapsamıyla bağlantılıdır.

### Değişken Tanımlamak

Şimdi değişken tanımlamaya ve örneklerine biraz daha ayrıntılı bakalım. Java’da bir değişken, sırasıyla önce türü ve sonra ismi belirterek tanımlanır.

```java
int number;
// number isminde, int türünde bir değişken tanımlanmış
```

Aynı satırda birden fazla değişken tanımlayabilirsiniz, fakat türleri aynı olmak zorundadır:

```java
double a, b, c;
// double türünde 3 ayrı değişken tanımlanmış
```

Değişkeni tanımladıktan sonra, atama operatörü (=) kullanarak değişkene bir değer verebilirsiniz:

```java
double pi; // Önce double türünde bir değişken tanımladık
pi = 3.14; // Daha sonra bu değişkene bir değer verdik
```

Eğer bir değişkene hemen değer atayacaksanız, bunu iki satırda yapmak yerine tek bir satırda halledebilirsiniz:

```java
double pi = 3.14;
```

Aynı satırda aynı türden birden fazla değişken tanımlıyorsanız bunlara şu şekilde değer verebilirsiniz:

```java
int year = 2020, age = 25;
// Aynı satırda int türünde 2 farklı değişken tanımlanmış ve ikisine de değer verilmiş
```

Değişkene verilen değer herhangi bir anda değiştirilebilir:

```java
int year = 2020; // Bir değişken tanımlanmış ve değer verilmiş
year = 2021; // Değişkenin değeri değiştirilmiş
year = 2022; // Değişkenin değeri tekrar değiştirilmiş
```

Bir değişkeni tanımladığınız zaman, aynı kapsam içinde aynı isimde başka bir değişken tanımlayamazsınız:

```java
boolean a = true; // a isminde bir değişken tanımlanmış
boolean a = false; // Bu satır hataya neden olur, a değişkeni zaten var
```

Buraya kadar olan örneklerimizde değişkene hep kesin bir değer atadık; fakat Java’da bir metodun sonucunu da değişkene atayabilirsiniz (metodlar konusunu ileride ayrıntılı göreceğiz):

```java
double result = Math.sqrt(16.0);
// Karekök metodu çağrılıyor ve sonucu bir değişkene atanıyor
// Bu işlem sonucunda result değişkeninin değeri 4.0 olur
```

**int** tipinde, yani sayı tipinde tanımlanmış **a,b,c,d** isimli değişkenlerin her biri hafızada bir alanı kaplarlar.

Yukarıdakilere benzer şekilde aşağıdaki değişken tanımlama örneklerine de bakalım:

```java

int a, b, c; // 3 tane değişken virgüller ile ayrılarak tek satırda tanımlanabilir.

int a = 10, b = 10; // Birden fazla değişken aynı satırda ilk değerleri atanarak tanımlanabilir.

byte b = 22; // Tek değişkene ilk değer ataması yapılarak

double pi = 3.14159; // Tek değişkene ilk değer ataması yapılarak

char a = "a" ;; // Tek değişkene ilk değer ataması yapılarak

```

