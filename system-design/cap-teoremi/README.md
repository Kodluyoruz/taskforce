# CAP Teoremi: Dağıtık Sistemlerin Temel Kısıtı

2000 yılında bilgisayar bilimci Eric Brewer bir konferansta dağıtık sistemlerin temel bir kısıtını ortaya koydu: bir dağıtık sistem, aynı anda üç temel özelliği birden garanti edemez. Bu iddia 2002 yılında MIT'den Seth Gilbert ve Nancy Lynch tarafından matematiksel olarak kanıtlandı ve "CAP Teoremi" adını aldı. Bugün bir veritabanı seçip sistemi tasarlarken bilinçli ya da bilinçsiz olarak bu teoremin getirdiği trade-off'larla yüzleşiyorsun.

## CAP Nedir

CAP, üç özelliğin baş harflerinden oluşur:

**C — Consistency (Tutarlılık):** Dağıtık sistemdeki her node'a yapılan her okuma, en son gerçekleştirilen yazma işleminin sonucunu ya da bir hata mesajını döndürür. Yani tüm kullanıcılar aynı anda verinin aynı versiyonunu görür. Bir node'a yazılan veri, başka bir node'dan okunduğunda tutarlı biçimde yansıtılmış olur. Bu bağlamda "tutarlılık", ACID'in consistency kavramından farklıdır; buradaki odak tüm node'ların aynı anda aynı veriyi görmesidir.

**A — Availability (Erişilebilirlik):** Sisteme gönderilen her istek, başarılı ya da başarısız bir yanıt alır — ama hiçbir zaman zaman aşımına uğramaz. Bir node çalıştığı sürece mutlaka yanıt verir. Yanlış bir veri olsa bile sistemi "şu an hizmet veremiyor" şeklinde yanıt vermez.

**P — Partition Tolerance (Bölünme Toleransı):** Sistem, ağ bölünmesi (network partition) durumunda — yani bazı node'lar birbirleriyle iletişim kuramasa bile — çalışmaya devam eder. Gerçek dağıtık sistemlerde ağ paketleri düşebilir, sunucular arası bağlantı kesilebilir; bu bir olasılık değil kaçınılmaz bir gerçektir.

**Teoremin özü:** Ağ bölünmesi (P) her dağıtık sistemde er ya da geç yaşanır; bu yüzden P vazgeçilemez bir özelliktir. Bir partition yaşandığında ise tutarlılığı (C) veya erişilebilirliği (A) korumak arasında seçim yapmak zorundasın. Her ikisini birden garanti etmek matematiksel olarak imkânsızdır.

## CP, AP, CA Sistemler

**CP Sistemler (Consistency + Partition Tolerance):**
Tutarlılık önceliklidir. Ağ bölünmesi yaşandığında, stale (güncel olmayan) veri döndürmektense bazı istekleri reddeder ya da zaman aşımına uğratır. Kullanıcı hata alır ama aldığı veri her zaman günceldir.

**HBase** ve **Apache ZooKeeper** CP sistemlere örnek gösterilebilir. ZooKeeper dağıtık koordinasyon için kullanılır; lider seçimi ve konfigürasyon yönetimi gibi kritik operasyonlarda yanlış veri göndermek kabul edilemez. Bu nedenle bir partition sırasında bazı okuma istekleri reddedilir.

**AP Sistemler (Availability + Partition Tolerance):**
Erişilebilirlik önceliklidir. Ağ bölünmesi olsa bile sistem yanıt vermeye devam eder. Ancak dönen veri güncel olmayabilir; farklı node'lar verinin farklı versiyonlarını gösterebilir. Zamanla tüm node'lar tutarlı hale gelir: bu **eventual consistency** (nihai tutarlılık) prensibidir.

**Apache Cassandra** ve **Amazon DynamoDB** AP sistemlere örnektir. Cassandra'ya yazılan bir veri, tüm node'lara hemen yayılmak zorunda değildir. Okuma isteğinde sistemi durdurmak yerine mevcut en iyi bilgiyle yanıt verilir. Büyük ölçekli, yüksek kullanılabilirlik gerektiren sistemler için bu tercih mantıklıdır.

**CA Sistemler (Consistency + Availability):**
Teorik olarak tutarlılık ve erişilebilirliği birlikte sağlayan ama partition tolerance sunmayan sistemlerdir. Gerçek dağıtık bir ortamda ağ bölünmesi kaçınılmaz olduğundan, CA kombinasyonu gerçek anlamda dağıtık sistemlerde mümkün değildir. Tek bir sunucuda çalışan **PostgreSQL** ya da geleneksel ilişkisel veritabanları CA'nın teorik referansı olarak gösterilir: tek bir makine olduğundan partition olmaz, her istek tutarlı yanıt alır ve sistem erişilebilirdir. Ama bu tek sunucu ölçeklendirme sorununu çözmez.

