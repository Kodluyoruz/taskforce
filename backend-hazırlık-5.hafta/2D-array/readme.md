# Çok Boyutlu Diziler

Java'da Çok Boyutlu Diziler varsayılan bir veri tipi olarak bulunmazlar ve matris olarak adlandırılırlar. Dizilerin 2 boyutlu halleri şeklinde tanımlanırlar. Matrisler satır ve sütun şeklinde tablo verisi formatındaki verileri tutmak için kullanılır. Diziler liste halinde veriler için uygunken, matrisler tablo şeklindeki veriler için uygundur. Oluşturulan tabloda bir değere ulaşmak istersek satır ve sütun sayısını girmemiz yeterli olacaktır.

İki boyutlu dizilerde tek boyutlu diziler gibi indis değeri 0'dan başlar. Dizide tutulacak veri tipleri aynı olmak zorundadır farklı veri tiplerini aynı matriste tutamayız.

3x3 boyutunda bir matris örneği :

![](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/java101/2D-array/figures/matris.png)

Tablo oluşturup bu tablonun bilgilerini matris ile gösterelim. Örneğin, şehirler arasındaki mesafeyi gösteren bu tabloyu uzaklık değişkenimizde sakladık.

Mesafe Tablosu(KM)

|          | İstanbul | Ankara | Adana | Bursa | Muğla | Sivas |
| -------- | -------- | ------ | ----- | ----- | ----- | ----- |
| İstanbul | 0        | 453    | 939   | 243   | 783   | 891   |
| Ankara   | 453      | 0      | 490   | 384   | 620   | 439   |
| Adana    | 939      | 490    | 0     | 839   | 863   | 423   |
| Bursa    | 243      | 384    | 839   | 0     | 544   | 823   |
| Muğla    | 783      | 620    | 863   | 544   | 0     | 1045  |
| Sivas    | 891      | 439    | 423   | 823   | 1045  | 0     |

```
int[][] uzaklik ={
                {0, 453, 939, 243, 783, 891},
                {453, 0, 490, 384, 620, 439},
                {939, 490, 0, 839, 863, 423},
                {243, 384, 839, 0, 544, 823},
                {783, 620, 863, 544, 0, 1045},
                {891, 439, 423, 823, 1045, 0}
        };
```

##### İki Boyutlu Dizi Tanımlama Yöntemleri

İki boyutlu dizileri oluşturmanın farklı yöntemleri var şimdi bunlara bakalım.

Bir değişkenin dizi olduğunu köşeli parantezler ile belirtmiştik. Bir tane köşeli parantez tek boyutlu dizi belirtir. Eğer çok boyutlu dizi oluşturmak istiyorsak, boyut sayısı kadar köşeli parantez belirtmeliyiz. Örneğin aşağıdaki satır 2 boyutlu bir dizi (yani matris) belirtir:

```
degiskenTipi[][] arrayIsmi;
int matrix[][];
```

yada

```
degiskenTipi arrayIsmi[][];  //bu yöntem tercih edilmez
```

İki boyutlu dizimizi tanımlarken değerlerini atamak istersek aşağıdaki yöntemi kullanabiliriz.

```
int[][] array = {
{1, 2, 3}, 
{4, 5, 6}, 
{7, 8, 9}, 
{10, 11, 12} 
};
```

İlk köşeli parantez birinci boyutu (satırları), diğeri ise ikinci boyutu (sütunları) belirtir. Aşağıdaki kodu çalıştırırsak, 3 satırlı ve 4 sütunlu bir matris oluşturur:

```
int matrix[][] = new int[3][4];
```

yada

```
matrix = new int[3][4];
```

oluşturulan matrix değişkeninin default değeri (a) ile gösterilen tablodaki gibidir.

```
[0][1][2][3]
[0] 0  0  0 
[1] 0  0  0 
[2] 0  0  0 

    (a)
```

Bu matrisin bütün elemanlarına ulaşmak için kullanmamız gereken indeks numaralarını aşağıdaki tabloda görebilirsiniz:

| [0] [0] | [0] [1] | [0] [2] | [0] [3] |
| ------- | ------- | ------- | ------- |
| [1] [0] | [1] [1] | [1] [2] | [1] [3] |
| [2] [0] | [2] [1] | [2] [2] | [2] [3] |

```
matrix[1][2]; // Matrisin 2. satır ve 3. sütunundaki elemana erişiliyor
matrix[0][3]; // Matrisin 1. satır ve 4. sütunundaki elemana erişiliyor
matrix[2][0]; // Matrisin 3. satır ve 1. sütunundaki elemana erişiliyor
```

