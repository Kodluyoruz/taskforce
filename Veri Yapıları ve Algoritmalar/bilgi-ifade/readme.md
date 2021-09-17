# Bilgi bilgisayar tarafından nasıl ifade edilir ?

- Şöyle düşünelim, bir insan kendini ifade etmek istediğinde native(ana) bir dil kullanıyor öyle değil mi ? Bilgisayar da bilgiyi (Resim, ses, yazı vb) ifade etmek ve döngüyü sağlamak için bit (0 ve 1) lerden oluşan ikili sayıları (Binary Numbers) kullanıyor. 

- İkili sayılarda bulunan 1 ve 0 rakamları ( bit ), bilgisayarın elektrik iletimi için kullandığı transistörlerin açık ve ya kapalı olma durumunu gösteriyor. Transistörlerde iki tane komut vardır, 0 (kapat) ve  1 (aç). 

    ![Bilgisayar](figures/Konuşma.jpg)

- Konuyu pekiştirmek için bir örnekle açıklayalım. C#, Java gibi dillerde kullandığımız platformlar aracılığıyla yazdığımız kod ilk olarak derlenir ve makine koduna (0 ve 1'li sayılara) dönüştürülür. Bilgisayar okur ve çıktı verir. 

- Peki bu derleme nedir ve nasıl olur? Hemmencecik anlatalım. Örneğin, bir dilde (örnek java üzerinden olucak) yazdığınız kod java'nın hali hazırda sahip olduğu Java Compiler ile derlenek .class uzantılı dosyayı oluşturur. Haa dikkat, bu format prensesimiz olan sadece JVM(JAVA VİRTUAL MACHİNE)'ye özeldir. İşlemcimiz bu aşamada okuyamadığından işleyemez. JVM(JAVA VİRTUAL MACHİNE) .class uzantılı bytecode'u satır satır işleyerek makine koduna dönüştürür ve çalıştırır.
 **Özetle, Javada yazılan kod önce bytecode'a çevrilir, daha sonrasında üzerinde çalıştığı makinenin içerisindeki yalın dile (makine koduna) yorumlanarak çalıştırırlır.**
    <br /> <br /> 
    ![Java Derleme](figures/DerlemeJava.png)

- Sonuç olarak bilgisayarlar kendilerini 0 ve 1 ler aracılığıyla ifade eder. Bilgisayar üzerindeki herşey 1 ve 0 lardan oluşur.

- **Bytecode** -> Java derleyicisinin java ile yazılmış kodların makine dili yerine kendine has oluşturduğu binary (0 ve 1) dosyasıdır. <br />

- **JVM** -> Java Bytecode formatına derlenmiş programların çalışmasını sağlayan bir sistemdir.

# Sorular

- Bilgisayarlar bilgiyi nasıl ifade ederler?
    - Makine koduyla
    - Programlama dili aracılığıyla
    - JVM ile
    - İkili Sayılar ile
    <br /> <br /> 
- Transistörler elektrik akımı ileten, 0 ve 1 ile çalışan bir elektrik parçasıdır
    - Doğru
    - Yanlış
    <br /> <br /> 
- Sadece JVM'nin derleyebildiği format aşşağıdakilerden hangisidir?
    - .class
    - .java
    - .py
    - .cs
     <br /> <br /> 
# Kaynaklar

## Türkçe

- [BİL-110](https://slideplayer.biz.tr/slide/2798593/)

- [Medium- Java Derleme](https://medium.com/@msenell/derleyi%CC%87ci%CC%87-compiler-ve-yorumlayici-interpreter-%C3%BCzeri%CC%87ne-bi%CC%87r-deneme-d8656619ef6)

- [Java - Bytecode](https://tr.wikipedia.org/wiki/Java_bytecode)

## İngilizce

- [Wikipedia - Machine Code](https://simple.wikipedia.org/wiki/Machine_code)

- [Wiki of Computer Science](https://computersciencewiki.org/index.php/Data_representation)

- [JVM](https://www.w3schools.in/java-tutorial/java-virtual-machine/)