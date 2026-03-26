# Pointer Bölüm 2

Go, pass by value, yani değer tutucu olarak çalışan bir programlama dilidir. Referans tutmak için pointer gibi yapılardan faydalanırız.
Yaptığımız örnek de , fonksiyona gönderilen değişkenin bir value kopyası gönderiliyor. Daha sonra fonksiyon içerisinde çarpıldıktan sonra, fonksiyon içerisinde x değişkenin değeri bastırılıyor. Bu işlemler bittikten sonra ise x değişken kopyası yok oluyor ve x değeri tekrar eski haline dönüyor.
Go kendi bir değer tutucu olarak çalışmasına karşın, slice, pointer gibi yapıları kullanarak OOP mantığında çalışma biçimi ortaya çıkarmıştır.
