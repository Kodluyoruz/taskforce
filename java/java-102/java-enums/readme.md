# Enum Tipler

 

Java’da sabit değişkenler “final” anahtar kelimesi ile oluşturulabilir. Program yazarken mutlaka bazı durumlarda sabit değerlere ihtiyaç duyarız. Elimizdeki bu değerleri sabitlerle sınırlandırarak tanımlamamıza fırsat veren yapılara Enum diyoruz. Örneğin bir ödeme kaydının belirli durum değerleri olabilir. SUCCESS, PROVISION, FAIL gibi durumlar olabilir. Bu durumlar sırasıyla ödeme başarıyla alındı, provizyon aşamasında beklemede ve başarısız oldu gibi değerler olsun. Bu değerleri “final” anahtar kelimesi ile tanımlayıp ayrı değişkenler halinde verebilirdik. Örneğin ödemeyi işlemi için bir sınıf tasarladığımızı düşünün. Aşağıdaki gibi içinde toplam ücreti tutan bir değişken bir de ödeme durumunu ifade eden sabitler olduğunu düşünelim.

 

```v
public class Payment {
        
        private final int SUCCESS = 1;
        private final int PROVISION = 2;
        private final int FAIL = 3;
        
        private double totalValue;
        private int status; // (SUCCESS-PROVISION-FAIL) durumlardan birini alacak.
        
        public Payment() {
               // kodlar ...
        }
}
```

 

Yukarıdaki sınıfta bir hata gözükmüyor. Aynen çünkü bir hata oluşacaksa çalışma zamanında (Runtime) oluşacaktır. Yani, programınız çalışırken. Ödemenin durum bilgisini “int” tipinde tamsayı olarak tanımladık. Alabileceği değerleri 3 tane “final” değişkende tuttuk. Fakat, durumu ifade eden veri tipini sınırlandırmadığımız için status değişkenine gidip 100 gibi bir int tipinde tamsayı da atanabilir. İşte bu noktada çalışma zamanında programınız anlamsız hatalar verebilir. Bunun önüne geçmek için hataları daha derleme aşamasında alabilmek için “Enum” yapılarını kullanabiliriz.

 

Java’da “Enum” yapıları “enum” anahtar kelimesi ile tanımlanır. Aynı sınıf tanımlar gibi bir notasyona, yani yazım biçimine sahiptir. “Enum” yapıların iççinde değişken, metot ve kurucu metot tanımlayabilirsiniz.

 

```java
public enum PaymentStatus {
        
        SUCCESS,
        PROVISION,
        FAIL;
        
}
```

 

Yukarıda en basit haliyle bir “enum” yapısı tanımlanmıştır. Artık ödemeye ait durum değeri önceden tanımlanmış sabitler ile kontrol altındadır. “int” veri tipindeki gibi esnek bir şekilde herhangi bir değeri atayamazsınız. 

 

Şimdi aynı Payment sınıfına bir enum tipi ekleyerek revize edelim.

 

```java
public class Payment {
        
        private double totalValue;
        private PaymentStatus status = PaymentStatus.SUCCESS; 
        
        public Payment() {
               // kodlar ...
        }
}
```

 

Görüldüğü gibi artık “status” değişkeninin tanımlı bir tipi mevcuttur. Bu enum tipinde alabileceği sabitlerde bellidir. Bu sabitler dışında başka bir değer ataması yapılamaz. Böylece, çalışma zamanında ortaya çıkacak hataların daha derleme aşamasında önüne geçmiş olacağız. Aynı zamanda kodun okunabilirliğini de arttırmış olacağız.

 

“enum” yapısı içinde tanımlanmış olan sabitler indeks değerine sahiptir. Enum içindeki sabitin hangi indeksi ifade ettiğini anlamak için “ordinal()” fonksiyonu kullanılır.

 

```java
PaymentStatus.SUCCESS.ordinal()
```

 

SUCCESS sabiti enum yapısı içinde ilk eleman olduğu için indeks değeri 0 (sıfır) gelecektir.

 

## Gelişmiş “enum” Yapıları

 

“enum” yapısı içinde kurucu metot, değişken ve metot tanımlayabileceğinizden bahsetmiştik. Yine PaymentStatus “enum” yapısı üzerinden örneğimize devam edelim. Bahsettiğimiz ödeme durum bilgilerine kısa kodlar vermek istediğimizi düşünelim. Bu durumda enum yapımızı daha gelişmiş bir şekilde tasarlamamız gerekiyordu. Aşağıda örneğini görebilirsiniz.

 

```java
public enum PaymentStatus {
 
        SUCCESS("200", "İşlem başarılıdır."), 
        PROVISION("202", "İşlem bankada askıda beklemektedir."), 
        FAIL("500", "İşlem başarısızdır.");
        
        
        // değişkenler
        private final String code;
        private final String description;
        
        // kurucu metot,
        // enum kurucuları private olmalıdır.
        private PaymentStatus(String code, String description) {
               this.code = code;
               this.description = description;
        }
        
        
        // metotlar
        public String getCode() {
               return this.code;
        }
        
        public String getDescription() {
               return this.description;
        }
}
```

 

Görüldüğü üzere değişkenler, kurucu ve fonksiyonlar tanımlayarak bir enum yapısı kurabiliyoruz.

Tüm enum değerlerini ekrana yazdırmak istersek aşağıdaki gibi bunu yapabiliriz. “enum” yapısı içindeki tüm sabitlerin listesini alabilmek için “values()” fonksiyonunu kullanabilirsiniz.

 

```java
public class Main {
 
        public static void main(String[] args) {
               
               
               PaymentStatus[] paymentStatusList = PaymentStatus.values();
               
               for(PaymentStatus paymentStatus : paymentStatusList) {
                       
                       StringBuilder builder = new StringBuilder();
                       builder.append("[Code: ");
                       builder.append(paymentStatus.getCode());
                       builder.append(" - ");
                       builder.append("Description: ");
                       builder.append(paymentStatus.getDescription());
                       builder.append("]");
                       
                       System.out.println(builder.toString());
               }
        }
 
}
```
