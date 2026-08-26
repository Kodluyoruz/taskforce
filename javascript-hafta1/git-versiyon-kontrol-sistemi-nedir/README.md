# GIT Nedir?

GIT Kontrol Sistemi'nin ne olduğunu anlatmaya başlamadan önce biraz kültür mantarı moduna geçelim ve "git" kelimesinin anlamı ve bu sistemin kısa tarihsel gelişimi üzerine konulaşım. Peki bunu neden yapıyoruz?

Şu sebepten ötürü; Yazılım dehası Bill Gates çok kitap okuyan, okuduklarını iyi şekilde hatırlayan ve konuşmaları sırasında okuduğu kitaplardan alıntılar yapan bir şahsiyet. Bu kadar okuma yapıp da okuduklarını aklında detaylı şekilde nasıl tuttuğu sorulduğunda Bill Gates;

*Bir konuda okumaya başlamadan önce konu hakkında genel bilgi sahibi olmayı ve konunun tarihini incelemeyi öneriyor.* [*](https://www.dunyahalleri.com/bill-gatesin-okuduklarini-hatirlama-yontemi/)

**Bu içeriğimizde biz de GIT Versiyon Kontrol Sistemi Nedir?** sorusuna cevap ararken bu konu hakkında sadece kuru bilgi edinmek yerine bir miktar kültürel kazanım sağlayacağız ki konuyu içselleştirelim ve konu hakkında bir derinlik kazanalım. GIT ile ilgili bu sayfada ve devamındaki sayfalarda öğrendiklerimizi kolay kolay unutmayalım.

## "git" Kelimesinin Anlamı

Cambridge Sözlüğe göre; *aptal, hoş olmayan kişi* anlamına geliyor. [[2]](https://dictionary.cambridge.org/dictionary/english/git)

Bu isimlendirme Torvalds'a sorulduğunda kendisi espirili şekilde şu cevabı veriyor:

"Ben bir egoistim ve projelerime kendi ismimi veriyorum. Önceki Linux, şimdiki git."
Torvalds, alternatif olarak kelimenin ruh halinize göre aşağıdaki anlamlara da gelebileceğinden bahsediyor;

- Yaygın bir UNIX komutu tarafından kullanılmayan, telaffuz edilebilir, rastgele üç harfli bir kombinasyon.
- Sözlükteki argo anlamı ile; Aptal, Aşağılık ve Basit.
- "Küresel bilgi izleyici" (Global information Tracker).
- "Kahrolası aptal kamyon dolusu pislik" (Goddamn Idiotic Truckload of sh*t)."

**Not:** Alıntı, argo ve küfürden arındırılmıştır. Orjinal cevabına [buradan](https://git.wiki.kernel.org/index.php/GitFaq#Why_the_.27Git.27_name.3F) ulaşabilirsiniz.)


Görüldüğü üzere aslında çok da kesin bir anlamı yok. Özgür yazılım dünyası sizi burada da özgür bırakmış.


## GIT'in Tarihsel Gelişimi

Linux'un mimarı	Linus Torvalds, çok sayıda kişi ile birlikte Linux çekirdeğini geliştirirken projenin yönetimi için o dönem piyasada bulunan BitKeeper adındaki versiyon kontrol sistemini tercih etmiş. Fakat BitKeeper'in telif haklarını elinde bulunduran kişi ile yaşanan yasal sorunlardan ötürü bu kullanımdan vazgeçilmiş.

O günlerde piyasada bulunan versiyon kontrol sistemlerinin hiçbiri aslında Torvalds'ın beklentilerini karşılamıyormuş.

Bu sebeple ihtiyaçlarına çözüm için kolları sıvayan Torvalds, piyasadaki sistemleri inceleyerek kendi versiyon kontrol sistemini yazmaya başlamış. İlk sürüm 2005 yılında piyasaya sürülmüş. 

Yayınlanmasından günümüze kadar geçen sürede ise GIT büyük bir pazar hacmine ulaştı.

## GIT Versiyon Kontrol Sistemi Nedir?

GIT nedir? diye sorduğunuzda versiyon kontrol sistemi cevabını almışsınızdır. İyi de **versiyon kontrol sistemi** nedir? 

Projemi geliştirirken *"proje", "projee", "projee_son", "projee_son_5"* şeklinde klasörlesem olmaz mı? GIT öğrenmeden olmaz mı? **- OLMAZ!**

Son sorudan başlayayım. Eğer profesyonel işler yapacaksanız GIT öğrenmek zorundasınız. Klasör isminin sonuna fazladan harfler, rakamlar ekleyerek proje geliştirmek ilerleyen süreçlerde başa çıkılabilecek bir yöntem değildir.

Versiyon Kontrol Sistemi Nedir? sorusuna gelirsek; Bir döküman (yazılım projesi, ofis belgesi vb.) üzerinde yaptığınız degişiklikleri adım adım izleyen, istediğinizde kayıt eden ve isterseniz bunu internet üzerindeki bir bilgisayarda veya yerel bir cihazda (respository / repo / depo) saklamanızı ve yönetmenizi sağlayan bir sistemdir. [[3]](https://medium.com/@furkanalaybeg/versiyon-kontrol-sistemi-nedir-2f47bb830064)

Versiyon Kontrol Sistemi yerine Kaynak Kod Yönetim Sistemi ifadesini de duymuş olabilirsiniz. İkisi de aynı şeyi ifade etmektedir.

## GIT Bize Ne Sağlar?

- Birden fazla yerde (dağıtık olarak) dosyalarınızı ve versiyon kontrol bilgilerinizi depolayabilirsiniz. Böylelikle cihaz bağımsız olarak dosyalarınıza erişebilirsiniz.
- **"commit"** yaparak SnapShot (anlık görüntü) özelliği ile istediğiniz zaman proje veya dosyaların o anki halini kayıt altına alabilirsiniz. Böylelikle ileride bir hata ile karşılaşırsanız herhangi bir zamandaki herhangi bir versiyona dönüş yapabilirsiniz.
- **SnapShot** alındıktan sonra değişiklik yapılan dosyaları görebilirsiniz.
- Takımların aynı projede beraber çalışmasına imkan verir. *Kim neyi düzenledi? Ne ekledi? Ne çıkarttı? Son değişiklik ne zaman yapıldı?* gibi bilgilere erişebilirsiniz. Bu sayede topluluk ile proje geliştirme süreçlerini kolaylaştırabilirisiniz.
- Projede verisyonlanmasını istemediğiniz dosyaları belirtebilirsiniz. *(node_modules, .mp4, .log, .env gibi)*

## GIT'i Anladım Fakat GitHub, GitLab, BitBucket Nedir?

En sade şekilde GIT versiyon kontrol sistemini kullanan depolama servisleri diyebiliriz.

### GitHub
Yazılımcılar için bir kod kütüphanesi ve bir çeşit sosyal medya ortamıdır.

Yazılım geliştiriciler projelerini halka açık veya özel olarak saklayabilir. Ücretli ve ücretsiz paket seçenekleri mevcuttur.

### GitLab
GitHub gibi bir GIT servisidir. Farklı olarak firmalara GitLab'ı kendi sunucularına kurma imkanı verildiği için genelde kurumsal tarafta kullanılır. GitLab ile firmalar kendi içerisinde GIT hizmetlerinden faydalanabilir.

### BitBucket
Genelde kişisel kullanıma yöneliktir. GitHub tarafındaki açık kaynak projeler ve sosyal medya ortamı burada gelişmemiştir.

Yukarıda açıkladığımız servisler haricinde GitKraken, SourceTree gibi irili ufaklı farklı servisler de mevcuttur.

GIT sistemini kullanmaya başladığınızda karşınıza daha önce aşina olmadığınız bazı tanımlar çıkacaktır. Temel bazı terimleri kısaca açıklayarak içeriğimizi bitirelim.

- `repository`: Kısa ismi ile repo. Kodlarınızın saklandığı depodur.
- `master`: Depodaki kararlı sürüme master denir.

- `branch`: GIT ağaç mantığı ile çalışır. Bir projeyi versiyonladığımızda master branch'i oluşur. Ana dosya (master) üzerinde değişklik yapmak hem tehlikelidir hem de çok kişi ile yapılan geliştirmelerde karışıklığa sebep olur. Kimin neyi değiştirdiğini takip etmek zorlaşır. Bu sebeple geliştiriciler master'den açılan dallar (branch) üzerinde geliştirmelerini yapar. Kullanıcılar branch (dallar) üzerinde yaptıkları geliştirmeleri master'a birleştirmesi için proje sahibine gönderirler.
- `merge`: branch'larda yapılan değişikliklerin master branch'ı ile birleştirilmesidir.
- `push`: Dosyaları repo'ya (depo) göndermek için kullanılır.
- `pull`: Depodan dosyaları çekmek için kullanılır.
- `.gitignore`: GIT'in takip etmesini istemediğimiz dosya ve klasörleri belirttiğimiz dökümandır. Mesela node_module klasörünün izlenmesine gerek yoktur ve .gitignore dökümanı içinde bunu belirtiriz.

GIT sisteminde kullanılan komutlara diğer yazımızdan ulaşabilirsiniz.
