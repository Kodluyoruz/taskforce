# Hash Function/ Hash Table

## Indexleme

Arraylerde 0 bazlı bir indexleme vardır. Bazı programlama dillerin 1 bazlı indexlemeler olsa da genel olarak 0 bazlı indexleme kullanılır.

![Indexleme](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/veri-yapilari-algoritmalar/hash-table/figures/Indexleme.png)

## Hash Function/ Hash Table

Hash Table, key value prensibine dayanan bir array kümesidir. Key olarak çağırdığınız elemanın değerini (value) yansıtır.

Hash Table yerine dizileri kullanabilirdik. Fakat her ürünü ve fiyatını tek tek aramak istemediğimiz için hash table kullanıyoruz. Peki bu süreç nasıl işliyor? Hemen bir örnek yapalım. Örneğimiz bir kuru yemiş dükkanından gelecek.

![örnek-ilk-kısım](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/veri-yapilari-algoritmalar/hash-table/figures/örnek-ilk-kısım.png)

Bu kısımda ilk olarak bulunan ürün sayımız kadar değeri olan bir Array oluşturduk.

Daha sonra hash fonksiyonundan ürünleri geçirerek index değerlerine ulaştık.

![örnek-ikinci-kısım](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/veri-yapilari-algoritmalar/hash-table/figures/örnek-ikinci-kısım.png)

Şifrelendiği için artık her badem keyi gönderildiğinde 85TL, fıstık keyi gönderildiğinde ise 69 sonucu verecektir.

Özetle, elimizde var olan verileri bir fonksiyondan geçirip indexliyoruz. Bu fonksiyona hash function, bu fonksiyon ile birleştiğimiz dizi yapısına ise Hash Table diyoruz.


# Kaynaklar

[hash-table-nedir](https://www.youtube.com/watch?v=_TCkO3DnVs4)

[hash-table-full-definition](https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/)
