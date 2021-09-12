# Konu Metni

## Recursion

Bir problem kendi içinde tekrar ediyorsa bu problem "**recursive**" yani "**özyinelemeli**" bir problemdir. Örneğin, bir **üs alma problemini** ele alalım. 2 sayısının 3. üssünü alacağımızı düşünelim. Bu üs alma problemini, 2^3 = 2 x 2^2 şeklinde açabiliriz. Ve bu problemi de, 2 x 2^2 = 2 x 2 x 2^1 şeklinde açabiliriz. 2^1 = 2 olduğundan dolayı sonuç "2 x 2 x 2" işleminin sonucu yani 8 olur. Üs alma işleminde, gördüğümüz gibi çarpma işlemi yineleniyor. Böylece bu problem bir "özyinelemeli" yani "**kendi içinde tekrar eden**" bir problem oluyor. 

Örneğin, 2 aynayı karşı karşıya tutup bir aynaya baktığımız zaman yansıma görüntüsünün sonsuza kadar gittiğini görürüz. İşte burada da bir aynadan diğer aynaya görüntü tekrar tekrar yansıdığından dolayı sonsuza kadar tekrar eden bir yansıma döngüsü oluşmaktadır.

# Sorular

1. 2 sayısının istenilen üssünü alan "recursive" bir programı, Python ya da istediğiniz başka bir programlama dilinde yazınız.

   Cevap: 

   ````python
   def ussunu_al(x):
       # base case
       if x == 0:
           return 1
       
       return ussunu_al(x-1) * 2
   ````

   

2. Özyinelemeli fonksiyonlarda "base case" nedir ve neden gereklidir? Araştırınız.

   Cevap: Bir özyinelemeli fonksiyonda Base case yoksa o fonksiyon çalıştırıldığında bilgisayarın hafızası dolana kadar ya da programlama dilinin sınırı aşılana kadar çalışır. Sonra da program kapanır. Base case bir özyinelemeli fonksiyonun belli bir duruma durdurulması için gereklidir.

3. [Fibonacci problemi](https://www.hackerrank.com/challenges/ctci-fibonacci-numbers/problem) linkine giderek istenilen Fibonacci sayısını veren fonksiyonu recursion kullanarak yazınız.



# Ücretsiz Kaynak

* [Youtube videosu](https://www.youtube.com/watch?v=Mv9NEXX1VHc) linkine giderek recursion anlatımını izleyebilirsiniz.



# Ödev 1

Bu ödevde, girilen yazının harflerinin ASCII değerlerini ikili sistemde yazacak bir program yazmanız istenmekte. Örneğin; "BABA" yazısı girildiyse çıktı "1000010 1000001 1000010 1000001" olmalıdır. 

Örneğin;

````python
print(decimal_to_binary("B"))
````

Kodu çalıştırıldığında şu çıktı verilmeli:

````python
1000010
````

Alttaki kod çalıştırıldığında ise:

````python
text_to_binary("BABA")
````

Şu çıktı verilmeli:

````python
1000010 1000001 1000010 1000001
````

Not: Öncelikle verilen ondalık sayıyı ikili sistem sayısına dönüştüren ve bu sayıyı string olarak dönen bir fonksiyon yazın. Bundan sonra ise verilen yazının harflerinin ASCII değerlerini ikili sistemde yazacak fonksiyonu yazın.

Cevap:

````python
def decimal_to_binary(x):
	"""girilen ondalık sayıyı ikili sisteme dönüştürür"""
	if x == 0:
		return "0"

	sonuc = ""
	# bölüm 0 olduğunda dur
	while x > 0:
		kalan = x % 2
		x = x // 2
		# kalanı sonuca ekle
		sonuc = str(kalan) + sonuc

	return sonuc

def text_to_binary(yazi):
	"""girilen yazının harflerini ikili sistemde yazdırır"""
	for harf in yazi:
		ascii_deger = ord(harf)
		ikili_deger = decimal_to_binary(ascii_deger)
		print(ikili_deger, end=" ")

# örnek kullanım
text_to_binary("BABA")
````

