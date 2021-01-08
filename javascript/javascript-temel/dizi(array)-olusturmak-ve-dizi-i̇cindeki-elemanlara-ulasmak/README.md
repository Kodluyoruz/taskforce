# Dizi(Array) Oluşturmak ve Dizi İçindeki Elemanlara Ulaşmak
## ARRAY NEDİR 
1-Programlamanin temel amaclarindan birisi verileri saklamak ve manipule edebilmektir. Arrays (diziler) bu ise yaramaktadir. 

2-Arraylerde bir degisken (variable) tanimlayarak birden fazla degeri (value) saklayabilir ve onlari daha sonra cesitli methotlarla kullanabiliriz.

3-Array olusturmak icin koseli parantez kullaniriz. 

4-Olusturulan arrayde her bir degere 'element' (eleman) denir. 

`let favoriArabalar = ['audi', 'volvo', 'mercedes']`

5-Bir arrayin icine yazabilecegimiz elemanlarin veri tipi (data type) onemli degildir. Ornegin ayni arrayde bir string ile number deger olarak atanabilir.

`let randomDizi = [2021, 'javaScript', true]`

## ARRAY İÇİNDEKİ ELEMANLARA ULAŞMAK
6-Array icindeki bir elemana ulasilmak istendiginde yazilis sirasina gore cagirilmaktadir. 

7-Elemanlarin yazilis siralarini numaralandirmaya 0 dan baslariz.Bu demek oluyor ki bir arraye yazdigimiz ilk elemanin (yani birinci sirada yazdigimiz eleman) numarasi 0'dir. 

8-Elemana ulasmak icin once dizinin degisken adi yazilir daha sonra koseli parantez acilarak elemanin numarasi girilir.

`let marmaraBolgesi = ['istanbul','kocaeli','sakarya','bursa','canakkale']` 

```marmaraBolgesi[0] = istanbul`
marmaraBolgesi[1] = kocaeli 
marmaraBolgesi[2] = sakarya
marmaraBolgesi[3] = bursa
marmaraBolgesi[4] = canakkale```

9- Yukarida yaptigimiz ornekte goruldugu gibi dizinin icinde 5 tane eleman varken cagirdigimiz son elemanimizin numarasi 4. 

10- Bu demek oluyor ki ((dizideki toplam eleman sayisi) - 1) bize dizinin son elemanini verir. 

11- O halde icinde kac tane eleman oldugunu bilmedigimiz bir dizinin son elemanina ulasmak icin su yontemi kullanabiliriz.

`let aylar = ['mart','nisan','mayis','haziran','temmuz']` 
`let sonEleman = aylar[aylar.length - 1]`  // length propertysi bize arrayin icindeki eleman sayisini verir. Ondan bir cikarttigimizda ise son elemanin numarasini elde etmis oluruz.
`console.log(sonEleman) = 'temmuz'`

## TYPE OF ARRAY
12-Bir arrayin veri tipi object dir. 
`typeof aylar = object`

## ARRAYIN LET VEYA CONST İLE DEKLARE EDİLMESİ ARASINDAKİ FARKLAR
13-Arraylari tanimladigimiz degiskenin let veya const ile deklare edilmesi arasinda fark bulunmaktadir. 

14-Let ile deklare ettigimiz bir array daha sonra yeniden tanimlanabilir. 
 
`let gunler = ['pazartesi','sali','carsamba']` 
`gunler     = ['cuma','cumartesi','pazar']` 
`console.log(gunler);// ['cuma' , 'cumartesi' , 'pazar'] ciktisini alacagiz. Cunku let kullanarak olusturdugumuz bir array yeniden tanimlanabilir.`

15-Yukarida yaptigimiz ornegin aynisini const ile yapmayi deneyelim 
```const gunler = ['pazartesi','sali','carsamba']`
`gunler = ['cuma','cumartesi','pazar']` // 'TypeError: Assignment to constant variable' hatasini aliriz. Const ile deklare ettigimiz bir arrayi yeniden tayin edemeyecegimizi belirtmektedir.```

16-const ile deklare ettigimiz bir array yeniden tayin edilemese de icerisindeki elemanlara erisme ve degistirme noktasinda let ile aynidir. 

