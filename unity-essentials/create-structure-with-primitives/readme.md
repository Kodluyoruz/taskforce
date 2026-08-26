# Primitive'ler (Temel Öğeler) ile Yapı Oluşturma

Bu eğitim, GameObjectler ve değişimler konularında anladıklarınızı 3B temel öğelerden bir yapı oluşturmak için uygulayabileceğiniz bir alıştırmadır. Bu eğitimde şunları yapacaksınız:

- Boş bir sahneye temel öğeler ekleyeceksiniz.
- Diğer GameObjectler için boş bir üst öğe GameObject oluşturacaksınız.
- GameObjectlerin ikinci kopyasını oluşturacaksınız.
- Hierarchy penceresini kullanarak GameObjectler arasında üst-alt öğe ilişkisi oluşturacaksınız..
- 3B ortamda Sahnede gezeceksiniz.
- Temel öğeleri verilen konuma, rotasyona ve ölçeğe çevireceksiniz.

**Aşama 1: Genel Bakış**
Bu öğretici, birçok temel öğeden oluşan mimari bir GameObject oluşturacağınız bir alıştırmadır. Bu alıştırma size GameObjectlerin nasıl oluşturulacağını ve değiştirileceğini sağlam bir şekilde kavratacak ve Sahnede (Scene) gezinme alıştırması yaptıracak.

İşte kuracağınız yapı.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-structure-with-primitives/figures/B.2.2-1.png)

Çatısı, zemini ve duvarları olan küp şeklinde bir yapı. Zemin, dört tarafada merdiven basamakları oluşturan ,arta arda daha küçük karo şeklindeki karelerden oluşan bir yığındır; çatı zeminin ters kopyasıdır; ve duvarlar, her köşeden yapının merkezine doğru diyagoneldir ve merkezde açık alan bırakırlar.

Bu yapıyı oluşturduğunuzda, GameObjectlerin hizalı olduğundan emin olmak için Sahnedeki bakış açınızı değiştirmek isteyebilirsiniz. İnceleme için bkz  [Sahnede gezinme.](https://learn.unity.com/tutorial/explore-the-unity-editor#5fa1bfc4edbc2a01f0fae7e7) 

**Aşama 2: Boş bir GameObject oluştur**
Boş bir GameObject, Hiyerarşide (Hierarchy) oluşturulabilen yer tutucu nesnedir. Sahnede görünen bir tasviri yoktur ve diğer GameObjectler için konteyner gibi davranabilir (daha sonra diğer şeylerle birlikte açıklanacak).

- Hiyerarşide (Hierarchy) sağ tıklayın ve **Create Empty** seçin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-structure-with-primitives/figures/B.2.2-2.png)

Create Empty seçili Hiyerarşi (Hierarchy) içerik menüsü.

- Inspector’da adını Monument olarak yeniden adlandır. 

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-structure-with-primitives/figures/B.2.2-3.png)

Inspector penceresinin üst kısmı, seçili GameObject’in adını Monument olarak göstermekte.

- Sahne (Scene) görünümünde bu yeni GameObjecti seçin. Inspector’da, sağdaki üç noktaya tıklayarak ve Reset Position’ı seçerek pozisyonu sıfırlayın. Bu, GameObject merkezinin konumunu 0,0,0 olarak ayarlar ve onu Sahnenizin (Scene) merkezine hizalar.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-structure-with-primitives/figures/B.2.2-4.png)

Inspector penceresinde, Transform Component, üç nokta seçili ve Reset Position menüde görüntülenmekte.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-structure-with-primitives/figures/B.2.2-5.png)

Scene görünümünde boş GameObject seçili, Gizmo gösterilmekte, konumu 0,0,0’a sıfırlanmış

**Aşama 3: Basamakları oluşturun**
- Hiyerarşide (Hierarchy), Monument GameObject’ine sağ tıklayın ve Monument’in alt öğesi olarak yeni bir küp oluşturmak için  **3D Object > Cube’ü** seçin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-structure-with-primitives/figures/B.2.2-6.png)

Hiyerarşi (Hierarchy) penceresi ile Monument GameObject seçili, 3B Nesne (3D Object) seçili içerik menüsü gösterilmekte ve alt menüde temel öğeler listelenmekte.

- Yeni GameObject’i, Floor olarak yeniden adlandırın. 

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-structure-with-primitives/figures/B.2.2-7.png)

Hiyerarşi (Hierarchy) , Floor GameObject’i Monument GameObject’in alt öğesi olarak göstermekte.

