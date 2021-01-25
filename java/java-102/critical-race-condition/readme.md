# Kritik Bölümler (Critical Sections) ve Veriye Erişim Yarışması (Race Condition)

Tek Thread şeklinde çalışan uygulamalar hafıza bölgesine ve diğer sistem kaynaklarına erişirken herhangi bir senkronizasyon ihtiyacı bulunmaz. Program çalışır ve kaynakları kullanır, ardından kaynakları sisteme iade eder. Fakat, çok kanallı programlamada birden fazla iş parçacığı (Thread) aynı anda ortak bir kaynağa erişmeye kalkışırlarsa bunları sırayla erişim vermek gerekecektir. 

Bir iş parçacığı kaynağı kullanıyorken diğerleri onu beklemelidirler. İşte birden fazla iş parçacığının kullandığı bu paylaşımlı ortak alanlara “Critical Sections” adı verilmektedir. Buna en güzel örnek bir değişkenin değerinin değiştirilmesidir. Çünkü, değişkenin değerinin değişmesi demek hafıza bölgesinde bir değişim yapmak demektir. Böyle ortak bir kaynağı kullanan Thread’ler okuma ve yazma yaparken bu “Critical Section”’a sırayla erişmeleri gerekir.

```java
public class QMatic implements Runnable {

	private int orderNo;
	
	public QMatic() {
		this.orderNo = 0;
	}
	
	@Override
	public void run() {
		
		// a little bit delay to see race condition!
		ThreadSleeper.sleep(50);
		
		// Critical section for all threads!
		this.orderNo = this.orderNo + 1;
		
		StringBuilder builder = new StringBuilder();
		builder.append(Thread.currentThread().getName());
		builder.append(" thread got ");
		builder.append(this.orderNo);
		builder.append(" from Qmatic!");

		System.out.println(builder.toString());
	}
}
```

Yukarıdaki örnekte bir banka şubesinde sıra numarası alınan bir cihaz olduğunu düşünün. Gelen müşteri sıraya göre bir fiş alıp numarasını görmektedir. “QMatic” ismindeki sınıfın içindeki “run” metodu içinde “orderNo” isimli değişkenin değeri değiştirilmektedir. Müşteriler cihaz butonuna basınca sıra numarası bir artmaktadır. 

Şube içinde tek cihaz üzerinden tüm müşteriler numara alırsa sorun yoktur. Tek cihaz tek Thread! Fakat, şube müdürü verimlilik adına şube içine bu cihazlardan bir tane eklettiğini düşünün. 2 tane numara alma cihazımız oldu. 

Fakat, 2 cihaz olsa da sıra numaralarını yine ardışıl ve tutarlı vermemiz gerekiyor. 2 Thread 1 Critical Section! 2 cihaz demek bizim için 2 Thread demek, sıra numarası ise bizim için “Ciritical Section” demektir. Buradaki sıra numarasını düzgün yönetmemiz gerekiyor. 

Yukarıdaki örnek kodda “Critical Section” olan kısım    this.orderNo = this.orderNo + 1;   ifadesidir. Bu tek satırlık bir komut gibi gözükebilir ama arka planda işlemci seviyesinde bu işlem birden fazla adımdan oluşmaktadır.

Qmatic1: this.orderNo değişkenindeki değeri hafızadan 0 olarak okur.
Qmatic2: this.orderNo değişkenindeki değeri hafızadan 0 olarak okur.
Qmatic2: Elindeki 0 değerine 1 ekler.
Qmatic2: “orderNo” değişkenini 1 olarak değiştirir. orderNo değişkeninin değeri şuan 1’dir.
Qmatic1: Elindeki 0 değerine 1 ekler.
Qmatic1: “orderNo” değişkenini 1 olarak değiştirir. orderNo değişkeninin değeri şuan 1’dir.


Görüldüğü gibi iş parçacıkları (Thread’ler) için okuma ve yazma işlemleri senkronize edilmezse aynı sıra numarasını birden fazla kişiye verebiliriz. İşte bu olaya “Race Condition” denilmektedir. Çünkü, Thread’ler ortak kaynağa erişmek için birbiriyle yarışır.

İlk erişen işlemlerini yapmaya başlar, fakat diğer Thread’ler onun işini bitirmesini beklemezlerse yukarıdaki gibi tutarsız durumlar oluşur. Bu nedenle Thread’lerin ortak kaynağa erişimi sıralı olmalıdır.

**Sonuçlar :**

```java
Thread-2 thread got 1 from Qmatic!
Thread-9 thread got 1 from Qmatic!
Thread-1 thread got 1 from Qmatic!
Thread-0 thread got 2 from Qmatic!
Thread-7 thread got 2 from Qmatic!
Thread-3 thread got 2 from Qmatic!
Thread-4 thread got 2 from Qmatic!
Thread-8 thread got 2 from Qmatic!
Thread-5 thread got 4 from Qmatic!
Thread-6 thread got 4 from Qmatic!
```

