## Oturumlar Arasında Veri Kalıcılığı

Bu eğitimde, uygulamanın oturumları arasında kalıcı olması için kullanıcının seçtiği rengi kaydetmek ve yüklemek için kod yazacaksınız. Bu eğitimin sonunda şunları yapabileceksiniz:
- Uygulamanın başlatılması sırasındaki uygun başlatma yöntemlerini çağırın
- Listeler ve sözlükler gibi veri yapılarını uygulayarak verileri depolayın ve düzenleyin
- Uygulamanın kapanma sırasında kullanıcı verilerini kaydedin

### Adım 6.1 Genel Bakış

Şu anda, Unity Editör'de devam eden çalışmayı test ederken, depodaki forkliftler için seçtiğiniz renk, uygulamayı bir sonraki açışınız için kaydedilmeyecek. Bu uygulamanın bir derlemesini oluşturursanız, kullanıcı uygulamayı her çalıştırdığında bu birbirinden bağımsız bir deneyim olacaktır.

Kullanıcının uygulamayı başlattığında otomatik olarak seçilmesi için son seçilen rengi kaydetmesi yararlı olacaktır. Bu öğreticide, sahneler arasında ve oturumlar arasında veri kalıcılığı uygulamak için önceki çalışmanızı geliştireceksiniz.

Projenizde şöyle görünebilir:

**İpucu**: Bu eğitim ile önceki eğitim arasında bir ara verdiyseniz, devam etmeden önce veri kalıcılığına giriş bölümünü gözden geçirmeniz yararlı olabilir.

### Adım 6.2 Özetinizi değerlendirin

Bu derste, kullanıcı tarafından seçilen rengi bir dosyaya yazacaksınız. Ardından, uygulama başladığında bu dosyanın var olup olmadığını kontrol etmek için MainManager'ı yapılandıracaksınız. Dosya varsa, MainManager dosyada saklanan rengi okuyacak ve renk seçiciyi o renge ayarlayacaktır.

Başlamadan önce, proje özetini gözden geçirmek için birkaç dakikanızı ayırın. Bu görevi kendi başınıza yapacağınızı hayal edin. Aşağıdaki soruların cevaplarını yazın:

- Neyi uygulamanız gerekiyor ve bunu nerede uygulayacaksınız? Bizim yaklaşımımızla karşılaştırmak için şimdi düşüncelerinizi yazın.
- Create with Code'da veya diğer öğrenme deneyimlerinde benzer işlevlerle daha önce nerede karşılaştınız? Kodlara erişemeseniz bile, aşina olduğunuz oturumlar arasındaki veri kalıcılığı örneklerini düşünün.
- Unity Learn'ün ötesinde, bunu yapmanıza hangi kaynaklar yardımcı olabilir? Unity ekosistemindeki ve ötesindeki seçenekleri düşünün.

Bir göreve başlamadan önce zaten bildiklerinizi düşünmek için birkaç dakika ayırmak çok yararlı bir alıştırmadır, özellikle de bu görev size zor geliyorsa. Unity Essentials'ı tamamladıysanız, [içerik oluşturucuların Unity'yi öğrenirkenki düşünce yapılarını](https://learn.unity.com/tutorial/how-our-established-creators-learned-unity#https://learn.unity.com/tutorial/how-our-established-creators-learned-unity#5fa44852edbc2a001f616c92) keşfettiniz.

Elinizin altındaki araçları belirlemek ve önceki öğreniminizi gözden geçirmek, kısa bir toplantı için farklı yaklaşımlar üzerinde düşünmek için gerçekten yararlı fırsatlar sağlayabilir. Bu yolun çok ötesinde öğrenme yolculuğunuza devam ederken bu yaklaşımı benimseyebilirsiniz - bir şeyi yapmanın tek bir yolu olması nadirdir!


### Adım 6.3 Veriler Oturumlar Arasında Nasıl Kalıcı Olabilir?
Verilerin oturumlar arasında kalıcı olması için bir şekilde saklanması gerekir. Sizin durumunuzda, kullanıcınızın seçtiği rengi, depolanabilecek bir biçime dönüştürmeniz ve ardından uygulamayı tekrar yüklediğinde okuyabilmeniz gerekir.

Karmaşık verileri saklanabilecekleri bir biçime dönüştürme işlemine serializasyon denir. Verilere tekrar erişmeye hazır olduğunuzda, onu geri dönüştürme işlemine deserializasyon denir.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/implement-data-persistence-between-sessions/figures/image1.jpg)

