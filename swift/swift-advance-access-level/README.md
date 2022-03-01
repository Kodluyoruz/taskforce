# Erişim Denetimi

Swift beş farklı erişim denetim düzeyi sağlıyor.

* <b>Open ve Public Erişim Denetimi: </b> Proje modülü içinde veya bu modül dışında yer alan herhangi bir kaynak dosya bu varlıklara erişebilir. Bir kütüphane geliştirirken sıklıkla bu erişim denetim metodlarını tercih edersiniz.
* <b>Internal Erişim Denetimi: </b> Proje modülü içinde yer alan kaynak dosyalar bu varlılara erişebilirken, modül dışında kalan kaynak dosyalar erişemez. Bir uygulama geliştirirken dışarıya açık olması gerekmeyen varlıklar bu erişim denetimi ile tanımlanır.
* <b>File-private Erişim Denetimi: </b> Kaynak dosya içinde yer alan varlıklar birbirine erişebilir. Kaynak dosya dışında kalan varlıkların erişimi engellenir. Kaynak dosya için gerekli fakat dışında kalan kısımlar için gereksiz olan yapılar bu erişim denetim metodu ile dış erişime kapatılır.
* <b>Private Erişim Denetimi: </b> Bu erişim denetimine sahip varlıklar, yalnızca bulunduğu blok içinde erişime açıktır. Varlık içinde kalan yapılar bu erişim denetimi ile dışarıdan müdahaleleri engeller.

Open erişime en açık denetimi sağlarken, private erişimi en çok kısıtlayan erişim denetim metodudur.

Open, sadece Class ve Class'a ait öğeler için geçerli bir erişim denetim metodudur. Public erişimden farklı olarak, Subclass'ın miras aldığı öğeleri gerçersiz kılmasına(override) izin verir. Bir Class'ı, Open erişim denetimi ile tanımladıysanız, bu sınıfan türeyecek alt sınıfların koda etkisini düşünerek Class'ın iç yapısını oluşturduğunuz anlamına gelir.

### Erişim Denetiminin Yol Gösterici İlkeleri

Bir varlık, daha kısıtlı bir erişim sağlayan diğer bir varlık tarafından tanımlanamaz. Örneğin;

* Public erişim denetimine sahip bir değişken, Internal, File-private veya Private bir yapı içinde tanımlanamaz. Çünkü bu yapılar değişken için erişilebilir olmayabilir.
* Bir fonksiyon, parametre ve dönüş tipinden daha kısıtlı bir erişim seviyesinde olamaz. Çünkü fonksiyon çağrısında parametre erişim dışı kalabilir ve bu durum fonksiyonun işlevini olumsuz etkileyebilir.

Swift, istisnalar dışında, varsayılan erişim denetimi olarak, Internal erişim denetimini kullanır.

### Erişim Kontrolü Yazım Kuralları

Aşağıda çeşitli erişim denetimine sahip tanımlamaları görebilirsiniz.

```
public class SomePublicClass {}
internal class SomeInternalClass {}
fileprivate class SomeFilePrivateClass {}
private class SomePrivateClass {}

public var somePublicVariable = 0
internal let someInternalConstant = 0
fileprivate func someFilePrivateFunction() {}
private func somePrivateFunction() {}
```

Eğer tanım öncesinde bir erişim denetimi belirtilmezse, tanımlanan varlık Internal erişim denetimine sahip olarak tanımlanmış olur. Örneğin aşağıdaki tanımlar bir ön ek almasa da Internal erişim denetimine sahiptir.

```
class SomeInternalClass {}
let someInternalConstant = 0
```

Her varlık aksi belirtilmediği sürece içinde bulunduğu kod bloğunun erişim denetimini alır. File-private bir Class içinde yer alan özelliklerde File-private erişim düzeyinde olacaktır. 

```
fileprivate class SomeFilePrivateClass {
    func someFilePrivateMethod() {}         // Bu metod belirtilmesede içinde bulunduğu kod bloğu sebebiyle fileprivate erişim düzeyindedir.
    private func somePrivateMethod() {}
}
```
