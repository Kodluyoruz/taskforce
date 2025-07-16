# JSON - JavaScript - XML
======

### JSON vs JavaScript
**JavaScript** web uygulamalarında sıklıkla kullanılan dinamik bir programlama dilidir. **JSON** ise bir söz dizim olarak JavaScript'in bir alt kümesi olarak düşünülebilir. 
Bu nedenle uygun JSON formatındaki bir içerik JavaScript ifadesine (expression) denk gelir.

```
{
    "id":1,
    "title": "Matrix",
    "actors": ["Keanu Reeves", "Carrie Anne Moss"],
    "published_year": 1999,
    "genre": {
      "id": 6,
      "name": "Action"
    },
    "rating": 7.9
} 
```

şeklindeki JSON söz dizimini bir JavaScript değişkenine atadığımızda, değişken değer olarak bir JavaScript nesnesini almış olur. JSON formatında **key** ifadelerin
çift tırnak içerisine alınması zorunludur. Her ne kadar JSON söz dizimi olarak kendisine JavaScript'i örnek aldıysa da kullanımı bir çok programlama dili tarafında yaygındır.

### JSON vs XML

#### XML
e**X**tensible **M**arkup **L**anguage ifadesinin kısaltmasıdır. Veri depolamak ve iletmek için kullanılan bir script dilidir. 1998 yılında **W3C** tarafından standartlaştırılmıştır. 

```
<breakfast_menu>
  <food>
      <name>Belgian Waffles</name>
      <price>$5.95</price>
      <description>
        Two of our famous Belgian Waffles with plenty of real maple syrup
     </description>
     <calories>650</calories>
  </food>
</breakfast_menu>
```

Genel olarak ağaç yapısına (tree structure) sahiptir. Veriler açılış ve kapanış etiketlerinin içerisinde bulunur. Dıştaki etiket, içtekinin "parent"ı, içteki etiket ise
dıştakinin "child"ı şeklinde düşünülür.

**JSON** formatının **XML** formatına göre en büyük avantajı, doğalında bir nesne modeline sahip olmasıdır. Bu özellik sayesinde birçok programlama dili JSON verileri
daha kolay bir şekilde işleyebilir.

 ## Daha Fazlası İçin
- [W3Schools - XML](https://www.w3schools.com/xml/default.asp)
- [Erik Wilde - Youtube](https://www.youtube.com/watch?v=jSx84DYwymo)

