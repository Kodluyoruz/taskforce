# TCP (Transmission Control Protocol)

TCP, ağdaki cihazlar arası iletişimi kolaylaştıran bağlantı odaklı(connection oriented) iletişim protokolüdür. IP protokolü ile beraber çalışırlar, genelde TCP/IP olarak beraber görürüz. TCP/IP beraber internetin temel taşlarını oluşturur.

TCP protokolünü diğerlerinden ayıran bağlantının sağlanması konusundaki kaygısıdır. Mesaj gönderileceğinde sorun yaşamamak adına bağlantının varlığından emin olur.

TCP bağlantısı istemci(client) ve sunucu(server) arasında gerçekleşir. İstemci ve sunucu arasında veri alışverişi başlamadan önce 3-way handshake ile bağlantı doğrulanır. Bunun amacı veri gönderimi için güvenilir, veriyi düşürmeyecek bir bağlantı olduğunu kanıtlamak. Bu kanıtlama için standart paketler gönderiliyor. İstemci tarafından SYN biti işaretlenmiş(rastgele işaretleme yapılıyor) paket gönderiliyor. Sunucu paketi aldığında biti bir artırarak, kendi de rastgele bir biti işaretleyerek gönderiyor. İstemci sunucudan gelen paketi aldığında kendi gönderdiğinin bir fazlasını bulduğu için mutlu, demek ki yolda paketi yanlış yere gitmemiş. Bu sefer kendi bitine dokunmadan sunucunun gönderdiği biti bir artırıyor ve tekrar paketi gönderiyor. Paketi alan sunucu da mutlu. İstemci ve sunucuyu mutlu ettiğimizde iletişim başlıyor, artık mesajları gönderebileceğimiz bir bağlantı kanalı oluştu.

![3_way_handshake](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/TCP/figures/3_way_handshake.png)

TCP iki yönlüdür (bidirectional). Yani hem sunucu istemciye mesaj/veri gönderebilir hem de istemci sunucuya mesaj/veri gönderebilir. Veri ise bir bütün halinde karşı tarafa iletilmez, paketler halinde gönderilir. TCP, verinin eksiksiz karşı tarafa gitmesini istediği için önlemler alır. Veri alışverişi sırasında ACK gelmeyen paketlerde (ki bu karşı tarafın mesajı aldım deme yoludur) tekrar paketi gönderir. Veri paketler halinde gönderildiği için gönderirken bir listeye yazar ve ACK geldikçe tamam bunu göndermişiz diyerek listeden siler gibi düşünebilir. Eğer ACK alamazsa ki bu da paket kayboldu demektir, yeniden gönderilecekler listesi tutar ve paket orada yer alır.

Peki bir paketin düştüğünü nasıl anlıyor? Paketi gönderdi, hemen ACK gelmezse tekrar mı göndersin? Bir saniye sonra beklese belki gelecekti, değil mi? İşte bu sorunu da çözmek için timeout süremiz var. Bu süre dolduğunda ACK mesajı gelmediyse o paket kayboldu diye düşünülür. Evet belki 1 saniye sonra gelecekti ama süremiz doldu cevap veren taraf için üzgünüz tekrar paket ona ulaştığında bu sefer elini çabuk tutsun ACK ile aldım desin :)

TCP bağlantısı genelde dosya alışverişi, metin mesajları gibi giderken kayıp yaşamasını istemeyeceğimiz bilgilerde kullanılır. Paketlerin gidip gitmediği kontrol edildiği için hata kontrolü sağlanmış olur, daha güvenilir bir hal alır. Gitmeyen paketleri tekrar gönderir, bazı durumlarda paket boyutu fazlaca artabileceği için maalesef ki yavaşlığa sebep olur.

TCP bağlantısını kendiniz de rahatlıkla kodlayabilirsiniz. Bir programlama dili seçin ve TCP server/TCP client olarak arama yapın. İstemediğiniz kadar örnek çıkacaktır. Java için örneklerden birine şu linkten ulaşabilirsiniz: "[TCP Sunucu-İstemci Java üzerinden örnek](https://github.com/aysedemirel/Socket-Programming/tree/master/BasicClientServer)". Linkteki projede basit bir sunucu-istemci kodu vardır. Kendi bilgisayarınıza alarak istemci ve sunucuyu ayrı ayrı çalıştırırsanız konsol üzerinden veri alışverişi gerçekleştirebilirsiniz. Kodda geliştirme yaparak TCP tabanlı kendi mesajlaşma uygulamanızı yapabilirsiniz :) Mesaj trafiğini incelemek için [Wireshark](https://www.wireshark.org/#download) uygulamasını indirerek gözlem yapabilirsiniz.

## Kaynaklar:
- https://medium.com/@gokhansengun/tcp-nas%C4%B1l-%C3%A7al%C4%B1%C5%9F%C4%B1r-1-484612c5264f
- https://searchnetworking.techtarget.com/definition/TCP
