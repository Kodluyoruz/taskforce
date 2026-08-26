## Adım 8: Bir Spawn Manager oluşturun

Son projeye benzer şekilde, engel prefabriklerini başlatacak boş bir Spawn Manager nesnesi oluşturmamız gerekiyor.

- Yeni bir “Spawn Manager” boş nesne oluşturun, ardından buna yeni bir **SpawnManager.cs** scripti atayın.
- SpawnManager.cs'de yeni bir public GameObjectblockPrefab; tanımlayın, ardından prefabinizi inspectordeki yeni değişkene atayın.
- Spawn konumunuzda yeni bir private **Vector3 spawnPos** tanımlayın.
- Start()'ta, yeni bir engel prefabi **Instantiate** edin, ardından prefabinizi sahneden silin ve test edin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/create-spawn-manager-lesson-3-1/figures/CWC_B.1.2_image6.png)
