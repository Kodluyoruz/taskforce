# Break ve Continue Kullanımı

Break ve continue döngülerde sıklıkla kullandığımız önem arz eden ifadelerimizdendir. Döngüye müdahale etmemizi ve akışı kontrol etmemizi sağlarlar.


1. Break:
break ifadesi içinde bulunduğu döngüyü sonlandırmak diğer bir deyişle döngüden çıkılması hizmetini sunar. Bu hususta öneminin yeniden vurgulanması gereken  nokta **"break"** ifadesinin sadece kendine en yakın yani içinde bulunduğu döngü içerisinde geçerli oluşudur.----> İç içe döngüler örneğinde daha net anlaşılacaktır.

2. Etiketli Break:

   Etiketli break ifadeleri ise başına konulduğu döngü sistemini sonlandırır.

3. Continue :
  Continue ifadesi ise bulunduğu döngü içinde o anki çalışacak olan  devir işlemini pas geçerek bir sonraki devir işlemini başlatır. Yine burada da vurgulanması gereken nokta **"continue"** ifadesinin sadece kendine en yakın yani içerisinde bulunduğu döngü içinde geçerli oluşudur.

4. Etiketli Continue: 

   Etiketli continue ifadeleri ise başına konulduğu döngü sistemini etkiler.

 ```javascript
// 1-) break için basit örnek
// normalde 1 den 10 a kadar yazdırması gerekirken 5 te break ile karşılaşıldığı
//için dögüden çıkıldı hemen orda döngü sonlandırıldı
for (var i = 0; i <= 10; i++) {
  if (i == 5) {
    break;
  }
  console.log("i:" + i);
}
console.log("Döngüden çıkıldı");

//2-) continue için basit örnek
// 1 den 10 a kadar yazıldı fakat 5 te continue ile karşılaşıldığı için o anki
//işlem olan 5 sayısı  pas geçilerek direk 6 ya geçildi
for (var i = 0; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log("i:" + i);
}
console.log("Döngüden çıkıldı");
 ```

 ```javascript
//İç içe döngü örneği
//  iç döngü de 3 değerinde break ifadesi çalışır ve o anda iç döngüden çıkılır yani
//iç döngü sonlanır.Fakat dış döngünün işleyişi aynen devam eder
for (var i = 0; i <= 10; i++) {
  console.log("dış döngü: " + i);

  for (var j = 0; j <= 5; j++) {
    if (j == 3) {
      break;
    }
    console.log("iç döngü" + j);
  }
}

//Etiketli break Örneği
//etiketli break ifadesi her ne kadar iç döngü içerisinde olsa dahi
//etiketin başına konulduğu döngü için etki eder.
//Böylece daha geniş çaplı bir dögüden çıkılmış oldu.
cikis_etiketi: for (var i = 0; i <= 5; i++) {
  for (var j = 0; j <= 50; j++) {
    if (j == 9) {
      break cikis_etiketi;
    }
    console.log("iç döngüden j :" + j);
  }
}

//Etiketli Continue Örneği

gec_etiketi: for (var i = 0; i <=5; i++) {
  for (var j = 0; j <= 4; j++) {
    if (j == 2) {
      continue gec_etiketi;
    }
    console.log("iç döngüden j :" + j);
  }
  
}
 ```