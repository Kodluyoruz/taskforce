# Dizi(Array) Oluşturmak ve Dizi İçindeki Elemanlara Ulaşmak

1-Programlamanin temel amaclarindan birisi verileri saklamak ve manipule edebilmektir. Arrays (diziler) bu ise yaramaktadir. 

2-Arraylerde bir degisken (variable) tanimlayarak birden fazla degeri (value) saklayabilir ve onlari daha sonra cesitli methotlarla kullanabiliriz.

3-Array olusturmak icin koseli parantez kullaniriz. 

4-Olusturulan arrayde her bir degere 'element' (eleman) denir. 

ORNEK1:
let favoriArabalar = ['audi', 'volvo', 'mercedes']
!!Degisken ismi favoriArabalar olan bir dizi olusturduk ve icine uc tane eleman atadik. Elemanlari birbirinden virgul vasitasiyla ayirdik.

5-Bir arrayin icine yazabilecegimiz elemanlarin veri tipi (data type) onemli degildir. Ornegin Ayni arrayde bir string ile number deger olarak atanabilir.

ORNEK2: 
let randomDizi = [2021, 'javaScript', true]
!!!randomDizi adinda bir dizi olusturduk ve farkli veri tiplerinde eleman atadik.

6-Array icindeki bir elemana ulasilmak istendiginde yazilis sirasina gore cagirilmaktadir. 

7-Elemanlarin yazilis siralarini numaralandirmaya 0 dan baslariz.Bu demek oluyor ki bir arraye yazdigimiz ilk elemanin (yani birinci sirada yazdigimiz eleman) numarasi 0'dir. 

8-Elemana ulasmak icin once dizinin degisken adi yazilir daha sonra koseli parantez acilarak elemanin numarasi girilir.

ORNEK3: 
let marmaraBolgesi = ['istanbul','kocaeli','sakarya','bursa','canakkale']
!!!marmaraBolgesi adinda bir dizi olusturduk ve icine marmara bolgesinden bazi sehirleri yazdik. Simdi her bir elemena ulasmaya calisalim. 

marmaraBolgesi[0] = istanbul // bir dizide ilk siraya yazdigimiz elemanin numarasi 0 dir. 
!!!Dikkat ettiginiz uzere olusturdugumuz arrayin adini(marmaraBolgesi) yazdik ve koseli parantezin icine cagirmak istedigimiz elemanin numarasini girdik.

marmaraBolgesi[1] = kocaeli // bir dizide ikinci sirada yazdigimiz elemanin numarasi 1 dir. 
marmaraBolgesi[2] = sakarya 
marmaraBolgesi[3] = bursa 
marmaraBolgesi[4] = canakkale

9- Yukarida yaptigimiz ornekte goruldugu gibi dizinin icinde 5 tane eleman varken cagirdigimiz son elemanimizin numarasi 4. 

10- Bu demek oluyor ki ((dizideki toplam eleman sayisi) - 1) bize dizinin son elemanini verir. 

11- O halde icinde kac tane eleman oldugunu bilmedigimiz bir dizinin son elemanina ulasmak icin su yontemi kullanabiliriz.

Ornek4:
let aylar = ['mart','nisan','mayis','haziran','temmuz'] // farz edelim ki son elemanin numarasini bilmiyoruz
let sonEleman = aylar[aylar.length - 1]  // length propertysi bize arrayin icindeki eleman sayisini verir. Ondan bir cikarttigimizda ise son elemanin numarasini elde etmis oluruz.
console.log(sonEleman) = 'temmuz'


12-Bir arrayin veri tipi object dir. 

ORNEK5:
typeof aylar = object

13-Arraylari tanimladigimiz degiskenin let veya const ile deklare edilmesi arasinda fark bulunmaktadir. 

14-Let ile deklare ettigimiz bir array daha sonra yeniden tanimlanabilir. 

ORNEK6: 
let gunler = ['pazartesi','sali','carsamba'] // let ile deklare ettigimiz gunler adinda bir array olusturduk.
gunler     = ['cuma','cumartesi','pazar'] //  Olusturdugumuz gunler arrayini, elemanlari degistirerek yeniden tayin ettik.
console.log(gunler);// ['cuma' , 'cumartesi' , 'pazar'] ciktisini alacagiz. Cunku let kullanarak olusturdugumuz bir array yeniden tanimlanabilir.

15-Yukarida yaptigimiz ornegin aynisini const ile yapmayi deneyelim 
const gunler = ['pazartesi','sali','carsamba']
gunler     = ['cuma','cumartesi','pazar'] // 'TypeError: Assignment to constant variable' hatasini aliriz. Const ile deklare ettigimiz bir arrayi yeniden tayin edemeyecegimizi belirtiyor.

16-const ile deklare ettigimiz bir array yeniden tayin edilemese de icerisindeki elemanlara erisme ve degistirme noktasinda let ile aynidir. 