Matrisin 2. satırı ve 3. sütununda yer alan değerini 7 yapalım.

```
matrix[2][1] = 7;
```

Atadığımız 7 değerine ulaşmak istersek matrix[2] [][][1] ifadesini kullanırız.

Farkettiğiniz gibi matrislerin dizilerden tek farkı [] parantez yanına bir tane [] açıyoruz. Zaten her [] ifadesi yeni bir boyut anlamına geliyor. "**double[][][] ucBoyutlu;**" şeklinde bir ifadeyle 3 boyutlu veri saklayan bir veri yapısı oluşturmuş oluyoruz.

Şimdi güzel bir örnek yapalım. 3 satırdan ve 4 sütundan oluşan bir matris yaratalım ve bu matrisin elemanlarını sırayla 1’den başlayacak şekilde dolduralım. Aşağıdaki kodu inceleyelim:

```
int[][] matrix = new int[3][4];
int number = 1;

for (int x = 0; x < matrix.length; x++)
{
	int[] row = matrix[x];

    for (int y = 0; y < row.length; y++)
	{	
		row[y] = number;
		number++;
	}
}
```

Şimdi yukarıdaki kodu inceleyelim. İki boyutlu diziyi oluşturduktan sonra önce for döngüsüyle dizinin satırlarını geziyoruz. Daha sonra içerideki for döngüsüyle dizinin sütunlarını dolaşıyoruz. Bu örneği vermemizdeki amaç, matrisin elemanlarına ulaşmak için iç içe 2 for döngüsü kullanmak gerektiğini göstermektir. Ayrıca dizinin *length* metodunun faydasını da burada görmüş oluyoruz.

Yukarıdaki kod çalıştığında matrisin elemanları şu şekilde olur:

| 1    | 2    | 3    | 4    |
| ---- | ---- | ---- | ---- |
| 5    | 6    | 7    | 8    |
| 9    | 10   | 11   | 12   |

##### İç İçe Döngülerle Dizilere Erişim ve Dizi İşlemleri

Aşağıdaki kod bize bi matris değerini ekrana nasıl yazdıracağımızı gösterir. Döngüye girdikten sonra her sütun sayısı her satır için tek tek ekrana bastırılır. Her bir satırın tamamlanmasından sonra System.out.println() ile bir alt satıra geçilir.

```
for (int row = 0; row < matrix.length; row++) {
   for (int column = 0; column < matrix[row].length; column++) {
       System.out.print(matrix[row][column] + " "); 
}
    System.out.println(); 
}
```

##### İki Boyutlu Dizilerin Uzunlukları

İki boyutlu diziler aslında her satırının tek boyutlu olduğu dizilerdir. Çok boyutlu dizilerinde boyutuna ulaşarak işlem yapabiliriz.

Örneğin x = new int[3] [][][4] arrayinin x[0], x[1], x[2] değerleri tek boyutlu dizidir. Ve her biri aşağıdaki şekilde gösterildiği gibi 4 elemanı vardır. x.length değeri 3'tür, yani bize sahip olduğu 3 satırın değerini verir. Sütun sayısına ise her hangi bir satır değerinin uzunluğu kadardır. x[2].length değeri 4'tür.

