Node.js'in Asenkron Yapısı
======

Giriş bölümümüzde Node.js'in bize sağlamış olduğu Javascript çalışma ortamı yapısı üzerine konuştuk. Bu bölümde ise ana konumuz asenkron Javascript ve asenkron çalışmanın 
Node.js açısından önemi. Önce senkron ve asenkron kavramlarına bakalım.

## Senkron Programlama (Synchronous Programming):

Senkron programlama en basit tanımıyla işlemlerin sırasıyla yapılmasıdır. Önce bir dosya okuyalım, sonra bir veritabanı işlemi yapalım ve sonrasında da 
bir http isteği gönderelim şeklinde basit bir şekilde çalışır. Beklemekten sıkılmaz, başka işlerin aciliyetiyle ilgilenmez. Bir işlem yapılırken diğer 
işlemler **bloklanır**.

## Asenkron Programlama (Asynchronous Programming):
Asenkron programlama ise uzun süren bir işlemi beklemeden diğer işlemlere devam edebilmektir, işlemlerin sırasıyla devam etme zorunluluğu yoktur. Önce bir 
dosya okuyalım, aaa ama bu dosya okumak uzun sürüyor, eee ne yapalım o zaman? Bu işlemin bitmesini beklemeden diğer işleme geçebiliriz. Bir işlem yapılırken
diğer işlemler **bloklanmaz**.

![Sync_Async](https://github.com/Kodluyoruz/taskforce/blob/node.js/node-js/AsynchronousJavaScript/figures/sync_async.png)

Peki efendim! Bu tanımların Node.js açısından önemi tam olarak nedir? Ne demiştik öncesinde Javascript single thread, yani aynı anda sadece ve sadece 
tek bir işlem yapabilir. Yani tek bir çalışanımız var, bu çalışanın mümkün olduğu kadar çok iş yapabilmesi için ne yapmamız gerekir? Boş bırakmamamız:))) 
Bir işlem başladıktan sonra beklemeden diğer işlemleri de yapmasını bekleriz.

Burada hemen şu ufak eklemeyi de yapalım. Eğer beklediğimiz uzun süreli işleme bağımlı diğer işlemler varsa bunların da beklenen işe ekleyebilmeliyiz. Asenkron
programlamanın diğer işlevi de budur.

Burayı da anladık, ama hocam! Biz işlemleri tamam bir şekilde bitmelerini beklemeden hızlıca başlattık, peki bu işlemler bittiğinde bunun sıralaması nasıl yapılıyor?
İşte burada devreye event-loop girer.

## Olay Döngüsü (Event-Loop):

Event-Loop, callback, single thread.. Nasıl hiçbir şey anlamıyoruz değil mi? Özellikle aşağıdaki grafiği açıklayayım hiç işleri zorlaştırmaya gerek yok. Restoran - 
garson metaforumuza tekrar döneceğim burada. Restoranımız çalışma ortamı ve yalnızca tek bir garson çalışıyor (**Single Thread**) bu garsonumuz önce 1. masaya ait siparişleri aldı ve siparişi mutfağa bildirdi (**Thread Pool**). O siparişlerin hazır olmasını beklemeden (**Non-Blocking**) 2. masaya ait siparişleri aldı ve yine mutfağa bildirdi. Bu sırada kendisine 1. masanın yemeğinin hazır olduğu bildirildi (**callback**).

![Node.js Event Loop](https://github.com/Kodluyoruz/taskforce/blob/node.js/node-js/AsynchronousJavaScript/figures/node_eventloop.png)

İşte bahsettiğimiz Node.js'in asenkron yapısının özeti budur. Node.js için temel amaç mümkün olan en kısa sürede beklemeden fazla sayıda işlem yapmaktır. 

## Daha Fazlası İçin
- [Arin Yazılım - JavaScript Karmaşası](https://www.youtube.com/watch?v=_kdRtcy43ik)
- [Stackoverflow How Node.js Works](https://stackoverflow.com/questions/9497076/how-node-js-works)
