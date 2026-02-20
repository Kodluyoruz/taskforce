# Lambda Expression

Lambda ifadesi ilk kez Java 8'de tanıtıldı. Ana amacı dilin ifade gücünü artırmaktı. Ancak, lambdalara başlamadan önce, Fonksiyonel Interface konusunu anlamamız
gerekir.

## Functional Interface

Function interface, içerisinde sadece bir tane abstract metodu olan interface’dir. Eğer ilgili interface’in türetildiği interface’de abstract metot varsa bu
durumda da functional interface olur.

Functional interface’ler, lambda expression’ların kullanılabilmesi için tanımlanırlar.

Functional interface’ler tanımlanırken, @FunctionalInterface anotasyonu kullanması zorunlu değildir. Bu anotasyon sadece validasyon yapma amacıyla kullanılır.
Eğer anotasyon eklenirse ve birden fazla abstract metot eklenmeye çalışılırsa, bu durumda compile error verecektir.

### Örnek

````java
package java.lang;

@FunctionalInterface
public interface Runnable {
    public abstract void run();
}

````

````java
public class PatikaDev {
    public static void main(String[] args) {
        // Java 8'den öncesi
        Runnable runnable1 = new Runnable() {
            @Override
            public void run() {

                System.out.println("Before 1.8");
            }
        };
        runnable1.run();

        // Java 8'den sonrası
        Runnable runnable2 = () -> System.out.println("1.8");
        runnable2.run();
    }
}

````

## Functional Interface Örneği

````java

@FunctionalInterface
public interface Matematik {
    public abstract int transaction(int a, int b);
}


````

## Eski Kullanım

````java

public class PatikaDev {
    public static void main(String[] args) {
        Matematik toplama = new Matematik() {
            @Override
            public int transaction(int a, int b) {
                return a + b;
            }
        };

        Matematik cikarma = new Matematik() {
            @Override
            public int transaction(int a, int b) {
                return a - b;
            }
        };

        Matematik bolme = new Matematik() {
            @Override
            public int transaction(int a, int b) {
                if (b == 0) {
                    b = 1;
                }
                return a / b;
            }
        };

        Matematik carpma = new Matematik() {
            @Override
            public int transaction(int a, int b) {
                return a * b;
            }
        };


        System.out.println(toplama.transaction(10 , 2));
        System.out.println(cikarma.transaction(10 , 2));
        System.out.println(bolme.transaction(10 , 2));
        System.out.println(carpma.transaction(10 , 2));
    }
}

````

## Lambda Kullanımı

````java

public class PatikaDev {
    public static void main(String[] args) {

        Matematik toplam = (a, b) -> a + b;
        Matematik cikarma = (a, b) -> a - b;
        Matematik carpma = (a, b) -> a * b;
        Matematik bolme = (a, b) -> {
            if (b == 0) {
                b = 1;
            }
            return a / b;
        };

        System.out.println(toplam.transaction(10, 2));
        System.out.println(cikarma.transaction(10, 2));
        System.out.println(carpma.transaction(10, 2));
        System.out.println(bolme.transaction(10, 2));
    }
}

````

## Kaynak
- [Javada Functional Interface ve Lambda Expression](https://metinalniacik.medium.com/javada-functional-interface-ve-lambda-expression-f1f321013052)
