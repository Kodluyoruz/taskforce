# State Management

Uygulama içerisinde global state yönetimine verilen addır.

React'da uygulama geliştirirken component yapıları belirli bir amaca göre şekillenir. Öğrneğin ürün satışından sorumlu componentler Product ön eki ile oluşturulur ve o componentleri amacı, bağlamı (yani contexti) "Product" yapısı olur.

İşte bizim o Product yapısından sorumlu olan ve ihtiyaç duyduğu, mantıksal olarak her yerden erişilebilen bir state yapısı kurmamıza olanak sağlayan yapılara state management yapıları adı veriyoruz.

Bunlara örnek olarak;

- [Redux](https://redux.js.org)
- [Mobx](https://mobx.js.org/README.html)
- [Flux](https://facebook.github.io/flux/docs/overview)
- [Recoil](https://recoiljs.org)

ya da Reactın kendi [Context](https://reactjs.org/docs/context.html) yapısı verilebilir.

Biz endüstride de sıklıkla kullanılan Redux yapısı inceleyeceğiz.

## Redux

Temel olarak üç bileşene odaklanır; store, reducer ve Provider. 

**store:** İlgili contexte ihtiyaç duyulan statelerin tanımlamaları ve initial değerlerinin belirlendiği yapıdır. Bir JS objesidir

**reducer:** Belirlenen global statelerin güncellemesinden sorumlu fonksiyondur. Güncel state değerini ve tetiklenirken gönderilern parametreleri argüman olarak dönen bir fonksiyondur.

**Provider:** Oluşturulan yapının özel bir React componenti formunda tanımlanmasını sağlar. Bir React componentidir.

```js
const store = createStore(
    // REDUCER
    (state, action) => {
        return (
            switch(action.type)
                case: "UPDATE_USER"
                    const {newUser} = action.payload;
                    return {...state, user: newUser};
        )
    },
    {  // STORE
        user: null;
    }
) 
    // PROVIDER
    <Provider store={store}>
        <App />
    </Provider>

```

Alt componentlerin herhangi birinde kullanım şekli ise;

```js
const User = () => {
    const currentUser = useSelector(selector => selector.user);
    const dispatch = useDispatch();

    function updateUser(newUser){
        dispatch({
                type: "UPDATE_USER", 
                payload: { newUser }
            }
        );
    }

    return (
        <SafeAreaView>
            ...
            ...
            ...
        </SafeAreaView>
    )
}
```

🔧
- https://mtateam.medium.com/react-native-uygulamanıza-redux-ekleyin-c3bc260da02a
- https://redux.js.org/introduction/getting-started
- https://www.imaginarycloud.com/blog/react-native-redux/
- https://www.digitalocean.com/community/tutorials/react-react-native-redux