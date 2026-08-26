## Sahne akışı oluşturma

Bu eğitimde, Menu ve Main sahneler arasında sahne akışını ve  uygulamadaki uygulama için çıkış akışı kuracaksınız.

Bu eğitimin sonunda:

- Uygulamanın başlatma sırasındaki uygun başlatma metodlarını çağırmayı
- Bir olay tetiklendiğinde sonraki sahneyi yüklemeyi yapabileceksiniz.

### Adım 1 Genel bakış
Bir önceki eğitimde gözden geçirdiğiniz gibi, bu görevde üzerinde çalışacağınız uygulama, kullanıcının aralarında gezinmesi gerektiği bir sürü farklı sahneye sahip.

Şu anda uygulama doğrudan Main sahneden başlıyor.Gerçek dünya uygulamasında, uygulama başladığında kullanıcının ayarları değiştirebileceği veya çıkabileceği bir menü olurdu.Bu eğitimde, o menüyü oluşturacaksınız.

### Adım 2 Gerekli sahne akışını gözden geçirin

Ana sahnede temel bir UI menüsü Canvas hazırladık, ancak beklenildiği gibi çalışmıyor. 
Eğer hafızanı yenilemeye ihtiyacın varsa [proje özetindeki](https://connect-prd-cdn.unity.com/20210602/7105725f-6cb4-4171-a399-ba1b485a7e96/Project_Brief.pdf?_gl=1*wjdq4t*_ga*NDI3MDM1NDEuMTU5MjI0OTM3NA) tüm sahne akışlarına bir bakın.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/create-scene-flow/figures/JrProg_C.5_image1.png)

Alt metin: Basit akış diyagramı uygulamanın geçişlerini detaylı gösteriyor:Menu sahnesi girişte başlatılıyor; Menu ve Main sahneleri arasında iki yönlü geçiş; sadece Menu sahnesinden çıkış var.

Uygulamayı ayarlayarak başlayalım, bu sayede kullanıcı:

- Main sahneyi başlatabilir
- Uygulamadan çıkabilir

### Adım 3 UI menüsünü gözden geçirin

Şimdi bu proje için oluşturulmuş olan UI Canvas’ı gözden geçirelim:

- Eğer hala yapmadıysanız, Unity Hub üzerinden projenizi açın.
- Project penceresinde, Assets > Scenes gidin ve Menu sahnesini açın.
- Scene görünümü kontrol çubuğunda, Scene görünümünü 2D moduna ayarlayın

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/create-scene-flow/figures/JrProg_C.5_image3.png)

Alt metin: Scene görünümünde sol-üst kısımda 2D modu vurgulanmıştır

- Hierarchy’de, Canvas’ı ve daha sonra iki diğer GameObject’i içeren,StartContainer ve Exit, Container GameObject’i genişletin

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/create-scene-flow/figures/JrProg_C.5_image2.png)

- StartContainer GameObject’i genişletin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/create-scene-flow/figures/JrProg_C.5_image4.png)

StartContainer, Canvas’ın StartContainer bölümünde gruplandırılmış dört buton GameObject’i içerir:

- **Start** butonu (StartButton)
- Gizemli beyaz bir dikdörtgen (ColorPicker)
- **Save Color** butonu (Save)
- **Load Color** butonu (Load)

Menu hala fonksiyonel değil ama renk seçim düğmelerini çalışırken gözden geçirebilirsiniz — şimdi bunu deneyelim. 

- Araç çubuğunda, Play moduna girmek için Play’i seçin. Beyaz dikdörgenin içerisinde şimdi dört tane renk seçme butonu olduğunu göreceksiniz.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/create-scene-flow/figures/JrProg_C.5_image5.png)

Alt metin: Menüde dört yatay düğme sırası var: renk butonları; Save Color ve Load Color; Start; ve Exit.

- Play moddan çıkın.

Renk seçim düğmeleri, Canvas GameObject üzerindeki MenuUIHandler.cs script dosyası tarafından kontrol edilir. Bu proje için yazılmış özel bir script. Şu anda tek yaptığınız renk düğmelerini başlatmak. Hadi iki metod ekleyelim: biri Main sahneyi başlatmak için diğeri de uygulamadan çıkmak için.

