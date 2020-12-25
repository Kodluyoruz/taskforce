# For Döngüsü

Bu döngünün basit örneklerini daha önce görmüştük. Şimdi ayrıntılı inceleyelim.

2 farklı for döngüsü vardır. İlk for döngüsü, Java’nın ilk versiyonundan beri var olan geleneksel tarzdaki for döngüsüdür. Diğeri ise JDK 5 ile eklenen for-each döngüsüdür.

Geleneksel for döngüsünün yapısı şu şekildedir:

```java
for ( [döngü başlangıcı] ; [döngü koşulu] ; [döngü adımı] )
{
	[döngüye girecek kodlar]
}
```

for döngüsü şu şekilde işler: İlk olarak döngüde sayaç işlevi görecek bir değişken oluşturulur. Bu değişkenin ilk değeri _[döngü başlangıcı]_ ile belirtilen kısımda verilir. Bu değişken _[döngü adımı]_ kısmında isteğe göre artırılır veya azaltılır. Döngünün hangi koşulda çalışacağı ise [döngü koşulu] kısmında boolean bir ifadeyle belirtilir. Aşağıdaki örneği inceleyelim:

```java
for (int i = 1; i < 10; i++)
{
	System.out.println(i);
}
```

Bu örnekte int türünde **_i_** isminde bir döngü sayacı oluşturulur. Bu sayaç, döngünün her adımında **_i++_** ifadesiyle 1 artırılır. Bu döngü **_i_** sayacının değeri 10’dan küçük olduğu sürece çalışır. Bu döngü çalıştırıldığı zaman çıktısı aşağıdaki gibi olur:

```java
1
2
3
4
5
6
7
8
9
```

for döngüsünün içindeki 3 kısmın çalıştırılma sırası şu şekildedir:

- İlk olarak **_[döngü başlangıcı]_** kısmı çalışır. Bu kısım sadece bir kez çalıştırılır, döngü boyunca bir daha çalıştırılmaz.
- Daha sonra **_[döngü koşulu]_** kısmı çalıştırılır. Eğer sonuç **true** ise döngüye girer. Bu kısım her döngünün başında tekrar kontrol edilir. Eğer sonuç **false** ise döngü sonlandırılır.
- Her döngünün sonunda **_[döngü adımı]_** kısmı çalıştırılır. Döngüde en son çalışan kısım burasıdır.

Şunu da belirtmek gerekir ki, **_[döngü başlangıcı]_** kısmında oluşturulan değişkenin kapsamı for döngüsüyle sınırlıdır. Bu değişkene for döngüsü dışında ulaşılamaz.

## For Döngüsü Varyasyonları

Geleneksel for döngüsünün farklı varyasyonları olabilir. Döngünün içinde 3 farklı kısım olduğundan bahsetmiştik. Bu kısımların hiçbiri zorunlu değildir. Aşağıdaki örnekleri inceleyelim:

```java
int i = 1;
for ( ; i < 10; i++)
{
	System.out.println(i);
}
```

Bu örnekte döngü sayacı, for döngüsünden önce oluşturulmuştur. Ayrıca **_[döngü başlangıcı]_** kısmının boş bırakıldığına dikkatinizi çekerim. Bu durumda döngü sayacı olarak döngünün dışında oluşturulan bir değişken kullanılır, ilk değeri de yine döngüden önce verilmiştir. Şunu da belirtelim ki, for döngüsünü bu örnekte olduğu gibi kullanırsanız, döngü sayacına for döngüsünden sonra da erişebilirsiniz.

```java
int i = 1;
for ( ; i < 10; )
{
	System.out.println(i);
	i++;
}
```

Bu örnekte ise hem **_[döngü başlangıcı]_** kısmının hem de **_[döngü adımı]_** kısmının boş bırakıldığını görüyoruz. Döngü sayacını parantez içinde artırmak yerine, döngü kodlarının içinde artırıyoruz.

```java
for ( ; ; )
{
	// sonsuz döngü
}
```

Bu örnekte ise bütün kısımların boş bırakıldığını görüyoruz. Bu tarz for döngüleri sonsuz döngü oluşturur. Sonsuz döngü, hiçbir koşulda sona ermeyen döngü demektir. Bu döngüde hiçbir koşul test edilmediği için döngü her zaman çalışır. Yani, eğer bu kodu çalıştırırsanız, bilgisayarınız sonsuza kadar bu döngüyü işletecektir.