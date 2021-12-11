### Adım 2: Assetleri içe aktarın ve Prototype 1’i açın

Artık açık bir boş projemiz olduğuna göre, Prototype 1 için assetleri içe aktarmamız ve sahneyi açmamız gerekiyor

- Prototype 1 Başlangıç Dosyalarını indirmek için tıklayın, ardından sıkıştırılmış klasörü çıkarın. Windows: Dosyaya sağ tıkla > Tümünü Çıkart Mac: Dosyaya çift tıkla
- Unity'deki üst menüden Assets > Import Package (Paketi İçe Aktar) > Custom Package (Özel Paket)'i seçin, ardından çıkardığınız klasöre gidin ve Prototype-1_Starter-Files.unitypackage dosyasını seçin.
- Açılan Import Unity Package penceresinde, Import (içe aktar) seçin ve assetlerin içe aktarılmasını bekleyin.
- Project penceresinde, Assets > Scenes > açmak için Prototype 1 scene çift tıkla
- Sample Scene’i kaydetmeden silin
- Yolun başında etrafa bakmak için Sağ-tık + sürükle’yi kullanın

Adım 3: Sahneye taşıtı ekleyin

- Sürüş simülatörü yaptığımız için sahneye kendi taşıtımızı eklememiz gerekiyor.

-Proje Window’da, Assets > Course Library > Vehicles açın ve ardından bir taşıtı Hierarchy'ye sürükleyin.
-Taşıta uçmak için Sağ-tık + WASD basılı tutun, ve etrafında dönmeye çalışın
-Taşıt seçili haldeyken ve mouseunuz Scene görüntüsündeyken, odaklanmak için F ‘ye basın
ardından yakınlaştırmak ve uzaklaştırmak için mouse tekerleğini kullanın ve kaydırmak için mouse tekerleriğini basılı tutun
-Merkez noktasının etrafında dönmek için alt+sol-tık basılı tutun veya yakınlaştırmak ve uzaklaştırmak için alt+sağ-tık basılı tutun
- Eğer birşeyler yanlış giderse, düzelene kadar Geri almak için Ctrl/Cmd+Z kullanın

### Adım 4: Bir engel ekleyin ve yeniden konumlandırın

Oyunumuzun ihtiyaç duyduğu bir sonraki şey bir engel! Birini seçip taşıtın önüne yerleştirmemiz gerekiyor.

-Course Library > Obstacles (engeller) kısmına gidin ve direkt olarak Scene görünümüne bir engeli sürükleyin
- Engeliniz için Inspector’da, Transform (dönüştür) bileşeninin sağ üst köşesinde, daha fazla seçenek düğmesine tıklayın > Reset Position Not: Unity sürümünüze bağlı olarak, daha fazla seçenek düğmesi üç dikey nokta veya bir dişli simgesi olarak görünebilir
- Inspector içerisinde, XYZ Konumunu x=0, y=0, z=25 olarak değiştirin
- Hiyerarchy içerisinde, Sağ-tık > Rename (yeniden adlandır) iki nesnenizi “Vehicle” ve “Obstacle” olarak yeniden adlandırın

#### Adım 5: Kameranızı yerleştirin ve oyunu çalıştırın
Artık taşıtımızı ve engelimizi kurduğumuza göre oyunu çalıştırmayı ve kameradan bakmayı deneyelim.
