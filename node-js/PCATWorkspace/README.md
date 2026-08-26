PCAT Projesi Çalışma Ortamı
======

PCAT projemiz için gerekli çalışma ortamını oluşturacağız. Öncelikli olarak Github hesabımızda yeni bir repository oluşturuyoruz. Uygun bir repository ismi 
belirledikten sonra **README** dosyası oluşturmadan yeni bir repository oluşturacağız. Ben burada repo ismi olarak `PCAT` kullandım.

Şimdi ise kendi bilgisayayarımızda yine `PCAT` isminde isteiğim yerde bir çalışma klasörü oluşturuyorum. Komut satırından çalışma klasörünün içerisine
geliyorum ve aşağıdaki git kodları yardımıyla önce kendi bilgisayarımda git reposu oluşturup bunu az önce Github tarafında oluşturduğum uzak repo ile
bağlayacağım.

```
echo "# test" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/githubhesabınız/PCAT.git // buraya kendi github hesabını yazacaksınız.
git push -u origin main
```

Böylelikle repomuzu oluşturmuş hatta ilk **commit** işlemimizi de yapmış olduk.


Kod yazımımızın daha iyi görünmesi için VSCode tarafında eklenti olarak **Prettier - Code formatter** kullanacağız. Eklentiyi indirdikten sonra
kullanabilmek için npm modülünü de indirmemiz gerekiyor. Ancak npm paketi indirmemiz için yapmamız gereken nedir? Projemizin **package.json**
dosyasını oluşturmak. `npm init ` ile package.json dosyamızı gerekli bilgilerle dolduruyoruz. Sonrasında
```
npm install prettier -D --save-exact
```
komutunu kullanarak prettier modülünü de indirelim. Benim kullanacağım **.prettierrc** konfigürasyonları aşağıdaki gibidir, sizler de kendi tercihlerinize göre veya
aynısı oluşturabilirsiniz.

```
{
  "tabWidth": 2,
  "useTabs": false,
  "semi":true,
  "singleQuote": true,
  "trailingComma": "es5"
}
```
Son olarak Node.js projesiyle ilgili .gitignore dosyası oluşturacağız. Bunun için `https://www.toptal.com/developers/gitignore/api/node` adresindeki içeriği
**.gitignore** dosyası oluşturarak oraya kopyalıyoruz.
