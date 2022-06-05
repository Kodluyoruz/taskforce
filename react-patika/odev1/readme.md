# Ödev 1

## Gereksinimler
- Kök dizinde **"src"** isminde bir dizin oluşturun ve içerisine **"app.js"** adında bir dosya oluşturun.
  
-  **"src"** dizini altına **"lib"** adında başka bir dizin açın ve bu dizinde **"service.js"** adında bir dosya oluşturun.
-  **"service.js"** dosyası içinde **"getData"** adında bir fonksiyon oluşturun.
    -  Bu fonksiyon **"async"** olarak tanımlanmalı ve default olarak dışa aktarılmalıdır. Fonksiyonun içindeki asenkron fonksiyonlar **"await"** ile tanımlanmalıdır.
    -  Fonksiyon **Number** tipinde tek parametre alır. Bu parametre **user id**'yi belirtir.
    -  Fonksiyonun görevi aşağıdaki endpoint'e giderek parametrede verilen user id ile ilgili kullanıcının verilerini çekmek olmalı. İstekleri **"axios"** kütüphanesini kullanarak yapmanız gerekiyor. İsteği yaparken aşağıdaki endpointin sonundaki rakamı parametrede gelen user id'ile değiştirmeniz gerekiyor.

     	[https://jsonplaceholder.typicode.com/users/1](https://jsonplaceholder.typicode.com/users/1)



	-  Yine aynı fonksiyonun içerisinde ve yine aynı user id için bir de "posts" isteği yapılmalıdır.İsteği yaparken aşağıdaki endpoint'in sonundaki rakamı parametrede gelen user id'ile değiştirmeniz gerekiyor.

		[https://jsonplaceholder.typicode.com/posts?userId=1](https://jsonplaceholder.typicode.com/posts?userId=1)

	-  Artık elimizde kullanıcı bilgileri ve bu kullanıcının post'ları var. Bu iki veriyi birleştirip return edin. Birleştirme sonucunda elinizde aşağıdaki gibi bir obje bulunması gerekiyor.

		```javascript
		{
			id: 1,
			name: "Leanne Graham",
			username: "Bret",
			email: "Sincere@april.biz",
			address: {
				street: "Kulas Light",
				suite: "Apt. 556",
				city: "Gwenborough",
				zipcode: "92998-3874",
				geo: {
					lat: "-37.3159",
					lng: "81.1496"
				}
			},
			phone: "1-770-736-8031 x56442",
			website: "hildegard.org",
			company: {
				name: "Romaguera-Crona",
				catchPhrase: "Multi-layered client-server neural-net",
				bs: "harness real-time e-markets"
			},
			posts: [{
				userId: 1,
				id: 1,
				title: "sunt aut facere repellat",
				body: "quia et suscipit suscipit recusandae"
			}]
		}
		```


-  **"app.js"** dosyasına yazmış olduğunuz **"getData"** isimli fonksiyonu **"import"** edin.
-  Bir alt satırda bu fonksiyonu çalıştırın ve gelen sonucu log'layın.

