# Action Methodlar

Controller'lardan bahsederken benzer eylem gruplarını kapsayan sınıflar olduğundan bahsetmiştik. Action metotları ise bir resource üzerinde gerçekleştirilebilecek eylemler olarak düşünebilirsiniz. Yapıları itibariyle normal metot tanımından bir farkları yoktur. Http request'leri karşılayıp, servis içerisinde gerekli işlemler tamamlandıktan sonra http response'ları geri döndüren metotlardır.

Eylemlere parametre geçmenin birden fazla yolu vardır. En çok kullanılan 3 yöntem `FromBody` , `FromQuery` ve `FromRoute` attribute'leri kullanılarak yapılanlardır.

- **FromBody:** Http request inin body'si içerisinde gönderilen parametreleri okumak için kullanılır.
- **FromQuery:** Url içerisine gömülen parametreleri okumak için kullanılan attribute dur.
- **FromRoute:** Endpoint url'i içerisinde gönderilen parametreleri okumak için kullanılır. Yaygın olarak resource'a ait id bilgisi okurken kullanılır.

**Örnek Action Metot:**

        [HttpGet]
        public IActionResult GetBook([FromQuery] string id)
        {
            ... Komut satırları
        }

        [HttpGet("{id}")]
        public IActionResult GetBook(string id)
        {
            ... Komut satırları
        }

        [HttpPost]
        public IActionResult CreateBook([FromBody]Book newBook)
        {
            if(newBook==null)
                return BadRequest();

            _context.Books.Add(newBook);
            _context.SaveChanges();
            return Ok();
        }

Yukarıdaki GetBook metoduna gelen request'de `id` parametresini query string ile beklediğimizi belirttik. Örnek çağrım ise şu şekilde olabilir. https://localhost:5001/{controllerName}?id=2