- Floor GameObject’e sağ tıklayın ve Duplicate’i seçin. (Kısayol: Floor’u seç ve Ctrl-D tuşlarına bas.) Floor’u altı kez daha kopyala böylece orjinal Floor ve yedi kopyaya daha sahip olacaksınız, toplamda Monument’in sekiz floor alt öğesi olacak.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-structure-with-primitives/figures/B.2.2-8.png)

Hiyerarşi (Hierarchy) , Floor ve yedi kopyasını Monument GameObject’in kopyası olarak göstermekte.

**Aşama 8: Basamakları değiştirin**
Bu görevlerde, merdiven basamağı efekti oluşturmak için her bir Floor nesnesinin Transform Component değerlerini değiştireceksiniz.

- İlk Floor alt öğesini seçin ve Transform Componenti’nin değerlerini Inspector penceresinde  aşağıdaki gibi değiştirin

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-structure-with-primitives/figures/B.2.2-9.png)

Inspector penceresi, ilk Floor GameObject’in Transform bileşeninin Ölçek (Scale) ayarları X=20, Y=0.2, Z=20 ve tüm Konum (Position) ve Ölçek (Scale) ayarları 0

- Geri kalan Floor nesnelerine de aşağıda belirtilen değerleri kullanarak aynısını yapın.
Floor (1) GameObject için değerler

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-structure-with-primitives/figures/B.2.2-10.png)

Floor (1) için Transform koordinatları: Konum(Position) 0, 0.2, 0; 
Dönüş (Rotation) 0, 0, 0; Ölçek (Scale) 18, 0.2, 18

Floor (2) GameObject için değerler

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-structure-with-primitives/figures/B.2.2-11.png)

Floor (2) için Transform koordinatları : Konum (Position) 0, 0.4, 0; 
Dönüş (Rotation) 0, 0, 0; Ölçek (Scale) 16, 0.2, 16

Floor (3) GameObject için değerler

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-structure-with-primitives/figures/B.2.2-12.png)

 Floor (3) için Transform koordinatları: Konum (Position) 0, 0.6, 0; 
Dönüş (Rotation) 0, 0, 0; Ölçek (Scale) 14, 0.2, 14

Şimdiye kadar buna benzer bir şeye sahip olmalısınız:

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-structure-with-primitives/figures/B.2.2-13.png)

 Dört merdiven basamaklı kare karo şeklinde bir nesne oluşturmak için her biri aşağıdakinden daha küçük ve daha yüksek olan dört Floor alt öğesi olan Monument GameObject.
 
 Floor (4) GameObject için Değerler

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-structure-with-primitives/figures/B.2.2-14.png)

Floor (2) için Transform koordinatları: Konum (Position) 0, 0.8, 0; 
Dönüş (Rotation) 0, 0, 0; Ölçek (Scale) 12, 0.2, 12

Floor (5) GameObject için değerler

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-structure-with-primitives/figures/B.2.2-15.png)

Floor (2) için Transform koordinatları: Konum (Position) 0, 1, 0; 
Dönüş (Rotation) 0, 0, 0; Ölçek (Scale) 10, 0.2, 10

Floor (6) GameObject için değerler

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-structure-with-primitives/figures/B.2.2-16.png)

Floor (6) için Transform koordinatları: Konum (Position) 0, 1.2, 0; 
Dönüş (Rotation) 0, 0, 0; Ölçek (Scale) 8, 0.2, 8

Floor  (7) GameObject için değerler 

![figures]()

Floor (2) için Transform koordinatları: Konum (Position) 0, 1.4, 0; 
Dönüş (Rotation) 0, 0, 0; Ölçek (Scale) 6, 0.2, 6

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-structure-with-primitives/figures/B.2.2-17.png)

Şimdiye kadar anıtın basamaklarına sahip olmalısınız.  
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-structure-with-primitives/figures/B.2.2-18.png)

Sekiz merdiven basamaklı kare karo şeklinde bir nesne oluşturmak için her biri aşağıdakinden daha küçük ve daha yüksek olan sekiz Floor alt öğesi olan Monument GameObject.

**Aşama 5:Duvarları oluşturun**

- Monument’in alt öğesi olan başka bir Cube temel öğesi oluşturun ve Wall olarak yeniden adlandırın.


![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-structure-with-primitives/figures/B.2.2-19.png)

Hiyerarşi (Hierarchy) , showing Wall GameObject’i Monument GameObject’in alt öğesi olarak göstermekte

