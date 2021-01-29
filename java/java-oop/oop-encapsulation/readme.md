# Kapsülleme Kavramı (Encapsulation)

Yazılımdaki nesneler gerçek dünyadaki nesnelere benzer yapıdadır. Her nesnenin durumu ve bazı davranışları vardır. Nesnenin durumu sahip olduğu verilerin değerleri ile temsil edilir. Örneğin bir araba nesnesi söz konusu ise arabanın sahibi, plakası, markası, o andaki hızı vb bilgiler nesnenin durumunu gösterir ve bu veriler nesnede tanımlı olan değişkenlerde saklanır. Sınıfların, değişkenlerin ve fonksiyonların bir araya gelmesinden oluştuğunu önceden belirtmiştik. Nesneler ise tanımlanan sınıflardan oluşturulur. Nesneye ait işlevler ise araba sınıfı içindeki fonksiyonlar (metotları) ifade eder. Örneğin arabanın motorunun çalışması, arabanın konum bilgisini bildirmesi, frenleme yapabilmesi, vites değiştirmesi bunlar da araba nesnesine ait fonksiyonlardır.

Nesne, kendi durumunu gösteren verilerini ve bazı davranışlarını diğer nesnelerden gizlemelidir. Kapsülleme yöntemi özellikle nesnenin durumunu ifade eden değişkenlerdeki verilerin dışarıdaki nesneler tarafından direkt olarak değiştirilmesini kısıtlamayı ifade eder.

Bu nedenle nesnenin durum verisini değiştirme yetkisi sadece nesnenin kendisine ait olmalıdır. Nesnenin durumu ifade eden değişkenlerin sakladığı veriler değiştirilmek istenirse sadece nesnede tanımlı olan fonksiyonlar vasıtasıyla değiştirilmelidir. Örneğin arabanın vites bilgisini arttırmak veya azaltmak işini sınıf içinde tanımladığımız fonksiyonlar vasıtasıyla yapmamız gerekir. Bu bir bakıma veri gizlemesidir (data-hiding). Bunu bir örnekle açıklayalım. Yine &quot;Engine&quot; tipinde bir sınıf tanımlayıp bir kapsülleme örneği yapalım. Engine sınıfı Car sınıfı içinde &quot;Aggregation&quot; ilişkisi ile yer alan bir nesnedir. Arabanın motorunu temsil eder.



Özet bir örnek:

````java
public class Engine {

	private float temperature;
	
	private short activePistonCount;
	
	private boolean status = false;
	
	public Engine() {
		this.temperature = 0.0f;
		this.activePistonCount = 0;
	}
	
	// motor çalışmaya başladıktan sonra derecesi 5 derece artmaktadır.
	// "temperature" değişkeninde motorun sıcaklık bilgisi tutulmaktadır.
	// Bu da nesnenin durumunu ifade eder. Bu durum değişikliğini bir fonksiyon yardımıyla yapıyoruz.
	// Engine tipindeki nesnenin sıcaklık bilgisi direkt olarak değiştirilemez. Bu kapsüllemeye iyi bir örnektir.
	public void start() {
		
		// motorun çalışma durumunu saklayan değişkeni true'ya çekip motorun çalışmaya başladığını belirtiyoruz.
		this.status = true;
		this.activePistonCount = 4;
		this.temperature += 5;
	}
	
	// Aynı şekilde moturu durdurma işini de bir fonksiyon yardımıyla yapıyoruz. 
	// Bu değişkenler üzerindeki veri değişimini fonksiyonlar ile yönetiyoruz.
	public void stop() {
		this.status = false;
	}
	
	
	// Motorun sıcaklığını azaltmak için soğutma ünitesinden faydalanıyoruz.
	// Böylece yine sıcaklık bilgisini direkt erişime açmadan dışarıdan bir fonksiyon yardımıyla değiştirilmesini sağlamış oluyoruz.
	// İşte bu da bir kapsülleme örneğidir.
	public void freezeTemperature(float freezeValue) {
		
		this.temperature -= freezeValue;
	}
	
	
	// Nesne üzerindeki private değişkenlerdeki değerleri dışarıdan okuyabilmek için yine fonksiyonlardan faydalanıyoruz.
	// Veri okuma işini de kapsülleme prensibine uygun şekilde yapmış oluyoruz.
	public boolean getStatus() {
		return this.status;
	}
	
