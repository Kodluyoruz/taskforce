# Bootstrap - Satır Blokları (Row) Kullanımı
Grid sistem, satırlardan(rows) ve sütunlardan (column) oluşur. Bir satır(row) 12 column'dan oluşur. Bu satırları istediğimiz şekilde parçalayabiliriz. Aşağıdaki resimde de görüldüğü gibi istersek bunları 12 eşit parçaya ayırabilir ya da 12'ye tamamlanacak herhangi bir şekilde de bölebiliriz. Örneklerle bunları açıklamaya çalışayım.
 
 
 
 RESİM GELECEK
 
 
- Satırlar `.row` sınıfı ile oluşturulur ve sayfada alt alta görünürler ve sütunlar dışında içerik barındırmamalı.
- Satırların içerisine doğruca sütunlar gelir ve responsive kullanımına bağlı olarak oluşturulan sütunlar yan yana veya alt alta yerleşebilir. Sütun oluşturmak için `.col`, `col- {boyut}` ya da `col-{kırılım}-{boyut}` sınıflarını kullanırız. 
 
 - Aşağıdaki örnekleri incelediğimiz de her bir satırı sırasıyla 2,3,4 eşit parçalara bölmüş olduk. Peki bunu nasıl yaptık?  `row`  sınıfının altına satırı bölmek istediğimiz kadar `col` sınıfı ekleriz. Bu şekilde bir satırı istediğimiz boyuttaki columnlar halinde oluşturabiliriz. İfade ettiğim cümleyi örneklerle daha iyi pekiştireceğimizi düşünüyorum.

``````
<div class="row">
  <div class="col">Column</div>
  <div class="col">Column</div>
</div>
``````
 örnek resim görüntüsü
 

````
<div class="row">
  <div class="col">Column</div>
  <div class="col">Column</div>
  <div class="col">Column</div>
</div>
```` 
örnek resim
````
<div class="row">
  <div class="col">Column</div>
  <div class="col">Column</div>
  <div class="col">Column</div>
  <div class="col">Column</div>
</div>
```` 

örnek resim görüntüsü

Yukarıdaki örneklerde de görüldüğü üzere satırları eşit parçalar halinde columnlara ayırdık. Peki eşit olmayan columnlar yapabilir miyiz? Tabiki yapabiliriz. Şimdi de örneklerle eşit olmayan columnlar oluşturalım...

- Bu örnekte 2'ye 10'luk bir column oluşturduk.

````
<div class="row">
  <div class="col-2">2 Column</div>
  <div class="col-10">10 Column</div> 
</div>
````
resim 

- Alttaki örnekte ise satırı 8'e 4'lük bir column halinde bölmüş olduk.
````
<div class="row">
  <div class="col-4">4 Column</div>
  <div class="col-8">8 Column</div> 
</div>
````

- Satırları böldüğümüzde araya yada herhangi kenara boşlukta ekleyebiliriz onu da şu şekilde gösterelim;

````````
<div class="row">
  <div class="col-4 mr-auto">4 Column</div> <--mr: margin right (sağından boşluk bırak)-->
  <div class="col-5">5 Column</div> 
</div>

<div class="row">
  <div class="col-4"></div>
  <div class="col-5 ml- auto"></div> <--ml: margin left (solundan boşluk bırak)-->
</div>

````````
İki kod bloğunun çıktısı aynı olacak fakat birinci `col` sağından sola doğru itecek ve boşluk bırakacak diğerinde ise tam tersi ikinci `col` solundan sağa doğru iterek boşluk bırakacak.


- Bir satırı 4'e 8'lik columnlar halinde böldüğümüzü düşünelim bu satırlar daha sonra kendi içlerinde de tekrar 12'lik column gibi düşünülerek bölünebilir. Bunlara iç içe satırlar diyebiliriz. Aşağıdaki örnekte önce satırı 4'e 8'lik olacak şekilde parçaladık daha sonra 8'lik columnı kendi içinde eşit 2 parçaya böldük.

``````
    <div class="row">
			<div class="col-4 border">4 Column</div>
			<div class="col-8 border">8 Column
				
				<div class="row">
					<div class="col bg-primary">6 Column</div> <!--bg: background, primary:color-->
					<div class="col bg-danger">6 Column</div>  <!--bg: background, primary:color-->
				</div>
			
			
			</div>
		</div>
  ``````



 
 
 
 

