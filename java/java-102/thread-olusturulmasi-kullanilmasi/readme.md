## Java Thread’lerin Oluşturulması ve Kullanılması

Java’da herhangi bir uygulamayı çalıştırdığımızda varsayılan olarak ana (main) bir iş parçacığı (Thread) ayağa kaldırılır. Bu ana iş parçacığına ek olarak yazılımcılarda alt iş parçacıkları çalıştıralabilir. Bundan zaten bahsetmiştik. Şimdi Java dilinde Thread nasıl tanımlanır ve çalıştırılır onu inceleyelim.

Java’da iş parçacığı oluşturmak için “Thread” isminde bir sınıf bulunmaktadır. Böylece, basit anlamda iş parçacığı açmış oluruz. Tabi, unutmamak lazım Thread açmak sisteme maliyeti olan bir iştir. Sürekli Thread üretmek kaynak kullanımını olumsuz etkiler. Bu nedenle bu sorunu çözmek Thread Pooling kavramı vardır. 

Bu maliyetli nesneler ilk başta belli bir miktarda yaratılır ve hazır durumda olacak şekilde havuza konulur. Thread ihtiyacı olanlar bu havuzdan bir Thread’i kullanır ve sisteme geri iade eder. Böylece, performans kazancı yanı sıra kaynak kullanımı da iyi bir hale getirilir.

```java
Thread thread = new Thread();
```

Yukarıda görüldüğü gibi “Thread” sınıfından bir nesne oluşturup bir iş parçacığı üretmiş olduk. Bu iş parçacığını çalışmaya başlatmak için “start” fonksiyonunu çağırmamız gerekecektir.

```java
thread.start();
```

Böylece, iş parçacığımız işini bitirene kadar çalışmaya devam edecektir. Fakat, yukarıdaki örnekte iş parçacığının çalıştıracağı bir kod parçası vermedik. Bunu verebilmenin iki yolu vardır. 

1.	“Thread” sınıfından kalıtım alan bir alt sınıf yaratıp, onun “run” fonksiyonunu override (ezme) etmek gerekir.
2.	“Runnable” interface’den kalıtım alan bir alt sınıf yaratmak ve “run” fonksiyonunu override etmek, ardından “Thread” sınıfının kurucusuna nesne olarak göndermek.

```java
public class SimpleThread extends Thread {

	@Override
	public void run() {
```

```java
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

Yukarıda “SimpleThread” isminde Java’nın “Thread” sınıfından kalıtım alan bir sınıf tanımladık. Bu sınıf içindeki “run” metodu içine Thread’de çalıştırmak istediğimiz kodları yazıyoruz. Bu kod parçası işletim sistemi düzeyinde herhangi bir CPU’da eş zamanlı olarak çalıştırılacaktır. Unutulmamalı ki yarattığımız iş parçacığı hazırladığımız Java konsol uygulamasının bir alt iş parçacığıdır.

```java
SimpleThread simpleThread = new SimpleThread();
simpleThread.start();
```

“SimpleThread” sınıfından bir nesne üretiyoruz. Ardından, “start” fonksiyonunu çağırdığımızda işletim sistemi bize bir Thread kaynağı yaratıyor ve “SimpleThread” sınıfında override ettiğimiz “run” fonksiyonu işletilmeye başlanıyor. “run” fonksiyonu içindeki kodlar artık ayrı bir Thread içinde işlem görmeye başlıyorlar. Aynı şekilde bir nesne daha üretip “start” dediğimizde yeni bir Thread daha oluşturulup başka bir iş parçacığı oluşturulur.

```java
SimpleThread simpleThread2 = new SimpleThread();
simpleThread2.start();
```

Sonuçlar aşağıdaki gibidir. Görüldüğü üzere iki farklı Thread aynı anda işletilmiştir.

```java
My summation Thread-0 is started!
Total: 499500
My summation Thread-1 is started!
Total: 499500
```

