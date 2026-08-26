# Unity Editör'ü Keşfedin

Bu eğitimde, şunları gözden geçireceksiniz:
- Unity Editör arayüzü
- Unity'de sahnelerin rolü
- Bir sahne içerisinde gezinme

**Adım 1: Genel Bakış**

Bu eğitim, Unity Editor'ün temellerinin bir incelemesi ve referansıdır. Sahnelerinizi ve assetlerinizi yönetmek ve Sahne görünümünde gezinmek için kullanabileceğiniz pencerelerin, araçların ve tuşların hatırlatıcısı olarak bu öğreticiyi el altında bulundurabilirsiniz.

A**dım 1: Unity Editör’e Giriş**

Unity Editör’ün varsayılan düzeni, temel etkinlikleri tamamlamanıza yardımcı olmak için konumlandırmanız gereken en önemli pencerelerle organize edilmiştir. Bunları gözden geçirerek başlayalım:

**Unity Editör Arayüzü**

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/explore-the-unity-editor/figures/Foundations_CwU_1.5.3.0UnityEditorCallouts.png)
Beş ana alan için açıklamalar içeren Unity Editor arayüzü

Temel Editör arayüzünün beş temel alanı vardır.

 **Sahne görünümü ve Oyun görünümü**

Unity Editör’ün varsayılan düzeninin merkezinde Sahne görünümü bulunur. Bu, yarattığınız dünyaya açılan interaktif pencerenizdir. Nesneleri manipüle etmek ve onları çeşitli açılardan görüntülemek için Sahne görünümünü kullanabilirsiniz.

Varsayılan düzende, Oyun görünümü de bu alanda yer alır. Oyununuzu test etmek için Oyun görünümünü kullanabilirsiniz.

**Hiyerarşi penceresi**

Hiyerarşi, projenizdeki her şeyi organize edebileceğiniz yerdir. Organize edebileceğini şeylerin her birine **GameObjects** denir.

Projenize Sahne görünümünde bir GameObject eklerseniz, Hiyerarşi içerisinde listelenir. Sahneden bir GameObject silerseniz, sildiğiniz GameObject Hiyerarşi listesinde yer almayacaktır. 

**Proje penceresi**

Proje penceresi, kullansanız da kullanmasanız da projenizde kullanılabilir olarak yer alan tüm dosyaları (assetleri) bulabileceğiniz yerdir.

Proje penceresi, klasörler halinde düzenlenmiş bir dosya gezgini gibi çalışır. Assetleri sahneye eklemek için doğrudan Proje penceresinden Sahne görünümüne sürükleyebilirsiniz.

Proje ve Hiyerarşi pencereleri arasındaki fark şudur: Hiyerarşi, mevcut sahnedeki tüm GameObject'leri içerir. Proje penceresi ise, projenizin bütünü için kullanılabilen tüm assetleri içerir.

**Denetçi penceresi**

**Denetçi**, GameObjects hakkında ayrıntılı bilgileri bulacağınız ve yapılandıracağınız yerdir.

**Araç Çubuğu**

Araç Çubuğu her zaman Unity Editor arayüzünün en üstündedir. GameObjects'i seçmek ve ayarlamak, sahnedeki bakış açınızı değiştirmek ve Play Mode'u başlatmak ve durdurmak için araç çubuğu butonlarını kullanabilirsiniz.

**Adım 3: Editör’ün düzen seçeneklerini gözden geçirin**

Editör'deki pencerelerin yerlerini değiştirmek için Araç Çubuğu’ndaki **Düzen** menüsünü kullanabilirsiniz. Hazırda bulunan birkaç düzen bulunmakla birlikte kendi düzenlerinizi de oluşturup kaydedebilirsiniz.

Editör’ün en iyi düzeninin ne olduğu, sizin yaptığınız çalışmaya ve kendi kişisel tercihlerinize bağlıdır. Örneğin:
- Bileşenleri yapılandırmak için çok zaman harcıyorsanız, Denetçi penceresini Hiyerarşi’nin yanına yerleştirmek isteyebilirsiniz.
- Çok fazla çevre tasarımı yapıyorsanız, sahne görünümünü mümkün olduğunca büyük yapmak isteyebilirsiniz.
- Kullanıcı arayüzünü düzenliyorsanız, Oyun görünümünün görünür olduğundan emin olmak isteyebilirsiniz.
Unity'yi öğrenirken varsayılan düzeni kullanmanızı öneririz.

**Adım 4: Projenizde sahneleri kullanma**

Unity Editor'daki projeler **sahneler** halinde düzenlenmiştir. Sahneler, yarattığınız deneyimdeki her şey için kapsayıcıdır.

Sahneler hakkında düşünmenin bir yolu, ayrık deneyimler olarak düşünmektir. Örneğin, bir oyundaki her seviye ayrı bir sahne olabilir, ve oyunun ana menüsü başka bir sahne olabilir.

Bir Unity projesi, kapsamına ve karmaşıklığına bağlı olarak tek bir sahneye ya da yüzden fazla sahneye sahip olabilir. Unity'deki bir projenin en az bir sahnesi olması dışında, bir Unity projesinin sahneler halinde nasıl organize etmeniz gerektiğine dair katı kurallar bulunmamaktadır.

Projedeki sahneleri gözden geçirme

Bir Unity projesindeki sahneler, genellikle Sahneler adlı bir klasörde saklanır. Unity Learn'de sağladığımız Unity projelerinde genellikle önceden oluşturulmuş bu klasör bulunur. Yine de sıfırdan bir proje oluşturuyorsanız, siz oluşturana kadar bu klasör var olmayacaktır.

