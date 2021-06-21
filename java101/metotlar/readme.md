# Metotlar (Fonksiyonlar)

Java'da **Metotlar** sadece çağrıldığında kullanılan kod bloklarıdır. Metotlara bir diğer adlandırma olarak **"Fonksiyonlar"**da denilmektedir. Bunun sebebi bu kod yapısının matematikte ki fonksiyon mantığına çok benzemesidir. Java'da metotlarımızın içerisine veri aktarmak için ise parametre girebilmekteyiz.

## Neden Metot Kullanırız ?

Programlamada metot kullanmamızın sebebi, bir çok yerde kullanacağımız kodu tek seferde yazıp lazım olduğunda çağırmaktır. Örnek vermek gerekirse, programımız içerisinde bir çok yerde matematikteki "üs alma" işlemini gerçekleştirmiş olalım. Her defasında üs alma işlemi için aynı kodları yazmak yerine bu kodları metot olarak yazıp lazım olduğunda çağırmak işlerimizi kolaylaştıracaktır. Ayrıca metotlar "Nesne Yönelimli Programlamanın" yapı taşlarındandır. Programlamada karmaşık bir problemi daha küçük parçalara bölmek, programınızın anlaşılmasını kolaylaştırır ve yeniden kullanılabilir hale getirir.

## Metot Tanımlama

Java'da metotların sözdizimi şu şekildedir :

```
veriTipi metotAdi(parametre1, parametre2, ....) {
  // kod bloğu
}
```

- veriTipi : Metotlar geriye bir değer döndürebilir, bu değerin veri tipini metot tanımlanırken belirtilir. Örneğin metot geriye "integer" veri tipinde bir değer döndürecekse "veriTipi" kısmına "int" anahtar sözcüğü yazılmalıdır. Eğer metotlar geriye bir değer döndürmeyecekse "void" anahtar sözcüğü kullanılır.
- metotAdi : Metodumuzun benzersiz ismidir ve bu isimlendirme ile metotlar çağrılır.
- kod bloğu : Bu kısım metot çağrıldığı zaman, program tarafından çalışacak kod bloğudur.
- parametre1/parametre2  : Bu kısım metot içerisine aktarma istediğimiz verilerdir ve parametre olarak adlandırılır.

Örneğin :

```
int toplama(int a,int b) {
// kod bloğu
}
```

Yukarıda ki örnekte bir metot tanımladık. Bu metodun adı "toplama" ve geriye döndürdüğü veri tipi "int" türüdür.

## Metot Çağırma

Java'da önceden yazdığımız metotları erişimi olduğu yerlerde çağırabiliriz. Java'da bir metodu çağırmak için metodun adını ve ardından iki parantez () ve bir noktalı virgül yazılmalıdır. Aşağıda ki örnekte toplama(); adlı metodun nasıl çağrıldığı hakkında bir örnektir.

```java
public class JavaPatika {
    static int toplama(int a, int b) {
        return a + b;
    }
    public static void main(String[] args) {
        int sonuc = toplama(5, 2);
        System.out.println(sonuc);
    }
}

// Çıktısı "7"
```

