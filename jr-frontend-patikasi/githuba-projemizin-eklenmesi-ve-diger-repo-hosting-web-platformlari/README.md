# GitHub'a Projemizin Eklenmesi ve Diğer Repo Hosting Web Platformları

GitHub'da repo oluşturabilmek için hesap oluşturma aşamalarından sonra profilimizde bulunan "Repositories" menüsünden sağ kısımda bulunan "New" butonu ile repo oluşturma kısmına erişebiliriz.

![test foto](https://raw.githubusercontent.com/Kodluyoruz/taskforce/git/git/githuba-projemizin-eklenmesi-ve-diger-repo-hosting-web-platformlari/figures/github-repo-create.png)

1. **Owner:** Reponun sahibinin seçiyoruz.
2. **Repository name:** Oluşturduğumuz reponun adını belirliyoruz.
3. **Description:** Repomuz için bir açıklama girebiliriz.
4. **Public:** Repomuzun tüm herkesin erişimini sağlar.
5. **Private:** Bu seçenek sayesinde repomuzu gizli bir şekilde oluşturabiliriz.
6. **Add a README file:** Repomuza öncesinde README dosyası oluşturmuş oluruz, dilersek daha sonrasında kendimiz ekleyebilir ve güncelleyebiliriz.
7. **Add .gitignore:** Repomuza öncesinde .gitignore dosyası oluşturabilir ve göndermek istemediğimiz dosyaları seçebiliriz, daha sonrasında aynı işlemi yapabilir ve `.gitignore` dosyamızı güncelleyebiliriz.
8. **Choose a license:** Reponuz için bir lisans seçimi yapabilmenizi sağlar.

Gerekli işlemleri tamamladıktan sonra "**Create repository**" diyerek repomuzu oluşturmuş oluruz.

![test foto](https://raw.githubusercontent.com/Kodluyoruz/taskforce/git/git/githuba-projemizin-eklenmesi-ve-diger-repo-hosting-web-platformlari/figures/git-test-repo.png)

Oluşturmuş olduğumuz repomuza bilgisayarımızdan erişebilmek için gerekli işlemleri yapmaya başlayalım.

Bilgisayarımızda oluşturmuş olduğumuz klasörümüze konsol ekranımızdan veya kullandığımız IDE yardımı ile erişim sağladıktan sonra `git init` komutumuzu çalıştıralım.

![test foto](https://raw.githubusercontent.com/Kodluyoruz/taskforce/git/git/githuba-projemizin-eklenmesi-ve-diger-repo-hosting-web-platformlari/figures/git-init.png)

Klasörümüz hazır, öncelikle `README.md` dosyamızı oluşturalım ve repomuza ilk `push` işlemini yapabilmek için adımları tamamlayalım.

![test foto](https://raw.githubusercontent.com/Kodluyoruz/taskforce/git/git/githuba-projemizin-eklenmesi-ve-diger-repo-hosting-web-platformlari/figures/git-readme.png)

Eklemiş olduğumuz README dosyasını repomuza gönderebilmek için `git add README.md` komutumuzu ile README dosyasının GitHub repomuza göndermek üzere hazırlayalım.

![test foto](https://raw.githubusercontent.com/Kodluyoruz/taskforce/git/git/githuba-projemizin-eklenmesi-ve-diger-repo-hosting-web-platformlari/figures/git-add.png)

Repomuza son yapılan değişikleri göndermeden önce `git commit -m "ilk yorum"` komutu ile neler yaptığımızı yazalım.

![test foto](https://raw.githubusercontent.com/Kodluyoruz/taskforce/git/git/githuba-projemizin-eklenmesi-ve-diger-repo-hosting-web-platformlari/figures/git-commit.png)

Bize belirtilen şekilde `git branch -M main` komutunu konsol ekranımızda çalıştıralım ve main branch oluşturalım.

![test foto](https://raw.githubusercontent.com/Kodluyoruz/taskforce/git/git/githuba-projemizin-eklenmesi-ve-diger-repo-hosting-web-platformlari/figures/git-main-branch.png)

Son aşamaya gelmeden önce ise `git remote add origin 'repo-link'` komutu ile remote bağlantımızı ekleyelim.

![test foto](https://raw.githubusercontent.com/Kodluyoruz/taskforce/git/git/githuba-projemizin-eklenmesi-ve-diger-repo-hosting-web-platformlari/figures/git-remote.png)

Son aşama olarak `git push -u origin main` komutu ile repomuza dosyalarımızı gönderelim.

![test foto](https://raw.githubusercontent.com/Kodluyoruz/taskforce/git/git/githuba-projemizin-eklenmesi-ve-diger-repo-hosting-web-platformlari/figures/git-push.png)

Ve ilk push işlemimiz ile birlikte tüm değişikliklerimizi GitHub repomuza göndermiş olduk. GitHub sayfasını yeniden yüklediğimizde böyle bir ekran ile karşılaşmış olacağız.

![test foto](https://raw.githubusercontent.com/Kodluyoruz/taskforce/git/git/githuba-projemizin-eklenmesi-ve-diger-repo-hosting-web-platformlari/figures/github-screen.png)

Böylece README dosyamızı repomuza göndermiş olduk. Sağ tarafta bulunan "1 commit" yazısının üstüne tıklayarak ise commit ile ilgili detayları görmüş oluruz.

![test foto](https://raw.githubusercontent.com/Kodluyoruz/taskforce/git/git/githuba-projemizin-eklenmesi-ve-diger-repo-hosting-web-platformlari/figures/git-commit.png)

Daha fazla detay görmek için ise sağ tarafta görünen mavi renk ile belirtilmiş commit işlemimiz için özel olarak random şekilde atanmış benzersiz yazı kısmının üstüne gelerek tıklamanız yeterli olacaktır.

![test foto](https://raw.githubusercontent.com/Kodluyoruz/taskforce/git/git/githuba-projemizin-eklenmesi-ve-diger-repo-hosting-web-platformlari/figures/github-commit-detay.png)

Bu kısımda ise commit hakkında yorum yazabilir ve detaylı olarak değişiklikleri gözden geçirebilirsiniz.

## Github Benzeri Repo Hosting Platformları

### [**GitLab**](https://about.gitlab.com/)
![test foto](https://raw.githubusercontent.com/Kodluyoruz/taskforce/git/git/githuba-projemizin-eklenmesi-ve-diger-repo-hosting-web-platformlari/figures/gitlab.png)

“GitLab nedir?” sorusunun yanıtı GitLab ile GitHub arasındaki farkın daha iyi anlaşılması açısından oldukça önemli. GitLab web tabanlı bir Git depo uygulaması olarak tanımlanabilir. Bu depo servisi **sürekli entegrasyon (CI)**, **sürekli teslimat (CD)**, **hata kayıt**, **kod gözden geçime** ve **wiki** desteğiyle çalışıyor. Başlangıçta GitLab’in büyük bir çoğunluğu Ruby ile yazılmıştır.

### [Bitbucket](https://bitbucket.org/)
![test foto](https://raw.githubusercontent.com/Kodluyoruz/taskforce/git/git/githuba-projemizin-eklenmesi-ve-diger-repo-hosting-web-platformlari/figures/bitbucket.png)

Bitbucket, 2010 yılında Atlassian firması tarafından satın alınması ile beraber **Mercurial** ile birlikte **Git** desteği de vermeye başlayan ve günümüzde de hala sadece **Git** ve **Mercurial** versiyon kontrol sistemlerini (VCS) destekleyen, yazılım projeleri kodları için web tabanlı bir depolama servisidir.

## Kaynaklar
- [GitLab Nedir?](https://www.vargonen.com/blog/gitlab-nedir/)
- [Bitbucket Nedir?](https://medium.com/plugenie/bitbucket-nedir-2cc5820b51a6)
