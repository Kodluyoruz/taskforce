## GIT - Proje İçindeki Birden Fazla Dosyanın Versiyon Kontrol Sistemine Eklenebilmesi

Bu yazımızda projelerimizde bulunan birden fazla dosyanın versiyon kontrol sistemine gönderilmesi ve nasıl kontrol edebileceğimiz ile ilgili komutları inceliyor olacağız.

> Gitignore dosyamız varsa ve bunu düzenli olarak kontrol edebiliyorsak tüm dosyalarımızı teker teker git versiyon kontrol sistemine göndermek zorunda değiliz tek komut ile bunu yapabiliriz.

### git add

Bu komut belirttiğimiz dosyaları veya tüm proje dosyalarını versiyon kontrol sistemine göndermemize yardımcı olur.

```
//Bu şekilde kullanarak index.js dosyamızı versiyon kontrol sistemine göndermiş oluruz.
git add index.js

//"git add" komutumuzun sonuna "." ifadesini kullanarak versiyon kontrol sistemine tüm //dosyalarımızı göndermiş oluruz.
git add .
```

### git commit

**git commit -m "ilk commit"** komutu çalıştırdığımızda “ilk commit” başlığıyla o anki çalışma dizinindeki dosyaları .git içindeki özel bir bölüme(head) ekler.

![test foto](figures/ilk-kommit.png)

### git push

Commit’lediğimiz dosyaları versiyon kontrol sistemimize gönderir.

![test foto](figures/git-push.png)

GitHub hesabımızı kontrol ettiğimizde tüm dosyaların ve commit işlemlerimizin ulaştığını görmüş oluruz.

![test foto](figures/github.png)

## Sorular

1.Versiyon kontrol sistemine tüm dosyalarımızı aynı anda göndermeden önce yapılması gereken kritik işlem nedir ?

- [ ] Öncesinde commit işleminin yapılması.
- [ ] Gitignore dosyasının hazırlanması.
- [ ] Göndermek istenen tüm dosyalarının teker teker belirtilmesi.
- [ ] "Git Add ." Komutunun çalıştırılması.

2.Commit işlemi yapılmadan "git push" komutunu kullandığımızda nasıl bir sonuç ile karşılaşırız ?

- [ ] Commit mesajı olmadan dosyalarımız aktarılır.
- [ ] Commit işlemi yapılmadığı için hata verir ve dosyalarımız aktarılmaz.
- [ ] Hiçbir hata ile karşılaşmayız ve dosyalarımız aktarılmaz.
- [ ] Commit işlemi ile ilgili uyarı verir ancak dosyalarımız aktarılmış olur.

[Temel Git terimleri ve komutları](https://medium.com/@alianilkocak/temel-git-terimleri-ve-komutlar%C4%B1-6bc62b802baf)