	public int getActivePistonCount() {
		return this.activePistonCount;
	}
	
	public float getTemperature() {
		return this.temperature;
	}
	
}
````



Daha detaylı bir örnek :

````java
package main.encapsulation.sample;

public class Engine {

	private float temperature;
	
	private short activePistonCount;
	
	private boolean status = false;
	
	public Engine() {
		this.temperature = 0.0f;
		this.activePistonCount = 0;
	}
	
	// motor çalışmaya başladıktan sonra her 2.5 saniyede sıcaklık derecesi 5 derece artmaktadır.
	// "temperature" değişkeninde motorun sıcaklık bilgisi tutulmaktadır.
	// Bu da nesnenin durumunu ifade eder. Bu durum değişikliğini bir fonksiyon yardımıyla yapıyoruz.
	// Engine tipindeki nesnenin sıcaklık bilgisi direkt olarak değiştirilemez. Bu kapsüllemeye iyi bir örnektir.
	public void start() {
		
		// motorun çalışma durumunu saklayan değişkeni true'ya çekip motorun çalışmaya başladığını belirtiyoruz.
		this.status = true;
		this.activePistonCount = 4;
		
		// Ayrı bir thread içinde yapıyoruz.
		Thread thread = new Thread(new Runnable() {
			
			@Override
			public void run() {
				while(status) {
					temperature += 55;
					
					// her 25 saniyede bir motorun sıcaklık derecesi 5 derece artıyor.
					try {
						Thread.sleep(2500);
					} 
					catch (InterruptedException e) {
						e.printStackTrace();
					}
				}
			}
		});
		
		thread.start();
	}
	
	// Aynı şekilde moturu durdurma işini de bir fonksiyon yardımıyla yapıyoruz. 
	// Bu değişkenler üzerindeki veri değişimini fonksiyonlar ile yönetiyoruz.
	public void stop() {
		this.status = false;
	}
	
	
	// Motorun sıcaklığını azaltmak için soğutma ünitesinden faydalanıyoruz.
	// Böylece yine sıcaklık bilgisini direkt erişime açmadan dışarıdan bir fonksiyon yardımıyla değiştirilmesini sağlamış oluyoruz.
	// İşte bu da bir kapsülleme örneğidir.
	public void freezeTemperature(float freezeValue) {
		
		this.temperature -= freezeValue;
	}
	
	
	// Nesne üzerindeki private değişkenlerdeki değerleri dışarıdan okuyabilmek için yine fonksiyonlardan faydalanıyoruz.
	// Veri okuma işini de kapsülleme prensibine uygun şekilde yapmış oluyoruz.
	public boolean getStatus() {
		return this.status;
	}
	
	public int getActivePistonCount() {
		return this.activePistonCount;
	}
	
	public float getTemperature() {
		return this.temperature;
	}
	
}
````

&quot;Car&quot; sınıfının durumunu yine fonksiyon yardımıyla değiştiriyoruz. &quot;start&quot; fonksiyonu ile motoru çalıştırıyoruz. Böylece nesnemizin durumu değişmiş oluyor. Fakat, bunu kapsülleme yöntemiyle bunu yapıyoruz. Böylece, değişkenin değerini direkt olarak dışarıdan değiştirilemez kılıyoruz.

Dışarıdan biri nesnenin durumunu değiştirmek istiyorsa yazılımcının tanımladığı bu fonksiyonlar vasıtasıyla durum değişimini yapmalıdır. İşte bu yönteme biz kapsülleme diyoruz.
