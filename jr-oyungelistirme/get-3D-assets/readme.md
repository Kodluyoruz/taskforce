# 3D Asset'ler Edin

Bu eğitimde, Dijital İçerik Oluşturma (DCC) araçlarıyla yapılan veya Unity Asset Store'dan satın alınabilen asset'lerden bahsedeceğiz. Bir sonraki eğitimde sana lazım olacak asset'leri Asset Store'dan nasıl edineceğini adım adım açıklayacağız.
Bu eğitimi bitirdiğinde:

-	Gerçek zamanlı 3D üretimi destekleyen içerik oluşturma araçlarını açıklayabileceksin.
-	Bir web tarayıcısında Asset Store'u açabileceksin.
-	Asset Store'da arama yapabilecek ve yaptığın aramaları filtreleyebileceksin.
-	Bir Unity hesabı aracılığıyla Asset Store'daki bir asset'i otomatik olarak içe aktarabileceksin.

**Aşama 1: Genel Bakış**

Unity Engine, etkileşimli deneyimler oluşturmak için asset'lerin bir araya geldiği yerdir, ancak bu asset'lerin yapıldığı yer olmak zorunda değildir. Bu eğitimde 3D Dijital İçerik Oluşturma araçları (3D DCC'ler) kullanılarak 3D asset'lerin nasıl oluşturulduğunu ve bu araçlarla oluşturulan asset'leri Unity Asset Store'dan nasıl alabileceğini öğreneceksin. Bu öğrenme projesinin sonunda sana faydalı olacak bazı asset'leri nasıl içe aktaracağını göstereceğiz.

**Aşama 2: 3D DCC'ler nedir?**

[Maya](https://www.autodesk.com/products/maya/overview), [ZBrush](https://pixologic.com/) ve [Blender](https://www.blender.org/) gibi 3D Dijital İçerik Oluşturma araçları (DCC'ler), sanatçıların üç boyutlu ortamlar, modeller ve karakterler oluşturmasına olanak tanır.

Sanatçılar bu programları kullanarak 3D nesneleri **modelleme**, modelin hareket edebilmesi için rigging , modelin belirli bir şekilde hareket etmesi için **animasyon** yapıyorlar ve modele renk ve gölge vermek için **doku veriyorlar**. Bunu bir örneğini aşağıda görebilirsin. 

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/get-3D-assets/figures/Foundations_UnityRT3D_1.2.2.1_3d-model-prog.png)

Maya adlı 3D DCC'de bir karakterin gelişiminin ilerlemesini gösteren 4 görsel dizisi. İlk görselde, karakter t-pozunda bir ağ (mesh) olarak, kolları iki yanında dik olarak gösterilmektedir. İkinci görselde, t-pozundaki karakterin kemiklerine benzeyen ve modelin canlandırılmasını sağlayan karakter rig'i gösterilmektedir. Üçüncü görselde karakter, bir eli yerde ve bacakları bir duvarın üzerinden atlıyormuş gibi yana açılmış, dinamik bir pozda gri bir doku ile gösterilmektedir. Dördüncü görselde, karakter aynı dinamik pozda ama şimdi tam renkli dokulu bir kıyafetle gösteriliyor. 

DCC'lerde yapılan 3D asset'ler, oyun, simülasyon veya animasyon filmi gibi daha büyük bir projeye entegre edildikleri Unity gibi gerçek zamanlı bir motora getirilir. 

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/get-3D-assets/figures/Foundations_UnityRT3D_1.2.2.2_3d-model-in-Unity.png)

3D karakterin son hali, Unity'de beyaz düz bir yüzey üzerinde duruyor.

**Aşama 3: Unity'de 3D asset'ler için diğer kaynaklar**

[ProBuilder](https://unity3d.com/unity/features/worldbuilding/probuilder) adlı bir araç kullanarak Unity editörü içinde 3D sanat ve ortamlar oluşturabilirsin. Probuilder, özel DCC'lere kıyasla sınırlı işlevselliğe sahiptir, ancak harici bir düzenleme aracı açmadan 3D nesneleri hızlı bir şekilde modellemek isteyen sanatçılar için yararlıdır. 

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/get-3D-assets/figures/Foundations_UnityRT3D_1.2.2.3_probuilder.png)

