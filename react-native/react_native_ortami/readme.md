# React Native Ortamı

**Windows için kurulum linki:** https://ezranbayantemur.medium.com/react-native-windows-kurulumu-1a145a3e8639

**macOS için kurulum linki:** https://ezranbayantemur.medium.com/react-native-macos-kurulumu-d6ea33a692e

## **ANDROID**

```
android
   |-- app (Derlenecek Android projesinin kaynak sistem kodları bu dizindedir)
   |    |
   |    |-- build (Android projesi her derlendiğinde derleme çıktıları
   |    |          bu dizinde tutulur. gradlew clean yapıldığında bu dizin
   |    |          temizlenir. Bir nevi android compile cache'idir)
   |    |-- src
   |    |    |-- debug
   |    |    |-- main
   |    |          |-- java (Android uygulamasının Java kaynak kodları)
   |    |          |-- res  (Android uygulamasının görünür ismi, icon vs.
   |    |          |         bilgilerinin tutulduğu dizin)
   |    |          |
   |    |          |-- AndroidManifest.xml (Uygulamanın Android için nasıl derleneceğine
   |    |                                   hangi ayarlar ile çalışacağına, hangi izinlere
   |    |                                   sahip olacağına vb. bilgilerin belirtildiği dizin)
   |    |
   |    |-- build.gradle (Android uygulamasının versiyon kodu, build versiyon ayarları
   |    |                 imzalama kodları, kullanacağı paketlerin (ihtiyaç varsa) yapılandırma
   |    |                 bilgileri vb. bilgilerin belirtildiği kaynak kısım)
   |    |...
   |    |...
   |
   |
   |-- build.gradle (Android projesinin (UYGULAMA DEĞİL) ana versiyon kodları
   |                 ve kütüphanelerinin ayarlarının bulunduğu konum)
   |...
   |...
   |...
```

## **iOS**

```
  ios
   |-- <project-name>
   |        |
   |        |-- Images.xcassets (iOS projesinde kullanılacak görsellerin yer aldığı dizindir.
   |        |                    Uygulama iconları vb. ögeler bu dizinde yer alır)
   |        |          temizlenir. Bir nevi android compile cache'idir)
   |        |
   |        |-- AppDelegate.m (iOS projesinin ana derleme dosyasıdır)
   |        |
   |        |-- Info.plist (iOS projesinin nasıl derleneceği, hangi izinlere sahip olacağı,
   |        |               hangi değerlere kullanacağı gibi bilgilerin yer aldığı dosyadır)
   |        |
   |        |...
   |        |...
   |
   |-- Podfile (iOS tarafında kullanılacak 3rd paketlerin bilgisinin tutulduğu dosyadır.
   |            pod install komutu ile bu dosyada adreslenen paketler yüklenir)
   |...
   |...
```
## **Ana Proje**

```
<project>
   |-- android
   |-- ios
   |-- node_modules (Projede kullanılan tüm JS paketlerinin kaynak kodlarının bulunduğu konumdur.
   |                 package.json neyi adreslerse onu ve ona bağlı paketleri yükler.
   |                 gitignore'da da eklidir. Bu yüzden ASLA ama ASLA git'e atılmaz. Eğer
   |                 yüklenen herhangi bir pakette güncellemeye ihtiyaç varsa o paket forklanır,
   |                 güncellenir ve o url package.json'a yazılır. Bu dizine dokunulmaz)
   |
   |-- eslintrc.js (ESlint ayarlarının yapıldığı dosyadır)
   |
   |-- index.js (Projenin hangi adresten başlatılacağının bilgisinin tutulduğu dosyadır)
   |
   |-- package.json (Projede kullanılacak paketlerinin versiyonlarının tutulduğu, bu proje
   |                 dizinden çalıştırılacak scriptlerin belirtildiği vb. tüm bilglerin 
   |                 tutulduğu JSON dosyasıdır)
   |...
   |...
   |...
```

## Yararlı VSCode Eklentileri

Geliştirme sürecinde kolaylık sağlayabilecek eklentiler listesi

- [React Native Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native)
- [React Native Snippet](https://marketplace.visualstudio.com/items?itemName=jundat95.react-native-snippet)
- [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)
- [Tabnine Autocomplete AI](https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [Version Lens](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens)
- [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)
- [Conventional Commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits)

### Bonus:

- [Nord Theme](https://marketplace.visualstudio.com/items?itemName=arcticicestudio.nord-visual-studio-code)
