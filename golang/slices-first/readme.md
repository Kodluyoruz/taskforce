# Slices Bölüm 1
Go’da, dizileri doğrudan kullanmamız nadirdir. Onun yerine, dilimleri (slices) kullanırız. Dilimler, dizilerin bir bölünümünü baz alan ve temsil eden hafif yapılardır. Dilim oluşturmanın birkaç yolu mevcut, hangi yolu ne zaman kullanacağımızı daha sonra göreceğiz. İlk göreceğimiz yol, dizi oluşturmaya oldukça benzeyen bir yöntem:

```go

mySlc := []string{"Halil", "Ahmet", "Ali"}
```

