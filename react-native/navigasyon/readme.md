# Navigasyon

React Native uygulamalarında yönlendirme için bir çok alternatif paket mevcut.

[React Navigation](https://reactnavigation.org)

[React Native Router Flux](https://github.com/aksonov/react-native-router-flux)

[React Native Navigation](https://github.com/wix/react-native-navigation)

gibi.

Biz topluluk tarafından da sıklıkla kullanılan React Navigation üzerinden ileleyeceğiz.

## React Navigation

Tüm uygulamayı NavigationContainer yapısı ile saran, sayfalar arası hiyerarşinin component mantığında kurulduğu esnek bir yapya sahip yönlendirme paketidir.

Kapsadığı tüm ekranlara navigation ve router adından iki özel prop gönderir. Bu proplar sayesinde geçiş yapılan sayfaya ait parametreleri yakalyabilir ya da navigasyon fonksiyonlarını tetikleyebiliriz.

### Stack

Adından da anlaşılacağı üzere yığın mantığında sayfa geçisi sağlar. En temel sayfa transferi yapısıdır. Kullanıcıya uygulama bazında navigasyon geçmişi ile yönlendirme sağlanır.

[@Stack Navigator](https://reactnavigation.org/docs/stack-navigator/)

### Tab

Ekranın alt bölümde, menü tarzında bir tasarıma sahip sayfa yönlendirmesine yapan navigasyon yapısıdır. Instagram, Twitter vb uygulamarın ana yönlendirme stilidir.

[@Tab Navigator](https://reactnavigation.org/docs/bottom-tab-navigator/)

### Drawer

Yandan açılır menü şeklinde yönlendirme stiline sahip navigasyon yapısıdır. Genellikle material design uygulamaları bu tarzı tercih eder.

[@Drawer Navigator](https://reactnavigation.org/docs/drawer-navigator/)

## Nested Navigaton

Navigatorler arasında iç içe hiyerarşi kurulabilir. Tek bir adet NavigationContainer olacağından kullanıcı herhangi bir sayfadan tüm hiyerarşideki başka bir sayfaya geçebilir.

Ancak her navigator kendi routing history'sine sahiptir.

```js
function ProductStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProductList" component={Feed} />
      <Stack.Screen name="ProductDetail" component={Messages} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Products" component={ProductStack} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Favorites" component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
```
         
![1.008](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/react-native/navigasyon/figures/8.001.png)
