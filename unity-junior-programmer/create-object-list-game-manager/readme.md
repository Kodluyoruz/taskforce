## Adım 5: Game Manager içerisinde obje listesi oluşturun
Bundan sonra yapmamız gereken, bu objelerin ortaya çıkacağı bir liste oluşturmak. Spawn (oluşturma) metodları için bir Spawn Manager yapmak yerine, daha sonra oyundaki mevcut durumlu da kontrol edecek bir Game Manager yapacağız.

- “Game Manager” isimli bir Empty object (boş obje) oluşturun, GameManager.cs scriptini ona atayın ve o scripti açın
- Yeni bir public List<GameObject> targets; tanımlayın, ardından, GameManager objesinin inspector kısmına gelip, listenin boyutunu (list size) 4 olarak ayarlayın ve prefablerinizi oraya atayın
