## Burger Builder
Yorucu bir gün geçirdiniz ve size keyif veren bir yemek yemek istiyorsunuz. Aklınıza gelen ilk şey genellikle hamburger olur. Keyifle yiyebileceğiniz bir hamburgerin hayalini kurmadan önce bunu oluşturabileceğiniz bir ödev ile karşınızdayız! 3 farklı malzeme ile bir hamburger oluşturabileceğiniz bu ödevde context-api pratiği yapabileceksiniz. Önce bilgisayar başına, sonra mutfağa!

![burger-builder](https://raw.githubusercontent.com/Kodluyoruz/taskforce/react/react-js/burger-builder-context/figures/burger-builder.png)

### Proje Nasıl Çalıştırılır

- Projeyi fork'ladıktan ya da indirdikten sonra projenin bulunduğu klasörde "npm install" komutu ile gerekli paketlerin yüklenmesi gerekiyor.
- Daha sonra "npm run start" komutu ile uygulama başlatılabilir.

### Proje Hakkında

Menüden eklenen bütün malzemeleri tutabilmek için HamburgerContext içerisinde useState hook'u ile bir array oluşturulmuştur. Seçilen malzemeleri barındıran bu array kullanılarak getCalculatedTotalPrice fonksiyonu ile malzemelerin fiyatlarına göre toplam tutar hesaplanmaktadır. HamburgerContext içerisinde tanımlanan seçilen malzemeler state'i ve getCalculatedTotalPrice fonksiyonu gerekli component'lerde kullanılmak üzere HamburgerContext.Provider içinde value olarak geçilir. Menu ve Burger component'leri useContext hook'u sayesinde value olarak geçilen değerlere erişebilir.

Not: Malzeme çeşitleri ve fiyatlar ingredients.js içerisindedir.

[**Proje Repository**](https://github.com/Kodluyoruz/burger-builder-context)

