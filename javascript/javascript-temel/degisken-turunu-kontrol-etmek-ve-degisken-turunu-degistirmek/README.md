# Değişken Türünü Kontrol Etmek ve Değişken Türünü Değiştirmek

(Yazının içindeki soruların cevabı)

1- console.log(“foo” +  +“bar”)

// +"bar" => Number("bar") => NaN
//"foo"+NaN 
//"foo" +"NaN"
//Sonuç= "fooNaN"

2- console.log(‘true’ == true)

//Number('true')=>NaN
//NaN == true
//NaN == 1
//Sonuç= false

3- console.log(null==””)

// null sadece kendine ve undefined'a eşit olduğundan
//Sonuç= false

4-console.log(0 || “ 0” && {})

//(0 || "0") %% {} 
//(false || true) && {} => dolu string true döndüğünden
//(true) && {} => || operatörü ilk bulduğu true değeri, && operatörü ilk bulduğu false değeri döner
//true && {} => && operatörü false değer bulamazsa son bulduğu değeri döndürür. 
//Sonuç={}

5-console.log([“a”] > null)

//"a" > null => array toStirng metodunun içine girer
//NaN > null => Numeric dönüştürmeye girer
//NaN > 0
//Sonuç= false

6-(codepen'in cavabı)

 if(isNaN(yas)){
    divEl.innerHTML= `Sadece Sayı Giriniz`;
 }
  





