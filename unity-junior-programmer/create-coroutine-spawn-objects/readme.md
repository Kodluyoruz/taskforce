## Adım 6: Objelerin ortaya çıkması için bir coroutine oluşturun
Artık bir liste prefabimiz olduğuna göre, bunları coroutinler ve daha önce görmediğimiz bir döngü türü kullanarak, oyunda somutlaştırmalıyız.

- Yeni bir private float spawnRate değişkeni oluşturun ve değerini atayın
- Yeni bir IEnumerator SpawnTarget () metodu oluşturun
- Yeni metodun içinde, while(true) yapın, 1 saniye bekleyin, değeri rastgele atanacak şekilde yeni bir index değişkeni oluşturun ve rastgele bir tane target (hedef) Instaniate edin
- Start() içerisinde, objeleri oluşturmak için StartCoroutine metodunu kullanın.

![figures]()
