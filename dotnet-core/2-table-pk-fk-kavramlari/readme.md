# Table, Primary Key, Foreign Key Kavramları

## Primary Key (Birincil Anahtar)

Adından da anlaşılacağı üzere anahtar veridir. Tabloda her satır veriden sorumlu bir tane anahtar veri vardır. Bu her satır için aynı veridir. Dolayısıyla primary Key bilgisi kolona verilir. Primary key olarak işaretlenen veri tekil olmak zorundadır. Bir tabloda sadece bir kez bulunabilir. Aksi durumda veri tabanı hata fırlatır. Primary key tek bir kolon olabileceği gibi birden fazla kolonun birleşimi de olabilir.

Örneğin bir personel tablosu için Sicil Numarası bir primary keydir.

**Kısaca **PK\*\* olarak görebilirsiniz.

## Foreign Key (İkincil Anahtar)

Foreign Key tablo tasarlarken Primary Key kadar önemlidir. İlişkisel veritabanlarında data consistency foreign key'ler yardımıyla yapılır. Hem veri tekrarınını hem de tablolarda boş durumda olan kirli verilerin oluşmasını engellemek için kullanılır. Örneğin Product tablonuz ve ProductDetail tablonuz olsun. ProductDetail tablonuzda ilişkisi olan bir product'ı Product tablosundan silmeye calısıyorsunuz. Eğer ilişkiler doğru kurulduysa, veritabanı buna izin vermez. Ama arada Foreign Key ilişkisi kurulmamışsa, siz o product'ı silebilirsiniz. ProductDetail tablosundaysa Product tablosunda karşılığını olmayan bir kayıt kalır. Bu istenmeyen bir durumdur.

**Kısaca **FK\*\* olarak görebilirsiniz.

**Okuma Önerisi:** Database indexler ile ilgili bilgi sahibi olmak için [tıklayınız.](https://medium.com/trendyol-tech/sql-server-index-yap%C4%B1s%C4%B1-aba652828fe2)
