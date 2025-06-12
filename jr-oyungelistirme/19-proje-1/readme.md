# PROJE-1 : Console Telefon Rehberi Uygulaması
Yeni bir console uygulaması açarak telefon rehberi uygulaması yazınız. 
Uygulamada olması gereken özellikler aşağıdaki gibidir. 

1. Telefon Numarası Kaydet
2. Telefon Numarası Sil
3. Telefon Numarası Güncelle
4. Rehber Listeleme (A-Z, Z-A seçimli)
5. Rehberde Arama


Açıklama: 

- Başlangıç olarak 5 kişinin numarasını varsayılan olarak ekleyiniz.
- Uygulama ilk başladığında kullanıcıya yapmak istediği işlem seçtirilir. 

        Lütfen yapmak istediğiniz işlemi seçiniz :) 
        *******************************************
        (1) Yeni Numara Kaydetmek
        (2) Varolan Numarayı Silmek
        (3) Varolan Numarayı Güncelleme
        (4) Rehberi Listelemek
        (5) Rehberde Arama Yapmak

    -  **(1) Yeni Numara Kaydetmek**
        
            Lütfen isim giriniz             : 
            Lütfen soyisim giriniz          :
            Lütfen telefon numarası giriniz :
    
    - **(2) Varolan Numarayı Silmek**
        
        İsim  ve soyisime göre arama yapılması yeterlidir. 

            Lütfen numarasını silmek istediğiniz kişinin adını ya da soyadını giriniz:
        
        Kullanıcıdan alınan girdi doğrultusunda rehberde bir kişi bulunamazsa:

            Aradığınız krtiterlere uygun veri rehberde bulunamadı. Lütfen bir seçim yapınız.
            * Silmeyi sonlandırmak için : (1)
            * Yeniden denemek için      : (2)

        
        Rehberde uygun veri bulunursa: 
            
            {} isimli kişi rehberden silinmek üzere, onaylıyor musunuz ?(y/n)
        
        **Not:** Rehber uygun kriterlere uygun birden fazla kişi bulunursa ilk bulunan silinmeli.

    
     - **(3) Varolan Numarayı Güncelleme**
            
            Lütfen numarasını silmek istediğiniz kişinin adını ya da soyadını giriniz:
        
        Kullanıcıdan alınan girdi doğrultusunda rehberde bir kişi bulunamazsa: 

            Aradığınız krtiterlere uygun veri rehberde bulunamadı. Lütfen bir seçim yapınız.
            * Güncellemeyi sonlandırmak için    : (1)
            * Yeniden denemek için              : (2)
        
        Rehberde uygun veri bulunursa güncelleme işlemi gerçekleştirilir.
        
        **Not:** Rehber uygun kriterlere uygun birden fazla kişi bulunursa ilk bulunan silinmeli.

    - **(4) Rehberi Listelemek**
        
        Tüm rehber aşağıdaki formatta console'a listelenir. 

            Telefon Rehberi
            **********************************************
            isim: {}
            Soyisim: {}
            Telefon Numarası: {}
            - 
            isim: {}
            Soyisim: {}
            Telefon Numarası: {}
            .
            .

     - **(4) Rehberde Arama Yapmak**
     
            Arama yapmak istediğiniz tipi seçiniz.
            **********************************************
            
            İsim veya soyisime göre arama yapmak için: (1)
            Telefon numarasına göre arama yapmak için: (2)
        
        Arama sonucuna göre bulunan veriler aşağıdaki formatta gösterilmeli.

            Arama Sonuçlarınız:
            **********************************************
            isim: {}
            Soyisim: {}
            Telefon Numarası: {}
            - 
            isim: {}
            Soyisim: {}
            Telefon Numarası: {}
            .
            .

    
    ** Her bir feature ayrı class/method kullanarak yapılmalıdır. Mümkün olduğunca sorumlulukları parçalanmalı ve kod okunabilir olmalıdır. 
