# Özyineli Recursion Fonksiyon Sorular ve Cevapları:

1 -)  Klavyeden girilen iki tamsayı değerinin ebob (En büyük ortak bölen) 'unu recursive fonksiyon ile bulunuz. Örnek (6,15 in ebob u 3 dur.)

Cevap : 

```java

import java.util.Scanner;

public class Recursion {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Sayi Bir: ");
        int sayiBir = scanner.nextInt();
        System.out.print("Sayi Iki: ");
        int sayiIki = scanner.nextInt();
        int ebobDegeri = ebob(sayiBir, sayiIki);
        System.out.println(sayiBir + " ve " + sayiIki + " nin ebob (en buyuk ortak bolen) : " + ebobDegeri);
    }

    private static int ebob(int sayiBir, int sayiIki) {
        while (sayiBir != sayiIki) {
            if (sayiBir > sayiIki)
                return ebob(sayiBir - sayiIki, sayiIki);
            else
                return ebob(sayiBir, sayiIki - sayiBir);
        }
        return sayiBir;
    }
}

/*
* Sayi Bir: 15
* Sayi Iki: 20
* 15 ve 20 nin ebob (en buyuk ortak bolen) : 5
*/
```

2-) Bir sayının istenen kuvvetini özyineli fonksiyon ile bulunuz. (Örnek 3 sayısının 5 nci kuvveti 243 dur.)

Cevap : 

```java

import java.util.Scanner;


import java.util.Scanner;

public class Recursion {
    static long carpim = 1;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Sayi Giriniz: ");
        int sayiDegeri = scanner.nextInt();
        System.out.print("Kacıncı Kuvveti alınacak : ");
        int sayiKuvvetDegeri = scanner.nextInt();
        long sonuc = sayiKuvvetiBul(sayiDegeri, sayiKuvvetDegeri);
        System.out.println(sayiDegeri + " sayısının " + sayiKuvvetDegeri + " nci kuvveti : " + sonuc);

    }

    private static long sayiKuvvetiBul(int sayiDegeri, int sayiKuvvetDegeri) {
        if (1 <= sayiKuvvetDegeri) {
            carpim *= sayiDegeri;
            sayiKuvvetiBul(sayiDegeri, sayiKuvvetDegeri - 1);
        }
        return carpim;
    }
}
/*
* Sayi Giriniz: 3
* Kacıncı Kuvveti alınacak : 5
* 3 sayısının 5 nci kuvveti : 243
*/
```

3 - ) N boyutlu bir tam sayı dizisi oluşturunuz ve bu dizinin içini de 0 ile 100 arasında rastgele tam sayi değerleri ile doldurunuz. Bu oluşan dizi içindeki en büyük değeri özyineli fonksiyon ile bulunuz ? 

Cevap : 

```java
import java.util.Random;
import java.util.Scanner;

public class Recursion {
    public static void main(String[] args) {
        Random random=new Random();
        Scanner scanner=new Scanner(System.in);
        System.out.print("Dizi Boyutu giriniz: ");
        int boyut=scanner.nextInt();
        int[] sayiDizisi=new int[boyut];
        System.out.println(boyut+" elemanlı sayi dizisi 0 dan 100 e kadar rastgele tam sayı değerleri ile doldurulacak.");
        for (int i=0;i<sayiDizisi.length;i++){
            sayiDizisi[i]=random.nextInt(100);
        }
        for (int number:sayiDizisi)
            System.out.print(number+" ");
        System.out.println();
        int enBuyukDeger=sayiDizisi[0];
        enBuyukDeger=enBuyukDegerBul(sayiDizisi,boyut-1,enBuyukDeger);
        System.out.println(boyut+" elemanlı dizinin en buyuk degeri: "+enBuyukDeger);
    }

    private static int enBuyukDegerBul(int[] sayiDizisi, int i, int enBuyukDeger) {
        if (i==0)
            return enBuyukDeger;
        if (i>0) {
            if (sayiDizisi[i]>enBuyukDeger){
                enBuyukDeger=sayiDizisi[i];
            }
            return enBuyukDegerBul(sayiDizisi,i-1,enBuyukDeger);
        }
        return enBuyukDeger;
    }
}
/*
* Dizi Boyutu giriniz: 10
* 10 elemanlı sayi dizisi 0 dan 100 e kadar rastgele tam sayı değerleri ile doldurulacak.
* 10 35 34 1 20 46 82 81 96 99 
* 10 elemanlı dizinin en buyuk degeri: 99
*/
```

