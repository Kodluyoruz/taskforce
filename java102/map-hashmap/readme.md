# Map ve HashMap

Map Interface somut sınıflarındandır. HashMap sınıfına, karışık eşleme de denilebilir. Eşleme tablosuna eleman ekleme, çıkartma işlemlerinde ve anahtarı verilen
elemanı tabloda bulma işlemlerinde oldukça etkilidir.

Map Interface’i kullanan sınıflar aşağıdaki metodlara sahiptir;

- clear: Map içinde bulunan bütün değerleri siler.
- containsKey (Object key): Belli bir anahtar daha önceden girilmiş mi sorgular.
- containsValue (Object value):Belli bir obje daha önceden girilmiş mi sorgular.
- get (Object key): Anahtara karşılık gelen objeyi döndürür.
- put (Object key, Object value): Anahtar — değer ikilisini kayıt eder.
- remove (Object key):Belli bir anahtara karşılık gelen değeri siler.
- size: O zaman kadar kayıt edilmiş anahtar — değer ikili sayısını verir.

```java
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
    
        HashMap<String, String> capitalCities = new HashMap<String, String>();

        capitalCities.put("England", "London");
        capitalCities.put("Germany", "Berlin");
        capitalCities.put("Norway", "Oslo");
        capitalCities.put("USA", "Washington DC");
        System.out.println(capitalCities);

        capitalCities.get("England");
        capitalCities.remove("England");
        capitalCities.clear()
        capitalCities.size();

        for (String i : capitalCities.keySet()) {
            System.out.println(i);
        }

        for (String i : capitalCities.values()) {
            System.out.println(i);
        }

        for (String i : capitalCities.keySet()) {
            System.out.println("key: " + i + " value: " + capitalCities.get(i));
        }
    }
}


```