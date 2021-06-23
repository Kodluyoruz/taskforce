# Encapsulation Kavramı ?
C#'ın %100 nesne yönelimli bir dil olduğundan bahsetmiştik. **Encapsulation** yani **Kapsülleme** kavramı bir özeliği başka sınıflardan saklamak yada korumaktır.

Örneğin siz bir propery yani özellik tanımı yaptınız ve diğer sınıflar içerisinden erişilsin ama sadece okumak için erişilsin değeri dışarıdan değiştirilemesin istiyorsunuz bunu kapsülleme yaparak sağlayabilirsiniz. Kapsülleme işlemini ise property leri kullanarak yapabilirsiniz.

Kapsülleme sayesinden nesneler bilinçsiz olarak kullanımdan korunmuş olur. Fakat bazı durumlarda private field'lara erişmemiz ve özelliklerini değiştirmemiz gerekebilir. Bu durumda **Property Kavramı** devreye girer. Property bir field'ın değerini geri döndürmeye(**Get**) ve yeni bir değer(**Set**) atamaya olanak sağlar. 

Örnek bir property kullanımı aşağıdaki gibidir: 

    class Ogrenci
    {
        private string name; //field

        public string Name //property
        {
            get { return name; }
            set { name = value; }
        }
    }

Yukarıda Ogrenci sınıfı içerisinde "name" isminde private bir field tanımı görüyorsunuz. Yani bu field'a sınıf dışında bir yerden erişilemez. Altındaysa "Name" isminde "name" field'ını geri döndüren **Get metodu** ve "name" field ına yeni değer atamasını yapabilen bir **Set metodu** barındıran bir property tanımı görüyoruz. 

Burda property tanımlayarak "name" field'ını sınıf dışından yapılabilecek bilinçsiz atamalardan koruduk. Public property nin set metodu içerisinde bu field'a atanabilecek verileri kontrol edebilir ve müdahale edebiliriz.


Aşağıdaki örnekte yaş olarak negatif bir değer atamasına engel olan property tanımını görebilirsiniz. 


    class Person
    {
        private int age=0;
        public int Age
        {
            get { return age; }
            set {
                if (value > 0)
                age = value;
            }
        }
    }