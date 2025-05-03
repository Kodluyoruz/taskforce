# Extension ve Rekürsif Metotlar

## Extension(Genişletilmiş) Metot Kullanımı

Extension Metotların kelime anlamı genişletilebilir metotlardır. C# 3.0 ile hayatımıza giren, aynı kodu defalarca yazmak yerine, bir kere yazıp her yerden erişebiliceğimiz kolay kullanımı olan metotlardır. 

Extension metot yazarken dikkat  etmemiz gereken bir kaç kural vardır. Şu şekilde : 

* Static bie class içerisinde static bir metot olarak yazılmalılar. 
*  Extension metod da tanımlı parametrelerden sadece 1 tanesi this ile tanımlanabilir. 

Küçük bir örnek ile kullanımını görelim. 

    public static class MyExtensionClass
    {
        public static bool IsEventNumber(this int value)
        {
            if(value%2==0)
                return true;
            else
                return false;
        }
    }

Yukarıdaki örnekte static class içerisinde IsEventNumber adında bir extension metot görüyoruz. Metodun kendisi de static keyword ü ile tanımlandı. this keyword ünün uygulandığı parametreye bakarsak, integer ver tipindeki değişkenlere uygulanabilir is extension metot olduğunu görüyoruz. Sayısının çift olup olmaması durumuna göre de geriye bool bir değer dönüyor. 


Extension metotların kullanımını oturtmanın en kolay yolu öncelikle işi yapacak olan metodu istenileni karşılayacak şekilde yazmaktur. Daha sonradan class ve metotu static yaparak ve genişletilecek veri tipine bağlı parametrenin başına this anahtar kelimesi ekleyerek kullanabilirsiniz. 

Yukarıdaki extension metodun örnek kullanımı ise şu şekildedir. 

int deger = 123; 
bool isEven = deger.IsEvenNumber();


## Rekürsif (Yinelemeli) Metot Kullanımı

Rekürsif metotlar ilk öğrenildiliğinde içselleştirilmesi ve kullanılması zor metotlardır. Aam yazılımın ilerleyen yıllarında kullanımı oturur ve bir çok soruna rekürsif metotları kullanarak çözüm getirebilirsiniz. O nedenle acele etmemek gerek :)

Çok sık olmasa da bazen fonksiyonun kendi kendini çağırmasına ihtiyaç duyarız. For döngüsü karmaşık bir kod yazarakta bu ihtiyacı karşılamak mümkün. Rekürsif fonksiyonlar ise tamda bu ihtiyaç için ortaya koyulmustur. 

Rekürsif fonksiyon kendi kendini çağırma yeteneğine sahip olduğu içşn kullanırken çok dikkatli olmak gerek. En büyük sorunlardan biri sonsuz döngüye neden olmalı. Bu da System.StackOverflowException olarak bilinen hataya neden olur. Yani belleğin stack bölhesinde bu fonksiyon çağrımı için ayrılan alan tükenmiştir. Yinelemeli olarak yaptığınız işe bağlı olarak risk de artar.

Aşağıdaki örneği inceleyerek ve hatta kağıt üzerinde yazarak yinelemeli fonksiyonların kullanımını daha iyi oturtabilirsiniz.


    static int FibonacciSerisi(int sayi)
    {  
        if (sayi==0)
            return 0;
        elseif (sayi==1)
            return 1;
        else
            return FibonacciSerisi(sayi-1)+FibonacciSerisi(sayi-2);
    }