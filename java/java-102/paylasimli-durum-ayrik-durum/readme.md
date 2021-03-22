# Paylaşımlı Durum ve Ayrık Durum

Çok kanallı programlamanın en önemli noktasından biri de kullanılan kaynağın paylaşılıp paylaşılmadığıdır. Yani bazı modellerde iş parçacıkları ortak bir “state”’i (durum) kullanıyor olabilirler. Yani “state”’den kastımız ortak bir veri kaynağını kullanıyorlardır. Örneğin, aynı diziye eleman eklemeye çalışan birden fazla iş parçacığı olduğunu düşünün burada tümü ortak bir kaynağı, yani ortak bir “state”’i kullanıyorlardır.

![state-calısma-mantigi](figures/state.png)

Ya da bazı problemlerde birden fazla iş parçacı bağımsız olarak ayrı ayrı “state”'lerde çalışabilirler. Yani, iş parçacıkları işleyecekleri verileri alırlar ve iş parçacıkları arasında herhangi bir senkronizasyon gerekmeden çalışabilirler. Bu durumda aslında çok kanallı programlama yapmak daha performanslı olabilir. Ayrıca, senkronizasyon için ekstra bir çaba harcanmaz. 

Daha az sorun çıkar. Örneğin elimizde 100 bin elemanlık bir dizi olsun ve bu dizinin toplamını hesaplamak isteyelim. Bu durumda 100 binlik diziyi 10 parçaya ayırıp her veri parçasını bir iş parçacığının işlemesini sağlayabiliriz. Bu iş parçacıkları kendi veri kümesinin toplamanı bulur. Ardından 10 iş parçası işini bitirdiğinde 10 sonucu bir araya getirip toplama işlemini hızlandırmış oluruz.

![state-calısma-mantigi](figures/state2.png)

**Her bir iş parçacığı için bir CPU**

Eğer birden fazla CPU içeren bir donanımınız varsa her CPU’ya bir iş parçacığı atanır. Bu durumla CPU’lar verimli bir şekilde kullanılır.

![same-threaded-system](figures/thread.png)

Yukarıdaki duruma ek olarak ortak paylaşılan herhangi bir kaynak (state) yoksa her CPU’ya atanan iş parçacığı birbirleri arasında senkronizasyona ihtiyaç duymazlar. Bu duruma “Same-Threaded System” denilmektedir. Eğer iş parçacıkları ortak paylaşımlı bir kaynak (state) kullanıyorsa bu durumda iş parçacıklarının bu ortak kaynaklara erişimi senkronize edilmelidir. Bu duruma “Multi-Threaded System” denilmektedir.

![multi-thread-system](figures/thread2.png)


**Same-Threaded System:**

* Bu tür programlamada bir seferde tek bir iş parçacığı çalışır.
* Tek iş parçacıklı model, sorgulamalı bir süreç olay döngüsü kullanır.
* CPU zamanı boşa harcanır. Boşta kalma süresi daha fazladır.
* Daha az verimli programlarla sonuçlanır.
* Bir iş parçacığı duraklatıldığında, sistem bu iş parçacığı devam ettirilene kadar bekler.

**Multi-Threaded System:**

* Bu tür programlamada birden çok iş parçacığı aynı anda çalışır.
* Çok iş parçacıklı model, sorgulamalı olay döngüsü kullanmaz.
* CPU zamanı asla boşa harcanmaz. Boşta kalma süresi minimumdur.
* Daha verimli programlarla sonuçlanır.
* Herhangi bir nedenle bir iş parçacığı duraklatıldığında, diğer iş parçacıkları normal şekilde çalışır.

## Kaynakça
* https://www.mertmekatronik.com/thread-ve-multithread-nedir

