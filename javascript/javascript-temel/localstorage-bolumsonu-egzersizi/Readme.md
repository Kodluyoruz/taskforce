# localstorage bölüm sonu egzersizi
•	localStorage hakkında bilgi edindiğimize göre şimdi de küçük bir egzersiz yapalım..

let counter = localStorage.getItem('counter')? Number(localStorage.getItem('counter')) : 0
let counterDOM = document.querySelector('#counter')
let increaseDOM = document.querySelector('#increase')
let decreaseDOM = document.querySelector('#decrease')

counterDOM.innerHTML= counterDOM
increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)

function clickEvent(){
    this.id == "increase" ? counter +1 : counter -= 1
    localStorage.setItem('counter', counter)
    counterDOM.innerHTML = counter
}
•	Kodu çalıştırdığımızda aşağıdaki çıktıyı alırız.

 ![](C:\Users\Tuba Engin\tubalocal\taskforce\javascript\javascript-temel\localstorage-bolumsonu-egzersizi\img\localStorage-1.PNG)

•	Yukarıda görüldüğü üzere sayfayı ilk kez açtığımızda localStorage da key ve value içerisinde hiçbir değer gözükmeyecektir ve counter 0 olacaktır.
•	Şimdi counter değerini bir arttırdığımızda neler değişecek buna bir bakalım..
 ![](C:\Users\Tuba Engin\tubalocal\taskforce\javascript\javascript-temel\localstorage-bolumsonu-egzersizi\img\localStorage-2.PNG)
•	Counter bir arttırıldığında localStorage içerisine key ve value değerlerimizin geldiğini görüyoruz.
Sorular
1-) Aşağıdakilerden hangisi localStorage için yanlıştır?
A) String veri türünde data tutar.
B) localStorage.setItem('counter',counter); ile localStorage'a veri eklenir.
C) localStorage.getItem('counter'); ile tuttuğumuz veriyi çağırırız.
D)Tarayıcı kapandığı andan itibaren tuttuğu bilgiyi silmektedir.
Cevap-D
2-) localStorage.clear(); komutu aşağıdakilerden hangisini yapar?
A) Tüm storage'i temizlemek için kullanılır.
B) Belirttiğimiz veriyi silmemize yarar.
C) Çerezlerdeki veriyi silmeye yarar.
D) Storage'a bir değer atar
Cevap-A