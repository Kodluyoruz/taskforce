# GIT INDEX

## [GIT Versiyon Kontrol Sistemi Nedir?](git-versiyon-kontrol-sistemi-nedir/)

### Sorular
1. Hangisi GIT versiyon kontrol sisteminin sağladığı imkanlardan değildir?
	- Projelerde takım çalışmasına imkan vermesi.
	- Commit edilmiş değişikliklere geri dönülebilmesi.
	- SnapShot alınmayan değişikliklere dönme imkanı vermesi. (Doğru)
	- Versiyonlanmasını istemediğimiz dosya ve klasörleri .gitignore içinde belirtmemize imkan vermesi.
2. Branch'lerde yapılan işlemlerin master branch ile birleştirilmesi işlemine ne ad verilir?
	- repository
	- merge (Doğru)
	- pull
	- master

### Videolar
1. https://www.youtube.com/watch?v=DVUfB5Iw5js
	- Bu videoda; Git-SCM versiyon kontrol sisteminin ne işe yaradığını, git versiyon kontrol sistemi ile neler yapılabileceğini ve git versiyon kontrol sisteminde en çok kullanılan komutların neler olduğunu anlattık.

## [GIT Bash ile GIT Temel Komutları](git-bash-ile-git-temel-komutlari/)

### Sorular
1. Projedeki commit geçmişini görüntülememizi sağlayan komut aşağıdakilerden hangisidir?
	- git checkout
	- git log (Doğru)
	- git push
	- git clone
2. 'git status' komutunun tanımı aşağıdakilerden hangisinde doğru olarak verilmiştir?
	- Projemizde aldığımız commit'leri, remote repository'e gönderir.
	- Staged ortamına eklenmiş bir dosyanın takibinin bırakılması yani untracked (izlenmeyen) hale getirilmesi sağlar.
	- Staged ortamına alınan dosyaları Local Repository’e gönderir.
	- Üzerinde çalışılan projenin o anki durumu hakkında bilgi verir. Yapılan değişiklikler, eklenen ve silinen dosyalar gibi bilgiler listelenir.(Doğru)

### Videolar
1. https://www.youtube.com/watch?v=Mn3lljT-nIY
	- Bu videoda; git versiyon kontrol sisteminin terminalde kullanımını anlattık.

## [VS Code içinde Terminal Kullanarak GIT Temel Komutları](vs-code-icinde-terminal-kullanarak-git-temel-komutlari/)

### Sorular
1. Commit’lenmeye hazır olan dosyaları ifade eden terim aşağıdakilerden hangisidir?
	- untracked
	- unstaged
	- staged (Doğru)
	- deleted
2. 'git checkout' komutunun tanımı aşağıdakilerden hangisinde doğru olarak verilmiştir?
	- Branch’ler veya commitler arası geçiş yapmak için kullanılır. (Doğru)
	- Repository üzerinde yapılan değişikliklerden sonra dosyalar arasında oluşan farklılıkları göterir.
	- Henüz versiyon kontrolü altında olmayan bir projenin dizininde, boş bir git deposu oluşturmak için kullanılır.
	- Local veya remote repository üzerinde yeni bir branch (dal) eklemek, silmek veya listelemek için kullanılır.

### Videolar
1. https://www.youtube.com/watch?v=FxN-NlTCWZ0
	- Bu videoda; git versiyon kontrol sisteminin VS Code içindeki terminalde kullanımını anlattık.

## [VS Code içerisinde Terminal Kullanmadan GIT Temel Komutları](vs-code-icerisinde-terminal-kullanmadan-git-temel-komutlari/)

### Sorular
1. Yeni eklenen veya üzerinde değişiklik yapılan dosyaları staged ortamına göndermek için aşağıdaki butonlardan hangisine tıklamalıyız?
	- Discard Changes
	- Stage Changes (Doğru)
	- Initialize Repository
	- Views and More Actions
2. Views and More Actions buttonuna tıkladıktan sonra commit'lerimizi remote repository'e göndermek için aşağıdaki butonlardan hangisine tıklamalıyız?
	- pull
	- push (Doğru)
	- clone
	- checkout to

### Videolar
1. https://www.youtube.com/watch?v=5Lnjbkj-4ac
	- Bu videoda; git versiyon kontrol sisteminin VS Code içerisinde arayüz özellikleri ile nasıl kullanıldığını anlattık.

## [.gitignore Dosyası Ne İşe Yarar? Nasıl Kullanırız?](gitignore-dosyasi-ne-i̇se-yarar-nasil-kullaniriz/)

### Sorular
1. `.dll` uzantısına sahip bütün dosyaları .gitignore dosyasına eklemenin doğru kullanımı hangisidir?
	- `/.dll`
	- `*.dll` (Doğru)
	- `-.dll`
	- `!.dll`
2. Hangisi veya hangilerinde .gitignore 'a dosya eklerken doğru bir format kullanılmıştır?
	- node_modules/
	- .vscode
	- Hepsi (Doğru)
