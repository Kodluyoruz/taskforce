# Java “synchronized” Anahtar Kelimesi



> ###### Hatırlatmalar:
>
> - Kritik Bölge = Thread kullanılan uygulamalarda, paylaşılan ve üzerinde işlem yapılabilen bellek bölgesine denir.
> - Yarış Durumu = Birden fazla threadin paylaşılan bellek bölgesine aynı anda erişip aynı anda bellek bölgesinde işlem yapması durumudur.



“Ciritical Section” olan kod bölgelerinde “Race Condition” durumuna engel olmak için kullanılabilecek yöntemlerden biri de “synchronized” anahtar kelimesidir. Bu anahtar kelime ile “Critical Section” kod bölgesi Thread’ler arasında sıralı erişime açabilabilir.  

Kısaca sıralı erişim mantığı şu şekildedir. Kritik bölgeye ilk gelen thread işlem yaptığını belirtmek için bu bölgeyi kilitler. Bu sayede diğer threadler içeride bir threadin işlem yaptığını anlarlar ve işlemin bitmesini bekleyebilirler. İşlemi tamamlayan thread çıktığında kilit kaldırılır ve  bekleyen threadler için tekrar işleme açılmış olur. İşlem için bekleyen başka bir thread içeriye girdiğinde tekrar kilit yapısını kullanarak erişim kısıtlaması yapar ve döngü halinde devam eder. 

Örnek vermek gerekirse;

> Bir threadin bir dosyaya yazma işlemi yaptığı sırada bir başka threadin de aynı işlemi yapmak istemesi gibi büyük bir problem oluşturacaktır. Böyle durumlarda kaynağa ilk ulaşan threadin işini tamamlayıncaya kadar ilgili kaynağı kilit mekanizması ile erişime kapatılması daha sonra ise tekrar erişime açılması gerekir. 

###### Metot içerisinde synchronized kullanımı: 

Bu yöntem genelde kodu başkası tarafından yazılan fakat üzerinde senkronizasyonu sağlanmak istenilen durumlarda kullanılır. Böylelikle yönetime kısmen de olsa müdahale edilmiş olunur.


```java
metot(){
    
    synchronized(Lock objesi){
        // kritik bölgede yapılacak işlemler
    }

}
```

“synchronized” anahtar kelimesi **bir değişkene, bir blok parçasına veya metoda** verilebilir. Yukarıdaki örnek şimdi “Thread Safe” olarak yazılırsa;

```java
public class QMatic implements Runnable {

	private int orderNo;
	
	private Object LOCK = new Object();
	
	public QMatic() {
		this.orderNo = 0;
	}
	
	@Override
	public void run() {
		
		// a little bit delay to see race condition!
		ThreadSleeper.sleep(50);
		
		// Critical section for all threads!
		
		synchronized (LOCK) {
			this.orderNo = this.orderNo + 1;
			
			StringBuilder builder = new StringBuilder();
			builder.append(Thread.currentThread().getName());
			builder.append(" thread got ");
			builder.append(this.orderNo);
			builder.append(" from Qmatic!");

			System.out.println(builder.toString());
		}
		
	}
}
```



QMatic isimli “Runnable” interface’den türemiş sınıfta “LOCK” isminde Object türünden bir kilit nesnesi oluşturuluyor. Ardından “Critical Section” olarak belirtilen tüm Thread’lerin ortak kullandığı “orderNo” değişkeniyle işlem yapan kod bloğunu “synchronized” anahtar kelimesiyle korumaya alıp, Thread’ler için sıralı erişime açılıyor. Eğer bir Thread “Critical Section” olarak işaretlenen kod bloğuna girip kaynakları kullanmaya başlarsa diğer Thread’ler o işini bitirene kadar beklemek zorundadırlar.

```java
Thread-9 thread got 1 from Qmatic!
Thread-1 thread got 2 from Qmatic!
Thread-3 thread got 3 from Qmatic!
Thread-7 thread got 4 from Qmatic!
Thread-2 thread got 5 from Qmatic!
Thread-4 thread got 6 from Qmatic!
Thread-5 thread got 7 from Qmatic!
Thread-0 thread got 8 from Qmatic!
Thread-6 thread got 9 from Qmatic!
Thread-8 thread got 10 from Qmatic!
```

###### Senkronize Metotlar 

Bir sınıftaki herhangi bir metod synchronized ifadesini aldığı zaman o metoda bir thread girdiğinde metodun bulunduğu obje otomatikman olarak lock mekanizması ile erişime kapatılır. Bu durumda başka bir thread o sınıf içindeki hiçbir synchronized metoda erişemez. synchronized metod üzerinde işlem yapan thread  metoddan çıktığı zaman ise lock kaldırılır ve tüm obje yeniden erişilebilir hale gelir.

Görüleceği gibi "synchronized" yapısı metot içerisinde kullanıldığı gibi metodun kendisine de verilebilmektedir.  Bu anahtar kelimenin yeri ise erişim belirtecinden sonra, fonksiyonun geri dönüş türünden önce olacak şekilde araya yerleştirilmelidir.

```java
erisim_belirtesi synchronized geri_dönüş_türü fonskiyon_adı(){
    // yapılacak işlemler
}
```



Yukarıda “synchronized” olarak belirttiğimiz kod bloğu bir metod içine alınırsa aşağıdaki gibi yapabilir.

```java
private synchronized void increment() {
	
	this.orderNo = this.orderNo + 1;
	
	StringBuilder builder = new StringBuilder();
	builder.append(Thread.currentThread().getName());
	builder.append(" thread got ");
	builder.append(this.orderNo);
	builder.append(" from Qmatic!");

	System.out.println(builder.toString());
}
```





**Kaynaklar**

- https://medium.com/s%C4%B1f%C4%B1rdan-i%CC%87leri-d%C3%BCzeye-java-e%C4%9Fitim-serisi/multithreaded-programlama-1-k%C4%B1s%C4%B1m-40904a219a18

- Öneri Kaynak: https://huseyin-karabakla.medium.com/

