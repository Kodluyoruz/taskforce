# Optional Yapısı

Swift programlama dilinde bir özellik tanımlandığında ilk değer atamasının yapılması gerekir. Fakat bazı durumlarda ilk değer atamasını yapmak istemeyiz. Bu gibi durumlarda özelliğin tipinin sonuna <b> ? </b> koyarak, bu özelliğin opsiyonel olduğunu yani ilk değer ataması gerektirmediği gibi içinin boş olabileceğini de derleyiciye söylemiş oluruz. Örneğin servis çağrısı sonucunda dönecek verinin bir kısımı bazı durumlarda boş geliyorsa, bu kısımlar opsiyonel olarak tanımlanır ve boş gelmesi durumunda oluşacak çökmelerin sonuna geçilmiş olur. Aşağıda opsiyonel özellik tanımlarına örnek görebilirsiniz.

```
var someOptionalProperty: Int? // Bu özelliğe ilk değer atması yapmanıza gerek yoktur.
```

Eğer opsiyonel bir değişken tanımlar ve bu değişkene bir değer ataması yapmadan yazdırmaya çalışırsanız, çıktı olarak <b>nil</b> yazısını göreceksiniz. Nil, özelliğin boş olduğunu belirten bir anahtar kelimedir. Opsiyonel tanımlanan özellikler eğer değer taması yapılmadıysa varsayılan olarak nil atanır.

Peki bu aşamada şunu sorabilirsiniz, neden bütün özellikleri opsiyonel tanımlamıyoruz? Opsiyonel özelliklerin kullanılması maalesef normal özellik kullanımı kadar kolay değil. Öncelikle opsiyonel tanımı kullanmak için çoğu durumda <b>açma(unwrap)</b> işlemi denen bir yöntem ile normal özelliğe çevirmeniz bekleniyor. Bu işlemi yapmanın çeşitli yolları var. Şimdi bu yöntemleri ele alalım.

### Zorla Açma(Forced Unwrapping)

Zorla açma en basit ve tehlikeli olan açma işlemidir. Açmak istediğiniz özelliğin adının sonuna <b>!</b> işareti eklemeniz yeterlidir. Tehlikeli olmasının sebebi, açtığınız özelliğin içi boşsa yani nilse, uygulama çöker. Bu açma işleminde derleyiciye değişkenin her koşulda dolu olduğunu garanti ettiğinizi belirtirsiniz. Kimi durumlarda opsiyonel bir değer her zaman dolu olabilir, fakat yine de diğer açma işlemlerini izlemekte fayda vardır. Aşağıda opsiyonel bir değerin zorla açma işlemine maruz kaldığını görebilirsiniz.

```
var someNonNilOptionalProperty: Int? = 5
var someNilOptionalProperty: Int?

print(someNonNilOptionalProperty!) // Çıktı: 5 
print(someNilOptionalProperty!) // Zorla açmaya çalışılan değer boş olduğu için uygulama bu satırda çökecektir.
```

### If Kontrolü İle Açma

If kontrolü ile açmanın, zorla açmadan farkı, açma işlemi başarısız olduğunda bir else bloğu varsa program çalışmaya else bloğu ile devam eder, yada else bloğu yoksa if bloğuna girmeden devam eder. Bu sayede hem opsiyonel özelliğin içi dolu ise açmış hemde özelliğin boş olması durumunda oluşabilecek olası çökme durumlarının önüne geçmiş oluruz. Aşağıda if ile açma işlemine örnek görebilirsiniz.

```
var someNilOptionalProperty: Int?
if let unwrappedProperty = someNilOptionalProperty {
    // Özellik boş olduğu için bu kod satırı hiçbir zaman çalışmaz.
    print(unwrappedProperty)
} else {
    print("Açma işlemi başarısız.")
}
// Çıktı: Açma işlemi başarısız.
```

Yukarıdaki örnekte önce opsiyonel ve ilk değer ataması yapılmamış bir özelliği açmaya çalışıyoruz. Özellik bir değer tutmadığı için açma işlemi başarısız olacak ve program else bloğundan çalışmaya devam edecektir.

