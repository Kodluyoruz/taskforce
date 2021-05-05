# Metot Overloading ve Out Parametre Kullanımı

## Metot Overloading Nedir?
Method overloading yani metotların aşırı yüklenmesi metot imzasının değiştirilerek aynı isimdeki metotun birden farklı versiyonun yaratılmadıdır. 

Metot imzası: 

    //metotAdı + parametresayisi + parametre tipleri

Örnek : 

        public void EkranaYazdir(int deger)
        {
            Console.WriteLine(deger);
        }

        public void EkranaYazdir(string deger)
        {
            Console.WriteLine(deger);
        }

        public void EkranaYazdir(string deger1,string deger2)
        {
            Console.WriteLine(deger1 + deger2);
        }

Yukarıda EkranaYazdir isimli metodun 3 overload versiyonunu görüyoruz. Parametre sayısı ve parametre veri tiplerini değiştirerek aşırı yüklemiş olduk. 

**ÖNEMLİ** : Geri dönüş tipi metot imzasına dahil değildir. Yani sadece geri dönüş tipini değiştirerek bir metotu aşırı yükleyemeyiz. Derleyici hata verecektir. 

## Out ve Ref Parametre Kullanımı

Out anahtar kelimesi ref anahtar kelimesi ile aynı işi yapıyor diyebiliriz. Arada sadece bir kaç fark var.

Out Kullanımının Özellikleri:
* Out olarak kullanılmak istenen değişken önüne mutlaka "out" yazılmalıdır. 
* out değişkenşin bir ilk değeri olmak zorunda değildir. Hatırlarsanız bu ref kullanırken zorunluydu.

**Örnek out kullanımı:**

    instance.Toplam(4,8, out int toplam);
    
    public int Toplam (int a, int b,  out int toplam)
    {
        toplam = a+b;
        return toplam;
    }
