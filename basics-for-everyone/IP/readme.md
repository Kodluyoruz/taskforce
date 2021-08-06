# IP (Internet Protocol)

Bir noktadan diğer noktaya veri iletişimini sağlarken verinin yolculuğunu sağlayan iletişim sistemine network denir. 

**Peki veri nereden nereye gideceğini nasıl bilir?**

Eğer sadece iki cihazı kablo ile bağlasaydık ve veri iletişimi sağlasaydık, verinin kafası karışmazdı ve karşı bilgisayara giderdi. Eğer sistemde verinin çıkacağı bilgisayara başka bir bilgisayar daha bağlasaydık bu sefer hangisine gideceğini nasıl bilecekti?

![](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/IP/figures/hangi_yon.PNG)

**Veri iletişiminin sağlandığı ağda çok fazla cihaz olabilir.** Hepsini fiziksel olarak bağlamamıza gerek yoktur. **Yönlendiriciler(routers)** üzerinden iletişim sağlanır. 

Yönlendiriciler ağdaki karmaşıklığı gidererek ağdaki iletişim için yardımcı olurlar. İnternet büyük bir ağdır ve milyonlarca cihaz bu ağ içinde iletişimdedir. İnternete bağlanırken bir yönlendiriciye bağlanırız ve ulaşmak istediğimiz noktaya kadar yönlendiriciler bizi adım adım götürür. *Tıpkı adres sorduğumuz insanlar gibi bize yardımcı olurlar!*

![internette_iletisim](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/IP/figures/iletisim.PNG)

**Yönlendiriciler** ağ üzerindeki diğer yönlendiricilere veya cihazlara yönlendirme yaparken bir tablo kullanır. Bu gitmek istenilen adrese göre "sağdan git soldan git" diye adres tarif etmek gibidir.

***Aşağıdaki resimde yönlendirme nasıl yapılır basitçe görmek için bir şema var.***

 Burada okların yönü gidilecek tarafı belirtiyor. Üstündeki sayılar ise hedefin adresine göre kara vermemiz için yönlendirme bilgileri, eğer `!` işareti görüyorsak da yanındaki sayı hariç diğerleri kabul demek. 

**Kareler yönlendiricileri, daireler ise cihazları temsil ediyor.**



![network_router](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/IP/figures/network_router_mantigi.PNG)



**Şimdi 1 numaralı cihazdan veriyi 5 numaralı cihaza göndermeye çalışalım.** 

**1**'deki çıkış oku bize diyor ki "Eğer hedefin **1** değilse yönlendiriciye gidebilirsin". Hedefimiz **5** numaralı cihaza gitmek olduğu için kolaylıkla yönlendiriciye gidiyoruz. 

Yönlendiricide iki seçenek bizi bekliyor ve bize "Hedefin **2**'ye gitmek ise yukarıya **3,4,5,6** numaralı cihazlardan birine gitmek ise aşağıya yönlen." diyor. Aşağıdaki ikinci yönlendiriciye yöneliyoruz. Halen hedefimize ulaşamadık yönlendirici bu sefer daha fazla seçeneğe sahip. "Eğer **3**'e gitmek istersen yukarı, **6**'ya gitmek istersen aşağıdaki **6** numaralı cihaza, **4** veya **5** numaralı cihazlardan birine gitmek istersen aşağıdaki diğer yönlendiriciye git" diyor. **3.** yönlendiriciye gittiğimizde ise "**5**'e gitmek istersen **5** numaralı cihaza yönlenebilirsin."  diyor ve hedefimize ulaşıyoruz.

İnternet yukarıdaki şemadan daha karmaşık ama basit hatlarıyla bakıldığında aynı mantığın olduğu görebiliriz. Yukarıda cihazlara net numaralar vermiştik, **internette de IP adresler vardır.** 2 tane IP versiyonu vardır: IPv4 ve IPv6. 

`Ipv4 Adres Örneği: 192.168.1.152`

`IPv6 Adres Örneği:4ggr:1925:5656:7:600:t4tt:tc54:98vt `

*Bilgisayarınızın IP adresini öğrenmek isterseniz bir komut satırı açın (Windows için: Windows+R tuşuna basıp gelen ekranda `cmd` yazabilirsiniz). Komut satırında `ipconfig` yazarsanız çıkan sonuçta IP adresinizi öğrenebilirsiniz.*

Normalde cihazları gerçekten birbirine bağlamış olsak ve yönlendirici kullanmasak *daha hızlı* iletişim sağlayabiliriz. *Ama direkt bağlamak hem maliyetli hem de bakımı zor.* **IP** ile veri gönderirken veri paketlere bölünür. Paketlerin kaybolması gibi durumlarda iletişim kopar. Aşırı fazla paket olması da yönlendiricilerde trafik olmasına yol açabilir. Bu sebeple yavaşlık olur. Ama veriyi tek parça halinde gönderirsek de fazla maliyetlidir.

Yönlendirici ağda iki veya daha fazla seçeneği olduğunda **trafik kontrolü** yapılabilir. Trafik durumuna göre farklı rotalarda önererek veri paketlerinin daha hızlı gitmesini sağlayabilir. Buna **connectionless** *(bağlantı gerektirmeyen)* kavramı denilir. Veriler bir bilgisayardan diğerine belirli bir akış kontrolü olmadan farklı rotalar ile gidebilir.

IP ile veri iletiminin %100 gerçekleşeceğini garanti edemeyiz. Aktarım sırasında hatalar meydana gelirse iletişim gerçekleşmez. Bu yüzden *güvenilmez(unreliable)* bir protokoldür. **TCP** gibi güvenilir bir protokol ile kullanıldığında güvenilir hale gelir.

## Kaynaklar:
- https://www.cloudflare.com/learning/network-layer/what-is-a-network-switch/
- https://www.wpbeginner.com/glossary/ip-address/
- https://www.tutorialspoint.com/internet_technologies/internet_protocols.htm
