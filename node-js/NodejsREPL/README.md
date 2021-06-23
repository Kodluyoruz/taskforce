Node.js REPL Ortamı
======

Nasıl ki Windows işletim sistemimizin terminal ekranı "Komut Sistemi" ise benzer şekilde Node.js Javascript çalışma ortamının da bir terminal ekranı vardır ve 
**Node REPL** olarak adlandırılır. REPL, Read - Eval - Print - Loop kelimelerinin baş harflerinden oluşmaktadır ve bizlere Node.js Javascript çalışma ortamında 
Javascript kodlarını çalıştırabileceğimiz bir komut satırı ortamı sunar.

![Node.js REPL](https://raw.githubusercontent.com/Kodluyoruz/taskforce/node.js/node-js/NodejsREPL/figures/repl.png)

REPL ortamını başlatmak için `node` komutunu terminal ekranına yazmak yeterli olacaktır.
```
$ node
>
```
REPL Node.js Javascript çalışma ortamına ait bir terminal ise doğal olarak Javascript ifadelerini kolaylıkla çalıştırabiliriz. Biraz Matematik ile başlayalım.
```
$ node
> 2 + 5
7
> 7 - ( 3 * 2 ) + 1
2
>
```

Tabii ki değişkenler oluşturup, bu değişkenler ile ilgili işlemler yapabiliriz ve console.log() çıktısı alabiliriz.
```
$ node
> const x = 5
undefined
>  const y = 10
undefined
> x + y
15
> console.log("Merhaba")
Merhaba
undefined
```

Fonksiyon, Class oluşturmak, Classlardan nesneler türetmek gibi tüm klasik Javascript işlemlerini yapabiliriz.

Aşağıda önemli REPL komutlarını ve işlevlerini bulabilirsiniz:
| REPL Komutları | Açıklamaları | 
| ------------- |:------------- | 
| .help     | tüm komutları listeler. | 
| .break      | çok satırlı ifadeden çıkar.      |   
| ctrl + c | çalışan komutu durdurur.      |  
| ctrl + d | REPL ortamını sonlandırır.      |  
| .save dosya_adi | REPL ortamındaki kodları dosyaya kaydeder.     |  
| .load dosya_adi | Dosyadaki kodları REPL ortamına alır.     |  

## Daha Fazlası İçin
- [Node.js Resmi Sitesi](https://nodejs.org/dist/latest-v14.x/docs/api/repl.html)
- [Tutorials Teacher](https://www.tutorialsteacher.com/nodejs/nodejs-console-repl)
- [Stackoverflow Use Node.js REPL](https://stackoverflow.com/questions/48355463/use-of-repl-in-node-js)
