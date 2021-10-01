# For döngüsü

Bir işlemi tekrarlamamız gereken durumlarda döngülerden yararlanırız. For syntaxına bakacak olursak, belirli bir başlangıç ve bitiş noktası olan, artan ya da azalan durumlarda kullanılır. Yani 1'den 10'a kadar olan sayıların toplamı;

toplam := 0

for i := 1; i<=10; i++ {
    toplam += i
}

gibi bir den fazla durumu topladığımız, çıkardığımız ya da nesne yönelimli programlama mantığında (İlerleyen aşamalarda görücez) ilerlediğimiz durumlarda kullanılır.

Özet olarak, döngüleri gereksiz işlem yapmaktan kurtulmak için kullanıyoruz ve DRY prensibini bi nevi kullanmış oluyoruz.