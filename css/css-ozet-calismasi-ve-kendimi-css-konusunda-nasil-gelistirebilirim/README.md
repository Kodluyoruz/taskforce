# CSS Özet Çalışması ve Kendimi CSS Konusunda Nasıl Geliştirebilirim

## Css Nedir ?

- Açılımı “Cascading Style Sheets” , Türkçe karşılığı "Basamaklı Biçim Sayfaları" ya da "Basamaklı Stil Şablonları" olan bir markup dilidir. CSS en basit şekliyle HTML etiketlerimizi görsel açıdan (boyut, renk , font vs.) geliştirmemizi sağlar. Adından da anlaşılacağı gibi basamaklı yapısından alır. Bir HTML dokümanının şeklini ve/veya görüntüsünü tasarlayan olgudur. Diğer bir ifadeyle CSS, HTML’i basit bir iskelet olmaktan kurtaran metin şekillendirme dilidir. Bu nedenle büyük öneme sahiptir. Çünkü bir sitedeki görselliği dolayısıyla da kullanıcı memnuniyetini sağlayan genelde CSS’tir.

    #### CSS'in Kaç Stil Sayfa Türü Vardır ?
    
     1 - Internal (İç):
     
      CSS kodlarımızı sayfanın üst kısmına style etiketi içine yazdığımız biçimidir.

     2 - External (Dış):
     
      CSS kodlarımız için .css uzantılı bir doküman açıp buraya yazdığımız daha sonra da bu dokümanı link etiketi ile HTML içerisine çağırdığımız yazım biçimidir.

     3 - İn-line (Satır İçi):
     
      CSS kodlarımızı HTML yapımızın içine in-line bir şekilde yazdığımız biçimdir.
      
## CSS'in Olmazsa Olmaz 3 Temel Kavramı :
 
- Etiketlerdeki CSS tanımlamaları, sayfanın tümünde  aynı bulunan etiketi kullanan alanlarda geçerli olacaktır.
     - Örneğin sayfanın içeriğini oluşturan <body> etiketine yapılan   yazı tipi ve boyutu değişimi, sayfanın tamamındaki yazı tipini ve boyutunu değiştirecektir.

- Class ve ID özellikleri etiketlerin yanında tanımlanır. <div class=” container”> şeklinde tanımlanan birden fazla etiket bulunabilir.
     - CSS dosyasında container class’ı için         
         yapılacak değişiklikler sadece o class özelliğine sahip etiketler tarafından kullanılacaktır.

- ID tanımlaması da aynı şekilde etiketlerin yanında tanımlanır ve <div id =”header"> şekilde yazılır.CSS’te yapılan değişimler sadece o etikete etki edecektir. Bu arada bir belgede birden fazla aynı ID’ye sahip   etiket olmamalıdır.CSS dosyasında etikete değişiklik yapılıyorsa direkt olarak yazılıp, sağına süslü parantez açılıp içine özellikler yazılmalıdır. Eğer bir Class’a değişiklik yapılacaksa soluna nokta koyulduktan sonra Class ismi yazılıp sağına süslü parantez açılıp buraya özellikler yazılmalıdır.

      - Eğer bir ID’ye değişiklik yapılacaksa soluna # işareti koyulduktan sonra ID ismi yazılıp sağına süslü parantez açılıp içine özellikler yazılmalıdır.

      Etiket’e CSS tanımlaması: body{ font-size:10px; }

      Class’a CSS tanımlaması: .container{ width: 100%; }

      ID’ye CSS tanımlaması: #header{ width: 100%; }


