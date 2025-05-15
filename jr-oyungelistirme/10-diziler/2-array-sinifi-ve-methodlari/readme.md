# Array Sınıfı ve Methodlari
Diziler System.Array sinifindan türerler. Array sinifi da dizilerle yapılan işlemleri kolaylaştırmak için bir takım static hazır metodlar sunar. Bu metodlardan en sık kullanılan birkaçına yakından bakalım. 

### Array.Sort
Diziler üzerinden sıralama işlemi yapar. Eğer string bir dizi ise alfabetik olarak olarak A'dan Z'ye sıralar. Eğer numeric bir dizi ise dizi elemanlarını küçükten büyüğe sıralar.

Örnek:

    Array.Sort(sayiDizisi);

### Array.Clear

Dizinin belirtilen elemanlarını varsayılan değerine getirir. Yani örneğin numeric bir dizi ise 0 olarak setler. 

Örnek: Aşağıdaki örnek sayi dizisinin 2.indexinden başlayarak 2 tane elemanı temizler.  

    Array.Clear(sayiDizisi,2,2);

### Array.Reverse

Dizinin ortasını belirleyerek elemanlarını aynalar  gibi düşünebilirsiniz. Yani dizinin ilk elemanı ile son elemanını yer değiştirir.

Örnek: 
        Array.Reverse(sayiDizisi);

sayiDizisi elemanlarını {1,3,4,9,8,7} olarak düşünürsek; **Reverse** metodu uygulandığında dizi şöyle olur : {7,8,9,4,3,1}

### Array.IndexOf

Verilen dizinin verilen elemanının indexini getirir. Eğer dizi içerisinde elemanı bulamazsa -1 döner. 

Örnek: 

    Array.IndexOf(sayiDizisi,7)


### Array.Resize 
Dizileri yeniden boyutlandırmak için kullanılır. 

    int[] sayiDizisi = {1,3,4,9,8,7};
    Array.Resize<int>(ref sayiDizisi,12);
    sayiDizisi[6] = 10;

Yukarıdaki örnekte başlangıçta 6 elemanlı olan sayiDizisi Resize metodu ile 12 elemanlı hale getirildi. Daha sonra 7. elemanına 10 değeri atandı. Diğer boş olan indexlerin değeri ise varsayılan olarak 0 atanır. 

    int[] sayiDizisi = {1,3,4,9,8,7};
    Array.Resize<int>(ref sayiDizisi,3);

Yukarıdaki örnekte başlangıçta 6 elemanlı olan sayiDizisi Resize metodu ile 3 elemanlı hale getirildi. sondaki 3 eleman kırpıldı. Artık dizi şu şekilde: {1,3,4}