Unity'de ProBuilder aracıyla oluşturulan bir 3D yapı görseli. Düz alt katı ve yükseltilmiş üst katı birbirine bağlayan spiral bir merdiven var. Üst katın bir bölümünün açık mavi renkle vurgulanmış olması, o sırada ProBuilder aracıyla düzenlenmekte olduğunu gösteriyor.

Herkesin bir 3D DCC öğrenecek zamanı veya bir 3D sanatçı işe alacak bütçesi yoktur, ancak bir çok çevrim içi kaynaktan yüksek kaliteli asset'ler edinmek mümkündür. Her amaç için 3D modeller sunan [CGTrader](https://www.cgtrader.com/) ve [Turbosquid](https://www.turbosquid.com/) gibi sitelere ek olarak [Unity Asset Store,](https://assetstore.unity.com/) Unity düşünülerek özel olarak tasarlanmış modeller için paha biçilmez bir kaynaktır.

Projelerine sanat katmak için kullanabileceğin kaynaklar hakkında daha fazla bilgi edinmek için aşağıdaki videoyu izle.

**Aşama 4: Alıştırma**

3D sanat yapmak, sabır ve özveri gerektiren zahmetli, zaman alan bir iştir. Bu işe dair fikir edinmek için, herhangi bir DCC aracıyla hazırlanmış bir "speed art" videosu izleyebilirsin. Speed art, sanat yapmaya verilen emeğin daha iyi anlaşılması için kişinin tüm sanatsal sürecinin hızlandırıldığı bir çevrim içi video içeriği türüdür. Bu videolardan birini izle ve şunu düşün: süreçle ilgili şaşırtıcı bir şey var mıydı? Gözlemlerini yorumlarda paylaş.

**Aşama 5: Asset Store'dan Asset Edin**

Unity Asset Store'u ziyaret ederek 3D asset'ler oluşturmak için gereken yetenek, zaman ve çabadan yararlanabilirsin. Asset Store, uzman asset üreticilerinin çalışmalarını paylaşabilecekleri veya satabilecekleri; gerçek zamanlı üreticilerin ise önceden tasarlanmış ve oluşturulmuş kullanıma hazır asset'leri bulabilecekleri bir platformdur. Bu asset'ler arasında 3D modeller, Materyaller, animasyonlar, yükleme ekranları, script'ler ve projen için ihtiyaç duyabileceğin diğer her şey bulunur.

1.Unity Asset Store'a git (bu bağlantı varsayılan tarayıcında açılacaktır) ve Unity ID'ni kullanarak giriş yap.
**İpucu**: Asset Store aracılığıyla edindiğin her şey Unity hesabına bağlanacak ve aynı Unity Kimliği ile oturum açtığın sürece Editör'de mevcut olacaktır.
2. Asset Store arama sekmesinde, mevcut Malzeme asset'lerini aramak için “materials” yaz.
3. Filtre panelinin Pricing (Fiyat) bölümünde Free Assets'i (Ücretsiz Asset'ler) seç.
4. Materyal içeren ücretsiz bir asset paketi seç. Yughues Free Ground Materials'ı öneririz. Kullanmakta olduğun Unity sürümüyle uyumlu asset'ler bulduğundan emin ol.
5. Asset indirme ve projeye aktarmayla ilgili eksiksiz ve güncel talimatlar için [**Import assets from the Asset Store**](https://learn.unity.com/tutorial/project-setup-processes#60ed7a86edbc2a002520b6f4) (Asset Store'da asset'leri içe aktarma) bölümüne [bakabilirsin.](https://learn.unity.com/tutorial/project-setup-processes#60ed7a86edbc2a002520b6f4)
6. Materyallerden birini seç ve zemin platformuna sürükle. Materyal artık GameObject'ine eklendi.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/get-3D-assets/figures/3.6.11.png)

 Materyal uygulanmış GameObjects gösteren Sahne görünümü

**Aşama 6: Sonraki adımlar**

Bu eğitimde, Unity ekosistemindeki Asset Store'un rolünü görmüş oldun ve ücretsiz asset'leri indirip içe aktardın. Şimdi ise bu asset'leri veya Asset Store'da bulabileceğin başka asset'leri kendi başına bir meydan okuma görevini tamamlamak için kullanmanı öneririz.



