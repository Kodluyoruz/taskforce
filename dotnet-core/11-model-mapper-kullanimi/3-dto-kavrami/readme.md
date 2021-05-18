# DTO (Data Transfer Object)
DTO yani Data Transfer Object. View model ve DTO kullanımı çok karıştırılan 2 kavramdır. View model son kullanıcıya gösterilecek veriyi döndürmek için kullanılırkeni Dto uygulama katmanları arasında veriyi transfer etmek için kullanılır. Genel olarak database den gelen veriyi source olarak kullanır.

DTO da asıl amaç katmanları arasındaki yapılabilecek call yani çağrım sayılarını azaltmaktır. Bir katmanda elimizde var olan data diğer katmanda kullanılacak ise, veriyi tasımak diğer katmanda yeniden çağrım yapmamak için anlamlı bir çözümdür. Ve Dto'lar nerdeyse hiç davranış içermezler. Veriyi olduğu gibi ileten Dumb objelerdir. 
