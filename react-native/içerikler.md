# React Native

#### Mobil Uygulama Geliştirme Nedir ####
Hangisi mobil uygulama geliştirmede platform seçeneklerinden biri değildir?
- Kotlin	(Doğru)
- Native
- Cross Platform	
- Hybrid


#### Mobil Uygulama Geliştirme Analizi ####
React Native hangi dil ile geliştirilir?	
- Swift 
- JS	(Doğru)
- C#	
- Java	

Cross Platform uygulama nasıl çalışır?
- İşletim sistemi tarafından direkt derlenir.	
- İşletim sisteminin web tarayıcısı ile derlenir.	
- İşletim sisteminin görüntü motoru ile derlenir.
- İşletim sistemi ile arada bir köprü kurularak derlenir.  (Doğru)


#### React Native Nasıl Çalışır ####
React Native’in dil formatının adı nedir?	
- JSX	 (Doğru)
- Obj-C	
- Java	
- XML

React Native derlenirken arada kurulan bridge’de hangi threadler yer alır	
- Java - Native - U	
- JS - Java - UI	
- JS - Native - U	 (Doğru)
- JS - Native - RN


#### Proje Dizini Genel ####
node_modules klasöründe neler saklanır?	
- Proje derlenirken kullanılan paketler	(Doğru)
- Android ve iOS proje kaynak kodları	
- Projenin ana dosyaları	
- Uygulama çıktıları

Projeye dahil edilen üçüncü parti paketlerin listesi nerede saklanır?	
- metro.config.js	
- babel.config.js	
- flow.confi
- package.json	(Doğru)


#### Proje Dizini Android ####
Android projesi için uygulama ayarları hangi dosyadan yapılır?	
- AndroidManifest.xml	 (Doğru)
- Info.plist	
- index.js	
- App.js


#### JSX Giriş ####	
Component nedir?	
- Arayüz bileşeni	 (Doğru)
- Kütüphane dizini	
- Stil belirteci	
- React’da kullanılan değişke	


#### JSX & React Native Döküman İncelemesi	####	
Stil için kullanılan modül hangisidir?	
- Component	
- Flex	
- StyleSheet (Doğru)
- React	


#### Flex Yapısı (Devam) ####	
Aşağılardan hangisi hatalı bir flex tanımlamasıdır?	
- flex: 0	
- flex: ‘1’	(Doğru)
- flex: 1	
- flex: 99


#### Component Yapısı (Devam)	####	
Hangisi doğru bir props geçirmedir?	
- `<Button title={“test”} />` (Doğru)
- `<Button title=[test] />`
- `<Button title=(test) />`	
- `<Button title:test />` 

Custom component’e neden ihtiyaç duyarız?	
- Mantıksal yapıları oluşturabilmek için	
- Kod tekrarını önlemek için	
- Daha temiz bir codebase için	
- Hepsi (Doğru)


#### State Devam #### 
State nedir?	
- Sabit olarak kalan, güncellenemeyen veri	
- Yalnızca ekranda gösterilebilen arayüz bileşen	
- Zaman içinde güncellenebilen React değişkeni	(Doğru)
- Component’e geçirilen değer	

State’e neden ihtiyaç duyarız?	
- Component’te yenileme işlemi state güncellemesi ile yapılabilir	(Doğru)
- Component’te sadece state ile veri tanımlanabilir	
- State’ler performans için kullanışsızdır.	
- State tanımlamadan bir component kullanılamaz	

Aşağıdakilerden hangisi state tanımlamasıdır?	
- const {user, setUser} = useState(null)	
- const (user, setUser) = setState(null)	
- const [user, setUser] = setState(null)	
- const [user, setUser] = useState(null)	(Doğru)


#### Lifecycle Devam (Clean up)	####	
State’lerin değişikliğini takip eden, yan etki hooks fonksiyonu hangisidir?	
- useEffect	 (Doğru)
- useClean	
- useState	
- useReact

Component’in kaldırılma anına “{…}” aşağıdaki yapılarının hangisiyle erişilebilir?	
- useEffect(() => {…})	
- useEffect(() => { return () => {…} }, [])	(Doğru)
- useState(() => { return () => {…} })	
- useState(() => {…}, [])


#### Sayfalar Arası Geçiş	####	
Sayfa geçişleri için hangi yönlendirme bileşeni kullanılır?	
- Stack	 (Doğru)
- Navigation	
- Drawer	
- Tab

Geri gelme işlemi nasıl yapılır?	
- navigation.navigate(“Back”)	
- navigation.route(“Back”)	
- navigation.goBack()	(Doğru)
- route.goBack()


#### Sayfa Geçişlerinde Veri Aktarma ####		
Sayfadan sayfaya veri nasıl aktarılır?	
- navigate(“Screen”, {id: 0})	(Doğru)
- navigate(“Screen”, (id= 0))	
- navigate(“Screen”, [id: 0])	
- navigate(“Screen”, id: 0)

Aşağıdakilerden hangisi doğru bir importtur?	
- import {createBottomTabNavigator} from ‘@react-navigation/stack’	
- import {createStackNavigator} from ‘@react-navigation/bottom-tabs’	
- import {createDrawerNavigator} from ‘@react-navigation/drawer’	(Doğru)
- import {createDrawerNavigator} from ‘@react-navigation/stack’

Sayfalar arası gönderilen aşağıdakilerin hangisinde saklanır?		
- props.route.navigate	
- props.navigation.navigate	
- props.navigation.route
- props.route.params (Doğru)


#### Çekilen Veriyi Görüntüleme	####	
Aşağıdakilerden hangisi bir Promise çözümlemesidir? 	
- async & await	(Doğru)
- then & await	
- catch & async	
- state & then


#### JSON Veri Tipi	####	
API'den başarılı bir şekilde gelen cevabın HTTP kodu kaçtır? 	
- 404	
- 200 (Doğru)
- 301	
- 500


#### State Management nedir?	####	
State Management yapılarına neden ihtiyaç duyarız?	
- Componentler bazında global bir state yapısı kurabilmek için	(Doğru)
- State yapıları kullanmamak için	
- Performansı arttırabilmek için	
- Daha az kod yazmak için


#### Redux Detayları ve Tekrar	####	
Redux kullanırken global stateleri güncellemek için kullanılan hooks aşağıdakilernden hangisidir?	
- useSelector	
- useDispatch	(Doğru)
- useRedux	
- useGlobalState


#### Mevcut Bir Yapıya Redux Entegrasyonu	####	
createStore fonksiyonunun aldığı ilk parametre nedir?	
- reducer fonksiyonudur	(Doğru)
- initialState objesidir	
- Provider componentidir	
- createStore fonksiyonu parametre almaz	

dispatch fonksiyonu hangi değerleri alır?		
- "payload" ve gönderilmek istenen parametreler	
- "action" ve gönderilmek istenen parametreler	
- Yalnızca "type"
- "type" ve gönderilmek istenilen parametreler (Doğru)

reducer fonksiyonunun parametreleri nelerdir?	
- "state": mevcut global state değerleri, "action": dispatch'ten gönderilen değerler	(Doğru) 
- "state": dispatch'ten gönderilen değerler, "action": mevcut global state değerleri	
- "redux": dispatch'ten gönderilen değerler, "action": mevcut global state değerleri	  
- "type": dispatch'ten gönderilen değerler, "state": mevcut global state değerleri

















