# Java “synchronized” Anahtar Kelimesi

Yukarıdaki gibi “Ciritical Section” olan kod bölgelerinde “Race Condition” durumuna engel olmak için kullanılabilecek yöntemlerden biri de “synchronized” anahtar kelimesidir. Bu anahtar kelime ile “Critical Section” kod bölgesini Thread’ler arasında sıralı erişime açabilirsiniz.

“synchronized” anahtar kelimesini bir değişkene, bir bloğu parçasına veya metoda verebilirsiniz. Yukarıdaki örneğimizi şimdi “Thread Safe” bir hale getirelim.

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

QMatic isimli “Runnable” interface’den türemiş sınıfımızda “LOCK” isminde Object türünden bir kilit nesnesi oluşturuyoruz. Ardından “Critical Section” olarak belirttiğimiz tüm Thread’lerin ortak kullandığı “orderNo” değişkeniyle işlem yapan kod bloğunu “synchronized” anahtar kelimesiyle korumaya alıp, Thread’ler için sıralı erişime açıyorum. Eğer bir Thread “Critical Section” olarak işaretlediğim kod bloğuna girip kaynakları kullanmaya başlarsa diğer Thread’ler o işini bitirene kadar beklemek zorundadırlar.

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

Yukarıda “synchronized” olarak belirttiğimiz kod bloğunu bir metod içine alsaydık. Aşağıdaki gibi yapabilirdik.

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