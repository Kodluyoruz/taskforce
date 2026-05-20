## ÖDEV
1. Projeye kitapların yazarları için Author controller'ı ekleyiniz. Bu controller ile aşağıdaki işlemlerin gerçeklenebilmesi gerekmektedir. 
    - Yazar Ekleme 
    - Yazar Bilgileri Güncelleme
    - Yazar Silme
    - Tüm Yazarları Listeleme
    - Spesifik Bir Yazarın Bilgilerini Getirme

    **Yazar Bilgileri:**
    - Ad 
    - Soyad
    - Doğum Tarihi 

2. Kitap - Yazar - Tür entity ilişkilerini kurunuz. Bİr kitabın yalnızca bir yazarı olabilir varsayımında bulunabilirsiniz. 
    - Kitabı yayında olan bir yazar silinememeli. Öncelikle kitap silinmeli, daha sonra yazar silinebilir. 
3. Author için model ve dto'ları ekleyiniz. Controller metotları entity'leri input veya output olarak kullanmamalı. 
4. Author entity model map'lerini **Auto Mapper** kullanarak yazınız. 
5. Author servisleri için **Fluent Validation** kullanarak validation sınıflarını yazınız.  Kuralları uygun gördüğünüz şekilde belirleyebilirsiniz. 
6. Servisler içerisinden anlamlı hata mesajları fırlatılmalı.