**Açıklama**: Akış diyagramı serileştirme sürecini gösterir: baytlara dönüştürülen ve ardından depolanan bir nesne; seri kaldırma işlemi bunu tersine gösterir.

Verilerin ne olduğuna ve onunla ne yapmak istediğinize bağlı olarak, verileri depolamak için kullanabileceğiniz farklı biçimler vardır. Bu durumda JSON formatını kullanacaksınız.


### Adım 6.4 JSON Nedir?

JSON, verileri depolamak ve platformlar arasında değiş tokuş etmek için kullanılan bir metin biçimidir. İlk olarak web için geliştirilmiştir ve tam adı JavaScript Object Notation'dır. JavaScript'i temel alır, ancak dilden bağımsızdır - ister C# kodu yazıyor, ister başka bir programlama dili kullanıyor olun, onu kullanabilirsiniz.

JSON biçimi, verileri bir anahtar:değer çifti biçiminde depolar. Anahtar bir dizedir ve değer şöyle olabilir:
- bir sayı
- dizi
- Bool (doğru/yanlış)
- bir dizi değerler
- Başka bir JSON nesnesi

Bu biçim nasıl çalışır?

Aşağıdaki JSON dizesi, bir kişi hakkında temel bilgileri depolayan bir nesneyi kodlar:

```csharp
{
  "name": "John",
  "age": 27,
  "address": {
    "streetAddress": "21 2nd Street",
    "city": "New York"
  }
  "pet": [“dog”, “cat”]
}

```
Örneği inceleyelim:
- Her nesne küme parantezleri ( { } ) ile çevrilidir.
- Her giriş, virgülle ayrılmış bir anahtar:değer çifti biçimindedir.
- "Evcil hayvan" girişi bir dizi stringtir— dizi değerleri köşeli parantezler ( [ ] ) arasında listelenir.
- "Adres" girişiyle ilişkili değer de süslü parantezler arasındadır - bunun nedeni başka bir JSON nesnesi olmasıdır.

### Adım 6.5 JSON Neden Özetiniz İçin Uygun?

JSON, çok farklı sistemler arasında veri alışverişi yapmak için geliştirildi, bu da onu uygulamanızda veri kaydetmeye uygun hale getiriyor. Unity, JsonUtility adlı bir yardımcı sınıfa sahiptir ve bu, serileştirilebilir bir sınıf almanıza ve onu JSON temsiline dönüştürmenize olanak tanır. Bunun verileri hem seri hale getirmek hem de seri durumdan çıkarmak için nasıl çalıştığını görelim.

**Verileri Serialize Etme**

Aşağıdaki PlayerData sınıfını göz önünde bulundurun:

```csharp
[Serializable]
public class PlayerData
{
    public int level;
    public Vector3 position;
    public string playerName;
}
```

Bu sınıfı aşağıdaki değerlerle JsonUtility'ye geçirmek istediğinizi düşünün:

```csharp
PlayerData myData = new PlayerData();
myData.level = 1;
myData.position = new Vector3(3.0f, 4.4f, 2.3f);
myData.playerName = "John";
```
**json = JsonUtility.ToJson(myData);** aşağıdaki JSON dizesiyle sonuçlanacaktır:

```csharp
{
    “level”: 1,
    “position”: {
        “x” : 3.0,
        “y” : 4.4,
        “z” : 2.3 },
    “playerName”: “John”
}
```
Konum bir **vektör 3** olduğundan, üç anahtarla yeni bir JSON nesnesi olarak kodlandığını unutmayın: x, y ve z. Bunun nedeni, Vector3 sınıfının (son derece basitleştirilmiş):


