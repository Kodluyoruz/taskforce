# VS Code Kurulumu

## Windows 

VS Code'u Windows işletim sistemi üzerinde kurmak için takip etmeniz gereken adımlar şu şekilde: 

1. [VS Code Kurulum Dosyası](https://go.microsoft.com/fwlink/?LinkID=534107)'nı bilgisayarınıza indirin.
2. Kurulum dosyasını üzerine çift tıklayarak çalıştırın ve ileri butpnu yönergelerini takip ederek kurulumu tamamlayın.
3. Varsayılan olarak uygulama kurulum path'i: VS Code C:\users\{kullanıcı adı}\AppData\ Local\Programs\Microsoft VS Code
4. VS Code'u başlatmak için Başlat menüsünü kullanabilir yada komut istemcisinden code . komutunu çalıştırabilirsiniz.

## Mac OS

VS Code'u macOS işletim sistemine kurmak için aşağıdaki işlem adımlarını takip edin:

1.  https://code.visualstudio.com/docs?dv=osx linkindeki VS Code Kurulum Dosyası'nı bilgisayarınıza indirin.
2.  Çift tıklayarak dosya paketini açın.
3.  Visual Studio Code.app'i, Uygulamalar (Applications) klasörüne sürükleyerek Launchpad'de kullanılabilir duruma getirin.

<u>İhtiyaç halinde VS Code'u, terminalden code komutunu çalıştırarak başlatabilirsiniz. Bunun için:</u>

1. VS Code başlatın.
   Command+Shift+P kısayolunu kullanarak Komut Paleti (Command Palette)'i açın ve "shell command" yazın.
2. Açılan menüden Shell Command: Install 'code' command in PATH komutunu seçin.
3. Yeni $PATH değerinin geçerli olması için açık olan terminal pencerenizi yeniden başlatın.

Artık, terminal penceresinde code . komutunu çalıştırarak bulunduğunuz klasörün VS Code'a açılmasını sağlayabilirsiniz.

**ÖNEMLİ NOT**: VS code ile C# geliştirirken ihtiyacımız olacak olan extension ların yüklenmesi gerekmektedir. Extension arama pencersinde belirtmiş olduğum Extension Id ler arama yaparak hızlıca bulabilirsiniz.

* .Net Core Tools (Extensison Id : formulahendry.dotnet)
* C# (Extension Id : ms-dotnettools.csharp)
* Ms Build Project Tools (Extension Id : tintoy.msbuild-project-tools)


## Linux 

VS Code Linuw ortamda kurabilmenin en basit yönyemi Snap'tir. Daha önce kullanmayanlar için Snap; Linux kullanıcılarına özel olarak oluşturulmuş bir uygulama yükleme platformudur. Snap paketi olarak hazılanmış milyonlarca uygulamayı, hemen hemen tüm Linux ortamlara kolayca yükleyebilirsiniz.

1. VS Code, Microsoft tarafından resmi olarak [Snap Store](https://snapcraft.io/) 'da bir Snap paketi olarak dağıtılmaktadır.

2. VS Code Snap paketini yüklemek için Linux terminal de aşağıdaki kodu çalıştırınız: 

<code>> sudo snap install --classic code</code>

3. Kurulum tamamlandıktan sonra Snap, arka planda VS Code'u otomatik olarak güncellemeleri denetleyecek. Yeni bir güncelleme olduğunda, sizi bilgilendirecek ve onay verirseniz yükleyecek.

**NOT:** VS Code'un, Snap haricindeki Linux kurulum seçenekleri hakkında daha fazla bilgi almak için [Visual Studio Code on Linux]( https://code.visualstudio.com/docs/setup/linux) sayfasını ziyaret edebilirsiniz.