### Adım 4: Main sahneyi yüklemek için metod yazın

Main sahneyi menüden yükleyen metodu yazarak başlayalım:

- Project penceresinde Assets > Scripts’e gidin. MenuUIHandler.cs’i varsayılan IDE’nizde açmak için çift tıklayın. Sizin için hazırlanmış aşağıdaki scripti bulacaksınız.

```csharp
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

//  Scripti diğer varsayılan scriptlerden daha sonra çalıştırılacak şekilde ayarlar
// UI için faydalı, çünkü UI ayarlanmadan önce bazı şeylerin başlatılması gerekebilir
[DefaultExecutionOrder(1000)]

public class MenuUIHandler : MonoBehaviour
{
    public ColorPicker ColorPicker;

    public void NewColorSelected(Color color)
    {
        //buraya renk seçildikten sonra yapılmasını istediğiniz kodu ekleyin
    }
    
    private void Start()
    {
        ColorPicker.Init();
        //Bu,renk seçicide renk butonu tıklandığında NewColorSelected fonksiyonunu çağıracak 
        ColorPicker.onColorChanged += NewColorSelected;
    }
}
```

- **Start** metodu altında, **StartNew** isimli yeni metodu ekle:

```csharp
public void StartNew()
{
    SceneManager.LoadScene(1);
}
```

**SceneManager**, sahneleri yükleme, kaldırma ile ilgili her şeye yetkisi olan sınıftır..b

- Dosyanızı kaydedin ve Unity editörüne dönün. 

Console’u bir inceleyin. Hata mesajını fark edeceksinizdir: “The name 'SceneManager' does not exist in the current context” Bunun nedeni, SceneManager’ın bu script dosyasının bulunduğu ad alanından (**namespace**) farklı bir ad alanında(**namespace**) gruplanmış olmasıdır.

Bu hatayı görmüyor iseniz, “SceneManager” yazdığınızda IDE’niz otomatik olarak eklemiş olabilir. Ad alanlarının(**namespace**) eklendiğini çifte kontrol etmek için sıradaki adımları takip edin.

- Script editörünüze dönün. Dahil edilmiş ad alanlarını(namespace), dosyanın en üstünde, using ile başlayan satırlarda bulabilirsiniz. 

```csharp
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
```

Bu scriptte zaten bir sürü ad alanı(namespace) var. using UnityEngine; satırı, örneğin, UnityEngine ad alanındaki(Vector3 ve Transform gibi şimdiye kadar kullandığınız tüm sınıflar) her şeyin bu scriptte kullanılabileceğini belirtiyor.

- Aşağıdaki ad alanlarını(namespace) scriptteki listeye ekleyin ve değişiklikleri kaydedin:

```csharp
using UnityEngine.SceneManagement;
```

Artık SceneManagement ad alanı(namespace) bu scripte eklendi ve sahende kullanılabilir.

### Adım 5: Menu sahnesinin indeksini ayarlayın

Ardından, Menü sahne indeksini ayarlayarak **Start** butonunu kurmaya hazırlanalım:

- Editöre dönmeden önce, sahneyi yüklemek için yazdığınız kodu gözden geçirin: SceneManager.LoadScene(1);

LoadScene’in parametresi bir sayı ama ne anlama geliyor?  O, yüklemek istediğiniz sahnenin **indexi**. Bir sahnenin indeksini, Build Settings penceresi altında tanımlayabilirsiniz.

- Unity Editor’ün en üst menüsünde, **File > Build Settings’e** gidin… Pencerenin en üst kısmı, sahne indekslerinin ayarlandığı **Scenes In Build.** Şu an sadece Main sahne listeye ekli.

- Project penceresinde, **Scenes** klasörüne yönlendir daha sonra Menu sahnesini **Scenes In Build** kısmına sürükle. **Menu**’nün en düşük indeks değerine(0) sahip olması için **Main**’in üzerinde olmalıdır. Gerekirse, sıralarını değiştirmek için öğeleri seçip sürükleyin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/create-scene-flow/figures/JrProg_C.5_image6.png)

