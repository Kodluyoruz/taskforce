# CSS Kutu Özellikleri(Margin, Padding, Width, Height) Kullanımı
CSS kutu özelliklerini iyi kavrayabilmek ve kullanabilmek için "kutu model" konusunu incelemek gerekir. Gelin önce "kutu modeli" konusuna bakalım.
## CSS Kutu Modeli 
![box](figures/box.png)
Resimde [Kodluyoruz'un anasayfasını](https://kodluyoruz.org) görüyoruz. İşaretlediğim alanlar birer HTML elementleri ve bir yapıyı oluşturan lego parçalarından sadece birkaçı. Kutu denmesinin sebebi de bir bütünü oluşturan lego parçaları veya kutu gibi olması. Bu kutuların aralarında mesafelerin ve içeriklerinin de kendi aralarında bir düzen olduğunu görmekteyiz. Bunun sebebi "kutu özelliklerinin" kullanılıyor olması. Özellikle yeşil kutuların içindeki yazıların belli bir mesafede olmasından ve çizdiğim yeşil hatlara değmemesinden anlayabiliriz. Burada kutu modelini şema halinde göstereceğim:

![boxmodel](figures/boxmodel_.png)

Kutu modeli margin,padding,border ve içerikten oluşur.
- İçerik(content): Elementin içinde olan resim,ses ya da yazıdır.
- Padding: İçerik ile border arasında olan boşluk.
- Border: Padding ile margini ayıran sınırdır. 
- Margin: Kutunun diğer kutularla arasındaki mesafeyi ayarlayan boşluk. 