```
var someNonNilOptionalProperty: Int? = 5
if let unwrappedProperty = someNonNilOptionalProperty {
    print(unwrappedProperty)
}
// Çıktı: 5
```

Bu örnekte ise yine opsiyonel bir özellik ilk değer ataması yapılarak açma işlemine maruz kalmıştır. Burada özellik değer tuttuğu için açma işlemi başarılı olacaktır. Sonuç olarak ekranda özelliğin tutmuş olduğu 5 değerini görürüz.

### Guard Kontrolü İle Açma

Guard ile açma if ile açmaya oldukça benzerdir. Guard, Swift'in if benzeri bir kontrol oluşturmasını sağlayan anahtar kelimedir. En önemli farkı ise if gibi koşul başarılı olduğunda if bloğundan devam etmek yerine içinde bulunduğu kod bloğunun bulunduğu satırdan sonrasını if bloğu gibi kullanmamızı sağlar. Böylece <b> pyramid of doom </b> olarak adlandırılan iç içe birden çok süslü parantez karmaşasının önüne geçmemizi sağlar. Anlatımı biraz karmaşık gelsede kullanımı oldukça kolaydır. Gelin If Kontrolü İle Açma başlığı altında verdiğimiz örneği guard ile yapalım.

```
var someNilOptionalProperty: Int?
guard let unwrappedProperty = someNilOptionalProperty else { 
    print("Açma işlemi başarısız.") 
    return
}
// Özellik boş olduğu için bu kod satırı hiçbir zaman çalışmaz.
print(unwrappedProperty)

// Çıktı: Açma işlemi başarısız.
```

```
var someNonNilOptionalProperty: Int? = 5
guard let unwrappedProperty = someNonNilOptionalProperty else { return }
print(unwrappedProperty)
    
// Çıktı: 5
```

Görüldüğü gibi guard yapısında, koşulun başarılı olması durumu için bir kod bloğu yoktur. Koşul başarılıysa zaten kendinden sonraki satırlar çalışmaya devam eder. Fakat koşulun hemen sonrasında bir else bloğu tanımladığımızı farketmişsinizdir. Bu else bloğu koşulun başarılı olmadığı durumda çalışacaktır. Else bloğu sonunda yer alan <b> return </b> anahtar kelimesi, guard'dan sonraki komutların çalışmasını engeller.

### Opsiyonel Zincirleme(Optional Chaining)

Opsiyonel zincirleme, opsiyonel bir varlığın yada bu varlığa ait opsiyonel özellik veya metodların çağrılarını yaparken kullanmamız gereken bir nokta notasyonu türüdür. Kodu yazan kişinin, özellik veya metodun opsiyonel olduğunu anlaması dışında kod yazımına çok bir etkisi yoktur. Opsiyonel bir varlığın özelliğini çağırırken nokta işaretinden önce soru işareti koymamız gerekir. Swift zaten siz eklemesenizde gerekli noktalarda bu eklemeleri yapacaktır. Aşağıda opsiyonel zincirlemeye bir örnek görebilirsiniz.

```
struct SomeStruct {
    let someValue: Int
}

let someStruct: SomeStruct? = SomeStruct(someValue: 3)

print(someStruct?.someValue)

// Çıktı: Optional(3)
```

Yukarıdaki örnekte someStruct adında bir varlık oluşturulmuş, bu varlığın opsiyonel bir SomeStruct olduğu tip tanımında belirtilmiş ve ilk değer ataması yapılmıştır. Eğer bu varlığın someValue özelliğine erişmek istersek, varlık opsiyonel olduğu için nokta öncesinde soru işareti kullanmamız gerekir. Terminal ekranında çıktı olarak Optional(3) görmemizin sebebi ise ekrana yazdırdığımız değerin opsiyonel olmasından kaynaklanmaktadır. Eğer değeri açarsak Optional belirtecinden kurtulmuş oluruz.