[![img](https://github.com/Kodluyoruz/taskforce/raw/main/java/java-101/matris-islemleri/figures/matrices_5.PNG)](https://github.com/Kodluyoruz/taskforce/blob/main/java/java-101/matris-islemleri/figures/matrices_5.PNG)

Yukarıda öğrendiğimiz konuları pekiştirmek adına aşağıdaki kodu inceleyelim.

```
public double[][] multiplyMatrices(double[][] firstMatrix, double[][] secondMatrix) {

	// firstMatrix.length ile ilk matrisin satır sayısını buluyoruz. örneğimizde 3 olarak gelecektir.
	// secondMatrix[0].length ile ikinci matrisin sütun sayısını buluyoruz. örneğimizde 4 olarak gelecektir.

	// C matrisi olacak olan matrisi tanımlıyoruz.
    double[][] result = new double[firstMatrix.length][secondMatrix[0].length];
 
 	// matrislerde çarpma, toplama gibi işlemleri yapabilmek için iç içe 3 tane döngüye ihtiyaç duyarız.
    for (int row = 0; row < result.length; row++) {
        for (int col = 0; col < result[row].length; col++) {
            result[row][col] = multiplyMatricesCell(firstMatrix, secondMatrix, row, col);
        }
    }
 
    return result;
}


double multiplyMatricesCell(double[][] firstMatrix, double[][] secondMatrix, int row, int col) {
	// A matrisinin satırı ile B matrisinin sütunu çarpma işlemi.
	/*
	*   row = 3, col = 4  olarak gelecektir.
	*   i = 0 ise
	*   firstMatrix[3][0] * secondMatrix[0][4] 
	*   i = 1 ise
	*   firstMatrix[3][1] * secondMatrix[1][4] 
	*   i = 2 ise
	*   firstMatrix[3][2] * secondMatrix[2][4] 
	* şeklinde i değişerek satır ve sütun çarpılır.
	*/
    double cell = 0;
    for (int i = 0; i < secondMatrix.length; i++) {
        cell += firstMatrix[row][i] * secondMatrix[i][col];
    }
    return cell;
}
```

Yukarıdaki “multiplyMatrices” fonksiyonu iki tane matrisi girdi olarak alır. Fonksiyon matrislerin çarpım sonucunu matris olarak döndürür.

“multiplyMatrices” fonksiyonu içinde bir başka fonksiyon daha çağrılmıştır. “multiplyMatricesCell” bu fonksiyon ise iki matrisin satır ve sütununu çarpıp sonucu double tipte bir değer döndürür.

## Sütun Kapasiteleri Farklı Matris Oluşturmak - Düzensiz Diziler

Farklı sütun değerine sahip dizilere "**Ragged Arrays**" yani düzensiz diziler denir. Başka bir açıdan bakıldığında ise, 2 boyutlu dizileri, **dizilerin dizisi** (**array of arrays**) olarak düşünmek doğru olur. Yani iki boyutlu dizileri tek boyutlu diziler oluşturur.

Diziler aynı türden elemanlardan oluşmak zorundadır. int türünde bir dizi olabileceği gibi, dizinin dizisi de olabilir.

Yukarıdaki örneklerde matrisin sütun sayısını 4 olarak belirledik. Bu şekilde oluşturulursa matrisin bütün satırları 4 elemanlı olur. Fakat bu zorunlu değildir. Matris oluştururken sütun sayısı belirlemezsek, her bir satırdaki dizilerin kapasitesi farklı olabilir. Örneğin aşağıdaki kodu inceleyelim:

```
int[][] matrix = new int[3][];
matrix[0] = new int[1];
matrix[1] = new int[2];
matrix[2] = new int[3];
```

Burada önce 3 satırdan oluşan bir matris belirttik, fakat sabit bir sütun sayısı vermedik. Sonra her bir satır için ayrı ayrı sütun sayısı belirledik. 

Çok boyutlu dizi oluştururken, yalnızca ilk boyutun (en soldaki) kapasitesini belirlemeniz yeterlidir. Diğer boyutların kapasitesini dinamik olarak belirleyebilirsiniz.

#### Sıra Sizde!

Aşağıda verilen örneklerin cevaplarına bakmadan önce kendiniz kodlamaya çalışmanızı öneririz. Daha sonra zorlandığınız noktalarda ufak yardımlar almak için bakabilirsiniz. Bu sizin öğrenmenize daha yardımcı olacaktır.

Matris boyutunu sizin belirlediğiniz matris değerlerini ise kullanıcının girdiği bir algoritma yazınız.

Cevap:

```
int matrix[][] = new int[3][4];
        Scanner input = new Scanner(System.in);
        System.out.println("Enter " + matrix.length + " rows and "
                + matrix[0].length + " columns: ");
        for (int row = 0; row < matrix.length; row++) {
            for (int column = 0; column < matrix[row].length; column++) {
                matrix[row][column] = input.nextInt();
            }
        }
```

İstediğiniz boyutta matris oluşturarak matris değerlerine 0-99 arası random sayılar üreterek matrise atama yapınız.

Cevap:

```
int[][] matrix = new int[3][4];
        for (int row = 0; row < matrix.length; row++) {
            for (int column = 0; column < matrix[row].length; column++) {
                matrix[row][column] = (int) (Math.random() * 100);
            }
        }
```

Aşağıdaki kod bloğunun çıktısı nedir?

```java
  int[][] array = {{1, 2}, {3, 4}, {5, 6}};
        for (int i = array.length - 1; i >= 0; i--) {
            for (int j = array[i].length - 1; j >= 0; j--) {
                System.out.print(array[i][j] + " ");
            }
            System.out.println();
        }
```

Cevap:

```
6 5 
4 3 
2 1 
```
