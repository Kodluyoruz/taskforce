# ObjectInputStream ve ObjectOutputStream sınıfları

Java nesneleri hafızada tutulurlar. Bazen bir nesnenin hafızadaki **anlık görüntüsünü (snapshot)** daha sonra tekrar kullanmak üzere kaydetmek isteyebilirsiniz. Örneğin, birden fazla sunucunuz var ve programınız bu sunucular üzerinde dağıtık olarak çalışıyor. Bir sunucu üzerinde bulunan bir nesne diğer bir sunucu üzerinde bulunmuyor olabilir. Bu nesnenin sunucular arasında aktarılması ihtiyacı doğabilir.

Dosyalarla çalışırken okuduğumuz ve yazdığımız verilerin türünü **String**  olarak belirliyorduk. Peki bir nesneyi (veya nesneler listesini) bir dosyada tutmak istediğimizde ne yapacaz ? Nesnenin birden fazla değişkeni olabilir ve bu değişkenlerin hepsi farklı türden olabilir. Hadi biz yine de en iyi ihtimali düşünelim . Tüm değişkenler String türünde tutulmuş olsun ve tip dönüşümleriyle uğraşmayacak olalım. Bu senaryoda bile tüm değişkenleri tek tek dolaşıp değerleri dosyaya yazmamız gerekiyor. Daha sonra okuduğumuzda değerleri bir birinden ayırt etmek için yazarken de bir format belirlememiz gerekiyor. Birden fazla nesne tutmaya çalışsak ortalık daha da karışacak.  

Nesnelerin hafızadaki anlık durumu bir byte dosyası olarak kaydedilebilir. Bu işleme **serialization** denir. Daha sonra bu dosya okunup nesne tekrar hafızaya alınabilir ve kullanılabilir. Bu işleme **deserialization** denir.

Nesneleri serialize etmek için **_ObjectInputStream_**, deserialize etmek için **_ObjectOutputStream_** sınıfı kullanılır.

##### **_ObjectOutputStream_** :

![ObjectOutputStream](https://github.com/mustafakilicc/taskforce/blob/main/java/java-101/ObjectInputStream-ObjectOutputStream-siniflari/figures/Objoutputstream.png)

**ObjectOutputStream'in** yaptığı, bir nesneyi bayt düzeyindeki akışa yazılabilen bir bayt dizisine dönüştürmektir. **OutputStream** sınıfını kalıtım alan sınıflar bir değeri byte formatını çevirme yeteneğine sahip oluyor. ObjectOutputStream bu yeteneği kullanıp nesneleri de byte türünde saklayabilmemizi sağlıyor.


##### **_ObjectInputStream_**:

![Objectinputstream](https://github.com/mustafakilicc/taskforce/blob/main/java/java-101/ObjectInputStream-ObjectOutputStream-siniflari/figures/Objinputstream.png)

Şunu da önemle belirtmek gerekir ki, bir nesneyi serialize edebilmek için o sınıfın **_Serializable_** arayüzünü uygulaması gerekir.

Tek bir nesneyi yazıp okuduğumuz bir örnekle başlayalım.

Kullanacağımız nesnelerin ait olacağı sınıfı inceleyelim:

```java
import java.io.Serializable;

public class Employee implements Serializable {

	public String name;
	public String lastName;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

}
```

Bu sınıfta dikkat etmeniz gereken en önemli kısım `implements Serializable`  implemantasyonudur.

> Şunu da önemle belirtmek gerekir ki, bir nesneyi serialize edebilmek için o sınıfın **_Serializable_** arayüzünü uygulaması gerekir.

Nesne modelimiz hazır, dosyaya yazabiliriz artık.

```java
//Dosyamızın yolunu verip bir file nesnesi oluşturduk.
File file = new File("employee.txt");

//Nesneler Bir karakter dizisi değil bir byte dizisi olarak tutulacağı için  FileWriter yerine FileOutputStream kullandık.
FileOutputStream fos = new FileOutputStream(file);

//ilk iki satırı daha önce dosya işlemleri yaparken görmüştük.
//ObjectOutputStream'i nesneyi byte'lara çevirip FileOutputStream'e göndermek için kullanacaz.
ObjectOutputStream objectOutputStream = new ObjectOutputStream(fos);

//ilk üç satırı tek satırda bu şekilde de yazabilirsiniz.
//ObjectOutputStream objectInputStream = new ObjectOutputStream(new FileOutputStream(file));

//Yazmak istediğimiz nesneyi oluşturup değişkenlere değerlerini verdik.
Employee employee = new Employee();
employee.setName("Heryerde");
employee.setLastName("Kodluyoruz");

//Ve son olarak nesnemizi dosyaya yazılmak üzere writeObject methoduna emanet ediyoruz.	
objectOutputStream.writeObject(employee);

//flush output akışını temizler ve tamponlanmış çıktı baytlarının dışarı yazılmasını zorlar.
//Eğer fiziksel olarak akışa yazılmamış karakterler varsa, bunların yazılması için bir sinyal gönderir.
//Büyük projelerde bellek perfonsı için kazanç sağlamak için kullanılır.
objectOutputStream.flush();

//Tüm Stream kullanımlarında olduğu gibi ObjectOutputStream ile işiniz bitince kapatmayı unutmayın.
objectOutputStream.close();
```

Bir nesneyi dosyadan nasıl okuyacağımıza bakalım şimdi de. 

```java
//ObjectInputStream'i FileOutputStream'den alınan byte'ları tekrar nesneye dönüştürmek için kullanacaz.
ObjectInputStream objectInputStream = new ObjectInputStream(new FileInputStream(file));

//readObject metodu ile dosyadan nesneyi okuyoruz.
Employee employee1 = (Employee) objectInputStream.readObject();

//Okuduğumuz nesnenin daha önce aynı nesne olup olmadığına bakıyoruz. 
System.out.println(employee1.getName());

//Streami sonlandırıyoruz.
objectInputStream.close();
```



Nesnenin içindeki;

- Statik alanlar serileştirilmez (çünkü bir nesneye ait değildirler ve serileştirme yalnızca nesneler için kullanılır). 
- Bir değer **transient** (geçici) olarak tanımlanmışsa, bir nesnedeki bir alanı serileştirme seçeneği yoktur :

```java
public  transient  int  salary  ;
```

yani salary değişkeni dosyaya yazılmaz ve daha sonra nesne oluşturulduğunda salary null olacaktır.

## Kaynak:
- [Kullanılan görsellerin kaynağı](https://wiki.dcae.pub.ro/index.php/Serialization)