Alt metin: Scenes In Build bölümü; Menu 0 indeksi ile ilk sırada yer alıyor, Main indeks 1 ile ikinci sırada yer alıyor.

### Adım 6: Start butonunu ayarlayın

**Start** butonunu kurmak için hazırsınız:

- Hierarchy’de, StartButton GameObject’ini seçiniz (StartContainer’ın alt öğesi).
- Inspector’da, Button öğesini bulun.
- **On Click ()** özelliğini bulun. Kullanıcı düğmeyi seçtiğinde Unity'nin başlatacağı olayları buradan ayarlayabilirsiniz. Yeni bir Event dizisi eklemek için **Add** (+)’ı seçin.
- Canvas GameObject’i atamak için **Runtime Only** menüsünün altındaki On Click olayının hedef alanına sürükleyip bırakın.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/create-scene-flow/figures/JrProg_C.5_image7.png)

Alt metin: On Click olayında GameObject özelliği Canvas olarak atanmış.

Canvas GameObject, MenuUIHandler elemanına eklidir.
- Function menüsünde, MenuUIHandler > StartNew ‘i seçin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/create-scene-flow/figures/JrProg_C.5_image8.png)

Alt metin: On Click olayında Function, MenuUIHandler.StartNew olarak ayarlı.
- Değişiklikleri kaydedin daha sonra araç çubuğunda Play moda girmek için Play’e basın. 
- Start butonunu seçmeyi deneyin  — Main sahneyi başlatıyor olmalı! Şimdilik bu sahneden geri gelemeyeceksiniz. İşiniz bittiğinde Play modundan çıkmayı unutmayın.

### Adım 7: Uygulamadan çıkan bir metod yazın

Şimdi Menu sahnesinde **Exit** butonunu tasarlayalım:

- IDE’nizde MenuUIHandler.cs’e dönün.
- **StartNew** metodu altında **Exit** isimli aşağıdaki yeni metodu ekleyin:

```csharp
public void Exit()
{
    Application.Quit();
}
```

Komut, uygulamayı kapatacak metodu çağırır: **Application.Quit().**

- Kaydedin ve Unity Editor’e dönün daha sonra Play modda Exit metodunu test edin — Çalışıyor mu? Okumadan önce nedenini düşünmek için biraz zaman ayırın.

**Buradaki sorun ne?**

**Application.Quit,** Editor’de test ederken değil, yalnızca build edilmiş uygulamada çalıştığı için buton şu anda çalışmıyor. Orada benzer şekilde çalışmasını sağlamak için PlayMode’u durduran özel bir metod kullanmanız gerekli. Ancak, uygulamanın çalıştığı yere bağlı olarak farklı satırları çalıştırmak için kodu nasıl değiştirebiliriz?

**Koşullu derleme’nin** devreye girdiği yer burası. Kodun derlendiği yere göre kodu dallandırmak için koşullu derlemeyi kullanabilirsiniz — Editor’de veya Build’de.

### Adım 8: Koşullu derleme ile yönteminizi gözden geçirin

Koşullu derleme kullanarak kodunuzun tekrar düzeltin:

- IDE’nizde MenuUIHandler.cs’e dönün.
- **Exit** metodunuzu aşağıdaki kod ile güncelleyin:

```csharp
    public void Exit()
    {
#if UNITY_EDITOR
        EditorApplication.ExitPlaymode();
#else
        Application.Quit(); // original code to quit Unity player
#endif
    }
```

- Değişiklikleri kaydedin.

Yeni koşullu kodu gözden geçirin
Ama bu kod ne anlama geliyor? # ile başlayan tüm satırlar gerçekten “kod” değiller. Onlar derlenmeyecek ve çalışmayacaklar— Onlar aslında derleyici için komutlar. Yine de daha önce karşılaştığınız koda benzer!

Hadi onu daha tanıdık bir şeye çevirelim:

```csharp
if (UNITY_EDITOR)
{
    // bu kodu çalıştır
}
else
{
    // bu kodu çalıştır
}
```

