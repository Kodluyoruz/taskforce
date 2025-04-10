# Zero values nedir? / Çoklu değişken nasıl oluşturulur?
Bir satırda birden fazla değişkeni tanımlayabildiğimiz gibi değerlerini de atayabiliriz:


var message, age, isAdmin = "Merhaba", 23, true

// veya

message, age, isAdmin := "Merhaba", 23, true

Birden fazla değişkeni gruplayarak tanımlayabilir, değerlerini atayabiliriz:


const(
	i = 100
	pi = 3.1415
	prefix = "Go_"
)

Bir değişkene değer atamadığınızda Go, değişkenin tipine göre default (varsayılan) değerini atar. Bazı tiplere göre default değerler şunlardır:

string için boşluk (“”),

bool için false,

int için 0 (sıfır)’dır.



