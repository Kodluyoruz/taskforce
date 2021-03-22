## Todo App

Javascript bölümünde yaptığımız Todo App'in bir benzerini React ile yapalım. Böylece bu konsepti tamamen anlamış olacağız ve hayatımıza daha çok planlama koymuş olacağız. Kaostan beslenen arkadaşlardan ayrıca özür dileriz. Buyurun ödeve geçelim.

![todo-app](https://raw.githubusercontent.com/Kodluyoruz/taskforce/react/react-js/todo-app/figures/todo-app.gif)

### Proje Nasıl Çalıştırılır

- Projeyi fork'ladıktan ya da indirdikten sonra projenin bulunduğu klasörde "npm install" komutu ile gerekli paketlerin yüklenmesi gerekiyor.
- Daha sonra "npm run start" komutu ile uygulama başlatılabilir.

### Proje Hakkında

Bu basit to-do uygulamasında input'tan aldığımız ifade todo list'e ekleniyor. TodoList component'i "todos" prop'uyla aldığı array'i listeliyor. Her bir liste elemanını TodoIteme component'i temsil ediyor.

### Yapılacaklar

1. TodoHeader adlı bir component oluşturun. h1 etiketinde Todo List başlığını render edin.
2. Listedeki bir to-do elamanının üstüne tıklandığında üstü çizili halde görünür hale getirin.
3. Listeki her elemanın yanında gözükecek bir "Sil" butonu ile silme fonksiyonelliğini ekleyin.

### İpuçları

1. "Sil" butonunu TodoItem component'i içerisinde content'in yanına ekleyerek onClick event'ine verilecek bir fonksiyon ile silme fonksiyonelliğini ekleyebilirsiniz.
2. Silme fonksiyonelliği için state içindeki "todos" üzerinde filter fonksiyonuyla filtreleme yapabilir ve state'i bu şekilde güncelleyebilirsiniz.

**[Proje Repository](https://github.com/Kodluyoruz/todo-app)**

