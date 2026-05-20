# Browsers (Tarayıcılar)

Masaüstünde ve mobil cihazlarımızda birçok tarayıcı var.

Kullanıcıların hangi tarayıcıları tercih ettiğine baktığımızda büyük yüzdeyi **Chrome** alıyor. Bu bilgi bizim için önemli çünkü kodlama yaparken neredeyse pek çok standart aynı olsa da zaman zaman bazı komutlarda tarayıcı davranışları değişiklik gösteriyor ve bu durumları ekstra komutlarla düzenlememiz gerekebiliyor.

**Peki tarayıcılar ne işe yarar?**

Tarayıcılar kullanıcının seçtiği web kaynağını görüntülemek için sunucuya istek yapar ve gelen cevabı kullanıcıya gösterir. Ana görevi budur. Yapılan isteğin cevabı genelde HTML içeriktir ama PDF, görüntü, video gibi farklı içerik tipleri de olabilir. Kaynağın tam konumu kullanıcı tarafından **URI** *(Uniform Resource Identifier)* kullanılarak belirtilir. 

Tarayıcılar yorumlama ve HTML dosya görüntülemede belirli standartlara uyar. Bu standartlar **W3C** tarafından belirlenir. Tarayıcıların kullanıcı arayüzlerinde belirli bir standart olmamasına rağmen genel kullanıcı alışkanlıklarını bozmamak ve de belirli bilgilere ihtiyaç tüm tarayıcılarda ortak olduğu için benzer özellikler içerirler.

**Örneğin:**

Hepsinde adres çubuğu vardır, sayfa yenileme ve işlemin durdurulması için butonlar vardır.

Tarayıcıların ana işlevleri:

- **Kullanıcı Arayüzü:** Ekranda gördüğümüz butonlar, araç çubukları gibi elemanları içeren arayüz.

- **Tarayıcı Motoru:** Rendering motoru ve kullanıcı arayüzü arasında sıraya koyma aksiyonlarını denetler.

- **Rendering Motoru:** Görüntüleme için istek yapılmış içeriği görüntülemeden sorumludur.

**Örneğin:** Bir HTML içeriği için istek yapıldı, gelen içerikte HTML ve CSS çözümlenir ve ekranda görüntülenir.

- **Ağ İletişimi  (Networking):** HTTP istekleri gibi network istekleri için kullanılır. Kullanılan platformdan bağımsız olarak farklı platformlar için farklı uygulamalar kullanılarak çözümler sunulur.

- **Kullanıcı Arayüzü (UI-User Interface)** **Backend:** Combobox ve pencereler gibi basit grafiksel araçları çizmek için kullanılır.  İşletim sistemi kullanıcı arayüz metodları kullanır. Böylelikle platform bağımsız genel bir arayüz ortaya çıkar.

- **JavaScript Yorumlayıcı:** JavaScript kodları ayrıştırılır ve çalıştırılır.

- **Veri Belleği (Data Storage):** Süreklilik (persistence) katmanıdır. Tarayıcı verilerin hepsini lokal olarak depolamak isteyebilir, çerezler (cookies) bu tür verilere örnektir. IndexedDB, localStorage, WebSQL ve FileSystem gibi farklı depolama sistemlerini de tarayıcılar destekler.

Chrome gibi tarayıcılar her sekmede bir tane olacak şekilde birden fazla rendering motoru çalıştırırlar. Her sekme ayrı işlemlerde çalışır. Çok fazla sekme ile çalıştığınızda RAM'inizin şişme sebebi tam olarak budur.

**Tarayıcıların ana bileşenlerinde akış şeması aşağıdaki gibidir:**

![tarayici_bilesenler](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/Browsers/figures/tarayici_bilesenler.PNG)

Rendering motorunun görevi istek yapılmış içeriği ekranda görüntülemektir. Görevinden dolayı tarayıcılar için oldukça kritik bir bileşendir. Varsayılan olarak *XML* ve *HTML* dokümanlarını görüntüler ama eklenti ve uzantılar sayesinde diğer dokümanları da görüntüleyebilir. 

**Örneğin:** 

Pdf dokümanı varsayılan olarak görüntülenmez ama pdf eklentisi ile görüntülenebilir. 

**Farklı tarayıcılar farklı rendering motorları kullanır.**

\- Internet Explorer **Trident**,

\- Firefox **Gecko**,

\- Safari **WebKit**,

\- Chrome ve Opera **Blink**

kullanıyorlar. WebKit, ilk zamanlarında Linux için oluşturulmuş açık kaynak bir rendering motorudur, sonradan Apple tarafından Mac ve Windows desteklemesi için değiştirilmiştir.

![render_motoru_akis](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/Browsers/figures/render_motoru_akis.PNG)

Rendering motoru HTML belgesini aldığında çözümlemeye başlar, belgedeki elementleri içerik ağacı (content tree) olarak adlandırılan ağaçta yer alan DOM  düğümlerine çevirir. 

Motor aynı zamanda hem harici CSS dosyalarını hem de satır içi style elemanlarını da ayrıştırır. HTML'de bulunan görsel talimatlar ile diğer tasarım bilgileri başka bir ağaç olan render ağacını oluşturur. 

**Render ağacı** boyut ve renk gibi görsel özellikleri içeren dikdörtgenler bulundurur. Bu dikdörtgenler ekranda görünmek üzere düzgün sırada bulunurlar.

Render ağacı oluşturduktan sonra düzenleme (layout) işlemi başlar. Bu işlemde düğümdeki elemanlara ekranda nerede görüntüleneceklerine dair tam koordinatlar verilir. Sonraki aşama ise boyama (painting) aşamasıdır. Render ağacındaki her düğüm işlenerek UI (Kullanıcı Arayüzü) backend katmanı kullanılarak boyama işlemi yapılır.

Tüm bu süreç kademeli olarak gerçekleşir. Tarayıcılar daha iyi kullanıcı deneyimi sunmak için olabildiğince hızlı ekrana getirmeye çalışırlar. Bir adım tüm içerik için tamamen bitince diğer adım başlar gibi sıralı bir süreç olduğunu düşünmemek gerekir. İçerik parçalara ayrılır ve bu parçalar için işlem gerçekleşir. 

**Örneğin:** Sayfa gelirken bir anda bütün elemenları görüntülenmesi yerine ilk önce yazıların sonra görsellerin geldiğine şahit olmuşsunuzdur. Bunun sebebi yazının işlemlerden çok daha hızlı geçip süreç bitince de ekrana yansıtılması görseller için ise sürecin tamamlanmamış olmasındandır.

## Kaynaklar:

* https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/#Parser_Lexer_combination
