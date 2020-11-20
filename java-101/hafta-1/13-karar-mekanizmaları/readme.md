## Karar Mekanizmaları (if-else)

Koşula göre program içinde farklı işlemleri yerine getirmek gerekebilir. Bu tarz durumları Java&#39;da kodlayabilmek için if-else, switch-case gibi yapılar bulunmaktadır. Örneğin: &quot;yaşı 50&#39;den küçük olanların personel kayıtlarını getir&quot; gibi bir ifadede yaşı 50&#39;den küçük olanları tespit etmek için karar mekanizmaları kullanılır. Eğer koşul sağlanmıyorsa başka bir kod bloğu işletilir.

![](C:/GitHub/taskforce/java-101/hafta-1/RackMultipart20201119-4-xnzld6_html_4b7af2ea5bb3c912.png)

Yukarıdaki ifadenin yazılımsal olarak Java&#39;da karşılığı aşağıdaki gibidir.

**if** (age \&lt;50){

_// personel kayıtlarını getir_

}

Koşulun gerçekleşip gerçekleşmediği &quot;if&quot; cümlesi içindeki ifadeye bağlıdır. Eğer mantıksal ifade true ise &quot;if&quot; kod bloğu çalıştırılır. Tabi ifadenin false döndüğü durumda da programın bir şeyler yapmasını isteyebiliriz. Bu durumda ise &quot;else&quot;ifadesi kullanılır. Aşağıdaki gibi bir örnekle açıklayabiliriz.

Eğer, faiz oranı %70&#39;den büyükse &quot;Kurumsal Müşteri&quot; tipinde kredi ver, değilse &quot;Standart Müşteri&quot; tipinde kredi ver şeklinde bir karar mekanizması aşağıdaki gibi tasarlanabilir.

**if** (creditRatio \&gt;0.7){

System.out.println(&quot;Kurumsal müşteri tipinde kredi&quot;);

}

**else** {

System.out.println(&quot;Standart müşteri tipinde kredi&quot;);

}

Koşullar birden fazla olabilir ve hiçbir koşula uymuyorsa en sonunda varsayılan bir duruma girilir ve o kod bloğunu çalıştırmak gerekir. Bu tarz durumlarda ise &quot;if - else if - else&quot; gibi yapılar kullanılır.

Örneğin tuz oranı %80 ve üzerinde ise &quot;yüksek derecede tuzlu&quot;, %80 ile %50 arasında ise &quot;orta derecede tuzlu&quot;, bunların dışında bir durumda ise &quot;düşük derecede tuzlu&quot; şeklinde ekrana bilgiler yazan bir program yazmak istediğimizde if-else if-else yapısını kullanabiliriz.

float saltRatio =0.9f;

**if** (saltRatio \&gt;=0.8){

System.out.println(&quot;yüksek derecede tuzlu&quot;);

}

**else** if(0.5\&lt; saltRatio &amp;&amp; saltRatio \&lt;0.8){

System.out.println(&quot;orta derecede tuzlu&quot;);

}

**else** {

System.out.println(&quot;düşük derecede tuzlu&quot;);

}

&quot;if-else&quot; yapılarını iç içe de kullanma şansına sahibiz.

Örneğin: 18 yaşından küçük olanlar kan bağışı yapamazlar, fakat, 18 yaşına eşit ve büyük olan bir kişi eğer kilosu 48&#39;den büyükse kan verebilir, kilosu 48&#39;den küçükse kan veremez gibi basit bir kuralı Java&#39;da kodlayalım.

int age=25;

int weight=48;

**if** (age\&gt;=18){

**if** (weight\&gt;=48){

System.out.println(&quot;Kan verebilirsiniz&quot;);

}

**else** {

System.out.println(&quot;Kan veremezsiniz&quot;);

}

}

**else** {

System.out.println(&quot;Kan verebilmek için yaşınız 18&#39;den büyük olmalıdır.&quot;);

}

Java&#39;da &quot;switch-case&quot; Yapıları

Programlama yaparken birden fazla koşula sahip durumlarla karşılaşabiliriz. Örneğin: eğer 1&#39;e basarsanız &quot;vize işlemleri&quot;, eğer 2&#39;ye basarsanız &quot;kredi kartı işlemleri&quot;, eğer 3&#39;e basarsanız &quot;ev kredisi işlemleri&quot;, eğer 4&#39;e basarsanız &quot;müşteri temsilcisine bağlanmak&quot;, sıfıra basarsanız &quot;diğer işlemler menüsüne gitmek&quot; gibi çoklu koşullara göre programlama yapmak gerekebilir. Bunu çözmek için &quot;if-else if&quot; yapılarını ya da &quot;switch-case&quot; yapısını kullanırız.

Not: &quot;switch-case&quot; yapısında eğer her case&#39;in sonuna &quot;break&quot; ifadesi koymazsak ise aradığı koşulu bulana kadar tüm case&#39;lere girip o kod bloklarını çalıştıracaktır.

Scanner scanner = **new** Scanner(System.in);

int operationChoice = scanner.nextInt();

System.out.println(&quot;0-Diğer işlemler&quot;);

System.out.println(&quot;1-Vize işlemler&quot;);

System.out.println(&quot;2-Kredi kartı işlemler&quot;);

System.out.println(&quot;3-Ev kredisi işlemler&quot;);

System.out.println(&quot;4-Müşteri temsilcisi işlemler&quot;);

System.out.println(&quot;Your choice is : &quot;+ operationChoice);

**switch** (operationChoice){

**case** 0:

System.out.println(&quot;Diğer işlemler menüsü&quot;);

**break** ;

**case** 1:

System.out.println(&quot;Vize işlemleri&quot;);

**break** ;

**case** 2:

System.out.println(&quot;Kredi kartı işlemleri&quot;);

**break** ;

**case** 3:

System.out.println(&quot;Ev kredisi işlemleri&quot;);

**break** ;

**case** 4:

System.out.println(&quot;Müşteri temsilcisi işlemleri&quot;);

**break** ;

**default** :

System.out.println(&quot;Lütfen geçerli bir işlem tipi seçiniz&quot;);

}