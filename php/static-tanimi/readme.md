# Static Kullanımı
Bir fonksiyonun çalışması bittiğinde içerisinde tanımlı olan değişkenler yok edilir yani ölürler. Fonksiyonun bir sonraki kullanımında tanımlı olan değişkenlerin eski değerleri kaybolmuş olur. Eğer fonksiyonun ikinci kez yada daha sonraki kullanımlarında içerisindeki değişkenlerin eski değerlerinin kaybolmasını istemiyorsanız o değişkenleri statik (static) olarak tanımlamanız gerekmektedir. Bu sayede değişkenlerin eski değerlerine ulaşabilirsiniz.

## Bir fonksiyon tanımlayarak inceleyelim:
```
function counter(){
    $count = 1;
    echo $count;
    $count++;
}
counter();
counter();
counter();
counter();
```
```
Sonuç: 1111
```
## Static olarak tanımlandığında ise sonuç aşağıda ki gibidir.
```
function counter(){
    static $count = 1;
    echo $count;
    $count++;
}
counter();
counter();
counter();
counter();
```
```
Sonuç: 1234
```
