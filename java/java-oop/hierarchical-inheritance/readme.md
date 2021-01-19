

# Hiyerarşik Kalıtım (Hierarchical Inheritance)

Bu modelde bir tane ATA sınıfımız vardır ve bu sınıftan kalıtım alan birden fazla alt sınıf vardır. Örneğin: A sınıfı ATA sınıf olsun. B,C,D ondan kalıtım alıyor olsunlar. Bu modele hiyerarşik kalıtım denir.

![Hiyerarşik Kalıtım](/Users/kodluyoruz/Projeler/kodluyoruz/taskforce/java/java-102/object-oriented-programming/figures/hierarchical-inheritance.png)

````java
public class Tax {
	
	public double calculate(double value) {
		
		return value + value * 0.1;
	}
}

public class OTVTax extends Tax {

	@Override
	public double calculate(double value) {
		
		return value + value * 0.2;
	}
}

public class KDVTax extends Tax{

	@Override
	public double calculate(double value) {
		
		return value + value * 0.3;
	}
}
````