2. gitignore dosyalarına hangi tür dosyalar konulabilir?
	- Takip edilmesini istemediğimiz dosyalar
	- Apı key vb özel dosyalar
	- Geçici dosyalar
	- IDE eklentileri
	- Hepsi (Doğru)

### Videolar
1. https://www.youtube.com/watch?v=QF99zzvhgUs
	- Bu videoda .gitignore dosyasının ne olduğunu ve nasıl oluşturulduğunu anlattık. Ayrıca isterseniz kendi .gitignore dosyalarınızı oluşturabilmek için "[https://www.toptal.com/developers/gitignore](https://www.toptal.com/developers/gitignore)" sitesini de ziyaret edebilirsiniz.

## [GIT- Proje İçindeki Birden Fazla Dosyanın Versiyon Kontrol Sistemine Eklenebilmesi](git-proje-i̇cindeki-birden-fazla-dosyanin-versiyon-kontrol-sistemine-eklenebilmesi/)

### Sorular
1. Versiyon kontrol sistemine tüm dosyalarımızı aynı anda göndermeden önce yapılması gereken kritik işlem nedir ?
	- Öncesinde commit işleminin yapılması.
	- Gitignore dosyasının hazırlanması. (Doğru)
	- Göndermek istenen tüm dosyalarının teker teker belirtilmesi.
	- "Git Add ." Komutunun çalıştırılması.
2. Commit işlemi yapılmadan "git push" komutunu kullandığımızda nasıl bir sonuç ile karşılaşırız ?
	- Commit mesajı olmadan dosyalarımız aktarılır.
	- Commit işlemi yapılmadığı için hata verir ve dosyalarımız aktarılmaz.
	- Hiçbir hata ile karşılaşmayız ve dosyalarımız aktarılmaz. (Doğru)
	- Commit işlemi ile ilgili uyarı verir ancak dosyalarımız aktarılmış olur.

### Videolar
1. https://www.youtube.com/watch?v=TP2K4cx3Asw
	- Bu videoda; birden fazla dosyanın versiyon kontrol sistemine eklenmesini, branch kullanımını ve branch yapısı arasında geçişin nasıl sağlanacağını anlattık. 

## [GitHub'a Projemizin Eklenmesi ve Diğer Repo Hosting Web Platformları](githuba-projemizin-eklenmesi-ve-diger-repo-hosting-web-platformlari/)

### Sorular
1. Aşağıdakilerden hangileri versiyon kontrol sistemine yapılan değişikliği göndermek için uygulanan doğru yoldur ?
	- "git add README.md"-> "git push"-> "git commit-m "mesaj" "
	- "git commit-m "mesaj" "-> "git add README.md"-> "git push"
	- "git add ."-> "git commit-m "mesaj" "-> "git push" (Doğru)
	- "git add README.md"-> "git commit-m "mesaj" "-> "git push" (Doğru)
2. Aşağıdakilerden hangisi repo oluşturma aşamasında belirlediğimiz bilgilerin açıklaması yanlış olarak ifade edilmiştir ?
	- Description: Repomuz hakkında detaylı bir açıklama girebiliriz.
	- Private: Repomuzu bizim dışımızda kimsenin görüntüleyememesini sağlar.
	- Public: Repomuza belirlediğimiz kişilerin görüntüleyebilmesini sağlar. (Doğru)
	- Owner: Repomuzun hangi kullanıcı tarafından oluşturulacağını seçeriz.
3. Git ve GitHub arasındaki farklar nelerdir ?
	- GitHub versiyon kontrol sistemidir, Git ise projelerimizin saklandığı yerdir.
	- GitHub, git'in çalışmasını sağlayan arabirim yazılımıdır.
	- Git, GitHub'ın kısaltmasıdır.
	- Git versiyon kontrol sistemidir, GitHub ise projelerimizin saklandığı yerdir. (Doğru)

### Videolar
1. https://www.youtube.com/watch?v=lskdPhnXaQw
	- Bu videoda; kendi bilgisayarınızda tuttuğunuz projenizi GitHub Repo Hosting sitesine nasıl atabileceğinizi, gizlilik ayarlarını nasıl yapabileceğinizi ve diğer Repo Hosting sitelerini bu videoda anlattık.

## [Markdown Nedir ? Nasıl Kullanırız ?](markdown-nedir-nasil-kullaniriz-/)

### Sorular
1. Tek satır kod bloğu hangi karakterler arasına yazılır?
	- * (Yıldız)
	- \` (Backtick) (Doğru)
	- `-` (Tire)
	- " (Çift tırnak)
2. h1 başlık oluşturmak için aşağıdakilerden hangisi yapılır?
	- h1 başlık için bir işlem yapmak gerekmez, otomatik oluşur.
	- Başlık, * karakterleri arasına yazılır.
	- `#` karakterinden sonra bir boşluk bırakılarak başlık yazılır. (Doğru)
	- Backtick bloğu oluşturulup, içine yazılır.

### Videolar
1. https://www.youtube.com/watch?v=gmfFWi3wbKU
	- Bu videoda; README.md dosyasının önemini ve temel Markdown kullanımının özelliklerini anlattık.
