# API Calls #

Öncelikle bu konuya şu soruyu sorarak başlayabiliriz. API nedir? Bir web sitesi internete bağlı iken bir sunucuya(server) veri gönderir. Sunucu daha sonra bu verileri alır, yorumlar ve istenilen eylemleri gerçekleştirerek bağlı bulunduğumuz web sitesine geri gönderir. İşte tüm bunları gerçekleştiren Application Programming Interface'ler kısa adıyla API'lardır.



## ![api-call-workapi](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/react-js/api-calls/figures/api-call-workapi.png)



## Bir API'ya kaç farklı yolla istek atılabilir?

API'ın kısada nasıl çalıştığını anladığımıza göre ReactJS'te kaç farklı yöntemle verileri çekebiliriz bunlara bakalım. Bu noktada Fetch API, Axios kütüphanesi ile, Async/Await ve daha fazlasıyla verileri alabilirim. Bizler burada 2 farklı yöntemle örneklendirerek bu konuyu ayrıntısıyla ele almaya çalışacağız.

![api-calls](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/react-js/api-calls/figures/api-call.jpg)

### Axios Kütüphanesi 

Öncelikle axios kütüphanesi kullanarak oluşturduğumuz ReactJS sayfasına ham bir şekilde style'sız Axios kütüphanesini import etmeliyiz. Bu noktada npm ya da yarn paket yöneticisini kullanarak Axios kütüphanesini projemize dahil etmeliyiz aksi halde import işlemimiz başarısız olmaktadır. [İlgili linkten ulaşıp indirme adımlarını uygulayabilirsiniz https://github.com/axios/axios]

Data çekmek v.b. işlemler için functional componentlerde useEffect fonksiyonu kullanılmaktadır. Bu fonksiyon ise bize ReactJS ten import'lanmaktadır. [useEffect'i incelemek için daha önce ki konuyu inceleyebilirsiniz]

https://fakestoreapi.com/products'tan JSON verilere ulaşıp kullanabiliriz. bunun için GET isteğini aşağıdaki şekilde kodlamamız yeterlidir.

```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios'

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getApi = async() => {
      try{
        const response = await axios.get('https://fakestoreapi.com/products');
        setData(response.data)
      }catch(error){
        console.log(error)
      }
    }
    getApi()
  },[])
```

Öncelikle bir state tanımlandı ve başlangıç değeri olarak boş bir array verildi. Bu state içerisine data set edildikten sonra aynı sayfada ya da farklı bir sayfada istenildiği gibi kullanılabilir.

Yukarıdaki kod parçacığında useEffect fonksiyonuna ikinci parametre olarak boş bir array verilmiştir. Bunun sebebi sayfa ilk kez render edildiğinde bu fonksiyon çalışsın ve istekte bulunulan API'ın cevabı getirilsin. 

```javascript
const response = await axios.get('https://fakestoreapi.com/products');
```



```javascript
return (
    <ul>
      {data.map(item => (
        <li key={item.id}>
        <h5>{item.title}</h5>
        </li>
      ))}
    </ul>
  );
```

Bu kod parçası URL olarak verilen JSON datayı almakta ve response değişkenine atamaktadır. Buradaki gibi bir kod bloğuyla ise response'ta obje dönen cevabı map'leyip ekrana yazdırıyoruz ve artık aşağıdaki görüntü ile birlikte API'ımıza isteğimizi atmış ve cevabını da almış oluyoruz. (Map fonksiyonunun nasıl çalıştığı konusunda JavaScript array fonksiyonları incelenmelidir.)

![api-call-output](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/react-js/api-calls/figures/api-call-output.png)

### Fetch Yöntemi 

Bu yöntemle API'dan verileri alabilmek için herhangi bir kütüphane kullanmaya gerek yoktur ve asenkron şekilde veri almayı ve yollamayı sağlar. Fetch metodu ile tüm HTTP isteklerini gerçekleştirebiliriz. Fetch işlemini başlatmak için aşağıda gibi bir tanımı oluşturmalıyız.

```javascript
const response = await fetch(resource, [options])
```

2 adet argümanı olan fetch metodunda resource yerine bir URL, options yerine ise isteğe bağlı parametreler gelir. Örneğin method, header v.b.

```javascript
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://fakestoreapi.com/products');
      response.json()
        .then(response => setData(response));
      console.log(data)
    }
    fetchData()
  }, [])
```

Fetch içerisinde belirtmediğimiz sürece metot GET isteği atar ve istek başarılı olursa then içerisinde response objesi dönülür. Bu obje içerisindeki değeri JSON ise response.json() diyerek, text objesi ise response.text olarak alırız.

Fetch'in yapısını ve nasıl çalıştığını anlamak için JavaScript'te Promise yapısına göz atılması faydalı olacaktır.

### Kaynaklar

- https://pusher.com/tutorials/consume-restful-api-react

- https://medium.com/@omercelikceng/fetch-api-e372db942d90
