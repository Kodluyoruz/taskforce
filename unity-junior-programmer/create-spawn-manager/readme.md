## 1. Adım: Bir spawn (yumurtlama) yöneticisi oluşturun

Tüm bu karmaşık nesne oluşturma işlemini yapacaksak, süreci yönetmek için özel bir script’e ve onu ekleyecek bir nesneye sahip olmalıyız.

- Hiyerarşide, “SpawnManager” adında Boş bir nesne oluşturma.
- “SpawnManager” adında yeni bir script oluşturup, onu Spawn Manager'a ekleme ve açma
- Yeni bir public GameObject[ ] animalPrefab yapılası oluşturma;
- Denetçide Array boyutunu hayvan sayınızla eşleşecek şekilde değiştirin, ardından Proje penceresinden boş yuvalara sürükleyerek hayvanlarınızı atayın.

**Not:** Bunları hiyerarşide değil Proje penceresinden sürüklediğinizden emin olun! Nesneleri oluşturacak iseniz, Proje penceresinde depolanan Hazır Yapıları kullandığınızdan emin olmanız gerekir.
