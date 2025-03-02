# Kilit Nesneler ile Çok Kanallı Programlama (Locks in Java)

“synchronized” anahtar kelimesi ile “Critical Sections” kod bölgelerini sıralı erişime açıp Thread’lerin ortak kullandığı bu alanı düzgünce kullanabilmelerini sağlıyorduk. Aynı şekilde “Lock” yani kilit mekanizmaları ile belli kod bloklarını “synchronized” gibi sıralı erişime açabiliriz.

Bunun için “ReadWriteLock” sınıfını kullanarak hem okuma hem de yazma işlemleri için sıralı erişim olanağı veren bir örnek geliştireceğiz. Bunun için “SimpleCounter” isminde “Runnable” interface’den kalıtım alan bir sınıf tasarlıyoruz.

```java
public class SimpleCounter {

	private volatile int counter;
	
	private final ReadWriteLock readWriteLock = new ReentrantReadWriteLock();
	
	public SimpleCounter() {
		this.counter = 0;
	}
	
	public void incrementCounterWithThreadSafety(String threadName) {
		
		this.readWriteLock.writeLock().lock();
		
		try {
			this.counter++;
			System.out.println("Counter was updated to '" + this.counter + "' from " + threadName);
		}
		finally {
			this.readWriteLock.writeLock().unlock();
		}
		
	}
	
	
	public int readCounterWithThreadSafety() {
		
		this.readWriteLock.readLock().lock();
		
		try {
			return this.counter;
		}
		finally {
			this.readWriteLock.readLock().unlock();
		}
		
	}
}
```

Yukarıdaki örnekte “readWriteLock” isminde bir nesne oluşturuyoruz. Bizim kod içindeki kilit mekanizmamızı bu nesne yönetecektir.

“incrementCounterWithThreadSafety” metodu içinde değişkenin değerini güncelleyeceğimiz için bir yazma işlemi yapacağız bu nedenle aşağıdaki komutla bir yazma kilidi alıyoruz.

```java
this.readWriteLock.writeLock().lock();
```

Ardından koruma altına almak istediğim kod bloğunu bir “try” bloğu içine yerleştiriyorum. İşlemler bitince ise aşağıdaki gibi kilidi serbest bırakıyorum.

```java
finally {
			this.readWriteLock.writeLock().unlock();
		}
```

Hatırlayacaksınızdır, finally anahtar kelimesi ile “try” bloğunda hata olsun veya olmasın mutlaka çalıştırılırdı. Mutlaka kilidi öyle ya da böyle serbest bırakıyorum. Kilidi serbest bırakamazsam sıkıntılı sorunlarla boğuşabiliriz.


“readCounterWithThreadSafety” metodunda ise “counter” isimli değişkenin değerini okuyacağız ve burada da okuma yaptığımız kod bloğunu korumaya almak istiyoruz diyelim. Bu durumda ise okuma kilidini alıp kullanacağız ve sisteme geri iade edeceğiz.

```java
this.readWriteLock.readLock().lock();
```

işimiz bitince aşağıdaki gibi finally bloğu içinde mutlaka kilidi serbest bırakıyoruz.

```java
finally {
			this.readWriteLock.readLock().unlock();
		}
```

