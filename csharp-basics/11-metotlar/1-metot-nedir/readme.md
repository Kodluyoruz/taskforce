# Metot Nedir ?
Metotları programı küçük parçalara ayrıştırmak için kullanırız. Büyük bir ii tek bir metot içinde yazmak yerine küçük parçalara ayırarark yazmak daha doğru bir yaklaşımdır. 

Bu bizi hem kod tekrarından kurtarır hem de daha okunabilir kod parçaları yazmamızı sağlar. Metotlar tek başlarına kullanılabilen yapılar değildir. Bir sınıf içerisinde yazılmaalı ve ancak sınıfın nesnesi aracılıgıyla erişilebilir.(Static sınıf metodlarına sinifAdi.metotIsmi şeklinde erişilebilir.)

Söz dizimiyse aşağıdaki gibidir. 

		erişim_belirteci geri_donus_tipi metot_adi(argüman/parametre)
		{
			//komutlar;
		}
* **Erişim Belirteci** : İlgili metodun nereden erişilebilir olduğu belirler. Belirtilmediği sürece varsayılan olarak private dır. Yani sadece tanımlandığı sınıf içerisinden erişilebilir. 

* **Parametreler:** Metodun çalışırken ihtiyaç duyacağı bilgilerdir.  Bir metot bir veya birden fazla parametre alabilirken, hiç parametre almayan metotlar yazmakta mümkündür. 

        public int Topla(int a, int b)
        {
            return a+b;
        }

Yukarıda public erişim tipinde, integer geri dönüş tipine sahip, Topla isminde ve 2 tane integer tipinde parametre alan bir metot tanımı görüyoruz. 

Metotlat içerisinde tanımlanan değişkenler sadece metot içerisinden erişilebilirler. Programından başından sonuna kadar yaşamazlar. Metottan çıkıldığından lifetime ı yani yaşam süresi sona erer. 


### Ref Kullanımı

Bir fonksiyona parametre aktarırken değer veya referans tipinde paramtere verebiliriz. 
* Değer tipleri metota bit bit kopyalanır. Yani int bir değişkeni parametre olarak değer tipinde bir fonksiyona verdiğimizde; fonksiyon çalışırken bellekten integer bir değişkeni saklayabilecek kadar yer ayrılır ve gönderilen parametre orda saklanır Fonksiyon içerisinde parametre üzerinde değişiklik yapıldıgında ana değişken değişmez. Sadece kopyası üzerinde değişiklik yapılmış olur. Fonksiyon sonlandığındaysa bellekten silinir. Yani yaşam süresi sona erer. 

Değer Tiplerini şu şekildedir: int, long, float, double, decimal, char, bool, byte, short, struct, enum


* Referans olarak bir atama yapıldığında ise fonksiyona ilgili değişkenin bellekteki adresi gönderilmiş gibi düşünebilirsiniz. Dolayısıyla fonksiyon asıl değişken üzerinde değişiklik yapar. Fonksiyon içerisinde bir değişiklik yapıldıgında çağırıldıgı yerdeki değişken de değişikliğe uğramış olur. Yani değeri değişir. Bu nedenle Ref anahtar kelimesini kullanırken çok dikkatli olunmalıdır.

Ref Kullanımının Özellikleri:
* Referans olarak iletilmek istenen değişkenin önüne "ref" yazılmalıdır. 
* ref olarak metoda verilen değişkenin mutlaka bir başlangıç değeri olmak zorundadır.

Örnek ref kullanmı ise şu şekildedir : 

    int x = 3;
    int y = 4;
    int sonuc = instance.ArttırVeTopla(ref x, ref y);

    public int ArttırVeTopla (ref int x, ref int y)
    {
        x+=1;
        y+=y;
        return (x+y);
    }
