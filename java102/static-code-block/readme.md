# Static Kod Blokları

Sınıf değişkenlerinin ilk değerlerinin verilmesi için kurucu metotlar kullanabiliriz. Ancak sınıfa ait statik değişkenlerinin ilk değerlerini kurucu içinde vermeye çalışmak yanlış olabilir. Çünkü sınıf değişkenleri, hiç nesne oluşturulmamış olsa da kullanılabilmektedir. Sınıf değişkenleri ile ilgili olarak bir defaya özel olmak üzere işletilmesi istenen kod kesimleri **static kod** bloklarında kodlanabilir. **Static kod blokları**, sınıf belleğe yüklendiği  anda işletilir. Böylece sınıf değişkenleri bellekte oluşturuldukları anda ilk değerlerini almış olurlar

```java
public class Yazar {
    private String ad;
    private String soyad;

    public Yazar(String ad, String soyad) {
        this.ad = ad;
        this.soyad = soyad;
    }

    public String getAd() {
        return ad;
    }

    public String getSoyad() {
        return soyad;
    }

    public String getBilgi() {
        return this.ad + " " + this.soyad;
    }
}

```

```java
public class YazarIslemleri {
    private static Yazar[] yazarlar;
    static {
        yazarlar = new Yazar[5];
        yazarlar[0] = new Yazar("Reşat Nuri", "Güntekin");
        yazarlar[1] = new Yazar("Necip Fazıl", "Kısakürek");
        yazarlar[2] = new Yazar("Yakup Kadri", "Karaosmanoğlu");
        yazarlar[3] = new Yazar("Halit Ziya", "Uşaklıgil");
        yazarlar[4] = new Yazar("Yahya Kemal", "Beyatlı");
    }
    public static Yazar[] getYazarlar() {
        return YazarIslemleri.yazarlar;
    }
}

```

