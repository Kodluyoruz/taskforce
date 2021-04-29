# Metot Overload Nedir ?
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
