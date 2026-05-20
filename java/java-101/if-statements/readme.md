# Karar Mekanizmaları (if-else)

Koşula göre program içinde farklı işlemleri yerine getirmek gerekebilir. İf-else muhtemelen yazılım programlarında en yaygın kullanılan karar mekanizmasıdır. Bu tarz durumları Java&#39;da kodlayabilmek için if-else karar mekanizmasının yanında switch-case gibi yapılarda kullanılmaktadır. Bu yazımızda sizlerle birlikte if-else karar mekanizmasını inceleyeceğiz. İf-else karar mekanizması istenilen koşul gerçekleştiği takdirde çalışır. Kısacası belirlenen koşul doğruysa yazılan kod console kısmında çalışır. Fakat koşulumuz yanlış ise else şartımıza bağlı olan kodumuz console kısmında çalıştırılır. 

![IF Else yapısı](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/java/java-101/if-statements/figures/if_1.jpg)

Örneğin: "yaşı 50&#39;den küçük olanların personel kayıtlarını getir" gibi bir ifadede yaşı 50&#39;den küçük olanları tespit etmek için karar mekanizmaları kullanılır. Eğer koşul sağlanmıyorsa başka bir kod bloğu işletilir. İfadenin yazılımsal olarak Java&#39;da karşılığı aşağıdaki gibidir.
````java
if(age < 50) {
	// personel kayıtlarını getir
}
````

Koşulun gerçekleşip gerçekleşmediği "if" cümlesi içindeki ifadeye bağlıdır. Eğer mantıksal ifade true ise "if" kod bloğu çalıştırılır. Tabi ifadenin false döndüğü durumda da programın bir şeyler yapmasını isteyebiliriz. Bu durumda ise "else"ifadesi kullanılır. Aşağıdaki gibi bir örnekle açıklayabiliriz.

Eğer, faiz oranı %70&#39;den büyükse "Kurumsal Müşteri" tipinde kredi ver, değilse "Standart Müşteri" tipinde kredi ver şeklinde bir karar mekanizması aşağıdaki gibi tasarlanabilir.

````java
if(creditRatio > 0.7) {
	System.out.println("Kurumsal müşteri tipinde kredi");
}
else {
	System.out.println("Standart müşteri tipinde kredi");
}
````

Koşullar birden fazla olabilir ve hiçbir koşula uymuyorsa en sonunda varsayılan bir duruma girilir ve o kod bloğunu çalıştırmak gerekir. Bu tarz durumlarda ise "if - else if - else" gibi yapılar kullanılır.
İf-else yapısına bir örnek daha aşağıdaki gibi olabilir.
```java
if(ortalama >= 50){
  System.out.println("Dersi Geçtiniz");
}
else{      
System.out.println("Dersten Kaldınız");
}
```

Bu kod bloğunda karar yapımda eğer ortalama 50 ve üstü ise Dersi Geçtiniz yazar, değilse Dersten Kaldınız yazar. if kısmı koşulun doğruluğunu kontrol ediyor, else kısmı ise koşul yanlış ise devamında yazan kodu çalıştırıyor. Yani eğer ilk kısımda TRUE dönerse Dersi Geçtiniz yazacak, FALSE dönerse else kısmındaki kod çalışacak.

UML olarak bunu ifade edersek :![2013040211](https://www.ismailgursoy.com.tr/wp-content/uploads/2013/04/2013040211.png)

## else if
**if- else- if** : if-else-if kalıbında, bir if satırı, istediğiniz sayıda else-if satırı ve isteğe bağlı olarak tanımlanan bir else satırı bulunur. Yani, else satırının tanımlanması şart değildir. Program, en başta yer alan if satırı ile if-else-if kalıbını değerlendirmeye başlar. İlk doğru ifadenin bulunduğu if veya else-if satırı ile karşılaştığında ilgili işlem satırını çalıştırır. Kalıbın geri kalan tüm satırlarını değerlendirmeye almadan geçer. Eğer if ve else if satırlarında yer alan ifadelerden hiç biri doğru bir sonuç vermezse, else satırında yer alan işlem satırını çalıştırır. else satırı da mevcut değilse, program if-else-if kalıbının hiç bir satırını çalıştırmadan bir sonraki satırdan çalışmasına devam eder. if-else-if kalıbında sadece tek bir satır işlem görür.

[if-else if]: https://www.bilgigunlugum.net/prog/java/java_if


Konumuzu açıklamak amacıyla aşağıdaki kodu inceleyebiliriz.

```int i=30;
if(i==10){
  System.out.println("i nin degeri 10'dur.");
}
else if(i<10){
  System.out.println("i nin degeri 10'dan kücüktür.");   
}
else{
  System.out.println("i nin degeri 10'dan farklıdır ve 10'dan kücük degildir.");   
}
```
**Sizce yukarıda yazdığımız kodun Console çıktısı nedir ?**

```java
i nin degeri 10'dan farklıdır ve 10'dan kücük degildir.
```



Örneğin tuz oranı %80 ve üzerinde ise "yüksek derecede tuzlu", %80 ile %50 arasında ise "orta derecede tuzlu", bunların dışında bir durumda ise "düşük derecede tuzlu" şeklinde ekrana bilgiler yazan bir program yazmak istediğimizde if-else if-else yapısını kullanabiliriz.

````java
float saltRatio = 0.9f;
if(saltRatio >= 0.8) {
	System.out.println("yüksek derecede tuzlu");
}
else if(0.5 < saltRatio && saltRatio < 0.8 ) {
	System.out.println("orta derecede tuzlu");
}
else {
	System.out.println("düşük derecede tuzlu");
}

````

"if-else" yapılarını iç içe de kullanma şansına sahibiz.

Örneğin: 18 yaşından küçük olanlar kan bağışı yapamazlar, fakat, 18 yaşına eşit ve büyük olan bir kişi eğer kilosu 48&#39;den büyükse kan verebilir, kilosu 48&#39;den küçükse kan veremez gibi basit bir kuralı Java&#39;da kodlayalım.

````java
int age=25;    
int weight=48;

if(age>=18){  

    if(weight>=48){    
        System.out.println("Kan verebilirsiniz");    
    } 
    else{  
        System.out.println("Kan veremezsiniz");    
    }  

} 
else{  
  System.out.println("Kan verebilmek için yaşınız 18'den büyük olmalıdır.");  
} 

````
**Sizce yukarıda yazdığımız kodun Console çıktısı nedir ?**

```java
Kan verebilirsiniz.
```

