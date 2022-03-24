**Neden Spring Öğrenmeliyiz?**

- Az kod çok iş mantığını benimsek
- IOC olması 
- Yönetim , kod maliyeti daha kolay
- Modüler olması büyük avantaj
- Loose Coupling sağlar .
- Kurumsal projelerimizi daha rahat yazabiliriz.
- Proje ne kadar büyürse büyüsün yönetmesi kolaylaştırır. 

Modüllerinden;

1-) Core container:Spring Frameworkun temel yapı taşını oluşturur. Spring Frameworkun en önemli özelliği olan IOC(Inversion Of Controller ve DI(dependency Injection) özelliklerini sağlar.
IOC: kontrolu yazılımcı yönetiminden alıp Spring Framework'e devretmesi durumudur. ve tüm yönetim Spring'e olması durumudur.
IOC (Factory Pattern,Strategy pattern,Service Locator Pattern v.s patternleri kullanır
DI: classlar arasında bağımlılığı en aza indirgemek olarak diyebiliriz.

2-) AOP: Aspect Oriented Programming): 
Güvenlik,Loglama,transaction işlerimizde kullanıyoruz.

3-) Web: MVC
Web uygulamalar geliştirmek için kullanıyoruz.
MVC(Model View Controller) kullanır
Model: Veri katmanı 
View: görünüm katmanı
Controller: Model ile View arasındaki bağlantıyı sağlar.

4-)Data Access
Bu modülde database için gerekli işlemler bulunmaktadır. 
JDBC,ORM,JMS,Transaction

5-) Test 
Projemizde jUnit ,TestNG yazmak için kullanıyoruz.
