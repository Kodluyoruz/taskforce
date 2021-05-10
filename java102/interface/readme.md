# Interface (Arayüzler)

Arayüz denilince genelde herkesin aklına ilk önce kullanıcı arayüzleri gelir (GUI - Graphical User Interface). Örneğin Windows işletim sistemi kullanıyorsanız,
bilgisayarınızı açtığınızda ekranınızda gördükleriniz Windows’un kullanıcı arayüzüdür. Bu arayüz, fare ve klavye çevre birimlerini de kullanarak Windows ile
etkileşimde bulunabilmenizi sağlar.

Arayüzler programlama bağlamında da sistemler arasında bütünleşme noktaları tanımlamak için kullanılırlar. Buradaki “sistemler” programın bir modülünü/alt
sistemini oluşturan sınıflara karşılık gelmektedir

Bir arayüz, bir grup yöntem bildiriminden (method declaration) oluşan bir sözleşmedir. Bu yöntemler, arayüzü tanımlayan sistemin, kendisiyle birlikte çalışmak
isteyen diğer alt sistem(ler)in gerçekleştirmesini (implement) beklediği yöntemlerdir. Başka bir deyişle, arayüzü tanımlayan sistem, birlikte çalışabileceği
diğer sistemlerin neye benzemeleri gerektiğini belirtmektedir. Arayüz bir sözleşme olduğuna göre, bu arayüz üzerinden sistemle bütünleşen diğer sistem,
sözleşmedeki bütün maddeleri yerine getirmeli yani arayüzde bulunan bütün yöntemlerin gerçekleştirimlerini (method implementation) sağlamalıdır.

