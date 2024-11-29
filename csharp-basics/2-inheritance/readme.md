# Inheritance (Kalıtım)

Bir sınıfın başka bir üst sınıftan miraz almasına kalıtım denir. Miraz veren sınıf tüm özelliklerini alt sınıfa aktarmış olur.  

Sözdizimi : 

<code>Kalıtım Alacak Alt Sınıf : Miras Verecek olan Üst Sınıf
</code>

Kalıtım çok soyut bir kavram olması itibariyle anlaşılması zor bir konudur. Bunun için en kolay anlaşılabilecek örnekler üzerinden denenmesinin faydalı olduğunu düşünüyorum. Bu da Canlılar - Hayvanlar - Bitkiler ayrımı ile anlaşılabilir. 

Hayvanlar ve Bitkileri canlılar sınıfından türeyen 2 sınıf gibi düşünebilirsiniz. Çünkü hem hayvanların hem bitlilerin ortak bazı özellik ve davranışlar vardır. Bunlar ne olabilir ? 

**Canlılar:** 
- Beslenme
- Solunum
- Boşaltım

Bu davranışlar hem hayvanlarda hem bitkilerde ordak olduğu için bir sınıf içerisinde tanımlanıp alt sınıflara yani hayvan ve bitkilere kalıtım olarak aktarılabilir. Tıpkı doğada da olduğu gibi. 

Peki Hayvanlar sınıfına yakından bakarsak; Kus ve Ordek olarak 2 ayrı sınıf türetebiliriz. Tüm hayvanlarda ortak görülebilecek bitkilerden farklı olarak sürü haline hareket ettiklerini görürüz. Kus ve ördek içinse uçma ve yüzme gibi 2 ayrı davranış var. 

**Hayvanlar:**
- Sürü halinde hareket etme

**Kuş:**
- Uçmak

**Ördek:**
- Yüzmek

Burdaki örnekleri arttırmak mümkün. Yazılımda kalıtım üzerinde çalışırken en önemli olan nokta bu gruplamayı doğru yapabilmektir. 

Şimdi yukarıdaki modellemeyi koda dökerek sınıfları ve metotlarını yazalım. 

**Canlılar**


    public class Canlilar {
        public void Beslenme(){
            Console.WriteLine("Canlılar beslenir.");        
        }

        public void Solunum(){
            Console.WriteLine("Canlılar solunum yapar."); 
        }

        public void Bosaltim()
        {
            Console.WriteLine("Canlılar boşaltım Yapar."); 
        }
    }

**Hayvanlar:**

    public class Hayvanlar: Canlilar{
        public void SuruHalindeHareket(){
            Console.WriteLine("Hayvanlar sürüler halinde hareket eder."); 
        }
    }

    public class Kus:Hayvanlar{
        public void Ucmak(){
            Console.WriteLine("Kuşlar uçar");
        }
    }

    public class Ordek:Hayvanlar{
        public void Yuzmek(){
            Console.WriteLine("Ördekler yüzer");
        }
    }

**Bitkiler:**

    public class Bitkiler: Canlilar{
        public void FotosentezYapmak(){
            Console.WriteLine("Bitkiler fotosentez yapar."); 
        }
    }

    public class TohumluBitkiler:Bitkiler{
        public void TohumlaCogalma(){
            Console.WriteLine("Tohumlu bitkiler tohumla çoğalır.");
        }
    }

     public class TohumsuzBitkiler:Bitkiler{
        public void SporlaCogalma(){
            Console.WriteLine("Tohumsuz bitkiler sporla çoğalır.");
        }
    }

Şimdi Tohumlu bitkiler ve Ördek sınıfının nesnesini yaratalım.

    TohumluBitkiler tohumluBitki = new TohumluBitkiler();
    tohumluBitki.Beslenme();
    tohumluBitki.Bosaltim();
    tohumluBitki.Solunum();
    tohumluBitki.FotosentezYapmak();
    tohumluBitki.TohumlaCogalma();

    Console.WriteLine("**********************");
    
    Ordek ordek = new Ordek();
    ordek.Solunum();
    ordek.Beslenme();
    ordek.Bosaltim();
    ordek.SuruHalindeHareket();
    ordek.Yuzmek(); 

Yukarıdaki örnekte görebileceğiniz üzere. Her sınıf kendi kalıtım aldığı sınıfın metotlarına erişebiliyor. Çünkü üst sınıfından belirli davranışları miras almıştır.  