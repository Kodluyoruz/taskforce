# PROJE-2 : Console ToDo Uygulaması
Yeni bir console uygulaması açarak bir 3 kolondan oluşan bir TODO uygulaması yazınız. 
Uygulamada olması gereken özellikler aşağıdaki gibidir. 

- Kart Ekle
- Kart Güncelle
- Kart Sil
- Kart Taşı
- Board Listeleme

**Kart İçeriği:** 
* Baslık
* Icerik
* Atanan Kisi (Takım üyelerişnden biri olmalı)
* Büyüklük (XS, S, M, L, XL) 


**Açıklama:**

- Board **TODO - IN PROGRESS - DONE** kolonlarından oluşmalı.
- Varsayılan olarak bir board tanımlı olmalı ve 3 tane de kart barındırmalı.(Kartlar herhangi bir line'da yani kolonda olabilir.)
- Kartlar ancak takımdan birine atanabilir. Takımdaki kişiler ise varsayılan olarak tanımlanmalı. Takım üyeleri Dictionary kullanılarak key-value pair şeklinde yada bir sınıf aracılığıyla tutulabilir. Kartlara atama yapılırken takım üyeleri ID leri ile atanacak. Yani kullanılacak ypının mutlaka bir ID içermesi gerekir.

- Uygulama ilk başladığında kullanıcıya yapmak istediği işlem seçtirilir. 

        Lütfen yapmak istediğiniz işlemi seçiniz :) 
        *******************************************
        (1) Board Listelemek
        (2) Board'a Kart Eklemek
        (3) Board'dan Kart Silmek
        (4) Kart Taşımak

    -  **(1) Board Listelemek**
        
            TODO Line
            ************************
            Başlık      :
            İçerik      :
            Atanan Kişi :
            Büyüklük    :
            -
            Başlık      :
            İçerik      :
            Atanan Kişi :
            Büyüklük    :
            
            
            IN PROGRESS Line
            ************************
            Başlık      :
            İçerik      :
            Atanan Kişi :
            Büyüklük    :
            -
            Başlık      :
            İçerik      :
            Atanan Kişi :
            Büyüklük    :


            DONE Line
            ************************
            ~ BOŞ ~

    -  **(2) Board'a Kart Eklemek**

            Başlık Giriniz                                  : 
            İçerik Giriniz                                  :
            Büyüklük Seçiniz -> XS(1),S(2),M(3),L(4),XL(5)  :
            Kişi Seçiniz                                    : 

        **Büyüklükler Enum olarak saklanmalı. Kart üzerinde gösterilirken XS olarak gösterilmeli. Giriş yapılırken kullanıcıdan 1 alınmalıdır. 

        **Takım üyeleri mevcut bir listede daha tanımlanmış olamlıdır.(Program içerisinde dinamik tanımlanmasına gerek yok.) Kart tanımlarken takım üyesinin ID'si istenmeli. Tanımlı bir ID değilse "Hatalı girişler yaptınız!" uyarısı ile işlem iptal edilebilir.

    -  **(3) Board'a Kart Silmek**

            Öncelikle silmek istediğiniz kartı seçmeniz gerekiyor.
            Lütfen kart başlığını yazınız:  

        Kart bulunamaz ise:

            Aradığınız krtiterlere uygun kart board'da bulunamadı. Lütfen bir seçim yapınız.
            * Silmeyi sonlandırmak için : (1)
            * Yeniden denemek için : (2)
        
        ** Aynı isimde birden fazla kart bulunursa her ikisi de silinebilir.

    -  **(4) Kart Taşımak**

            Öncelikle silmek istediğiniz kartı seçmeniz gerekiyor.
            Lütfen kart başlığını yazınız:  
        
        Kart bulunamaz ise:

            Aradığınız krtiterlere uygun kart board'da bulunamadı. Lütfen bir seçim yapınız.
            * İşlemi sonlandırmak için : (1)
            * Yeniden denemek için : (2)
        
        Kart bulunur ise:

            Bulunan Kart Bilgileri:
            **************************************
            Başlık      :
            İçerik      :
            Atanan Kişi :
            Büyüklük    :
            Line        :

            Lütfen taşımak istediğiniz Line'ı seçiniz: 
            (1) TODO
            (2) IN PROGRESS
            (3) DONE
        
        ** Doğru bir seçim yapılırsa board listelenerek **(1) Board Listelemek** kullanılarak  kullanıcıya gösterilir. Seçim doğru değil ise "Hatalı bir seçim yaptınız!" bilgisi ile işlem sonlandırılabilir. 
    
    **NOT:** Uygulamanın yapısı genel olarak aşağıdaki gibi olmalıdır: 
        
    * Board 3 tane Line dan oluşur. 
    * Her bir line bir kart listesi tutar
    * Kart ların büyüklükleri pre-defined olan bir enum'da tutulur. 
    * Kart sadece takım üyelerinden birine atanabilir. 
    * Takım üyeleri daha önceden varsayıla olarak tanımlanmış bir listede olmalı. Struct, class yada bir koleksiyon kullanılabilir.
