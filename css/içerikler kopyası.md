#### [CSS Nedir?

- [CSS - Inline CSS Nasıl Kullanılır](css-inline-css-nasil-kullanilir/)

- [Inline(Etikete Özel), Internal(Aynı Dosyada) ve External(CSS Dosyasında) CSS Kullanımı](inlineetikete-ozel,-internalayni-dosyada-ve-externalcss-dosyasinda-css-kullanimi/)

- [Açıklama Satırları ile Çalışmak ve Genel Font Özellikleri](aciklama-satirlari-ile-calismak-ve-genel-font-ozellikleri/)

- [CSS ile Class ve ID Kullanımı](css-ile-class-ve-id-kullanimi/)

  - **Sorular**

    -  Aşağıdaki kodun çıktısı nedir?

    -  ```html
       <p class="main-text intro"> Birinci paragraf</p>
       <p class="main-text"> İkinci paragraf</p>
       <p id="outro"> Üçüncü paragraf</p>
       ```

    -  ```css
       .main-text {
           font-style: italic;
       }
       
       .intro {
           color:red;
       }
       
       #outro {
           color:green;
       }
       ```

       

       -  https://raw.githubusercontent.com/Kodluyoruz/taskforce/css/css/css-ile-class-ve-id-kullanimi/assets/Screenshot_8.jpg
       -  https://raw.githubusercontent.com/Kodluyoruz/taskforce/css/css/css-ile-class-ve-id-kullanimi/assets/Screenshot_7.jpg (D)
       -  https://raw.githubusercontent.com/Kodluyoruz/taskforce/css/css/css-ile-class-ve-id-kullanimi/assets/Screenshot_9.jpg
       -  https://raw.githubusercontent.com/Kodluyoruz/taskforce/css/css/css-ile-class-ve-id-kullanimi/assets/Screenshot_10.jpg

-  [Ödev 1](odev1/)

#### CSS Devam Konuları
- [CSS Seçiciler ile Çalışmak, İstediğimiz HTML Etiket Yapısına Özelliklik Ekleyebilmek](css-seciciler-ile-calismak,-i̇stedigimiz-html-etiket-yapisina-ozelliklik-ekleyebilmek/)

  - Sorular

    - Aşağıdaki kod bloğunda hangi satıra CSS uygulanmıştır ?

    - ```css
      .container > p.intro + ul > li:first-child {
              color: orange;
      }
      ```

    -  ```html
       <div class="container">
         <h2>Kodluyoruz</h2>
         <p class="intro">Lorem ipsum dolor sit amet.</p>
         <ul class="list">
           <li>HTML</li>
           <li>CSS</li>
           <li>Javascript</li>
         </ul>
       </div>
       <p class="intro">Lorem, ipsum.</p>
       <div class="container">
         <h2>Kodluyoruz</h2>
         <p>Lorem ipsum dolor sit.</p>
         <ul class="list">
           <li>Bootstrap</li>
           <li>React</li>
           <li>Angular</li>
          </ul>
       </div>
       ```
       -  `<p class="intro">Lorem ipsum dolor sit amet.</p>`
       -  `<li>Bootstrap</li>`
       -  `<li>HTML</li>` (D)
       -  `<li>CSS</li>`

    -  Üstteki kod bloğuna göre, bitişik kardeş etiketi p etiketi olan ve parentinin sınıf özelliği container olan h2 etiketine nasıl erişilir ?

       -  `p.intro +h2`
       -  `.container h2`
       -  `.container + h2`
       -  `p + .container h2` (D)


    

- [CSS Kutu Özellikleri(Margin, Padding, Width, Height) Kullanımı](css-kutu-ozelliklerimargin,-padding,-width,-height-kullanimi/)

- [CSS Özet Çalışması ve Kendimi CSS Konusunda Nasıl Geliştirebilirim](css-ozet-calismasi-ve-kendimi-css-konusunda-nasil-gelistirebilirim/)

-  [Ödev 2](odev2/)