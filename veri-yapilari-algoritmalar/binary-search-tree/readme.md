# Konu Metni

## Binary Search Tree

Binary search tree, her noktanın en fazla iki alt noktası olan, soldaki noktanın ana noktadan küçük, sağdaki noktanın ana noktadan büyük olduğu bir ağaç yapısıdır. Eğer ağaç dengeli bir yapıya sahipse binary search algoritmasındaki gibi arama işlemleri "**log(n)**" birim zaman alır. 



![](https://raw.githubusercontent.com/yigitatesh/Kodluyoruz/main/figures/veri-yapilari-algoritmalar/binary_search_tree.jpg)

Yukarıdaki ağaç dengeli bir ağaçtır. Dallanmalar neredeyse eşit olarak dağılmıştır. Dengeli bir ağacın derinliği "log(n)" olacağından dolayı yeni bir eleman ekleme işleminin time complexity'si de "**O(log(n))**" olur.

Eğer ağaç dengeli değilse worst case durumu ortaya çıkar. Ağaca ekleme yapma, eleman arama gibi işlemlerin time complexity'si de "**O(n)**" olur. Aşağıda dengesiz bir ağaç vardır:

![](https://raw.githubusercontent.com/yigitatesh/Kodluyoruz/main/figures/veri-yapilari-algoritmalar/unbalanced_binary_search_tree.jpg)

Yukarıdaki ağaç yapısının bir array'den farkı yoktur ve performansı iyi değildir. Ancak ağaçları dengeli yapıda tutmak için birçok performanslı algoritma vardır ve bu problem çözülmüştür.

**Ekstra bilgi**: Mors alfabesinin de aslında bir binary search tree yapısında olduğunu biliyor muydunuz.



# Sorular

1. Binary search tree gerçek hayatta kullanılır mı? Kullanılıyorsa nerelerde kullanılmaktadır?

   Cevap: Binary search tree performansından dolayı birçok alanda kullanılmaktadır. Programlama dillerinde derleyiciler, "map" ve "set" veri yapıları, veri tabanları bu alanlara örnek olarak verilebilir.

2. Binary search tree'de arama yapmanın average case time complexity'si nedir?

   Cevap: O(log(n)).

3. Binary search tree yapısının mantığını kullanan "heap sort" algoritmasını araştırınız.

   

# Ücretsiz Kaynak

* [Medium paylaşımı](https://tsafaelmali.medium.com/binary-search-tree-nedir-2e6fb0621d9) linkine giderek binary search tree anlatımına bakabilirsiniz.



# Ödev 6

Binary search tree yapısını kod olarak yazınız.

Not: Ağacın noktaları için "Node" adında bir "class" yapısı kullanabilirsiniz.

Örnek kullanımlar aşağıdaki kod üzerinde gösterilmiştir:

````python
# ağacın sınıf üzerinden oluşturulması
tree = BinarySearchTree()

# sayıların ağaca eklenmesi
sayilar = [6, 15, 5, 2, 7, 8, 1, 25]
for sayi in sayilar:
    tree.add_node(sayi)

# ağacın "preorder" şeklinde yazdırılması
tree.print_tree()
````

Yukarıdaki ağaç yazdırıldığında şöyle bir çıktı alınmalıdır:

````
6
  5
    2
      1
  15
    7
      8
    25
````



Cevap:

````python
# Class tanımlamaları
class Node:
    """Ağaçtaki noktayı temsil eder"""
    def __init__(self, data=None):
        self.data = data
        self.right = None
        self.left = None
    
    def add_left(self, data=None):
        """noktanın soluna yeni veri ekler"""
        new = Node(data)
        self.left = new
        return new
    
    def add_right(self, data=None):
        """noktanın sağına yeni veri ekler"""
        new = Node(data)
        self.right = new
        return new
    

class BinarySearchTree:
    """Ağacı temsil eder"""
    def __init__(self, root=None):
        self.root = root
    
    def add_node(self, new_data):
        """Ağaca yeni bir eleman ekler"""
        # root yoksa yeni veri ağaca root olarak eklenir
        if not self.root:
            self.root = Node(new_data)
            return
        
        # ağacı dolaşmaya kökten (root) başlanır
        current = self.root
        while True:
            # eklenecek veri zaten mevcut
            if new_data == current.data:
                return
            # eklenecek veri sol tarafa eklenecek
            elif new_data < current.data:
                if not current.left:
                    current.add_left(new_data)
                    return
                else:
                    current = current.left
            # eklenecek veri sağ tarafa eklenecek
            else:
                if not current.right:
                    current.add_right(new_data)
                    return
                else:
                    current = current.right
    
    def print_tree(self):
        """Ağacı yazdırır"""
        def preorder_depths(root):
            # derinlik 0'dan başlar
            preorder_depth(root, 0)

        def preorder_depth(root, depth):
            if root:
                print(" "*2*depth + str(root.data))
                preorder_depth(root.left, depth+1)
                preorder_depth(root.right, depth+1)
        
        preorder_depths(self.root)

# Örnek kullanım
tree = BinarySearchTree()

sayilar = [6, 15, 5, 2, 7, 8, 1, 25]
for sayi in sayilar:
    tree.add_node(sayi)
    
tree.print_tree()
````

