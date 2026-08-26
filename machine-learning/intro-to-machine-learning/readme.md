# Makine Öğrenmesine Giriş

Link: https://youtu.be/Gv9_4yMHFhI

## Makine Öğrenmesi Nedir?

Makine Öğrenmesi, bilgisayarların **veriden öğrenmeleri** için programlanması bilimidir (ve sanatı). <br>

Aşağıda daha genel bir tanımlama var:
<pre>
    [Makine Öğrenmesi] bilgisayarlara, onları özellikle programlamadan, öğrenme yeteneği veren çalışma alanıdır.
        - Arthur Samuel, 1959
</pre>

Ve daha mühendislik odaklı olan tanımlama:
<pre>
    Bir bilgisayar programının bir görev olan T'ye ve bir performans ölçütü olan P'ye bağlı olarak E tecrübesinden öğrendiiği söylenir, eğer performansı E tecrübesi ile gelişiyorsa.
        - Tom Mitchell, 1997
</pre>

Örneğin; spam e-posta filtreniz, spam e-postalar (kullanıcı tarafından belirlenmiş) ve normal (spam olmayan) e-postalar verildiğinde, spam e-postaları belirlemeyi öğrenebilen bir Makine Öğrenmesi programıdır. Sistemin öğrenmek için kullandığı örneklere *eğitim seti* denir. Bu durumda, görev yeni e-postaların spam olup olmadığını belirlemek, tecrübe eğitim seti ve performans ise doğru sınıflandırılmış e-postaların tüm e-postalara oranı olabilir. Böylece Makine Öğrenmesi programı, performansını eğitim setini kullanarak görevi daha iyi yapabilmek için kendini geliştirir ve görevi iyi bir şekilde yapmayı öğrenmiş olur.

## Neden Makine Öğrenmesi?

Geleneksel programlama teknikleri ile bir e-posta spam filtresi yazmak istediğimizi düşünelim: <br>

1. İlk önce spam e-postalar genelde nasıl gözükür ona bakarız. Bazı kelime veya kelimelerin ("kredi kartı", "ücretsiz" ve "inanılmaz" gibi) spam e-postalarda daha çok görüldüğünu fark edebiliriz. Belki e-posta'yı gönderenin adında vb. kısımlarda da bazı şeyleri yakalayabiliriz.
2. Bu özellikleri yakalayacak bir algoritma yazmamız gerekir ki programımız bu özellikleri yakalayarak bir e-posta spam mı değil mi anlayabilsin.
3. Programı test ederiz ve yeterince iyi olana kadar 1. ve 2. adımları tekrarlarız.

Bu adımlar aşağıdaki şekilde gösterilmekte: <br>

![Şekil 1-1](https://raw.githubusercontent.com/yigitatesh/taskforce/main/machine-learning/intro-to-machine-learning/figures/figure_1_1.png)

Problem basit olmadığı için programımız büyük ihtimalle karmaşık kurallardan oluşan uzun bir liste olacak ve sürdürmesi bayağı zor olacak. <br>

Tam tersine, Makine Öğrenmesi tekniklerine dayalı bir spam filtresi hangi kelimelerin spam ve spam olmayan e-postaları ayırmada daha kullanılabileceğini otomatik bir şekilde öğrenebilir. Program çok daha kısa, daha kolay sürdürülebilir ve büyük ihtimalle daha isabetli olacaktır.

![Şekil 1-2](https://raw.githubusercontent.com/yigitatesh/taskforce/main/machine-learning/intro-to-machine-learning/figures/figure_1_2.png)

Yukarıdaki şekilde spam e-posta probleminin Makine Öğrenmesi ile çözümü gösterilmiştir. Geleneksel çözümdeki gibi karmaşık kurallar yazmak yerine veri toplanır ve bu veri üzerinde Makine Öğrenmesi algoritmaları eğitilir. 

Özetle, Makine Öğrenmesi şunlar için harikadır:
- Çözümleri el ile yapılması gereken birçok ayarlama ya da uzun bir kurallar listesi içeren problemler: bir Makine Öğrenmesi algoritması genellikle kodu sadeleştirir ve daha iyi performans gösterir.
- Geleneksel yöntemler kullanılarak çözüm bulunamayan karmaşık problemler: en iyi olan Makine Öğrenmesi teknikleri çözüm bulabilir.
- Değişken problemler: bir Makine Öğrenmesi sistemi yeni verilere adapte olabilir.
- Karmaşık problemlerden ve büyük miktardaki verilerden çıkarımlarda bulunmak.