```csharp
[Serializable]
public class Vector3
{
    public float x;
    public float y;
    public float z;
}
```

**Verilerin Deserialize Edilmesi**

JsonUtility'nin ayrıca az önce gördüğünüz işlemin tersini yapan bir yöntemi vardır: FromJson<T>.

Bu yöntem, bazı JSON verilerini içeren bir dize alır ve alanları doldurulmuş olarak nesnenin bir örneğini oluşturur. Bir şablon argümanı kullanır — PlayerData JSON dizesini incelerken fark etmiş olabileceğiniz gibi, JSON dosyasında bu verilerin orijinal türü saklanmaz. Unity, doğru alandaki doğru değeri okumak için şablon argümanına ihtiyaç duyar.

Örneğimizi genişletmek için **PlayerData myData = JsonUtility.FromJson<PlayerData>(json);** myData'yı JSON dizesindeki değerlerle dolduracaktır.

**JsonUtility'nin Sınırlamaları**
  
Unity'nin performans ve basitlik için tasarlanmış JsonUtility sınıfında bazı sınırlamalar vardır. JsonUtility, ilkel türler, diziler, listeler veya sözlükler üzerinde çalışmaz.

Tahmin edebileceğiniz gibi, JsonUtility yalnızca **Serileştirilebilir** tür - MonoBehaviour veya üzerine **[Serializable]** özniteliğini ekleyebileceğiniz yazdığınız diğer sınıflar/yapılar üzerinde çalışır. Birden fazla veri parçası içeren bir sınıfı kaydetmeye çalışırsanız ve bunlardan biri kaydedilmezse, bunun nedeni muhtemelen seri hale getirilebilir olmamasıdır. Örneğin, ortasında dictionary bulunan bir sınıfı JSON'a dönüştürürseniz, seri hale getirilemediği için dictionary kaydedilmez.Bir sınıfta düzgün bir şekilde kaydedilmeyen bir şey varsa, bunun serileştirilebilir bir tür olduğundan emin olun!

