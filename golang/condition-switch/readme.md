# Switch Yapısı
if/else kontrol bloğuna güçlü bir alternatif olan switch bloğu, benzer kontrollerin yanında daha güçlü bir arayüz sunar. Yine koşullar yukarıdan aşağı doğru sıralı olarak sınanır. Bir durum (sav, şart) başarılı olduğunda koşul gövdesi yürütülür.

```go

package main
 
import "fmt"
 
func main() {
    num := 2
 
    switch num {
    case 1:
        fmt.Println("num: 1")
    case 2:
        fmt.Println("num: 2")
    }
} 
```
 Yukarıdaki örnekte, switch deyimi şarta uygulanacak değeri tutar. Daha sonra case deyimleri ile sırayla koşullar sınanır. Kazanan     durum gövdesi çalıştırılır.
