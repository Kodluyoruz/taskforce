# If koşulu
Programlar, bir durumun doğru veya yanlış olma ihtimaline göre farklı davranışlar sergiler. Mevcut şartları sorgulamak ve programın akışını yönlendirmek için koşullu ifadelerden (kontrol yapılarından) faydalanırız.
Bir durumu “eğer” şartı/şartları ile kontrol etmemizi sağlar.
Örneğin, sayısal tipli bir değişkenin sahip olduğu değeri tek ya da çift olma durumuna göre kontrol etmek istiyoruz. Sayı eğer çift ise ekrana mesaj yazdıracağız.
```go
package main
 
import "fmt"
 
func main() {
    i := 4
 
    if i%2 == 0 {
        fmt.Println("çift")
    }
}
 
// output: çift 
```


 Örnekte mod operatörü ile i değişkeni kontrol ediliyor. Eğer bölümden kalan sonuç sıfır (0) ise true değeri oluşturulacak ve if       bloğu içindeki şart karşılanacaktır. Koşula uyduğu için if bloğu gövdesindeki kod parçası çalıştırılacak

