# Konu Metni

## Time Complexity

Time complexity (zaman karmaşıklığı), bir algoritmanın girdi sayısına bağlı olarak kaç tane işlem yapması gerektiğinin ifadesidir.

Time complexity, farklı girdiler için farklı olabilir. Örneğin, isimlerden oluşan bir array'de belirli isimleri array'in başından sonuna kadar dolaşarak aradığımızı düşünelim. Ahmet ismi array'in başında, Mehmet ismi ortasında ve Ali ismi ise sonunda olsun. Ahmet ismini ararken çok hızlı bir şekilde buluruz ancak Ali ismini ararken array'in sonuna kadar gitmemiz gerekmektedir. Bu farklı durumlara "case" adı verilir ve genel olarak 3 case vardır:

1. **Best case**: En iyi durumdur. Yukarıdaki örnekte Ahmet ismini arama durumudur ve bu örnekte 1 birim zaman alır. Algoritmanın genel performansını yansıtmaz.
2. **Average case**: Ortalama durumdur. Yukarıdaki örnekte Mehmet ismini arama durumudur ve bu örnekte array'in yarısı dolaşıldığından dolayı array uzunluğunun yarısı kadar zaman alır. Ortalama performansı yansıtsa da en çok kullanılan case değildir.
3. **Worst case**: En kötü durumdur. Yukarıdaki örnekte Ali ismini arama durumudur ve bu örnekte tüm array dolaşıldığından dolayı array'in uzunluğu kadar zaman alır. En kötü performansı yansıtsa da algoritma için bir alt performans sınırı belirler. Bu yüzden en çok kullanılan case'dir.



# Sorular

1. Best case'i worst case'i ile aynı zamanı alan bir işlem söyleyin.

   Cevap: Bir array'de belli bir indeksteki elemana ulaşmak.

2. Neden average case değil de worst case daha çok kullanılan bir case'tir?

   Cevap: Genelde worst case hesaplaması average case'e göre daha kolaydır ve average case girdilerin dağılımına göre değişiklik gösterebilir. Ayrıca, worst case algoritmanın en alt performans sınırını belirler.

3. "n" adet elemanı olan ve hash collision'ları önlemek için separate chaining kullanılan bir hash table'ın bir elemanının aranması durumunda worst case kaç birim zaman alır?

   Cevap: Worst case, tüm verilerin bir hash table indeksinde çakıştığı durumdur. Eğer aranan eleman o indeksteki linked list'in sonunda ise arama işlemi "n" birim zaman alır.



# Ücretsiz Kaynak

* [Time complexity](https://tr.ilusionity.com/216-what-is-big-o-notation-explained-space-and-time-complexity) linkine giderek time complexity ve algoritma analizi hakkında bilgi edinebilirsiniz.

