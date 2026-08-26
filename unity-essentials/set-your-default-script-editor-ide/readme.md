# Varsayılan Komut Düzenleyicisi İle IDE'yi Ayarla

Bu derste, scriptleri Unity Editör’deki scriptlerinizde kullanabilmek için varsayılan script editörünü (IDE) ayarlayacaksınız.

**1.1 Genel bakış**

Unityde scriptlerle çalışırken bu süreci desteklemek için script düzenleme yazılımını kurmanız gerekir. Kullanacağınız düzenleme yazılımı Integrated Development Environment (IDE) olarak adlandırılır. IDE’ler genellikle metin tabanlı kod düzenleyici, kod hata ayıklayıcısı ve programlama için diğer bazı yararlı araçlar içerir.

Bu derste, Unity Editor’ü Visual Studio Community (Unity’yi kurarken bunu kurmayı da seçebilirsiniz)’ye bağlayacaksınız.Seçtiğiniz IDE'nizi Unity Editor'a bağlamak için de bu işlemi uygulayabilirsiniz.

**Not**: Visual Studio Community'yi kullanmak istiyorsanız ancak kurulu değilse, [Unity Hub üzerinden bir modül olarak kurabilirsiniz.](https://learn.unity.com/tutorial/project-setup-processes#60ed7a4cedbc2a002096b758)


**1.2 Başlamadan önce**
Varsayılan IDE'yi değiştirmek için Unity Editor'ün bir oturumunun açık olması gerekir. Önceden var olan bir Unity projesini açın veya Hub aracılığıyla yeni bir proje oluşturun. IDE'yi değiştirdiğinizde, o Unity sürümünü kullanan diğer tüm Unity projelerinde otomatik olarak uygulanacaktır.

Projedeki scriptlerin hiçbirinin açık olmadığını kontrol edin.

**1.3 IDE’nizi ayarlayın**
**Tercihler penceresi**, Unity Editor’e özgü ayarların çoğuna ev sahipliği yapar. Burada yapılan değişiklikler Unity projenizin herhangi bir bölümünü etkilemeyecek, aksine Unity'nin projelerinizle ve kullanıcı olarak sizinle nasıl etkileşime girdiğini değiştirecektir. Seçtiğiniz IDE’yi aşağıdaki gibi ayarlayabilirsiniz.

Visual Studio Community’yi IDE’niz olarak ayarlamak için :

1.  Pencereyi açmak için üst menüden, **Edit > Preferences**  seçimini yapın.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/set-your-default-script-editor-ide/figures/IDE_Setup_Image_Preferences_Window.PNG)
Unity'nin üst menüsünde bulunan Düzenle düğmesi aracılığıyla erişilebilen Tercihler penceresinin konumunu gösteren bir ekran görüntüsü]

2.  Tercihler penceresi gezinme panelinde **External Tools’** u seçin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/set-your-default-script-editor-ide/figures/IDE_Setup_Image_External_Tools.PNG)

Unity'nin Tercihler penceresinin Harici Araçlar seçeneği seçiliyken ekran görüntüsü]

3. **Harici Script Editor** ayarını bulun (Harici Araçlar sekmesinin en üzerinde). Varsayılan olarak, **Dosya uzantısına göre aç** olarak ayarlanmıştır. 

4. Editör kurulumunuzla birlikte Visual Studio Community'yi de indirip yüklediyseniz, menüden bu opsiyonu seçin. Bu seçenek, scriptleri düzenlemek için Visual Studio'yu varsayılan IDE'niz olarak ayarlayacaktır.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/set-your-default-script-editor-ide/figures/IDE_Setup_Image_External_Script_Editor.PNG)
Kullanıcının, Tercihler penceresinde Harici Araçlar seçenekleri açık olduğunda script düzenleyici ayarı için Visual Studio'yu seçtiğini gösteren ekran görüntüsü

**Not**: Alternatif yazılımı varsayılan IDE'niz olarak ayarlamak istiyorsanız, **Araştır**… komutunu seçmeniz gerekecektir - bilgisayarınızın dosya tarayıcısından IDE'nizi bulmak ve listeye eklemek için. Bulduktan sonra, açılır menüden bu yazılımı seçebilirsiniz.

5.  Tercihler penceresini kapatın - Unity'de bir script açtığınızda, artık sizin seçtiğiniz IDE'de düzenlemek için açılacaktır.


**1.4 Akıllı kod tamamlamayı ayarlayın**

Birçok modern IDE’nin sağladığı araçlardan biri akıllı kod tamamlamasıdır. Visual Studio’da bu özelliğe IntelliSense denir. Bu, IDE'nizin yazım hatalarını ve yaygın olarak yapılan hataları düzeltmek için önerilerde bulunacağı anlamına gelir - bunu kod için otomatik düzeltme gibi düşünebilirsiniz.

Bunun IDE'nizde ayarlanıp ayarlanmadığını kontrol etmek için bir kod yazın ve IDE'nizin tamamlama önerilerinde bulunup bulunmadığına bakın. Bu özellikle ilgili daha fazla ayrıntı ve sorun giderme için seçtiğiniz IDE'nin belgelerine bakın.


**1.5 Sonraki adımlar**
Bu derste, seçtiğiniz IDE'yi Unity Editor'da çalışmak için ayarladınız. Script yazmaya başlamadan önce, bu özelliğe daha aşina hale gelmek için biraz zaman ayırın ve özelleştirme ayarlarını gözden geçirin – karanlık mod gibi seçenekleri faydalı bulabilirsiniz!



























