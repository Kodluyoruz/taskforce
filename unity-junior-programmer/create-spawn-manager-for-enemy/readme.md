## Adım 4: Düşman İçin Bir Doğma Yöneticisi (Spawn Manager) Oluşturma
Artık düşman tam olarak bizim istediğimiz gibi davrandığına göre, onu bir Hazır Yapıya (Prefab) dönüştüreceğiz, böylece bir Doğma Yöneticisi (Spawn Manager) tarafından somutlaştırılabilsin.
 
- Yeni bir Hazır Yapı (Prefab) oluşturmak için, **Düşman (Enemy)’ı** Prefabs (Hazır Yapı) dosyasına sürükle, ardından Düşman (Enemy)’i sil.
- Yeni bir “Spawn Manager” **objesi** oluştur, yeni bir “SpawnManager” scripti sabitle ve aç.
- Yeni bir **public GameObject enemyPrefab** değişkeni belirle, daha sonra Denetçi (Inspector)’de yeni bir Hazır Yapı (Prefab) ata.
- **Start()**’ta, önceden belirlenmiş bir konumda yeni bir enemyPrefab örneği oluşturun.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/create-spawn-manager-for-enemy/figures/CWC_B.2.3_image3.png)
