# Konu Metni

## Linked List vs Array

|                                      |                         Linked List                          |                            Array                             |
| :----------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| Sırası bilinen elemana ulaşma süresi | Bir elemana ulaşmak için o elemandan önceki her elemandan geçmek gerekir |                       Anında ulaşılır                        |
|        Hafızada kapladığı yer        | Her eleman içerdiği bilgiye ek olarak bir sonraki elemanın yer bilgisini tuttuğu için daha fazla yer kaplar | Her eleman sadece içerdiği bilgiyi sakladığından daha az yer kaplar |
|       Hafızada saklanış biçimi       |        Her eleman farklı farklı yerlerde saklanabilir        |    Tüm elemanlar bitişik bir şekilde aynı blokta saklanır    |
|       Eleman ekleme ve çıkarma       |         Hızlı bir şekilde eleman eklenip çıkartılır          | Eğer kapasite doluysa eleman eklemek için tüm array kopyalanır, eleman çıkarılıp boşluk doldurulacaksa tüm array bir boşluk kaydırılır |



# Sorular

1. Bir sayı listesi oluşturulacaksa ve bu listenin eleman sayısı sabit ise linked list mi yoksa array mi kullanmak daha mantıklı olur?

   Cevap: Array kullanmak daha mantıklı olur çünkü ekstra bir eleman eklenilmeyecek ve çıkarılmayacak.

2. Genel olarak hangi veri yapısı daha fazla yer kaplar?

   Cevap: Linked list.

3. Neden bir array'de sırası bilinen bir elemana linked list'ten daha hızlı ulaşılır?

   Cevap: Array'in elemanları bitişiktir ve her elemanın hafızadaki yeri ilk elemandan bulunabilir. Ancak, linked list'in elemanları hafızada farklı yerlere dağılır ve her elemanın yerini sadece ondan bir önceki eleman bilir.



# Ücretsiz Kaynak

* [Linked list vs array](https://www.youtube.com/watch?v=DyG9S9nAlUM) linkinden linked list ve array'in hız bakımından karşılaştırıldığı videoyu izleyebilirsiniz.

