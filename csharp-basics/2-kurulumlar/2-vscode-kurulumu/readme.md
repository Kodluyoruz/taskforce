# VS Code Kurulumu

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

