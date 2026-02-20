# DNS (Domain Name System)

Bilgisayarlar veya diğer cihazlar iletişim kurmak için **IP** adres kullanırlar. Bu her biri cihaz için **kimlik** gibidir. Veri nereye gideceğini elindeki adres ile bilir. Şu ana kadar defalarca Google, Youtube gibi bir sürü web sitesini ziyaret etmişsinizdir. 

**Peki kaç tanesinin IP adresini biliyorsunuz ?**

Muhtemelen bilmiyorsunuz, biliyorsanız da çok azını. *IP adreslerini bilmeden bu sitelere nasıl erişiyoruz peki?* Çünkü öğrendiklerimize göre internette her şey aslında veri almak/vermekten ibaret ve bu da IP gibi protokoller aracılığı ile oluyor. 

Evet, belki IP adreslerini bilmiyoruz ama ulaşmak istediğimiz web sitelerinin **alan adlarını**  (domain name) biliyoruz.

**Örneğin:**

[www.google.com](http://www.google.com/) yazdığımızda IP adresini bilmemize gerek yok. Bizim bilmemize gerek yok ama tarayıcı **halen IP adrese ihtiyaç duyuyor.** Bunun için de DNS sunucuları var. Biz alan adı ile bir web sayfasına erişmek istediğimizde arka planda bu sunuculara gidip IP adreslerini soruyoruz. 

![URL](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/DNS/figures/URL.png)

DNS sunucularına sorarken hızlı olmak için belli bir sıra ile sorulur. Öncelikle **lokalde** veya **ağda** ön bellekte (cache) bu alan adı daha önce saklanmış mı diye bakılıyor. Daha önce bu web sitesine girmişsek ilk önce saklanan IP adrese istek atılır. Eğer başarılı değilse tekrardan doğru IP'ye ulaşmak için **root DNS** sunucularında aranır. 

Her **TLD** *(Top Level Domain-Üst Düzey alan Adı)* ,ki bunlar `.com,.me,.io` gibidir, kendi sunucusuna sahiptir. 

**Root DNS** ise alan adı geldiğinde hangi **TLD**'nin sorumlu olduğunu bulmaktan sorumludur. Root hangi **TLD** sunucusuna gidileceğini söyledikten sonra **TLD** sunucusunda aradığımız bilgiyi nerede bulabileceğimize yönelik tekrardan yönlendirme olur. IP bilgisine erişilir ve iletişim sağlanır:

![Root_DNS](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/DNS/figures/ROOT_DNS.png)

## Kaynaklar:

- https://www.quora.com/What-is-a-TLD
- https://www.netnod.se/i-root/what-are-root-name-servers
- https://roadmap.sh/guides/dns-in-one-picture
- https://howdns.works/
