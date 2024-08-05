Soru 1 - ) Delete ve Truncate arasındaki fark nedir ? (Açıklayınız)

cevap : 

Delete - > Tablodaki satırları kaldırır. Satırları teker teker siler ve silinen her satır için işlem günlüğüne kaydeder.Silinen veriler geri alınabilir. DML komutudur. Delete deyimi bir satır kilidi kullanılarak yürütüldüğünden tablodaki her satır silinmek üzere kilitlenir.Delete komutunda kayıt silerken where koşulu eklenir.

Truncate -> Tablodaki satırları kaldırır. Satırları birer birer silin ve silinen her satır için işlem günlüğüne bir girdi kaydeder.Silinen veri geri alınabilir. DML komutudur. Where koşulu eklenmez.

Truncate ve Delete arasındaki en önemli farklar : 

​	Eğer tabloda identity kolonu var ise, delete komutu kullanıldığında o kolon kaçıncı identity de kaldıysa ordan devam eder.Truncate table yaptığımız da ise en baştan saymaya devam eder.

​	Foreign key içeren tablolarda Truncate yapılmaz.Delete komutu kullanılmalıdır.

​	Truncate komutunda loglama kayıt bazlı yapılmadığı için delete komutuna göre daha performanslıdır.