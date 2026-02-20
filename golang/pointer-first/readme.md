# Pointer Bölüm 1

Pointer, bir belirteç, bir işaretleyici olarak görev yapar. C ve C++ tabanlı dillerde de kullanılan, çoğunlukla referans tutmak için kullanılan bir yapıdır. Yani bu ne demek? 

Pointer ile bir değişken tanımladığımızı varsayalım. Bu değişkeni farklı bir değişkene atadığımız zaman, değişken diğer bir değişkenin adresini tutar. Yani Bir değişkende değişiklik yapıldığı zaman, diğer değişken bundan etkilenilir. (pass by reference)

Pointer kullanırken dikkatli olmak gerekir. Normalde bir değişkenin değerini başka bir değişkene atadığınızda değer kopyalaması yapılır. Ancak referans yoluyla atama yapıldığında, değer yerine referans kopyalama yapılır. Böylece orijinal ya da referans değişkeni bir değişme uğrarsa her iki değişken değeride değişmiş olur.
