# ObjectInputStream ve ObjectOutputStream sınıfları

Java nesneleri hafızada tutulurlar. Bazen bir nesnenin hafızadaki **anlık görüntüsünü (snapshot)** daha sonra tekrar kullanmak üzere kaydetmek isteyebilirsiniz. Örneğin, birden fazla sunucunuz var ve programınız bu sunucular üzerinde dağıtık olarak çalışıyor. Bir sunucu üzerinde bulunan bir nesne diğer bir sunucu üzerinde bulunmuyor olabilir. Bu nesnenin sunucular arasında aktarılması ihtiyacı doğabilir.

Nesnelerin hafızadaki anlık durumu bir byte dosyası olarak kaydedilebilir. Bu işleme **serialization** denir. Daha sonra bu dosya okunup nesne tekrar hafızaya alınabilir ve kullanılabilir. Bu işleme **deserialization** denir.

Nesneleri serialize etmek için **_ObjectInputStream_**, deserialize etmek için **_ObjectOutputStream_** sınıfı kullanılır.

Şunu da önemle belirtmek gerekir ki, bir nesneyi serialize edebilmek için o sınıfın **_Serializable_** arayüzünü uygulaması gerekir.

