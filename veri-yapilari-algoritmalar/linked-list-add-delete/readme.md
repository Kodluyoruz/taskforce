# Konu Metni

## Linked List'te Eleman Ekleme/Çıkarma

Linked list'te, sadece elemanların birbirini işaret ettiği yerlerde değişiklik yaparak bir eleman eklenebilir ve çıkartılabilir. 

Örneğin, "a -> b -> c" şeklinde 3 elemanlı bir linked list olsun. 

* Bu linked list'in sonuna bir eleman eklemek istersek şöyle yapabiliriz: 

  Rastgele bir yere "d" bilgisini yazarız ve "c" elemanının "d" bilgisinin olduğu noktayı göstermesini sağlarız. Bu işlemden sonra linked list "a -> b -> c -> d" haline gelecektir.

* "b" ve "c" elemanlarının arasına "e" bilgisini yerleştirmek için ise:

  Rastgele bir yere "e" bilgisini yazarız. "b" elemanının "e" elemanını, "e" elemanının ise "c" elemanını göstermesini sağlarız. Bu işlemlerden sonra linked list "a -> b -> e -> c" haline gelecektir.

* "b" elemanını silmek için ise:

  "a" elemanının "c" elemanını göstermesi sağlanır ve "b" bilgisi hafızadan silinir. Böylece linked list 

  "a -> c" haline gelecektir.



# Sorular

1. Bir linked list'te ilk eleman nasıl silinir?

   Cevap: Linked list'in başlangıç noktası 2. eleman yapılır ve 1. eleman hafızadan silinir.

2. Normalde bir linked list'in sonuna eleman eklemek için tüm elemanların dolaşılması gerekir. Peki hızlı bir şekilde linked list'in sonuna eleman eklemek istiyorsak ne yapmamız gerekir?

   Cevap: Linked list'in 1. elemanının yerini tuttuğumuz gibi son elemanının yerini de tutabiliriz. Böylece son elemana da hızlı bir şekilde ulaşıp eleman ekleyebiliriz.

3. "a -> b -> c" şeklinde bir linked list olduğunu düşünelim. a.next = b, b.next = c, c.next = None olsun. Elemanlara ".data" eklenerek de elemanın tuttuğu veriye ulaşılsın. Örneğin, "a.data" ifadesi "a" elemanının tuttuğu veriyi ifade ediyor. Bu linked list'i tersten, "c b a" şeklinde, yazdıracak bir kod yazın.

   Cevap:

   ````python
   def ters_yazdir(eleman):
   	if eleman.next is None:
   		print(eleman.data)
   		return
   	
   	ters_yazdir(eleman.next)
   	print(eleman.data)
   ````

   

# Ücretsiz Kaynak

* [Medium paylaşımı](https://medium.com/@tolgahan.cepel/do%C4%9Frusal-veri-yap%C4%B1lar%C4%B1-2-ba%C4%9Fl%C4%B1-liste-linked-list-8e5d3d84c41f) linkinde ayrıntılı ve resimli bir linked list anlatımı bulabilirsiniz.

