# Tek Boyutlu Diziler

Tek boyutlu diziler basitçe, aynı türden elemanların listesini tutan bir yapıdır. Dizi oluşturmak için, önce dizide yer alacak elemanların türü belirtilir, sonra diziye bir isim verilir ve isimden sonra köşeli parantezler ( [ ve ] ) konulur.

```
int numbers[]; // Burada numbers isminde bir dizi oluşturuluyor
```

Köşeli parantezleri değişken isminden sonra koymak yerine, tür isminden sonra da yazabilirsiniz. Örneğin aşağıdaki kodun yukarıdakiyle bir farkı yoktur:

```
int[] numbers; // Burada numbers isminde bir dizi oluşturuluyor
```

Diziler new deyimiyle oluşturulur. Dizi oluştururken kapasite değeri vermek **zorunludur**. Kapasite değeri, dizinin kaç eleman barındıracağını belirtir. Aşağıdaki örnekte, 5 adet int değişkeni tutabilecek bir dizi oluşturuluyor:

```
int[] numbers = new int[5];
```

Bu ifade çalıştırıldığında, hafızada 5 adet int değişken için yetecek kadar alan ayrılır. Bu alanı düzenleyebilmek için indeks numaraları kullanırız. **Dizi indeksleri 0’dan başlar** ve kapasitenin 1 eksiğine kadar gider. Örneğin, yukarıdaki dizinin indeksleri 0’dan 4’e kadardır. Şimdi bu dizinin ilk elemanını verelim:

```
numbers[0] = 10; // Dizinin ilk elemanı 10 olarak ayarlandı.
```

Dizinin diğer elemanlarını şu şekilde verelim:

```
numbers[1] = 15;
numbers[2] = 20;
numbers[3] = 25;
numbers[4] = 30;
```

Bu kodlar çalıştırıldığında dizinin elemanları sırasıyla aşağıdaki gibi olur:

{ 10, 15, 20, 25, 30 }

Aşağıdaki kodu çalıştırdığınızda konsola 25 yazar:

```
System.out.println(numbers[3]);
```

Dizilerle uğraşırken indeks numaralarına çok dikkat etmelisiniz. Eğer dizinin aralığı dışında bir indekse erişmeye çalışırsanız, ***IndexOutOfBoundsException\*** hatası meydana gelir.

```
System.out.println(numbers[5]); // Hata!
```

Yukarıdaki satır hataya neden olur; çünkü numbers dizisinin kapasitesi 5 olmasına rağmen dizinin 6. elemanına erişmeye çalışıyoruz.

Eğer dizinin içindeki elemanlar dizi oluşturulurken belliyse, diziyi oluştururken elemanları küme parantezi içinde ve virgülle birbirinden ayırarak verebiliriz:

```
String[] weekDays = new String[] { "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar" };
```

Bu şekilde oluşturulan dizilere kapasite vermemize gerek yoktur; çünkü kapasite değeri zaten eleman sayısından bellidir. Yukarıdaki örnekde ***weekDays\*** dizisinin kapasitesi otomatik olarak 7 olur.

Yukarıdaki gibi dizi oluştururken new deyimini kullanmaya gerek yoktur. Yani, yukarıdaki kodu aşağıdaki gibi yazabiliriz:

```
String[] weekDays = { "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar" };
```

### Dizinin Kapasitesini Öğrenmek

Her dizinin **length** adında bir özelliği bulunur. Bu özelliği kullanarak dizinin kapasitesini öğrenebilirsiniz.

Örneğin, aşağıdaki kodu inceleyelim:

```
int[] numbers = new int[100];
System.out.println(numbers.length); // Konsolda 100 yazar
```

### Dizinin Bir Elemanını Değiştirme

```
String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
cars[0] = "Opel";
cars[2] = "Toyota";

System.out.println(cars[0]);
```
