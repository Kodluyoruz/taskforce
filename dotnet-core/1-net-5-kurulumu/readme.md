# .NET 5 Kurulumu

.NET Core ile uygulama geliştirmek için öncelikle SDK paketinin kurulması gerekir.

SDK veya Software Development Kit yazılım geliştirmek için gerekli olan derleyici, cli gibi araçları içeren bir pakettir.

## Windows

Windows işletim sistemine kurulum için aşağıdaki yer alan adresten gerekli dosyalar indirilir.

https://dotnet.microsoft.com/download

Dosyalar indirildikten sonra ileri butonu aracılığıyla kurulum tamamlanır.

## Linux

Linux tabanlı işletim sistemlerine kurulum Windows işletim sistemlerine kurulumdan farklıdır.

İlk olarak .NET Core için gerekli olan Repo işletim sistemine eklenir.

```<code>
wget -q https://packages.microsoft.com/config/ubuntu/19.04/packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
```

Repo eklendikten sonra repo içerisinde yer alan dotnet paketi kurularak kurulum tamamlanır.

```
sudo apt-get install apt-transport-https sudo apt-get update sudo apt-get install dotnet-sdk-2.2

```

```
yum install rh-dotnet22 -y scl enable rh-dotnet22 bash</code>

```

**NOT:** Linux tabanlı işletim sistemlerinde kurulum Linux paket yöneticisine göre farklılık gösterir.

## MacOS için kurulum

MacOS işletim sistemine kurulum için aşağıdaki yer alan adresten gerekli dosyalar indirilir.

https://dotnet.microsoft.com/download

Gerekli olan kurulum dosyaları indirildikten sonra kurulum başlatılarak yüklenir.

## Kontrol

.NET Core SDK kurulumu ile birlikte .NET Core projesi oluşturmak ve çalıştırmak için dotnet CLI (Command Line Interface) kurulumunu yapar.

Kurulum sonrası .NET Core işletim sistemini path veya çevre değişkenleri olarak adlandırılan alanına ekler.

Bu sayede işletim sistemlerinde yer alan komut yorumlayıcında (CMD, PowerShell, Bash vb.) aşağıdaki komut çalıştırılır.

```
dotnet --version
```

İşletim sisteminde yer alan komut yorumlayıcısına yukarıda yer alan komut yazılıp çalıştırıldığında kurulan .NET Core sürümü yazılacaktır.
