# Closures

Closure'ı çoğunlukla isimsiz fonksiyonlar olarak tanımlayabiliriz. Bu fonksiyonları bir değişken veya sabit gibi tanımlayıp, kod içerisinde istediğimiz bir noktada çağırabiliriz. C ve Objective-C'de yer alan blocks veya diğer dillerde yer alan lambda fonksiyon yapısına benzer şekilde çalışırlar.

Closure, çoğunlukla bir değişkendeki değer değişikliği veya bir olayın(Örn. bir butona dokunulması durumu vb.) yakalanması için kullanılır. Bir diğer sık kullanım şekli ise, bir kod bloğu çalıştıktan sonra gerçekleştirilmesini istediğimiz işlemleri belirtebileceğimiz bir araya girme olanağı sağlamasıdır. Örneğin bir animasyon son bulduğunda yapılması gereken işlemleri closure içinde tanımlayabiliriz. Teoride karmaşık gelsede kullanım şekilleri oldukça basittir.

Closurelar üç farklı biçimde tanımlanabilir:

- Mevcut kod bloğu içerisinde global olarak tanımladığımız closure yapısı. Çağırabilmemiz için bir isim alırlar. Çeşitli parametreler alabilir ve geri dönüş tipi olabilir. 
- Bir fonksiyon parametresi olarak tanımladığımız, belirli bir noktada araya girmek için kulladığımız closure yapısı. İsim ve parametre alabilir, geri dönüş tipi olabilir. 
- Bir nesne üstünde işlem yapmamızı sağlayan closure yapısı. İsimsizdirler fakat üstünde işlem yapılan nesneye göre bazı parametreleri ve geri dönüş tipleri olabilir. Parametrelere isim verilebildiği gibi $0, $1 ... $n şeklinde index numarası ile de paramtreye erişim sağlanabilir.

### Global Closure Yapısı

Mevcut kod bloğu içinde bir değişken veya sabit tanımlar gibi closure tanımı yapabiliriz. Aşağıda parametre almayan ve değer döndürmeyen closureExample adında bir closure tanımı yapıldığı görülebilir.
```
var closureExample: () -> Void = {
    print("Closure Example")
}
```

Closure çağrıldığında yapılacak işlem, tıpkı bir fonksiyonda olduğu gibi, süslü parantezler ile oluşturulan kod bloğu içinde yapılacaktır. Bu closure tanımını, bir butona dokunulduğunda aşağıdaki gibi çağırabiliriz.

```
@IBAction func didTapButton(_ sender: UIButton) {
    print("Button Tapped!")
    closureExample()
}
```

Eğer didTapButton metodu, bir butona ait touchUpInside event ile bağlanırsa, butona dokunulduğunda terminal ekranına önce 'Button Tapped!' sonrasında ise alt satıra 'Closure Example' yazdırıldığı görülebilir. Eğer closureExample print öncesinde çağrılsaydı terminal ekranında yazıların yer değiştirdiğini görebilirdik.

Closure çağrıları sırayla işlenen kod bloklarında çok anlam taşımasa da internet çağrıları gibi servisten cevap beklediğimiz durumlarda, 'cevap döndüğünde şu işi yap' gibi komutları kolayca verebilmemizi sağladığında, daha bir anlam kazanır. Bu örnekte closure ile bir butonun touchUpInside durumunu yakaladık.

Bir değişkenin değer değişimini yakalamak için ise aşağıdaki closure kullanımını inceleyebilirsiniz.

```
var counter: Int = 0 {
    didSet {
        didIncreaseCounter(counter)
    }
}

var didIncreaseCounter: (Int) -> Void = { increasedCounter in
    print("Counter increased! Last value of counter variable is \(increasedCounter).")
}

@IBAction func didTapIncreaseCounterButton(_ sender: UIButton) {
    counter += 1
}
```

Yukarıdaki örnekte counter değişkeninin didSet durumunda didIncreaseCounter closure yapısı çağrıldı. counter değişkenine yapılan her atamada didIncreaseCounter closure yapısı tetiklenir.

### Fonksiyon İçinde Closure Yapısı

Aşağıda bir internet çağırısı içinde closure kullanımına örnek verilmiştir.

```
func fetchData(withURL url: URL, completion: @escaping (Error?) -> Void) {
    URLSession.shared.dataTask(with: url) {(data, response, error) in
        if let error = error {
            completion(error)
        }
        guard let data = data else { return }
        print(String(data: data, encoding: .utf8)!)
        completion(nil)
    }.resume()
}
```

Burada daha önce görmediğiniz pek çok yapı olabilir. Bunlara ileriki derslerimizde değineceğiz. Sadece fonksiyonun bir parametresi olan completion isimli closure tanımı ve fonksiyon içinde kullanımını dikkate almanız yeterli olacaktır.

Eğer bir closure yapısını başka bir closure içinde çağıracaksanız, tanımın başına @escaping ön ekini eklemeniz gerekiyor. Bu ön ek, tanımladığımız closure yapısını başka bir closure kapanmadan çağıracağız anlamına geliyor. Swift bu ön eki gördüğünde arka planda gerçekleşen işlemleri performans açısından optimize eder ve olası bellek kaçaklarını önler. 

Bu kısım çok karmaşık gelmiş olabilir fakat zaten bu ön ek arkaplanda birtakım işlemlerin optimize edilmesini Swift diline bildirmek amaçlı eklenir. Yani sizi bu ön eki ezbere bir şekilde, başka bir closure içinde, bir fonksiyon parametresi olarak, tanımladığınız closure'ı çağıracaksanız (ki bu Swift içinde gerçekleşen Async işlemlerde sıklıkla kullanılan bir kalıptır. Sıklıkla kullanacaksınız ve yapı o zaman kafanızda daha iyi oturacaktır.) @escaping ön ekini closure tanımına ekliyoruz.

Aşağıda bu fonksiyonun bir viewDidLoad metodu içinde çağrımını görebilirsiniz.

```
override func viewDidLoad() {
    super.viewDidLoad()
    let url = URL(string: "http://www.your-url.com")!
    fetchData(withURL: url) { error in
        if let error = error {
            print(error)
            return
        }
        print("Successful response.")
    }
}
```

### Nesne Üstüne İşlem Yapan Closure Yapısı 

Çoğunlukla dizi ve sözlük gibi birden çok elemana sahip yapılar üstünde işlem yapmak için kullandığımız closure yapısıdır. Bu closurelar üstünde işlem yapılacak nesnenin bir veya birden çok elemanını parametre olarak alır ve eğer gerekiyorsa bir geri dönüş tipi de içerebilir. Örneğin tam sayı bir dizi üstünde map ile dizinin her bir elemanını bir artıralım. 

```
var intArray = [0, 3, 1, 5, 103, 7, 7, 8, 1, 11, 4, 24]

var sortedIntArray = intArray.sorted { firstItem, secondItem in
    firstItem < secondItem
}

print(sortedIntArray)
```

Yukarıdaki örnekte, elemanları rastgele bir şekilde sıralanmış intArray adındaki dizinin elemanları sorted metodu ile küçükten büyüğe sıralanmıştır. Eğer sorted metodunun tanımını açarsak bir closure olarak tanımlandığını net bir şekilde görebiliriz.

```
@inlinable public func sorted(by areInIncreasingOrder: (Element, Element) throws -> Bool) rethrows -> [Element]
```

Bu tarz metodlara önceki derslerimizde değinmiştik. Yeri geldiğinde bu metodların kullanımına değineceğiz.
