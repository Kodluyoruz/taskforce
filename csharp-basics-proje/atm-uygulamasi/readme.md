#### ATM uygulaması ####
Uygulama ilk çalıştığında kullanıcıdan yamak istediği işlemi öğrenmelidir. 
Bunlar ATM üzerinden yapılabilecek temem işlemledir. Para çekme, para yatırma, ödeme yapma vs.. İsteğe bağlı olarak genişletilebilir.
Öncelikle ATM ye giriş yapan kullanıcın sistemde kayıtlı bir kullanıcı olduğundan emin olunmalıdır. 

Uygulamada bir de gün sonu seçeneği olmalıdır.  Gün sonu alınmak istendiğinde, gün içerisinde yapılan transaction ların logları ve fraud olabilecek yani hatalı giriş denemeleri log gösterilmelidir. Aynı client'ın bilgisayarında belirlenen bir lokasyona EOD_Tarih(DDMMYYY formatında).txt  adında bir dosyaya yazılmalıdır.

Kullanılması gereken teknikler:
* Dosyaya Yazma 
* Dosyadan Okuma
* İşlem listesi pre-defined olarak kullanılabilir.
