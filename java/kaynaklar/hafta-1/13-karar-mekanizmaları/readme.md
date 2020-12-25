# Karar Mekanizmaları (if-else)

Koşula göre program içinde farklı işlemleri yerine getirmek gerekebilir. Bu tarz durumları Java&#39;da kodlayabilmek için if-else, switch-case gibi yapılar bulunmaktadır. Örneğin: "yaşı 50&#39;den küçük olanların personel kayıtlarını getir" gibi bir ifadede yaşı 50&#39;den küçük olanları tespit etmek için karar mekanizmaları kullanılır. Eğer koşul sağlanmıyorsa başka bir kod bloğu işletilir.

![IF Else yapısı](figures/if_1.jpg)

Yukarıdaki ifadenin yazılımsal olarak Java&#39;da karşılığı aşağıdaki gibidir.

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



## Java&#39;da "switch-case" Yapıları

Programlama yaparken birden fazla koşula sahip durumlarla karşılaşabiliriz. Örneğin: eğer 1&#39;e basarsanız "vize işlemleri", eğer 2&#39;ye basarsanız "kredi kartı işlemleri", eğer 3&#39;e basarsanız "ev kredisi işlemleri", eğer 4&#39;e basarsanız "müşteri temsilcisine bağlanmak", sıfıra basarsanız "diğer işlemler menüsüne gitmek" gibi çoklu koşullara göre programlama yapmak gerekebilir. Bunu çözmek için "if-else if" yapılarını ya da "switch-case" yapısını kullanırız.

Not: "switch-case" yapısında eğer her case&#39;in sonuna "break" ifadesi koymazsak ise aradığı koşulu bulana kadar tüm case&#39;lere girip o kod bloklarını çalıştıracaktır.

````java
Scanner scanner = new Scanner(System.in);
int operationChoice = scanner.nextInt();

System.out.println("0-Diğer işlemler");
System.out.println("1-Vize işlemler");
System.out.println("2-Kredi kartı işlemler");
System.out.println("3-Ev kredisi işlemler");
System.out.println("4-Müşteri temsilcisi işlemler");
System.out.println("Your choice is : " + operationChoice);

switch (operationChoice) {
	case 0:
		System.out.println("Diğer işlemler menüsü");
		break;
	case 1:
		System.out.println("Vize işlemleri");
		break;
	case 2:
		System.out.println("Kredi kartı işlemleri");
		break;
	case 3:
		System.out.println("Ev kredisi işlemleri");
		break;
	case 4:
		System.out.println("Müşteri temsilcisi işlemleri");
		break;
	default:
		System.out.println("Lütfen geçerli bir işlem tipi seçiniz");
}

````

