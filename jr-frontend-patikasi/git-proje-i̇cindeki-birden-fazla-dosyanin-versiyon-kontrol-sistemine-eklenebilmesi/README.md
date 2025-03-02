# GIT - Proje İçindeki Birden Fazla Dosyanın Versiyon Kontrol Sistemine Eklenebilmesi

Bu yazımızda projelerimizde bulunan birden fazla dosyanın versiyon kontrol sistemine gönderilmesi ve nasıl kontrol edebileceğimiz ile ilgili komutları inceliyor olacağız.

> `.gitignore` dosyamız varsa ve bunu düzenli olarak kontrol edebiliyorsak tüm dosyalarımızı teker teker GIT Versiyon Kontrol Sistemi'ne göndermek zorunda değiliz, tek komut ile bunu yapabiliriz.

## `git add`

Bu komut belirttiğimiz dosyaları veya tüm proje dosyalarını versiyon kontrol sistemine göndermemize yardımcı olur.
Aşağıdaki kullanım **index.js** dosyamızı versiyon kontrol sistemine göndermiş oluruz.
```bash
git add index.js
```

`git add` komutumuzun sonuna `.` ifadesini kullanarak versiyon kontrol sistemine **tüm dosyalarımızı göndermiş oluruz.**
```bash
git add .
```

## `git commit`

`git commit -m "ilk commit"` komutu çalıştırdığımızda “ilk commit” başlığıyla o anki çalışma dizinindeki dosyaları `.git`klasörü içindeki özel bir bölüme(head) ekler.

![test foto](https://raw.githubusercontent.com/Kodluyoruz/taskforce/git/git/git-proje-i%CC%87cindeki-birden-fazla-dosyanin-versiyon-kontrol-sistemine-eklenebilmesi/figures/ilk-kommit.png)

### `git push`

Commit’lediğimiz dosyaları versiyon kontrol sistemimize gönderir.

![test foto](https://raw.githubusercontent.com/Kodluyoruz/taskforce/git/git/git-proje-i%CC%87cindeki-birden-fazla-dosyanin-versiyon-kontrol-sistemine-eklenebilmesi/figures/git-push.png)

GitHub hesabımızı kontrol ettiğimizde tüm dosyaların ve commit işlemlerimizin ulaştığını görmüş oluruz.

![test foto](https://raw.githubusercontent.com/Kodluyoruz/taskforce/git/git/git-proje-i%CC%87cindeki-birden-fazla-dosyanin-versiyon-kontrol-sistemine-eklenebilmesi/figures/github.png)

## Kaynaklar
- [Temel Git terimleri ve komutları](https://medium.com/@alianilkocak/temel-git-terimleri-ve-komutlar%C4%B1-6bc62b802baf)
