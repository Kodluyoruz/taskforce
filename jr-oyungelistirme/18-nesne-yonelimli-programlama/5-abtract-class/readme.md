# Abstract Class
Abstract class ları sadece kalıtım için kullanılan sınıflar gibi düşünebilirsiniz. Bazı özellikleri ile sınıflara benzerlerken bazı özellikleriyle arayüzlere benzerler. Abstract sınıfları arayüz ve virtual metotların birleşimi gibi davranış gösterirler. 

Kısaca abstract sınıfların özelliklerine bakacak olursak:  
* Normal sınıflar gibi **new()** anahtar kelimesi ile türetilemezler. 
* Interface ler gibi metot bildirimi yapabilirsiniz. 
* Sanal metotları override eder gibi abstract metotlar override edilebilir. 
* Abstract metotların gövdesi yazılamaz. 
* Bir abstract class bir abstract metot içeriyorsa, abstract sınıftan türeyen tüm sınıflar bu metodu override etmek zorundadır. 
* Bir sınıf sadece tek abstract sınıftan kalıtım alabilir. 
* Abstract sınıf başka bir abstract sınıftan kalıtım alabilir. Dolaylı olacak türeyen sınıfta birden fazla abstract dan kalıtım almış olur. Ve bağlantılı olduğu tüm abstract sınıfların bildirimi yapılmış olan abstract metotlarını  override etmek zorundadır. 



**ONEMLI:**<u>Abstract sınıf içerisinde metot bildirimi yapabilmek için metodun erişim belirtecinden sonra **"abstract"** anahtar kelimesi mutlaka yazılmalıdır.</u>

**ONEMLI:**<u>Abstract metotdan türetilmiş sınıf içerisinde abstract metodun kullanılabilmesi için de **override** anahtar kelimesinin kullanılması gerekir.</u>




