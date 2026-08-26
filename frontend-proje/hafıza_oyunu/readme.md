# Proje 3 - Hafıza Oyunu 

4x3 matris üzerinde çalışan bir hafıza oyunu geliştirmeniz gerekiyor.

Board üzerinde toplam 12 kart vardır ve her karttan iki adet bulunmaktadır. Oyun başladığında
kartlar tamamen kapalı olarak gelir. Arka arkaya iki kart seçilir ve eğer bu kartlar birbirinin aynıysa o kartlar ekrandan kaldırılır. Eğer kartlar birbirinden farklıysa, kartlar tekrar kapatılır.

![preview](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/frontend-proje/haf%C4%B1za_oyunu/figures/preview.png)


## Gereksinimler
-  Her deneme işleminden sonra "moves" değeri bir arttırılmalıdır. Bu değer, oyundan alınan puanı belirtir.
-  Oyun bitiminde, eğer en iyi skor yapılmışsa ilgili skor localStorage'a yazılmalı ve  ekranda da gösterilmelidir.
-  Ekranın en altında "Restart" butonu olmalıdır.
-  Her restart işleminde kartlar rastgele karıştırılmalıdır.
