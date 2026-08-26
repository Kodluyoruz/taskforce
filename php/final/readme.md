### Final

final olarak tanımlanan sınıflar ve methodlar kalıtım yoluyla çoğaltılamaz.

```
<?php

class Bir {}
final class Iki extends Bir {}
class Uc extends Iki {}
```
Sonuç:
```
Fatal error: Class Uc may not inherit from final class (Iki) in C:\MAMP\htdocs\patika\test.php on line 5
```


```
class Bir {

    final public function birTest(){
        echo 'birTest';
    }
}
class Iki extends Bir {
    public function birTest(){
        echo 'ikiTest';
    }
}

```
Sonuç:
```
Fatal error: Cannot override final method Bir::birTest() in C:\MAMP\htdocs\cms-proje\test.php on line 10
```
