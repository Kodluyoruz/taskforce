# Restful Servisler

**Rest** 2000 yılında bir sunucu ve istemci arasında hızlı ve kolay iletişimi sağlamak amacıyla ortaya cıkmış bir servis yapısıdır. Http protokolü ile çalışır. Açılımı **R**epresentational **S**tate **T**ransfer dır. Servis yönelimli yani SOA mimarileriyle geliştirilen yazılımlarda tercih edilir. Rest standartlarına göre yazılmış web servislere **RestFul** servisler denir.

Rest yapısıyla çalışan servislerle Json, Xml ve Html formatında veriler taşınabilir. Http protokolüyle çalışıyor olması basit ve hızlı bir iletişim sunar.

- **Resource**

  Rest servislerin en önemli yapı taşıyıcı resource'lardır. Resource'ları entity, dosya gibi her hangi bir veri gibi düşünebilirsiniz. Bu verilere erişim için de URI(**U**niform **R**esource **I**dentifiers) kullanılır. Kaynaklar üzerinde işlemleri de Http Metotları ile yaparız. (GET,PUT,POST,DELETE)

  **Örnek URI:**
  /products/25

  URI'ler sunucunun url i ile birleştirilir ve Http metotlarından biri kullanılarak istemci tarafından sunucuya istekte bulunulur. Sunucu ise bu isteğe istinaden bir response yani cevap döner. Bu şekilde iletişim kurulmuş olur.

* **Stateless**

  Restful servislerin bir diğer önemli özelliği durum bilgisi saklamamasıdır. Yani sunucu tarafından istemci ile alakalı bir bilgi tutulmaz. Sunucu kendisine gelecek olan istemcilerden habersizdir. Peki sunucu gelen istemcinin yetkili bir client olup olmadığını nasıl anlar diye düşünebilirsiniz. Her turlu durum client tarafından saklanır. Sunucunun response verebilmesi istemci request içerisinde gerekli bilgileri gönderir. Bu da network'te taşınması gereken paketin boyutunu arttırır. Ayrıca sunucunun kendini koruyabilmesi için extra validasyon yapması gerekir. Çünlü kendisine her türlü client'dan her türlü istek gelebilir. Bu extra kontroller sunucuya yük getirebilir.

## **RestFull Servislerde Http Metotlarının Kullanımı**

[Http Protokolü]() bölümümüzde Http metotlarından bahsetmiştik. Restful servsilerle kullanılırken dikkat edilmesi gereken önemli noktalara değinelim.

Http metotlarından GET, PUT, DELETE **idempotent** yapıda iken POST idempotent değildir.
Peki nedir bu **idempotent**? Birden fazla defa çağırılmasında sakınca olmayan, nihai sonucu değiştirmeyecek çağrımlara idempotent yapıda diyebiliriz. Örneğin bir Http Get metodunu üst üste istediğiniz kadar çağırabilirsiniz. Bu sonucu değiştiremeyecektir. Yada Http Delete metodunu bir kere çağırdığınızda veriyi sildiğinizi düşünelim. 2. yada 3. çağrımlarda veride bir değişiklik olmaz. Zaten silinmiştir.

Günün sonunda **POST** ile güncelleme de silme de yapabilirsiniz. Peki neden **DELETE** ve **PUT** kullanmalıyz? Rest Http metotları ile veriye anlamlı ve doğru şekilde ulaşmayı amaçlar. Bir request çağrısına baktığınızda onun ne iş yaptığını kolayca anlayabilmelisiniz. Http metotlarının doğru yerde kullanılması bize okunabilirlik gücünü getirir.

Şimdi bu bilgiler ışığında **PUT** ve **POST** metotlarına bakalım. Hangi durumda **POST** hangi durumda **PUT** kullanacağımıza karar verme noktasında genel olarak bir karmaşa yaşanıyor. **PUT** ve **POST** arasındaki en büyük fark **idempotent**'dir. Birden fazla çağrılması veri üzerinde soruna neden olmayacak çağrımlarınız için PUT kullanabilirsiniz. **POST** ise, tekrar tekrar çağrıldığında veri tutarlılığını bozabilecek çağrılardır. Biz sunucu tarafında bunu istediğimiz gibi yönetebiliriz ama tarayıcı için put ve post farklı çağrılardır. Ve üst üste post yapılmasına neden olabilecek için tarayıcıların kendi önlemleri vardır. Dolayısıyla kurallara uygun şekilde kullanmak en doğru yaklaşımdır.

**Okuma Önerisi**: Restful servislerle ilgili daha detaylı bilgi için [tıklayınız.](https://denizirgin.com/rest-ve-restful-web-servis-kavram%C4%B1-30bc4400b9e0)

**Inceleme Önerisi:** Durum kodlarına detaylı bakmak için [tıklayınız.](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