**If** koşulu ifadesi derleyiciye için bir talimat olduğundan, doğru olmayan kısım tamamen kaldırılacaktır.

Sizin durumunuzda:

- Kod editor içerisinde derlendiğinde, UNITY_EDITOR ifadesi true olacak, **EditorApplication.ExitPlaymode()** kodunu tutacak ve Application.Quit’i çıkaracak.
- Bir oynatıcı oluşturduğunuzda, UNITY_EDITOR false olacak, **Application.Quit()’i** tutacak ve EditorApplication.ExitPlaymode()’u çıkaracak!


### Adım 9: Yeni bir namespace ekleyin

Eğer Unity Eitor’e dönerseniz Consol’da tanıdık bir hata ile karşılaşabilirsiniz: “The name 'EditorApplication' does not exist in the current context.” 

SceneManager gibi, EditorApplication başka bir ad alanında(namespace) — Bu sefer, bu ad alanı(namespace) sadece Unity Editor’de bulunan UnityEditor’dür, bu nedenle düzeltme biraz farklı:

- IDE’nizde MenuUIHandler.cs’e geri dönün.
- Aşağıdaki kodu ad alanları(namespaces) listesinin sonuna ekleyin:

```csharp
#if UNITY_EDITOR
using UnityEditor;
#endif
```
Derleyiciye ad alanı çevresinde koşullu talimatlar eklediniz: **#if UNITY_EDITOR,** böylece ad alanı(namespace) yalnızca Unity Editor’ü içinde derlerken dahil edilecek.

Derleyici için bir if ifadesi eklemediyseniz, bağımsız bir oynatıcı oluşturmaya çalıştığınızda UnityEditor'u bulamıyor hatası alırsınız. Bunun nedeni, player build’e dahil olmamasıdır. (Bunu test etmek istiyorsanız, koşullu talimatları kaldırın ve deneyin!)

Bir oynatıcı için build oluşturduğunuzda, kod satırını atar ve ad alanını(namespace) içeriye aktarmaya çalışmaz. Öte yandan, Editor'de test ederken **Exit'i** seçerseniz Play modundan çıkacaktır.


### Adım 10 Görev: Menu sahnesine geçiş ayarlayın
Şimdi kullanıcılar Main sahneye gidebilir ve başlat menüsünde uygulamadan çıkabilir ama şu anda Main sahneden menüye geri dönemezler.

Main sahnede **Menüye dön** butonu oluşturduk ancak onu kendiniz çalıştırmanız gerekecek.

Unutmayın:

- Buton için GameObject’i Canvas GameObject’te bulabilirsiniz.
- Canvas GameObject’i UI Menu Scene (Script) öğesi ekli —  The Canvas GameObject has the UI Main Scene (Script) component attached — bu Main sahnede UI’ı kontrol eder.
- Eğer takılırsanız Start butonunu ayarladığınız süreci tekrar gözden geçirebilirsiniz.
- Değişikliklerinizi düzgünce çalıştıklarından emin olmak için Play modda test edin.


### Adım 11: Sıradaki adımlar
Artık görev özetini karşılamak için sahnelerinizi kullanıcı arayüzüne bağladınız! Ancak bazı şeyler eksik —  renk seçim butonları hala çalışmıyor

Sonraki eğitimde, bu fonksiyonelliği veri kalıcılığını uygulayarak ekleyeceksiniz.

Kendinizin yapın!
Hazır menümüz damak tadınıza göre biraz sıkıcıysa, umutsuzluğa kapılmayın. — varsayılan menünün görünümünü değiştirebilirsiniz veya baştan kendinizinkini oluşturabilirsiniz! Bu, [Create with Code Unit 5 - User Interface](https://learn.unity.com/project/unit-5-user-interface?uv=2020.3&courseId=5cf96c41edbc2a2ca6e8810f) çalışmanızı konsolide etmek için harika bir fırsat.

**Önemli**: Kendi menünüzü oluşturursanız, menünüzün kullandığımız düğmelerin aynısını içerdiğinden emin olun; aksi takdirde kullanıcı uygulamadaki gerekli etkileşimleri tamamlayamaz.










