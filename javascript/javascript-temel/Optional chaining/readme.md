#Optional chaining

Öncelikle optional chaining neden kullanılmalı sorusunu cevaplayalım. Optional chaining kodunuzu daha okunaklı, sade bir yapıya çevirmek istiyorsanız ve kodunuzda olası hatalar için güvenlik önlemleri almak istiyorsanız biçilmiş bir kaftandır. Genelde normal kullanım olan chain " . " operatörü, bir yapıda kesin emin olduğumuz birşeye erişmek için kullanırız. Fakat aradığımız obje veya functionun o yapıda olup olmadığından emin değilsek optional chaining kullanmak çok mantıklı olacaktır. ?. operatörü, chaining operatörü olan . ile benzer özellik gösterir fakat null veya undefined olan birşeyi hata gibi göstermek yerine daha yumuşak bir yaklaşım olarak undefined döndürür. Buda kodunuzda güvenlik önlemleri almanıza yardımcı olur. 


Fonksiyonlar için kullanıldığı taktirde yine istenilen fonksiyon zincir yapıda bulunmuyorsa undefined dönecektir. Optional chaining için bir property, expression, indexing, arguman, function declaration kullanılabilir.

`let diller = {
  javaScript: {
    yapici: "Brendan Eich",
    ilkSurum: "May 1995",
    stabilSurum: "June 2019",
  },
  python: {
    yapici: "Guido van Rossum",
    ilkSurum: "January 1990",
    stabilSurum: "May 2020",
  },
};`

Chaining kullanımı (Normalde olan)

`console.log(diller.javaScript.yapici); //Brendan Eich`

Örnek olarak javascript kısmında yapıcının kim olduğunu bilmiyor olsaydık, TypeError alıp almayacağımızı bilmediğimiz için if içerisinde conditionlar ile bunu yazacaktık.

`if (diller.javaScript && diller.javaScript.yapici) {
    console.log(diller.javaScript.yapici); //Brendan Eich
}`

Fakat optional chaining bunu daha sade, kolay ve güvenli bir hale getiriyor.

`console.log(diller.javaScript?.yapici); // Brendan Eich
console.log(diller.php?.yapici); //Php diye bir dil segmesi olmadığı için daha güvenli bir şekilde Undefined dönecektir.`

`console.log(diller.someNonExistentMethod?.());`

Son olarak ise projelerimizde kullanmak için hangi browser desteği olduğuna değineceğim. Edge, Firefox, Chrome, Safari ve operanın 2020 sürümlerinde rahatlıkla kullanılabilmekte fakat Internet Explorer için ne yazıkki kullanımı bulunmamakta. Kullanmadan önce mutlaka göz gezdiriniz. https://caniuse.com/?search=optional%20chaining

Zamanınızı ayırıp okuduğunuz için teşekkür ederim.

Ilker Kurtulan
