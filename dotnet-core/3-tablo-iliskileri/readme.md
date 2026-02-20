# Tablo İlişkileri

İlişkisel bir veritabanı ile çalışırken veriyi olabildiğince atomik tutmak ve çoklanmasının önüne geçmemiz gerekir. Böylece bir veriyi güncellediğimizde ilişkili tüm bilgileri de güncellemiş ve veri bütünlüğünü sağlamış oluruz. Bunu sağlayabilmemiz için de tablolar arasında doğru ilişkileri kurmamız gereklidir. Dataları konumlandıracağımız tablolar, içerdikleri alanlar ve tablolar arası ilişkilerin tasarımı sürecine **normalizasyon** adı verilir.

Temel olarak 3 tip tablo ilişkisi bulunmaktadır.

## 1-1 İlişki

Bu ilişki tipinde tablolar arasında 1-1 bir ilişki bulunmaktadır. Genel olarak Temel Bilgi - Detay Bilgi şeklinde gruplanabilecek verileri 2 farklı tabloda konumlandırdığımızı ve ilişkilendirdiğimizi düşünebilirsiniz. 1-1 ilişkide temel olarak A tablosundaki PK, B tablosunda da PK'dır. Bu durumda B tablosunun PK'si aynı zamanda A tablosundaki PK ya işaret eden bir FK'dır.

Örnek verecek olursak; Books tablosunda bir kitap ile ilgili temel bilgilerin varolduğunu düşünelim. Kitaba ait daha fazla detay bilgiyi ise BookDetails tablosunda tuttuğumuzu düşünelim. Bu durumda kitap-kitap detayı için 1-1 ilişki mevcut denebilir. İlişkinin örnek görseli ise aşağıdaki gibi olacaktır.

Bu ilişkiye sahip bir veriyi aslında her iki tablonun kolonlarına sahip tek bir tablo içerisinde tutuluyor gibi düşünebiliriz. Bu nedenle bu ilişki tipine çok da sık rastlamayabilirsiniz. Uygulamamızın duyduğu ihtiyaca göre bu şekilde bir 1-1 ilişki kurup kurmama kararı vermemiz gerekebilir.

![1-1 Relation](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/dotnet-core/3-tablo-iliskileri/images/1-1-relation.png)

## 1-N İlişki

Bu ilişki tipinde tablolar arasında 1-N bir ilişki bulunmaktadır. Temel olarak A tablosundaki PK'nın, B tablosunda bir FK karşılığı vardır. Fakat B tablosunun kendine ait ayrı bir PK tanımı vardır.

Örnek verecek olursak; Books tablosunda bir kitabın temel bilgilerini tuttuğumuzu düşünelim. Kitaba ait her bir baskıyla ilgili bilgileri ise BookEditions tablosunda tuttuğumuzu düşünelim. Bu durumda kitap-kitap baskısı için 1-N ilişiki mevcut diyebiliriz. İlişkinin örnek görseli ise aşağıdaki gibi olacaktır.

1-N ilişki en çok kullanılan ilişki tiplerinden birisidir. Günümüzde farkında olmadan sıkça kullandığımız 1-N ilişki türlerini aşağıda bulabilirsiniz :)

- User -> Posts
- Post -> Comments/Reactions
- User -> PaymentMethods
- User -> Addresses

![1-N Relation](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/dotnet-core/3-tablo-iliskileri/images/1-n-relation.png)

## N-N İlişki

Bu ilişki tipinde tablolar arasında N-N bir ilişki bulunmaktadır. Bu ilişkiyi 2 tablo arasında kurabilmek için 3. bir tabloya ihtiyacımız bulunmaktadır. Temel olarak A tablosundaki PK ile B tablosundaki PK'yı barındıran C tablosu üzerinden bu ilişki kurulur. C tablosunda hem A hem de B tablosuna işaret eden FK'lar vardır.

Books örneğimiz üzerinden devam edecek olursak; bir kitabın birden fazla yazarı olabileceği gibi, aynı yazar yada yazarların da birden fazla kitap yazabileceğini düşündüğümüzde yazar bilgisini direkt olarak Books tablosu ile ilişkilendirmemiz doğru olmayacaktır.
Bu durumda yazar bilgileri için de Authors adında bir tablomuz olmalı ve kitap(lar)-yazar(lar) bilgisi için BookAuthors gibi ayrı bir tablo oluşturmamız gerekir. BookAuthors tablosu sayesinde kitap-yazar arasında N-N ilişkiyi sağlamış oluruz. İlişkinin örnek görseli ise aşağıdaki gibi olacaktır.

![N-N Relation](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/dotnet-core/3-tablo-iliskileri/images/n-n-relation.png)
