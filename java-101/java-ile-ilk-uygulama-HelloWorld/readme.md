# Java ile İlk Uygulama - HelloWorld



Java ile ilk kodumuzu yazalım!



Öncelikle editörünüze aşağıdaki kodu birebir yazın veya kopyalayın. 

Editörünüz bir IDE ile entegre olabilir veya her hangi bir yazı editörü (notepad gibi) de kullanabilirsiniz. 



```
​```java
public class HelloWorld{

	public static void main(String[] args) {
        
        // Konsol penceresinde aşağıdaki cümleyi yazdıralım
    	System.out.println("Hello World!");    
    }
}
​```
```



Daha sonra kodumuzun bulunduğu dosyayı HelloWorld.java olarak kaydedelim. Java kaynak kodları .java uzantılı dosyalarda saklanır.



Yazdığımız kodu derleyip, çalıştıralım!

Bu yazdığımız Java kodlarını IDE içerisinde derleyip çalıştırabileceğimiz gibi, herhangi bir IDE'ye ihtiyaç duymadan da derleme ve çalıştırma işlemlerini gerçekleştirebiliriz. Bunun için JDK'nın (Java Development Kit, yani Java geliştirici programı) sistemimizde yüklü olması yeterlidir.



Şimdi bunu derleyip, çalıştıralım, daha sonra da kodun ayrıntılarının inceleyeceğiz.



Bu test programını çalıştırdığınızda konsolunuzda 

​	HelloWorld! 

yazacaktır.



Programın çalışması için Java derleyici (compiler) sizin .java uzantılı dosyalarınızda bulunan kaynak kodları alır ve onları .class uzantılı dosyalara çevirir. Bu .class uzantılı dosyalar da Java Virtual Machine (JVM) tarafından gerekli düzenlemeler yaparak çalıştırılır. 



Şimdi bu yazdığımız ilk kodu analiz edelim!

```java
​```java
    public class HelloWorld{
        
    }
​```
```

Yukarıdaki kod parçası, HelloWorld adında bir class tanımlar. Java object-oriented (nesne tabanlı) bir programlama dili olduğu için her kod class'lar altında yazılır.

Buradaki public kelimesi, bu class'ın herkese açık olduğunu tanımlar.



```java
	public static void main(String[] args) {
        
    }
```

Yukarıda ise HelloWorld class'ı içindeki main isimli metodumuz tanımlanıyor. Tüm Java uygulamaları mutlaka bir main metod kullanmak durumundadırlar, ilk olarak çalıştırılan method budur. Bu ilk programımızda tüm komutlarımızı bu metod içinde yazdık. Şimdilik static, void, String[] args, gibi terimleri main'in otamatik bir parçası olarak düşünün, daha sonra ne olduğunu açıklayacağız.



```java
        // Konsol penceresinde aşağıdaki cümleyi yazdıralım
    	System.out.println("Hello World!");    
```



// işareti sonrasında gelen ilk satır sadece programcının okuyabildiği yorumlardır, kodun anlaşılmasını kolaylaştırmak için kullanılır.

Bunun ardından gelen main içindeki tek metodumuz ise konsola bir yazı (Hello World!) yazdırmak için kullanılmaktadır. Bu komutun arka planda nasıl çalıştığını ve ekrana yazı yazdırdığını bilmemize gerek yoktur, sadece onu nasıl kullanacağımızı bilmemiz yeterlidir.   

Ekrana yazdırdığımız yazı "Hello World!" aslında bir String'dir ve "" işaretleri arasında belirtilir.

Java'da her komut satırı ; işareti ile sonlandırılmalıdır. 



Şimdi konsola bir başka satır daha yazdıralım, aşağıdaki gibi kodunuzu düzenleyin:



```java
public class HelloWorld{

	public static void main(String[] args) {
        
        // Konsol penceresinde aşağıdaki cümleyi yazdıralım
    	System.out.println("Hello World!");
        
        // Konsol penceresinde bir cümle daha yazdıralım
    	System.out.println("Selam Dünya!");
        
    }
}
```



Kodunuzu tekrar derleyip, çalıştırın, sonucunu konsolda göreceksiniz.



IntelliJ kullanlar için:

```
[![ilk-kod](figures/ilk-fotoğraf.png)](https://youtu.be/dtP6yK50xIs)
```





## Kaynakça

* Java Dersi 5, Engin Demiroğ: https://youtu.be/dtP6yK50xIs

