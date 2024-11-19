# GIT Bash ile GIT Temel Komutları

GIT temel komutlarını kullanabilmek için Mac OS X'de Terminal uygulamasını, Windows'da ise GIT Bash'i açarak aşağıdaki komutları çalıştırmanız gerekir.

**Örnek Terminal görüntüsü
![terminal](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/git/git-bash-ile-git-temel-komutlari/figures/1-terminal.jpeg)

**Örnek  GIT Bash görüntüsü
![git-bash](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/git/git-bash-ile-git-temel-komutlari/figures/2-git-bash.png)

## GIT Temel Komutları
![GitHub-cheat-sheet-graphic](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/git/git-bash-ile-git-temel-komutlari/figures/3-GitHub-cheat-sheet-graphic.jpg)

**Başlıca bilmemiz gereken bazı terimler;**

- **untracked (izlenmeyen):** GIT tarafından henüz takip edilmeyen, yani yeni oluşturulmuş dosyaları ifade eder.
- **unstaged (hazırlanmamış):** Güncellenmiş ancak *commit*’lenmek için hazırlanmamış dosyaları ifade eder.
- **staged (hazırlanmış):** *Commit*’lenmeye hazır olan dosyaları ifade eder.
- **deleted (silinmiş):** Projeden silinmiş ama GIT üzerinden kaldırılmamış dosyaları ifade eder.



### `git init`
Henüz versiyon kontrolü altında olmayan bir projenin dizininde, boş bir git deposu oluşturmak için kullanılır. 

```bash
$ git init
```

![git-init](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/git/git-bash-ile-git-temel-komutlari/figures/4-git-init.png)



### `git config`

GIT’in bir çok konfigürasyon ve ayarı vardır, bunlardan ikisi user.name ve user.email olanıdır. Bu ayarları yapılandırmak için aşağıdaki komutları kullanırız. GIT'i ilk kurduğumuzda genellikle aldığımız ilk hata bu configurasyon ayarlarını yapmadığımız için gelir. Burada yazdığınız isim ve email ileride GitHub benzeri bir plat forma commit attığınızda da görüneceği için bunu bilerek isimlendirme yapmak yararlı olur. Ayrıca görüldüğü gibi bu ayarlar `--global`yani sistem genelinde geçerli ayarlardır. Proje bazlı bu ayarları değiştirebiliriz.


```bash
$ git config --global user.name "Name Surname"
```

```bash
$ git config --global user.email "test@email.com"
```

**Bu ayarların bütününü görüntülemek için:**

```bash
$ git config --list
```

**Not:**  Eğer windows işletim sistemi kullanıyorsanız, böyle bir hata ile karşılaşabilirsiniz. 

```bash
warning: LF will be replaced by CRLF in kaynak/dosya/yolu
```

**Bu hatanın çözümü için aşağıdaki komutu kullanabilirsiniz.**

```bash
$ git config core.autocrlf true
```



### `git add`
Yeni eklenen veya üzerinde değişiklik yapılan dosyaları **staged** ortamına göndermek için kullanılır.
```bash
$ git add <dosya veya klasor_name>
```

Tek seferde bütün dosyaları eklemek için ise:
```bash
$ git add .  veya  $ git add *  veya   $ git add -A .
```

Buradaki `-A` (all) tümü anlamındadır. `.` ise tüm dosya uzantılarını ifade eder.

### `git rm`
Staged ortamına eklenmiş bir dosyanın takibinin bırakılması yani **untracked** (izlenmeyen) hale getirilmesi sağlayan komuttur.

```bash
$ git rm  --cached <dosya veya klasor_name>
```

Dosyayı klasörden silmek istiyorsak eğer, aşağıdaki komutu kullanılırız.
```bash
$ git rm <dosya veya klasor_name>
```

### `git status`
Üzerinde çalışılan projenin o anki durumu hakkında bilgi verir. Yapılan değişiklikler, eklenen ve silinen dosyalar gibi bilgiler listelenir.

```bash
$ git status
```

![git-status-1](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/git/git-bash-ile-git-temel-komutlari/figures/5-git-status-1.png)


- On branch main -> *Main* branch'ınde olduğumuzu,
- Changes to be commited -> Commit'lenmeye hazır değişiklikler olduğunu,
- Modified: index.html -> Index.html dosyasında **değişiklik** yaptığımızı,
- Deleted: styles.css -> styles.css dosyasını **sildiğimizi**,

