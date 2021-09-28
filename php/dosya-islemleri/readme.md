### Dosya İşlemleri

##### Dosya Oluşturma ve Silme

PHP dosya oluşturma işlemi için touch fonksiyonu, dosya silmek için unlink fonksiyonu kullanılır.

```
$zaman = time() - 3600;
$sonuc = touch('dosyalar/metin.txt',$zaman);

if ($sonuc){
	echo 'Başarılı';
}else{
	echo 'Başarısız';
}
```
```
$sonuc = unlink('dosyalar/metin.txt');
if ($sonuc){
	echo 'Dosya başarıyla silindi';
}else{
	echo 'Dosya silinemedi';
}
```


##### Dosya Açma

``fopen`` bir dosyayı açmamıza olanak tanır, ilk parametre açılacak dosya ikinci paramerte ise ne amaçla açtığımızı bildiren kipi içerir.

````fopen($dosya, $kip);````

**Dosya Erişim Modları - Dosya Kipleri**
- r : Read işlemi. Dosyanın sadece içeriğinin okunması gerektiğini belirtir.
- r+ : Dosyanın içeriğinin he okunabilmesi hem de yazılabilmesinin gerektiğini belirtir.
- w : Dosyaya sadece yazma işleminin yapılabilmesinin gerektiğini belirtir. Dosyanın içeriği tamamen silinir ve baştan itibaren yazmaya başlanır. Dosya belirtilen adreste yok ise yeniden oluşturulur.
- w+ : Dosyaya hem yazma işleminin yapılabilmesi hem de dosya içeriğinin okunabilmesinin gerektiğini belirtir. Dosyanın içeriği silinir ve baştan veri yazma işlemi gerçekleştirilir. Dosya belirtilen adreste yok ise yeniden oluşturulur.
- a : Dosya içerisine sadece veri eklenebilmesi gerektiğini belirtir. Dosyanın içeriği silinmez, içeriğin sonuna veri eklenir. Dosya belirtilen adreste bulunmuyorsa yeniden oluşturulur.
- a+ : Dosyaya hem veri eklenebilmesini hem de verinin okunabilmesinin gerektiğini belirtir. Dosyanın içeriği silinmez, içeriğin sonuna veri eklenir. Dosya belirtilen adreste yok ise yeniden oluşturulur.
- x : Dosyanın oluşturulması sağlanır ve oluşturulan dosyanın içerisine veri yazmak için açılması gerektiğini belirtir. Aynı isimde bir dosya belirtilen adreste var ise fopen fonksiyonundan ‘false’ değeri döner.
- x+ : Dosyanın oluşturulması sağlanır ve içerisine hem veri yazma hem de verileri okunması gerektiğini belirtir. Dosya belirtilen adreste aynı isimde zaten var ise fopen fonksiyonundan ‘false’ değeri döner ve hata oluşur.

```
$file = fopen('dosyalar/test.txt','w+');
```

````test.txt````  dosyasını okunmak ve içerisine veri yazmak için fopen fonksiyonu ile açıyoruz ve dosyayı belirten değer ````$file```` değişkenine aktarılıyor.

##### Dosya Kapatma

Dosyanın kapanması için ````fclose```` fonksiyonu kullanılır.

````
fclose($file)
````

##### Dosya Okuma

````fgets()```` fonksiyonu ile dosyayı satır satır okuyabiliriz.

```
$file = fopen('dosyalar/test.txt','r');
echo fgets($file); 
fclose($file);
```
```
$file = fopen('dosyalar/test.txt','r');
while($satir = fgets($file)){
echo $satir.'<br>';
}
fclose($file);
```

````fread() fonksiyonu```` ile dosya okuma işlemi ikinci parametresine girilen ‘byte’ cinsinden sayısal değere göre ele alınır. 

```
$file = fopen('dosyalar/test.txt','r');
$size = filesize('dosyalar/test.txt');
$oku = fread($file, $size);
fclose($file);
echo $oku;
```
##### Dosya Yazma

````fwrite```` ve ````fputs```` fonksiyonları ile dosyaya yazma işlemi gerçekleştirilir. 


İlk parametre fopen fonksiyonu ile açılan dosyayı belirten değişken değeri, ikinci parametre dosyaya eklenecek veridir.

Fonksiyon başarılı bir şekilde çalışır ise dosyaya eklenen verinin bayt uzunluğunu döndürür, aksi halde ‘false’ değeri döner.

```
$file = fopen('dosyalar/test.txt','a');
$result = fwrite($file, 'Yeni Satır!!!');
fclose($file);

echo $result;
```

````feof()```` Dosyadaki verileri okuma sırasında konumları elde edilerek dosya sonuna gelindi mi kontrolünü yapar.

```
$file = fopen('dosyalar/test.txt','r');
while(!feof($file)){
	echo fgets($file);
}
```
##### Dosya Yazma 2. Yöntem

file_put_contents()

İlk parametre verinin ekleneceği dosya, ikinci parametre eklenecek veri, üçüncü parametre ise veri ekleme işleminin türünü belirten değer. Üçüncü parametrenin kullanılması zorunlu değildir. Üçüncü parametreye FILE_APPEND değeri tanımlanır ise dosyaya veri eklenirken dosyadaki verinin tamamen yeni veri ile değişmesini istemeyip, varolan verinin sonrasına eklenmesini istemiş oluyoruz.

```
$sonuc = file_put_contents('dosyalar/metin.txt', 'icerik',FILE_APPEND);
echo $sonuc; //çıktı: 6
```

##### Varlık Kontrolü
``file_exists()`` Dosya ve dizin fonksiyonlarından birisi olan file_exists fonksiyonu ile PHP’de dosya veya dizin varlığını kontrol eder.

```
$sonuc = file_exists('dosyalar/test.txt');
echo $sonuc; //sonuç: 1 yada false

if ($sonuc){
	echo 'Var';
}else{
	echo 'Yok';
}
```

``is_file()`` fonksiyonu, içerisine girilen adresin dosya olup olmadığını kontrol etmek için kullanılır.

```
$dosya = is_file('test.php');
echo $dosya.'</br>'; //sonuç: 1 yada false

if ($dosya){
    echo 'Dosya Var';
}else{
    echo 'Dosya Yok';
}
```


