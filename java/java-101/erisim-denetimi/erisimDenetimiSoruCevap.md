

## Soru : Private ve Protected erişim berlirleyicileri class larda erişim belirleyicisi olarak kullanılabilir mi ?

### Cevap : 

Dahili üye sınıflarını kullanarak erişim imkanı bulunmaktadır . İlk olarak dahili üye sınıflar, sınıf içerisinde tanımlanmış sınıflar olarak tanımlayabiliriz. Dahili üye sınıflar ile paraçalar bir araya gelerek bir bütün oluşturulabilir.

Bu sorunun cevabını ise bir örnek ile güzelce açıklayabiliriz. 

```java
public class Main {
    public static void main(String[] args) {
        MatematikselIslemler.AsalSayi asalSayi=new MatematikselIslemler().new AsalSayi();
        System.out.println("5 asal sayı mı ? : "+asalSayi.asalSayi(5));

        MatematikselIslemler.MukemmelSayi mukemmelSayi=new MatematikselIslemler().new MukemmelSayi();
        System.out.println("12 mukemmel sayı mı ? : "+mukemmelSayi.mukemmelSayi(12));

        MatematikselIslemler matematikselIslemler=new MatematikselIslemler();
        matematikselIslemler.factorialHesabiYap();
    }
}

class MatematikselIslemler {
    public class AsalSayi {
        public boolean asalSayi(int asalSayi) {
            int bolen = 0;
            boolean kontrol;
            for (int i = 2; i < asalSayi; i++) {
                if (asalSayi % i == 0)
                    bolen++;
            }
            if (bolen == 0)
                kontrol = true;
            else
                kontrol = false;
            return kontrol;
        }
    }

    protected class MukemmelSayi {
        //kendisi hariç bölenleri toplamı kendisine eşit olan sayı mukemmel sayidir.
        protected boolean MukemmelSayi(int mukemmelSayi) {
            int bolenToplam = 0;
            boolean kontrol;
            for (int i = 1; i < mukemmelSayi; i++) {
                if (mukemmelSayi % i == 0)
                    bolenToplam += 1;
            }
            if (bolenToplam == mukemmelSayi)
                kontrol = true;
            else
                kontrol = false;
            return false;
        }
    }
    private class FactorialHesabi{
        private int factorialHesapla(int sayi){
            int factorial = 1;
            for (int i=1; i<=sayi;i++){
                factorial *=i;
            }
            return factorial;
        }
    }
    void factorialHesabiYap(){
        System.out.println("8 sayısının facktoriali : "+new factorialHesabi().factorialHesapla(8));
    }
}
```

MatematikselIslemler adlı classımız da 3 adet farklı erişim belirleyicisine sahip classlar bulunmaktadır. Bu classlarda ise 3 farklı matematiksel işlem yapılmaktadır. Bu classlara Main classındaki main metodu içerisinden erişim sağlanmaya çalışılmaktadır.Dahili üye sınıflarında farklı erişim belirleyicilerini kullanarak diğer dahili sınıflara karşı sınıfları korumuş oluruz. Dikkat edilmesi gereken nokta üst sınıf ve dahili sınıf ilişkisidir. Erişim belirteci ne olursa olsun üst sınıf metotları dahili sınıfın elemanlarına ve metotlarına erişebilirler. Bu kadar bilgiden sonra kullanımını açıklayalım. 

- İlk dahili sınıfımız public erişim belirleyicisine sahip AsalSayi classıdır. Bu class içinde de bir adet asalSayiMi metodu bulunmaktadır. 
- İkinci dahili sınıfımız ise protected erişim belirleyicisine sahip MukemmelSayi classı ve bu class da mukemmelSayi metodu içermektedir.
- Ücüncü dahili classımız ise private erişim belirleyicisine sahip olan FactorialHesabi adlı classımızdır. Bu class da factorialHesapla metodu bulunmaktadır.
- Bir adet de Ust sınıfa ait olan default erişim belirleyicisine sahip olan factorialHesabiYap metodu bulunmaktadır.

Main metodundan bu dahili sınıflara erişim sağlayabilmek amacıyla şu şekilde bir tanımlama ile erişilebilir :

- UstSınıf.DahiliSınıf referansAdı = new UstSınıf().new DahiliSınıf() ; tanımı ile bir nesne oluşturulur bu nesne üzerinden dahili sınıf alanlarına ve metotlarına erişilebilir. 

  - ```java
     MatematikselIslemler.AsalSayi asalSayi=new MatematikselIslemler().new AsalSayi();
            System.out.println("5 asal sayı mı ? : "+asalSayi.asalSayi(5));
    ```

    Yukarıdaki kod ile MatematikselIslemler classındaki public erişim belirleyicisine sahip olan  dahili üye sınıfa erişim sağlayabiliyoruz. (Public erişim belirleyicisi ile her yerden erişim sağlanabilmekteydi.)

  - ```java
     MatematikselIslemler.MukemmelSayi mukemmelSayi=new MatematikselIslemler().new MukemmelSayi();
            System.out.println("12 mukemmel sayı mı ? : "+mukemmelSayi.mukemmelSayi(12));
    ```

    Bu kod ile de Dahili üye sınıfı olan protected erişim belirleyicisine sahip MukemmelSayi classında ki mukemmelSayi metoduna erişim sağlanmaya çalışılıyor. (Protected erişim belirleyicisi : Aynı paket altında ve farklı paket altındaki alt sınıflar dan erişilebilirdi.) 

  - ```java
    MatematikselIslemler matematikselIslemler=new MatematikselIslemler();
            matematikselIslemler.factorialHesabiYap();
    ```

    Bu kod ile de Ust sınıf içindeki private erişim belirleyicisine sahip olan FactorialHesabi classındaki factorialHesapla metoduna Main classından erişim sağlayamayız çünkü bu class üst sınıf içindeki alanlardan erişim sağlanabilir fakat farklı sınıflardan çağrılamaz. Bu classı da kullanabilmek için ise Ust sınıfda default erişim belirleyicisine sahip olan factorialHesabiYap adlı metot tanımladık ve bu metot içerisinden private erişim belirleyicisine sahip olan sınıfdan new objesi ile erişim sağlayabiliyoruz.

Bu şekilde de private ve protected erişim belirleyicisine sahip classlar tanımlanabildiğini ve nası kullanılabildiğini soru cevap ile öğrenmiş olduk.