# Metot Overriding (Metod Ezme)

Aynı isimde farklı parametre listesi (sayı, tür ya da sıraları farklı olan parametreler) ile birden fazla yöntem kodlanmasını Yöntemlerin Aşırı Yüklenmesi ( Method Overloading) olarak adlandırmıştık.

Aşırı yükleme, bir sınıfın içine ata sınıflarındaki protected ya da public tanımlanmış yöntemlerle aynı isimde ve farklı parametre listesine sahip yeni yöntemler yazılarak da gerçekleştirilebilir. Çünkü bu sınıf ata sınıfındaki yöntemleri kalıtımla alacaktır.

Yöntem Geçersiz Kılma ise bir alt sınıfın içine doğrudan ya da dolaylı ata sınıflarından gelen bir (ya da daha fazla) yöntemin aynısının (aynı yöntem adı ve aynı parametre listesi) kodlanmasına verilen addır.

Yöntem geçersiz kılma ile ilgili genelde şuna benzer sorular sorulur: “ata sınıftan zaten alınan yöntemin aynısını alt sınıfta neden tekrar kodlarım?”, “kalıtım kodun yeniden kullanılabilirliğini arttırırken, benim alt sınıfa aynı yöntem(ler)i yeniden kodlamam çelişkili değil mi?”.

Yöntem geçersiz kılma ile ilgili olarak bir noktanın gözden kaçırılmaması gerekir: alt sınıfa kodlanan yöntem, ata sınıftaki yöntemle aynı ad ve parametre listesine sahiptir, ancak ata sınıftaki yöntemle aynı kodları içermemelidir! Zaten alt sınıfa ata sınıftaki yöntemin tamamen aynısını kodlamak elbette çelişkili, hatta saçma ve anlamsız olacaktır.

Geçersiz kılmanın neden gerekli olduğunu anlayabilmek için öncelikle kalıtım ağacında aşağıya doğru inildikçe daha özel sınıflara, yukarıya doğru çıkıldıkça daha genel sınıflara ulaşıldığını hatırlamamız gerekir. Ata sınıfta tanımlanan bir yöntem, o sınıfın genelleştirdiği bütün alt sınıfların ortak özelliklerine göre çalışan bir yöntem olacaktır. Alt sınıflara inildikçe sınıflar özelleştiği için, ata sınıftaki yöntem alt sınıf için fazla genel ve dolayısıyla yetersiz kalabilir. Bu durumda alt sınıf, kendi özelliklerine bağlı olarak daha özel bir gerçekleştirim yapacaktır.

Bazen bu gerçekleştirim ata sınıftakini kullanıp üzerine birşeyler ekleyecek, bazen de tamamen farklı olacak şekilde kodlanabilir. Eğer alt sınıftaki gerçekleştirim ata sınıftaki yöntemi kullanacak ve üzerine birşeyler ekleyecekse, super anahtar sözcüğü atadaki yöntemi çağırmak üzere kullanılabilir. this anahtar sözcüğünün içinde bulunulan nesneye referans olması gibi, super anahtar sözcüğü de ata sınıfa ait iç nesneye referanstır.
