# Runnable interface ile Thread Kullanımı

Thread’lere Runnable tipinde nesne vererek kod parçasını bir iş parçacığı olarak işletebiliriz.

```java
public class SimpleRunnable implements Runnable {

	@Override
	public void run() {
		
		// o an çalışan Thread'in ismini alıyoruz.
		String threadName = Thread.currentThread().getName();
		
		System.out.println("My summation " + threadName + " is started!");
		
		int total = 0;
		for(int i=0; i < 1000; i++) 
		{
			total += i;
		}
		
		System.out.println("Total: " + total);
	}

}
```

Yukarıda “Runnable” interface’den kalıtım alan “SimpleRunnable” isminde bir sınıf tanımladık. Bu sınıf içindeki “run” metodunu override ederek iş parçacığı içinde çalıştırılacak olan kodu yazıyoruz.

```java
// Runnable interface'den kalıtım almış olan "SimpleRunnable" sınıfından bir nesne oluşturuyoruz.
SimpleRunnable simpleRunnable = new SimpleRunnable();

// Runnable tipindeki nesneyi Thread kurucusuna gönderiyoruz.
Thread simpleThread3 = new Thread(simpleRunnable);

// start fonksiyonunu çağırdığımızda "SimpleRunnable" sınıfı içindeki "run" fonksiyonu işletilecektir.
simpleThread3.start();
```

“Runnable” tipindeki sınıfımızdan bir nesne oluşturuyoruz. Ardından, Thread sınıfından bir nesne oluşturup kurucu metodun içine “Runnable” tipte oluşturduğumuz nesneyi gönderiyoruz. Bununla birlikte 3 Thread (iş parçacığı) tanımlamış oluyoruz.

```java
My summation Thread-0 is started!
My summation Thread-1 is started!
Total: 499500
Total: 499500
My summation Thread-2 is started!
Total: 499500
```

3 iş parçacığının sonuçları yukarıdadır.

Not: Thread.currentThread() ile o anda aktif olarak çalışan iş parçacığının referansını alabiliyoruz. Burada aldığımız Thread nesnesi iş parçacığı içinde çalıştırılan kodu ifade eder.