- Inspector’daki değerleri aşağıdaki gibi değiştirin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-structure-with-primitives/figures/B.2.2-20.png)

Wall GameObject’in Transform Component’i Konumu (Position) -6.5, 5, -6.5; Dönüşü (Rotation) 0, 45, 0; Ölçeği (Scale) 0.2, 10, 10 gösteriyor

Duvar şimdi döndürüldü böylece Zemin (Floor) boyunca çapraz

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-structure-with-primitives/figures/B.2.2-21.png)

Monument GameObject’in sekiz Floor alt öğresi ve bir Wall alt öğesi; Wall,en geniş Floor GameObject’in sol arka köşesine uzanan dikey kiremit şeklinde bir nesnedir.
3. Duvarı üç kez çoğalt ve Transform Component’in değerlerini aşağıda gösterildiği gibi değiştir.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-structure-with-primitives/figures/B.2.2-22.png)

Hiyerarşi (Hierarchy) duvar nesnesinin üç kez çoğaltıldığını gösteriyor.

Wall (1) GameObject 

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-structure-with-primitives/figures/B.2.2-23.png)

Floor (2) için Transform koordinatları: Konum (Position) 6.5, 5, 6.5; 
Dönüş (Rotation) 0, 45, 0; Ölçek (Scale) .2, 0.10, 10

Wall (2) GameObject 

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-structure-with-primitives/figures/B.2.2-24.png)

Floor (2) için Transform koordinatları: Konum (Position) 6.5, 5, -6.5; 
Dönüş (Rotation) 0, -45, 0; Ölçek (Scale) 0.2, 0.10, 10

Wall (3) GameObject 

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-structure-with-primitives/figures/B.2.2-25.png)

Floor (3) için Transform koordinatları: Konum (Position) -6.5, 5, 6.5; 
Dönüş (Rotation) 0, -45, 0; Ölçek (Scale) 0.2, 0.10, 10

Artık 45 derecede 4 duvarınız olacak.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-structure-with-primitives/figures/B.2.2-26.png)

Dikey duvarlar Monument GameObject’e eklendi

**Aşama 6: Çatıyı oluştur**

- Monument GameObject’in alt öğesi olan yeni boş bir GameObject oluştur ve adını Platform yap. 

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-structure-with-primitives/figures/B.2.2-27.png)

Hiyerarşi (Hierarchy) yeni boş GameObject olan Platform’u gösteriyor

- Tüm zemin nesnelerini Platform GameObject’ine sürükle. Bu, nesnelerin içi içe GameObject’in alt öğesi oldukları iç içe (nested) GameObject olarak adlandırılan şeyi oluşturur. Bu durumda, Monument GameObject üst öge, ve tüm Floor GameObjectler onun alt öğesi. Nesneleri bu şekilde grupladığınızda, hepsini birlikte kullanabilir ve aralarındaki ilişkiyi korurken bile kopyalarını oluşturabilirsiniz.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-structure-with-primitives/figures/B.2.2-28.png)

Tüm zemin (floor) nesneleri boş GameObject’e sürüklendi.

- Platform GameObject’i kopyalayın. Kopyalanmış Platform, alt nesneleri de içerecek. Platform’un bu kopyasını Roof olarak yeniden adlandırın.

- Roof’u seçin ve Move ve Rotate araçlarını kullanarak yapının çatısına yerleştirin. Roof’u Transform Component’inde ki sayıları değiştirmeden Scene görünümünde değiştirmeyi deneyin, ancak işiniz bittiğinde, sayılar aşağıda gösterilenler gibi olmalılar.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-structure-with-primitives/figures/B.2.2-29.png)

Bitmiş Monument GameObject

**Aşama 7: Sonraki adımlar**

Unity’de bir anıt oluşturdunuz! Yol boyunca bazı yeni kavramlar öğrendiniz ve bazı eski kavramları uyguladınız, örneğin:

- Başka bir GameObject’in konteyneri olan boş bir GameObject oluşturma.
- GameObject’leri kopyalama.
- Alt öğe GameObject’leri Transform Component’i kullanarak yönetme.
- GameObeject’leri çoklu seviyede iç içe koyma
- Move ve Rotate araçlarını kullanarak alt öge GameObject’i döndürme.

Sonrasında, bileşenlerle daha fazlasını yaparak GameObjects üzerindeki gücünüz hakkında bir fikir edineceksiniz.





