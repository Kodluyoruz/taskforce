## Adım 4: Dağınık kodu yeni metodlarla değiştirin
Start() metodumuzu dağınık ve okunamaz hale getiren rastgele kuvveti, torku ve konumu açık bir şekilde kullanmak yerine, bunların her birini yepyeni, kolay anlaşılacak şekilde adlandırılmış özel metodlarda tutacağız.

- **minSpeed, maxSpeed, maxTorque, xRange ve ySpawnPos** için yeni private float değişkenleri oluşturun ve değerini atayın;
- **Vector3** **RandomForce()** şeklinde yeni bir metod oluşturun ve onu **Start()** içerisinde çağırın
- float **RandomTorque()** şeklinde yeni bir metod oluşturun ve onu **Start()** içerisinde çağırın
- **RandomSpawnPos()** şeklinde yeni bir metod oluşturun, yeni bir **Vector3** döndürmesini sağlayın ve **Start()** içerisinde çağırın.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/replace-messy-code-with-new-methods/figures/CWC_B.3.2_image2.png)
