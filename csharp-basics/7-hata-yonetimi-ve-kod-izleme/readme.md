# Hata Yönetimi ve Kod İzleme
Uygulama geliştirirken happy-path yani başarılı çalışma senaryoları kadar (hatta bazen daha fazla) yaşanabilecek sorunları yani hataları da düşünüyor olmamız gerekiyor. Uygulama geliştirirken karşımıza çıkabilecek 2 türlü hata var.  
- **Compile time Errors (Derleme Zamanı Hataları)** 
    
    Daha kodu yazarken karşılaşacağımız, kodun başarılı şekilde derlenmesine engel olan hatalar. Bu aslında kodumuzda bir hata var demektir. Typo hataları,  hatalı degisken kullanımı yani belirlenen kurala uygun olmayan işler gibi düşünebiliriz. Bu hatalardan korkmamıza gerek yoktur, karşımızadırlar. Kodu düzeltiriz ve yolumuza devam ederiz. 

- **Runtime Errors (Çalışma Zamanı Hataları)** 

    Çalışma zamanı hataları korkutucudur, her yazılımcının baş belası olan hatalardır. Derleyici bu hataları yaklayamaz yani uygulamanız başarılı şekilde ayağa kalkar. Ama bazen bir butona tıklandığında, bazen bir sayfa değiştirildiğinde kodda bazı sorunlar yaşanır. 
    
    Eğer çok büyük bir uygulamanız varsa, hatalarınızı da loglamıyorsanız, zor saatler sizi bekliyor demektir. Bazen bir "object reference not set to an instance of an object" hatasının kaynağını bulmak saatlerinizi alabilir. Demek istediğim şu ki; çalışma zamanı hatalarını yakalıyor olmanız gerekiyor :) 

- [Try-Catch-Finally ve Mantıksal Hatalar](1-try-catch-finally-ve-mantiksal-hatalar/)

- [Debugging, Watch ve Variables Penceleri](2-debugging-watch-ve-variables-pencereleri/)

