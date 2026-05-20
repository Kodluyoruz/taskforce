# LinkedHasMap ve TreeMap

## LinkedHashMap

Map arayüzünün Hashtable ve LinkedList özeliklerini içeren bir kılgısıdır. Dolayısıyla, bu yapıda döngü sırası öngörülebilir. Bu yapının HashMap yapısından önemli farkı öğelerini çift yönlü bağ ile birbirlerine bağlamasıdır. Bağlı liste olduğu için, döngü sırası öğelerin bağlı listedeki konumlarıdır. Tabii, öğelerin konumu listenin yaratılışında yerleştikleri sıradır. 

LinkedHashMap sınıfı HashMap sınıfının belirsiz sıralamasını önler, koleksiyonun öğelerine öngörülebilen bir sırada erişimi sağlar. Tabii, bu erişim sırasını, HashMap yapısını TreeMap yapısına dönüştürerek de sağlayabiliriz. Ama, genellikle, TreeMap yapısını kurmanın karmaşası (complexity) daha çoktur.
