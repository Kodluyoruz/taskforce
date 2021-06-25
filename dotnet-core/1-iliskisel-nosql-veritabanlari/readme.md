# İlişkisel ve NoSql Veritabanları

## RDMS (Relational Database Management System) - İlişkisel VeriTabanı Yönetim Sistemleri

**İlişkisel Veri Tabanları** veriyi birbiri ile ilişkili bir şekilde tutmaya yarar. Tablolar aracılığıyla veriler hem kendi içlerinde hem tablolar arasında ilişkili bir şekilde saklanır. Tablolar satırlar ve sütunlardan oluşur. Bu satır ve sütunlar verileri daha anlamlı tutmamızı ve okumamızı sağlar.

Uzun bir paragraf ile yazılmış karşılaştırma makalelerini düşünün. Bir de onu özetleyen karşılaştırmalı bir tablo düşününün. Mantıksal olarak veriler yanyana koyulmuş ve neye göre bir karşılaştırma yapılacağı çok açıktır. Tabloya kısa bir göz attığınızda verilmek istenen mesajı çok rahat olarak alabilirsiniz. İlişkisel veritabanı da insana aynı hissi verir :)

İlişkisel veri tabanı yönetim sistemleri ise, veritabanı oluşturma, verileri yönetme ve saklama gibi işlemleri kolayca yapmanıza olanak sağlayan yazılımlardır. Çoğu veri tabanına erişim için **SQL(Structured Query Language)** kullanılır.

Veriler tablolarda birbiri ile ilişkili şekilde saklanırken tablolar arasında da ilişkiler olabileceğinden bahsettik. Bu tablolar arası ilişki bize **Data Consistency** yani veri tutarlılığını sağlar. Dolayısıyla bu ilişkilerin doğru kurulması oldukça kritiktir.

<u>Bazı popüler veri tabanları:</u>

- MySql (Ücretsiz)
- PostgreSQL (Ücretsiz)
- MsSql
- IBM DB2
- Oracle

Bu veri tabanlarında kullanılan diller de kendi aralarından değişiklik gösterebiliyor. Örneğin MsSQL ile TSQL dilini kullanırken, Oracle ile PLSQL dilini kullanırız. Birbirinden çok büyük farklar olmasa da kendilerine özel dil yapı farkları vardır.

## NoSql - İlişkisel Olmayan Veri Tabanı Yönetim Sistemleri

İlişkisel veri tabanı yönetim sistemlerinin doğuşu bundan 40 sene öncesine dayanır. Yıllar içerisinde olgunluk seviyesi çok artmıştır. Ama günümüzde bile hala büyük verileri saklama ve işleme konusunda yetersiz kalmaktadır. Tam da bu noktada yaşanan sıkıntılara karşılık NoSql veritabanları 1998 yılında ortaya çıkmıştır.

NoSql Veritabanları yüksek trafik ile yüksek miktarda verinin yönetimine odaklandı. **Immediate Data Consistency** yani anlık veri tutarlılığından feragat ederek, yüksek performansa ve hıza odaklandı.

İlişkisel veri tabanlarındaki **Immediate Data Consistency** burda yerini **Eventual Data Consistency** yani nihai veri tutarlılığına bırakır.

NoSQl veritabanlarında **CAP Teorimi** denen önemli bir teorem vardır.

Aşağıdaki görsel CAP Teoremini çok iyi açıklıyor.

![Cap Teoremi](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/dotnet-core/1-iliskisel-nosql-veritabanlari/figures/ref-property-in-dbtable.png)

Bu görsel bize der ki; NoSql veri tabanı olarak Strong Consistency, Availability ve Partitioning kavramlarını aynı anda garanti edemem.

Bazı Popüler NoSql Veri Tabanları ve Özellikleri

- Document Based (MongoDB - CouchDB)
- Key/Value(Redis)
- Graph Based (Neo4J)
- Column Based (Cassandra, HBase)

| RDMS                                                         | NoSql                                                                                     |
| ------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| Dikeyde ölçeklenebilir, yatayda ölçeklenmesi çok zordur.     | Kolay bir şekilde yatayda ya da dikey de ölçeklenebilir. Dağıtık sistemler için uygundur. |
| Anlık veri tutarlılığı sunar                                 | Nihai veri tutarlılığı sunar                                                              |
| Olgunluk seviyesi yüksektir. Yetişmiş uzman bulmak kolaydır. | RDMS kadar olgun değildir. Yetişmiş uzman bulmakta zordur.                                |
| Lisans ücretleri çok yüksektir.                              | Lisans ücretleri düşüktür                                                                 |

**Okuma Önerisi:** Veri tabanı yönetim sistemleri ile ilgili daha detay bilgiye sahip olmak için lütfen [tıklayınız.](https://medium.com/devopsturkiye/microservice-mimarilerde-veritaban%C4%B1-tasar%C4%B1m%C4%B1-d58371ec466)
