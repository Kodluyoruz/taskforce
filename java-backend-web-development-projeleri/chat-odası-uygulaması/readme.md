## Chat Odası Uygulaması 

- Java’da komut satırından başlatılan bir konsol Chat uygulaması yapınız. 
- Sunucu (server) ve kullanıcı (client) aynı ağdaki farklı bilgisayarlarda çalışabilir, örn. Yerel  Alan Ağı (LAN). 
   * Sohbet odası oluşturmalı. 
   * Sohbet odasına birden fazla kullanıcı bağlanabilir 
Herkes birbirinin yazdığı mesajı okuyabilir. 
- Sunucuya bağlandıktan sonra, sohbete girmek için kullanıcının adını girmesi gerekir.  Sunucu, yeni kullanıcıya şu anda çevrimiçi olan kullanıcıların bir listesini gönderir. - Yeni bir kullanıcı sohbete katıldığında ve bir kullanıcı sohbetten ayrıldığında, her kullanıcı  bilgilendirilir.  
- Uygulama sunucu ve istemci olmak üzere iki bölümden oluşmaktadır. Her bölüm ayrı  bilgisayarlarda bağımsız olarak çalışabilir. 

Kullanılması gereken teknikler:
- Socket  
- Thread
