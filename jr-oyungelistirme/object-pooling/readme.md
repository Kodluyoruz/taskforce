## Adım 3: Object Pooling (nesne havuzlama)
Throughout the course, we’ve created a lot of prototypes that instantiated and destroyed objects during gameplay, but there’s actually a more performant / efficient way to do that called Object Pooling. >Kurs boyunca, oyun sırasında nesneleri somutlaştıran ve yok eden birçok prototip oluşturduk, ancak aslında bunu yapmanın daha performanslı / verimli bir yolu var, Object Pooling.

- **Prototype 2'yi** açın ve bir yedek oluşturun
- Projenizden **DetectCollisions, PlayerController ve DestroyOutOfBounds** script’lerini silin
- Object Pooling birlik paketini **indirin** ve sahnenize **aktarın**
- PlayerController script’i oyuncunuza yeniden takın. DestroyOutOfBounds script’i hayvan ve gıda prefab’lerinize yeniden ekleyin ve ardından DetectCollisions script’i hayvan prefab’ınıza yeniden ekleyin (gıda prefab’ınıza değil)
- Object Pooler script’ini Spawn Manager'ınıza ekleyin, yiyecek cisminizi “Objects To Pool” değişkenine sürükleyin ve “Amount To Pool” değerini 20 olarak ayarlayın.
- Projenizi çalıştırın ve cisimlerin nasıl etkinleştirildiğini ve devre dışı bırakıldığını görün
