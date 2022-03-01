# For döngüsü
Döngü (loop), bir kod bloğunu tekrar tekrar yürütmek için kullanılır. Go, tüm döngü türlerini tek bir for anahtar sözcüğü ile yapabilir.

Başlangıcı, bitişi ve artırım/azalım miktarı belli olan döngü türüdür. Döngü, çalışacağı şartları öncesinden bilir.
```go

package main
 
import "fmt"
 
func main() {
    sum := 0
    for i := 1; i < 10; i++ {
        sum += i
    }
    fmt.Println(sum)
    // döngü kapsamında olmadığı için "i" değişkeni
    // bu alan için tanımlı değildir
}
```
  Yukarıdaki program belirli aralıktaki sayıların toplamını ekrana yazdırır. Döngü aşağıdaki durumlarda çalışır:
  
1.  i := 1 durumu ile başlatılır (init)

2.  i < 10 koşulu (condition) hesaplanır. Koşul sağlanıyorsa döngü gövdesi çalıştırılır, aksi halde döngü tamamlanır.

3.  i++ durumu çalıştırılır (post)

4. ikinci adıma geri dön



