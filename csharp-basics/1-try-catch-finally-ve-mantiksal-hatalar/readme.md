# Try-Catch-Finally ve Mantıksal Hatalar

Try catch blokları sayesinde uygulama içerisinde bir hata oluştuğunda belirtilen işlemler yaptırılabilir. 

**try{** Hataya sebebiyet verme ihtimali olan kod **}**

**catch {** Hata ile karşılaşıldığında ne yapılacağı buraya yazılır **}**

**finally{** Hata olsun olmasın mutlaka yapılmasını istediğimiz işler varsa buraya yazarız **}**

**Örnek**: 

    try
    {
        int a = int.Parse(Console.ReadLine());

        int b = int.Parse(Console.ReadLine());

        int c = a+b;

        Console.WriteLine(c);
    }
    catch(Exception ex)
    {
        Console.WriteLine("Bir Hata Oluştu: "+ ex.Message);
    }
    finally
    {
        Console.WriteLine("İşlem tamamlandı.");
    }

Yukarıdaki örnekte console dan alınan string ifade int.Parse metodu ile integrer a dönüştürülüyor. Ama Console dan girilen veri sayıya dönüştürülebilen bir string olmayabilir. Bu durumda bu kod hataya düşecektir. try catch bloğu içerisinde alınması gerekir. 

Uygulama geliştirirken bu tarz hataya neden olabilecek noktaları yakalıyor olmak gerekiyor. Bunun için de kod üzerinde zaman geçirmek ve düşünmek gerekiyor. Hızlıca kodu yazıp geçmek doğru bir yaklaşım değildir. Yazdığımız kod bloğunun açıklarını düşünmemiz ve bu açıklar için önlemler alıyor olmamız gerekiyor. 

