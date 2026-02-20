#For Döngüsü

Belirli ifadelerle kod bloklarını tekrar tekrar çalıştırmak için kullanılır.

```
for (ifade1; ifade2; ifade3){
    //kodlar...
}
```

Bu söz diziminde;

*ifade1* döngünün en başında bir kereliğine koşulsuz olarak çalıştırılır.
*ifade2* her yinelemenin başında yeniden değerlendirilir.
*ifade3* ise her yinelemenin sonunda çalıştırılır.

Örnek üzerinde ne anlam ifade ettiğini anlayalım.

```
for ($i = 1; $i <= 10; $i++) {
    echo $i;
}
```
*ifade1* döngünün en başında çalışarak $i değişkenine 1 değerini atar.
*ifade2* her yinelemenin başında $i koşulu değerlendirilir eğer koşul sağlanmaz ise döngü devam eder.
*ifade3* her yinelemenin sonunda $i değer 1 artırılarak koşul sağlanmaya çalışılır.

Bu ifadenin ekran çıktısı aşağıda ki gibi olacaktır:
```
12345678910
```
