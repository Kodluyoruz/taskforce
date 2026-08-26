# Varsayılan Script İçindeki Kod

Bu eğitimde şunları yapacaksınız:

- Yeni bir script dosyasının varsayılan script bileşenlerini tanımlama
- IDE'nizde (Tümleşik Geliştirme Ortamı) bir komut dosyası bileşenini düzenleme
- Unity Editor'ün Console penceresinde bir script dosyasından bir mesaj görüntüleme.

**Aşama 1: Genel Bakış**

Her yeni script oluşturduğunuzda Unity, ihtiyacınız olacak temel kod satırlarını içeren varsayılan bir script dosyasıyla başlamanızı sağlar. Bu öğreticide, size varsayılan script dosyasında gezinecek, sağlanan fonksiyonları kullanmak için bazı kodlar yazacak ve sizi daha fazlasını öğrenebileceğiniz bazı kaynaklara yönlendireceğiz.

**Aşama 2: Varsayılan script**

Yeni bir script oluşturduğunuzda, MonoBehaviour adlı yerleşik sınıftan türetilen yeni bir public sınıf da yaratırsınız. Bileşeni adlandırdığınızda, bu sınıfta ve script dosya adına aynı ad uygulandı. Bu isimlerin aynı olması önemlidir.
 
Kodda, zaten kurulmuş bir public sınıf göreceksiniz. Scrip’n adıyla aynı: “HelloWorld”. Bu adlar her zaman aynı olmalıdır! Script adını değiştirirseniz, bu sınıfın adını da değiştirmelisiniz.
 
Script bunun yanında Start() ve Update() olmak üzere iki fonksiyon da içerir.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/code-in-the-default-script/figures/B.3.2-1.png)

Yeni Hello World scripti Visual Studio'da açıldı

Start fonksiyonu oyunun başında bir kez çalışır ve Update fonksiyonu oyunun her frame inde çalışır (frameler hakkında daha fazla bilgi daha sonra).

**Aşama 3: Start fonksiyonunu düzenleyin**
 
- İki {} parantezinin arasına, Start fonsiyonuna aşağıdaki kodu ekleyin:

```csharp
Debug.Log("Hello World");
```

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/code-in-the-default-script/figures/B.3.2-2.png)

İki parantez arasında Start fonksiyonuna eklenen Debug.Log satırını gösteren script

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/code-in-the-default-script/figures/B.3.2-2.png)
- Ctrl+S (Windows) veya Cmd+S (Mac) kullanarak scripti kaydedin.
- Unity Editor'da Console penceresi görünmüyorsa, Ctrl+Shift+C (Windows) veya Cmd+Shift+C (Mac) ile açın. Console  penceresi, script  çalışırken, hatalar ve uyarılar da dahil olmak üzere scriptlerden gelen mesajları okuyabileceğiniz yerdir.
- Oyunu oynayın ve Console penceresine bakın. Orada “Hello World” yazısı görünür.
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/code-in-the-default-script/figures/B.3.2-3.png)

Oyun çalışırken konsolda “Merhaba Dünya” metni görüntülenecektir.

**Aşama 4: Update fonksiyonunu düzenleyin**
 
- Scripti yeniden açın ve Debug.Log satırını Update fonksiyonuna taşıyın.
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/code-in-the-default-script/figures/B.3.2-4.png)

Debug.Log komutunu gösteren script  güncellemesi şimdi Update fonksiyonuna taşındı
- Ctrl+S (Windows) veya Cmd+S (Mac) kullanarak scripti kaydedin.
- Henüz seçili değilse, Console penceresinde Collapse seçeneğini seçin. Bu seçenek, bir sonraki adımda ekranı basitleştirecektir.
- Oyunu oynayın ve Console penceresine bakın. Bu sefer “Merhaba Dünya” mesajının yanında bir sayaç belirir. Bu sayaç, scriptin kaç kez çalıştığını ve mesajı görüntülediğini gösterir.
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/code-in-the-default-script/figures/B.3.2-5.png)

Komut, script Update fonksiyonu çalışırken Console, Merhaba Dünya metnini sürekli olarak görüntüler.
 
Script artık Update fonksiyonunun içinde olduğu için oyunun her karesi için bir kez çalışıyor. Frame, sinema filminin bir karesi gibi, ekranda hareket yaratan bir dizideki tek bir görüntüdür. Play düğmesine bastığınızda ve Game  görünümünde oyununuzu izlediğinizde, Update fonksiyonu birçok kez sürekli olarak çalışır.

**Aşama 5: Değişkenli bir özellik ekleyin**

Script oluşturulabilir bileşenler kavramını göstermek için scriptinize bir değişken ekleyecek ve Inspector penceresinde değerini değiştireceksiniz. Değişken, değişebilen bir değere sahiptir. Karşılaşmanız en olası değer türleri int (tamsayılar), float (küsuratlı sayılar, yani ondalıklı sayılar, string (yazı) ve Boolean (true veya false değerler)'dir. , Ölçek X, Y ve Z için float değişkenlerdir. Scriptinizde “Hello, World!” mesajını HelloWorld bileşeni aracılığıyla Inspector penceresinde değiştirebileceğiniz bir string değişkeni ile değiştireceksiniz. GameObject'iniz Unity Editor'den değiştirebileceğiniz bir özelliğe sahip olacaktır.
- Scripti tekrar Visual Studio'da açın.
- Aşağıda gösterildiği gibi yeni bir değişken ekleyin:

```csharp
public string myMessage;
```

- Debug.log komutunu aşağıdaki gibi değiştirin:


```csharp
Debug.log(myMessage);
```
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/code-in-the-default-script/figures/B.3.2-6.png)

Kullanıcının oyun çalışırken Console’da görüntülenmek üzere kendi mesajını eklemesine izin verecek yeni bir değişkenin eklendiği script
- Scripti kaydedin (Ctrl+S/Cmd+S).
- Unity Editor'da, ScriptObject GameObject'i seçin ve Inspector'daki HelloWorld bileşenine bakın. Özel bir mesaj yazabileceğiniz yeni bir özellik görünür.
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/code-in-the-default-script/figures/B.3.2-7.png)

Hello World script bileşeni artık kullanıcının Console’da görüntülenmek üzere kendi mesajını ekleyebileceği bir pencere görüntülüyor.
 
İstediğiniz bir mesajı yazın.


- Oyunu çalıştırın ve Console penceresini kontrol edin. Özel mesajınız şimdi görünüyor!

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/code-in-the-default-script/figures/B.3.2-8.png)

Oyun çalışırken özel mesaj görüntülenir
 
**Aşama 6: Sonraki adımlar**

Unity'de script oluşturmanın çok güçlü olabileceğini görüyorsunuz: Kullanıcı deneyimi sırasında bir şeylerin olmasını sağlayabilir ve daha sonra komut dosyanızı düzenlemeden değerleri ayarlayabilmeniz için değişkenleri Unity Editor Inspector penceresinde değiştirilebilir hale getirebilirsiniz. Bir sonraki adımda Scene içinde bir şeyler yapmak için bir script kullanalım.