Daha fazla bilgi için [JSON Serileştirme](https://docs.unity3d.com/Manual/JSONSerialization.html) ile ilgili Unity belgelerine bakın.

**Veri kaydetmeyle İlgili Sorunları Giderme**
  
Tahmin edebileceğiniz gibi, JsonUtility yalnızca Serileştirilebilir tür - MonoBehaviour veya üzerine [Serializable] özniteliğini ekleyebileceğiniz yazdığınız diğer sınıflar/yapılar üzerinde çalışır.

Birden fazla veri parçası içeren bir sınıfı kaydetmeye çalışırsanız ve bunlardan biri kaydedilmezse, bunun nedeni muhtemelen seri hale getirilebilir olmamasıdır. Örneğin, çok fazla veri ve ortasında bir sözlük bulunan bir sınıfı JSON'a dönüştürdüğünüzü hayal edin. Bu sözlük kaydedilmeyecek çünkü seri hale getirilemez. Bir sınıfta düzgün bir şekilde kaydedilmeyen bir şey varsa, bunun serileştirilebilir bir tür olduğundan emin olun!

### Adım 6.6 SaveData Sınıfı Ekleyin

Kullanıcının son seçtiği rengi kaydetmek ve yüklemek için MainManager sınıfında üç şeye ihtiyacınız olacak:
- Rengi depolayan bir SaveData sınıfı.
- Bu sınıfı JSON biçimine dönüştüren ve bir dosyaya yazan bir Save metodu.
- JSON dosyasındaki verileri tekrar SaveData sınıfına dönüştüren bir Load metodu.

SaveData sınıfıyla başlayalım:

- IDE'nizde MainManager.cs'i açın.
- MainManager sınıfının sonuna (kapanış ayracı sonuna) aşağıdaki kodu ekleyin:

```csharp
[System.Serializable]
class SaveData
{
    public Color TeamColor;
}
```
**Yeni kodu inceleyin** 

SaveData, yalnızca kullanıcının seçtiği rengi içeren basit bir sınıftır. Üstüne bir [System.Serializable] özniteliği eklediğinizi unutmayın. Bu satır, az önce öğrendiğiniz gibi JsonUtility için gereklidir - yalnızca Serileştirilebilir olarak etiketlenmişlerse işleri JSON'a dönüştürür.

Neden bir sınıf oluşturuyorsunuz ve MainManager örneğini doğrudan JsonUtility'ye vermiyorsunuz? Eh, çoğu zaman derslerinizdeki her şeyi kaydetmezsiniz. Yalnızca kaydetmek istediğiniz belirli verileri içeren küçük bir sınıf kullanmak iyi bir uygulamadır ve daha verimlidir.

### Adım 6.7 SaveColor Metodu Ekleyin

Ardından SaveColor yöntemini ekleyelim:

- SaveData sınıfından sonra boş bir satır bırakın.
- Aşağıdaki kodu ekleyin:

```csharp
public void SaveColor()
{
    SaveData data = new SaveData();
    data.TeamColor = TeamColor;

    string json = JsonUtility.ToJson(data);
  
    File.WriteAllText(Application.persistentDataPath + "/savefile.json", json);
}
```
- Komut dosyasına yeni bir ad alanı eklememiz gerektiğinden, son satır IDE'nizde bir hata olarak vurgulanacaktır. Komut dosyanızın en üstüne aşağıdakileri ekleyin:


```csharp
using System.IO;
```

**Yeni Kodu İnceleyin**

Bu yeni metodu sırayla inceleyelim. İlk olarak, kaydetme verilerinin yeni bir örneğini oluşturdunuz ve ekip renk sınıfı üyesini MainManager'da kaydedilen TeamColor değişkeniyle doldurdunuz:

```csharp
SaveData data = new SaveData();
data.TeamColor = TeamColor;
```
Ardından, bu örneği **JsonUtility.ToJson** ile JSON'a dönüştürdünüz:

```csharp
string json = JsonUtility.ToJson(data);
```

Son olarak, bir dosyaya bir dize yazmak için **File.WriteAllText** özel metodunu kullandınız:

```csharp
File.WriteAllText(Application.persistentDataPath + "/savefile.json", json);
```
İlk parametre dosyanın yoludur. **Application.persistentDataPath** adında, uygulamanın yeniden yüklenmesi veya güncellenmesi arasında hayatta kalacak verileri kaydedebileceğiniz ve buna savefile.json dosya adını ekleyebileceğiniz bir klasör verecek olan bir Unity yöntemi kullandınız.

**Note:** Unity Komut Dosyası API'si, platform başına gerçek yolları listeler.

İkinci parametre, o dosyaya yazmak istediğiniz metindir - bu durumda JSON'unuz!

### Adım 6.8 Bir LoadColor Metodu Ekleyin

Şimdi LoadColor metodunu ekleyelim:

- SaveColor metodundan sonra boş bir satır bırakın.

- Aşağıdaki kodu ekleyin: 
  
```csharp
public void LoadColor()
{
    string path = Application.persistentDataPath + "/savefile.json";
    if (File.Exists(path))
    {
        string json = File.ReadAllText(path);
        SaveData data = JsonUtility.FromJson<SaveData>(json);
  
        TeamColor = data.TeamColor;
    }
}

```
**Yeni Kodu İnceleyin**
  
Bu metod, SaveColor metodunun tersidir: 


```csharp
string path = Application.persistentDataPath + "/savefile.json";  
```  
Bir .json dosyasının olup olmadığını kontrol etmek için **File.Exists** yöntemini kullanır. Olmazsa, hiçbir şey kaydedilmemiştir, bu nedenle başka bir işlem yapılması gerekmez. Dosya varsa, yöntem içeriğini **File.ReadAllText** ile okuyacaktır:  
  
```csharp
if (File.Exists(path))
{
    string json = File.ReadAllText(path);  
``` 
Daha sonra elde edilen metni tekrar SaveData örneğine dönüştürmek için JsonUtility.FromJson'a verir:
  
```csharp
SaveData data = JsonUtility.FromJson<SaveData>(json);  
```  
Son olarak, TeamColor'ı o SaveData'da kaydedilen renge ayarlayacaktır:
  
  
```csharp
TeamColor = data.TeamColor;  
```  
**Yeni Kodunuzu İki Kez Kontrol Edin**

Devam etmeden önce, MainManager sınıfı kapsamında olduğundan emin olmak için eklediğiniz kodu iki kez kontrol edin:
  
  
 ```csharp
[System.Serializable]
class SaveData
{
    public Color TeamColor;
}
public void SaveColor()
{
    SaveData data = new SaveData();
    data.TeamColor = TeamColor;

    string json = JsonUtility.ToJson(data);
  
    File.WriteAllText(Application.persistentDataPath + "/savefile.json", json);
}

public void LoadColor()
{
    string path = Application.persistentDataPath + "/savefile.json";
    if (File.Exists(path))
    {
        string json = File.ReadAllText(path);
        SaveData data = JsonUtility.FromJson<SaveData>(json);

        TeamColor = data.TeamColor;
    }
}  
``` 
### Adım 6.9 Uygulamada Rengi Yükleyin ve Kaydedin

Neredeyse bitirdiniz, ancak önce uygulama başladığında kaydedilen rengi (varsa) yüklemeniz ve çıkışta rengi kaydetmeniz gerekir. Şimdi bunu uygulayalım:
  
- MainManager.cs'de (hala açık olmanız gerekir), **Awake** yöntemini bulun.
- Awake'in sonunda LoadColor yöntemini çağırın:  
  
```csharp
LoadColor();  
```
  
- Değişikliklerinizi kaydedin, ardından IDE'nizde MenuUIHandler.cs dosyasını açın.
- **Start** metodunun sonuna aşağıdaki kodu ekleyin:

```csharp
ColorPicker.SelectColor(MainManager.Instance.TeamColor);
```
  
Bu satır, menü ekranı başlatıldığında MainManager'da (varsa) kaydedilen rengi önceden seçecektir.

- Exit metodunun başına aşağıdaki kodu ekleyin: 
  
```csharp
MainManager.Instance.SaveColor();   
```
  
Bu satır, uygulamadan çıktığında kullanıcının en son seçtiği rengi kaydeder.


### Adım 6.10 Test İşlevi Ekleyin

Son olarak, uygulamadan rengi anında kaydedip yükleyebilmeniz için MenuUIHandler'a bazı hızlı test işlevleri ekleyelim:

- MenuUIHandler.cs dosyasına aşağıdaki iki yöntemi ekleyin:  
  
```csharp
public void SaveColorClicked()
{
    MainManager.Instance.SaveColor();
}

public void LoadColorClicked()
{
    MainManager.Instance.LoadColor();
    ColorPicker.SelectColor(MainManager.Instance.TeamColor);
}
```
  
- Değişikliklerinizi kaydedin.
- Bu yöntemleri Renk Yükle ve Kaydet düğmelerine bağlayın. Bu işlemi özetlemeniz gerekirse, Başlat düğmesini nasıl yapılandırdığınızı gözden geçirin.

**Editörde Test Edin**
  
Standart çıkışta kaydetme ve başlatmada yükleme dahil olmak üzere uygulamadaki değişikliklerinizi kapsamlı bir şekilde test edin.

### Adım 6.11 Sonraki Adımlar 
Bu eğitimde, uygulamanızdaki oturumlar arasında veri kalıcılığı uyguladınız, böylece kullanıcı tarafından seçilen son renk, uygulamayı yeniden yüklediğinde önceden seçilmiş olur. Harika şeyler!
Ardından, yeni bir Unity projesinde temel bir oyun özetini karşılamak için öğrendiklerinizi uygulayarak bir gönderi hazırlayacaksınız.

