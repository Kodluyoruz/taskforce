# State ve Lifecylce

## State

React ortamında tanımlanan değişkenlere state adı verilir.

Componentlerin belirli bir yaşam döngüleri vardır. Ekrana basılan herhangi bir component ne zaman yenilenmesi gerektiğini yaşam döngüsünün tetiklemelerine göre belirler. Herhangi bir T anında hiç bir değişikliğe uğramamış bir component kendini yenilemez.

Biz bu değişimleri tetiklemediğimiz sürece.

Mesela;

```js
    <Vehicles>
        <Bikes />
        <Cars />
    </Vehicles>
```

Vehicles componenti Bikes ve Cars componentlerini barındırıyor. Bikes componenti kendi içinde bir yenileme gerçekleştirdi diyelim. Yani görsel olan/olmayan bir değişiklik yaşadı. Cars bundan etkilenmeyeceği için kendini yenilemeyecektir. Bu React'ın ana prensibidir. Her component gerektiği zaman değişikliğe uğramalıdır.

Peki yenilemekten kasıt ne?

Bir component içerisinde

```js
const App = () => {
    let number = 0;

    return(
        <View>
            <Text>{number}</Text>
            <Button title="Update" onPress={() => number++}>
        </View>
    )
}

```

şu şekilde bir değişken tanımladık diyelim.

Biz butonu ne kadar tetiklersek tetikleyelim number değişkeninin güncellendiğini ekranda göremeyeceğiz. Değişken güncelleniyor mu? Evet. Ama ekranda görüntülemek için componentin yenilenmesi gerekiyor. Yani güncel değerlerle ekrana yeniden yazdırılması gerekiyor.

İşte bu noktada devreye state yapıları giriyor.

```js
const App = () => {
    const [number, setNumber] = React.useState(0);

    return(
        <View>
            <Text>{number}</Text>
            <Button title="Update" onPress={() => setNumber(number + 1)}>
        </View>
    )
}

```

Ben ne zaman butonu tetiklersem number değerinin birer birer arttığını görüntüleyebiliyorum. Çünkü useState benim için özel bir fonksiyon, bir hook. Öyle bir fonksiyon ki ben o fonksiyondan dönen number değerini setNumber ile güncellediğimde, bu değişikliği componentte bildiriyor, yeni değerler ile kendini yeniden derle diyor. 

Haliyle ben number'ı 5'ten 6'ya çıkardığımda;

```js
        <View>              ==>    <View>
            <Text>5</Text>  ==>        <Text>6</Text>
            ..              ==>        ..
            ..              ==>        ..
        </View>             ==>    </View>
```

şu şekilde bir güncelleme yapmış oluyorum. Bana bu componenti yeni değerleri ile ekrana bas demiş oluyorum.

State'ler bu değişiklikleri tetikleyebilen özel yapılardır.

## Lifecycle

Her componentin bir yaşam süreci vardır. Doğar, yaşar ve ölür. Biz geliştirme sürecinde bu componentlerin yaşam evrelerini yönetiriz.

Örneğin bir componentin oluşturulduğu anda bir endpoint'ten veri çekmesini isteyebiliriz ya da kaldırıldığı, yok edildiği anda bir işlem gerçekleştirmesini isteyebiliriz. İşte React bize bu evrelerde kullanabileceğimiz özel yapıları sunuyor.

Functional componentlarda yaşam evrelerinde büyük rol oynayan hook useEffect hooku dur.

         
![1.007](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/react-native/state_ve_lifecycle/figures/7.008.jpeg)

![1.008](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/react-native/state_ve_lifecycle/figures/7.009.jpeg)

🔧
- https://www.youtube.com/watch?v=4ORZ1GmjaMc
- https://www.youtube.com/watch?v=Zz9pLellSQA
- https://www.youtube.com/watch?v=Oioo0IdoEls