![git-status-2](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/git/git-bash-ile-git-temel-komutlari/figures/5-git-status-2.png)


- Changes not staged for commit -> Üzerinde değişiklik yapılan ama staged ortamına gönderilmemiş dosyaları ifade eder.
- Untracked files -> takibi yapılmayan dosyaları ifade eder.

### `git commit`
*Commit*, **staged** ortamına alınan dosyaların *Local Repository*’e gönderilmesidir.  En iyi uygulama yöntemi her kayıt sırasında yapılan değişiklikleri açıklayıcı bir mesaj eklemektir. Ayrıca her commit benzersiz bir kimliğe (unique ID) sahip olur. Bu sayede eski bir commit'e geri dönebilirsiniz ve herhangi bir kayıp yaşama ihtimaliniz kalmaz.

```bash
$ git commit -m "ilk commit mesajı"
```
* Buradaki **-m** (message) mesaj anlamındadır.

> Bir dili veya framework'ü yeni öğrendiğiniz zaman `commit`'leri akıllıca kullanmak işimizi oldukça kolaylaştırır. Çünkü eklediğiniz bir işlevsellik veya özelliği hatırlayacağınız bir `commit`mesajıyla kaydetmek, GIT'in doğası gereği hangi satırlarda değişiklik yaptığınızı gösterdiği için tekrar kullanmak istediğiniz zaman eklemeniz gereken komutları hatırlamanızı kolaylaştırır.


### `git log`
Projedeki commit geçmişini görüntülememizi sağlar. Bütün commit'ler, id'si, yazarı, tarihi ve mesajı ile beraber listelenir.

```bash
$ git log
```

![git-log](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/git/git-bash-ile-git-temel-komutlari/figures/6-git-log.png)



### `git branch`
Local veya remote repository üzerinde yeni bir branch (dal) eklemek, silmek veya listelemek için kullanılır.

**Projenize yeni bir branch eklemek için;**
```bash
$ git branch <branch_name>
```

**Tüm uzak ve yerel branch'lari listelemek için;*
```bash
$ git branch -a
```

**Bir branch'ı silmek için;**
```bash
$ git branch -d <branch_name>
```

### `git checkout`
Branch’ler arası veya commit'ler arası geçiş yapmak istediğimizde kullanılır.

**Mevcutta var olan branch'a geçiş yapmak için;**
```bash
$ git checkout <branch_name>
```

**Yeni bir branch oluşturup, bu branch'a geçiş yapmak için;**
```bash
$ git checkout -b <branch_name>
```

**Commitler arası geçiş yapmak için:** (Eski bir versiyona dönmek istediğimiz zaman)
```bash
$ git checkout <commit_ID>
```

### `git merge`
Başka bir branch'da olan değişiklikleri, bulunduğumuz branch ile birleştirmek istediğimizde kullanılır.
```bash
$ git merge <branch_name>
```

### `git clone`
Mevcut bir Remote Repository'de bulunan dosyaların bilgisayarımızda bir kopyasının oluşturulmasını sağlar.
```bash
$ git clone <remote_URL>
```

### `git push`
Projemizde aldığımız commit'leri, remote repository'e gönderir.
```bash
$ git push origin master
```

***Burada bahsi geçen `origin` remote repository’nin kök dizinini belirtir ve sabit bir isimdir. `master` ise sizin çalıştığınız branch (dal)’ı belirtir.***

*Henüz remote repository’niz yoksa aşağıdaki komut ile local deponuzu uzak sunucudaki depoya bağlayabilirsiniz.*
```bash
$ git remote add origin http://uzak_deponun_adresi.git
```

### `git diff`
Repository üzerinde yapılan değişikliklerden sonra dosyalar arasında oluşan farklılıkları göterir.

**Çalışma dizini ile repository (HEAD) arasındaki farklılıkları görmek için:**
```bash
$ git diff HEAD
```

**İki commit arasındaki farklılıkları görmek için:
```bash
$ git diff <commit_id_1>..<commit_id_2>
```

**Çalışma dizini ve staged ortamı arasındaki farkları görmek için:**
```bash
$ git diff --staged
```

## Kaynaklar
- https://medium.com/fedeveloper/git-bash-ile-komut-komut-versiyonlama-a354efd3063f
- https://www.jrebel.com/blog/git-cheat-sheet
- http://guides.beanstalkapp.com/version-control/common-git-commands.html
