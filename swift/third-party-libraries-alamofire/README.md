# Alamofire

Alamofire, kolayca servis istekleri yapmamızı sağlayan bir kütüphanedir. Alamofire kütüphanesini projenize eklemeden, Apple'ın geliştiricilere sağladığı Foundation çatısı altında bulunan URLSession ile de servis isteklerinizi gerçekleştirebilirsiniz. Öncelikle Alamofire, URLSession'a göre daha basit ve kolay bir kullanıma sahip. Bu nedenle iOS geliştirmeye yeni başlayan birisinin anlaması daha kolay oluyor. Fakat kolaya kaçarken şunu da unutmamamız lazım, uygulamaya eklediğimiz her üçüncü parti kütüphane bir bağımlılık demek. Siz uygulamanızı üçüncü parti bir paket üstüne inşaa ediyorsunuz. Bu üçüncü parti paketin arkasında güçlü bir topluluk desteği yoksa yarın bir gün geliştirmelerinin durmayacağının da garantisi yoktur. Bu nedenle projeye üçüncü parti bir paket eklerken iki kere düşünmekte, bu pakete gerçekten ihtiyacınızın olduğunu doğru analiz etmekte fayda var. Aşağıda aynı servise, URLSession ve Alamofire ile yapılmış iki farklı isteği görebilirsiniz.

```
// URLSession ile yapılan bir servis isteği.
func fetchWithURLSession() {

    // Servis isteğini oluşturuyoruz. 
    let url = URL(string: "http://www.stackoverflow.com")!

    // Servis isteği için bir task oluşturuyoruz.
    let task = URLSession.shared.dataTask(with: url) {(data, response, error) in
        // data değerini açıkıyoruz ve utf8 formatında encode ediyoruz.
        guard let data = data else { return }
        print(String(data: data, encoding: .utf8)!)
    }

    // Servis istedğini gerçekleştiriyoruz.
    task.resume()
}


// Alamofire ile yapılan bir servis isteği.
func fetchWithAlamofire() {
    // Servis isteğini oluşturuyoruz.
    let request = AF.request("http://www.stackoverflow.com")
    
    // Servis istediğini gerçekleştiriyoruz ve dönecek cevap JSON tipinde olacağından responseJSON metodu ile cevabı karşılıyoruz.
    request.responseJSON { (data) in
      print(data)
    }
}
```

Yukarıda basit bir servis çağrısı yapıyoruz. Uygulamamız sadece basit bir kaç servis isteği yapıyorsa, Alamofire'ın çok bir etkisini göremeyebiliriz fakat projenin büyümesi ve karmaşıklaşması noktasında Alamofire'ın bize sağladığı pek çok avantaj olacaktır. Örneğin aşağıda daha karmışık bir çağrı URLSession ve Alamofire ile yapılıyor.

```
// URLSession ile yapılan bir servis isteği.
func fetchWithURLSession() {
    enum Error: Swift.Error {
        case requestFailed
    }

    // Build up the URL
    var components = URLComponents(string: "https://api.mywebserver.com/v1/board")!
    components.queryItems = ["title": "New York Highlights"].map { (key, value) in
        URLQueryItem(name: key, value: value)
    }

    // Generate and execute the request
    let request = try! URLRequest(url: components.url!, method: .get)
    URLSession.shared.dataTask(with: request) { (data, response, error) in
        do {
            guard let data = data,
                let response = response as? HTTPURLResponse, (200 ..< 300) ~= response.statusCode,
                error == nil else {
                // Data was nil, validation failed or an error occurred.
                throw error ?? Error.requestFailed
            }
            let board = try JSONDecoder().decode(Board.self, from: data)
            print("Created board title is \(board.title)") // New York Highlights
        } catch {
            print("Board creation failed with error: \(error.localizedDescription)")
        }
    }
}

// Alamofire ile yapılan bir servis isteği.
func fetchWithAlamofire() {
    AF.request("https://api.mywebserver.com/v1/board", method: .get, parameters: ["title": "New York Highlights"])
        .validate(statusCode: 200..<300)
        .responseDecodable { (response: DataResponse) in
            switch response.result {
            case .success(let board):
                print("Created board title is \(board.title)") // New York Highlights
            case .failure(let error):
                print("Board creation failed with error: \(error.localizedDescription)")
            }
    }
}
```

Görüldüğü gibi URLSession ile biraz daha fazla kod yazmamız gerekiyor. Yapı doğru bir şekilde kurulduğunda okunabilirliği olumsuz etkilemeyecektir fakat doğru yapıyı kuracak yetkinlikte olmayan bir geliştirici kod okunabilirliğini kötü yönde etkileyebilir.
