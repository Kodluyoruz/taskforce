# Dictionary Nedir ?
Dictionary koleksiyonunda key-value yani anahtar-deger denen 2 kavram ile karşılaşıyoruz. Dizilere eklediğimiz elemanları value, index lerini ise key olarak düşünebilirsiniz. 

Dictionary lerin elemanlarının anahtarları birbirinden farklı olmalıdır. Aynı anahtar kullanılarak 2 değer saklanamaz.

Örnek söz dizimi şu şekildedir: 

    Dictionary<Key_Veri_Tipi, Value_Veri_Tipi> dictionary_adi = new Dictionary<Key_Veri_Tipi, Value_Veri_Tipi>();

**Örnek:**

    Dictionary<int,string> renkler = new Dictionary<int, string>();

    renkler.Add(3,"Kırmızı");
    renkler.Add(5,"Sarı");


Yukarıdaki örnekte anatarı integer olan, değeri string olan renkler adında bir dictionary tanımladık. 3-"Kırmızı", 5-"Sarı" ikililerini dictionary'e ekledik. 
