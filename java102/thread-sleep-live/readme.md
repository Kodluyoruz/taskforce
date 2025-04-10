# Thread’i beklemeye almak

Java’da bir iş parçacığını belli bir süre bekletmek istersek, Thread sınıfına ait “sleep” fonksiyonunu kullanabiliriz.

“sleep” fonksiyonu milisaniye cinsinden bir değer bekler. Yani örneğin 3000 değeri 3 saniyeye karşılık gelmektedir.

```java
try {
    Thread.sleep(10L * 1000L);
} catch (InterruptedException e) {
    e.printStackTrace();
}
```

Yukarıda Thread.sleep ile iş parçacığı 10 saniye beklemeye alınmıştır. “sleep” fonksiyonu hata fırlatabilen bir fonksiyon olduğundan önceki konularda da
görmüştük try-catch bloğu içinde kontrol edilmelidir veya fırlattığı hatayı “throws” anahtar kelimesi ile bir üste doğru fırlatmamız gerekmektedir.

# Thread’i durdurmak

Bir iş parçacığı çalışmaya başladığında bir CPU tarafından işletilmeye başlanır. İş parçacığını durdurmak için Thread sınıfı içinde “stop” fonksiyonu vardır.
Fakat, bu fonksiyon iş parçacığını durdurma garantisi vermez. O nedenle Thread içinde çalışacak kodu tasarlarken çalışan kod parçasının nasıl durdurulacağını
yazılımcı kendisi kodlamalıdır. Bu nedenle Thread sınıfında veya Runnable interface’den türemiş bir sınıf içinde boolean bir değer tutarak kod parçasını
sonlandırmayı garanti altına alabiliriz.

Bunu bir örnek ile inceleyelim.

public class ThreadSleeper {

```java
	public static void sleep(long milliseconds) {
		
		try {
			Thread.sleep(milliseconds);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
}
```

“ThreadSleeper” isminde bir sınıf oluşturduk. Bu sınıf içindeki “sleep” fonksiyonu iş parçacığını belli bir süre bekletmeyi sağlamaktadır.

Ardından “SimpleRunnable” sınıfımızdaki “run” metodu içine yazdığımız kod parçasında güncelleme yapıyoruz. Çalışan kod parçacığını durdurmak için “live” isminde
boolean bir değişken tanımladık. Bu değişken ile Thread içinde çalışan çalışmayı durduruyoruz.

```java
public class SimpleRunnable implements Runnable {

	private boolean live = true;
	
	@Override
	public void run() {
		
		// o an çalışan Thread'in ismini alıyoruz.
		String threadName = Thread.currentThread().getName();
		
		System.out.println("My summation " + threadName + " is started!");
		
		int total = 0;
		while(live) 
		{
			total += 1;
			
			// yarım saniye bekletiyoruz.
			ThreadSleeper.sleep(500);
		}
		
		System.out.println("Total: " + total);
	}
	
	public void stop() {
		this.live = false;
	}

}
```

Thread’i start fonksiyonu ile çalışmaya başlatıyoruz. Ardından ana programı 10 saniye bekletiyoruz. Bekleme bitince “SimpleRunnable” içindeki “stop”
fonksiyonunu çağırıp çalışan kod parçasını durduruyoruz.

```java
// Runnable interface'den kalıtım almış olan "SimpleRunnable" sınıfından bir nesne oluşturuyoruz.
SimpleRunnable simpleRunnable = new SimpleRunnable();

// Runnable tipindeki nesneyi Thread kurucusuna gönderiyoruz.
Thread simpleThread3 = new Thread(simpleRunnable);

// start fonksiyonunu çağırdığımızda "SimpleRunnable" sınıfı içindeki "run" fonksiyonu işletilecektir.
simpleThread3.start();

ThreadSleeper.sleep(10000);

simpleRunnable.stop();
```

