# Erişim Denetimi

Nesne yönelimli programlamanın 4 temel kavramından biri **kapsüllemedir (encapsulation).** Bu kavram basitçe, sınıfın içine yazdığımız alanları ve metotları gizleyebileceğimizi ifade eder. Bu gizleme farklı seviyelerde olabilir. Alanları ve metotları gizleyebilmek için **erişim belirteçleri**ni **(access modifiers)** kullanırız.

## Erişim Belirteçleri

Java’da 4 adet erişim belirteci vardır:

- **public**: Bu erişim belirteciyle belirtilen bir alana veya metoda her yerden erişilebilir. **public** deyimini kullanır. Gizlilik seviyesi en düşük olan erişim belirtecidir. Sınıflara, metotlara, değişkenlere, arabirim ara yüzlere, yapıcı sınıflara (constructors) uygulanabilir.
- **default:** Yalnızca aynı paket içinden erişilebilir. Bu belirteç _default_ olarak isimlendirilmesine rağmen, herhangi bir deyim yazılmaz. Metotlara, alanlara ve sınıflara uygulanır.
- **protected:** Yalnızca aynı paket içinden veya alt sınıflardan erişilebilir. **protected** deyimini kullanır. Metotlara, değişkenlere ve yapıcı sınıflar (constructor) uygulanır.
- **private:** Yalnızca aynı sınıf içinden erişilebilir. private deyimini kullanır. Gizlilik seviyesi en yüksek olan erişim belirtecidir. Metotlara, değişkenlere ve yapıcı sınıflara (constructor) uygulanır.

## Neden Erişim Belirteçleri Gereklidir ?

- Hassas verilerin saklanması sağlanır, erişim kısıtlanır. ([Principle Of Least Privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege) - PoLP yaklaşımı)
- Sınıfı kullanacak olan geliştiricilerin hangi üyelere erişebileceği belirlenir.
- Verilerin tutarlılığı sağlanır.

Aşağıdaki örnekleri inceleyelim:

```java
package package1;

class Box
{
	public int width;
	public int height;
	public int depth;
}
```

```java
package package2;

class Main
{
	public static void main(String[] args)
	{
		Box box = new Box();
		box.width = 100;
	}
}
```

Yukarıdaki örnekte _Box_ ve _Main_ sınıfları farklı paketler içindedir. Buna rağmen, _Box_ sınıfının alanları **public** olarak belirtildiği için, farklı pakette olmasına rağmen _Main_ sınıfından erişilebilir.

```java
package package1;

class Box
{
	int width;
	int height;
	int depth;
}
```

```java
package package2;

class Main
{
	public static void main(String[] args)
	{
        Box box = new Box();
	    box.width = 100; // Bu satır hataya sebep olur
	}
}
```

Yukarıdaki örnekte Box sınıfının alanlarına erişim **default** olarak belirlenmiştir, yalnızca **package1** paketinin içinden erişilebilir. Bu yüzden, _Main_ sınıfı **package2** paketi içinde olduğu için _Box_ sınıfının alanlarına erişmeye çalışıldığında hata fırlatılır.

```java
package package1;

class Box
{
	private int width;
	private int height;
	private int depth;
}
```

```java
package package1;

class Main
{
	public static void main(String[] args)
    {
		Box box = new Box();
		box.width = 100; // Bu satır hataya sebep olur
	}
}
```

Yukarıdaki örnekte _Box_ ve _Main_ sınıfları aynı paket içinde olmalarına rağmen, _Main_ sınıfından _Box_ sınıfının alanlarına erişilemez. _Box_ sınıfının alanları private olarak belirtildiği için yalnızca aynı sınıf içinden erişilebilir.

Yukarıdaki örnekler ile public, protected, private ve default (package-private) erişim belirleyicileri hakkında biraz daha bilgi sahibi olduktan sonra kafamızda takılan soru işareti varsa ya da sözel olarak karışık geldiyse aşağıdaki tablo kafanızdaki soru işaretlerini giderecektir. (Tablodaki kutucuklardaki X işareti olan kısımlar erişilebilir olduğunu göstermektedir. Boş olan kısımlar ise erişilemez olduğunu göstermektedir.)

