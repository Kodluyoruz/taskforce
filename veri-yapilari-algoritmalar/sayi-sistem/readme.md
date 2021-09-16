# Konu Metni

## Sayı Sistemleri

Biz insanlar, sayı sistemi olarak **ondalık sistemi** kullanırız. Bu sistemde 10 tane farklı sembol vardır. Bilgisayarlar ise insanlardan farklı olarak **ikili sayı sistemi** kullanır ve bu sistemde sadece 2 sembol vardır. Bu iki sembol ise **0** ve **1**'dir. Biz her sayıyı 10 tane rakam kullanarak nasıl ifade ediyorsak, bilgisayarlar da sadece 2 tane rakam kullanarak ifade eder.



Bir sayı yazdığımızda, her rakam bir **basamağa** aittir. Örneğin; "**240**" sayısını yazdığımızda 0 rakamı birler basamağına, 4 rakamı onlar basamağına, 2 rakamı ise yüzler basamağına aittir. Aslında bir sayıyı anlarken yaptığımız şey her rakamı basamağıyla çarpıp hepsini toplamaktır. Yani "240" sayısı "**2x100 + 4x10 + 0x1**" şeklinde de anlaşılabilir. Bu işlemin sonucu ise elbette "240" olacaktır.



Ondalık sistemde, basamaklar 1'den başlar ve toplamda 10 tane kullanılabilecek rakam olduğundan dolayı 10 ile çarpılarak (birler, onlar, yüzler, binler basamağı şeklinde) devam eder. İkili sistemde ise 0 ve 1 olmak üzere 2 tane rakam vardır. Bu yüzden de basamaklar yine 1'den başlar ancak 2 ile çarpılarak (birler, ikiler, dörtler, sekizler basamağı şeklinde) devam eder. 

Örnek olarak "**1101**" sayısını ikili sayı sisteminde ele alalım. Basamaklarına göre açılım yapacak olursak "**1x8 + 1x4 + 0x2 + 1x1**" şeklinde açarak bu sayının ondalık sistemde hangi sayıya denk geldiğini bulabiliriz. İşlem yapıldığında sayı ondalık sistemde "**13**" oluyor. Gördüğümüz gibi ikili sistemdeki "1101" sayısı ondalık sistemde "13" sayısına denk geliyor. Bu sayıların içerdikleri bilgi aynı fakat farklı sayı sistemlerinde yazıldıkları için farklı görünüyorlar.



### Ondalık sistem ve ikili sistem arasında dönüşümler

Peki "13" sayısını ondalık sistemden ikili sisteme nasıl dönüştürebiliriz? Ondalık sayı sisteminde basamakları bulmak için sayıyı 10'a böleriz ve bölümlerden kalanlar bize basamakları verir. 

"13" sayısında bu işlemi yapalım. 13'ü 10'a bölünce bölüm 1 ve kalan 3 çıkar. Demek ki 3 birler basamağında. Bölüm olan 1'i 10'a bölünce bölüm 0 ve kalan 1 çıkar. Demek ki onlar basamağında 1 var. Bölüm 0 olduğu için işlemi bitirir ve sayıları basamaklarına yazarız. Sonuç olarak "13" sayısını elde ederiz.

"13" sayısını ikili sisteme çevirmek için aynı işlemleri yapmalıyız ancak 10 sayısına değil de 2 sayısına bölmeliyiz. İşlemleri yapalım. 13'ü 2'ye bölünce bölüm 6 ve kalan 1 çıkar. Birler basamağında 1 var. 6'yı 2'ye bölünce bölüm 3 ve kalan 0 çıkar. İkiler basamağında 0 var. 3'ü 2'ye bölünce bölüm 1 ve kalan da 1 çıkar. Dörtler basamağında 1 var. 1'i 2'ye bölünce bölüm 0 ve kalan 1 çıkar. Sekizler basamağında da 1 var. Bölüm 0 olduğundan işlemleri bitiririz ve sonuç ise "1101" çıkar.



# Sorular

1. Ondalık sistemde yazılmış "58" sayısı, ikili sistemde hangi sayıya denktir?

   Cevap: 111010

2. İkili sistemde yazılmış "1001101" sayısı, ondalık sistemde hangi sayıya denktir?

   Cevap: 77

3. Bize "1011" sayısının verildiğini düşünelim. Bu sayının ondalık sistemde mi yoksa ikili sayı sisteminde mi yazıldığını kesin olarak söyleyebilir miyiz?

   Cevap: Sayı 0 ve 1 rakamlarından oluşmaktadır. Ancak, bu iki rakam hem ondalık sistemde hem de ikili sistemde bulunmaktadır. Bu yüzden kesin olarak hangi sistemde yazıldığını söyleyemeyiz.



# Ücretsiz Kaynak

* [Hackerrank problemi](https://www.hackerrank.com/challenges/30-binary-numbers/tutorial) linkine tıklayarak sayfadaki problemi istediğiniz programlama dilini kullanarak çözebilirsiniz.

