Node.js'in Asenkron Yapısı
======

Giriş bölümümüzde Node.js'in bize sağlamış olduğu Javascript çalışma ortamı yapısı üzerine konuştuk. Bu bölümde ise ana konumuz asenkron Javascript ve asenkron çalışmanın 
Node.js açısından önemi. Önce senkron ve asenkron kavramlarına bakalım.

#### Senkron Programlama (Synchronous Programming):

Senkron programlama en basit tanımıyla işlemlerin sırasıyla yapılmasıdır. Önce bir dosya okuyalım, sonra bir veritabanı işlemi yapalım ve sonrasında da 
bir http isteği gönderelim şeklinde basit bir şekilde çalışır. Beklemekten sıkılmaz, başka işlerin aciliyetiyle ilgilenmez. Bir işlem yapılırken diğer 
işlemler **bloklanır**.

#### Asenkron Programlama (Asynchronous Programming):
Asenkron programlama ise uzun süren bir işlemi beklemeden diğer işlemlere devam edebilmektir, işlemlerin sırasıyla devam etme zorunluluğu yoktur. Önce bir 
dosya okuyalım, aaa ama bu dosya okumak uzun sürüyor, eee ne yapalım o zaman? Bu işlemin bitmesini beklemeden diğer işleme geçebiliriz. Bir işlem yapılırken
diğer işlemler **bloklanmaz**.
