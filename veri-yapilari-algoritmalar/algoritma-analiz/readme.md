# Konu Metni

## Algoritma Analizi

Bir problem, farklı algoritmalar kullanılarak çözülebilir. Peki bu farklı algoritmalardan hangisini kullanmalıyız nasıl karar vereceğiz? 

Algoritma analizi yaparak algoritmaları bazı kriterler kullanarak karşılaştırabiliriz. Genel olarak 3 karşılaştırma kriteri vardır:

* Programın çalışma zamanı
* Programın çalışırken kullandığı hafıza miktarı
* Programcının, programı yazarken ne kadar süre harcadığı süre

Duruma göre bu kriterlerden bazıları daha önem kazanabilir. Örneğin, bir programın yazılması gereken süre çok geniş ise programın çalışma zamanı ve kullandığı hafıza daha önemli hale gelebilir.

### Programın çalışma zamanı

Programın çalışma zamanı denilince akla ilk başta programın kaç saniyede çalıştığı gelebilir. Ancak bu göreceli bir ifadedir ve yerine göre çok farklı değerler alabilir. Bir programın kaç saniyede çalıştığı; programlama dilinden programlama diline, bilgisayardan bilgisayara hatta aynı bilgisayarda farklı zamanlarda çalıştırıldığında bile değişiklik gösterebilir. Bu sebeple çalışma zamanı **girdi sayısı ile çalışma süresinin ilişkisi** incelenerek bulunur. Bu şekilde **evrensel** bir çalışma zamanı ifadesi elde edilir.



# Sorular

1. Her programın çalışma süresi girdi sayısı arttıkça artar mı?

   Cevap: Hayır. Örneğin, bir array'de istenilen eleman anında bulunabildiği için array'in eleman sayısı artsa da istenilen elemanın bulunma süresi değişmez.

2. Bir linked list'te istenilen bir elemanın ortalama bulunma süresi, linked list'in eleman sayısı arttıkça artar mı?

   Cevap: Evet, artar. 10 elemanlı bir linked list'te ortalama 5 elemanın dolaşılması gerekiyorsa 20 elemanlı bir linked list'te ortalama 10 elemanın dolaşılması gerekir.

3. Bir linked list'in başına eleman eklenme süresi, eleman sayısı arttıkça artar mı?

   Cevap: Hayır, artmaz. Bir linked list'te ilk elemanın yeri bilindiğinden dolayı anında eleman eklenebilir.



# Ücretsiz Kaynak

* [Medium paylaşımı](https://medium.com/@sgoksel/algoritma-analizi-ve-big-o-notasyonu-3b7aefa8a051) linkinde bir algoritma analizi anlatımı bulabilirsiniz.

