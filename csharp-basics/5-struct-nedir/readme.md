# Struct(Yapı) Nedir ?

Struct'lar yani yapılar sınıflara çok benzerler. Struct ile yapıp sınıf ile yapamayacağız bir işlem yoktur diyebiliriz. Peki o halde struct yani yapılara neden ihtiyaç duyulur?

Class kullanmanızı gerektirecek kadar komplex olmayan yapılarınız varsa ve verileri kapsüllemek işinizi görecekse yapıları tercih edebilirsiniz.

**Yapıların özellikleri:**
* Class lar referans tipli özellikler gösterir, Yapılar ise değer tipli özellikler gösterirler. En temel fark budur. 
* Diğer struct yada sınıflardan kalıtım almazlar.
* Interface'lerden kalıtım alabilirler. 
* **new** anahtar sözcüğü ile nesneleri yaratılabilir.
* Sınıflar gibi metot, property ve field'lardan oluşurlar. 
* Sınıf içerisinde struct, struct içerisinde de sınıf oluşturulabilir. 
* Static üye barındırabilirler.  


**Yapıların söz dizimi:**

    struct Ogrenci {
        public string Isim;
        public string Soyisim {get;set;}
        public static int OgrenciSayısı=0;
    }

