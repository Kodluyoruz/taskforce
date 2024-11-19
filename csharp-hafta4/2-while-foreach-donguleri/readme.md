# While ve ForEach Döngüleri
## While
Koşullar sağlandıkça komut satırlarının çalıştırılmasını sağlar. For döngüsünden farklı olarak iterasyon sayısı belli değildir. 

    int sayac = 1;
    while (sayac <= 5)
    {
        Console.WriteLine(sayac);
        sayac++;
    }

Yukarıdaki örnekte bi while döngüsü görüyoruz. **sayac** başlangıça 1 olarak verilmiş. Ve sayaç 5 den küçük veya 5'e eşit olduğu sürece console'a sayacın değirini yazdıracak. Ve her döngü sonunda sayacın değerini bir arttıracak. 

## ForEach
Foreach döngüsü diziler ve koleksiyonlarla döngüsel işlemler yapmak için kullanılır. Yapısı while ve for döngüsünden biraz farklıdır. Döngünün ne kadar devam edeceğini kulanılan dizi veya koleksiyonun eleman sayısı belirler. Her bir elaman için bir iterasyon gerçekleşir.

Yazım şekli aşağıdaki gibidir. 

    foreach(değişkenTipi değişkenAdı in diziAdı)
    {
        //Komutlar
    }

Aşağıdaki örnekte foreach döngüsü kullanarak dizinin elemanlarını topladık. 

    int[] sayiDizisi = {2,4,5,1,2,4};
    int toplam = 0 ;

    foreach(int i in SayiDizisi)
    {
        toplam += i ;
    }