## - Haydi bir kaç CSS özelliğine göz atalım !

   - #### LİNK ÖZELLİKLERİ
   
      - a : Linkin, sayfa açıldığında tıklanmadan veya hareket sağlanmadan önceki durumudur.
      - a:hover : Linkin imleç üzerine getirildiğindeki durumudur.
      - a:active : Linkin tıklandığı andaki durumudur.
      - a:visited : Linkin tıklandıktan sonraki durumudur.


   - #### BİÇİMLENDİRME
      - text-decoration: Linkin altının,üstünün vs. çizgili olup olmayacağını belirler.
      - font-weight: Yazının kalınlık veya inceliğini belirler.
      - border: Linkin etrafına kenarlık ekler.
      - display: Linki içeren hücre , satır vb. istenilen alanın seçilmesini sağlar.


   - #### KATMAN ÖZELLİKLERİ
      - position: Katmanın yerinin belirlenmesini sağlar.
      - absolute: Katmanın yerinin pencere esas alınarak belirlenmesini sağlar.
      - relative: Katmanın yerinin bir önceki katman esas alınarak belirlenmesini sağlar.
      - width: Katmanın genişliğinin ne kadar olacağını belirler.
      - height: Katmanın yüksekliğinin ne kadar olacağını belirler.
      - overflow: Katmanın belirtilen yükseklik ve genişliğe sığmayan kısmına ne olacağını belirler.
      - auto: Otomatik olarak belirlenir.
      - visible : Katmanı belirtilen boyutların dışına taşırarak sığmayan yerlerin görünmesini sağlar.
      - visibility: Katmanın görünebilirlik ayarını yapar.
      -hidden: Katmanı gizler.


   - #### FONT ÖZELLİKLERİ
   
      - font-family: Yazı türünü belirler.(Arial , Verdana gibi.)
      - font-style: Yazının normal veya sağa eğik olmasını sağlar.
      - font-variant: Yazının normal veya tümünün büyük harflerden oluşmuş olmasını sağlar.
      - font-weight: Yazının kalınlık-inceliğini belirler.
      - font-size: Yazının büyüklüğünü belirler.
  
# Kendimi CSS Konusunda Nasıl Geliştirebilirim ?
      
   CSS öğrenmek w3schools adlı platformu ziyaret etmenizi öneririm burdan hem CSS'in alt başlıklarına dahil konuları öğrenebilir ve alıştırmalar yapabilirsiniz.
   Denemelerinizi ilk olarak NotePad (txt) dediğimiz Metin Belgesi ile veya Visual Studio Code,Brackets ve Sublime Text gibi uygulamalar kullanarak  yapabilirsiniz. Daha sonra derleyici uygulamalarla öğrenmelerinizi pekiştirebilirsiniz. Herhangi bir web sitesinde iken sağ klikleyerek Sayfa Kaynağını Görüntüle ve İncele diyerek HTML/CSS kodlarının konumu hakkında bilgi sahibi olabilirsiniz.Google Chrome geliştirici konsolunu kullanarak da web sitelerini inceleyebilir üstünde geçici ve öğrenmeye dayalı değişiklikler yapabilirsiniz.
 
 Daha fazla gelişmek ve kendime bu konuda yetkinlik kazanmak istiyorum diyorsanız,sevdiğiniz tasarımları klonlamayı deneyebilirsiniz böylelikle uygulama yaparak kendinizi daha çok geliştirebilirsiniz.Sonrasında tasarımları modifiye edebilir ve sonrasında da özgün tasarımlarla web sitesi hazırlayabilirsiniz.
 
 Sonuç olarak her şey alıştırma yapmaktan ve bilgilerimizi diri tutmakta bitiyor... :)
 
# Sorular 
Soru 1: CSS (Cascading Style Sheet) ile aşağıdakilerden hangisi yapılamaz ?
 
Bir sayfanın yeniden yüklenmesi  (Doğru)
Bir yazının fontunun Arial yapılması
Bir link alt çizgisinin kaldırılması
Bir link’in üzerine gelindiğinde link’in renginin değiştirilmesi

Soru 2 : Class selector ile id selector arasındaki en önemli fark aşağıdakilerden hangisidir?

Class selector’ler yanlızca inline elementler için geçerlidir. id ise block level için geçerlidir.
Class selector’ler yanlızca block level elementler için kullanılır. id ise inline elementler için kullanılır
Class’lar sadece renk ve border özellikleri için kullanılır. id her style için kullanılabilir.
Class selectorler istenildiği kadar kullanılabilir. id selector’ler yanlızca bir kere kullanılabilir. (Doğru)
Class selector’ler sadece .css dosyalarında kullanılır. id ise istenildiği yerde kullanılabilir.