| Erişi Düzenleyicisi              | public | protected | private | default |
| :------------------------------- | :----: | :-------: | :-----: | :-----: |
| Aynı sınıf                       |   X    |     X     |    X    |    X    |
| Aynı paketteki alt sınıflardan   |   X    |     X     |         |    X    |
| Aynı paket - Alt Sınıf Yok       |   X    |     X     |         |    X    |
| Farklı paketteki alt sınıflardan |   X    |     X     |         |         |
| Farklı paket - Alt Sınıf Yok     |   X    |           |         |         |

## Erişim Kontrolü ve Kalıtım

 Miras alınan yöntemler için ise bazı kurallar uygulanır.

1.Bir üst sınıf da public olarak oluşturulan metotlar tüm alt sınıflardan erişilebilir olmalıdır.

2.Ata sınıfta protected olarak oluşturulan metotlar, alt sınıfta protected veya public olmalıdır. Private olamazlar.

3.Private olarak belirtilen metotlardan miras alınamaz.



> KAYNAKÇA
> - [Java Documentation](https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html)
>
> - [Java Access Modifiers TutorialsPoint](https://www.tutorialspoint.com/java/java_access_modifiers.htm)
>
> - [Java Access Modifiers GeekforGeeks](https://www.geeksforgeeks.org/access-modifiers-java/)
>
> - [Java Access Modifiers w3schools](https://www.w3schools.com/java/java_modifiers.asp)
>
> - [Access Modifiers in Java educative.io](https://www.educative.io/edpresso/access-modifiers-in-java?aid=5082902844932096&utm_source=google&utm_medium=cpc&utm_campaign=edpresso-dynamic&gclid=CjwKCAiAxKv_BRBdEiwAyd40NyYZxZ1Ttqt1-kUnfRx831wtPLplssNpgcj_tGSG87u9R8t53qf_aBoCLAMQAvD_BwE)
>
> - [Java Access Modifiers mobilhanem](https://www.mobilhanem.com/temel-java-dersleri-erisim-belirleyiciler/?__cf_chl_captcha_tk__=58f6c90a1db4c3f0beebe5fb3d5fc9d6dc9a50cb-1609246019-0-ASN4nK9n_sJWYpZgLiMcC8Gdail3owjX0ihLkmRhY0MNisrXAQOLauVdH-8RVBZSMjzr9FeLoYZOZetLH3IfDNziO_8GP3-lAQwEvAa-dwOgnx_iwF4oGyeG1kVutell24Kt_u1CahzCuDoYI0bniyVQJ22GxvGiVqfUgcVmYhi5dwiPbbW5gDlNM0bfxiASxNY6ciwfym9AAvizUymlhd77lT7Yu7a9weFYPmrs5V-kbIEFQNlxFYPWc70mrQ9LLiOjf8axliMEwWKzGygLgpW3GcK_aUjJUlRfJt4pYxCagRg46hnfnvNtJLilwKQngl9xYxdrJnO_SabEDFK6kyi0MgDr9-l4-29gAb-98-AIZYL8olq1OMmWV4VgoLd5PDsNrbN8SDA8JFzb6xbTa4f7oKMoW7jjWI2XyuwNmi0CCy3SEx5wBACcpqCf9culRBb3uI00jLGAD5D3aEgU4hGtuZRQmnxHEpIeFiSHvDhjW7BR7LixheAcflG1Wm-42h4TIi3beGTGJ8sn7Ixvhe1FnwP4gsEcfrr_1YgeHcPzupJQZ6HMm8zMfweU0aQwqHnxqIC6J0rYDrcaTbB2mvG2fYdbmnrfZ8Aaugp0BJl4BdPFkrtzXSh5AQ21DfUPfQ)
>
> - [Principle of least Privelege](https://en.wikipedia.org/wiki/Principle_of_least_privilege)
>
>   
>

