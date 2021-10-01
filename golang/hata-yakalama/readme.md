# Hata yakalama temelleri

Bir uygulama geliştirirken, uygulama içerisinde beklenilmeyen tüm durumlara hata denir. Örnek olarak, bir veri girişinde karşılaşılan ekran, bir web sunucusunun front tarafa veri gönderememesi gibi durumlar verilebilir.

Go'da diğer dillerden farklı olarak, bu hatalara exception handling olarak bakmaz. Bu hatalar bize bir değer gönderir. Bu değere göre işlem yapılır.