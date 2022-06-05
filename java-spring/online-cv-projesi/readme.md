**Bütün projelerde:**

- Ön yüz olarak (Thymeleaf,React,Angular) herhangi bir arayüzle yapabilirsiniz.
- Aşağıdaki proje fikirlerinde hepsinde olmasını istediğimiz kurallar:
- Projelerde Roller önem arz etmektedir. Her projede mutlaka en az 2 rol olmalı örneğin: Admin,User v.s
- Veriler Mutlaka Database kaydedilmelidir. (Mysql-Postgresql-H2Database)
- Projelerde mutlaka servisler yazılması gerekiyor.
- Spring Boot 22 videodan itibaren Katmanlı mimari yapısı olacak şekilde projelerimizi yapabiliriz ve kullanılan librariesler kullanmak lombok,swagger-ui v.s

**FrontEnd için kendimiz tasarım yapmamız beklenmektedir**

- Html5
- Css3
- Js(React veya Angular) bir tanesini seçerek devam edebiliriz benim size tavsiyem React ilerlemeniz daha revaçta.
- Jquery
- Bootstrap

**Backend**

- OOP kullanmak çok önemli(interface,abstract,inheritance), Stream API, Optional, enum kullanılmalıdır.

**Projelerde yapmamız gerekenler:**

- Design pattern kullanmalıyız.
- Clean code mantığında ilerlemeliyiz.
- S.O.L.I.D prensibine uygun kodlar yazmalıyız.
- Projede UML diyagram yapmalıyız.
- Database EER diyagram yapmalıyız.
- Loglama tutmak.
- Şifreler maskelenmelidir.
- Sistemdeki kullanıcılar için Hem database kaydetmek ve io(input/output) dosya kaydetmek.
- Paging yapılabilmeli(Sayfalama).


**Online CV Projesi:** 

Not: Aşağıdaki gereksinimlere göre ui(thymeleaf,react veya angular sayfa yapalım)
- Roller: Admin(insan kaynakları) user(kullanıcı) 
- Database relation: admin(1) - user (N) ==> Spring Data(@OneToMany @ManyToOne ilişki üzerinde olmalıdır)
- Register/Login: Eğer kullanıcı üye değilse üye olması gerekiyor şifreler database maskelenmiş şekilde kaydedilmelidir. (Spring Security)
- Tanımlama:Müşteri şifresini girerek sisteme giriş yapar (Login için 3 giriş hakkı vardır yoksa bloke olur)
- İnsan kaynakları :Kullacılar adı,soyadı,telefon no,iş deneyimi,çalışma deneyimi v.s bilgilerini alacağı bir ekran olamlı
- İnsan kaynakları: Kullanıcı ekranında sisteme kayıt olan kişilerin bilgilerine erişim sağlamalı ve database filtreleme uygulama yapabilmeli örneğin: askerliği yapmış , 5 yıllık deneyime sahip kişiler ara dediğinde uygun kişiler gelmelidir.

Kullanıcı sisteme bilgileri verirken: kullanıcı adı,soyadı, deneyim, CV ne zamana kadar sistemde saklanabilir (KVKK) v.b bilgiler olmalıdır.

Loglama: Yapılan her bir işlem için mutlaka loglama tutmak gerekiyor.

**Dikkat:**
- OOP kullanmak çok önemli(interface,abstract,inheritance) , Stream API,Optional,enum kullanılmalıdır.
- Design pattern kullanmalıyız.
- Clean code mantığında ilerlemeliyiz
- S.O.L.I.D prensibine uygun kodlar yazmalıyız.










