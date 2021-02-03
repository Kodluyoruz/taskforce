## Yazı Tura

Yalnızca bir madeni paraya ihtiyaç duyulan, oldukça kolay oynanabilecek ve dünyanın hemen her yerinde yaygın olan yazı tura oyununu React ile yapalım.

![yazi-tura](https://raw.githubusercontent.com/Kodluyoruz/taskforce/react/react-js/yazi-tura/figures/yazi-tura.gif)

### Proje Nasıl Çalıştırılır

- Projeyi fork'ladıktan ya da indirdikten sonra projenin bulunduğu klasörde "npm install" komutu ile gerekli paketlerin yüklenmesi gerekiyor.
- Daha sonra "npm run start" komutu ile uygulama başlatılabilir.

### Proje Hakkında

App.js'de görüldüğü üzere CoinFlipper adlı bir component render ediyoruz. Bu component'in state'i içerisinde "side" ve "flipping" olarak 2 farklı bilgi tutuyoruz. Tutulan bu bilgiler Coin adında farklı bir component'e prop olarak geçiliyor ve Coin component'i içerisinde bu prop'a göre paranın hangi yüzü geleceğine karar verilip render ediliyor.

### Yapılacaklar

1. Yapmamız gereken altta statik olarak yazan "Toplam 5 atıştan 3 ü tura 2 si yazı geldi." yazısını dinamik hale getirmek. Yani kaç atış yapıldığını, kaç tanesinin tura geldiğini, kaç tanesinin yazı geldiğini yazdırmamız gerekiyor.
2. Yazı-tura gelme durumunu rastgele hale getirmemiz gerekiyor, şu an görüleceği üzere sadece tura geliyor.

### İpuçları

1. Butona basıldıkça atış yapıyoruz, dolayısıyla toplam atış sayısını hesaplamak için state'de bunun için bir değer tutmalı, buton her tıklandığında bu değeri 1 artırmalıyız.
2. Yazı-tura durumu rastgele belirlenecek. Bunu sağlamak için 0 ve 1 sayıları arasında rastgele seçim yapacak bir fonksiyon yazabiliriz. 0 bizim için turayı, 1 bizim için yazıyı temsil edebilir. Kodu incelediğinizde göreceğiniz, parayı döndürme işleminin olduğu yerde rastgele gelen bu yeni değeri state'e atabiliriz.



**[Proje Repository](https://github.com/Kodluyoruz/yazi-tura)**
