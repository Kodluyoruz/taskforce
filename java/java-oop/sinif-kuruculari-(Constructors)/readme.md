## Java&#39;da Sınıf Kurucuları (Constructors)

Sınıf içinde kurucu metotlar tanımlanabilir. Kurucu metotlar bir nesne oluşturulurken yapılması gerekenlerin tanımlandığı metotlardır. Nesne oluşturma aşamasında bu özel metotlar çağrılır. Her sınıfın mutlaka bir kurucu metodu olur. Eğer, siz kod yazarken kurucu metot tanımlamadıysanız Java derleyicisi boş bir taneyi otomatik olarak tanımlayacaktır.

Kurucu metotların ismi sınıf ismiyle aynı olmak zorundadır. Farklı parametreler alan birden fazla kurucu metot tanımlayabilirsiniz.

`````java
public class Puppy {

   public Puppy() {
     // parametresiz bir kurucu metod.
   }

   public Puppy(String name) {
      // name isminde bir değişkenle tanımlanmış bir kurucu metod. 
   }
}
`````

Yukarıdaki örnekte Puppy isminde bir sınıfa ait iki tane kurucu metot görülmektedir. Java&#39;da bir sınıftan yeni bir nesne üretmek istediğinizde &quot;new&quot; anahtar kelimesini kullanmanız gerekmektedir yukarıda da bahsettiğimiz gibi.

````java
Puppy p = new Puppy("Pamuk");
````

Yukarıdaki şekildeki gibi Puppy sınıfına ait bir nesne oluşturmak istediğinizde dikkat ederseniz nesne oluştururken &quot;Pamuk&quot; şeklinde bir isim bilgisi geçtik. Bu nedenle nesne oluşturma işlemi sırasında **public** Puppy(String name) isimli kurucu metot çağrılır ve çalıştırılır.

````java
Puppy p = new Puppy();
````

Yukarıdaki şekildeki gibi parametresiz bir nesne oluşturmuş olsaydık. ``public Puppy() ``isimli kurucu metot çağrılır ve çalıştırılırdı.

