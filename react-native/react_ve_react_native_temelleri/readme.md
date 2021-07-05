# React ve React Native Temelleri

## JSX

React'ın dil formatıdır. Bir nevi Syntatic Sugar yapısıdır aslında. Daha çok okunabilir bir format sunar.

Mesela şu yapıyı;

```js
React.createElement(CatComponent, { name: "Miyavko", isCute: true }, "Meow!");
```

Şu formatta yazabilmeye olanak sağlar.

```js
<CatComponent name="Miyavko" isCute={true}>
  Meow!
</CatComponent>
```



## Component

React dünyasınındaki her bir parça. Değer alabilen, aldığı değerleri işleyebilen özel yapılar.

```js
const RockstarCard = (props) => {
  return (
    <View style={styles.rockstar}>
      <Text> {props.name} is rocking! 🔥 </Text>
    </View>
  );
};
```

Mesela burada RockstartCard adında bir component tanımlanmış. Baştan sona bir function olduğu için bu yapılara Functional Component denir. Aldığı props parametresi ise ona gönderilebilen özel değerleri temsil eder.

Bu component'i kullanmak istersek de;

```js
<RockstarCard name="Freddie Mercury" />
```

şeklinde kullanırız.



## Styling

React Native Yoga layout yapısını kullanır. Aynı CSS'de olduğu gibi benzer property'ler kullanılarak isimlendirme yapılır.

Mesela;

```js
    StyleSheet.create({
        backgroundColor: 'red',
        padding: 10,
        marginTop: 5,
        borderRadius: 20
        borderWidth: 1
    })
```

yapısı örnek bir stillendirmedir.

- https://yogalayout.com/playground/
- https://railslove.github.io/react-flexbox-playground/
- https://flexbox.buildwithreact.com



## Custom Component

React olabildiğince sadece ve yalın bir kod yazmayı hedefler. Karmaşıklığa doğru gidebilecek her bir component yapısı sadeleştirilmelidir. Haliyle okunması gittikçe zorlaşan, yönetilmesi zor bir yapı sezdiğinizde bunu parçalara bölüp kodları ayırmanız gerek. Bu arayüz bileşenleri için de geçerli. 

Tekrarlı kullanıma ihtiyaç duyulabilecek bir yapı söz konusuyla burada devreye onu bileşenlere ayırmak giriyor. Kendi yaşam döngüleri olan componentler üzerinden gitmek her zaman karmaşık yapılara kıyasla daha mantıklı bir çözümdür.

```js
const App = () => {
  return (
    <View style={styles.container}>
        <View style={styles.input_container}>
            <TextInput
                placeholder="Username.." 
                onChangeText={setUsername}
                value={username}
                style={styles.input}
            />
            <View style={styles.button_container}>
                <Icon name="account" size={20}>
                <Button title="Username" onPress={handleUsername}/>
            </View>
        </View>
        <View style={styles.input_container}>
            <TextInput
                placeholder="Email address.." 
                onChangeText={setEmail}
                value={email}
                style={styles.input}
            />
            <View style={styles.button_container}>
                <Icon name="account" size={20}>
                <Button title="Send Mail" onPress={handleSendMail}/>
            </View>
        </View>
        <View style={styles.input_container}>
            <TextInput
                placeholder="Password.." 
                onChangeText={setPassword}
                value={password}
                style={styles.input}
            />
            <View style={styles.button_container}>
                <Icon name="key" size={20}>
                <Button title="Send Password" onPress={handlePassword}/>
            </View>
        </View>
    </View>
  );
};
```
## VS

```js
const Input = ({value, placeholder, onChangeText, icon, title, onSubmit}) => {
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder} 
                onChangeText={onChangeText}
                value={value}
                style={styles.input}
            />
            <View style={styles.buttoncontainer}>
                <Icon name={icon} size={20}>
                <Button title={title} onPress={onSubmit}/>
            </View>
        </View>
}

const App = () => {
  return (
    <View style={styles.container}>
        <Input
            value={username}
            placeholder="Username.."
            onChangeText={setUsername}
            icon="account"
            title="Send Username"
            onSubmit={handleUsername}
        />
        <Input
            value={email}
            placeholder="Email address.."
            onChangeText={setEmail}
            icon="account"
            title="Send Mail"
            onSubmit={handleSendMail}
        />
        <Input
            value={password}
            placeholder="Password...."
            onChangeText={setPassword}
            icon="key"
            title="Send Password"
            onSubmit={handlePassword}
        />
    </View>
  );
};
```
Hangisi daha okunabilir?

🔧
- https://tr.reactjs.org/docs/thinking-in-react.html
- https://reactnative.dev/docs/intro-react
- https://www.fastfwd.com/custom-component-in-react-native/
- https://www.digitalocean.com/community/tutorials/how-to-create-custom-components-in-react
- https://www.freecodecamp.org/news/how-the-golden-rule-of-react-components-can-help-you-write-better-code-127046b478eb/
