# .gitignore Dosyası Ne İşe Yarar? Nasıl Kullanırız?

`.gitignore` dosyası projemizin kök dizinine oluşturulan düz bir metin dosyasıdır. Adından anlaşıldığı gibi diyor ki beni göz ardı et. Daha doğrusu göz ardı etmek istediğin, local çalışma alanındaki takip edilmesini istemediğin, takım arkadaşların için gerekmeyen dosyaların varsa veya bu dosyaların boyutu reponuza atmanıza gerek olmayacak kadar büyük ölçekli ise buyur beni kullan diyor. 

Gel bu dosyaları `.gitignore` dosyasına koy ki GIT de senin bu dosyalarını artık takip etmesin. Üstelik bu işlemler yapılırken senin halihazırdaki dosyalarını da hiç bir şekilde etkilemesin. Daha ne olsun!

## Peki nedir bu tür dosyalar ? 
- Paket yöneticisinden indirilen bağımlılıklar,
- image ve video dosyalarınız(dosya boyutları çok fazla olabilir)
- IDE eklentileri( örneğin `.vscode`)
- Sadece kendi çalışma alanınızda olması gereken başkaları tarafından görülmemesi gereken dosyalarınız (veritabanınıza ilişkin konfigurasyonlar)
- API anahtarları, kimlik bilgileri veya hassas bilgiler içeren dosyalar(.env)
- Çalışma dizinizdeki geçici dosyalar
- Log dosyaları
- Yararsız sistem dosyaları (örneğin MacOS işletim sisteminin `.DS_Store` dosyası )
- `dist` gibi oluşturulan dosyalar
- Veya herhangi bir dosyanız da olabilir.

## Nasıl oluşturulur?
Reponuzu oluştururken verilen seçeneklerde add gitignore file dosyasına tıklayarak reponuzla beraber oluşturabilirsiniz. Aynı şekilde editörünüzde `.gitignore` şeklinde de oluşturabilirsiniz.

> `.gitignore` dosyası `.`ile başladığı için Mac ve Linux sistemlerde gizli dosya olarak aldılanır. `.` ile başlayan klasör ve dosyalar bu sistemlerde gizlenir. Dosyayı oluşturmanıza rağmen göremiyorsanız gizli dosya/klasörleri göster seçeneğini açın!

Yok ben terminal aşığıyım diyorsanız da buyrun :)

Proje dizininize cd komutu ile gelerek 
**MacOS /Unix için; **
```bash
$ touch .gitignore 
```

**Windows için;**
```bash
$ echo some-text or nothing > .gitignore
```

şeklindeki komutlarla dosyanızı komut satırından oluşturabilirsiniz. Buradaki `some-text or nothing` kısmı `.gitignore` dosyasına yazılmasını istediğiniz metini ekler. Hiçbir şey de yazmayabilirsiniz. 

## Nasıl  çalışır, nasıl kullanılmalı?
`.gitignore` dosyasının her satırına takip edilmesini istemediğimiz dosyaları veya dizinleri yazarak göz ardı edebiliriz.

**Tabii bu dosyaları yazarken bize kolaylık sağlayan bazı formatlar var.  İşte onlar:**

- En basit haliyle dosyamızın ismini ekleyebiliriz. bu komut `.env`dosyasını göz ardı edecek.
	```
.env
```
- Dizinleri ise klasörün sonuna `/` işareti ekleyerek  belirtiriz. 

```
node-modules/
dist/
logs/
```

- `*` yıldız karakteriyle ise belirtilen ilk örnekte `.log` uzantısına sahip dosyaların tümünü, ikinci örnekte ise `files` klasör içerisindeki bütün dosyaları izlemeyi bırakacaktır. 

```
*.log 
files/*
```

- Eğer ki bir klasörümüzü içerisindeki bir dosya haricinde izlenmesini istemiyorsak `!` işareti ile bunu sağlayabiliriz. Bu örnekte `files` klasörü içerisindeki `example.txt` haricindeki dosyalar izlenmeyecektir. Files klasörü içerisindeki sadece **example.txt** git akışında görülecektir.

```
!files/example.txt
```

- Yukarıdaki örnekte dikkat edilmesi gereken önemli bir ayrıntıyı açıklayacak olursak eğer ki daha öncesinde `files` klasörü `.gitignore` dosyasına eklenmişse sonrasında ise `!`  içerisindeki dosya ile işlem yapmak işe **yaramayacaktır.**

```
files/
!files/example.txt
```

- `.gitignore` dosyasında yorum satırı oluşturmak için ise `#` karakteri kullanılır.

```
# production
/build
  
# dependencies
/node_modules
```

Kullanımından da bahsettiğimize göre gelelim dikkat edilmesi gereken hususlara...

## Neye dikkat etmeliyim?

- Eğer projenizi `git add .` veya `git commit ` etmişseniz sonrasında  `.gitignore`  dosyasına eklemek istediğiniz dosyayı ekleseniz de bu işlem gerçekleşmeyecektir ve o dosyanız reponuzda hala GIT ile takip edilecektir. Tabi her şeyin bir çözümü olduğu gibi bu sorunu da çözmenin bir yolu var. İşte o çözüm .

```bash
$ git rm --cached FILENAME
```

- Hani olur da derseniz ben belli dosyalarımı her seferinde `.gitignore` dosyasına eklemek istemiyorum bunu tek seferde halledebilir miyim ? Tabii ki buna da bir çözüm bulmuş GIT babamız :)

*Burada kastımız başka başka projeler için her seferinde eklememek.*

- Windows kullanıcısı iseniz  `C:\Users\{myusername}\` adresine giderek  `.gitignore_global` dosyası oluşturup içerisine global olmasını istediğiniz dosyaları ekledikten sonra git bash terminalinizi açarak aşağıdakı komut ile konfigürasyon sağlayabilirsiniz. 

```bash
$ git config --global core.excludesfile "%USERPROFILE%\.gitignore"
```

- Dosyanızın doğru çalıştığını kontrol etmek için ise aşağıdaki komutu çalıştırarak aşağıdaki çıktıyı aldığınızda sorunsuz çalıştırabilmişsinizdir. (Aşağıdaki kodu kopyala yapıştır yapmadan önce kullanıcı adını değiştirin.)
```bash
$ git config --global core.excludesfile
> C:/Users/user-name/.gitignore_global  
```

- Son olarak hangi `.gitignore` dosyalarını eklemeliyim derseniz [buradan](https://github.com/github/gitignore) hangi dil, framework vs kullanıyorsanız ona ait `.gitignore` dosyalarını bulabilirsiniz. Global olarak düzenlemek istediğiniz `.gitignore` dosyalarına da [buradan](https://github.com/github/gitignore/tree/master/Global) erişebilirsiniz. 

## Kaynaklar:
- https://docs.github.com/en/free-pro-team@latest/github/using-git/ignoring-files
- https://www.pluralsight.com/guides/how-to-use-gitignore-file
- http://git-scm.com/docs/gitignore
- https://sebastiandedeyne.com/setting-up-a-global-gitignore-file/
