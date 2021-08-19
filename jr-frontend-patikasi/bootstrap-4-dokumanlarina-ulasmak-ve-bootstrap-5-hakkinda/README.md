# Bootstrap 4 Dökümanlarına Ulaşmak ve Bootstrap 5 Hakkında

Bootstrap kütüphanesi 2011 yılının Ağustos ayından beri açık kaynaklı olarak geliştiriliyor vede gelişen web teknolojileri ile birlikte yeni versiyonlar çıkartıp kütüphanenin kapsamını artırarak kütüphanenin gücünü artırıp, kullanımını kolaylaştırıyor. Fakat yeni versiyon ne kadar iyi bir özellik gibi gözükse de,  yayınlandıkları zaman bazı eski versiyon özellikleri ve yazım şekilleri de terk ediliyor, buda bazı eski kodların yeni versiyonlarda çalışmasını imkansız hale getiriyor. 

Bu seri çekilirken Bootstrap'in 5. Versiyonu henüz Beta test aşamasında olduğu için kurs sürecinde Bootstrap 4.5 sürümü kullanılmıştır. Size önerilen Bootstrap 4 ile Bootstrap 5 arasında pek de fark olmadığından kurs ile birlikte 4 versiyonunu öğrenip, 5. versiyondaki küçük değişiklikleri de stabil bir sürüm çıktığı zaman öğrenmeniz olacaktır.

Son çıkmış sürümü kullanmadığımızdan, [Bootstrap Sitesinin](https://getbootstrap.com/) Docs(Döküman) kısmına girdiğinizde sağ yukarıdan versiyon seçimini yapmanız gerekmektedir. Latest versiyon yerine V(4.5.X) seçmeniz gerekiyor.  Tıkladığınız zaman [bu sayfaya geleceksiniz.](https://getbootstrap.com/docs/4.5/getting-started/introduction/)



## Versiyon 5 in Versiyon 4'e göre farkı
Bootstrap 5 in en çok sevilen özelliği kütüphanenin jquery kütüphanesinden tamamen bağımsız hale gelmesi. Önceki versiyonlarda jquery kullanmadan bootstrap kullanılamıyordu fakat artık jquery kullanmadan da bootstrap'in özelliklerinden yararlanabiliyorsunuz. Tabi hala jquery kullanmak isterseniz de entegre edebiliyorsunuz. 

Bootstrap 5 ile gelen ana özelliklerden diğeride, Arapça gibi **sağdan sola okunan** diller için destek. Bootstrap 4 versiyonunda Left (sol) ve Right (sağ) sistemleri start (başlangıç) ve end(bitiş) sistemine dönüştü. Aksini belirtmediğiniz zamanlar left yazacağınıza start ve right yazacağınıza da end  yazmanız gerekecek. 

Bootstrap'in bu sistemi getirmesindeki amacı sizin dinamik olarak sağdan sola dillerde start' ı right ve end 'i 
left olarak deklere edip her dil için okunaklı bir site yapabilmenizi sağlamak.  Bazı değişten syntax örnekleri...

| Bootstrap 4               | Bootstrap 5              |
| ------------------------- | ------------------------ |
| .left-*    ve    .right-* | .start-*   ve    .end-*  |
| .ml-*     ve     .mr-*    | .ms-*      ve      .me-* |
| .pl-*      ve      .pr-*  | .ps-*       ve     .pe-* |

Versiyon farklarının geri kalanlarını [bu linkten görebilirsiniz.](https://getbootstrap.com/docs/5.0/migration/) 


## Dökümanlar nasıl kullanılır
Döküman okuyabilmek ve dökümanlar arasından aradığınız şeyleri bulabilmek, mühendislerin ve kod yazarlarının sahip olabileceği en faydalı özelliklerden biridir. Bilgisayar dünyasında sorularınızın cevapları çoğunlukla **Stackoverflow** gibi forumlarda ve yeni öğrenmeye çalıştığınız bilgilerde hep dökümantasyonlarda bulunmaktadır. 

Yeni başladığınız kütüphanelerin dökümanlarında her zaman **getting started** bölümünden başlamanız önerilir. Bu bölümde nasıl bilgisayarınıza kuracağınız ve dikkat etmeniz gereken önemli konulardan bahsedilir. Sonrasında çoğu dökümantasyonda basit bir proje yazarak adım adım sizi yönlendirir.  Yeni bir kütüphaneyi öğrenmeye çalıştığınız zaman sizi en kolay alıştıracak bölümler bunlardır. 

Bootstrap gibi arayüz kütüphanelerinde kendi projenize ek olarak ekleyebileceğiniz çok sayıda bileşen bulabilirsiniz.  Mesela [dökümantasyonun components kısmında](https://getbootstrap.com/docs/4.5/components/alerts/)  çok fazla sayıda hazır bileşen bulunmaktadır. 

Bu bölümden bulduğunuz bileşenleri kendi uygulamanıza entegre etmek isterseniz, sitede hazır olarak bulunan kodu kullanabilirsiniz. Mesela örnek olarak yüklenme animasyonu olarak kullanabileceğiniz ["border spinner" sayfasına gelirseniz.](https://getbootstrap.com/docs/4.5/components/spinners/)  Orada size verilen kodu kullanarak o bileşeni kendi kodunuzda da görebileceksiniz.  **Çalışması için bootstrap'i kodunuzda çağırdığınıza emin olun. **

```html
<div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>
```

Bootstrap dökümanında gezmeniz sizin için kütüphanenin size sunduğu tüm fırsatları görebilmeniz için çok büyük bir fırsattır.  Her dersten sonra bootstrap dökümanlarından ders konusunu bulup da tekrar edebilirsiniz. Bu da sizin ders konusunu daha iyi anlamanıza ve o konu hakkında başka yöntemler öğrenmenizi sağlayacaktır. 