Bir Unity projesindeki sahneleri incelemek için:
- Proje penceresinde, Sahneler klasörünü bulmak için gezinme panelini veya arama çubuğunu kullanın.
- Bir sahneyi açmak için çift tıklayın. Hiyerarşi ve Sahne görünümünde o sahnenin içeriğini göreceksiniz.

**Adım 5: Sahnede gezinme alıştırması yapın**

Unity Editor'da çalışırken, Sahne görünümünde gezinmek çok önemlidir. Bu pencerede gezinmeyibir drone kamera kullanmak gibi düşünebilirsiniz – GameObject'lerinizi herhangi bir açıdan veya mesafeden incelemenize olanak tanır.

Pratik yaparak, kolaylıkla gezinmeyi öğrenebilirsiniz. Ayrıca Sahne görünümünü yapılandırmak için kullanabileceğiniz daha genel ayarlar da bulunmaktadır.

Temel bilgileri hızlıca gözden geçirelim:

- **Kaydır**: Araç Çubuğu’ndaki **El** aracını seçin ve görünümünüzü taşımak için Sahne görünümünün üzerinde tıklayıp sürükleyin.

- **Yakınlaştırma**: Yakınlaştırmak için **Alt** (Windows) veya **Option** (macOS) tuşuna basılı tutarak, Sahne görünümüne sağ tıklayın ve sürükleyin.

- **Yörünge**: Geçerli pivot noktasının etrafında yörüngeye dönmek için **Alt** (Windows) veya Option (macOS) tuşuna basılı tutarak sol tıklayın ve sürükleyin. **Not**: Bu seçenek 2D modunda kullanılamaz.

- **Odak** (Çerçeve Seçimi): Bir GameObject seçildiğinde, görünümünüzü o GameObject'e odaklamak için imlecinizle Sahne görünümündeki** F'yi** seçin. **Not**: İmleciniz Sahne görünümünde değilse, Çerçeve Seçimi çalışmayacaktır.

Uçuş Geçişi modu

Birçok oyunda yaygın olarak bulunan, birinci şahıs etrafında uçarak Sahne görünümünde gezinmek için **Uçuş Geçişi modunu** kullanabilirsiniz. Bunu yapmak için:

- Fareye sağ tıklayın ve basılı tutun.
- Görünümü sola/sağa/ileri/geriye taşımak için **WASD**'yi kullanın.
- Görünümü yukarı ve aşağı hareket ettirmek için **Q** ve **E** tuşlarını kullanın.
- Daha hızlı hareket etmek için **Shift**'i seçip basılı tutun.

**Not**: Uçuş Geçişi modu 2D modunda kullanılamaz. Bunun yerine, imleci Sahne görünümü çevresinde hareket ettirirken farenin sağına basılı tutun.

Daha fazla rehberlik için [Unity Manual'daki tam bir genel bakışı](https://docs.unity3d.com/Manual/SceneViewNavigation.html) inceleyebilirsiniz.

Unity’de dönüştürme ve sahne gezinme araçlarının etkin kullanımı, GameObject'lerinizi 3D alanda verimli bir şekilde konumlandırmanıza, ölçeklendirmenize ve görüntülemenize olanak tanıyan önemli bir beceridir. Bu araçlar ve biraz alıştırma ile istediğiniz sonuçları hızlı ve kolay bir şekilde elde etmek için alışkanlıklar geliştirebilirsiniz.

**Not**: Pratik yapmak için GameObjects olmayan bir sahnedeyseniz, Hiyerarşi penceresine sağ tıklayın ve** 3D Obje > Küp'ü** seçin.

Araç çubukları için klavye kısayolları, standart bir klavyenin sol üst köşesindeki QWERTY tuşlarına karşılık gelir. Bu tuşları kullanarak araçlar arasında hızlıca geçiş yapabilir ve farenizi Sahne görünümünde tutabilirsiniz.

![figures](https://github.com/Kodluyoruz/taskforce/blob/main/unity-essentials/explore-the-unity-editor/figures/B.2.1_img10.png?raw=true)

Her buton için klavye kısayollarını belirtmek için QWERTY harfleriyle başlıklandırılmış Araç Çubuğu

**Q**: El aracı - Görünümünüzü kaydırmak için
**W**: Taşıma aracı - Konumu seçmek ve değiştirmek için 
**E**: Döndürme aracı - Seçmek ve döndürmek için
**R**: Ölçek aracı - Boyutu seçmek ve değiştirmek için 
**T**: Dikdörtgen Dönüştürme aracı - 2D'de ölçeklendirmek için 
**Y**: Dönüştürme aracı - Tek bir Gizmo ile taşımak, ölçeklemek ve döndürmek için 

Dönüştürme araçlarının her biri için, GameObject'i belirli her eksen boyunca manipüle etmenize izin veren bir Gizmo görünür. Bu kontrolleri değiştirdikçe, Dönüştürme Bileşeni’ndeki değerler de buna göre değişir.

![figures](https://github.com/Kodluyoruz/taskforce/blob/main/unity-essentials/explore-the-unity-editor/figures/3.1.11.png?raw=true)

Seçilen dönüştürme aracına göre görünen Gizmo'ları Taşı, Döndür ve Ölçeklendir

Sahne görünümünde gezinmek ve GameObjects'i verimli bir şekilde manipüle etmek için kendi sisteminizi keşfedeceksiniz. Örneğin sizin sisteminiz, araçları değiştirmek için fare tutmadığınız elinizin parmaklarını QWER tuşlarına dayamak, sahne görüşünüzü yörüngeye oturtmak için baş parmağınızı ALT tuşuna dayamak ve gerektiğinde bir GameObject'e odaklanmak için işaret parmağınızı F tuşuna hareket ettirmek olabilir. 





