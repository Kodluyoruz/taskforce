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