## Gerçek Dünya Seçimi

Teori güzel, ama pratikte ne seçilir?

**Banka işlemi:** Hesabından 1000 TL çekilirken bakiye bilgisinin her node'da aynı anda doğru görünmesi şarttır. Biri eski bakiyeyi görerek ikinci çekimi onaylarsa para iki kez çekilmiş olur. Bu yüzden finansal işlemler için CP sistemler tercih edilir; tutarlılık, anlık erişilemezlikten iyidir.

**Sosyal medya beğeni sayısı:** Bir tweet'in 10.423 mi yoksa 10.429 beğenisi olduğunu anlık olarak bilmek kritik değildir. Kullanıcının beğeni işlemi kaydedilir ve tüm node'lara zamanla yayılır. Beğeni sayısını göstermek için sistemi durdurmak anlamsızca maliyetlidir. AP burada açık bir seçimdir.

**DNS:** Alan adı çözümleme sistemi AP'nin klasik örneğidir. DNS kayıtları güncellenmesi global olarak yayılmadan önce eski değeri döndürmeye devam eder (TTL süresi boyunca). Yanlış IP görmek, hiç yanıt alamamaktan çok daha kabul edilebilirdir.

## Ne Zaman Kullanılır

Veri tutarlılığı kritik olduğunda — finansal sistemler, rezervasyon sistemleri, stok yönetimi, dağıtık kilitleme mekanizmaları — **CP** tercih edilir. Bu sistemlerde stale veri, yanlış kararlar alınmasına ve ciddi iş kayıplarına yol açabilir.

Yüksek erişilebilirlik ve büyük ölçek gerektiğinde — sosyal platformlar, içerik dağıtım sistemleri, kullanıcı davranışı takibi, anlık analitik — **AP** daha uygun bir seçimdir. Kısa süreli tutarsızlık tolere edilebildiğinde bu seçimin sağladığı ölçeklenebilirlik ve dayanıklılık büyük avantaj yaratır.

CAP teoremi önemli bir çerçeve sunar ancak sınırlıdır: yalnızca partition durumundaki trade-off'u modelleştirir. Daha kapsamlı bir perspektif için **PACELC teoremi**ne bakmak gerekir. PACELC, partition olmasa bile (normal operasyonda) gecikme (latency) ile tutarlılık arasında bir trade-off olduğunu söyler. Yani soru yalnızca "partition'da ne seçerim?" değil, aynı zamanda "normal çalışmada düşük gecikme mi yoksa güçlü tutarlılık mı?" şeklinde de sorulmalıdır.

## Mülakatta Bu Konuya Nasıl Yaklaşılır

Sistem tasarımı mülakatlarında CAP teoremini bilmek başlangıç noktasıdır; ama asıl değerlendirilen şey bu trade-off'ları gerçek bir senaryoya uygulayabilmektir. "Bu sistem için tutarlılık mı, availability mı öncelikli?" sorusunu duyduğunda "uygulamaya göre değişir" deyip geçme. Önce use case'i analiz et: verinin yanlış görünmesinin sonuçları nedir, sistem kısa süre yanıt verememesinin sonuçları nedir?

Mülakatçı sana bir ödeme sistemi tasarlattırıyorsa strong consistency'nin neden şart olduğunu somut örnekle açıkla: "kullanıcı bakiyesi 100 TL iken iki eş zamanlı işlem aynı bakiyeyi okuyup ikisi de başarıyla tamamlanırsa negatif bakiye oluşur — bu kabul edilemez." Öte yandan sosyal medya profil görüntüsü için eventual consistency'nin neden yeterli olduğunu da açıklayabilmelisin: "kullanıcı profil fotoğrafını güncelledikten birkaç saniye sonra bazı kullanıcılar hâlâ eski fotoğrafı görüyorsa bu kritik bir sorun değildir."

CAP teoremini ezbere bilmek yetmez; hangi trade-off'u hangi iş gereksinimi için seçeceğini net biçimde gerekçelendirebilmek şarttır. Güçlü adaylar ayrıca PACELC'ten bahseder ve "zaten her sistem bir yerde gecikme ile tutarlılık arasında seçim yapıyor" diyerek düşüncelerini bir adım daha ileri taşır. Bu derinlik, konuyu gerçekten kavramış olduğunu gösterir.
