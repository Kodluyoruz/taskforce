# Filter ile Array İçerisinde Sadece İstenilen Bilgilerin Yeni Listeye Eklenmesi
Bir Array metodu olan **filter()**, dizi elemanlarını döngüye alıp, istediğimiz koşula sahip olanlarla yeni bir dizi oluşturmak için kullanılır. Orijinal diziyi bozmaz.

```javascript
const products = ["Mikrofon","Kablo","Telefon","Bilgisayar","Mouse","Klavye","Ekran"]
```

Yukarıda *products* dizisinden, harf sayısı 5'ten fazla olanları almak istiyorum.

```javascript
const newProducts = products.filter(eleman => eleman.length > 5)
console.log(newProducts); //["Mikrofon", "Telefon", "Bilgisayar", "Klavye"]
```

Yukardaki örnekte harf sayısı 5'ten fazla olan elemanları **filter()** metodu ile filtreleyip, *newProducts* adında oluşturduğum yeni diziye atadım.

Pekiştirmek için bir örnek daha yapalım.

```javascript
const users = [
	{fullName: "Mehmet Veli", isActive: false},
	{fullName: "Ali Duran", isActive: true},
    	{fullName: "Ahmet Yılmaz", isActive: true},
    	{fullName: "Oğuz Şahin", isActive: false},
]
```

Yukardaki *users* dizisindeki nesneler içerisinden isActive'i true olanları almak istiyorum.

```javascript
const activeUsers = users.filter(user => user.isActive === true);
console.log(activeUsers.fullName); //(2)[{...},{...}] (Ali Duran, Ahmet Yılmaz)
```
Üst satırdaki sonuç bize, activeUsers'ın 2 elemanlı, elemanları nesne olan bir dizi olduğunu söylüyor.
