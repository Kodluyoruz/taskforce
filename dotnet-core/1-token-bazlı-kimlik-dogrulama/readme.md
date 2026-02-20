# Token Bazlı Kimlik Doğrulama
Günümüzde veri güvenliği ve kullanıcı doğrulama için en yaygın kullanılan yönetem token bazlı doğrulamadır. 

Bu doğrulama akışı temelde şu şekilde işler: 
1. İstemci istekte bulunabilmek için kendi bilgilerini gönderir ve bir token talebinde bulunur. 
2. Kimlik sağlayıcısı kullanıcıyı tanır ve yetkilendirmek isterse bir token oluşturup geri döndürür. 
3. Client bundan sonra istekte bulunurken almış olduğu token'ı isteğin authorization header kısmına ekleyerek Api Server'a gönderir. 
4. Api server gelen token'ı çözer, token içerisinden kullanıcı bilgilerini okur ve yetkilendirir.

Token bazlı yetkilendirme ile çalışırken bilgi sahibi olmamız gereken birkaç kavrama yakından bakalım.

* **Accesss Token:** OAuth 2.0 protokolüne göre RFC 7519 standardına göre belirli bir expire süresine sahip olarak üretilen güvenlik anahtarıdır. Token'ın kendisidir. 

* **Refresh Token:** Access Token'ın süresi dolduğunda kullanıcının oturumunu sonlandırmadan yeni bir access token ın üretilmesini sağlar. İlk access token alındığında bearberinde bir refresh token'da üretilir. Access token'ın süresi dolduğunda kullanıcıyı yeniden loginden geçirmek yerine refresh token gönderilerek yeni bir access token alınabilir. Böylece kullanıcı kesintiye uğramadan işlemlerini yapmaya devam edebilir. 

[Okuma Önerisi:](https://omansak.blogspot.com/2021/01/servislerde-guvenlik-web-servis-nedir.html) Kimlik Doğrulama Yöntemleri ile ilgili daha fazla bilgi sahibi olmak için [tıklayınız.](https://omansak.blogspot.com/2021/01/servislerde-guvenlik-web-servis-nedir.html)