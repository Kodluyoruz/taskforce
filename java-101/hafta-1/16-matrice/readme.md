## Java&#39;da Matris İşlemleri (Matrice)

Java&#39;da matrisler varsayılan bir veri tipi olarak bulunmazlar. Dizilerin 2 boyutlu halleri şeklinde tanımlanırlar. Matris satır ve sütun şeklinde tablo verisi formatındaki verileri tutmak için kullanılır. Diziler liste halinde veriler için uygunken, matrisler tablo şeklindeki veriler için uygundur.

Örnek:

3x2 &#39;lik bir matris olduğunu düşünelim.

![](C:/GitHub/taskforce/java-101/hafta-1/RackMultipart20201119-4-xnzld6_html_9f2eac208ade025f.png)

2x4 &#39;lük başka bir ise aşağıdaki gibi olacaktır.

![](C:/GitHub/taskforce/java-101/hafta-1/RackMultipart20201119-4-xnzld6_html_f0bc4b115ab58a77.png)

Bu iki matrisin çarpımıyla ise C isminde 3x4 &#39;lük bir matris oluşacaktır. Buradaki çarpma yöntemi A&#39;nın satırını komple al, B&#39;nin sütunu komple al ve birbiriyle çarp sonucu C matrise yaz. Kabaca yöntem bu şekilde, bu yöntemin matematiksel izahı ise aşağıdaki gibidir.

![](C:/GitHub/taskforce/java-101/hafta-1/RackMultipart20201119-4-xnzld6_html_43690b6b93c9d78f.png)

C matrisi sonuç matrisidir.

Formül:

![](C:/GitHub/taskforce/java-101/hafta-1/RackMultipart20201119-4-xnzld6_html_7e8ff35fdbc62679.png)

Yukarıdaki A ve B matrisinin Java&#39;da tanımlanması aşağıdaki gibidir.

double[][] A ={

**new** double[]{1d,5d},

**new** double[]{2d,3d},

**new** double[]{1d,7d}

};

double[][] B ={

**new** double[]{1d,2d,3d,7d},

**new** double[]{5d,2d,8d,1d}

};

Dizilerden tek farkı [] parantez yanına bir tane [] açıyoruz. Zaten her [] ifadesi yeni bir boyut anlamına geliyor. &quot;**double[][][] ucBoyutlu;**&quot; şeklinde bir ifadeyle 3 boyutlu veri saklayan bir veri yapısı oluşturmuş oluyoruz.

**public** double[][]multiplyMatrices(double[][] firstMatrix,double[][] secondMatrix){

_// firstMatrix.length ile ilk matrisin satır sayısını buluyoruz. örneğimizde 3 olarak gelecektir._

_// secondMatrix[0].length ile ikinci matrisin sütun sayısını buluyoruz. örneğimizde 4 olarak gelecektir._

_// C matrisi olacak olan matrisi tanımlıyoruz._

double[][] result = **new** double[firstMatrix.length][secondMatrix[0].length];

_// matrislerde çarpma, toplama gibi işlemleri yapabilmek için iç içe 3 tane döngüye ihtiyaç duyarız._

**for** (int row =0; row \&lt; result.length; row++){

**for** (int col =0; col \&lt; result[row].length; col++){

result[row][col]= multiplyMatricesCell(firstMatrix, secondMatrix, row, col);

}

}

**return** result;

}

doublemultiplyMatricesCell(double[][] firstMatrix,double[][] secondMatrix,int row,int col){

_// A matrisinin satırı ile B matrisinin sütunu çarpma işlemi._

_/\*_

_\* row = 3, col = 4 olarak gelecektir._

_\* i = 0 ise_

_\* firstMatrix[3][0] \* secondMatrix[0][4]_

_\* i = 1 ise_

_\* firstMatrix[3][1] \* secondMatrix[1][4]_

_\* i = 2 ise_

_\* firstMatrix[3][2] \* secondMatrix[2][4]_

_\* şeklinde i değişerek satır ve sütun çarpılır._

_\*/_

double cell =0;

**for** (int i =0; i \&lt; secondMatrix.length; i++){

cell += firstMatrix[row][i]\* secondMatrix[i][col];

}

**return** cell;

}

Yukarıdaki &quot;multiplyMatrices&quot; fonksiyonu iki tane matrisi girdi olarak alır. Fonksiyon matrislerin çarpım sonucunu matris olarak döndürür.

&quot;multiplyMatrices&quot; fonksiyonu içinde bir başka fonksiyon daha çağrılmıştır. &quot;multiplyMatricesCell&quot; bu fonksiyon ise iki matrisin satır ve sütununu çarpıp sonucu double tipte bir değer döndürür.