# Operatör Önceliği

* * *

| **En yüksek** | ++ (Değişkenden sonra yazılan <br>-- (Değişkenden sonra yazılan) |
| ------------- | ------------------------------------------------------------ |
|               | ++ (Değişkenden önce yazılan) <br>-- (Değişkenden önce yazılan) <br>~ (Bit seviyesinde tersini alma) <br>! (Mantıksal tersini alma) <br>+ (Pozitif sayı belirteci) <br>- (Negatif sayı belirteci) <br>Tür Dönüşümü |
|               | * (Çarpma İşlemi) <br>/ (Bölme İşlemi) <br>% (Mod Alma)      |
|               | + (Toplama İşlemi) <br>- (Çıkarma İşlemi)                    |
|               | >> (1 bit sağa kaydırma) <br>>>> (0 ile doldurarak 1 bit sağa kaydırma) <br><< (1 bit sola kaydırma) |
|               | > (Büyüktür) <br>>=(Büyük eşittir) <br>< (Küçüktür) <br><= (Küçük eşittir) <br>instanceof |
|               | == (Eşitlik kontrolü) <br>!= (Eşitsizlik kontrolü)           |
|               | & (Ve işlemi)                                                |
|               | ^ (XOR işlemi)                                               |
|               | \| (Veya işlemi)                                             |
|               | && (Kısa devre ve işlemi)                                    |
|               | \|\| (Kısa devre veya işlemi)                                |
|               | ?: (Üçlü if-then-else)                                       |
|               | -> (Lambda operatörü)                                        |
| **En düşük**  | = (Atama operatörü) <br>Bileşik atama operatörleri(+=, %=, &= vs.) |



## Parantez Kullanmak

Parantez kullanarak operatör önceliğini değiştirebilirsiniz. Örneğin, şu ifadeyi göz önüne alalım:

```java
a >> b + 3
```

Toplama operatörünün önceliği sağa kaydırma operatörüne göre yüksek olduğu için b’nin değerine 3 eklenir, sonra a’nın bitleri sağa kaydırılır. Eğer sağa kaydırma işleminin toplamadan önce yapılmasını istiyorsanız ifadeyi şu şekilde yeniden yazmalısınız:

```java
(a >> b) + 3
```

İşlem önceliğini değiştirmek için parantez kullanmanın programın performansına olumsuz bir etkisi yoktur. Bu nedenle, gereksiz olsa bile, yazılan ifadelerin okunurluğunu artırmak amacıyla parantez kullanabilirsiniz.